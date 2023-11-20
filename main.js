/* gallery section start  */ 
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 4000;	// Time Between Switch
	 
// Image List
images[0] = "img/gallery1.jpeg" ;
images[1] = "img/gallery2.jpeg";
images[2] = "img/gallery3.jpeg";
images[3] = "img/gallery4.jpeg";
images[4] = "img/gallery5.jpeg";
images[5] = "img/gallery6.jpeg";
 

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
/* gallery section ends  */ 