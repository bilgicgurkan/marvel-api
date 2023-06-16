class CategoryUI {
    static showInfos(movieData) {
        let result = "";

        movieData.forEach(movie => {
            let creatorsInfo = "";
            let descriptionInfo = ""

            // description boş gelmesi halinde ekrana yazılacak uyarı
            if (movie.description === "" || movie.description === null) {
                descriptionInfo +=
                    `
                ${"Açıklama Bulunamadı"}
                `
            } else {
                descriptionInfo +=
                    `
                ${movie.description}
                `
            }

            // creators boş gelmesi halinde ekrana yazılacak uyarı
            if (movie.creators.available === 0) {
                creatorsInfo +=
                    `
                        ${"Yazar Bulunamadı"}
                    `;
            } else {
                movie.creators.items.forEach(movieItem => {
                    creatorsInfo +=
                        `
                        ${movieItem.name}.
                    `;
                })
            }


            result +=
                `
            <div class="card-area">
                <div class="banner-area">
                    <img src="${movie.thumbnail.path}.${movie.thumbnail.extension}" alt="" id="banner-image">
                </div>
                <div class="info-area">
                    <div class="title">
                        ${movie.title}
                        <div class="favorite-button">
                        <i class="fa-solid fa-heart"></i>
                        </div>
                    </div>
                    <div class="id" id="movieID">
                        ${movie.id}
                    </div>
                    <div class="description">
                        ${descriptionInfo}
                    </div>
                    <div class="creators">
                        ${creatorsInfo}
                    </div>
                </div>
            </div>
            `
        });

        document.querySelector(".cardsInfo").innerHTML = result;
        // this.cardsInfo.innerHTML = result;
    }
}