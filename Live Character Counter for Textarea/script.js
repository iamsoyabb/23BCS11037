const textarea = document.getElementById('text-input');
const counter = document.getElementById('char-count');

textarea.addEventListener('input', () => {
  const charLength = textarea.value.length;
  counter.textContent = `Characters: ${charLength}`;
});
