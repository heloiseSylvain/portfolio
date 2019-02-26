/*
* Auteur : Héloîse Sylvain
* Date : 23-02-2019
* Fonction permettant de 1) afficher un bouton scroll to top lorsque la hauteur du scroll atteint 500px
*                        2) Ajouter et supprimer une classe hidden sur le body permettant d'empêcher le scoll sur l'accueil                           
*/

$( document ).ready(function() {
    $('.scroll').hide();
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('.scroll').fadeIn();
    } else {
        $('.scroll').fadeOut();
    }
});