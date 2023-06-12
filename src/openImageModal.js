// export class Modal {
//     constructor() {
//         this.image = document.querySelectorAll("img");
//         this.openModal = document.querySelector(".openModal");
//         this.imgDesc = document.querySelectorAll(".photo");
//     }
//     openModal() {
//         this.image.forEach((imgText) => {
//             imgText.addEventListener("click", () => {
//                 if (imgText.classList.contains("selectedPhoto")) {
//                     this.openModal.style.display = "block";
//                     // this.openModal.innerHTML = `
//                     //     <div class="close">&times;</div>
//                     //     <img src= ${this.src} class="modalPic">
//                     //     <div class="desc">${this.alt}</div>
//                     // `;
//                 };
//                 const closeModal = document.querySelector(".close");
//                 if (closeModal.addEventListener("click", () => {
//                     this.openModal.style.display = "none";
//                 }));
//             });
//         });
//     }
// }


// const image = document.querySelectorAll("img");
// const openModal = document.querySelector(".openModal");
// const imgDesc = document.querySelectorAll(".photo");

// image.forEach(function (imgText) {
//     imgText.addEventListener("click", function () {
//         if (imgText.classList.contains("selectedPhoto")) {
//             openModal.style.display = "block";
//             openModal.innerHTML = `
//                 <div class="close">&times;</div>
//                 <img src= ${this.src} class="modalPic">
//                 <div class="desc">${this.alt}</div>
//             `;
//         };
//         const closeModal = document.querySelector(".close");
//         if (closeModal.addEventListener("click", function () {
//             openModal.style.display = "none";
//         }));
//     });
// });



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
