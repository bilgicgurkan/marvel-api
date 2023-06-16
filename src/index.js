import { Slider } from "./slider";
import { Marvel } from "./marvelAPI";
import { UI } from "./ui";
import { Header } from "./headerScroll";
import { Modal } from "./openImageModal";
import { Favorite } from "./favorites";
import { Storage } from "./storage";
import { Favbutton } from "./favButton";

const favButton = new Favbutton();
const storage = new Storage();
const favorite = new Favorite();
const modal = new Modal();
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
    document.addEventListener("DOMContentLoaded", showFavLength);
}


function showItem() {
    marvel.get()
        .then(data => {
            ui.showMovieList(data.data.results);
            // ui.showInfos(data.data.results);
            favorite.showFavoriteButton();
            modal.openModal();
            storage.findIDandAddStorage();
        })
        .catch(err => console.log(err))
};


// favoriye eklenenlerin sayısını gösteren fonksiyon
function showFavLength() {
    let listLength = storage.getStorageList();
    favButton.getFavBtn(listLength);
}