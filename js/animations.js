
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
         $('#aPropos p').addClass('animeLigne');
    }
  });

  
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 1200) {
         $('#competences h2').addClass('animeLigneDroite');
    }
  });

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 2900) {
         $('#contacter h2').addClass('animeLigneDroite');
    }
  });
  
  