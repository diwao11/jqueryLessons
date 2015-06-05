//THREE P's of Programming (Problem, Plan, Perform)
//PROBLEM: User when clicking on an image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox
var $overlay = $('<div id="overlay"></div>'); //creating a variable in jQuery and then assigning the html to it.
var $image = $("<img>");
var $caption = $("<p></p>");
// An image
$overlay.append($image);
// A caption
$overlay.append($caption);
//Add an overlay
$("body").append($overlay);
	
//PLAN
//1. Capture the click event on a link to an image
$('#imageGallery a').click(function(){
	event.preventDefault();
	var imageLocation = $(this).attr("href"); //this is the attribute that we want
	//Update the overlay with the image linked in the link
	$image.attr("src", imageLocation);
	// Show the overlay.
	$overlay.show();
	//Get child's alt attribute and set caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
}); //end of the imageGallery event
	//When overlay is clicked
	//Hide the overlay
	$overlay.click(function(){
		$(this).hide();
	}); //end the overlay click event
