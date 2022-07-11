// DEPRECATED
function clubsFunction() {
	document.getElementById("clubs__dropdown").classList.toggle("dropdown__active");
	document.getElementById("info__dropdown").classList.remove("dropdown__active");
	document.getElementById("klub__dropdown").classList.remove("sub-dropdown__active");
	document.getElementById("council__dropdown").classList.remove("sub-dropdown__active");
	document.getElementById("clubs__image").classList.toggle("rotateY");
	document.getElementById("info__image").classList.remove("rotateY");
};

function infoFunction() {
	document.getElementById("info__dropdown").classList.toggle("dropdown__active");
	document.getElementById("clubs__dropdown").classList.remove("dropdown__active");
	document.getElementById("klub__dropdown").classList.remove("sub-dropdown__active");
	document.getElementById("council__dropdown").classList.remove("sub-dropdown__active");
	document.getElementById("info__image").classList.toggle("rotateY");
	document.getElementById("clubs__image").classList.remove("rotateY");
}
function councilFunction() {
	document.getElementById("council__dropdown").classList.toggle("sub-dropdown__active");
	document.getElementById("klub__dropdown").classList.remove("sub-dropdown__active");
	document.getElementById("council__image").classList.toggle("rotateX");
	document.getElementById("klub__image").classList.remove("rotateX");

}
function klubFunction() {
	document.getElementById("klub__dropdown").classList.toggle("sub-dropdown__active");
	document.getElementById("council__dropdown").classList.remove("sub-dropdown__active");
	document.getElementById("klub__image").classList.toggle("rotateX");
	document.getElementById("council__image").classList.remove("rotateX");
}
function openFirstFunction() {
	document.getElementById("cont1").style.display = 'block';
	document.getElementById("cont2").style.display = 'none';
	document.getElementById("cont3").style.display = 'none';
	document.getElementById("cont4").style.display = 'none';
}

function openSecondFunction () {
	document.getElementById("cont1").style.display = 'none';
	document.getElementById("cont2").style.display = 'block';
	document.getElementById("cont3").style.display = 'none';
	document.getElementById("cont4").style.display = 'none';
}

function openThirdFunction () {
	document.getElementById("cont1").style.display = 'none';
	document.getElementById("cont2").style.display = 'none';
	document.getElementById("cont3").style.display = 'block';
	document.getElementById("cont4").style.display = 'none';
}

function openQuadFunction () {
	document.getElementById("cont1").style.display = 'none';
	document.getElementById("cont2").style.display = 'none';
	document.getElementById("cont3").style.display = 'none';
	document.getElementById("cont4").style.display = 'block';
}
// burger menu
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const header = document.querySelector('.header');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		header.classList.toggle('_active');
	});
}
// close dropdown 
window.onclick = function (event) {
	if (!event.target.matches('.nav__click')) {

		let dropdowns = document.getElementsByClassName("dropdown");
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('dropdown__active')) {
				openDropdown.classList.remove('dropdown__active');
			}
		}
	}
	if (!event.target.matches('.nav__click')) {

		let dropdowns = document.getElementsByClassName("dropdown__image");
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('rotateY')) {
				openDropdown.classList.remove('rotateY');
			}
			if (openDropdown.classList.contains('rotateX')) {
				openDropdown.classList.remove('rotateX');
			}
		}
	}
}

openFirstFunction();