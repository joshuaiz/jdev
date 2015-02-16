<?php
/*
 Template Name: Home Page
 *
*/
?>

<?php get_header(); ?>

			<div id="content" class="cf">

				<div id="inner-content" class="wrap cf">

						<div id="main" class="m-all cf" role="main">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							

								<section class="entry-content cf" itemprop="articleBody">
									<?php
										// the content (pretty self explanatory huh)
										the_content();

										
									?>
								</section>


							<?php endwhile; else : ?>

									<article id="post-not-found" class="hentry cf">
											<header class="article-header">
												<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
										</header>
											<section class="entry-content">
												<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e( 'This is the error message in the page-custom.php template.', 'bonestheme' ); ?></p>
										</footer>
									</article>

							<?php endif; ?>

						<article id="home-posts">

						<header class="article-header">

							<h3 class="h2 entry-title">Latest Posts</h3>

						</header>
							<section class="posts-loop m-all t-2of3 d-5of7 cf">


								<?php // WP_Query arguments
									$args = array (
										'post_type'              => 'post',
										'post_status'            => 'publish',
										'posts_per_page'         => '6',
										'order'                  => 'DESC',
										'orderby'                => 'date',
										'cache_results'          => true,
										'update_post_meta_cache' => true,
										'update_post_term_cache' => true,
									);
									
									// The Query
									$query = new WP_Query( $args );
									
									// The Loop
									if ( $query->have_posts() ) {
										while ( $query->have_posts() ) {
											$query->the_post(); ?>

											<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article">

								<header class="article-header">

									<h3 class="h2 entry-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>
									<!-- <p class="byline vcard"><?php
										printf(__( 'Posted <time class="updated" datetime="%1$s" pubdate>%2$s</time> by <span class="author">%3$s</span> <span class="amp">&</span> filed under %4$s.', 'bonestheme' ), get_the_time('Y-m-j'), get_the_time(__( 'F jS, Y', 'bonestheme' )), get_author_posts_url( get_the_author_meta( 'ID' ) ), get_the_category_list(', '));
									?></p> -->

								</header>

								<section class="entry-content cf">
									
									<div class="post-thumbnail">
									<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_post_thumbnail( 'bones-thumb-300' ); ?></a>
									</div>
									<div class="post-excerpt">
									<?php the_excerpt(); ?>
									</div>

								</section>

								<footer class="article-footer">

								</footer>
								</article>
										
										<?php } 
									} else {
									
									}

									
									wp_reset_postdata(); ?>

						</section>

						</article>

						<?php get_sidebar(); ?>

						</div>

						


				</div>

			</div>


<?php get_footer(); ?>

<script>
// Home Page slider
jQuery(document).ready(function($) {
 
  $(".owl-carousel").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 5,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [979,5],
      itemsTablet: [768,3],
      itemsTabletSmall: [479,1],
      itemsMobile : [0,1],

      responsiveRefreshRate : 100,
      // responsiveBaseWidth : ".owl-carousel"
 
  });
 
});

// jQuery(document).ready(function($){
// 	$(window).resize(funtion(){
//   		$('.owl-carousel').resize();

//   });
// });

</script>
