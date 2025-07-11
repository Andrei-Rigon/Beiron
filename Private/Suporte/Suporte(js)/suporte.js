/* Menu de navegação*/

document.addEventListener("DOMContentLoaded", function () {

    const btnExpa = document.querySelector("#btn-expan");
    const menu = document.querySelector(".menu-lateral");

    if (btnExpa && menu) {
        btnExpa.addEventListener("click", function () {
            menu.classList.toggle("expandir");
        });
    }

    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function mudarSlide(novoIndex) {
        if (slides.length === 0) return;

        slides[index].classList.remove("ativo");
        index = (novoIndex + slides.length) % slides.length;
        slides[index].classList.add("ativo");
    }

    // Botões de controle
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => mudarSlide(index + 1));
        prevBtn.addEventListener("click", () => mudarSlide(index - 1));

        setInterval(() => mudarSlide(index + 1), 3000);
    }
});