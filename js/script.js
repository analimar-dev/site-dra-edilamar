const menu = document.querySelector(".menu");

const botao = document.querySelector(".menu-mobile");

botao.addEventListener("click", () => {

    menu.classList.toggle("ativo");

});