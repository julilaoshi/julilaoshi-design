const canvasEl = document.querySelector("#canvas");
const canvasDesk = document.querySelector(".canvas-desk");
const designApp = document.querySelector("#designApp");
const editorPanel = document.querySelector("#editorPanel");
const panelBubble = document.querySelector("#panelBubble");
const hidePanelBtn = document.querySelector("#hidePanelBtn");
const selectedNameEl = document.querySelector("#selectedName");
const statusText = document.querySelector("#statusText");
const textInput = document.querySelector("#textInput");
const xInput = document.querySelector("#xInput");
const yInput = document.querySelector("#yInput");
const wInput = document.querySelector("#wInput");
const hInput = document.querySelector("#hInput");
const rotationInput = document.querySelector("#rotationInput");
const fontInput = document.querySelector("#fontInput");
const colorInput = document.querySelector("#colorInput");
const fillInput = document.querySelector("#fillInput");
const radiusInput = document.querySelector("#radiusInput");
const lockInput = document.querySelector("#lockInput");
const jsonPreview = document.querySelector("#jsonPreview");
const zoomInput = document.querySelector("#zoomInput");
const exportBtn = document.querySelector("#exportBtn");
const undoBtn = document.querySelector("#undoBtn");
const redoBtn = document.querySelector("#redoBtn");
const duplicateBtn = document.querySelector("#duplicateBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const frontBtn = document.querySelector("#frontBtn");
const backBtn = document.querySelector("#backBtn");
const selectToolBtn = document.querySelector("#selectToolBtn");
const finishBtn = document.querySelector("#finishBtn");
const confirmOverlay = document.querySelector("#confirmOverlay");
const confirmCheck = document.querySelector("#confirmCheck");
const confirmFinishBtn = document.querySelector("#confirmFinishBtn");
const cancelFinishBtn = document.querySelector("#cancelFinishBtn");

let design = null;
let selectedId = null;
let history = [];
let future = [];
let dragState = null;
let resizeState = null;
let isFinal = false;
let canvasPixelWidth = 960;

const cloneData = (value) => JSON.parse(JSON.stringify(value));
const scaleValue = () => canvasPixelWidth / design.canvas.width;
const current = () => design.elements.find((element) => element.id === selectedId);
const maxLayer = () => Math.max(...design.elements.map((element) => element.layer), 0);

async function boot() {
  design = cloneData(window.DEFAULT_OPEN_PENCIL_DESIGN);
  try {
    if (location.protocol !== "file:") {
      const response = await fetch("./design.json");
      design = await response.json();
    }
  } catch (error) {
    console.warn("Using embedded default design because design.json could not be fetched.", error);
  }
  recordHistory();
  renderAll();
  selectElement("headline");
}

function recordHistory() {
  history.push(JSON.stringify(design));
  if (history.length > 60) history.shift();
  future = [];
  updateHistoryButtons();
}

function restoreFrom(serialized) {
  design = JSON.parse(serialized);
  if (selectedId && !current()) selectedId = null;
  renderAll();
}

function updateHistoryButtons() {
  undoBtn.disabled = history.length <= 1;
  redoBtn.disabled = future.length === 0;
}

function renderAll() {
  renderCanvas();
  syncInspector();
  updateHistoryButtons();
}

function setActiveTool(button, message) {
  document.querySelectorAll(".tool-icon").forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
  statusText.textContent = message;
}

function renderCanvas() {
  updateCanvasSize();
  canvasEl.style.background = design.canvas.background;
  canvasEl.innerHTML = "";

  [...design.elements]
    .sort((a, b) => a.layer - b.layer)
    .forEach((element) => {
      const node = createElementNode(element);
      node.dataset.id = element.id;
      node.classList.add("element");
      if (element.id === selectedId) node.classList.add("is-selected");
      if (element.locked) node.classList.add("is-locked");
      applyGeometry(node, element);
      if (!isFinal) {
        if (element.id === selectedId && !element.locked) addResizeHandles(node, element);
        node.addEventListener("pointerdown", (event) => startDrag(event, element));
        node.addEventListener("click", (event) => {
          event.stopPropagation();
          selectElement(element.id);
        });
      }
      canvasEl.appendChild(node);
    });
}

function addResizeHandles(node, element) {
  ["nw", "ne", "sw", "se"].forEach((corner) => {
    const handle = document.createElement("button");
    handle.type = "button";
    handle.className = `resize-handle resize-${corner}`;
    handle.dataset.corner = corner;
    handle.setAttribute("aria-label", `Resize ${element.id} from ${corner}`);
    handle.addEventListener("pointerdown", (event) => startResize(event, element, corner));
    node.appendChild(handle);
  });
}

function updateCanvasSize() {
  const deskStyle = getComputedStyle(canvasDesk);
  const horizontalPadding = parseFloat(deskStyle.paddingLeft) + parseFloat(deskStyle.paddingRight);
  const verticalPadding = parseFloat(deskStyle.paddingTop) + parseFloat(deskStyle.paddingBottom);
  const availableWidth = Math.max(320, canvasDesk.clientWidth - horizontalPadding - 28);
  const availableHeight = Math.max(220, canvasDesk.clientHeight - verticalPadding - 28);
  const baseWidth = Math.min(design.canvas.width, availableWidth, availableHeight * (design.canvas.width / design.canvas.height));
  const zoomFactor = Number(zoomInput.value) / 100;
  canvasPixelWidth = Math.max(320, Math.round(baseWidth * zoomFactor));
  const canvasPixelHeight = Math.round(canvasPixelWidth * (design.canvas.height / design.canvas.width));
  canvasEl.style.width = `${canvasPixelWidth}px`;
  canvasEl.style.height = `${canvasPixelHeight}px`;
}

function createElementNode(element) {
  if (element.type === "text") return createTextNode(element);
  if (element.type === "image") return createImageNode(element);
  if (element.type === "pill") return createPillNode(element);
  if (element.type === "mark") return createMarkNode(element);
  return createShapeNode(element);
}

function createTextNode(element) {
  const node = document.createElement("div");
  node.className = "text-element";
  node.textContent = element.text;
  applyTextStyle(node, element);
  return node;
}

function createImageNode(element) {
  const node = document.createElement("img");
  const scale = scaleValue();
  node.className = "image-element";
  node.src = element.src;
  node.alt = element.alt || element.id;
  node.draggable = false;
  node.style.borderRadius = `${(element.style?.radius || 0) * scale}px`;
  node.style.objectFit = element.style?.objectFit || "cover";
  node.style.objectPosition = element.style?.objectPosition || "center center";
  node.style.opacity = element.style?.opacity ?? 1;
  node.style.filter = element.style?.filter || "none";
  return node;
}

function createPillNode(element) {
  const node = document.createElement("div");
  const scale = scaleValue();
  node.className = "pill-element";
  node.textContent = element.text;
  node.style.background = element.style.fill;
  node.style.color = element.style.color;
  node.style.borderRadius = `${(element.style.radius || 0) * scale}px`;
  node.style.fontSize = `${(element.style.fontSize || 16) * scale}px`;
  node.style.fontWeight = element.style.fontWeight || 800;
  return node;
}

function createShapeNode(element) {
  const node = document.createElement("div");
  const scale = scaleValue();
  node.className = "shape-element";
  node.style.background = element.style.fill;
  node.style.borderRadius = `${(element.style.radius || 0) * scale}px`;
  node.style.boxShadow = element.style.shadow || "none";
  return node;
}

function createMarkNode(element) {
  const node = document.createElement("div");
  node.className = "mark-element";
  const fill = element.style.fill || "#2f6f4e";
  const accent = element.style.accent || "#72b7c9";
  const secondary = element.style.secondary || "#a33b57";
  const paper = element.style.paper || "#fffdf7";
  node.innerHTML = `
    <svg viewBox="0 0 300 300" role="img" aria-label="Abstract Open Pencil mark">
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="#17211c" flood-opacity="0.22"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="114" fill="${accent}" opacity="0.18"/>
      <rect x="70" y="68" width="160" height="164" rx="30" fill="${paper}" filter="url(#softShadow)"/>
      <path d="M103 98 H208" stroke="${fill}" stroke-width="16" stroke-linecap="round"/>
      <path d="M103 142 H196" stroke="${secondary}" stroke-width="16" stroke-linecap="round"/>
      <path d="M103 186 H168" stroke="${accent}" stroke-width="16" stroke-linecap="round"/>
      <path d="M212 220 L246 246 L231 181 Z" fill="${fill}"/>
      <path d="M231 181 L246 246 L266 160 Z" fill="${secondary}"/>
      <circle cx="214" cy="86" r="26" fill="${accent}"/>
      <circle cx="214" cy="86" r="9" fill="${paper}"/>
    </svg>
  `;
  return node;
}

function applyTextStyle(node, element) {
  const scale = scaleValue();
  node.style.fontSize = `${(element.style.fontSize || 18) * scale}px`;
  node.style.fontWeight = element.style.fontWeight || 500;
  node.style.lineHeight = element.style.lineHeight || 1.35;
  node.style.color = element.style.color || "#17211c";
  node.style.fontFamily = element.style.fontFamily || design.tokens.fonts.body;
  node.style.letterSpacing = "0";
}

function applyGeometry(node, element) {
  const scale = scaleValue();
  node.style.left = `${element.x * scale}px`;
  node.style.top = `${element.y * scale}px`;
  node.style.width = `${element.width * scale}px`;
  node.style.height = `${element.height * scale}px`;
  node.style.zIndex = element.layer;
  node.style.transform = `rotate(${element.rotation || 0}deg)`;
  node.style.transformOrigin = "center center";
}

function selectElement(id) {
  if (isFinal) return;
  selectedId = id;
  renderAll();
}

function clearSelection() {
  if (isFinal) return;
  selectedId = null;
  renderAll();
}

function syncInspector() {
  const element = current();
  const hasSelection = Boolean(element);
  selectedNameEl.value = element?.id || "None";
  statusText.textContent = element ? `Selected ${element.id}` : "Pick an object.";

  const controls = [textInput, xInput, yInput, wInput, hInput, rotationInput, fontInput, colorInput, fillInput, radiusInput, lockInput];
  controls.forEach((input) => {
    input.disabled = !hasSelection;
  });

  if (!element) {
    textInput.value = "";
    [xInput, yInput, wInput, hInput, rotationInput, fontInput, colorInput, fillInput, radiusInput].forEach((input) => {
      input.value = "";
    });
    lockInput.checked = false;
    jsonPreview.textContent = "";
    return;
  }

  const locked = Boolean(element.locked);
  textInput.disabled = !("text" in element) || locked;
  textInput.value = element.text || "";
  xInput.disabled = locked;
  yInput.disabled = locked;
  wInput.disabled = locked;
  hInput.disabled = locked;
  rotationInput.disabled = locked;
  xInput.value = Math.round(element.x);
  yInput.value = Math.round(element.y);
  wInput.value = Math.round(element.width);
  hInput.value = Math.round(element.height);
  rotationInput.value = Math.round(element.rotation || 0);
  fontInput.disabled = !element.style?.fontSize || locked;
  fontInput.value = element.style?.fontSize || "";
  colorInput.disabled = !element.style?.color || locked;
  colorInput.value = normalizeColor(element.style?.color || "#17211c");
  fillInput.disabled = !element.style?.fill || locked;
  fillInput.value = normalizeColor(element.style?.fill || "#fffdf7");
  radiusInput.disabled = !("radius" in (element.style || {})) || locked;
  radiusInput.value = element.style?.radius || 0;
  lockInput.disabled = false;
  lockInput.checked = locked;
  jsonPreview.textContent = JSON.stringify(element, null, 2);
}

function normalizeColor(color) {
  if (!color || color.startsWith("#")) return color || "#17211c";
  return "#17211c";
}

function patchSelected(patch, save = true) {
  if (isFinal) return;
  const element = current();
  if (!element || element.locked) return;
  patch(element);
  if (save) recordHistory();
  renderAll();
}

function patchElement(id, patch, save = true) {
  if (isFinal) return;
  const element = design.elements.find((item) => item.id === id);
  if (!element) return;
  patch(element);
  if (save) recordHistory();
  renderAll();
}

function nudge(action) {
  const step = design.tokens.spacing.step;
  patchSelected((element) => {
    if (action === "left") element.x -= step;
    if (action === "right") element.x += step;
    if (action === "up") element.y -= step;
    if (action === "down") element.y += step;
  });
}

function alignSelected(action) {
  patchSelected((element) => {
    if (action === "left") element.x = 80;
    if (action === "center") element.x = (design.canvas.width - element.width) / 2;
    if (action === "right") element.x = design.canvas.width - element.width - 80;
    if (action === "top") element.y = 80;
    if (action === "middle") element.y = (design.canvas.height - element.height) / 2;
    if (action === "bottom") element.y = design.canvas.height - element.height - 80;
  });
}

function createNewElement(type) {
  if (isFinal) return;
  setActiveTool(selectToolBtn, "Select tool active.");
  const id = `${type}_${Date.now().toString(36).slice(-5)}`;
  const base = {
    id,
    type,
    x: 130,
    y: 120,
    width: 280,
    height: 84,
    locked: false,
    layer: maxLayer() + 1
  };

  if (type === "text") {
    design.elements.push({
      ...base,
      text: "New text",
      style: {
        fontSize: 28,
        fontWeight: 800,
        lineHeight: 1.18,
        color: "#17211c",
        fontFamily: design.tokens.fonts.body
      }
    });
  }

  if (type === "pill") {
    design.elements.push({
      ...base,
      width: 138,
      height: 42,
      text: "New tag",
      style: {
        fill: "#e6f3f6",
        color: "#245f6f",
        fontSize: 16,
        fontWeight: 800,
        radius: 999
      }
    });
  }

  if (type === "shape") {
    design.elements.push({
      ...base,
      width: 300,
      height: 130,
      shape: "roundedRect",
      style: {
        fill: "#fffdf7",
        radius: 8,
        shadow: "0 14px 34px rgba(23, 33, 28, 0.12)"
      }
    });
  }

  selectedId = id;
  recordHistory();
  renderAll();
}

function duplicateSelected() {
  if (isFinal) return;
  const element = current();
  if (!element) return;
  const copy = JSON.parse(JSON.stringify(element));
  copy.id = `${element.id}_copy`;
  while (design.elements.some((item) => item.id === copy.id)) copy.id = `${copy.id}_2`;
  copy.x += 28;
  copy.y += 28;
  copy.layer = maxLayer() + 1;
  copy.locked = false;
  design.elements.push(copy);
  selectedId = copy.id;
  recordHistory();
  renderAll();
}

function deleteSelected() {
  if (isFinal) return;
  const element = current();
  if (!element || element.locked) return;
  design.elements = design.elements.filter((item) => item.id !== selectedId);
  selectedId = null;
  recordHistory();
  renderAll();
}

function moveLayer(delta) {
  patchSelected((element) => {
    element.layer += delta;
    if (element.layer < 1) element.layer = 1;
  });
}

function startDrag(event, element) {
  if (isFinal) return;
  if (event.target.classList.contains("resize-handle")) return;
  event.stopPropagation();
  selectElement(element.id);
  if (element.locked) return;
  dragState = {
    id: element.id,
    startX: event.clientX,
    startY: event.clientY,
    originalX: element.x,
    originalY: element.y
  };
  window.addEventListener("pointermove", dragMove);
  window.addEventListener("pointerup", dragEnd, { once: true });
}

function dragMove(event) {
  if (!dragState) return;
  const scale = scaleValue();
  patchElement(
    dragState.id,
    (element) => {
      element.x = Math.round(dragState.originalX + (event.clientX - dragState.startX) / scale);
      element.y = Math.round(dragState.originalY + (event.clientY - dragState.startY) / scale);
    },
    false
  );
}

function dragEnd() {
  if (dragState) recordHistory();
  dragState = null;
  window.removeEventListener("pointermove", dragMove);
}

function startResize(event, element, corner) {
  if (isFinal || element.locked) return;
  event.preventDefault();
  event.stopPropagation();
  selectElement(element.id);
  resizeState = {
    id: element.id,
    corner,
    startX: event.clientX,
    startY: event.clientY,
    originalX: element.x,
    originalY: element.y,
    originalWidth: element.width,
    originalHeight: element.height
  };
  window.addEventListener("pointermove", resizeMove);
  window.addEventListener("pointerup", resizeEnd, { once: true });
}

function resizeMove(event) {
  if (!resizeState) return;
  const scale = scaleValue();
  const dx = Math.round((event.clientX - resizeState.startX) / scale);
  const dy = Math.round((event.clientY - resizeState.startY) / scale);
  patchElement(
    resizeState.id,
    (element) => {
      let nextX = resizeState.originalX;
      let nextY = resizeState.originalY;
      let nextWidth = resizeState.originalWidth;
      let nextHeight = resizeState.originalHeight;

      if (resizeState.corner.includes("e")) nextWidth = resizeState.originalWidth + dx;
      if (resizeState.corner.includes("s")) nextHeight = resizeState.originalHeight + dy;
      if (resizeState.corner.includes("w")) {
        nextX = resizeState.originalX + dx;
        nextWidth = resizeState.originalWidth - dx;
      }
      if (resizeState.corner.includes("n")) {
        nextY = resizeState.originalY + dy;
        nextHeight = resizeState.originalHeight - dy;
      }

      if (nextWidth < 24) {
        if (resizeState.corner.includes("w")) nextX -= 24 - nextWidth;
        nextWidth = 24;
      }
      if (nextHeight < 24) {
        if (resizeState.corner.includes("n")) nextY -= 24 - nextHeight;
        nextHeight = 24;
      }

      element.x = nextX;
      element.y = nextY;
      element.width = nextWidth;
      element.height = nextHeight;
    },
    false
  );
}

function resizeEnd() {
  if (resizeState) recordHistory();
  resizeState = null;
  window.removeEventListener("pointermove", resizeMove);
}

function undo() {
  if (history.length <= 1) return;
  future.push(history.pop());
  restoreFrom(history[history.length - 1]);
}

function redo() {
  if (!future.length) return;
  const next = future.pop();
  history.push(next);
  restoreFrom(next);
}

textInput.addEventListener("change", () => {
  patchSelected((element) => {
    element.text = textInput.value;
  });
});

xInput.addEventListener("change", () => patchSelected((element) => { element.x = Number(xInput.value); }));
yInput.addEventListener("change", () => patchSelected((element) => { element.y = Number(yInput.value); }));
wInput.addEventListener("change", () => patchSelected((element) => { element.width = Math.max(12, Number(wInput.value)); }));
hInput.addEventListener("change", () => patchSelected((element) => { element.height = Math.max(12, Number(hInput.value)); }));
rotationInput.addEventListener("change", () => patchSelected((element) => { element.rotation = Number(rotationInput.value); }));
fontInput.addEventListener("change", () => patchSelected((element) => { element.style.fontSize = Number(fontInput.value); }));
colorInput.addEventListener("change", () => patchSelected((element) => { element.style.color = colorInput.value; }));
fillInput.addEventListener("change", () => patchSelected((element) => { element.style.fill = fillInput.value; }));
radiusInput.addEventListener("change", () => patchSelected((element) => { element.style.radius = Number(radiusInput.value); }));

lockInput.addEventListener("change", () => {
  const element = current();
  if (!element) return;
  element.locked = lockInput.checked;
  recordHistory();
  renderAll();
});

document.querySelectorAll(".nudge-pad button").forEach((button) => {
  button.addEventListener("click", () => nudge(button.dataset.action));
});

document.querySelectorAll("[data-align]").forEach((button) => {
  button.addEventListener("click", () => alignSelected(button.dataset.align));
});

document.querySelectorAll("[data-create]").forEach((button) => {
  button.addEventListener("click", () => createNewElement(button.dataset.create));
});

selectToolBtn.addEventListener("click", () => {
  setActiveTool(selectToolBtn, "Select tool active.");
});

frontBtn.addEventListener("click", () => moveLayer(1));
backBtn.addEventListener("click", () => moveLayer(-1));
duplicateBtn.addEventListener("click", duplicateSelected);
deleteBtn.addEventListener("click", deleteSelected);
undoBtn.addEventListener("click", undo);
redoBtn.addEventListener("click", redo);

zoomInput.addEventListener("input", () => {
  renderAll();
});

canvasEl.addEventListener("click", clearSelection);

window.addEventListener("resize", () => {
  renderAll();
});

exportBtn.addEventListener("click", () => {
  const html = buildExportHtml();
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "open-pencil-export.html";
  link.click();
  URL.revokeObjectURL(url);
});

hidePanelBtn.addEventListener("click", () => {
  designApp.classList.add("is-panel-hidden");
  requestAnimationFrame(renderAll);
});

panelBubble.addEventListener("click", () => {
  designApp.classList.remove("is-panel-hidden");
  requestAnimationFrame(renderAll);
});

finishBtn.addEventListener("click", () => {
  confirmCheck.checked = false;
  confirmFinishBtn.disabled = true;
  confirmOverlay.hidden = false;
});

cancelFinishBtn.addEventListener("click", () => {
  confirmOverlay.hidden = true;
});

confirmCheck.addEventListener("change", () => {
  confirmFinishBtn.disabled = !confirmCheck.checked;
});

confirmFinishBtn.addEventListener("click", () => {
  if (!confirmCheck.checked) return;
  enterFinalMode();
});

function enterFinalMode() {
  isFinal = true;
  selectedId = null;
  confirmOverlay.hidden = true;
  designApp.classList.remove("is-panel-hidden");
  designApp.classList.add("is-final");
  renderAll();
}

function buildExportHtml() {
  const wasFinal = isFinal;
  const previousSelected = selectedId;
  isFinal = true;
  selectedId = null;
  renderCanvas();
  const clonedCanvas = canvasEl.cloneNode(true);
  clonedCanvas.querySelectorAll(".is-selected").forEach((node) => node.classList.remove("is-selected"));
  const clonedDesign = JSON.stringify(design, null, 2).replace(/</g, "\\u003c");
  isFinal = wasFinal;
  selectedId = previousSelected;
  renderAll();
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Open Pencil Export</title>
<style>
${exportCss()}
</style>
</head>
<body>
<main class="design-app is-final">
  <section class="stage-wrap">
    <div class="canvas-desk"><div class="canvas-frame">${clonedCanvas.outerHTML}</div></div>
    <p class="final-hint">Need changes later? Ask Codex to reopen Open Pencil Web edit mode.</p>
  </section>
</main>
<script type="application/json" id="design-data">${clonedDesign}</script>
</body>
</html>`;
}

function exportCss() {
  return `*{box-sizing:border-box}body{margin:0;min-height:100vh;background:#eef3ef;color:#17211c;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.stage-wrap{min-height:100vh;display:grid;grid-template-rows:minmax(0,1fr) auto}.canvas-desk{display:grid;place-items:center;min-height:0;padding:24px;overflow:auto;background:linear-gradient(45deg,rgba(23,33,28,.04) 25%,transparent 25%),linear-gradient(-45deg,rgba(23,33,28,.04) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(23,33,28,.04) 75%),linear-gradient(-45deg,transparent 75%,rgba(23,33,28,.04) 75%),#dfe9e5;background-position:0 0,0 10px,10px -10px,-10px 0;background-size:20px 20px}.canvas-frame{padding:14px;border-radius:8px;background:rgba(255,255,255,.54);box-shadow:inset 0 0 0 1px rgba(23,33,28,.08)}.canvas{position:relative;overflow:hidden;border:1px solid rgba(23,33,28,.12);border-radius:8px;box-shadow:0 18px 50px rgba(23,33,28,.14)}.element{position:absolute;border:0;outline:0;user-select:none}.text-element{white-space:pre-wrap;overflow-wrap:anywhere}.pill-element{display:flex;align-items:center;justify-content:center;white-space:nowrap}.shape-element{display:block}.image-element{display:block;width:100%;height:100%;pointer-events:none}.mark-element svg{width:100%;height:100%;display:block}.final-hint{margin:0;padding:12px 18px;border-top:1px solid rgba(23,33,28,.12);background:rgba(255,253,247,.88);color:#607066;font-size:13px;font-weight:800;text-align:center}`;
}

boot();
