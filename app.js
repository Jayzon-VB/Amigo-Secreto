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
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(function(nombre) {
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, agregue al menos un amigo.');
        return;
    }
    let cantidadDeAmigos = amigos.length;
    let amigoAleatorio = Math.floor(Math.random() * cantidadDeAmigos);

    //Eliminar al amigo sorteado.
    amigos.splice(amigoAleatorio, 1);

    //Actualizar la lista visual de los amigos agregados.
    mostrarAmigos();

    //Mostrar el resultado.
    let amigoSeleccionado = amigos[amigoAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    let li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${amigoSeleccionado}`;
    resultado.appendChild(li);

}

// Permite añadir amigos con la tecla Enter
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});