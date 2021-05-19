/**
 * Para cuando los campos de textos están marcados con un borde rojo (porque se necesita que 
 * esté completo y no lo está), y luego el usuario toque de nuevo el campo para editarlo, el
 * campo regresa a su color del borde habitual (al gris).
 */
var nombre = document.getElementById("nombre");
nombre.addEventListener("click", () => {
    nombre.style.borderColor = "#000000a1";
});
var dni = document.getElementById("dni");
dni.addEventListener("click", () => {
    dni.style.borderColor = "#000000a1";
});
var email = document.getElementById("email");
email.addEventListener("click", () => {
    email.style.borderColor = "#000000a1";
});
var telefono = document.getElementById("telefono");
telefono.addEventListener("click", () => {
    telefono.style.borderColor = "#000000a1";
});
var selectStartCity = document.getElementById("selectStartCity");
selectStartCity.addEventListener("click", () => {
    selectStartCity.style.borderColor = "#000000a1";
});
var selectDestinityCity = document.getElementById("selectDestinityCity");
selectDestinityCity.addEventListener("click", () => {
    selectDestinityCity.style.borderColor = "#000000a1";
});

/**
 * Verifica que las ciudades de partida y de destino sean diferentes.
 * @returns {boolean} si son diferentes se retorna true, si son iguales se
 * retorna false.
 */
function sonCiudadesDiferentes() {
    let startCity = document.getElementById("selectStartCity");
    let destinityCity = document.getElementById("selectDestinityCity");

    if (startCity.value == destinityCity.value) {
        //Se marca la ciudad de destino en rojo para que el usuario cambie su valor
        destinityCity.style.borderColor = "red";
        return false;
    }

    return true;
}

/**
 * Verifica que todos los campos de escritura (como el nombre, el dni, 
 * email y telefono) contengan algún texto.
 * @returns {boolean} si todos los campos están completos se retorna true, si
 * al menos hay un campo vacío se retorna false.
 */
function camposCompletados() {
    let camposCompletados = true;

    let nombre = document.getElementById("nombre");
    let dni = document.getElementById("dni");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");

    if (nombre.value == "") {
        camposCompletados = false;
        nombre.style.borderColor = "red";
    }
    if (dni.value == "") {
        camposCompletados = false;
        dni.style.borderColor = "red";
    }
    if (email.value == "") {
        camposCompletados = false;
        email.style.borderColor = "red";
    }
    if (telefono.value == "") {
        camposCompletados = false;
        telefono.style.borderColor = "red";
    }

    return camposCompletados;
}