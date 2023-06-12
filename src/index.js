import { Slider } from "./slider";
import { Marvel } from "./marvelAPI";
import { UI } from "./ui";
import { Header } from "./headerScroll";

const slider = new Slider();
const marvel = new Marvel();
const ui = new UI();
const header = new Header();

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

