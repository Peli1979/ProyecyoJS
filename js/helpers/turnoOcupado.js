export const turnoOcupado= (misReservas, reserva) => {
    
    const turnoOcupado = misReservas.some(elem => {
        return (
            elem.dias == reserva.dias &&
            elem.horario == reserva.horario &&
            elem.sede == reserva.sede
        )})
    return turnoOcupado
}