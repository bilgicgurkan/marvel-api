// const crypto = require('crypto');

// export class Marvel {
//     constructor() {
//         this.publicKey = "961478b3e5212750a2e58d52b80194b4";
//         this.privateKey = "ea492254cf36dab95d44797b40428e77bf813d66";
//         this.baseUrl = "http://gateway.marvel.com/v1/public/comics"
//         this.timestamp = new Date().getTime();
//         this.hash = md5(timestamp + privateKey + publicKey);
//         this.url = `${this.baseUrl}?ts=1&apikey=${this.publicKey}&ts=${this.timestamp}&hash=${this.hash}`;
//     }
//     md5(timestamp, privateKey, publicKey) {
//         const hash = crypto.createHash('md5');
//         hash.update(`${timestamp}${privateKey}${publicKey}`);
//         return hash.digest('hex');
//     }
//     async get() {
//         const response = await fetch(url);
//         const responseData = await response.json();

//         return responseData;
//     }
// }



// const crypto = require('crypto');

// class Marvel {
//   constructor() {
//     this.publicKey = "961478b3e5212750a2e58d52b80194b4";
//     this.privateKey = "ea492254cf36dab95d44797b40428e77bf813d66";
//     this.baseUrl = "http://gateway.marvel.com/v1/public/comics";
//     this.timestamp = new Date().getTime();
//     this.hash = md5(this.timestamp + this.privateKey + this.publicKey);
//     this.url = `${this.baseUrl}?ts=1&apikey=${this.publicKey}&ts=${this.timestamp}&hash=${this.hash}`;
//   }

//   md5(data) {
//     const hash = crypto.createHash('md5');
//     hash.update(data);
//     return hash.digest('hex');
//   }

//   async get() {
//     const response = await fetch(this.url);
//     const responseData = await response.json();

//     return responseData;
//   }
// }

// module.exports = Marvel;
