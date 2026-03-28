const prodName = document.getElementById('product-name');
const prodPrice = document.getElementById('product-price');
const prodQty = document.getElementById('product-qty');
const addButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount, qty) {
    totalPrice += amount * qty;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price);
    const qty = parseFloat(item.dataset.qty);
    updateTotalPrice(-price, qty);
    item.remove();
}

// Event Listener to add items
addButton.addEventListener('click', () => {
    const name = prodName.value.trim();
    const price = parseFloat(prodPrice.value);
    const qty = parseFloat(prodQty.value);
    if (!name || price <= 0 || isNaN(price) || qty <= 0 || isNaN(qty)) {
        alert("Name, price or quantity invalid. Please correct to proceed.");
        return;
    }
    const li = document.createElement('li');
    li.dataset.name = name;
    li.dataset.price = price;
    li.dataset.qty = qty;
    li.innerHTML = `${name} / ${price} / ${qty} <button class='remove-item'>Remove Item</button>`;

    // Event Listener to remove items
    li.querySelector('.remove-item').addEventListener('click', removeItem);
    cart.appendChild(li);
    updateTotalPrice(price, qty);
    // Clear value for next item
    prodName.value = '';
    prodPrice.value = '';
    prodQty.value = '';

});