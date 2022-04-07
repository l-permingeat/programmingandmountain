//Ajout de la class show à myDropDown au moment du click pour passer en display block (voir CSS)
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// event est un objet qui traduit un changement d'état de l'environnement 
//au click, si le clique n'est pas sur le bouton on enlève la fonction show
window.onclick = function(event) {
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