import Swiper from "./swiper.min.js";

window.onload = () => {
  const menuLinks = document.querySelectorAll(
    ".header__menu__link, .footer__menu__link"
  );
  const helpbutton = document.querySelector(".header__button");

  new Swiper("#slider", {
    autoplay: true,
    loop: true,
    pagination: {
      bulletClass: "tree__slider__pagination__item",
      bulletActiveClass: "tree__slider__pagination__item--active",
      clickable: true,
      el: "#slider-pagination",
    },
    slidesPerView: 1,
    spaceBetween: 0,
  });

  helpbutton.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("footer").scrollIntoView({
      behavior: "smooth",
    });
  });

  for (const link of menuLinks) {
    const sectionID = link.getAttribute("href").replace("#", "");
    const section = document.getElementById(sectionID);

    link.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
};
