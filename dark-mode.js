const buttonDarkMode = document.querySelector('.header__icon');
const topImage = document.querySelector('#top--image');

buttonDarkMode.addEventListener('click', ()=> {
	
	document.body.classList.toggle('ligth');
	classBlackMode();

});

function classBlackMode() {

	if (document.body.classList.contains('ligth')) {
		topImage.setAttribute('src', 'images/icon-moon.svg');
		localStorage.setItem("modoOscuro", false);
	} 
	else {
		topImage.setAttribute('src', 'images/icon-sun.svg');
		localStorage.setItem("modoOscuro", true);
	}

}

window.addEventListener("load", ()=> {
	const modoOscuro = localStorage.getItem("modoOscuro");
	
	if (modoOscuro == "false") document.body.classList.add("ligth");
	else document.body.classList.remove("ligth");
	
	classBlackMode();
})
