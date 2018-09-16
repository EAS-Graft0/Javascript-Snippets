
function flashArrow(){

    $('#leftarrow').fadeOut('slow', function() {
        $('#leftarrow').fadeIn('slow', function() {
            flashArrow()
        });
    });

    $('#rightarrow').fadeOut('slow', function() {
        $('#rightarrow').fadeIn('slow', function() {
            
        });
    });

}
