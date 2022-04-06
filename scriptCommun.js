let lien = document.getElementById('lien')
let burger = document.getElementById('burger')
let ul = document.querySelector('.list')

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
lien.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})