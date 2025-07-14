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
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Botón para volver al inicio
backHomeBtn.addEventListener("click", () => {
  landing.style.display = "flex";
  backHomeBtn.style.display = "none";
  sections.forEach(section => section.style.display = "none");
  window.scrollTo({ top: 0, behavior: "smooth" });
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
});
