const input = document.getElementById("tareaInput");
const lista = document.getElementById("listaTareas");
const btnAgregar = document.getElementById("agregarTarea");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function renderTareas() {
  lista.innerHTML = "";
  tareas.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t;
    const del = document.createElement("button");
    del.textContent = "❌";
    del.onclick = () => { tareas.splice(i,1); guardarTareas(); };
    li.appendChild(del);
    lista.appendChild(li);
  });
}

function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
  renderTareas();
}

btnAgregar.onclick = () => {
  const val = input.value.trim();
  if(val) { tareas.push(val); guardarTareas(); input.value = ""; }
}

renderTareas();
