
const themeToggle = document.getElementById("themeIcon");
const body = document.body;
const themeKey = "@openMusic:theme";

function applyTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark-mode");
    localStorage.setItem(themeKey, "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem(themeKey, "light");
  }
}

const savedTheme = localStorage.getItem(themeKey);
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme("light"); 
}


themeToggle.addEventListener("click", () => {
  const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});
