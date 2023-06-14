import { Storage } from "./storage";

export class Favbutton {
    constructor() {
        this.badges = document.querySelector(".badges");
        this.storage = new Storage();
    }
    getFavBtn(listLength) {
        this.badges.innerHTML = listLength.length;
    }
}