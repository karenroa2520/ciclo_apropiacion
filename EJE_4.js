let cuenta = 0
let retiro = 0

cuenta = prompt("Ingrese la cantidad de su cuenta de banco")
cuenta = parseInt (cuenta)

while (true){
    retiro = prompt("Ingrese el monto a retirar")
    retiro = parseInt(retiro)

    if (cuenta > retiro){
       cuenta -= retiro; 
    }
        
    else {
        alert("Saldo no suficiente cerrando el sistema")



         break;
    }

}