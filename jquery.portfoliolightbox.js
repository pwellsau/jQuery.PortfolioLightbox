/*
 * name, author, version, license. instructions?
*/


// Creating an Immediately invoked function expression.
// Passing in 'jQuery' as param '$', to protect '$' in other libraries.
// And also to keep our variables private.
(function($) {

	// Add our function to $.fn.
    $.fn.lightBox = function() {

        // My plugin.
        // I have used '.on' here, and not the shortcut '.click', incase someone creates images dynamically
        this.on("click", function () {
        	//alert("hello");
        	$("body").append("<div id='lightboxBackground'></div>");
        	//$("#lightboxBackground").css({'display':'block', 'background':'red'});
        	$("#lightboxBackground").fadeIn();
        });

        $('body').on("click", '#lightboxBackground', function () {
			$("#lightboxBackground").remove();
		});

    };

// Passing the function 'jQuery' as '$' parameter.
}(jQuery));