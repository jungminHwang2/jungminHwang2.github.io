const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");

if (saved) {
  root.dataset.theme = saved;
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
  root.dataset.theme = "light";
}

function renderIcon() {
  toggle.textContent = root.dataset.theme === "light" ? "☾" : "☀︎";
}

toggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", root.dataset.theme);
  renderIcon();
});

document.getElementById("year").textContent = new Date().getFullYear();
renderIcon();
