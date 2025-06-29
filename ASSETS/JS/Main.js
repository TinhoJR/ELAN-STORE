document.addEventListener("DOMContentLoaded", function() {

    let menuToggler = document.querySelector(".bar-wrapper");
    menuToggler.addEventListener("click", function() {
        this.classList.toggle("change");
     })
})
