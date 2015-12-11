window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   var character = getCharacter(key);

	switch (new Date().getDay()) {
    	case 'a':
    	case 's':
    	case 'd':
    	case 'f':
    	case 'j':
    	case 'k':
    	case 'l':
        	//Blue Buttons
        	break;
	    case 'c':
	    case 'v':
	    case 'b':
	    case 'n':
	    case 'm':
	        day = "Monday";
	        break;
	    case 2:
	        day = "Tuesday";
	        break;
	    case 3:
	        day = "Wednesday";
	        break;
	    case 4:
	        day = "Thursday";
	        break;
	    case 5:
	        day = "Friday";
	        break;
	    case 6:
	        day = "Saturday";
	        break;
	}
}

function getCharacter(key) {
	var letter = String.fromCharCode(key);
	return letter.toLowerCase();
}


$(document).ready(function(){

	//Grab alll the values $('')
	var hasIntereactedWith = false;
	var someElement = $('element');
	someElement.onclick = function() {
		var crossWordItem = $(this).data('crowssword-item');
		hasIntereactedWith true;
	}
});