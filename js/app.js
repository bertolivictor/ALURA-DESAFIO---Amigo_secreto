
let listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');

    if(nomeAmigo.value == '') {
        alert('Insira o nome do amigo!');
        return;
    }

    if(listaAmigos.includes(nomeAmigo.value)) {
        alert('Atenção, Nome duplicado!');
        return;
    }

    let amigosIncluidos = document.getElementById('lista-amigos');
    listaAmigos.push(nomeAmigo.value);

    if (amigosIncluidos.textContent == '') {
        amigosIncluidos.textContent = nomeAmigo.value;
    } else {
        amigosIncluidos.textContent = amigosIncluidos.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
}


function sortear() {

    if(listaAmigos.length < 4) {
        alert('Atenção, adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(listaAmigos);
    let listaSorteio = document.getElementById('lista-sorteio'); 

    for(let i = 0; i < listaAmigos.length; i++) {

        if(i == listaAmigos.length - 1) { // (listaAmigos.lengh - 1) correção Pq o indice do array inicia no 0. 
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + '---->' + listaAmigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + '---->' + listaAmigos[i + 1] + '<br>';
        }
    }            
}

function embaralhar(lista) {
    for (let indiceLista = lista.length; indiceLista; indiceLista--) {
        const indiceAleatorio = Math.floor(Math.random() * indiceLista);
        [lista[indiceLista - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indiceLista - 1]];
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}