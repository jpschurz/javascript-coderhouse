function Producto(categoria, nombre, banda, precio) {
    this.categoria = categoria
    this.banda = banda
    this.nombre = nombre
    this.precio = precio
}

const productos = [
    new Producto('CD', 'Slayer', 'Repentless', 2100),
    new Producto('DVD', 'Judas Priest', 'Live in London', 3500),
    new Producto('VINILO', 'Judas Priest', 'Killing Machine', 2200),
    new Producto('BLUERRAY', 'Metallica', 'The Big 4 Live from Sofia, Bulgaria', 4200),
]

productos.push(new Producto('CD', 'Sonata Arctica', 'Ecliptica ', 2700))

console.log(productos)

let total = 0

for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio
}

console.log(total)