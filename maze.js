window.onload= function(){
	var x = document.getElementById("boundary1");
	var y = document.querySelectorAll(".boundary");
	var e = document.getElementById("end");
	var boundary = false;
	var status = document.getElementById("status");
	var s = document.getElementById("start");
	

		
	for (var i=0; i<y.length; i++){
		y[i].onmouseover = function(){
			for (var j=0;j<y.length-1; j++){
				y[j].className = "boundary youlose";
			}
		boundary=true;
		}
	}
	
	s.onclick = function(){
    for (var i=0; i<y.length; i++){
      y[i].onmouseover = function()
      {
        for (var j=0;j<y.length-1; j++){
          y[j].className = "boundary youlose";
          status.innerHTML = "You Lose!";
        }
        boundary=true;
      }
    }

    for (var i=0;i<y.length-1; i++){
      y[i].className ="boundary";
    }
    status.innerHTML = "Move your mouse over the \"S\" to begin.";
    boundary = false;
	
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

