actualiser();

function actualiser() {
    let refresh = document.querySelector('.refresh');
    refresh.addEventListener("click", apiVanilla)
}


function apiVanilla() {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
        .then(response => response.json())
        .then((json) => { console.log(json), createArticle(json) })
        .catch((error) => { console.log("erreur : ", error), messageError() })


}// fin function apiVanilla
function messageError() {
    let main = document.querySelector('.main_marge');
    let titre = document.createElement("h4");
    titre.textContent = "La requête a échouée";
    main.prepend(titre);
    setTimeout(() => {
        titre.remove();
    }, 5000);

}
//créer les articles
function createArticle(json) {
    //selection de mon élément parent
    if (json) {
        for (var i = 0; i < 7; i++) {
            //CREER DIV
            let article = document.querySelector('.article');
            //création de la div qui va contenir les articles
            let article_corps = document.createElement("div");
            //ajout de la classe à la div
            article_corps.classList.add("article_corps");
            //ajout de la div à la div parent
            article.append(article_corps);

            //CREER TITRE
            let titre = document.createElement("h3");
            titre.textContent = json[i].title;
            article_corps.append(titre);

            //CREER IMAGE
            let img = document.createElement("img");
            img.setAttribute('src', json[i].imageUrl)
            article_corps.append(img);

            //CREER PARAGRAPHE
            let para = document.createElement("p");
            para.textContent = json[i].summary;
            article_corps.append(para);

        }
    }
}

async function apiVanillaAttente() {
    try {
        //await permet de dire au reste du code d'attendre avant de s'executer 
        const reponseJS = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
        // transfrome le json en objet javascript
        reponseJS = await reponseJS.json();
        console.log('objet en JS : ', reponseJS);
    }
    catch (error) {
        console.log("erreur : ", error);
    }
}










