//Elementos DOM
const btnComprar = document.querySelector('#comprar');


//Clase constructora de objetos
class Producto {
    constructor(categoriaProducto, nombreProducto, bandaProducto, precioProducto, stockProducto) {
        this.categoria = categoriaProducto;
        this.banda = bandaProducto;
        this.nombre = nombreProducto;
        this.precio = precioProducto;
        this.stock = parseInt(stockProducto)
    }

}

//Lista de productos
const productos = [
    new Producto('CD', 'Slayer', 'Repentless', 2100, 15),
    new Producto('DVD', 'Judas Priest', 'Live in London', 3500, 4),
    new Producto('VINILO', 'Judas Priest', 'Killing Machine', 2200, 2),
    new Producto('BLUERRAY', 'Metallica', 'The Big 4 Live from Sofia, Bulgaria', 4200, 8),
]

//Cargar producto
//productos.push(new Producto('CD', 'Sonata Arctica', 'Ecliptica ', 2700, 5))

btnComprar.onclick = (e) => {
    e.preventDefault;
    console.log('El stock es de ' + productos.push);
    productos.stock > 0 ? alert('Gracias por tu compra') : alert('Producto sin stock');
}

console.log(productos)

let total = 0

for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio
}

console.log(total)


/*btnComprar.onclick = (e) => {
    e.preventDefault;
    console.log('El stock es de ' + productos.push);
    productos.stock > 0 ? alert('Gracias por tu compra') : alert('Producto sin stock');
}*/

function buscar(array, criterio, input) {
    return array.filter((item) => item[criterio].includes(input))
}