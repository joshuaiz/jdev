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



		





		<div class="header-background">

			<?php $url = content_url(); ?>

				<?php if ( is_category( 'show-youre-jockey' ) || is_page(8) ) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/11/syj2015.png">
				<?php } elseif ( is_category( 'usa-originals-mens' ) || is_page(232) ) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/11/usamensss15.png">
				<?php } elseif ( is_category( 'usa-originals-global-programs' ) || is_page(238) ) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/05/USAGLOBAL.png">
				<?php } elseif ( is_category( 'nplp' ) || is_page(244) ) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/05/NPLP-bg.png">
				<?php } elseif (is_category( 'partners' ) || category_has_parent('33') || is_page(16) || $post->post_parent == '16') { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/05/PARTNER.png">
				<?php } elseif (is_desc_cat("partners")) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/05/PARTNER.png">
				<?php } elseif (is_page(5973)) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/05/PARTNER.png">
				<?php } elseif ( is_category( 'international-collection-global-programs' ) || is_page(240) ) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/05/INTLGLOBAL.png">
				<?php } elseif (is_category( 'seamless-shapewear' ) || is_page(246) ) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/05/Shapewear.png">
				<?php } elseif (is_category( 'international-collection' ) || is_page(234) ) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/11/intlss15.png">
				<?php } elseif (is_category( 'usa-originals-womens' ) || is_page(286) ) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/11/usawomensss15.png">
				<?php } elseif (is_page( 'about-jockey' )) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/05/aboutjockey.png">
				<?php } elseif (is_category( 'jockey-sport' ) || is_page(242) ) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/05/SPORTGLOBAL.png">
				<?php } elseif ( is_front_page() || is_home() ) { ?>
					<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/11/mainpage.png">
				<?php } else { ?>
				<img class="header-bg" src="<?php echo $url; ?>/uploads/2014/11/mainpage.png">
				<?php } ?>

		</div>
		
			<header class="header cf" role="banner">

				<div id="inner-header" class="wrap cf">

					<?php // to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p> ?>
					<a href="<?php echo home_url(); ?>" rel="nofollow"><div id="logo"><img src="http://dev.brandsite.jockeyinternational.com/wp-content/themes/jockeyintl/library/images/jockey_logo.png"></div></a>

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

			<div class="breadcrumbs breadcrumbs-outer">
				<div class="breadcrumbs-inner wrap cf">
					<?php if ( function_exists('yoast_breadcrumb') ) { yoast_breadcrumb('<p id="breadcrumbs">','</p>'); } ?>
				</div>
			</div>
