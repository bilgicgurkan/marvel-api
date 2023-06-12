import { Slider } from "./slider";
import { Marvel } from "./marvelAPI";
import { UI } from "./ui";
import { Header } from "./headerScroll";
import { Modal } from "./openImageModal";

const modal = new Modal();
const slider = new Slider();
const marvel = new Marvel();
const ui = new UI();
const header = new Header();

modal.openModal();
header.headerColor();
slider.nextImage();
slider.prevImage();

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", showItem);
}

function showItem() {
    marvel.get()
        .then(data => {
            console.log(data.data.results)
            ui.showMovieList(data.data.results);
        })
        .catch(err => console.log(err))
};

