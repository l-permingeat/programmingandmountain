window.addEventListener("DOMContentLoaded", (event) => {
  let dropbtn = document.querySelector('.dropbtn');
  dropbtn.addEventListener("click", function () {
    dropDown();
  })
});

function dropDown() {
  //Ajout de la class show à myDropDown au moment du click pour passer en display block (voir CSS)
  document.getElementById("myDropdown").classList.toggle("show");

  // event est un objet qui traduit un changement d'état de l'environnement 
  //au click, si le clique n'est pas sur le bouton on enlève la fonction show
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

}


//***********Function supprimer un item ajouté manuellement *********************/
function deleteItemAddManuel(nomClass,parent) {
  //let articleDiv = document.querySelectorAll('.article div');
  for (let i = 0; i < parent.length; i++) {
      //console.log('Nom de la classe : ', articleDiv[i].className);
      if (parent[i].className === nomClass) {
          parent[i].addEventListener("click", function () {
              parent[i].remove();
          })
      }
  }
}

