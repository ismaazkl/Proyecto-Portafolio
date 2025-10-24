// /public/modo.js
const toggle = document.getElementById("modo-toggle");
const body = document.body;

if (localStorage.getItem("modo") === "light") {
  body.classList.add("light");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    toggle.textContent = "☀️";
    localStorage.setItem("modo", "light");
  } else {
    toggle.textContent = "🌙";
    localStorage.setItem("modo", "dark");
  }
});
