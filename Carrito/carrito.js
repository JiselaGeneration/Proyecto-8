const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.querySelector("#cart-items");
const totalPoints = document.querySelector("#total-points");
const clearCartButton = document.querySelector("#clear-cart");
function formatPrice(price) {
    return `$ ${parseInt(price).toLocaleString('es-CO')}`;
}

// Función para actualizar el contador del carrito
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCounter = document.getElementById("cart-counter");
    cartCounter.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Llamar a la función para actualizar el contador al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    updateCartCounter();
});

// Función para actualizar el carrito
function updateCart() {
    // Vaciar el contenedor del carrito
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p>Tu carrito está vacío.</p>`;
        totalPoints.textContent = `Total: $0 `;
        localStorage.setItem("cart", JSON.stringify(cart));
        return;
    }

    // Crear los elementos del carrito dinámicamente
    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add(
            "cart-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );

        cartItem.innerHTML = `
<div class="cart-item d-flex flex-wrap align-items-center justify-content-between mb-4 p-3 border rounded">
  <div class="d-flex align-items-center item-image-name">
    <img src="${item.image}" alt="${item.name}" width="160" height="160" class="me-3 rounded">
    <span class="item-name">${item.name}</span>
  </div>

  <div class="item-quantity-price text-center">
    <span>${item.quantity} x ${formatPrice(item.price)}</span>
  </div>

  <div class="d-flex align-items-center justify-content-center item-actions">
    <button class="btn btn-sm btn-outline-secondary decrement" data-id="${item.id}">-</button>
    <button class="btn btn-sm btn-outline-success increment" data-id="${item.id}">+</button>
    <button class="btn btn-sm btn-outline-danger remove-item" data-id="${item.id}">Eliminar</button>
  </div>
</div>

            `;

        // Agregar el item al contenedor del carrito
        cartItemsContainer.appendChild(cartItem);
    });

    // Calcular el total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPoints.textContent = `Total: ${formatPrice(total)}`;

    // Almacenar el carrito en el Local Storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Vaciar el carrito
function clearCart() {
    cart.length = 0; // Vacía el array del carrito
    updateCart();
    window.location.reload();
}

// Manejar clic en botones del carrito
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
        const id = parseInt(e.target.dataset.id, 10);
        const itemIndex = cart.findIndex((item) => item.id === id);

        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
        }

        updateCart();
        window.location.reload();
    }

    if (e.target.classList.contains("increment")) {
        const id = parseInt(e.target.dataset.id, 10);
        const item = cart.find((item) => item.id === id);

        if (item) {
            item.quantity += 1;
        }

        updateCart();
        window.location.reload();
    }

    if (e.target.classList.contains("decrement")) {
        const id = parseInt(e.target.dataset.id, 10);
        const item = cart.find((item) => item.id === id);

        if (item && item.quantity > 1) {
            item.quantity -= 1;
        } else if (item && item.quantity === 1) {
            // Eliminar si la cantidad es 1 y se hace clic en disminuir
            const itemIndex = cart.findIndex((item) => item.id === id);
            cart.splice(itemIndex, 1);
        }

        updateCart();
        window.location.reload();
    }
});

// Evento para vaciar el carrito
clearCartButton.addEventListener("click", clearCart);

// Cargar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", updateCart);