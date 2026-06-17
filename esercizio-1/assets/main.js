console.log("js caricato");

const input = document.querySelector("#inputPassword2");
const btn = document.querySelector('[type="submit"]');

btn.addEventListener("click", () => {
    const inputType = input.getAttribute("type");

    if (inputType === "password") {
        input.setAttribute("type , text");
        btn.textContent = "Nascondi Password";
        btn.classList.add("bg-success");
        btn.classList.remove("bg-danger");



    }
    else {
        input.setAttribute("type", "password");
        btn.textContent = "Mostra password";
        btn.classList.add("bg-success");
        btn.classList.remove("bg-danger");
    }
});