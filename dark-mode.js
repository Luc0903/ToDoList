const buttonDarkMode = document.querySelector('.header__icon');
const topImage = document.querySelector('#top--image');

buttonDarkMode.addEventListener('click', ()=> {

	document.body.classList.toggle('ligth');

	if (document.body.classList.contains('ligth')) topImage.setAttribute('src', 'images/icon-moon.svg'); 
	else topImage.setAttribute('src', 'images/icon-sun.svg');

});