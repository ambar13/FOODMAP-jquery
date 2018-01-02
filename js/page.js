$(document).ready(function() {
  var $plate = $('.plate');  
  var $listFood = $('#listFood'); 
  var $closeModal = $('button.close');


// Seleccion de el combo-box
// $listFood.click(function() {
//     var value = $(this).val();    
//     $plate.hide();
//     $('.plate[=''+ value +'']').show();
//   });

// efecto del mouse
$('.plate').mouseover(function() {
  $('.plate').css('height','200px');  
  $('.plate').css('width','300px');
});
$('.plate').mouseout(function() {
$('.plate').css('height','120px');
});


});
