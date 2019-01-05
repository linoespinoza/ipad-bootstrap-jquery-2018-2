// Vanilla javascript
console.log(document.getElementById('main').innerHTML);
console.log(document.getElementsByClassName('error'));

// jQuery

$(document).ready(function(){ // Inicio wrapper
	//console.log($('#main'));
	var htmlContentDiv = $('#main').html();
	//console.log(htmlContentDiv);

	//console.log($('.error').html());

	//console.log($("error p.display-1").text());

	$("div p.display-1");

	$("td:first").css('color', 'red');
	$("table:last").css('color', 'red');

	$("td:parent").fadeTo(1500, 0.3);

	$('#main').html("<span>Hoy es Sábado</span>");
	//console.log($('#main').text('Hoy es viernes'));
	$('#main').attr("class", "container");
	$('#main').attr("data-ejemplo", "ipad");

	$("form input[type='text']").val('Ingrese aquí un nombre');
	$("form input[type='password']").val('Ingrese aquí un password');

	//$(".inner").append("<p>Test</p>");
	//$( "<p>Test</p>" ).appendTo( ".inner" );

	$( "<p>Test</p>").insertAfter( ".inner" );
	$( "<p>Test Antes</p>" ).insertBefore( ".inner" );
	$( ".inner" ).prepend( "<p>Test prepend</p>" );

	$('#main').remove();

	var parrafo = $("<p>This is a new paragraph</p>");
	$("#main").append(parrafo);

	var headings = $( "h1" );
	console.log(headings);






	//$("<li>Menu 0</li>").prependTo("li.first"); // Agrega luego de ..

 

	// Selectores
	// Selector ID $(#element)
	// Selector clase $(.element)
	// Selector compuestos $(.element #element div)
	// Selector Index Base $(:eq(x))
	// Selector :lt
	// Selector :gt
	// Selector :first
	// Selector :last
	// Selector :even
	// Selector :odd
	// Selector

}); // Fin wrapper

console.log('Success');