/*
 * name, author, description, version, examples, license. instructions?
 */


// Creating an Immediately invoked function expression.
// Passing in 'jQuery' as param '$', to protect '$' in other libraries.
// And also to keep our variables private.
(function($) {

	// Add our function to $.fn.
    $.fn.lightBox = function(options) {

    	var settings = $.extend({
			title		:'My Picture',
			text		:'My description goes here',
			link 		:null
		}, options);

        // My plugin.
        // I have used '.on' here, and not the shortcut '.click', incase someone creates images dynamically
        this.on("click", function () {
        	//alert($(this).attr('src'));
        	var imgsrc = $(this).attr('src');
        	$("body").append("<div id='lightboxBackground'></div>" +
        						"<div id='displayContainer'><div id='imgContainer'><img src='" + imgsrc + "'></div>" +
        						"<div id='textContainer'><h2>" + settings.title + "</h2><p>" + settings.text + "</p></div><div class='break'></div></div>");
        	//$("#lightboxBackground").css({'display':'block', 'background':'red'});
        	$("#lightboxBackground").fadeIn();
        	$("#displayContainer").fadeIn();
        });

        $('body').on("click", '#lightboxBackground', function () {
			$("#lightboxBackground").remove();
			$("#displayContainer").remove();
		});

		return this; // Make sure other methods can be chained

    };

// Passing the function 'jQuery' as '$' parameter.
}(jQuery));