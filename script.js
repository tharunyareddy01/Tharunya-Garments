// =============================
// Glamour Garments - script.js
// =============================

// Add Product to Bill
function addToBill(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let item = cart.find(product => product.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " Added to Bill");
}

// Display Bill
function loadBill() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let table = document.getElementById("billTable");

    let total = 0;

    if (!table) return;

    table.innerHTML = "";

    cart.forEach((item, index) => {

        let subtotal = item.price * item.qty;

        total += subtotal;

        table.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>₹${item.price}</td>
            <td>₹${subtotal}</td>
            <td>
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </td>
        </tr>`;
    });

    document.getElementById("total").innerHTML = "₹" + total;
}

// Remove One Product
function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadBill();
}

// Clear Complete Bill
function clearBill() {

    localStorage.removeItem("cart");

    loadBill();
}

// Automatically Load Billing Page
window.onload = loadBill;