window.onload = function () {
  new Swiper('.swiper', {
    loop: false,
    autoplay: false,
    // width: 250,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const menuLinks = document.querySelectorAll(".header__menu__link, .footer__menu__link");
  const helpbutton = document.querySelector(".header__button");

  helpbutton.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("footer").scrollIntoView(
      {
        behavior: "smooth",
      }
    )
  }
  )

  for (const link of menuLinks) {
    // это айдишник блока
    const sectionID = link.getAttribute("href").replace("#", "");
    const section = document.getElementById(sectionID);
    // а здесь клик на ссылку меню футере и в хедере
    link.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  }

}

