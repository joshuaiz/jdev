<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<?php // Google Chrome Frame for IE ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title><?php wp_title(''); ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' /> 

		<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-icon-touch.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<?php // or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php // wordpress head functions ?>
		<?php wp_head(); ?>
		<?php // end of wordpress head ?>

		<?php // drop Google Analytics Here ?>
		<?php // end analytics ?>

	</head>

	<body <?php body_class(); ?>>

		<div id="container">

		<?php // Grab our header images for each page/category. Using content_url so it will work on local and production site. ?>



	<div id="banner" class="cf">
  			<div class="wrap-center wrap">
				<div class="banner-centered" id="banner-text">

				<?php the_field('callout'); ?>

				<?php if(is_category(3)) {
					the_field('callout', 6486); 
				} ?>

				<?php if(is_category(34)) {
					the_field('callout', 286);
				} ?>

				<?php if(is_category(6)) {
					the_field('callout', 234);
				} ?>

				<?php if(is_category(11)) {
					the_field('callout', 238);
				} ?>

				<?php if(is_category(12)) {
					the_field('callout', 240);
				} ?>

				<?php if(is_category(8)) {
					the_field('callout', 242);
				} ?>

				<?php if(is_category(5)) {
					the_field('callout', 232);
				} ?>

				<?php if(is_category(9)) {
					the_field('callout', 244);
				} ?>

				</div>
			</div>
		</div>





		
		
			<header class="header cf" role="banner">

				<div id="inner-header" class="wrap cf">

					<?php // to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p> ?>
					<a href="<?php echo home_url(); ?>" rel="nofollow"><div id="logo"><img src="<?php echo get_template_directory_uri(); ?>/library/images/jockey_logo.png"></div></a>

					<?php // if you'd like to use the site description you can un-comment it below ?>
					<?php // bloginfo('description'); ?>

					<div class="nav-wrap">
					<nav role="navigation" class="main-menu">
						<?php wp_nav_menu(array(
    					'container' => false,                           // remove nav container
    					'container_class' => 'menu cf',                 // class of container (should you choose to use it)
    					'menu' => __( 'The Main Menu', 'bonestheme' ),  // nav name
    					'menu_class' => 'nav top-nav cf',               // adding custom nav class
    					'theme_location' => 'main-nav',                 // where it's located in the theme
    					'before' => '',                                 // before the menu
        				'after' => '',                                  // after the menu
        				'link_before' => '',                            // before each link
        				'link_after' => '',                             // after each link
        				'depth' => 0,                                   // limit the depth of the nav
    					'fallback_cb' => ''                             // fallback function (if there is one)
						)); ?>

					</nav>
					</div>

				</div>		

			</header>

			<div class="breadcrumbs-outer">
				<div class="breadcrumbs-inner wrap cf">
				<?php $args = array(

    		    'container'       => 'div',   // container element
    		    'separator'       => '/', // separator between items
    		    'show_on_front'   => true,    // whether to show on front
    		    'network'         => false,   // whether to create trail back to main site (multisite)
    		    'show_title'      => true,    // whether to show the current page title
    		    'show_browse'     => false,    // whether to show the "browse" text
    		    'echo'            => true,    // whether to echo or return the breadcrumbs

        		); ?>

					<?php if ( function_exists( 'breadcrumb_trail' ) ) breadcrumb_trail($args); ?>
				</div>
			</div>
