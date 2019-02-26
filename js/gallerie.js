 // portfolio

$( document ).ready(function() {
    $('.close').hide();
});


 $('.gallery ul li a').click(function() {
     $('body').addClass('hidden');
     $('.close').show();
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.close').hide();
     $('.port, .gallery ul').removeClass('item_open');
     $('body').removeClass('hidden');
     return false;
 });

 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 100);
 });