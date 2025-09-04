let amigos = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
    limpiarCaja();
    console.log(amigos);

    if (nombreDeAmigo === '') {
        alert('Por favor, ingrese un nombre');
    }else {
        amigos.push(nombreDeAmigo);
        mostrarAmigos();
    return nombreDeAmigo;
    } 
}

function limpiarCaja () {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(function(nombre) {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

