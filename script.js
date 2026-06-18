const botonesCarrito = document.querySelectorAll(".carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total");

let total = 0;

botonesCarrito.forEach(boton => {

    boton.addEventListener("click", () => {

        const tarjeta = boton.parentElement;

        const nombre = tarjeta.querySelector("h3").innerText;

        let textoPrecio = tarjeta.querySelector("p").innerText;

        textoPrecio = textoPrecio.replace("$", "");
        textoPrecio = textoPrecio.replace(".", "");

        const precio = Number(textoPrecio);

        const item = document.createElement("li");

        item.innerHTML = `
        ${nombre} - $${precio}
        <button class="eliminar">❌</button>
        `;

        listaCarrito.appendChild(item);

        total += precio;
        totalTexto.innerText = total;

        item.querySelector(".eliminar").addEventListener("click", () => {

            listaCarrito.removeChild(item);

            total -= precio;

            totalTexto.innerText = total;

        });

    });

});
