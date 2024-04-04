class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
    agregarImpuestos(tasaImpuestos) {
        this.precio += this.precio * (tasaImpuestos / 100);
    }
}

const productos = [
    new Producto("guitarra", "instrumentos", 600),
    new Producto("piano", "instrumentos", 2000),
    new Producto("trompeta", "instrumentos", 250),
    new Producto("auriculares", "accesorios", 60),
    new Producto("pua", "accesorios", 1),
    new Producto("microfono", "accesorios", 100)
];

function tiendaDeMusica() {
    alert("Bienvenido a la tienda de música.");

    let categoria = prompt("Por favor, ingresa la categoría de producto que deseas explorar (instrumentos o accesorios):").toLowerCase();

    let productosFiltrados = productos.filter(producto => producto.categoria === categoria);

    if (productosFiltrados.length > 0) {
        alert("Productos disponibles en la categoría " + categoria + ": \n\n" + productosFiltrados.map(producto => producto.nombre).join(", "));

        let productoNombre = prompt("Por favor, ingresa el nombre del producto que deseas comprar:").toLowerCase();

        let productoSeleccionado = productosFiltrados.find(producto => producto.nombre === productoNombre);

        if (productoSeleccionado) {
            alert("El precio base de " + productoSeleccionado.nombre + " es de: $" + productoSeleccionado.precio + " dolares");

            let confirmacion = confirm("¿Deseas comprar " + productoSeleccionado.nombre + " por $" + productoSeleccionado.precio + " dolares?");

            if (confirmacion) {
                productoSeleccionado.agregarImpuestos(10); 

                alert("El precio final de " + productoSeleccionado.nombre + " con el impuesto pais aplicados es de: $" + productoSeleccionado.precio + " dolares");

                alert("¡Gracias por tu compra! Disfruta de tu " + productoSeleccionado.nombre + ".");
            } else {
                alert("¡Esperamos que vuelvas pronto!");
            }
        } else {
            alert("Lo siento, ese producto no está disponible en nuestra tienda.");
        }
    } else {
        alert("Lo siento, no hay productos disponibles en la categoría " + categoria + ".");
    }
    alert("¡Gracias por visitar nuestra tienda de música!");
}

tiendaDeMusica();