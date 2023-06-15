import { Storage } from "./storage";

// header kısmında yer alan, beğendiğimiz kart sayısını gösteren method

export class Favbutton {
    constructor() {
        this.badges = document.querySelector(".badges");
        this.storage = new Storage();
    }
    getFavBtn(listLength) {
        this.badges.innerHTML = listLength.length;
    }
}