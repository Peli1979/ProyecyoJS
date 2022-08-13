const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')
const cantHoras = document.getElementById('cantHoras')
const muestra = document.getElementById('muestra')
const boton = document.getElementById('botonEnviar')
const dias = document.getElementById('dias')
const horario = document.getElementById('horario')
const horario2 = document.getElementById('horario2')
let usuario = []
let costoHora = 2000

nombreUsuario.onchange = function () { 
    console.log(nombreUsuario.value)
    usuario.push(nombreUsuario.value)
}

apellidoUsuario.onchange = function () {
    console.log(apellidoUsuario.value)
    usuario.push(apellidoUsuario.value)
}

cantHoras.onchange = function () { 
    costoTotal = (parseInt(cantHoras.value) * costoHora)
    console.log(costoTotal)
    usuario.push(costoTotal)
    

    if (parseInt(cantHoras.value) === 1) {
        horario.removeAttribute('hidden')
        horario2.setAttribute('hidden', true)
    } else {
        horario.setAttribute('hidden', true)
        horario2.removeAttribute('hidden')
    }
}

dias.onchange = function () {
    console.log(dias.value)
    usuario.push(dias.value)
}
horario.onchange = function () { 
    console.log(horario.value)
    usuario.push(horario.value)
}
boton.onclick = function (e) {
    e.preventDefault()
    muestra.innerHTML = `<p>Nombre y Apellido: ${usuario[0]} ${usuario[1]}</p><p>Total a pagar $${usuario[2]}</p> <p>Dia Elegido:${usuario[3]}</p> <p>Horario:${usuario[4]}</p>`
    nombreUsuario.value = ""
    apellidoUsuario.value = ""
    dias.value = ""
    horario.value = ""
    
}


console.log(usuario);