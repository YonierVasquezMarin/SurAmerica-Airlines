/**
 * Calcula el precio del viaje según la pareja de ciudades elegidas.
 * @returns {number | String} si las ciudades de partida y llegada son diferentes se calcula
 * el valor del viaje y se retorna el costo (un número). Si las dos ciudades son iguales, se
 * retorna el mensaje "ciudades iguales" (un String).
 */
function calcularPrecioVuelo() {
    //todas las ciudades posibles donde viajar
    const ciudadesPosibles = ["Santiago de Chile", "Buenos Aires", "Montevideo", "Bogotá", "Quito", "Caracas"];

    //los precios para las posibles parejas del viaje (15 posibles combinaciones sin repetir)
    const precios = [300, 450, 1000, 800, 1000, 300, 1000, 800, 800, 1000, 800, 750, 300, 250, 450];

    //obtener las dos ciudades seleccionadas y la cantidad de pasajeros
    let startCity = selectStartCity.value;
    let destinityCity = selectDestinityCity.value;
    let cantidadPersonas = document.getElementById("selectPeopleCount").value;

    //definir el precio según la ciudad elegida
    let valorViaje = 0;
    let indexPrecio = 0;
    let determinandoPareja = true;
    while (determinandoPareja) {
        for (let i = 0; i < ciudadesPosibles.length - 1; i++) {
            if ((startCity == ciudadesPosibles[0] && destinityCity == ciudadesPosibles[i + 1]) ||
                (startCity == ciudadesPosibles[i + 1] && destinityCity == ciudadesPosibles[0])) {
                valorViaje = precios[indexPrecio];
                determinandoPareja = false;
            }
            indexPrecio += 1;
        }
        ciudadesPosibles.shift();
    }

    valorViaje *= Number.parseInt(cantidadPersonas);

    return valorViaje;
}


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
    if (sonCiudadesDiferentes()) {
        let precioTotal = calcularPrecioVuelo();

        //mostrar el precio en la pantalla
        document.getElementById("precioTotal").innerHTML = "USD$ " + precioTotal;
    }
});