// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigo = document.querySelector("#amigo");
let listaDeamigos = document.querySelector("#listaAmigos");
let amigoSecreto = document.querySelector("#resultado");

const agregarAmigo = () => {
    if (amigo.value.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(amigo.value.trim());
    console.log(amigos);
    amigo.value = "";
    agregaAmigoLista();
}

const agregaAmigoLista = () => {
    listaDeamigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listaDeamigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

const sortearAmigos = () => {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para sortear.");
        return;
    }

    const amigosSorteados = [...amigos];
    const resultados = {};
    
    for (let i = 0; i < amigosSorteados.length; i++) {
        let amigoActual = amigos[i];
        let indiceSorteado;
        
        do {
            indiceSorteado = Math.floor(Math.random() * amigosSorteados.length);
        } while (amigosSorteados[indiceSorteado] === amigoActual || amigosSorteados[indiceSorteado] === null);
        
        resultados[amigoActual] = amigosSorteados[indiceSorteado];
        amigosSorteados[indiceSorteado] = null; 
    }
    
    mostrarResultados(resultados);
}

const mostrarResultados = (resultados) => {
    amigoSecreto.innerHTML = "";
    for (const [amigo, secreto] of Object.entries(resultados)) {
        amigoSecreto.innerHTML += `<li>${amigo} tiene como amigo secreto a ${secreto}</li>`;
    }
}
