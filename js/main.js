class Producto {
    constructor(idProd, precio, nombre, ima, stock, tipo) {
        this.idProd = idProd;
        this.precio = precio;
        this.nombre = nombre;
        this.imagen =ima;
        this.stock = stock;
    }

}

class Cliente {
    constructor(idcliente, nombrecli, Apellido) {
        this.idcliente = idcliente;
        this.nombrecli = nombrecli;
        this.Apellido = Apellido;
    }

}

function ordenarAZ(prod) {
    prod.sort((x, y) => x.nombre - y.nombre);
}

let idProd = "";
let idPrecio;
let prod = "";
let total = 0;
let clientee ;

let usuariosss ="";

const cantidadProds = 6;
const productos = [];



const mates = ["Stitch", "Piston", "Grogu", "Deadpool", "Gokú", "Storm Trooper"];

const precios = [1500, 1700, 1800, 2000, 1400, 1900];

const imagenes=  ["./img/imagen1.jpg", "./img/piston.jpg", "./img/grogu.jpg", "./img/Deadpool.jpg", "./img/GOKU.jpg", "./img/storm.jpg"];

idProd = "tituMate";
idPrecio = "precio";
idimg = "img";
prod = "Mate ";

//creo los objetos productos
for (let i = 1; i <= cantidadProds; i++) {
    productos.push(new Producto(i, precios[i - 1], mates[i - 1],imagenes[i-1], 5))

}

function cargarUsuarios(){
    fetch('./usuarios.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
        })
}
cargarUsuarios();

let ingreso= document.getElementById("ingreso");
ingreso.onclick= agregarcli;
function agregarcli(){
    var objetivos = document.getElementById("infousuario")    
clientee = new Cliente(1, document.getElementById("user").value, document.getElementById("apellido").value);
objetivos.innerHTML ="Usuario: " + clientee.nombrecli +" "+ clientee.Apellido;
return(false)
}


// insterto los nombres de los productos
let tabsContenedor = document.getElementById("contenedortab") ;

for (const produ of productos) {
    let tabprod= document.createElement('div');
    tabprod.className="col-md-4";
    tabprod.innerHTML= `<div >
    <div class="card"> <img id="img${produ.idProd}" src="${produ.imagen}" class="card-img-top">
        <div class="card-body">
            <div class="d-flex justify-content-between"> <span id="Mate${produ.idProd}"
                    class="font-weight-bold">${produ.nombre}</span> <span id="precio${produ.idProd}"
                    class="font-weight-bold">Precio: $${produ.precio}</span> </div>
            <p class="card-text mb-1 mt-1">Mate impreso en 3D con polimero interno apto para
                consumo.</p>
            <div class="d-flex align-items-center flex-row"> <img src="./img/alerta.png"
                    width="20"> <span class="guarantee">Oferta!!!</span> </div>
        </div>
        <hr>
        <div class="card-body">
            <div class="text-right buttons"> <button class="btn btn-outline-dark">Agregar a
                    Favoritos</button> <button id="boton${produ.idProd}" onclick="agregar(${produ.idProd})" class="btn btn-dark">Agregar 
                    al carrito</button> </div>
        </div>
    </div>
</div>`;
//pongo onclick porque me cargaba todos los usando boton.onclick me sumaba todos los productos al cargar la pagina
tabsContenedor.append(tabprod);



}

//Funcion para ir agregando los productos elegidos al carrito

function agregar(id) {
    total = total + precios[parseInt(id) - 1];

    if (parseInt(id) < 7) {
        var totalc = document.getElementById("totalCarrito")  
        totalc.innerHTML="Total de compra: " + total ;
//        alert("Sr/a" + clientee.nombrecli + " se agregó Mate " + mates[parseInt(id) - 1] + "  al carrito, $ " + precios[parseInt(id) - 1] + ". Total de compra: " + total)
    }    
};


