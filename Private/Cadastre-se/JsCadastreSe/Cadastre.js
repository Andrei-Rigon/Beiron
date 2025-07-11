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


/* Mostrar senha */

function toggleOlho() {

  const input = document.querySelector('#senha');
  const olhoAberto = document.querySelector('#olho-aberto');
  const olhoFechado = document.querySelector('#olho-fechado');

  if (input.type === 'password') {
    input.type = "Text";
    olhoAberto.style.display = "none";
    olhoFechado.style.display = "inline";
  } else {
    input.type = "password";
    olhoAberto.style.display = "inline";
    olhoFechado.style.display = "none";
  }
}


function toggleOlhoc() {

  const inputc = document.querySelector('#confirmarSenha');
  const olhoAberto = document.querySelector('#olho-abertoc');
  const olhoFechado = document.querySelector('#olho-fechadoc');

  if (inputc.type === 'password') {
    inputc.type = "Text";
    olhoAberto.style.display = "none";
    olhoFechado.style.display = "inline";
  } else {
    inputc.type = "password";
    olhoAberto.style.display = "inline";
    olhoFechado.style.display = "none";
  }
}


/* validação inputs */

const form = document.getElementById("fform");
const iinput = document.querySelectorAll("input")
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");


form.addEventListener("submit", (event) => {
  event.preventDefault();


  errorInputUsuario();
  errorInputEmail();
  errorInputSenha();
  errorInputConfirmarSenha();

})


function errorInputUsuario() {
  const usuarioValue = usuario.value.trim();
  const primeiraLeMaiunscula = usuarioValue.charAt(0);

  if (usuarioValue === "") {
    errorInput(usuario, "Preencha o usuário!")
    email.disabled = true;
    confirmarSenha.disabled = true;
    senha.disabled = true;

  } else if (usuarioValue.length < 3 || primeiraLeMaiunscula !== primeiraLeMaiunscula.toUpperCase()) {
    errorInput(usuario, "Deve começar com letra maiúscula e conter mais de 3 caracteres!");
    email.disabled = true;
    confirmarSenha.disabled = true;
    senha.disabled = true;
  } else {
    const formItem = usuario.parentElement;
    formItem.classList = "input-container";
    email.disabled = false;

  }
}

/*Eventos usuário*/

usuario.addEventListener("input", () => {
  const valor = usuario.value.trim();
  const primeiraLeMaiunscula = valor.charAt(0);

  if (valor.length > 3 && primeiraLeMaiunscula === primeiraLeMaiunscula.toUpperCase()) {
    const forItem = usuario.parentElement;
    const textElement = forItem.querySelector("span");

    textElement.innerText = "";
    forItem.classList = "input-container";
    email.disabled = false;
  } else {
    email.disabled = true;

  }

})

usuario.addEventListener("input", errorInputUsuario);
usuario.addEventListener("blur", errorInputUsuario);

/* validação do E-mail */

function errorInputEmail() {
  const emailValue = email.value.trim();
  const validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (emailValue === "") {
    errorInput(email, "Digite um e-mail válido!")
    senha.disabled = true;
    confirmarSenha.disabled = true;
  }
  else if (!validaEmail.test(emailValue)) {
    errorInput(email, "Digite um e-mail válido!");
    senha.disabled = true;
    confirmarSenha.disabled = true;
    return false;
  } else {
    const formItem = email.parentElement;
    formItem.classList = "input-container";
    senha.disabled = false;

  }


}

/*Eventos do E-mail */

email.addEventListener("input", errorInputEmail);
email.addEventListener("blur", errorInputEmail);



/* Validação da Senha */

function errorInputSenha() {
  const senhaValue = senha.value.trim();
  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;

  if (senhaValue === "") {
    errorInput(senha, "Digite uma Senha válido!");
    confirmarSenha.disabled = true;
    return false;
  } else if (!regexSenha.test(senhaValue)) {
    errorInput(senha, "Deve conter uma letra maiúscula, minúscula e um caractere especial!");
    confirmarSenha.disabled = true;
    return false;
  } else {
    const formItem = senha.parentElement;
    formItem.classList = "input-container";
    confirmarSenha.disabled = false;
  }
}

/*Evento Senha*/

senha.addEventListener("input", errorInputSenha);
senha.addEventListener("blur", errorInputSenha);

/* Validação Confirmar Senha */

function errorInputConfirmarSenha() {
  const confirmarSenhaValue = confirmarSenha.value.trim();
  const senhaValue = senha.value.trim();

  if (confirmarSenhaValue === "") {
    errorInput(confirmarSenha, "Confirme a senha!");
  } else if (senhaValue !== confirmarSenhaValue) {
    errorInput(confirmarSenha, "As senhas não coincidem!");
  } else {
    const formItem = confirmarSenha.parentElement;
    formItem.classList = "input-container";
  }
}

/*Evento Confirmar senha*/

confirmarSenha.addEventListener("input", errorInputConfirmarSenha);
confirmarSenha.addEventListener("blur", errorInputConfirmarSenha);


/* função de erroSpna */

function errorInput(input, mensagem) {
  const formItem = input.parentElement;
  const textMensagem = formItem.querySelector("span");

  textMensagem.innerText = mensagem;
  formItem.className = "input-container error-input";
}

/*Focu input */

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