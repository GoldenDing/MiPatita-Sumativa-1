
// guardamos los elementos del formulario en variables
const formulario = document.getElementById("formularioContacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mascota = document.getElementById("mascota");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contadorMensaje");
const mensajeExito = document.getElementById("mensajeExito");

// validamos el nombre y los 100 caracteres
function validarNombre() {
  const valor = nombre.value
  const error = document.getElementById("errorNombre");

  if (valor === "") {
    error.textContent = "El nombre es obligatorio.";
    return false;
  }
  if (valor.length > 100) {
    error.textContent = "El nombre no puede tener mas de 100 caracteres.";
    return false;
  }

  error.textContent = ""; // sin errores, se borra el mensaje
  return true;
}

// validamos el correo obligatorio con maximo 100 caracteres
function validarCorreo() {
  const valor = correo.value.trim().toLowerCase();
  const error = document.getElementById("errorCorreo");

  if (valor === "") {
    error.textContent = "El correo es obligatorio.";
    return false;
  }
  if (valor.length > 100) {
    error.textContent = "El correo no puede tener mas de 100 caracteres.";
    return false;
  }

  if (valor.indexOf("@") < 1) {
    error.textContent = "Escribe un correo valido, por ejemplo: nombre@duoc.cl";
    return false;
  }
  if (!valor.endsWith("@duoc.cl") && !valor.endsWith("@profesor.duoc.cl") && !valor.endsWith("@gmail.com")) {
    error.textContent = "Solo se aceptan correos @duoc.cl, @profesor.duoc.cl o @gmail.com";
    return false;
  }

  error.textContent = "";
  return true;
}



// Valida el mensaje: obligatorio y maximo 500 caracteres.
// Tambien actualiza el contador de caracteres.
function validarMensaje() {
  const valor = mensaje.value.trim();
  const error = document.getElementById("errorMensaje");

  contador.textContent = mensaje.value.length + "/500 caracteres";

  if (valor === "") {
    error.textContent = "Escribe tu mensaje.";
    return false;
  }
  if (valor.length > 500) {
    error.textContent = "El mensaje no puede tener mas de 500 caracteres.";
    return false;
  }

  error.textContent = "";
  return true;
}

// Validacion en tiempo real: cada vez que el usuario escribe ("input")
nombre.addEventListener("input", validarNombre);
correo.addEventListener("input", validarCorreo);
mascota.addEventListener("input", validarMascota);
mensaje.addEventListener("input", validarMensaje);

// Validacion al presionar "Enviar Mensaje"
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita que la pagina se recargue

  // Se validan los 4 campos para mostrar todos los errores juntos
  const nombreOk = validarNombre();
  const correoOk = validarCorreo();
  const mascotaOk = validarMascota();
  const mensajeOk = validarMensaje();

  if (nombreOk && correoOk && mascotaOk && mensajeOk) {
    mensajeExito.textContent = "¡Mensaje enviado! 🐾 Te responderemos pronto.";
    formulario.reset(); // limpia el formulario
    contador.textContent = "0/500 caracteres";
  } else {
    mensajeExito.textContent = "";
  }
});
