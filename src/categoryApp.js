

const categoryAPI = new CategoryAPI();

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", showItem);
    // document.addEventListener("DOMContentLoaded", showFavLength);
}


function showItem() {
    categoryAPI.get()
        .then(data => {
            CategoryUI.showInfos(data.data.results);
            console.log(data.data.results)
        })
        .catch(err => console.log(err))
};


