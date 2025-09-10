const svg = document.getElementById('drawing-area');

let isDrawing = false;
let startX = 0;
let startY = 0;
let rect = null;

svg.addEventListener('mousedown', (e) => {
  isDrawing = true;

  const { x, y } = getMousePosition(e);
  startX = x;
  startY = y;

  // Create a new rectangle element
  rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", startX);
  rect.setAttribute("y", startY);
  rect.setAttribute("width", 0);
  rect.setAttribute("height", 0);
  rect.setAttribute("fill", "rgba(0, 128, 255, 0.5)");
  rect.setAttribute("stroke", "#007BFF");
  rect.setAttribute("stroke-width", 2);
  svg.appendChild(rect);
});

svg.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;

  const { x, y } = getMousePosition(e);

  const width = Math.abs(x - startX);
  const height = Math.abs(y - startY);
  const rectX = Math.min(x, startX);
  const rectY = Math.min(y, startY);

  rect.setAttribute("x", rectX);
  rect.setAttribute("y", rectY);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
});

svg.addEventListener('mouseup', () => {
  isDrawing = false;
});

svg.addEventListener('mouseleave', () => {
  isDrawing = false;
});

// Helper to get mouse position relative to SVG
function getMousePosition(evt) {
  const CTM = svg.getScreenCTM();
  return {
    x: (evt.clientX - CTM.e) / CTM.a,
    y: (evt.clientY - CTM.f) / CTM.d
  };
}
