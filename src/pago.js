

let carrito = JSON.parse(localStorage.getItem("productosAgregados"));
console.log(carrito);

function finalizarCompra() {
    let listaProductos = document.querySelector(".collection");
    listaProductos.innerHTML = "";

    carrito.forEach(producto => {
        let li = document.createElement("li");
        li.classList.add("collection-item");
        li.classList.add("avatar");
        li.innerHTML = `<img src="${producto.img}" alt="" class="circle">
        <span class="title">${producto.nombre}</span>
        <p>${producto.precio} <br>
           Cantidad: ${producto.cantidad}
        </p>`;

        listaProductos.appendChild(li);
    })
    

    
}

finalizarCompra();
calcularCuotas(carrito);

function calcularCuotas (carrito) {
    let divProductosCompra = document.querySelector(".divProductosCompra");
    //Toma los elementos del array y de ellos calcula precio por la cantidad, no lo acumula y lo devuelve
    let precioSubtotalCompra = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
    if (precioSubtotalCompra > 6000) {
      precioSubtotalCompra = precioSubtotalCompra * 0.90;
      divProductosCompra.innerHTML += `<p>Felicitaciones! Tu compra supera los $6000, tenes el 10% off. <br> El precio total es de $ ${precioSubtotalCompra}</p>`
    } else {
        divProductosCompra.innerHTML += `<p>El precio total de tu pedido es de $${precioSubtotalCompra}</p>`
    }
    let input = document.querySelector('.input-field');
    let select = document.querySelector('.browser-default');
    select.innerHTML = `<option value="" disabled selected>Elegí tus cuotas</option>
    <option value="1">3 cuotas de $${precioSubtotalCompra / 3} sin interés</option>
    <option value="2">6 cuotas de $${precioSubtotalCompra / 6} sin interés</option>
    <option value="3">12 cuotas de $${precioSubtotalCompra / 12} sin interés</option>`;

  }

  


