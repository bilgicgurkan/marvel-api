class CategoryAPI {
    constructor() {
        this.publicKey = "961478b3e5212750a2e58d52b80194b4";
        // this.baseUrl = "http://gateway.marvel.com/v1/public/comics"
    }
    async get() {
        const response = await fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=" + this.publicKey + "&hash=38e472a57181cb4380b9a3fc80ce6a23");
        const responseData = await response.json();

        return responseData;
    }
}