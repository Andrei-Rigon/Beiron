/* Menu de navegação*/

document.addEventListener("DOMContentLoaded", function () {
  // Botão para expandir menu
  const btnExpa = document.querySelector("#btn-expan");
  const menu = document.querySelector(".menu-lateral");

  if (btnExpa && menu) {
    btnExpa.addEventListener("click", function () {
      menu.classList.toggle("expandir");
    });
  }

  // Slides
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

/*Botão-olho*/

function toggleOlho() {
  const input = document.querySelector("#senha");
  const olhoAberto = document.querySelector("#olho-aberto");
  const olhoFechado = document.querySelector("#olho-fechado");

  if (input.type === "password") {
    input.type = "Text";
    olhoAberto.style.display = "none";
    olhoFechado.style.display = "inline";
  } else {
    input.type = "password";
    olhoAberto.style.display = "inline";
    olhoFechado.style.display = "none";
  }
}

/* Validações */

function errorValidation(event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const errorMensagem = document.querySelector(".validacao");

  if (usuario === "adm" && senha === "1234") {
    alert("Login bem-sucedido!");
    errorMensagem.classList.remove("ativo", "saida");
    errorMensagem.style.display = "none";
  } else {
    errorMensagem.style.display = "block";


    setTimeout(() => {
      errorMensagem.classList.toggle("ativo", false);
      errorMensagem.classList.toggle("saida", true);


      setTimeout(() => {
        errorMensagem.style.display = "none";
        errorMensagem.classList.remove("saida");
      }, 3000);
    }, 3000);
  }
}

/* focus input */

const iinput = document.querySelectorAll("input")

iinput.forEach((input, index) => {
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const nextInput = iinput[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  })
})