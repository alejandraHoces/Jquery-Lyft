$(document).ready(function(){
  $(".view5").hide();

//vista splash
 $('#loader').delay(3000).fadeOut("slow");

// Ocultar contenedor de la 1ra vista y mostrar la 2da al presionar el botón sign up
$(".view5").hide();
$(".view4").hide();
$(".view3").hide();
$(".view2").hide();
$("#btn2").click(function(){
  $(".view2").show();
  $(".view1").hide();
});

//Funcion que retrocede a la vista anterior al precionar el botón atras
$(".back-icon").click(function(){
  $(".view1").show();
    $(".view2").hide();
});

//Funcion que valida que se ingrese 10digitos al input de telefono, activa el boton next
  $('#phonee').keyup(function(){
    if($(this).val().length > 9){
      $('#submitBtn').removeAttr('disabled');
    } else {
      $('#submitBtn').attr('disabled','disabled');
    }
  }).trigger('keyup');

//función para validar que se ingresen solo numeros
$(function(){
  $('.phonee').keyup(function(e) {
    if(this.value!='-')
      while(isNaN(this.value))
        this.value = this.value.replace(/[\D]/i,'');
    })
});

//función que genera un número de 3 dígitos al azar
$(".view3").hide();
$('.code').click(function(e) {
  var yourcode = (Math.floor(Math.random() * 900) + 100);
  alert("Tu" + " " + "código" + " " + "es" + " " + "LAB" + "-" + yourcode);
  $(".view3").show();
  $(".view2").hide();
  $("#random-code").on("keyup", function() {
  $(".next2").prop("disabled", true);
  if( $("#random-code").val() == (yourcode)) {
  $(".next2").prop("disabled", false);
 }
});
});

//Funcion que retrocede a la vista anterior al precionar el botón atras
$(".back-icon2").click(function(){
  $(".view3").hide();
  $(".view2").show();
});

//muestra la vista 3 y oculta las demás
$(".next2").click(function(){
  $(".view3").hide();
  $(".view2").hide();
  $(".view4").show();
});
$(".back-button3").click(function(){
  $(".view4").hide();
  $(".view3").show();
  $(".view2").hide();
  $(".view1").hide();
});

//Se activa el botón next solo si se presiona el checkbox aceptando los terminos de servicio
$(".checkbox").on("click", function() {
  $(".next3").prop("disabled", false);
});

//muestra la vista 5 y oculta las demás
$(".next3").click(function(){
  $(".view3").hide();
  $(".view2").hide();
  $(".view5").show();
  $('.view5').delay(3000).fadeOut("slow");
  $(".view4").hide();
  $(".view3").hide();
  $(".view2").hide();
  $(".view1").show();
});
});
