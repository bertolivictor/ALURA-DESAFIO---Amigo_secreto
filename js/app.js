
let listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let amigosIncluidos = document.getElementById('lista-amigos');
    listaAmigos.push(nomeAmigo);

    if (amigosIncluidos.textContent == '') {
        amigosIncluidos.textContent = nomeAmigo.value;
    } else {
        amigosIncluidos.textContent = amigosIncluidos.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
    console.log(listaAmigos);
}


function sortear() {
    embaralhar(listaAmigos);
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {

}