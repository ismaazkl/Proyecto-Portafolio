
const display = document.getElementById("resultado");
const botones = document.querySelectorAll(".teclado button");

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    if(btn.id === "clear") display.value = "";
    else if(btn.textContent === "=") {
      try { display.value = eval(display.value) } 
      catch { display.value = "Error" }
    } else display.value += btn.textContent;
  });
});
