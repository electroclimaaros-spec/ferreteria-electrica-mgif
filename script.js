let cantidad = 0;
let total = 0;

function agregarProducto(precio) {

    cantidad++;

    total += precio;

    document.getElementById("cantidad").innerText = cantidad;

    document.getElementById("total").innerText =
        total.toLocaleString("es-CL");

}
