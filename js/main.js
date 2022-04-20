let entrada = prompt("Ingrese un dato. Escriba 'ESC' para salir.");
var cadaver = "";
const espacio = " ";


do {
    if (cadaver != "") {
        cadaver=cadaver+espacio+entrada;
    }else{
        cadaver=entrada;
    }
    entrada = prompt("Ingrese otro dato. Escriba 'ESC' para salir.");

} while (entrada.toUpperCase() != "ESC") {
   
   alert("Su Cadáver exquisito es el siguiente: " + cadaver);

   let entrada = prompt("Desea ingresar otro Cadáver. Escriba 'SI' para continuar o 'NO' para salir.");

   if (entrada.toUpperCase() == "SI") {
        entrada = "";
        cadaver = "";
        do {
            if (cadaver != "") {
                cadaver=cadaver+espacio+entrada;
            }else{
                cadaver=entrada;
            }
            entrada = prompt("Ingrese otro dato. Escriba 'ESC' para salir.");
        
        } while (entrada.toUpperCase() != "ESC") {
        
        alert("Su Cadáver exquisito es el siguiente: " + cadaver);
        
        let entrada = prompt("Desea ingresar otro Cadáver. Escriba 'SI' para continuar o 'NO' para salir.");
        
        }
   } else if (entrada.toUpperCase() == "NO"){

        alert("Gracias por participar!");

   } else {
       alert("No ha ingresado una opcion valida, recargue la pagina si desea volver a participar");
   }

}

