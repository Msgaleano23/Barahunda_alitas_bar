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
