export class Favorite {
    constructor() {

    }

    showFavoriteButton() {
        const cardAreas = document.querySelectorAll(".card-area");

        cardAreas.forEach(cardArea => {
            const favoriteButton = cardArea.querySelector(".favorite-button");

            cardArea.addEventListener("mouseover", () => {
                favoriteButton.style.display = "block";
            });

            cardArea.addEventListener("mouseleave", () => {
                favoriteButton.style.display = "none";
            });
        });
    }

}