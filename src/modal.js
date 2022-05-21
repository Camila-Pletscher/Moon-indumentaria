const modal = document.querySelector('.modal');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('cerrar');
const modalDialog = document.querySelector('.modal-dialog');

abrirCarrito.addEventListener("click", () => {
    modal.classList.toggle('modal-active')
})

cerrarCarrito.addEventListener("click", () => {
    modal.classList.toggle('modal-active')
})


modal.addEventListener('click', () => {
    cerrarCarrito.click();
})

modalDialog.addEventListener('click', (e) => {
    e.stopPropagation();
})