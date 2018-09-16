var i = 0
	function loop(){
		if(i<10){
			i++
			setTimeout(loop, 5000)
			console.log(i)
			
		}
	}

	loop()