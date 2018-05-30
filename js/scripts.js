$(document).ready(function() {
  $("div.container>div").click(function(){
    $(".definition", this).toggle();
    $(".term", this).toggle();
  });
});
