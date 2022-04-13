window.addEventListener("DOMContentLoaded", () => {
    apiNiveauFacile()

});
let clickOn = false;


function apiNiveauFacile() {
    // if (clickOn === false) {
    fetch("https://mocki.io/v1/668543ba-7ac6-43fc-a3dd-fd3afd7d7002")
        .then(response => response.json())
        .then((json) => { console.log(json), console.log('images :', json.images[1]), creationCards(json) })
        .catch((error) => { console.log("erreur : ", error) })
    clickOn = true;

    // } else {
    //provisoire
    //window.alert("Problème");
    // }
}

function creationCards(cards) {
    console.log('fonction créer des articles', cards.images[1]);
    if (cards) {
        //for pour créer mes paires
        for (let i = 0; i < 2; i++) {
            //for pour créer mes 6
            for (let i = 0; i < 6; i++) {
                creationCardUnit(cards.images[i]);
            }
        }
    }
    let cardAll = document.querySelectorAll('.memory-card');
    console.log('Variable cardAll', cardAll);
    random(cardAll);
    memory();
}

function creationCardUnit(card) {
    //console.log(card.images[i]);
    let memoryGameDivHtml = document.querySelector('.memory-game');
    let cardDivHtml = document.createElement("div");
    //ajout de la classe à la div
    cardDivHtml.classList.add("memory-card");
    //ajout de la div à la div parent
    memoryGameDivHtml.append(cardDivHtml);



    let imgCardHtml = document.createElement("img");
    imgCardHtml.setAttribute('src', card);
    imgCardHtml.classList.add("imgCard");
    imgCardHtml.classList.add("hiddenCard");
    cardDivHtml.append(imgCardHtml);

    //ajout carte caché
    let cardHiddenDivHtml = document.createElement("div");
    //ajout de la classe à la div
    cardHiddenDivHtml.classList.add("memory-card-hidden");
    cardHiddenDivHtml.classList.add("showCard");
    //ajout de la div à la div parent
    cardDivHtml.append(cardHiddenDivHtml);
}

function random(data) {
    data.forEach(dataUnit => {

        let randomPosition = Math.floor(Math.random() * 12);

        dataUnit.style.order = randomPosition;
    });

};

function memory() {
    let imgCard = document.querySelectorAll('.imgCard');
    let memoryCardHiddenHtml = document.querySelectorAll('.memory-card-hidden');

    for (let i = 0; i < memoryCardHiddenHtml.length; i++) {
        for (let i = 0; i < imgCard.length; i++) {
            memoryCardHiddenHtml[i].addEventListener("click", function (event) {
                imgCard[i].classList.replace("hiddenCard", "showCard");
                memoryCardHiddenHtml[i].classList.replace("showCard", "hiddenCard");
                /*setTimeout(() => {
                    imgCard[i].classList.replace("showCard", "hiddenCard");
                    memoryCardHiddenHtml[i].classList.replace("hiddenCard", "showCard")
                }, 3000);*/
                console.log('URL', imgCard[i].src);

                let click1 = event.target.tagName;
                console.log('Valeur de mon click', click1);
            })
        }
        if(imgCard[i].event){}
    }

    for (let i = 0; i < memoryCardHiddenHtml.length; i++) {
        for (let i = 0; i < imgCard.length; i++) {
            imgCard[i].addEventListener("click", function () {
                imgCard[i].classList.replace("showCard", "hiddenCard");
                memoryCardHiddenHtml[i].classList.replace("hiddenCard", "showCard")
            })
        }
    }






}

