# Portfolio Lightbox jQuery Plugin #

Simple jQuery plugin which will display a preview of your image in a lightbox, and include a description and links.

##Version##
0.1.0

##Usage##

1. Ensure you have jQuery installed.
2. Link to the plugin in your html document with

        <script src="jQuery.PortfolioLightbox/jquery.portfoliolightbox.js"></script>

3. Link to the CSS with

        <link rel="stylesheet" href="jQuery.PortfolioLightbox/portfoliolightbox.css">

4. Ensure your img element has an id attribute.
5. Inside your script tags, configure the Portfolio Lightbox and it's settings as follows:

        <script>
		$(document).ready(function () {
			$("#your-id").lightBox({
				imgpath: 'path/to/yourimage.jpg',
				title: 'Your Title',
				text: 'Enter any text',
				link: ['http://www.link1.com', 'http://www.link2.com'],
				linkText: ['Site 1 Text', 'Link 2 text']
			});		
		});
		</script>

Create this for each id in each img element you want displayed in a lightbox.

The 'imgpath' option is mandatory. The title and text options will display with default text if not entered, and specifying links are optional. You may enter as many links as you wish. Enter links between ' ' and separate by commas.


## Vendors ##
jQuery - [http://jquery.com](http://jquery.com)

##License##
MIT