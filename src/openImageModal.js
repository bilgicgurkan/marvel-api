export class Modal {
    constructor() {
        this.openImage = document.querySelector(".openModal");
    }
    openModal() {
        window.addEventListener("click", (e) => {
            if (e.target.firstElementChild.id === "banner-image") {
                const imageURL = e.target.firstElementChild.getAttribute('src');
                this.openImage.innerHTML =
                    `
                        <img src="${imageURL}" alt="">
                    `
                this.openImage.style.display = "block";
            } else {
                this.closeModal();
            }
        })
    }
    closeModal() {
        this.openImage.style.display = "none";
        // this.modalImage.src = "";
    }
}
