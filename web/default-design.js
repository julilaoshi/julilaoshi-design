window.DEFAULT_OPEN_PENCIL_DESIGN = {
  "canvas": {
    "width": 1280,
    "height": 720,
    "background": "#f7f4ec",
    "intent": "open-pencil-web-starter"
  },
  "tokens": {
    "colors": {
      "ink": "#17211c",
      "leaf": "#2f6f4e",
      "berry": "#a33b57",
      "sky": "#72b7c9",
      "paper": "#fffdf7",
      "shadow": "rgba(23, 33, 28, 0.18)"
    },
    "fonts": {
      "display": "Georgia, 'Times New Roman', serif",
      "body": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    "radius": {
      "card": 8,
      "pill": 999
    },
    "spacing": {
      "step": 8
    },
    "shadows": {
      "soft": "0 18px 50px rgba(23, 33, 28, 0.16)"
    }
  },
  "constraints": {
    "safeAreas": [
      { "x": 48, "y": 48, "width": 1184, "height": 624 }
    ],
    "alignmentAnchors": [
      { "id": "left_main", "x": 86 },
      { "id": "right_panel", "x": 800 },
      { "id": "baseline", "y": 606 }
    ],
    "protectedElements": [],
    "minFontSize": 12,
    "maxTextLines": {
      "headline": 2,
      "intro": 5
    }
  },
  "elements": [
    {
      "id": "hero_card",
      "type": "shape",
      "shape": "roundedRect",
      "x": 56,
      "y": 48,
      "width": 1168,
      "height": 624,
      "style": {
        "fill": "#fffdf7",
        "radius": 8,
        "shadow": "0 18px 50px rgba(23, 33, 28, 0.16)"
      },
      "locked": true,
      "layer": 1
    },
    {
      "id": "eyebrow",
      "type": "text",
      "text": "OPEN PENCIL WEB",
      "x": 88,
      "y": 96,
      "width": 420,
      "height": 28,
      "style": {
        "fontSize": 14,
        "fontWeight": 800,
        "letterSpacing": 0,
        "color": "#2f6f4e",
        "fontFamily": "Inter, ui-sans-serif, system-ui"
      },
      "locked": false,
      "layer": 10
    },
    {
      "id": "headline",
      "type": "text",
      "text": "Untitled layout,\nready to edit.",
      "x": 84,
      "y": 138,
      "width": 690,
      "height": 172,
      "style": {
        "fontSize": 58,
        "fontWeight": 800,
        "lineHeight": 1.08,
        "color": "#17211c",
        "fontFamily": "Georgia, 'Times New Roman', serif"
      },
      "locked": false,
      "layer": 12
    },
    {
      "id": "intro",
      "type": "text",
      "text": "Select any object, adjust it in the right panel, then export a clean HTML snapshot.",
      "x": 90,
      "y": 344,
      "width": 610,
      "height": 100,
      "style": {
        "fontSize": 20,
        "fontWeight": 500,
        "lineHeight": 1.58,
        "color": "#33423a",
        "fontFamily": "Inter, ui-sans-serif, system-ui"
      },
      "locked": false,
      "layer": 11
    },
    {
      "id": "tag_one",
      "type": "pill",
      "text": "Text",
      "x": 90,
      "y": 482,
      "width": 154,
      "height": 42,
      "style": {
        "fill": "#e7f1ee",
        "color": "#1e5740",
        "fontSize": 16,
        "fontWeight": 800,
        "radius": 999
      },
      "locked": false,
      "layer": 14
    },
    {
      "id": "tag_two",
      "type": "pill",
      "text": "Frame",
      "x": 260,
      "y": 482,
      "width": 126,
      "height": 42,
      "style": {
        "fill": "#f3e8ee",
        "color": "#8a2945",
        "fontSize": 16,
        "fontWeight": 800,
        "radius": 999
      },
      "locked": false,
      "layer": 14
    },
    {
      "id": "tag_three",
      "type": "pill",
      "text": "Export",
      "x": 402,
      "y": 482,
      "width": 146,
      "height": 42,
      "style": {
        "fill": "#e6f3f6",
        "color": "#245f6f",
        "fontSize": 16,
        "fontWeight": 800,
        "radius": 999
      },
      "locked": false,
      "layer": 14
    },
    {
      "id": "quote",
      "type": "text",
      "text": "Starter template: small, free, and easy to inspect.",
      "x": 90,
      "y": 572,
      "width": 630,
      "height": 38,
      "style": {
        "fontSize": 18,
        "fontWeight": 700,
        "lineHeight": 1.35,
        "color": "#a33b57",
        "fontFamily": "Inter, ui-sans-serif, system-ui"
      },
      "locked": false,
      "layer": 11
    },
    {
      "id": "open_pencil_mark",
      "type": "mark",
      "x": 806,
      "y": 118,
      "width": 286,
      "height": 286,
      "rotation": 0,
      "style": {
        "fill": "#2f6f4e",
        "accent": "#72b7c9",
        "secondary": "#a33b57",
        "paper": "#fffdf7"
      },
      "locked": false,
      "layer": 20
    },
    {
      "id": "stat_card",
      "type": "shape",
      "shape": "roundedRect",
      "x": 780,
      "y": 456,
      "width": 340,
      "height": 116,
      "style": {
        "fill": "#17211c",
        "radius": 8,
        "shadow": "0 18px 44px rgba(23, 33, 28, 0.22)"
      },
      "locked": true,
      "layer": 8
    },
    {
      "id": "stat_text",
      "type": "text",
      "text": "Version 2.0\nStarter Editor",
      "x": 806,
      "y": 482,
      "width": 286,
      "height": 62,
      "style": {
        "fontSize": 22,
        "fontWeight": 800,
        "lineHeight": 1.38,
        "color": "#fffdf7",
        "fontFamily": "Inter, ui-sans-serif, system-ui"
      },
      "locked": false,
      "layer": 21
    }
  ],
  "exports": ["html"]
};
