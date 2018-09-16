for(something in jsondata.somethings){
	for(somethingchild in jsondata.somethings[something].somethingchild){
		for(somethingchildchild in jsondata.somethings[something].somethingchilds[somethingchild].somethingchildchild){
			console.log(something + somethingchild + somethingchildchild)
		}
	}
}