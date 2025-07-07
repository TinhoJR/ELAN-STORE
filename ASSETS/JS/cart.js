document.addEventListener("DOMContentLoaded", function() {
    
    let selectedSize = null;
    const cartPage = document.querySelector(".shoppingCart-wrapper");
    const template = document.querySelector(".cartItem-template");
    refreshCartUI();

    document.querySelectorAll(".size-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            // REMOVE ACTIVE FROM ALL BUTTONS
            document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
            // ADD ACTIVE TO CLICKED BUTTON
            this.classList.add("active");
            
            // STORE SELECTED SIZE
            selectedSize = this.textContent;

            // CLEAR THE UI IF VISIBLE
            let selectedSizeWrapper = document.querySelector(".sizeBtn-wapper");
            selectedSizeWrapper.style.border = "none";
            document.querySelector(".errorMsg").style.display = "none";
        });
    });

    function showCart() {
        let parentWrapper = document.querySelector(".parentCart-holder");
        parentWrapper.style.display = "block";
        document.querySelector(".product-miniImage-mobile").style.display = "none";
        document.querySelector("body").classList.add("noscroll");

        let closeCart = document.querySelector(".closeCart");
        closeCart.addEventListener("click", function() {
             parentWrapper.style.display = "none";
             document.querySelector("body").classList.remove("noscroll");
             document.querySelector(".product-miniImage-mobile").style.display = "block";
        })
    }

    function loadCart() {

        // CLEAR CARTPAGE
        cartPage.innerHTML = "";
        // GET SAVED CART
        let savedCart = JSON.parse(localStorage.getItem("elanBag")) || [];
        savedCart.forEach(cartItem => {
            // MAKE TEMPLATE VISIBLE TO CLONE
            const templeteClone = template.content.cloneNode(true);

            // ASSIGN ATTRIBUTE AND PRODUCT ID
            const cartWrapper = templeteClone.querySelector(".cart-display");
            cartWrapper.setAttribute("data-product-id", cartItem.productId);

            // ASSIGN PRODUCT DETAILS TO TEMPLATE CLONE
            templeteClone.querySelector(".product-title").textContent = cartItem.productTitle;
            templeteClone.querySelector(".product-price").textContent = `$${cartItem.productPrice}`;
            templeteClone.querySelector(".product-img img").src = cartItem.productImg;
            templeteClone.querySelector(".product-category").textContent = cartItem.productCategory
            templeteClone.querySelector(".product-size").textContent = cartItem.productSize;

            // APPEND CLONE TO CARTPAGE
            cartPage.append(templeteClone)
        })
    }

    // ADD TO BAG LOGIC
    let addToBag = document.querySelectorAll(".addTo-Bag");
    addToBag.forEach(bag => {
       bag.addEventListener("click", function() {

        if(!selectedSize){
            let selectedSizeWrapper = document.querySelector(".sizeBtn-wapper");
            selectedSizeWrapper.style.border = "1px solid red";
            document.querySelector(".errorMsg").style.display = "block";
            return;
        }

         // GET PARENT CLASS
        let product = this.closest(".single-product")
        // GET PRODUCT-ID FROM PARENT CLASS
        let productId = product.dataset.productId;
        // GET AND HOLD PRODUCT INFO
        let productTitle = product.querySelector(".product-title").textContent;
        let productPrice = product.querySelector(".product-price").textContent.replace("$", "");
        let productImg = product.querySelector(".product-img img").getAttribute("src");
        let productCategory = product.querySelector(".product-category").textContent;
        let productSize = selectedSize;
        let productQty = 1;
        // GET ADDED CART
        let addedCart = JSON.parse(localStorage.getItem("elanBag")) || [];
        // GRAB EXISTING ITEM TO AVOID DUPLICATE
        let existingItem = addedCart.find(item => item.productId === productId);
        if(existingItem) {
            existingItem.productQty += 1;
        }else {
            addedCart.push({
                productId: productId,
                productTitle: productTitle,
                productPrice: productPrice,
                productImg: productImg,
                productCategory: productCategory,
                productSize: productSize,
                productQty: 1
            })
           
        }
         console.log(addedCart)
        // SAVE CART TO LOCAL STORAGE
        localStorage.setItem("elanBag", JSON.stringify(addedCart));

        showCart()
        refreshCartUI()
       })
    })

    function updateCartBadge() {
        // GET SAVED CART
        let savedCart = JSON.parse(localStorage.getItem("elanBag")) || [];
        // INCREASE WHEN PRODUCT QUANTITY INCREASES
        let totalItems = savedCart.reduce((sum, item) => {
            return sum + item.productQty;
        }, 0)

        document.querySelectorAll(".badge").forEach(badge => {
            badge.innerHTML = totalItems;
        })
    }

   function refreshCartUI() {
    loadCart();
    updateCartBadge();
   }





})