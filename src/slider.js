export class Slider {
    constructor() {
        this.image = document.querySelectorAll(".image");
        this.next = document.querySelector(".next");
        this.prev = document.querySelector(".prev");

        this.sliderSettings();
    }

    sliderSettings() {
        // this.next.addEventListener("click", this.nextImage);
        // this.prev.addEventListener("click", this.prevImage);
        this.next.addEventListener("click", this.nextImage.bind(this));
        this.prev.addEventListener("click", this.prevImage.bind(this));
    }

    nextImage() {
        const activeSlide = document.querySelector(".active");
        activeSlide.classList.remove("active");
        if (activeSlide.nextElementSibling) {
            activeSlide.nextElementSibling.classList.add("active");
        }
        else {
            this.image[0].classList.add("active");
        }
    }

    prevImage() {
        const activeSlide = document.querySelector(".active");
        activeSlide.classList.remove("active");
        if (activeSlide.previousElementSibling) {
            activeSlide.previousElementSibling.classList.add("active");
        }
        else {
            this.image[this.image.length - 1].classList.add("active");
        }
    }
}
