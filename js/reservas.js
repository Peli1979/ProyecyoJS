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

const sedesJson = await fetch('../js/data/sedes.json')
  .then((response) => response.json())
  .then((data) => fillSedesOptions(data));

function fillSedesOptions(data)
{
    let sedesOptions = "";
    data.sedes.forEach(element => sedesOptions += '<option value="' + element + '">' + element + "</option>");
    sedeReserva.innerHTML = sedesOptions;
}

function validarInputs()
{
    let result = true;
    if (nombreUsuario.value.length == 0)
    {
        result = false;
        nombreUsuario.style.borderColor = "red";
    }
    if (apellidoUsuario.value.length == 0)
    {
        result = false;
        apellidoUsuario.style.borderColor = "red";
    }
    if (email.value.length == 0)
    {
        result = false;
        email.style.borderColor = "red";
    }
    if (sedeReserva.value=="")
    {
        result=false
        sedeReserva.style.borderColor="red";

    }

    return result;
}

function validarEmail() 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        return (true)
    }
    email.style.borderColor = "red";
    return (false)
}


// Guarda la reserva

function handleClick(e){
    e.preventDefault()

    if (!validarInputs())
    {
        alert("Debes completar los campos requeridos");
        return;
    }
    if (!validarEmail())
    {
        alert("El formato del email es incorrecto");
        return;
    }

    if(!turnoOcupado(misReservas, reserva)) {
        nombreUsuario.value = ""
        apellidoUsuario.value = ""
        dias.value = ""
        horario.value = ""
        
        
        setTimeout(()=> {
        Swal.fire({
            title: 'Confirmas la Reserva?',
            
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
            Swal.fire('Reserva Confirmada!', '', 'success')
            muestra.innerHTML = `<h1>Reserva Confirmada!!</h1> <p>Nombre y Apellido: ${reserva.nombre} ${reserva.apellido}</p><p> email: ${reserva.email}</p><p> Sede: ${reserva.sede}</p><p> Importe a abonar: $${reserva.costoTotal}</p> <p>Dia Elegido: ${reserva.dias}</p> <p>Horario:${reserva.horario}</p><p>Deja un Mensaje:${reserva.mensaje}</p>`
            const nuevaReserva = {...reserva}
            misReservas.push(nuevaReserva)
            localStorage.setItem('misReservas', JSON.stringify(misReservas));
            } else if (result.isDenied) {
            Swal.fire('Se Cancelo la Reserva!!', '', 'info')
            }
        
        })
    }, 2000)
        
        
       
    } else {
        setTimeout(()=> {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Turno Ocupado, Intentalo Nuevamente!!',
           
          })
        //muestra.innerHTML = 'Ups, el turno está ocupado'
        }, 2000)
    
    
    //console.log(turnoOcupado(misReservas, reserva))
    horario.setAttribute.style('backgroundColor', 'red');   
    
}}
