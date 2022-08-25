import { costoHoraDia, costoHoraNoche } from "../data/constants.js"

export const calcularPrecio = (reserva) => {
    const { horario, cantidad } = reserva
    let costoHora = 0
    let costoTotal = 0
    horario=="19 a 20"? costoHora=costoHoraDia : costoHora=costoHoraNoche

    /*if(horario=="19 a 20"){
        costoHora= costoHoraDia
    } else{
        costoHora=costoHoraNoche
    }

    */
    costoTotal = (parseInt(cantidad) * costoHora)
    
    return costoTotal
}

