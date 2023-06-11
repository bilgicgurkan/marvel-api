export class UI {
    constructor(){
        this.cards = document.querySelector(".cards");
    }
    showMovieList(movieData){
        let result = "";

        movieData.forEach(movie => {
            result +=
            `
            <div class="card-area">
                <div class="banner-area">
                    <img src="${movie.thumbnail.path}.${movie.thumbnail.extension}" alt="" id="banner-image">
                </div>
                <div class="info-area">
                    <div class="title">
                        ${movie.title}
                    </div>
                    <div class="description">
                        Kaptan Amerika Tüm Dünyayı Kötülüklerden Arındırıyor!
                    </div>
                    <div class="creators">
                        Gürkan Bilgiç
                    </div>
                </div>
            </div>
            `
        });

        this.cards.innerHTML = result;
    }
}