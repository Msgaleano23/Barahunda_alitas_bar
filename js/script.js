// Mostrar y ocultar pantalla de inicio
const landing = document.getElementById("home-landing");
const backHomeBtn = document.getElementById("backHomeBtn");

// Cambiar secciones con botones iniciales
const slideButtons = document.querySelectorAll(".landing-buttons button");
const sections = document.querySelectorAll(".menu-page");

slideButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    landing.style.display = "none";
    backHomeBtn.style.display = "block";
    showSection(index);
  });
});

// Botón para volver al inicio
backHomeBtn.addEventListener("click", () => {
  landing.style.display = "flex";
  backHomeBtn.style.display = "none";
});

// Mostrar solo una sección a la vez
function showSection(index) {
  sections.forEach((section, i) => {
    section.style.display = i === index ? "block" : "none";
  });
}

// Al cargar, ocultar todas las secciones
document.addEventListener("DOMContentLoaded", () => {
  sections.forEach(section => section.style.display = "none");



  cocktailItems.forEach((item, index) => {
    const desc = cocktailDescriptions[index];
    if (desc) {
      const descElem = document.createElement("div");
      descElem.textContent = desc;
      descElem.style.fontSize = "13px";
      descElem.style.color = "#ccc";
      descElem.style.marginTop = "4px";
      item.insertBefore(descElem, item.children[1]);
    }
  });
});



