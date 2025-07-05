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

    // NAVIGATE TO PRODUCT DETAIL
     let products = document.querySelectorAll(".product-List")
     products.forEach(function(product) {
       product.addEventListener("click", function() {
       window.location.href = "productDetail.html";
     })
     })
    

    // AD HEADLINES

    const marqueeTrack = document.querySelector(".marquee-track")
    const paragraph = marqueeTrack.querySelectorAll("p")

    if (paragraph.length > 0) {
      marqueeTrack.classList.add("animate-marquee")
    }


})
