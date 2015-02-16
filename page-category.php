<?php
/*
 Template Name: Category Page New
 *
*/
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

						<div id="main" class="m-all t-2of3 d-5of7 cf" role="main">

							
						

							<?php // WP_Query arguments
								$args = array (
									'post_status'            => 'publish',
									'cat'                    => '3',
									'pagination'             => true,
									'posts_per_page'         => '10',
									'posts_per_archive_page' => '10',
								);
								
								// The Query
								$query = new WP_Query( $args );
								
								// The Loop
								if ( $query->have_posts() ) {
									while ( $query->have_posts() ) {
										$query->the_post(); ?>
										
										
						<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

								<header class="article-header">

									<h1 class="page-title h2" itemprop="headline"><?php the_title(); ?></h1>

									<?php global $post;
						$url = content_url();

				
  					$cat = get_query_var('cat');
  					$yourcat = get_category ($cat);
  					$slug = $yourcat->slug;
 				?>

						<div class="category-logo">
							<img src="<?php echo $url; ?>/uploads/2014/05/<?php echo $slug; ?>.png">
						</div>
									

						<div class="category-logo">
							<img src="<?php echo $url; ?>/uploads/2014/05/<?php echo $slug; ?>.png">
						</div>

									<!-- <p class="byline vcard">
										<?php printf( __( 'Posted <time class="updated" datetime="%1$s" pubdate>%2$s</time> by <span class="author">%3$s</span>', 'bonestheme' ), get_the_time('Y-m-j'), get_the_time(get_option('date_format')), get_the_author_link( get_the_author_meta( 'ID' ) )); ?>
									</p> -->

								</header> <?php // end article header ?>

								<section class="entry-content cf" itemprop="articleBody">
									<?php
										// the content (pretty self explanatory huh)
										the_content();

										
									?>
								</section> <?php // end article section ?>

								<footer class="article-footer cf">

								</footer>

								<?php comments_template(); ?>

							</article>

									<?php }
								} else { ?>

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

								<?php }
								
								// Restore original Post Data
								wp_reset_postdata(); ?>
															

						</div>

						<?php get_sidebar(); ?>

				</div>

			</div>


<?php get_footer(); ?>
