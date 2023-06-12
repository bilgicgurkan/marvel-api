export class Header {
    constructor() {
        this.header = document.querySelector("header");
    }
    headerColor() {
        window.onscroll = () => {
            const top = window.scrollY;
            if (top >= 70) {
                this.header.classList.add("onScroll");
                this.header.style.transition = "ease-in-out 0.4s"
            }else {
                this.header.classList.remove("onScroll");
            }
        }
    }
}