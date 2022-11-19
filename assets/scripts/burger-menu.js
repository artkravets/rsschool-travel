let burger_menu__open = document.getElementById('bg-menu__open');
let bg_menu = document.getElementById('bg-menu');
let bg_menu__close = document.getElementById('bg-menu__close');

burger_menu__open.onclick = function(){
  burger_menu__open.style.display = 'none';
  bg_menu.style.display = 'flex';


}

bg_menu__close.onclick = function(){
  burger_menu__open.style.display = 'flex';
  bg_menu.style.display = 'none';


}