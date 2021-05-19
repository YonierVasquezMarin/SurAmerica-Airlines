/**
 * NOTA: las variables acá usadas están definidas en un script anterior llamado
 * "operacionesComunes.js".
 */
document.getElementById("btnAddToShopCar").addEventListener("click", () => {
    let tConfirmacionRegistro = document.getElementById("txtAddOk");

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

        //Convertir el objeto a una cadena de texto
        let tRegistroVuelo = JSON.stringify(registroVuelo);

        //Guardar el String en Local Storage
        localStorage.setItem("registroVuelo", tRegistroVuelo);

        //notificar que todo está guardado correctamente
        tConfirmacionRegistro.innerHTML = "Añadido correctamente";
        tConfirmacionRegistro.style.color = "green";
        tConfirmacionRegistro.style.display = "inline";

    } else {
        //Mostrar un mensaje en rojo
        tConfirmacionRegistro.innerHTML = "Faltan datos";
        tConfirmacionRegistro.style.color = "red";
        tConfirmacionRegistro.style.display = "inline";
    }
});