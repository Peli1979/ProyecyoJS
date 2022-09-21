import { reserva } from "../data/constants.js"
import { calcularPrecio } from "./calcularPrecio.js"

export function handleInput(event){
    const { id, value } = event.target

    switch (id){
        case "nombre":
            reserva.nombre = value
            break
        case "apellido":
            reserva.apellido = value
            break
        case "email":
            reserva.email = value
            break
        case "mensaje":
            reserva.mensaje = value
            break
    }
}

export function handleSelect(event){
    
    const { id } = event.target

    switch (id){
        case "sedeReserva":
            reserva.sede = verificarOpcion(event)
            break
        case "dias":
            reserva.dias = verificarOpcion(event)
            break
        case "horario":
            reserva.horario = verificarOpcion(event)
            reserva.costoTotal = calcularPrecio(reserva)
            break
        case "cantHoras":
            reserva.cantidad = verificarOpcion(event)
            reserva.costoTotal = calcularPrecio(reserva)
            break
    }
}

function verificarOpcion(event){
    let opcionElegida = ""

    for ( const opcion of event.target.childNodes){
        if (opcion.tagName == "OPTION"){
            if (opcion.selected == true){
                opcionElegida = opcion.value
            }
        }
    }

    return opcionElegida
}