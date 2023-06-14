
export class Marvel {
    constructor() {
        this.publicKey = "961478b3e5212750a2e58d52b80194b4";
        // this.baseUrl = "http://gateway.marvel.com/v1/public/comics"
    }
    async get() {
        const response = await fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=" + this.publicKey + "&hash=38e472a57181cb4380b9a3fc80ce6a23");
        const responseData = await response.json();

        return responseData;
    }

    // getFavorite() {
    //     return new Promise((resolve, reject) => {
    //         fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=" + this.publicKey + "&hash=38e472a57181cb4380b9a3fc80ce6a23")
    //             .then(resp => resp.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err))
    //     })
    // }
}



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
