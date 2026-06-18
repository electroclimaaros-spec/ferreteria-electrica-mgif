const botonesFiltro = document.querySelectorAll(".categorias button");
const tarjetas = document.querySelectorAll(".card");

botonesFiltro.forEach(boton => {

    boton.addEventListener("click", () => {

        const filtro = boton.dataset.filtro;

        tarjetas.forEach(card => {

            if (card.dataset.categoria === filtro) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

const botonesCarrito = document.querySelectorAll(".carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total");

let total = 0;

botonesCarrito.forEach(boton => {

    boton.addEventListener("click", () => {

        const tarjeta = boton.parentElement;

        const nombre = tarjeta.querySelector("h3").textContent;

        const precio = parseInt(
            tarjeta.querySelector("p")
            .textContent
            .replace("$", "")
            .replace(".", "")
        );

        const item = document.createElement("li");

        item.innerHTML = `
        ${nombre} - $${precio}
        <button class="eliminar">❌</button>
        `;

        listaCarrito.appendChild(item);

        total += precio;
        totalTexto.textContent = total;

        item.querySelector(".eliminar").addEventListener("click", () => {

            listaCarrito.removeChild(item);

            total -= precio;
            totalTexto.textContent = total;

        });

    });

});
