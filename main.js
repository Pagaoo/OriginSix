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

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeader() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

/*Swiper*/
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  allowSlideNext: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSizer: true,
    },
  },
});

/*Scroll Reveal*/
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  #footer .brand, #footer .social`,
  { interval: 100 }
);

/* Back to top button */
const backToTopBtn = document.querySelector(".back-to-top");

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

/*Ativa menu se visivel na tela*/
const sections = document.querySelectorAll("main section[id]");

function activeMenu() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

window.addEventListener("scroll", function () {
  changeHeader();
  backToTop();
});
