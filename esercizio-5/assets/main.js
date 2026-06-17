console.log("js caricato");

const priceSpan = document.getElementById('unit-price');
const quantityInput = document.getElementById('quantity');
const totalSpan = document.getElementById('total-price');

const unitPrice = Number(priceSpan.innerText);

quantityInput.addEventListener('input', () => {
    const qty = Number(quantityInput.value);
    const total = unitPrice * qty;
    totalSpan.innerText = total; 
});
