document.addEventListener("DOMContentLoaded", function() {

    function accordion({
        selectedButton,
        activePanel = "active",

    }) {

        const button = document.querySelectorAll(selectedButton);
        button.forEach(btn => {
            btn.addEventListener("click", function() {
                 this.classList.toggle(activePanel)
                const panelDetail = this.nextElementSibling;
                const isVisible = window.getComputedStyle(panelDetail).display === "block";
                 
                if(isVisible) {
                    panelDetail.style.display = "none";
                }else {
                    panelDetail.style.display = "block";
                }
            
            })
        })

    }

    accordion({
        selectedButton: ".panel-btn"
    });



})