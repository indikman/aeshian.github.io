<html>

<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<!--Google Fonts-->
<link href='https://fonts.googleapis.com/css?family=Raleway:400,700,300,600' rel='stylesheet' type='text/css'>

<!-- *************************************************************************
**************************   STYLE SHEET   *******************************
************************************************************************** -->

<link href="css/main.css" rel="stylesheet" type="text/css" />
<link href="css/jquery.fancybox.css" rel="stylesheet" type="text/css" />

    
<!--[if IE 7 ]>    <html class= "ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class= "ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class= "ie9"> <![endif]-->

<!--[if lt IE 9]>
   <script>
      document.createElement('header');
      document.createElement('nav');
      document.createElement('section');
      document.createElement('article');
      document.createElement('aside');
      document.createElement('footer');
   </script>
<![endif]-->

<title>CSE Symposium</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">


 <!-- *************************************************************************
*****************                FAVICON               ********************
************************************************************************** -->

<link rel="shortcut icon" href="img/favicon.png" />

<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->



<!-- *************************************************************************
**************************        JS       *******************************
************************************************************************** -->
<script type="text/javascript" src="js/jquery.js"> </script>
<script type="text/javascript" src="js/jquery.flexslider-min.js"> </script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"> </script>
<script type="text/javascript" src="js/hoverIntent.js"> </script>
<script type="text/javascript" src="js/jquery.sfmenu.js"> </script>
<script type="text/javascript" src="js/retina.js"> </script>
<script type="text/javascript" src="js/custom.js"> </script>
<script type="text/javascript" src="js/jquery.fancybox.js"> </script>



<!-- *************************************************************************
******************     THESE ARE THE SCRIPT CALLS    ***********************
************************************************************************** -->
<script type="text/javascript">
jQuery(window).load(function() {
	
jQuery('.slider').flexslider();
 
// Create the dropdown base
jQuery("<select />").appendTo(".topmenu");

// Create default option "Go to..."
jQuery("<option />", {
 "selected": "selected",
 "value"   : "",
 "text"    : "Menu"
}).appendTo(".topmenu select");

// Populate dropdown with menu items
jQuery(".topmenu a").each(function() {
var el = jQuery(this);
jQuery("<option />", {
   "value"   : el.attr("href"),
   "text"    : el.text()
}).appendTo(".topmenu select");
});

// To make dropdown actually work
// To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
jQuery(".topmenu select").change(function() {
window.location = jQuery(this).find("option:selected").val();
});

jQuery('.fancybox').fancybox();	
	
});
	
</script>

</head>

