
function Animacion1(){
	document.getElementById('animacion1').style="display: none";

	document.getElementById('boggart1').style="display: block";

	const element =  document.getElementById('boggart1')
	element.classList.add('animated', 'flipInY');
}

function Animacion2(){
	document.getElementById('animacion2').style="display: none";
	document.getElementById('boggart2').style="display: block";
	const element =  document.getElementById('boggart2')
	element.classList.add('animated', 'flipInY');
}

function Animacion3(){
	document.getElementById('animacion3').style="display: none";
	document.getElementById('boggart3').style="display: block";

	const element =  document.getElementById('boggart3')
	element.classList.add('animated', 'flipInY');
}

function Animacion4(){
	document.getElementById('animacion4').style="display: none";
	document.getElementById('boggart4').style="display: block";

	const element =  document.getElementById('boggart4')
	element.classList.add('animated', 'flipInY');
}

function volver1(){
	document.getElementById('boggart1').style="display: none";
	document.getElementById('animacion1').style="display: block";

	const element =  document.getElementById('animacion1')
	element.classList.add('animated', 'flipInY');
}

function volver2(){
	document.getElementById('boggart2').style="display: none";
	document.getElementById('animacion2').style="display: block";

	const element =  document.getElementById('animacion2')
	element.classList.add('animated', 'flipInY');
}

function volver3(){
	document.getElementById('boggart3').style="display: none";
	document.getElementById('animacion3').style="display: block";

	const element =  document.getElementById('animacion3')
	element.classList.add('animated', 'flipInY');
	element.getElementById('animacion3').style="transition: all";
	element.getElementById('animacion3').style="transition-duration: 3s";
}

function volver4(){
	document.getElementById('boggart4').style="display: none";
	document.getElementById('animacion4').style="display: block";

	const element =  document.getElementById('animacion4')
	element.classList.add('animated', 'flipInY');
}