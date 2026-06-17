console.log("js caricato");

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const errorMsg = document.getElementById('error-message');

p2.addEventListener('input', () => {
    if (p1.value !== p2.value) {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
    }
});