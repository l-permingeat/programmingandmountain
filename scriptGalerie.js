window.addEventListener("DOMContentLoaded", (event) => {
  let btnColonne = document.querySelector('.btnColonne');
  btnColonne.addEventListener("click", function () {
    affichageColonneBis()
    //affichageColonne(btnColonne);
  })

  let btnMosaique = document.querySelector('.btnMosaique');
  btnMosaique.addEventListener("click", function () {
    //affichageColonne(btnMosaique);
    affichageColonneBisBis();
  })

});

function affichageColonneBis() {
  document.getElementById("galerieId").classList.replace("galerieMosaique", "galerieColonne");

}
function affichageColonneBisBis() {
  document.getElementById("galerieId").classList.replace("galerieColonne", "galerieMosaique");
}
function affichageColonne(typeBouton) {
  if (typeBouton == "btnColonne") {
    document.getElementById("galerieId").classList.replace("galerieMosaique", "galerieColonne");
  } else  {
    document.getElementById("galerieId").classList.replace("galerieColonne", "galerieMosaique");
  }
}