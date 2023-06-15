export class Storage {
    constructor() {

    }
    // storage'ın boş ya da dolu olması kontrolünü yaptığımız method
    getStorageList() {
        let list;

        if (localStorage.getItem("liked") == null) {
            list = [];
        }
        else {
            list = JSON.parse(localStorage.getItem("liked"))
        }
        return list;
    }
    // beğeni butonuna tıkladığımızda ilgili comic kartın id'sini alıp storage'a kaydeden method
    findIDandAddStorage() {
        let likeButton = document.querySelectorAll(".favorite-button");
        let list = this.getStorageList();

        likeButton.forEach(liked => {
            liked.addEventListener("click", (e) => {
                let id = e.target.parentNode.parentNode.nextElementSibling.textContent.trim();
                console.log(id);
                if (list.indexOf(id) === -1) {
                    list.push(id);
                    liked.setAttribute("style", "color:red")
                }
                else {
                    alert("Daha Önce Beğendiniz!")
                }
                localStorage.setItem("liked", JSON.stringify(list))
            })
        })
    }
    // deleteFromStorage() {
    //     let list = this.getStorageList();
    //     let likeButton = document.querySelectorAll("#hearts");

    //     likeButton.forEach(function (liked) {
    //         liked.addEventListener("click", function (e) {
    //             let id = e.target.parentNode.parentNode.nextElementSibling.textContent.trim();
    //             let findId = list.findIndex(function (a) {
    //                 return a === id;
    //             })
    //             list.splice(findId, 1);
    //             localStorage.setItem("liked", JSON.stringify(list))
    //         })
    //     })
    // }
    
    // delete methodunu favoriler sayfasında çağırmam lazım
}