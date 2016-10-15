window.onload= function(){
	var x = document.getElementById("boundary1");
	var y = document.querySelectorAll(".boundary");
	

		
	for (var i=0; i<y.length; i++){
		y[i].onmouseover = function(){
			for (var j=0;j<y.length-1; j++){
				y[j].className = "boundary youlose";
			}
		}
	}
	

};

