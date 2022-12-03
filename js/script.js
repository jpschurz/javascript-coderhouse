//Elementos DOM
const btn = document.querySelector('#btn');
const lista = document.querySelector('#productos');
const btnProductos = document.querySelector('#btnProductos');
const btnCarrito = document.querySelector('#btnCarrito');
let carritoHTML = document.querySelector('#prodCarrito');


//Lista de productos
const DB = [{
    id: 1,
    nombre: 'Repentless',
    categoria: 'CD',
    precio: 2100,
    img: "<img class='img-conciertos' src='images/productos/cd/judas-priest-painkiller.jpg' />"
    
},
{
    id: 2,
    nombre: 'Live in London',
    categoria: 'DVD',
    precio: 3500,
    img: "<img class='img-conciertos' src='images/productos/dvd/judas-priest-live-in-london.jpeg' />"
},
{
    id: 3,
    nombre: 'Killing Machine',
    categoria: 'VINILO',
    precio: 2200,
    img: "<img class='img-conciertos' src='images/productos/vinilos/judas-priest-killing-machine.jpg' />"
},
{
    id: 4,
    nombre: 'The Big 4 Live from Sofia, Bulgaria',
    categoria: 'BLUERRAY',
    precio: 4200,
    img: "<img class='img-conciertos' src='images/productos/bluerray/metallica-the-big-4-live-from-sofia-bulgaria.jpg' />"
},
]


//Solicitar productos
const pedirProductos = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(DB)
        },100)
    })
}


let carrito = []


//Muestra productos
const renderProductos =(array)=>{
array.forEach(element=>{
    let html = `    
        <section>        
            <div class="grid-img-conciertos">
            ${element.img}
                </div>
                <br>
                <p>${element.nombre} <br> ${element.categoria}</p>
                <p>$ ${element.precio}</p>
                <button class="agregar btn btn-light btn-sm" id=${element.nombre}>
                Comprar
                </button>
                </div>
            </div>
        </section>
    `
    lista.innerHTML += html;
})
}

//Compra producto
btnProductos.addEventListener('click',()=>{ 
    
    //Filtro categoria
    /*const seleccionarCategoria = document.getElementById('btnProductos');

    function selectCategoria(DB, categoria){
        return DB.filter(categoria => categoria.tipo == tipo);
    };

    function mostrarCategoria(DB) {
        for (const categoria of DB) {
            let option = `${element.categoria}`

            categoria.innerHTML += option;
        }
    }
    console.log(selectCategoria)*/

    pedirProductos().then((response)=>{
        let productos = response;
        //console.log(productos);
        renderProductos(productos);
    }).then(()=>{
        const btnAgregar = document.querySelectorAll('button.agregar');
            //console.log(btnAgregar);
            btnAgregar.forEach(element => {
                element.onclick = () => {
                    alertaProductoAgregado()
                    carrito.push(element.id)
                }
            })
    })
})


//Alerta de producto agregado
function alertaProductoAgregado(){
    Toastify({
        text: 'Producto agregado al carrito',
        duration: 2000,
        style: {
            color: 'white',
            width: '20vw',
            height: 80,
            background: 'rgba(139,0,0,1)',
        },
        offset: {
            x: 50,
            y: 10,
        },
    }).showToast();
}


//Muestra carrito
btnCarrito.onclick = () => {
    carritoHTML.innerHTML = '';
    carrito.forEach(element => {
        let html = `
        <li>${element}</li>        
        `
        carritoHTML.innerHTML += html
    });
}