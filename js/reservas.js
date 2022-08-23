const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')
const email = document.getElementById('email')
const cantHoras = document.getElementById('cantHoras')
const muestra = document.getElementById('muestra')
const boton = document.getElementById('botonEnviar')
const dias = document.getElementById('dias')
const horario = document.getElementById('horario')
const horario2 = document.getElementById('horario2')
const mensaje = document.getElementById('mensaje')
const sedeReserva=document.getElementById('sedeReserva')
let reserva = {}
let costoHoraDia = 2000
let costoHoraNoche=3000
const misReservas = JSON.parse(localStorage.getItem('misReservas')) || []

nombreUsuario.onchange = function () { 
    
    reserva.nombre = nombreUsuario.value
    //usuario.push(nombreUsuario.value)
}

apellidoUsuario.onchange = function () {
    
    reserva.apellido= apellidoUsuario.value
    //usuario.push(apellidoUsuario.value)

}

email.onchange = function () { 
    
    reserva.email = email.value
    
}

sedeReserva.onchange = function () { 
    
    reserva.sede=sedeReserva.value
    //usuario.push(sedeReserva.value)
}

const calcularPrecio = (horarioElegido) => {
    if(horarioElegido.value=="19 a 20"){
        costoHora= costoHoraDia
    } else{
        costoHora=costoHoraNoche
    }
    costoTotal = (parseInt(cantHoras.value) * costoHora)
    return costoTotal
}

cantHoras.onchange = function () { 
    const costoTotal = calcularPrecio(horario)
    
    reserva.cantidad=cantHoras.value
    
    if (parseInt(cantHoras.value) === 1) {
        horario.removeAttribute('hidden')
        //horario2.setAttribute('hidden', true)
    } else {
        horario.setAttribute('hidden', true)
        //horario2.removeAttribute('hidden')
    }
}

dias.onchange = function () {
    
    //usuario.push(dias.value)
    reserva.dias=dias.value
}
horario.onchange = function () { 
    
    reserva.horario=horario.value
}

const turnoOcupado= (misReservas, reserva) => {
    
    const turnoOcupado = misReservas.some(elem => {
        return (
            elem.dias == reserva.dias &&
            elem.horario == reserva.horario &&
            elem.sede == reserva.sede
        )})
    return turnoOcupado
}

mensaje.onchange = function () {
    
    reserva.mensaje= mensaje.value
}
// Guarda la reserva
boton.onclick = function (e) {
    e.preventDefault()
    if(!turnoOcupado(misReservas, reserva)) {
        muestra.innerHTML = `<h1>Reserva Confirmada!!</h1> <p>Nombre y Apellido: ${reserva.nombre} ${reserva.apellido}</p><p> email: ${reserva.email}</p><p> Sede: ${reserva.sede}</p><p> Importe a abonar: $${costoTotal}</p> <p>Dia Elegido: ${reserva.dias}</p> <p>Horario:${reserva.horario}</p><p>Deja un Mensaje:${reserva.mensaje}</p>`
        nombreUsuario.value = ""
        apellidoUsuario.value = ""
        dias.value = ""
        horario.value = ""
        misReservas.push(reserva)
        localStorage.setItem('misReservas', JSON.stringify(misReservas));
    } else {
        muestra.innerHTML = 'Ups, el turno está ocupado'
    }
    console.log(turnoOcupado(misReservas, reserva))
    horario.setAttribute.style('backgroundColor', 'red');
}
