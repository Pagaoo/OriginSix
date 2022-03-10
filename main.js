const nav = document.querySelector("#header nav"); //Procura o id Header e a tag nav e seu atributos, como as classes, salvando na const nav. (Seleciona a primeira que encontrar)
const toggle = document.querySelectorAll("nav .toggle"); // Aqui seleciona tudo que foi especificado nos (), então, com mais de um, seleciona eles

//Adiciona a class show a tag nav, que faz o menu aparecer na tela, quando clica no 'X' a class show é retirada da tag nav e volta ao normal
for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll("nav ul li a");
//Ao clique nos links do menu mobile, ira remover a class show da tag nav e redirecionar a página para onde o link clicado leva
for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}
