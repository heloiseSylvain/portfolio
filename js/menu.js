
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
var sections = document.getElementsByClassName("strike");

for(i=0; i < sections.length; i++){
	sections[i].addEventListener('click',function(){
  burgerMenu.classList.toggle("closeMenu");
  overlay.classList.toggle("overlay");
})
}

burgerMenu.addEventListener('click',function(){
  this.classList.toggle("closeMenu");
  overlay.classList.toggle("overlay");
});
