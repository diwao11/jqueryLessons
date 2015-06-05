// THREE P's of Programming.
//PROBLEM
//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction.

//PLAN
//1. Hide spoiler
$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler</button>");
//3. When button pressed
$("button").click(function(){
	//3.1, Show spoiler
	$(this).prev().show(); //Shows the spoiler next to button picked.
		//$(".spoiler span").show(); This selected all spans so can't use.
	//3.2, Get rid of button
	$(this).remove();
}); //end of button event
	//3.1, Show spoiler
	//3.2, Get rid of button
