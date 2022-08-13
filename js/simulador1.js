

/*

 let precioHoraDia = 2000 
 let preciohoraNoche=3000
 
 const horas=[17, 18, 19, 20, 21, 22, 23]
 const dias=["lunes", "martes", "miercoles", "jueves", "viernes"]
 
 class Reservas{
    constructor(dia, hora) {
        this.dia = dia;
        this.hora = hora;
    }
}

 function reserva(){
    

    let costo=0


    let diaReserva = prompt("elige un dia: LUNES/MARTES/MIERCOLES/JUEVES/VIERNES")
    
    while (dias.includes(diaReserva)==false){
        alert("no es un dia posible")
        diaReserva=prompt("elige un dia: LUNES/MARTES/MIERCOLES/JUEVES/VIERNES") 
    }
    
            
   

    
   
    
    let horarioReserva =+prompt("elige un horario de 17 a 23hs: ")
    
    while (horas.includes(horarioReserva)==false){
        alert("no es un horario posible")
        horarioReserva=+prompt("elige un horario de 17 a 23hs: ")
   }
   

   

    let ingresarNombre = prompt("Ingresar nombre: ")

    let cantidad= +prompt("ingrese cantidad de horas a jugar: ")
    while((horarioReserva+cantidad)>24){
        alert("No es posible reservar, el predio cierra a las 24hs")
        cantidad= +prompt("ingrese cantidad de horas a jugar: ")
    }
    let hasta=horarioReserva+cantidad

    if(horarioReserva<=20){
    costo= precioHoraDia*cantidad
    }else{costo=preciohoraNoche*cantidad}

    
    
    alert("Nombre: " +ingresarNombre+"\nTurno dia: "+diaReserva+ "\nHorario: "+horarioReserva+"HS \nHasta: " +hasta+"hs\nTOTAL A PAGAR: "+costo+"pesos") 
    

    const reservaciones=[]
    reservaciones.push(new Reservas((diaReserva), (horarioReserva)) );

    if(reservaciones[0]==reservaciones[1]){
    alert("no es una reserva posible"+exit)
    
}

 }

        

reserva()


        





while (nuevaReserva=prompt("Quieres hacer una nueva reserva: ")){
    if((nuevaReserva=="si")|| (nuevaReserva=="SI")){reserva()}
    else{exit}
}










*/



