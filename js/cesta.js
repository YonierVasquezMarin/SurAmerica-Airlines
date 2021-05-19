/**
 * Lee en localStorage el registro del vuelo y lo muestra en pantalla.
 */
function mostrarRegistroDeVuelo() {
    let datosAlmacenadosDelVuelo = localStorage.getItem("registroVuelo");
    let elementoHtmlCesta = document.getElementById("datosCesta");

    if (datosAlmacenadosDelVuelo!=null) {
        let registroVuelo = JSON.parse(datosAlmacenadosDelVuelo);

        let tRegistroVuelo = `<span class="propiedad">Nombre:&nbsp;&nbsp;</span><span>${registroVuelo.nombreUsuario}</span><br>` +
        `<span class="propiedad">DNI:&nbsp;&nbsp;</span><span>${registroVuelo.dniUsuario}</span><br>` +
        `<span class="propiedad">Email:&nbsp;&nbsp;</span><span>${registroVuelo.emailUsuario}</span><br>` +
        `<span class="propiedad">Teléfono:&nbsp;&nbsp;</span><span>${registroVuelo.telefonoUsuario}</span><br>` +
        `<span class="propiedad">Ciudad de partida:&nbsp;&nbsp;</span><span>${registroVuelo.ciudadDePartida}</span><br>` +
        `<span class="propiedad">Ciudad de destino:&nbsp;&nbsp;</span><span>${registroVuelo.ciudadDeLlegada}</span><br>` +
        `<span class="propiedad">Cantidad de personas:&nbsp;&nbsp;</span><span>${registroVuelo.cantidadPasajeros}</span><br>` +
        `<span class="propiedad tPrecio">Costo total:&nbsp;&nbsp;</span><span class="tPrecio">USD$ ${registroVuelo.valorViajeUsuario}</span><br>` +
        `<button id="btnEliminarCesta">Eliminar plan de vuelo</button><br>` +
        `<button id="btnActualizarCesta">Actualizar cesta</button>` +
        `<form action="procesar-compra.php" method="GET">` +
            `<input type="submit" value="Comprar vuelo">` +
        `</form>`;

        elementoHtmlCesta.innerHTML = tRegistroVuelo;

        document.getElementById("btnEliminarCesta").addEventListener("click", () => {
            localStorage.clear(); //borra todo el registro del vuelo
            mostrarRegistroDeVuelo(); //cambia el contenido del elemento html de la cesta
        });

    } else {
        elementoHtmlCesta.innerHTML = '<span>No hay vuelos registrados en tu cesta.</span><br>' +
        '<button id="btnActualizarCesta">Actualizar cesta</button>';

        document.getElementById("btnActualizarCesta").addEventListener("click", () => {
            mostrarRegistroDeVuelo();
        });
    }
}

mostrarRegistroDeVuelo();

document.getElementById("btnActualizarCesta").addEventListener("click", () => {
    mostrarRegistroDeVuelo();
});