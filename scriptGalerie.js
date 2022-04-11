window.addEventListener("DOMContentLoaded", (event) => {
  let btnColonne = document.querySelector('.btnColonne');
  btnColonne.addEventListener("click", function () {
    affichageColonne("Colonne");
  })

  let btnMosaique = document.querySelector('.btnMosaique');
  btnMosaique.addEventListener("click", function () {
    affichageColonne("Mosaique");
  })

  formPhoto()

});

function affichageColonne(typeBouton) {

  if (typeBouton === "Colonne") {
    document.getElementById("galerieId").classList.replace("galerieMosaique", "galerieColonne");

    //Changement couleur bouton colonne en gris
    document.querySelector('.btnColonne').style.backgroundColor = "#6F686D";
    //Changement couleur bouton mosaïque en bleu
    document.querySelector('.btnMosaique').style.backgroundColor = "#22577A";

  } else {
    document.getElementById("galerieId").classList.replace("galerieColonne", "galerieMosaique");

    //Changement couleur bouton mosaïque en gris
    document.querySelector('.btnMosaique').style.backgroundColor = "#6F686D";
    //Changement couleur bouton colonne en bleu
    document.querySelector('.btnColonne').style.backgroundColor = "#22577A";
  }
}

function formPhoto() {
  let form = document.querySelector('#btnFormPhoto');

  form.addEventListener("click", function (event) {
    event.preventDefault();

    let nbInput = document.forms["formulaireGallerie"]["photoUrl"].value;
    //J'appelle la fonction qui créée les différents élément du form pour ajouter l'url
    addInput(nbInput);

    //J'appelle la fonction qui va ajouter les photos à la galerie
    addPhoto(nbInput);

    //Je remet à 0 l'input "combien de photos voulez vous ajouter ?"
    document.getElementById("formulaireGallerie").reset();

  })

}

//ajout des inputs suivant le choix du nb de photo à ajouter
function addInput(nbInput) {
  let formHtml = document.querySelector('#formulaireGallerie');
  let divUrl = document.createElement("div");
  divUrl.classList.add("urlFieldset");
  formHtml.append(divUrl);

  //ajout du titre des URL
  let titreAjoutUrl = document.createElement("h3");
  titreAjoutUrl.textContent = "URL image :";
  divUrl.append(titreAjoutUrl);

  //ajout des inputs URL
  for (var i = 0; i < nbInput; i++) {
    let inputHtml = document.createElement("input");
    inputHtml.setAttribute('id', "image" + i);
    inputHtml.setAttribute('name', "image");
    inputHtml.setAttribute('value', "");
    inputHtml.setAttribute('placeHolder', "Url image");
    divUrl.append(inputHtml);
  }

  //ajout du bouton envoyer URL
  let bntEnvoyerUrlHtml = document.createElement("button");
  bntEnvoyerUrlHtml.setAttribute('type', "submit");
  bntEnvoyerUrlHtml.setAttribute('id', "btnEnvoieUrl");
  bntEnvoyerUrlHtml.setAttribute('name', "btnEnvoieUrl");
  bntEnvoyerUrlHtml.textContent = "Envoyer";
  divUrl.append(bntEnvoyerUrlHtml);
}



function addPhoto(nbPhoto) {
  let formHtml = document.querySelector('#btnEnvoieUrl');
  formHtml.addEventListener("click", function (event) {
    event.preventDefault();
    console.log('URL', document.forms["formulaireGallerie"]["image0"].value);
    for (var i = 0; i < nbPhoto; i++) {
      let galerie = document.querySelector('.galerieMosaique');
      let image = document.createElement("img");
      image.setAttribute('src', document.forms["formulaireGallerie"]["image" + i].value);
      galerie.prepend(image);
    }
    //Je supprime les inputs qui ajoute les formulaire
    let divUrl = document.querySelector(".urlFieldset");
    divUrl.remove();
    //while (divUrl.hasChildNodes()) {
      //divUrl.removeChild(divUrl.firstChild);
    //}
  })

}

