$('input').keydown(function(e) {
  // variable e contains keystroke data
  // only accessible with .keydown()
  if(e.which == 11) {
     e.preventDefault();
  }
});

$('input').keyup(function(event) {
  // run other event codes here							  
});