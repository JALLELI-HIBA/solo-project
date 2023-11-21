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





/* search bar code begin */
function searchMenu() {
    // Get the search input value
    var searchTerm = document.getElementById("menu-search").value.toLowerCase();

    // Get all menu items
    var menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function (menuItem) {
        var dishName = menuItem.querySelector("h3").innerText.toLowerCase();

        // Check if the dish name contains the search term
        if (dishName.includes(searchTerm)) {
            // If yes, show the menu item
            menuItem.style.display = "flex";
        } else {
            // If not, hide the menu item
            menuItem.style.display = "none";
        }
    });
}

/* search bar code ends */


/* rating  */

var star = document.querySelectorAll('input');
var showValue = document.querySelector('#rating-value');

for (let i = 0; i < star.length; i++) {
	star[i].addEventListener('click', function() {
		i = this.value;

		showValue.innerHTML = i + " out of 5";
	});
}


// Add an event listener to the button using jQuery
$(document).ready(function() {
    
    $('.btn-third').on('click', function(event) {
        
        event.preventDefault();

        alert("your request has been sent successfully.");
    });
});