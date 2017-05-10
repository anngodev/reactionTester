// timer starts when page is loaded
var start = new Date().getTime();
// function to give shapes random color
function getRandomColor() {
	// taking all of letters and numbers that makeup colorcodes, then splits the string to an array
    var letters = "0123456789ABCDEF".split("");
    // color string to start off with a hash as it does
    var color = "#";

    for (var i = 0; i < 6; i++ ) {
    	// appending to a string(+=) add to it letters(var) Math.floor to get whole number up to 16 randomly
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function makeShapeAppear() {
	// making shapes appear in random positions
	var top = Math.random() * 400;

	var	left = Math.random() * 400;
	// random size
	var width = (Math.random() * 200) + 100;

	if (Math.random() > 0.5) {

		document.getElementById("shape").style.borderRadius = "50%";
	} else {
		document.getElementById("shape").style.borderRadius = "0%";
	}

		document.getElementById("shape").style.backgroundColor = getRandomColor();
		// set its width to var_width
		document.getElementById("shape").style.width = width + "px";

		document.getElementById("shape").style.height = width + "px";

		document.getElementById("shape").style.top = top + "px";

		document.getElementById("shape").style.left = left + "px";
		// putting element back in display
		document.getElementById("shape").style.display = "block";
		// starts timer again after click
		start = new Date().getTime();
	}
	// make shape appear after click 2 sec (2000)
	function appearAfterDelay() {
		// make shape appear after 2 sec
		setTimeout(makeShapeAppear, Math.random() * 2000);

	}
	// function
	appearAfterDelay();

	// grabbing the element and giving it a function when clicked
	document.getElementById("shape").onclick = function() {
		
		// makes the element disappear
		document.getElementById("shape").style.display = "none";

		// timer is measured when page is loaded
		var end = new Date().getTime();
		// how long it takes for user to click on shapes time past.. divided by 1000 to get time in sec
		var timeTaken = (end - start) / 1000;
		// (span) insert time taken in html
		document.getElementById("timeTaken").innerHTML = timeTaken + "s";
		// function
		appearAfterDelay();

	}