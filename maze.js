window.onload= function(){
	var x = document.getElementById("boundary1");
	var y = document.querySelectorAll(".boundary");
	var e = document.getElementById("end");
	var boundary = false;
	var status = document.getElementById("status");
	var s = document.getElementById("start");
	var maze = document.getElementById("maze");
	

		
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
		
		
		
		document.onmouseover = function(some){
			var a = some.clientX;
			var b = some.clientY;

			if((a<maze.offsetLeft)||(a>maze.offsetRight)||(b<maze.offsetTop)||(b>maze.offsetBottom)){
				for (var j=0;j<y.length-1; j++){
					y[j].setAttribute("class","boundary youlose");
					status.innerHTML = "You Lose!";
					boundary=true;
				}
			}
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

