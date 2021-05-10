var navegacionPantallasChicas = document.getElementById("navegacionPantallasChicas");

// Acción para desplegar menú
document.getElementById("btnDesplegarMenu").addEventListener("click", function () {
    navegacionPantallasChicas.style.left = "0";
});

// Acción para cerrar el menú
document.getElementById("btnCerrarMenu").addEventListener("click", function () {
    navegacionPantallasChicas.style.left = "100%";
});
