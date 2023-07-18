// Declaración de funciones ingreso

function confirmarDatos() {
    const usuario = 'ailen';
    const contrasenia = 'figueiras';

    while (true) {
        let usuarioIngresado = prompt('Ingrese su usuario').toLowerCase();
        let contraseniaIngresada = prompt('Ingrese su contraseña').toLowerCase();

        if (usuarioIngresado === usuario && contraseniaIngresada === contrasenia) {
            alert('Bienvenido a la tienda online de Artesanías Ailen');
            break; // Finaliza el ciclo cuando todo es true y te da el ingreso a la tienda online.
        } else {
            alert('El usuario y/o la contraseña no coinciden, ingrese de nuevo');
        }
    }
}

// Ejecución de función

confirmarDatos();

// Declaración de array 'productos'

let productos = [
    {
        idProducto: 1,
        nombre: 'Títeres de dedo',
        precio: 50,
        descripcion: 'Títeres de dedo hechos con tela de polar para el dedil y de goma eva.'
    },
    {
        idProducto: 2,
        nombre: 'Títeres de guante',
        precio: 100,
        descripcion: 'Títere de guante con personaje de cuentos.'
    },
    {
        idProducto: 3,
        nombre: 'Títeres bocones',
        precio: 80,
        descripcion: 'Títeres bocones de tela polar con ojitos móviles.'
    },
    {
        idProducto: 4,
        nombre: 'susurrador',
        precio: 500,
        descripcion: 'Susurrador para contar poesías al oído.'
    }
]

// Mostrar los productos al usuario

let muestraProdutos = '';
for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    muestraProdutos += 'Id: ' + producto.idProducto + '\n';
    muestraProdutos += 'Nombre: ' + producto.nombre + '\n';
    muestraProdutos += 'Precio: $' + producto.precio + '\n';
    muestraProdutos += 'Descripción: ' + producto.descripcion + '\n\n';
}

alert('Productos disponiles: \n ' + muestraProdutos);

// Variables

let carritoDeCompras = [];
let precioTotal = 0;

// Seleccionador de productos por parte del usuario para llenar el array correspondiente al carrito de compras.

let valorBooleano = true;

while (valorBooleano) {
    // Ingresar el producto (ID) o finalizar para terminar la compra.
    let seleccion = prompt('Ingrese el ID del producto que desea agregar al carrito (1.' + productos.length + '), o ingrese "finalizar" para terminar la compra').toLowerCase();

    if (seleccion === 'finalizar') {
        // Fin de compra
        valorBooleano = false;
    } else {
        // Convertir la selección en un número entero
        let seleccionNum = parseInt(seleccion);

        // Verificar si la selección es un número válido
        if (!isNaN(seleccionNum) && seleccionNum >= 1 && seleccionNum <= productos.length) {
            // Obtener el producto seleccionado
            let productoSeleccionado = productos.find(function (producto) {
                return producto.idProducto === seleccionNum;
            });

            // Agregar el producto al carrito y sumar el precio total
            carritoDeCompras.push(productoSeleccionado);
            precioTotal += productoSeleccionado.precio;

            alert('Producto agregado al carrito: ' + productoSeleccionado.nombre);
        } else {
            alert('Selección inválida. Por favor, ingrese un ID válido del 1 al ' + productos.length + ' o "finalizar" para terminar la compra.');
        }
    }
}

// Mostrar los productos en el carrito de compras y el total de precio al usuario

let mostrarCarrito = "";
for (let i = 0; i < carritoDeCompras.length; i++) {
    let producto = carritoDeCompras[i];
    mostrarCarrito += 'Nombre: ' + producto.nombre + '\n';
    mostrarCarrito += 'Precio: ' + producto.precio + '\n\n';
}
alert('Productos en el carrito:\n\n' + mostrarCarrito + 'Total de precio: $' + precioTotal);

alert('Compra finalizada con éxito!')