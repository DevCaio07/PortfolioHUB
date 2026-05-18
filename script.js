console.log("PortfolioHUB iniciado com sucesso!");

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.boxShadow =
            "0px 15px 35px rgba(37, 99, 235, 0.3)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });

});