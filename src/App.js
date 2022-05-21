import { agregarAlCarrito } from "./procesoCarrito.js";
// import { productos } from "./stock.js";
import { getData } from "./getData.js";

const crearListaDeProductos = async () => {
  const tarjeta = document.getElementById("tarjeta");
  const productos = await getData();

  productos.forEach((producto) => {
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
    
    // console.log(producto.codigo);
    const btnAgregar = document.getElementById(`btnAgregar${producto.codigo}`);
    // console.log(btnAgregar);
    btnAgregar.addEventListener("click", () => {
      agregarAlCarrito(producto.codigo);
    });
  });
};





crearListaDeProductos();

