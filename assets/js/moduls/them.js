// theme.js
function setTheme(mode) {
  document.body.setAttribute('data-theme', mode);
}

export function toggleTheme() {
  const current = document.body.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

