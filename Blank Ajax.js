    $.ajax({
        type: 'GET',
        url: wsurl + '/',
        dataType: 'JSON',
        success: function(data) {

        }
    })
	
	    $.ajax({
        type: 'POST',
        url: wsurl + '/',
		data: JSON.stringify(data),
        dataType: 'JSON',
		contentType: 'application/json; charset=utf-8',
		success: function(data) {

        }
    })