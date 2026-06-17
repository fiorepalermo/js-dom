console.log("js caricato");


const inputField = document.getElementById('mirror-input');
const outputText = document.getElementById('mirror-text');


inputField.addEventListener('input', () => {
   outputText.innerText = inputField.value;
});

