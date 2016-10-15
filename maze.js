window.onload= function(){
	var x = document.getElementById("boundary1");
	var y = document.querySelectorAll(".boundary");
	var e = document.getElementById("end");
	var boundary = false;
	var status = document.getElementById("status");
	

		
	for (var i=0; i<y.length; i++){
		y[i].onmouseover = function(){
			for (var j=0;j<y.length-1; j++){
				y[j].className = "boundary youlose";
			}
		boundary=true;
		}
	}
	
	
	e.onmouseover = function(){
      if(boundary){
        status.innerHTML = "You Lose!";
      }
      else{
        status.innerHTML = "You Win!";
      }
	}

};

