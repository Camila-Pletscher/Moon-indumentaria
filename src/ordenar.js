import { getData } from "./getData.js";
const productos = await getData();
import {agregarAlCarrito} from "./procesoCarrito.js";

let productosOrdenados = [];
console.log(productos);

let orden = document.querySelector('.orden');

orden.addEventListener('change', ordenar);
console.log(orden.value);

function ordenar() {
    console.log(orden.value);
    if (orden.value == 1) {
      productosOrdenados = productos.sort ((a,b) => b.precio - a.precio);
      console.log(productosOrdenados);
    } else if (orden.value == 2) {
      productosOrdenados = productos.sort ((a,b) => a.precio - b.precio);
    } else if (orden.value == 3) {
      productosOrdenados = productos.sort ((a,b) => a.nombre.localeCompare(b.nombre));
      console.log(productosOrdenados);
    }
    crearListaProductosOrdenados();
    productosOrdenados = [];
}



const crearListaProductosOrdenados = async () => {
    const tarjeta = document.getElementById("tarjeta");
    tarjeta.innerHTML = "";
  
    productosOrdenados.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.classList.add("col-4");
      div.classList.add("p-3");
      div.innerHTML += `
                        <img src="${producto.img}" class="card-img-top" alt="" />
                        <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$${producto.precio}</p>
                        <a class="btn-floating btn-large waves-effect waves-light amber" id=btnAgregar${producto.codigo}><i class="material-icons">add_shopping_cart</i></a>    
                        
                        </div>`;
      tarjeta.appendChild(div);
      
      
      const btnAgregar = document.getElementById(`btnAgregar${producto.codigo}`);
      
      btnAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto.codigo);
      });
    });
  };


