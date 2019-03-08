 // portfolio

$( document ).ready(function() {
    $('.close').hide();
    $('#vimeo').hide();
});


 $('.gallery ul li a').click(function() {
     $('.close').show();
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     $('#imgProjet').show();
     
     switch (event.target.id) { 
        case 'projet1': 
            $('#titreProjet').text('le fol espoir');
            $('#dateProjet').text('AutoMne 2018');
            $('#coursProjet').text('tiM-554 production Web'); 
            $('#descProjet').text('Le fol espoir est un site web que mon équipe et moi avons réalisé pour notre client, le département d\'arts et lettres, dans le cadre de notre cours de production web en Techniques intégration multimédia au collège de Maisonneuve. '); 
            $('#boutonProjet').attr('href','lefolespoir.html'); 
            $('#imgProjet').attr('src','images/lfe.png');
            break;

        case 'projet2': 
            $('#titreProjet').text('spHAeRA (filM)');
            $('#dateProjet').text('AutoMne 2018');
            $('#coursProjet').text('tiM-528 cRéAtion 3d-3'); 
            $('#descProjet').text(''); 
            $('#boutonProjet').attr('href','');
            $('#imgProjet').hide();
            $('#vimeo').show();
            $('#videoProjet').attr('src','https://player.vimeo.com/video/321081778?color=ffffff&title=0&byline=0&portrait=0');
            break;

        case 'projet3': 
            $('#titreProjet').text('mAquettes portfolio');
            $('#dateProjet').text('HiVeR 2019'); 
            $('#coursProjet').text('tiM-636 pRojet de fin d’études');  
            $('#descProjet').text(''); 
            $('#boutonProjet').attr('href',''); 
            $('#imgProjet').attr('src','images/figmaLarge.png');
            break;	

        case 'projet4': 
            $('#titreProjet').text('spHAeRA (jeu)');
            $('#dateProjet').text('AutoMne 2018');
            $('#coursProjet').text('tiM-552 déVeloppeMent de jeu'); 
            $('#descProjet').text('Sphaera est un jeu d\'aventure de type " cartoon / lowpoly " en 3D destiné aux jeunes entre 8 et 16 ans que mon équipe et moi avons développé dans le cadre de notre cours "Développement de jeu" du programme Techniques intégration multimédia au collège de Maisonneuve.'); 
            $('#boutonProjet').attr('href',''); 
            $('#imgProjet').attr('src','images/sphJeuLarge.png');
            break;

        case 'projet5': 
            $('#titreProjet').text('plAnnificateur');
            $('#dateProjet').text('');
            $('#coursProjet').text('projet personnel'); 
            $('#descProjet').text('Étant obsédé par l\'organisation et passionné de design, j\'ai décidé de joindre l\'utile à l\'agréable en me créant des pages de planificateur personnalisées.'); 
            $('#boutonProjet').attr('href','plannificateur.html'); 
            $('#imgProjet').attr('src','images/plannerLarge.png');
            $('#imgProjet').addClass('plannificateurImg');
            break;

        case 'projet6': 
            $('#titreProjet').text('travail pratique 1');
            $('#dateProjet').text('HiVeR 2019');
            $('#coursProjet').text('tiM-629 créAtion Vidéo 2'); 
            $('#descProjet').text(''); 
            $('#boutonProjet').attr('href',''); 
            $('#imgProjet').hide();
            $('#vimeo').show();
            $('#videoProjet').attr('src','https://player.vimeo.com/video/320058839?color=ffffff&title=0&byline=0&portrait=0');
            break;
    }

     return false;
 });
 $('.close').click(function() {
     $('.close').hide();
     $('.port, .gallery ul').removeClass('item_open');
     $('#imgProjet').removeClass('plannificateurImg');
     $('#vimeo').hide();
     return false;
 });

 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 100);
 });