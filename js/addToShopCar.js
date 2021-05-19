/**
 * NOTA: las variables acá usadas están definidas en un script anterior llamado
 * "operacionesComunes.js".
 */
document.getElementById("btnAddToShopCar").addEventListener("click", () => {
    if (camposCompletados() && sonCiudadesDiferentes()) {
        let registroVuelo = {
            nombreUsuario: nombre.value,
            dniUsuario: dni.value,
            emailUsuario: email.value,
            telefonoUsuario: telefono.value,
            ciudadDePartida: selectStartCity.value,
            ciudadDeLlegada: selectDestinityCity.value,
            cantidadPasajeros: document.getElementById("selectPeopleCount").value,
            valorViajeUsuario: calcularPrecioVuelo()
        }

        //notificar que todo está guardado correctamente
        document.getElementById("txtAddOk").style.display = "inline";

        console.log(registroVuelo)
    }
});