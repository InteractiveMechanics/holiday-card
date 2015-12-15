var keysArray = [];
var currentKeyIndex = 0;
var isPlaying = false;
var isRotatingBody = false;

window.onload = function(e) {
	var keys = getParameterByName('keys');
	
	if(keys) {
		keysArray = keys.split(',');
	}

	if(keysArray) {
		isPlaying = true;
		playKeysArray();
	}
}

var playKeysArray = function() {
	var character = keysArray[currentKeyIndex];

	if(currentKeyIndex < keysArray.length) {
		performAction(character);
		currentKeyIndex += 1;

		setTimeout(playKeysArray, 800);
	}

	if (currentKeyIndex == keysArray.length) {
		keysArray = [];
		isPlaying = false;

		if(isRotatingBody) {
			moveBodies();
		}
	}
}

window.onkeydown = function(e) { 
  return !(e.keyCode == 32);
};

window.onkeyup = function(e) {

	if(!isPlaying) {
		var key = e.keyCode ? e.keyCode : e.which;
	   	var character = getCharacter(key);
	   	
	   	keysArray.push(character);
	   	performAction(character);
	}
}

function getCharacter(key) {
	var letter = String.fromCharCode(key);
	return letter.toLowerCase();
}

function getAudioTag() {
	var audioTag = $('audio');
	return audioTag[0];
}

function rotateHead(person) {
	$('.character.'+ person +' .head .top').addClass("head-rocking").delay(1000).queue(function(){
    	$(this).removeClass("head-rocking").dequeue();
	});
}

function moveBodies() {
	if(isRotatingBody) {
		$('.character').removeClass('character-rocking');
		isRotatingBody = false;
   } else {
   		$('.character').addClass('character-rocking')
   		isRotatingBody = true;
   }
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function performAction(character) {
	audioTag = getAudioTag();
	var validCharacter = true;

	switch (character) {
    	case 'a':
    		audioTag.src = 'audio/church_bell_A.mp3';
    		break;
    	case 's':
    		audioTag.src = 'audio/church_bell_B.mp3';
    		break;
    	case 'd':
    		audioTag.src = 'audio/church_bell_C.mp3';
    		break;
    	case 'f':
    		audioTag.src = 'audio/church_bell_D.mp3';
    		break;
    	case 'j':
    		audioTag.src = 'audio/church_bell_E.mp3';
    		break;
    	case 'k':
    		audioTag.src = 'audio/church_bell_F.mp3';
    		break;
    	case 'l':
        	audioTag.src = 'audio/church_bell_G.mp3';
    		break;
	    case 'c':
	    	audioTag.src = 'audio/Vocal-1.mp3';
	    	rotateHead('mike');
    		break;
	    case 'v':
	    	audioTag.src = 'audio/Vocal-2.mp3';
	    	rotateHead('jeff');
    		break;
	    case 'b':
	    	audioTag.src = 'audio/Vocal-3.mp3';
	    	rotateHead('amelia');
    		break;
	    case 'n':
	    	audioTag.src = 'audio/Vocal-4.mp3';
	    	rotateHead('stacey');
    		break;
	    case 'm':
	        audioTag.src = 'audio/Vocal-5.mp3';
	        rotateHead('christina');
    		break;
    	case 'q':
	        moveBodies();
    		break;
    	case ' ':
    		audioTag.src = 'audio/Vocal-6.mp3';
    		rotateHead('mike');
    		rotateHead('jeff');
    		rotateHead('amelia');
    		rotateHead('stacey');
	        rotateHead('christina');
    		break;
    	default:
    		validCharacter = false;
    		break;
	}

	if(validCharacter) {
		audioTag.load();
		audioTag.play();
	}
}