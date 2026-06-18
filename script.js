const botonesCarrito = document.querySelectorAll(".card .carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total");

let total = 0;

function actualizarTotal() {
    totalTexto.innerText = total.toLocaleString("es-CL");
}

botonesCarrito.forEach((boton) => {

    boton.addEventListener("click", () => {

        const tarjeta = boton.parentElement;

        const nombre = tarjeta.querySelector("h3").innerText;

        let precioTexto = tarjeta.querySelector("p").innerText;

        // Eliminar $ y puntos
        precioTexto = precioTexto
            .replace(/\$/g, "")
            .replace(/\./g, "")
            .trim();

        const precio = parseInt(precioTexto);

        if (isNaN(precio)) {
            console.error("Precio inválido:", precioTexto);
            return;
        }

        // Crear elemento del carrito
        const item = document.createElement("li");

        item.innerHTML = `
            ${nombre} - $${precio.toLocaleString("es-CL")}
            <button class="eliminar">❌</button>
        `;

        listaCarrito.appendChild(item);

        total += precio;
        actualizarTotal();

        // Botón eliminar
        const botonEliminar = item.querySelector(".eliminar");

        botonEliminar.addEventListener("click", () => {

            total -= precio;

            if (total < 0) {
                total = 0;
            }

            item.remove();

            actualizarTotal();

        });

    });

});
