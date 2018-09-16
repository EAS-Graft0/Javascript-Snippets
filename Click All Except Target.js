$("something").click(function(e) {
    if (!$(e.target).hasClass('somethingelse')) {
        alert('do something!');
    }
});