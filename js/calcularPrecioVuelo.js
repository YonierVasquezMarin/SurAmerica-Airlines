/**
 * Si las ciudad de partida y la ciudad de destino son las mismas, no se calcula el precio.
 * La primera parte del precio del viaje es según la ruta que tome el usuario, y la segunda
 * parte del precio es multiplicarlo por la cantidad de personas que viajarán.
 * 
 * NOTA: el precio está en dolares (USD$).
 * 
 * NOTA: la función "calcularPrecioVuelo" está definida en un script anterior, llamado
 * "operacionesComunes.js".
 */
document.getElementById("btnCalcularPrecio").addEventListener("click", () => {
    let valorViaje = calcularPrecioVuelo();
    if (valorViaje != "ciudades iguales") {
        //multiplicar el valor del viaje por la cantidad de personas a viajar.
        let cantidadPersonas = document.getElementById("selectPeopleCount").value;
        let precioTotal = Number.parseInt(cantidadPersonas) * valorViaje;

        //mostrar el precio en la pantalla
        document.getElementById("precioTotal").innerHTML = "USD$ " + precioTotal;
    }
});