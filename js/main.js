// jQuery
$(document).ready(function(){

	jQuery.fx.speeds.fast = 200;
	jQuery.fx.speeds.blazing = 100;
	jQuery.fx.speeds.slowmotion = 60000;

	$.each([ 52, 97 ], function( index, value ) {
  		console.log( index + ": " + value );
	});

	// Método click jQuery
	//$('#seeSpeakers').click(function(){
	//	console.log("Elemento clickeado");
	//})

	//$('#seeSpeakers').on("click", function(){
	//	console.log("Elemento clickeado a través del método on");
	//})

	//$('#seeSpeakers').one("click", function(){
	//	console.log("Elemento clickeado la primera vez");
	//})

	$('#seeSpeakers').click(function(event){
		event.preventDefault();
		//console.log("Elementos clickeado a través de un bind");
	})

	$('#seeSpeakers').bind("click", function(event){
		console.log('Event type', event.type);
		console.log('pagex', event.pageX);
		console.log('pagey type', event.pageY);
		console.log('Target', event.target.innerHTML);

	})

	/* $('#seeSpeakers').hover(
		function () {
        	$(this).css({"background-color":"red"});
        }, 
        function () {   
        	$(this).css({"background-color":"blue"});
        }
  	);*/

	$('#hide').click(function(){
		$("#speakers").animate({ 
	      width: "100",
	      opacity: 1.0,
	      marginLeft: "0in",
	      fontSize: "100%", 
	      borderWidth: "1px"
        }, 1500 );
		//$('#speakers').slideUp("slow", function(){});
	});

	$('#show').click(function(){
        $("#speakers").animate({ 
	      width: "70%",
	      opacity: 0.4,
	      marginLeft: "0.6in",
	      fontSize: "3em", 
	      borderWidth: "10px"
        }, 1500 );
	});

	$('#toogleSpeakers').click(function(){
		$('#speakers').toggle('slowmotion', function(){
		
		});
	})

	$(document).click(function(){
		//$('div#about img').toggle("bounce", { times: 3 }, "slow");
		$('div#about img').toggle("clip");
	})

	var options = {
		interval: 2000, 
		ride: "carousel", 
		pause: "false"
	}

	$('.carousel').carousel(options);
	/* $('#carouselUp').click(function(){
		var options = {
			interval: 2000
		}
		
		console.log('Clicked');
	})*/
		
	
}); // Fin 



// Extracted from: https://api.jquery.com/jQuery.each/
var arr = [ "one", "two", "three", "four", "five" ];

// objeto javascript
var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
 
jQuery.each( arr, function( i, val ) {
  $( "#" + val ).text( "Mine is " + val + "." );
 
  // Will stop running after "three"
  return ( val !== "three" );
});
 
jQuery.each( obj, function( i, val ) {
  $( "#" + i ).append( document.createTextNode( " - " + val ) );
});