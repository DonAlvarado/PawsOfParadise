// Definición de productos disponibles
let productos = [
    { id: 1, nombre: "Producto 1", precio: 10.00 },
    { id: 2, nombre: "Producto 2", precio: 15.00 },
    { id: 3, nombre: "Producto 3", precio: 20.00 },
    { id: 4, nombre: "Producto 4", precio: 20.00 },
    { id: 5, nombre: "Producto 5", precio: 20.00 },
    { id: 6, nombre: "Producto 6", precio: 20.00 },
    { id: 7, nombre: "Producto 7", precio: 20.00 },
    { id: 8, nombre: "Producto 8", precio: 20.00 },
    { id: 9, nombre: "Producto 9", precio: 20.00 },
    { id: 10, nombre: "Producto 10", precio: 20.00 },
    { id: 11, nombre: "Producto 11", precio: 20.00 },
    { id: 12, nombre: "Producto 12", precio: 20.00 },
    { id: 13, nombre: "Producto 13", precio: 20.00 },
    { id: 14, nombre: "Producto 14", precio: 20.00 },
    { id: 15, nombre: "Producto 15", precio: 20.00 }
    // Agrega más productos según sea necesario
];

// Variable para almacenar los productos agregados al carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    let producto = productos.find(producto => producto.id === id);
    carrito.push(producto);
    console.log("Producto agregado al carrito:", producto);
}

// Función para procesar la compra
function comprar() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío. Agrega algunos productos antes de comprar.");
        return;
    }

    let total = 0;
    console.log("Has comprado los siguientes productos:");
    carrito.forEach(producto => {
        console.log(`${producto.nombre} - $${producto.precio}`);
        total += producto.precio;
    });

    console.log(`Total: $${total}`);
    carrito = [];
    actualizarCarrito();
    console.log("Gracias por tu compra. Tu carrito ha sido vaciado.");
}

// Función para mostrar u ocultar el carrito
function toggleCart() {
    let cartContent = document.getElementById('cartContent');
    if (cartContent.style.display === 'block') {
        cartContent.style.display = 'none';
    } else {
        cartContent.style.display = 'block';
        mostrarCarrito();
    }
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    let cartContent = document.getElementById('cartContent');
    cartContent.innerHTML = '';

    if (carrito.length === 0) {
        cartContent.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        let cartItems = '<ul>';
        carrito.forEach(producto => {
            cartItems += `<li>${producto.nombre} - $${producto.precio}</li>`;
        });
        cartItems += '</ul>';
        cartContent.innerHTML = cartItems;
    }
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    carrito.forEach(producto => {
        let li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        cartItems.appendChild(li);
    });
}
