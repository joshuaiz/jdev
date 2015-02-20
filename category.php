<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

						<div id="main" class="m-all t-2of3 d-5of7 cf" role="main">


							<?php if (is_category()) { ?>
								<h1 class="archive-title h2">
									<span><?php single_cat_title(); ?></span>
								</h1>

							<?php } ?>

					

				<?php global $post;
						
					$url = content_url();

					if (is_category( )) {
  					$cat = get_query_var('cat');
  					$yourcat = get_category($cat);
  					$parent = get_cat_name($category[0]->category_parent);
  					$slug = $yourcat->slug;
  					$slugupper = strtoupper($yourcat->slug);
  					$categories = get_categories('include='.get_query_var('cat'));

		
 					} ?>

					
				

						<div class="category-logo">

	<?php if ( $cat == 14 ) { ?>
		<img src="<?php echo $url; ?>/uploads/2014/05/AUSTRALIA.png"><img src="<?php echo $url; ?>/uploads/2014/05/NEWZEALAND.png">
	<?php } elseif ( $cat == 23 ) { ?>
		<img src="<?php echo $url; ?>/uploads/2014/05/MALAYSIA.png"><img src="<?php echo $url; ?>/uploads/2014/05/SINGAPORE.png">
	<?php } elseif ( $categories[0]->category_parent == 33 ) { ?>
		<img src="<?php echo $url; ?>/uploads/2014/05/<?php echo $slugupper; ?>.png">
	<?php } else { ?>
		<img src="<?php echo $url; ?>/uploads/2014/05/<?php echo $slug; ?>.png">
	<?php } ?>
</div>

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article">

								<header class="article-header">

									<h3 class="h2 entry-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>
									<!-- <p class="byline vcard"><?php
										printf(__( 'Posted <time class="updated" datetime="%1$s" pubdate>%2$s</time> <span class="amp">&</span> filed under %4$s.', 'bonestheme' ), get_the_time('Y-m-j'), get_the_time(__( 'F jS, Y', 'bonestheme' )), get_author_posts_url( get_the_author_meta( 'ID' ) ), get_the_category_list(', '));
									?></p> -->

								</header>

								<section class="entry-content cf">

									<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><div class="post-thumbnail"><?php the_post_thumbnail( 'bones-thumb-300' ); ?></div></a>

									<?php the_excerpt(); ?>

								</section>

								<footer class="article-footer">

								</footer>

							</article>

							<?php endwhile; ?>

									<?php bones_page_navi(); ?>

							<?php else : ?>

									<article id="post-not-found" class="hentry cf">
										<header class="article-header">
											<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
										</header>
										<section class="entry-content">
											<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e( 'This is the error message in the archive.php template.', 'bonestheme' ); ?></p>
										</footer>
									</article>

							<?php endif; ?>

						</div>


						<div class="sidebar">
						<?php // WP_Query arguments

						global $post;
						$url = content_url();

							if (is_category( )) {
  							$cat = get_query_var('cat');
  							$yourcat = get_category ($cat);
  							$slug = $yourcat->slug;
 							} ?>

 							<h3 class="widget-title">Recent <strong><?php echo get_cat_name($cat); ?></strong> Posts</h3>


						<?php $args = array (
							'post_status'            => 'publish',
							'cat'                    => $cat,
						);
						
						// The Query
						$query = new WP_Query( $args );
						
						// The Loop
						if ( $query->have_posts() ) {
							while ( $query->have_posts() ) {
								$query->the_post(); ?>
							
								
									<p class="posts-link"><a href="<?php the_permalink();?>"><?php the_title(); ?></a></p>
								
							<?php }
						} else {

							get_sidebar(); 
						}

						// Restore original Post Data
						wp_reset_postdata(); ?>

					</div>

				</div>

			</div>

<?php get_footer(); ?>
