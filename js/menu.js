
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
var sections = document.getElementsByClassName("strike");
var body = document.getElementsByTagName("BODY")[0];
var HTML = document.getElementsByTagName( 'html' )[0];

for(i=0; i < sections.length; i++){
	sections[i].addEventListener('click',function(){
  burgerMenu.classList.toggle("closeMenu");
  overlay.classList.toggle("overlay");
  body.classList.remove("hiddenX");
  body.classList.add("hidden");
  HTML.classList.remove("hiddenX");
  HTML.classList.add("hidden");
})
}

burgerMenu.addEventListener('click',function(){
  this.classList.toggle("closeMenu");
  overlay.classList.toggle("overlay");
  body.classList.remove("hidden");
  body.classList.add("hiddenX");
  HTML.classList.remove("hidden");
  HTML.classList.add("hiddenX");
});
