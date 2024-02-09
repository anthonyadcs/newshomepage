/** VARIÁVEIS GLOBAIS */
const body = document.querySelector("body");
const container = document.querySelector(".container");
const header = document.querySelector("header");
const headerNav = document.querySelector("header nav");
const mainImg = document.querySelector(".main-img-img");
const menuMobile = document.querySelector(".menu-mobile");
const menuIcon = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".close-menu");


/*ESCUTADOR DE EVENTO NO WINDOW, ONDE É DEFINIDO QUAL IMAGEM SERÁ UTILIZADA DE ACORDO COM O TAMANHO DA TELA DO DISPOSITIVO USADO.*/
window.addEventListener("resize", function (e) {
  e.preventDefault();

  if (window.matchMedia("(min-width: 800px)").matches) {
    mainImg.src = "./assets/images/image-web-3-desktop.jpg";
    header.appendChild(headerNav);
    menuIcon.remove();
  } else {
    mainImg.src = "./assets/images/image-web-3-mobile.jpg";
    headerNav.remove();
    header.appendChild(menuIcon);
  }
});

/* ESCUTADOR DE EVENTOS NO ICONE DE MENU QUANDO O USUÁRIO ESTÁ UTILIZANDO */
menuIcon.addEventListener("click", function (e) {
  e.preventDefault();
  container.style.opacity = 0.3;
  menuMobile.style.display = "block";
});

menuClose.addEventListener("click", function (e) {
  container.style.opacity = "initial";
  menuMobile.style.display = "None";
});
