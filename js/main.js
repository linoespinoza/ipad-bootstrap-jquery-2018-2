// 1era forma de declaración de una variable
var alumno;

// Declarando y asignando un valor a la variable profesor
var profesor = "Lino Espinoza";

// Asignando un valor a la variable alumno
alumno = "Luis";

var _ipad = 2019;

console.log(_ipad);
//alert(_ipad);


// Variable numéricas
var edad = 32; // Variable de tipo entera
var total = 350.45; // Variable de tipo decimal

console.log(edad);
console.log(total);

// Variables de tipo texto (string)

var primerNombre = "Lino";
var segundoNombre = 'Arturo';

var nombreCompleto = "Bernardo O\'Higgins \nes chileno";

console.log(primerNombre + ' ' + segundoNombre);
console.log(nombreCompleto);

console.log(typeof(alumno));
console.log(typeof(edad));
console.log(typeof(total));
console.log(typeof(nombreCompleto));
console.log(typeof(primerNombre));
console.log(typeof(segundoNombre));

// Variable de tipo array
var diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

console.log(diasDeLaSemana);
console.log(diasDeLaSemana[3]);

// Variable de tipo boolean, bool

var userIsLoggedIn = true;
var taxIncluded = false;

console.log(typeof(userIsLoggedIn));
console.log(taxIncluded);

var suma = edad + total;
console.log(suma);

var resta = edad - total;
console.log(resta);

var multiplicacion = edad * total;
console.log(multiplicacion);

var division = edad / total;
console.log(division);

var residuo = edad % total

console.log(primerNombre !== segundoNombre);

// Estructuras de decisión

// Obteniendo el día de hoy

var currentTime = new Date();
var currentDay = currentTime.getDay(); // 6 = Sábado
// console.log(currentTime.getDay());

// Estructura de control if / else
if (currentDay == 6) {
	console.log("Hoy es sábado, tenemos clases de 2 a 6 pm");
} else {
	console.log("Hoy no hay clases, yohoooooo");
}

/*
if (currentDay == 6) {
	console.log("Hoy es sábado, tenemos clases de 2 a 6 pm");
} elseif (currentDay == 5) {
	console.log("Hoy es sábado, tenemos clases de 2 a 6 pm");
} elseif (currentDay == 4) {
	console.log("Hoy es sábado, tenemos clases de 2 a 6 pm");
} else {
	console.log("Hoy es sábado, tenemos clases de 2 a 6 pm");
}
*/

switch (currentDay) {
	case 1: console.log("Hoy es 1"); break;
	case 2: console.log("Hoy es 2"); break;
	case 3: console.log("Hoy es 3"); break;
	case 4: console.log("Hoy es 4"); break;
	case 5: console.log("Hoy es 5"); break;
	case 6: console.log("Hoy es 6"); break;
	case 7: console.log("Hoy es 7"); break;
	default: console.log("Hoy es ningún día");
}

for (var i = 1; i < 11; i++) {
	console.log(i);
}

// var diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (i in diasDeLaSemana){
	console.log('Indice: ' + i + ' -> ' + 'Elemento: ' + diasDeLaSemana[i]);
}

// Estructura while

i = 1;
while (i < 11) {
	console.log(i);
	i++;
}


var timeoutID;

function delayedAlert() {
	timeoutID = window.setTimeout(window.alert, 3000, "That was really slow");
}

function clearAlert() {
	window.clearTimeout(timeoutID);
}


function stopTextColor() {
	console.log('Se detuvo la función flashText()');
	clearInterval(nIntervId);
}

var nIntervId;
function changeColor() {
	nIntervId = setInterval(flashText, 1000);
	console.log('Se disparó la función flashText()');
}

function flashText() {
	var elementoACambiar = document.getElementById('my_box');
	// Operador Ternario
	elementoACambiar.style.color = (elementoACambiar.style.color == 'red') ? 'blue': 'red';

	/*
	if (elementoACambiar.style.color == 'red') {
		elementoACambiar.style.color = 'blue';
	} else {
		elementoACambiar.style.color = 'red';
	}*/
}

function focusInputText() {
	document.getElementById('nombre').style.borderColor = "red";
}

function blurInputText() {
	document.getElementById('nombre').style.borderColor = "";
}

function keyDownInputPassword() {
	document.getElementById('contrasena').style.borderColor = "red";
}

function keyUpInputPassword() {
	document.getElementById('contrasena').style.borderColor = "";
}

function formSubmitted() {
	alert("Estás seguro de enviar el formulario");
}

function bodyResized() {
	var viewportWeight = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	console.log(viewportWeight + ' / ' + viewportHeight);
}

function formResetted() {
	alert("Estás seguro de limpiar el formulario");
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    console.log(currentSlide + 1  + ' / ' + slides.length);
    slides[currentSlide].className = 'slide showing';
}