console.log("js caricato");

const usernameInput = document.getElementById('username');
const submitBtn = document.getElementById('submit-btn');

usernameInput.addEventListener('input', () => {
    submitBtn.disabled = usernameInput.value.length < 3;
});