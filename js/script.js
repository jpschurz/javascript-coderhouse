//Elementos DOM
const btn = document.querySelector('#btn')
const foto = document.querySelector('.foto')
const lista = document.querySelector('#productos');
const btnProductos = document.querySelector('#btnProductos');
const btnCarrito = document.querySelector('#btnCarrito');
let carritoHTML = document.querySelector('#prodCarrito');

//Clase constructora de objetos
/*class Producto {
    constructor(categoriaProducto, nombreProducto, bandaProducto, precioProducto, stockProducto) {
        this.categoria = categoriaProducto;
        this.banda = bandaProducto;
        this.nombre = nombreProducto;
        this.precio = precioProducto;
        this.stock = parseInt(stockProducto)
    }

}*/

//Lista de productos
/*const producto_0 = new producto('CD', 'Slayer', 'Repentless', 2100, 15);
const producto_1 = new producto('DVD', 'Judas Priest', 'Live in London', 3500, 4);
const producto_2 = new producto('VINILO', 'Judas Priest', 'Killing Machine', 2200, 2);
const producto_3 = new producto('BLUERRAY', 'Metallica', 'The Big 4 Live from Sofia, Bulgaria', 4200, 8);

const listaProductos = [producto_0, producto_1, producto_2, producto_3];*/


const DB = [{
    id: 1,
    nombre: 'Repentless',
    precio: 2100,
    img: "<img src='images/productos/cd/judas-priest-painkiller.jpg' />"
    
},
{
    id: 2,
    nombre: 'Live in London',
    precio: 3500,
    img: "<img src='images/productos/dvd/judas-priest-live-in-london.jpeg' />"
},
{
    id: 3,
    nombre: 'Killing Machine',
    precio: 2200,
    img: "<img src='images/productos/vinilos/judas-priest-killing-machine.jpg' />"
},
{
    id: 4,
    nombre: 'The Big 4 Live from Sofia, Bulgaria',
    precio: 4200,
    img: "<img src='images/productos/bluerray/metallica-the-big-4-live-from-sofia-bulgaria.jpg' />"
},
]

const pedirProductos = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(DB)
        },2000)
    })
}



let carrito = []


let tiempo = 2500;
btn.onclick=()=>{
    foto.classList.add('visible');
    setTimeout(()=>{
        foto.classList.remove('visible')
    },tiempo);
}

const renderProductos =(array)=>{
array.forEach(element=>{
    let html = `<li>${element.nombre} $ ${element.precio}</li>
    ${element.img}    
    <button class="agregar" id=${element.nombre}>Agregar</button>`
    lista.innerHTML += html;
})
}


btnProductos.addEventListener('click',()=>{
    pedirProductos().then((response)=>{
        let productos = response;
        console.log(productos);
        renderProductos(productos);
    }).then(()=>{
        const btnAgregar = document.querySelectorAll('button.agregar');
            //console.log(btnAgregar);
            btnAgregar.forEach(element => {
                element.onclick = () => {
                    carrito.push(element.id)
                }
            })
    })
})


btnCarrito.onclick = () => {
    //carritoHTML.innerHTML = '';
    carrito.forEach(element => {
        let html = `<li>${element} agregado al carrito</li>`
        carritoHTML.innerHTML += html

    });
}


