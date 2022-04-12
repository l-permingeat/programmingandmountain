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
    imgCardHtml.classList.add("dark-side");
    cardDivHtml.append(imgCardHtml);
}

function random(data) {
    data.forEach(dataUnit => {
        console.log('foreach', dataUnit);
        let randomPosition = Math.floor(Math.random() * 12);
        console.log('randomPosition : ',randomPosition);
        dataUnit.style.order = randomPosition;
    });

};