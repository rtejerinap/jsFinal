
let total = 0;
let tabsContenedor = document.getElementById("contenedortab");


const cargarUsuarios = async () => {
    const response = await fetch('./usuarios.json');
    const resulta = await response.json();
    return resulta;
}

const getMates = async () => {
    const response = await fetch('./data.json');
    const result = await response.json();
    console.log(result);
    return result;
}

// insterto los nombres de los productos
const cargarTabs = async () => {

    const productos = await getMates();
    console.log(productos);
    for (const produ of productos) {
        const { nombre, precio, idProd, imagen, stock } = produ;
        const tabprod = document.createElement('div');
        tabprod.className = "col-md-4";
        tabprod.innerHTML = `<div >
    <div class="card"> <img id="img${idProd}" src="${imagen}" class="card-img-top">
        <div class="card-body">
            <div class="d-flex justify-content-between"> <span id="Mate${idProd}"
                    class="font-weight-bold">${nombre}</span> <span id="precio${idProd}"
                    class="font-weight-bold">Precio: $${precio}</span> </div>
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
}
const agregarcli = async () => {
    const login = await cargarUsuarios();
    console.log(login);

    var objetivos = document.getElementById("infousuario")
    for (const clie of login) {
        const { id, firstName, lastName, password } = clie;
        console.log(document.getElementById("pass").value);
        console.log(firstName);
        {
            if ((document.getElementById("user").valu == firstName) || (document.getElementById("pass").value == password)) {
                objetivos.innerHTML = "Usuario: " + firstName + " " + lastName;

                Swal.fire({
                    title: 'Genial!',
                    text: 'Haz ingresado al Sistema ',
                    icon: 'success',
                    confirmButtonText: 'Volver'
                })

                break;
            }
        }
    }

}



let ingreso = document.getElementById("ingreso");
ingreso.onclick = agregarcli;



cargarTabs();

//Funcion para ir agregando los productos elegidos al carrito

const agregar = async (id) => {
    const productos = await getMates();
    console.log(productos[parseInt(id) - 1].precio)

    total = total + productos[parseInt(id) - 1].precio;

    if (parseInt(id) < 7) {
        var totalc = document.getElementById("totalCarrito")
        totalc.innerHTML = "Total de compra: " + total;
        //        alert("Sr/a" + clientee.nombrecli + " se agregó Mate " + mates[parseInt(id) - 1] + "  al carrito, $ " + precios[parseInt(id) - 1] + ". Total de compra: " + total)
    }
    Swal.fire({
        title: 'Genial!',
        text: 'Haz agregado un Mate al carrito ',
        icon: 'success',
        confirmButtonText: 'Volver'
    })

};


