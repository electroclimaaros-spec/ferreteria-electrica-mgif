const botones = document.querySelectorAll(".categorias button");
const tarjetas = document.querySelectorAll(".card");

botones.forEach(boton => {

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
