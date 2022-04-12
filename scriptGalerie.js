window.addEventListener("DOMContentLoaded", (event) => {
  //dans le cas où le click est sur le bouton colonne
  let btnColonne = document.querySelector('.btnColonne');
  btnColonne.addEventListener("click", function () {
    affichageGalerie("Colonne");
  })
  //dans le cas où le click est sur le bouton mosaïque
  let btnMosaique = document.querySelector('.btnMosaique');
  btnMosaique.addEventListener("click", function () {
    affichageGalerie("Mosaique");
  })

  formPhoto();

});

//***********Function affichage Galerie ou Colonne **************************/

function affichageGalerie(typeBouton) {

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


//***********Function ajouter une photo à partir d'un formulaire dynamique *********************/

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
  let regexUrl = /[(http(s)?):\/\/(www\.)?\w-/=#%&\.\?]{2,}\.[a-z]{2,}([\w-/=#%&\.\?]*)/gi;
  let formHtml = document.querySelector('#btnEnvoieUrl');

  formHtml.addEventListener("click", function (event) {
    event.preventDefault();

      for (var i = 0; i < nbPhoto; i++) {
        let galerie = document.querySelector('.galerieMosaique');
        let image = document.createElement("img");
        let url = document.forms["formulaireGallerie"]["image" + i].value
        //Recuperation de la class (colonne ou mosaique)
        let classType = galerieId.className;

        //Condition pour verifier si l'url est bonne
        if (regexUrl.test(url)) {

          image.setAttribute('src', document.forms["formulaireGallerie"]["image" + i].value);
          image.classList.add("ajoutManuel");

          //Condition pour ajout l'image à la div en fonction de la class (colonne ou mosaique)
          if (classType === "galerieMosaique") {
            galerie.prepend(image);
          } else {
            let galerieColonne = document.querySelector('.galerieColonne');
            galerieColonne.prepend(image);
          }

        } else {
          window.alert("Adresse URL image NON VALIDE");
        }
      }
    

    //Je supprime les inputs qui ajoute les formulaire
    let divUrl = document.querySelector(".urlFieldset");
    divUrl.remove();
    //while (divUrl.hasChildNodes()) {
    //divUrl.removeChild(divUrl.firstChild);
    //}

    let galerieDiv = document.querySelectorAll('#galerieId img');
    deleteItemAddManuel('ajoutManuel',galerieDiv);


  })
}

