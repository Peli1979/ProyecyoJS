
 

let precioHoraDia = 2000 
let preciohoraNoche=3000

let costo=0


let diaReserva = prompt("elige un dia: LUNES/MARTES/MIERCOLES/JUEVES/VIERNES")

let horarioReserva =prompt("elige un horario de 17 a 23hs: ")

let ingresarNombre = prompt("Ingresar nombre: ")

let cantidad= +prompt("ingrese cantidad de horas a jugar: ")

if(horarioReserva<=20){
    costo= precioHoraDia*cantidad
}else{costo=preciohoraNoche*cantidad}
    
alert(" Turno  DE dia "+diaReserva+" "+horarioReserva+"HS Nombre: "+ingresarNombre+ ", TOTAL A PAGAR: "+costo+ "pesos" )


