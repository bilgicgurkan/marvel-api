export class Modal {
    constructor() {
        this.openImage = document.querySelector(".openModal");
    }

    // openModal() {
    //     const imgModal = document.querySelectorAll(".banner-area");
    //     console.log(imgModal)
    //     window.addEventListener("click", (e) => {
    //         if(e.target.className === imgModal.className){
    //             console.log("oldu")
    //         }
    //     })
    // }

    openModal() {
        const imgModals = document.querySelectorAll(".banner-area");

        window.addEventListener("click", (e) => {
            const isImgModal = Array.from(imgModals).some(imgModal => imgModal.contains(e.target));

            if (isImgModal) {
                const imageURL = e.target.firstElementChild.getAttribute('src');
                this.openImage.innerHTML =
                    `
                                    <img src="${imageURL}" alt="">
                                `
                this.openImage.style.display = "block";
            } else {
                this.closeModal();
            }
        });
    }


    closeModal() {
        this.openImage.style.display = "none";
    }
}





// openModal() {
//     window.addEventListener("click", (e) => {
//         console.log(e.target.firstElementChild.id)
//         let id = e.target.firstElementChild.id
//         if (id === "banner-image") {
//             const imageURL = e.target.firstElementChild.getAttribute('src');
//             this.openImage.innerHTML =
//                 `
//                     <img src="${imageURL}" alt="">
//                 `
//             this.openImage.style.display = "block";
//         } else {
//             this.closeModal();
//         }
//     })
// }