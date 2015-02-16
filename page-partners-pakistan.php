<?php
/*
 Template Name: Pakistan Page
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>

<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

						<div id="main" class="m-all t-2of3 d-5of7 cf" role="main">

						<h1 class="page-title h2"><?php the_title(); ?></h1>

						<?php global $post;
						$url = content_url();
						$slug = get_post( $post )->post_name; 
						$slug = strtoupper($slug); ?>
						<?php $postid = get_the_ID(); ?>

						<div class="category-logo">
							<img src="<?php echo $url; ?>/uploads/2014/05/<?php echo $slug; ?>.png">
						<?php if ( $postid == 42 ) { ?>
							<img src="<?php echo $url; ?>/uploads/2014/05/NEWZEALAND.png">
						<?php } elseif ( $postid == 60 ) { ?>
							<img src="<?php echo $url; ?>/uploads/2014/05/SINGAPORE.png">
						<?php } ?>
						</div>

							<?php // WP_Query arguments
$args = array (
	'post_type'              => 'post',
	'post_status'            => 'publish',
	'cat'                    => '25',
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

							<?php } ?>

							<?php } else { ?>

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

							<?php } ?>

							<?php // Restore original Post Data
wp_reset_postdata(); ?>

						</div>

						<?php get_sidebar(); ?>

				</div>

			</div>


<?php get_footer(); ?>
