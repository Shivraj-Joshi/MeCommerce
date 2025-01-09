const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

let myCart = [];

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", (event) => {

        const productElement = event.target.closest(".items");

        const product = {
            name: productElement.querySelector(".item-name").textContent.trim(),
            price: productElement.querySelector(".price").textContent.trim().replace("$", ""),
            image: productElement.querySelector("img").src,
            quantity: 1,
        };
        myCart.push(product);
        console.log("cart:", myCart);
        updateCartUI();
    });
});

function updateCartUI() {
    const cartContent = document.getElementById("cart-content");
    const totalPriceElement = document.getElementById("total-price");

    cartContent.innerHTML = "";
    let totalPrice = 0;
    myCart.forEach((item, index) => {

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
                <img src="${item.image} alt="">
                <div id="cart-details">
                    <h3 id="product-title">${item.name}</h3>
                    <span id="product-price">$${item.price}</span>
                    <div id="product-quantity">
                        <button id="decrease" data-index="${index}">-</button>
                        <span class="product-number">${item.quantity}</span>
                        <button id="increase" data-index="${index}">+</button>
                    </div>
                </div>
                <i class="ri-delete-bin-line cart-remove"></i>
            </div>
    
        </div>
      
    
    `;

        cartContent.appendChild(cartItem);

    });
    // totalPrice += Item.price * Item.quantity;

}