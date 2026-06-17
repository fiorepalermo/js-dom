console.log("js caricato");


const user = {
    nome: 'Elisabetta',
    ruolo: 'Web Developer',
    img: 'https://picsum.photos/100'
};

document.getElementById('user-name').innerText = user.nome;
document.getElementById('user-role').innerText = user.ruolo;
document.getElementById('user-img').src = user.img; 