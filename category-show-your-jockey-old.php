<?php get_header(); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">
				
				<div class="category-logo">
				<a href="http://jockey:8888/category/show-your-jockey/"><img src="http://jockey:8888/wp-content/uploads/2014/04/syj-logo.png"></a>
				</div>

						<div id="main" class="m-all t-2of3 d-5of7 cf" role="main">

												<div class="breadcrumbs">
						<?php if ( function_exists('yoast_breadcrumb') ) {
	$breadcrumbs = yoast_breadcrumb("","",false);
} ?>
</div>

							<?php if (is_category()) { ?>
								<h1 class="archive-title h2">
									<span><?php single_cat_title(); ?></span>
								</h1>

							<?php } ?>

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article">

								<header class="article-header">

									<h3 class="h2 entry-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>
									<p class="byline vcard"><?php
										printf(__( 'Posted <time class="updated" datetime="%1$s" pubdate>%2$s</time> <span class="amp">&</span> filed under %4$s.', 'bonestheme' ), get_the_time('Y-m-j'), get_the_time(__( 'F jS, Y', 'bonestheme' )), get_author_posts_url( get_the_author_meta( 'ID' ) ), get_the_category_list(', '));
									?></p>

								</header>

								<section class="entry-content cf">

									<?php the_post_thumbnail( 'bones-thumb-300' ); ?>

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

					<?php get_sidebar(); ?>

				</div>

			</div>

<?php get_footer(); ?>
