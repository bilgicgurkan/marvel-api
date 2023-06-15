export class Favorite {
    constructor() {

    }

    // kartların üzerine geldiğimizde beğeni butonunun çıkmasını sağlayan method

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