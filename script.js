$(document).ready(function() {
  $('img').click(function(){
    $('img').toggle('explode');
    $('img').delay(1000);
    $('img').fadeIn();
  });
});
