let amigos = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
    limpiarCaja();
    console.log(amigos);

    if (nombreDeAmigo === '') {
        alert('Por favor, ingrese un nombre');
    }else {
        amigos.push(nombreDeAmigo);
    return nombreDeAmigo;
    } 
}

function limpiarCaja () {
    document.querySelector('#amigo').value = '';
}

