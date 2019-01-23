// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

  // jQuery code
  //console.log('Hola');
  $.get( "data.html", function( response ) {
    console.log( response ); // server response
  });


  jQuery.validator.addMethod("isValidRuc", function(v) {
    ruc = $.trim(v);
      if(ruc.length == 11) {
        suma = 0;
        x = 6;
        size = ruc.length;
        for( var i = 0; i < ( size - 1); i++ ){
          if ( i == 4 ) x = 8;
          digit = ruc.charAt(i);
          x--;

          if ( i==0 ) suma += ( digit * x );
          else suma += ( digit * x );
        }
      
        resto = suma % 11;
        resto = 11 - resto;
        
        if ( resto >= 10) resto = resto - 10;
        if ( resto == ruc.charAt(size -1)){
          return true;
        } 
      } else {
        return false;
      } 
  }, "Ruc incorrecto, trate de nuevo.");

  // Validate a phone number field
  /*$("#formRegister").submit(function(event) {
    var inputtedPhoneNumber = $("#card-number").val();

    var phoneNumberRegex = /^\d*$/;
 
    if ( !phoneNumberRegex.test( inputtedPhoneNumber ) ) {
        event.preventDefault();
        var formSerialized = $(this).serialize();
        console.log(formSerialized);

    } else {
        // Run $.ajax() here
        $.ajax({
          method: $(this).attr('action'),
          url: "data.html",
          data: formSerialized 
        }).done(function(message){
          console.log(message);
        });
    }
  });*/

  $('#formRegister').validate({
    rules: {
      cardNumber : { number: true, minlength: 16, isValidRuc: true },
      zipCode : { number: true },
      cvv : { number: true }
    },
    messages: {
      cardNumber : { 
        required: 'The card number is required',
        number: 'This must be a number',
        minlength: 'This should container 16 numbers' },
      zipCode : { 
        required: 'The zip code is required',
        number: 'This must be a number' },
      cvv : { 
        required: 'The cvv number is required',
        number: 'This must be a number' }
    },
    errorClass: "error",
    validClass: "valid-feedback",
    errorElement: "div",
    submitHandler: function(form){
      var options = {
        target: '',
        beforeSubmit: function(){ console.log('submitted'); },
        success: function() { 
          console.log('success');
          $('#registerForm').modal('hide');
          //@todo: crear una alerta que muestre que el formulario se ha enviado correctamente
        }
      };

      $(form).ajaxSubmit(options); 
    }
  });

  /*$('#formRegister').submit(function() { 
    
      return false; 
  });*/ 

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://pokeapi.co/api/v2/pokemon/mew/",
    "method": "GET",
    "headers": {}
  }

  $.ajax(settings).done(function(response) {
    var imgUrl = response.sprites.front_default;
    $('#pokemon').attr('src', imgUrl);
    $('#pokemonName').text(response.name);
  })

})();