document.addEventListener("DOMContentLoaded", function() {

    let menuToggler = document.querySelector(".bar-wrapper");
    menuToggler.addEventListener("click", function() {
        this.classList.toggle("change");
     });

      var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.5,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });
})
