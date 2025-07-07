document.addEventListener("DOMContentLoaded", function() {

    /*
let productFilterBtn = document.querySelectorAll(".product-filter-btn");

 productFilterBtn.forEach(filter => {  
    filter.addEventListener("click", function() {
        let productFilter = this.getAttribute("data-product-filter"); 
        let productContent = document.querySelectorAll(".product-filter-content");

        productContent.forEach(content => {
            content.style.display = "none";
        })
       document.querySelectorAll(".product-filter-btn").forEach(btn => {
          btn.classList.remove("active")
       })
        document.querySelector("#" + productFilter).style.display = "block";
        this.classList.add("active");
    })
});

document.getElementById("default-filter").click();

*/


function setupProductFilter({
     buttonSelector,
     contentSelector,
     dataAttr,
     activeClass = "active",
     defaultFilterId = null,
}) {
    const productFilterBtn = document.querySelectorAll(buttonSelector);
    const productContent = document.querySelectorAll(contentSelector);

    productFilterBtn.forEach(filter => {
        filter.addEventListener("click", function () {
            const productFilter = this.getAttribute(dataAttr);
            // HIDE THE PRODUCT CONTENT
            productContent.forEach(content => {
                content.style.display = "none";
            });
            // REMOVE ACTIVE CLASS FROM BUTTON
            productFilterBtn.forEach(btn => {
                btn.classList.remove(activeClass);
            });
            // SHOW SELECTED CONTENT
            document.querySelector("#" + productFilter).style.display = "block";
            // ADD ACTIVE CLASS TO ACTIVE BUTTON
            this.classList.add(activeClass);
        });
    });
    // SHOW DEFAULT CONTENT
    const defaultElement =  document.getElementById(defaultFilterId);
    if(defaultElement) {
        defaultElement.click();
    }
}
    // ASSIGN 
 setupProductFilter({
    buttonSelector: ".productFilter-btn",
    contentSelector: ".product-filterContent",
    dataAttr: "data-product-filter",
    defaultFilterId: "default-filter"
 });

 setupProductFilter({
    buttonSelector: ".product-miniImage",
    contentSelector: ".full-imageDes",
    dataAttr: "data-image",
    defaultFilterId: "default-Image"
 })


})