$(document).ready(function() {
  var $imgPlate = $('.plate');
  var $plate = $('.plate');  
  var $listFood = $('#listFood'); 


// Seleccion de el combo-box
$listFood.click(function() {
    var selectP = $(this).val();    
  $imgPlate.hide();
  $('.plate[data-plate="' + selectP + '"]').show();
});

 
// efecto del mouse
$('.plate').mouseover(function() {
  $('.plate').css('height' , '200px');  
  $('.plate').css('width' , '300px');
});
$('.plate').mouseout(function() {
$('.plate').css('height','120px');
});


});
