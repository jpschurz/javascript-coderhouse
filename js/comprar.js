alert("Hola usuario! selecciona la categoria que queres comprar.");

comprar()

function comprar() {

    let categorias = prompt('Elegí una opción: \n1- CD \n2 - VINILO \n3 - DVD \n4 - BLUERRAY');

    switch (categorias) {
        case '1':
            alert('Elegiste un CD');
            break;
        case '2':
            alert('Elegiste un VINILO');
            break;
        case '3':
            alert('Elegiste un DVD');
            break;
        case '4':
            alert('Elegiste un BLUERRAY');
            break;
        default:
            alert('Elegiste una opción inválida');
    }

    //Cargar otra categoria
    let avanzar = true;
    let categoriaSeleccionada = prompt('¿Deseas seleccionar otra categoria? \n Si ó No');

    while (avanzar) {
        /*if(seleccionarOtro===categoriaSeleccionada){*/
        if (categoriaSeleccionada == 'si' || categoriaSeleccionada == 'sí' || categoriaSeleccionada == 'Si' || categoriaSeleccionada == 'Sí' || categoriaSeleccionada == 'SI' || categoriaSeleccionada == 'sI') {
            seleccionarCategoria();
            avanzar = false;
            break;
        }
        // Selecciona productos
        seleccionarProducto()
        break;
    }
}

function seleccionarProducto() {

    let bandas = prompt('Elegí una opción: \n1- Slayer \n2 - Judas Priest \n3 - Metallica \n4 - Motorhead');

    switch (bandas) {
        case '1':
            alert('Elegiste Slayer');
            break;
        case '2':
            alert('Elegiste un Judas Priest');
            break;
        case '3':
            alert('Elegiste un Metallica');
            break;
        case '4':
            alert('Elegiste un Motorhead');
            break;
        default:
            alert('Elegiste una opción inválida');
    }

    //Cargar otra categoria
    let avanzar = true;
    let bandaSeleccionada = prompt('¿Deseas seleccionar otro producto? \n Si ó No');

    while (avanzar) {
        /*if(seleccionarOtro===bandaSeleccionada){*/
        if (bandaSeleccionada == 'si' || bandaSeleccionada == 'sí' || bandaSeleccionada == 'Si' || bandaSeleccionada == 'Sí' || bandaSeleccionada == 'SI' || bandaSeleccionada == 'sI') {
            seleccionarProducto();
            avanzar = false;
            break;
        }
        //Mostrar compra
        mostrarCompra()
        break;
    }
}

mostrarCompra()

function mostrarCompra() {

    // Selecciona productos
    class Producto {

        constructor(banda, categoria) {
            // this.nombre = nombre.toUpperCase();
            this.banda = bandas.toUpperCase();
            // this.año = parseInt(año);
            this.categoria = categorias;
            // this.precio = parseFloat(precio);
            // this.vendido = false;
        }

        // sumarIVA() {
        //     this.precio = this.precio * 1.21;
        // }

        // vender() {
        //     this.vendido = true;
        // }
    }

    const producto1 = new Producto(bandas, categorias);

    console.log(producto1);

}