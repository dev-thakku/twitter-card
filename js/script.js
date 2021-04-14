let body = document.body;
let btn = document.getElementById("theme-btn");
let icon = document.getElementById("icon");

btn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.add("dark");
    body.classList.remove("light");
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  } else if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
  }
});

const themeToggler = () => {
  body.classList.add("dark");
  body.classList.remove("light");
};
