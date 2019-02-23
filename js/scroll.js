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