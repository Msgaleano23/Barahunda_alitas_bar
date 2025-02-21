document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const title = section.querySelector("h2");
        const content = section.querySelectorAll(".menu-item");

        // Oculta los elementos de la sección al inicio
        content.forEach(item => item.style.display = "none");

        title.addEventListener("click", function () {
            content.forEach(item => {
                if (item.style.display === "none") {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Mostrar el botón al hacer scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    // Al hacer clic, volver arriba con efecto suave
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("nav ul li a"); // Enlaces del nav
    const sections = document.querySelectorAll("section"); // Todas las secciones

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el salto instantáneo

            // Obtener la sección objetivo desde el href del enlace
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Ocultar todas las secciones antes de mostrar la seleccionada
                sections.forEach(sec => sec.classList.remove("show"));
                targetSection.classList.add("show");

                // Hacer scroll suave hacia la sección
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});