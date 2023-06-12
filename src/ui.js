export class UI {
    constructor() {
        this.cards = document.querySelector(".cards");
    }
    showMovieList(movieData) {
        let result = "";

        movieData.forEach(movie => {
            let creatorsInfo = "";
            console.log(movie.creators.items)
            movie.creators.items.forEach(movieItem => {
                creatorsInfo +=
                    `
                ${movieItem.name},
                `
            })
            // let creatorsInfo;
            result +=
                `
            <div class="card-area">
                <div class="banner-area">
                    <img src="${movie.thumbnail.path}.${movie.thumbnail.extension}" alt="" id="banner-image">
                </div>
                <div class="info-area">
                    <div class="title">
                        ${movie.title}
                    </div> <hr>
                    <div class="description">
                    ${movie.description}
                    </div> <hr>
                    <div class="creators">
                    ${creatorsInfo}
                    </div>
                </div>
            </div>
            `
        });

        this.cards.innerHTML = result;
    }
}