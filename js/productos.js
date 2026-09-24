// Arreglo (lista) con todos los productos de la tienda
const productos = [
  {
    nombre: "Purina Pro Plan Cachorros",
    categoria: "Comidas Secas",
    descripcion: "Formula rica en pollo y arroz. Ideal para un crecimiento fuerte.",
    precio: 22990,
    imagen: "assets/Comida1.jpg",
    seccion: "cachorros",
    destacado: true
  },
  {
    nombre: "Royal Canin Sensible",
    categoria: "Comidas Humedas",
    descripcion: "Con vitaminas y prebioticos. Excelente para digestiones sensibles.",
    precio: 24990,
    imagen: "assets/Comida2.jpg",
    seccion: "cachorros",
    destacado: true
  },
  {
    nombre: "Purina Salmon (6 unidades)",
    categoria: "Comida Adultos",
    descripcion: "Elaborado con salmon real. Mantiene el pelaje brillante.",
    precio: 32990,
    imagen: "assets/Comida3.jpg",
    seccion: "adultos",
    destacado: false
  },
  {
    nombre: "Champion Dog Carnes (6)",
    categoria: "Comida Adultos",
    descripcion: "Mix de carnes premium con la energia para su rutina diaria.",
    precio: 58490,
    imagen: "assets/Comida4.jpg",
    seccion: "adultos",
    destacado: true
  },
  {
    nombre: "Bocados Rellenos (12)",
    categoria: "Snacks y Premios",
    descripcion: "Crujientes por fuera y suaves por dentro. Perfectos como premio.",
    precio: 42990,
    imagen: "assets/Comida5.jpg",
    seccion: "adultos",
    destacado: false
  }
];

// Crea el HTML de una tarjeta de producto
function crearTarjeta(producto, posicion, conBoton) {
  let tarjeta = "<article class='card'>";
  tarjeta += "<img src='" + producto.imagen + "' alt='" + producto.nombre + "' width='200' height='150'>";
  tarjeta += "<p class='categoria'>" + producto.categoria + "</p>";
  tarjeta += "<h4>" + producto.nombre + "</h4>";
  tarjeta += "<p>" + producto.descripcion + "</p>";
  tarjeta += "<p class='precio'>$" + producto.precio.toLocaleString("es-CL") + "</p>";

  if (conBoton) {
    tarjeta += "<button type='button' class='agregar' onclick='agregarAlCarrito(" + posicion + ")'>Agregar al carrito</button>";
  }

  tarjeta += "</article>";
  return tarjeta;
}

function mostrarProductos() {
  const contenedorCachorros = document.getElementById("productos-cachorros");
  const contenedorAdultos = document.getElementById("productos-adultos");

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].seccion === "cachorros") {
      contenedorCachorros.innerHTML += crearTarjeta(productos[i], i, true);
    } else {
      contenedorAdultos.innerHTML += crearTarjeta(productos[i], i, true);
    }
  }
}

// Muestra solo los productos destacados en index.html
function mostrarDestacados() {
  const contenedor = document.getElementById("destacados");

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].destacado === true) {
      contenedor.innerHTML += crearTarjeta(productos[i], i, false);
    }
  }
}

// Revisa en que pagina estamos y muestra lo que corresponde
if (document.getElementById("productos-cachorros") !== null) {
  mostrarProductos();
}

if (document.getElementById("destacados") !== null) {
  mostrarDestacados();
}
