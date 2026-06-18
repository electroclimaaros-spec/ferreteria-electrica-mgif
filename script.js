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


const botonesCarrito = document.querySelectorAll(".card button");
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

        item.textContent = nombre + " - $" + precio;

        listaCarrito.appendChild(item);

        total += precio;

        totalTexto.textContent = total;

    });

});
