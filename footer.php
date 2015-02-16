			<footer class="footer" role="contentinfo">

				<div id="inner-footer" class="wrap cf">

					<nav role="navigation">
						<?php wp_nav_menu(array(
    					'container' => '',                              // remove nav container
    					'container_class' => 'footer-links cf',         // class of container (should you choose to use it)
    					'menu' => __( 'Footer Links', 'bonestheme' ),   // nav name
    					'menu_class' => 'nav footer-nav cf',            // adding custom nav class
    					'theme_location' => 'footer-links',             // where it's located in the theme
    					'before' => '',                                 // before the menu
        			'after' => '',                                  // after the menu
        			'link_before' => '',                            // before each link
        			'link_after' => '',                             // after each link
        			'depth' => 0,                                   // limit the depth of the nav
    					'fallback_cb' => 'bones_footer_links_fallback'  // fallback function
						)); ?>
					</nav>

					<p class="source-org copyright"><img src="/wp-content/themes/jockeyintl/library/images/jockey_swirl.png" width="22" height="22" /> &nbsp;&copy; <?php echo date('Y'); ?> Jockey International, Inc. All Rights Reserved. Jockey and Jockey Swirl Icon are trademarks of Jockey International, Inc.</p>

				</div>

			</footer>

		</div>

		<?php if ( is_front_page() || is_home() ) { ?>
			<script src="<?php echo get_template_directory_uri(); ?>/library/owl-carousel/owl.carousel.js"></script>
			
		<?php } ?>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>

		

		<script type='text/javascript'>//<![CDATA[ 
	jQuery(document).ready(function($){
		if(navigator.userAgent.match(/Trident.*rv\:11\./)) {
          $('body').addClass('ie11 ie');
     }
});//]]>
</script>
		


	</body>

</html>
