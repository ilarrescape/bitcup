// Variable menu toma ID #menu
let menu = document.querySelector("#menu")

// Variable menu_bar toma ID #menu-bar
let menu_bar = document.querySelector("#menu-bar")

//menu_bar espera la función click
//Cuando se hace click en el menú hamburguesa se accede a la clase menu-palanca
//menu-palanca mueve el menú.
menu_bar.addEventListener('click', function(){
    menu.classList.toggle('menu-palanca');
})