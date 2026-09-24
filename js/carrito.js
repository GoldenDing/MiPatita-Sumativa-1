
// aca es donde se guardan los productos agregados
let carrito = [];

// con esta function se agregan los productos al carrito, los llamamos desde el boton)
function agregarAlCarrito(posicion) {
  carrito.push(productos[posicion]);
  mostrarCarrito();
  mostrarMensaje(productos[posicion].nombre + " se agrego al carrito 🐾");
}

// esta funcion es para eliminar o quitar los prodcutos del carrito segun la posicion
function eliminarDelCarrito(posicion) {
  carrito.splice(posicion, 1);
  mostrarCarrito();
}

// esta es la funcion para dejar el carrito vacio
function vaciarCarrito() {
  if (carrito.length === 0) {
    mostrarMensaje("El carrito ya esta vacio");
    return;
  }
  carrito = [];
  mostrarCarrito();
  mostrarMensaje("Carrito vaciado");
}

// funcion para mostrar un mensaje debajo de
function mostrarMensaje(texto) {
  document.getElementById("mensajeCarrito").textContent = texto;
}

// esta funcion es la cual muestra la lista del carrito, las cantidades y el total
function mostrarCarrito() {
  const lista = document.getElementById("listaCarrito");
  let total = 0;

  lista.innerHTML = ""; // con innerHTML borramos la lista para volver a mostrarla

  for (let i = 0; i < carrito.length; i++) {
    lista.innerHTML += "<li>" + carrito[i].nombre +
      " - $" + carrito[i].precio.toLocaleString("es-CL") +
      " <button type='button' onclick='eliminarDelCarrito(" + i + ")'>X</button></li>";

    total = total + carrito[i].precio;
  }

  if (carrito.length === 0) {
    lista.innerHTML = "<li>Tu carrito esta vacio</li>";
  }

  document.getElementById("cantidadCarrito").textContent = carrito.length;
  document.getElementById("totalCarrito").textContent = "$" + total.toLocaleString("es-CL");
}


// cuando clickeamos en vaciar carrito ejecutamos vaciarCarrito
document.getElementById("vaciarCarrito").addEventListener("click", vaciarCarrito);

// al abrirlo de muestra el carrito vacio
mostrarCarrito();
