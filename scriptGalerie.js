window.addEventListener("DOMContentLoaded", (event) => {
  let btnColonne = document.querySelector('.btnColonne');
  btnColonne.addEventListener("click", function () {
    affichageColonne("Colonne");
  })

  let btnMosaique = document.querySelector('.btnMosaique');
  btnMosaique.addEventListener("click", function () {
    affichageColonne("Mosaique");
  })

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