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
  $(this).css('height' , '300px');  
  $(this).css('width' , '300px');
});
$('.plate').mouseout(function() {
$(this).css('height','230px');
$(this).css('width','content');
});


});
