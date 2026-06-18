const botonesCarrito = document.querySelectorAll(".carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total");

let total = 0;

function actualizarTotal() {
    totalTexto.innerText = total;
}

botonesCarrito.forEach(boton => {

    boton.addEventListener("click", () => {

        const tarjeta = boton.parentElement;

        const nombre = tarjeta.querySelector("h3").innerText;

        const precio = Number(
            tarjeta.querySelector("p")
                .innerText
                .replace(/\$/g, "")
                .replace(/\./g, "")
                .trim()
        );

        if (isNaN(precio)) {
            return;
        }

        const item = document.createElement("li");

        item.innerHTML = `
            ${nombre} - $${precio}
            <button class="eliminar">❌</button>
        `;

        listaCarrito.appendChild(item);

        total += precio;

        actualizarTotal();

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
