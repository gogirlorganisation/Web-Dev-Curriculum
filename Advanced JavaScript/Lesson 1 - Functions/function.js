let cart = [];
let total = 0;

function addToCart(item, price) {
    const quantityInput = document.getElementById(`${item}Quantity`);
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        const existingItem = cart.find(cartItem => cartItem.name === item);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ name: item, price: price, quantity: quantity });
        }
        updateCart();
        quantityInput.value = 0;
    }
}

function updateCart() {
    const cartItemsElement = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    cartItemsElement.innerHTML = '';
    total = 0;

    cart.forEach(cartItem => {
        const itemTotal = cartItem.price * cartItem.quantity;
        total += itemTotal;
        const listItem = document.createElement('li');
        listItem.textContent = `${cartItem.name} - ${cartItem.quantity} x $${cartItem.price} = $${itemTotal.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    totalPriceElement.textContent = total.toFixed(2);
}
