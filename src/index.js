import { Slider } from "./slider";
// import { Marvel } from "./marvelAPI";

const slider = new Slider();
// const marvel = new Marvel();

slider.nextImage();
slider.prevImage();

// eventListeners();

// function eventListeners() {
//     document.addEventListener("DOMContentLoaded", showItem);
// }

// function showItem() {
//     marvel.get()
//         .then(data => {
//             console.log(data);
//         })
//         .catch(err => console.log(err))
// };

const crypto = require('crypto');
const fetch = require('node-fetch');

const publicKey = '961478b3e5212750a2e58d52b80194b4';
const privateKey = 'ea492254cf36dab95d44797b40428e77bf813d66';
const ts = new Date().getTime().toString();
const hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex');

const url = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // İstek sonucunu burada kullanabilirsiniz
        console.log(data);
    })
    .catch(error => {
        // Hata durumunda burada işlem yapabilirsiniz
        console.error(error);
    });
