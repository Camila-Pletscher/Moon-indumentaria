
setTimeout(preloader, 3000);

function preloader() {
    let divPago = document.querySelector('.mensajePago');
    divPago.innerHTML = `<i class="large material-icons">credit_card</i>
        
    <p id="text_00">Muchas gracias por elegirnos</p>
    <br>
    <p id="text_01">Su compra fue confirmada con éxito</p>
    <br>
    <p id="text_02">Le enviaremos toda la información de su pedido via mail</p>`
}