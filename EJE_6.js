for (let i = 0; i < 18; i++){
    let pelicula = prompt("La pelicula es para adultos? (1.si 2.no)");
    pelicula = parseInt (pelicula)

    if (pelicula == 1){
        let edad = prompt("Ingrese la edad del comprador")
        edad = parseInt (edad)
        if (edad < 18){

            alert("ole esta pelicula no es para usted eche pa' su casa");
            i--;
        }
    }
}

