



 let precioHoraDia = 2000 
 let preciohoraNoche=3000
 
 const horas=[17, 18, 19, 20, 21, 22, 23]
 const disponibilidades=[
    {dia:"lunes", hora:horas}, 
    {dia:"martes", hora:horas}, 
    {dia:"miercoles", hora:horas}, 
    {dia:"jueves", hora:horas}, 
    {dia:"viernes", hora:horas} ]
 
 const reservas=[]


 function reserva(){
    

    let costo=0


    let diaReserva = prompt("elige un dia: LUNES/MARTES/MIERCOLES/JUEVES/VIERNES")
    
    
    
    
            
    if((diaReserva=="lunes") || (diaReserva=="LUNES"))  {
        alert("Elegiste lunes")}
    else if((diaReserva=="martes")||(diaReserva=="MARTES") )
        alert("elegiste martes")
    else if((diaReserva=="miercoles")||(diaReserva=="MIERCOLES") )
        alert("elegiste miercoles")
    else if((diaReserva=="jueves")||(diaReserva=="JUEVES") )
        alert("elegiste jueves")
    else if((diaReserva=="viernes")||(diaReserva=="VIERNES"))
        alert("elegiste viernes")
    else{alert("no es un dia de la semana")
    diaReserva = prompt("elige un dia: LUNES/MARTES/MIERCOLES/JUEVES/VIERNES")
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
}            

reserva()

while (nuevaReserva=prompt("Quieres hacer una nueva reserva: ")){
    if((nuevaReserva=="si")|| (nuevaReserva=="SI")){reserva()}
    else{exit}
}














