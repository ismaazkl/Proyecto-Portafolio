document.addEventListener("DOMContentLoaded", () => {
  const diasContainer = document.getElementById("dias");
  const mesAnio = document.getElementById("mes-anio");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const modal = document.getElementById("modal");
  const eventoInput = document.getElementById("evento");
  const guardar = document.getElementById("guardar");
  const cerrar = document.getElementById("cerrar");

  let fecha = new Date();
  let eventos = JSON.parse(localStorage.getItem("eventos")) || {};

  function renderCalendario() {
    diasContainer.innerHTML = "";
    const mes = fecha.getMonth();
    const anio = fecha.getFullYear();
    const primerDia = new Date(anio, mes, 1).getDay();
    const diasMes = new Date(anio, mes + 1, 0).getDate();

    mesAnio.textContent = fecha.toLocaleDateString("es-ES", {
      month: "long",
      year: "numeric",
    });

    for (let i = 0; i < primerDia; i++) {
      const vacio = document.createElement("span");
      diasContainer.appendChild(vacio);
    }

    for (let dia = 1; dia <= diasMes; dia++) {
      const span = document.createElement("span");
      span.textContent = dia;
      const key = `${anio}-${mes + 1}-${dia}`;
      if (eventos[key]) span.classList.add("evento");
      span.addEventListener("click", () => abrirModal(key));
      diasContainer.appendChild(span);
    }
  }

  function abrirModal(key) {
    modal.style.display = "flex";
    guardar.onclick = () => {
      const texto = eventoInput.value.trim();
      if (texto) {
        eventos[key] = texto;
        localStorage.setItem("eventos", JSON.stringify(eventos));
      }
      eventoInput.value = "";
      modal.style.display = "none";
      renderCalendario();
    };
  }

  cerrar.addEventListener("click", () => (modal.style.display = "none"));
  prev.addEventListener("click", () => {
    fecha.setMonth(fecha.getMonth() - 1);
    renderCalendario();
  });
  next.addEventListener("click", () => {
    fecha.setMonth(fecha.getMonth() + 1);
    renderCalendario();
  });

  renderCalendario();
});
