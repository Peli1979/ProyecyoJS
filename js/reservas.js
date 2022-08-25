import { reserva } from "./data/constants.js"
import { handleInput, handleSelect } from "./helpers/handleEvents.js"
import { turnoOcupado } from "./helpers/turnoOcupado.js"

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

const misReservas = JSON.parse(localStorage.getItem('misReservas')) || []

nombreUsuario.addEventListener("input",handleInput)
apellidoUsuario.addEventListener("input",handleInput)
email.addEventListener("input",handleInput)
cantHoras.addEventListener("change",handleSelect)
sedeReserva.addEventListener("change",handleSelect)
boton.addEventListener("click",handleClick)
dias.addEventListener("change",handleSelect)
horario.addEventListener("change",handleSelect)
mensaje.addEventListener("input",handleInput)

// Guarda la reserva
function handleClick(e){
    e.preventDefault()
    if(!turnoOcupado(misReservas, reserva)) {
        muestra.innerHTML = `<h1>Reserva Confirmada!!</h1> <p>Nombre y Apellido: ${reserva.nombre} ${reserva.apellido}</p><p> email: ${reserva.email}</p><p> Sede: ${reserva.sede}</p><p> Importe a abonar: $${reserva.costoTotal}</p> <p>Dia Elegido: ${reserva.dias}</p> <p>Horario:${reserva.horario}</p><p>Deja un Mensaje:${reserva.mensaje}</p>`
        nombreUsuario.value = ""
        apellidoUsuario.value = ""
        dias.value = ""
        horario.value = ""
        const nuevaReserva = {...reserva}
        misReservas.push(nuevaReserva)
        localStorage.setItem('misReservas', JSON.stringify(misReservas));
    } else {
        muestra.innerHTML = 'Ups, el turno está ocupado'
    }
    //console.log(turnoOcupado(misReservas, reserva))
    horario.setAttribute.style('backgroundColor', 'red');    
}
