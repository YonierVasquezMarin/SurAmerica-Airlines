//Menú para pantallas pequeñas
var navegacionPantallasChicas = document.getElementById("navegacionPantallasChicas");

//Desplegar menú
document.getElementById("btnDesplegarMenu").onclick = () => navegacionPantallasChicas.style.left = "0";

//Ocultar menú
document.getElementById("btnCerrarMenu").onclick = () => navegacionPantallasChicas.style.left = "100%";
