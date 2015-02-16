<?php
/*
Author: Eddie Machado
URL: htp://themble.com/bones/

This is where you can drop your custom functions or
just edit things like thumbnail sizes, header images,
sidebars, comments, ect.
*/

// LOAD BONES CORE (if you remove this, the theme will break)
require_once( 'library/bones.php' );

// USE THIS TEMPLATE TO CREATE CUSTOM POST TYPES EASILY
require_once( 'library/custom-post-type.php' );

// CUSTOMIZE THE WORDPRESS ADMIN (off by default)
require_once( 'library/admin.php' );

/*********************
LAUNCH BONES
Let's get everything up and running.
*********************/

function bones_ahoy() {

  // let's get language support going, if you need it
  load_theme_textdomain( 'bonestheme', get_template_directory() . '/library/translation' );

  // launching operation cleanup
  add_action( 'init', 'bones_head_cleanup' );
  // A better title
  add_filter( 'wp_title', 'rw_title', 10, 3 );
  // remove WP version from RSS
  add_filter( 'the_generator', 'bones_rss_version' );
  // remove pesky injected css for recent comments widget
  add_filter( 'wp_head', 'bones_remove_wp_widget_recent_comments_style', 1 );
  // clean up comment styles in the head
  add_action( 'wp_head', 'bones_remove_recent_comments_style', 1 );
  // clean up gallery output in wp
  add_filter( 'gallery_style', 'bones_gallery_style' );

  // enqueue base scripts and styles
  add_action( 'wp_enqueue_scripts', 'bones_scripts_and_styles', 999 );
  // ie conditional wrapper

  // launching this stuff after theme setup
  bones_theme_support();

  // adding sidebars to Wordpress (these are created in functions.php)
  add_action( 'widgets_init', 'bones_register_sidebars' );

  // cleaning up random code around images
  add_filter( 'the_content', 'bones_filter_ptags_on_images' );
  // cleaning up excerpt
  add_filter( 'excerpt_more', 'bones_excerpt_more' );

} /* end bones ahoy */

// let's get this party started
add_action( 'after_setup_theme', 'bones_ahoy' );


/************* OEMBED SIZE OPTIONS *************/

if ( ! isset( $content_width ) ) {
	$content_width = 640;
}

/************* THUMBNAIL SIZE OPTIONS *************/

// Thumbnail sizes
add_image_size( 'bones-thumb-600', 600, 150, true );
add_image_size( 'bones-thumb-300', 300, 300, true );
add_image_size( 'bones-thumb-150', 150, 150, true );

/*
to add more sizes, simply copy a line from above
and change the dimensions & name. As long as you
upload a "featured image" as large as the biggest
set width or height, all the other sizes will be
auto-cropped.

To call a different size, simply change the text
inside the thumbnail function.

For example, to call the 300 x 300 sized image,
we would use the function:
<?php the_post_thumbnail( 'bones-thumb-300' ); ?>
for the 600 x 100 image:
<?php the_post_thumbnail( 'bones-thumb-600' ); ?>

You can change the names and dimensions to whatever
you like. Enjoy!
*/

add_filter( 'image_size_names_choose', 'bones_custom_image_sizes' );

function bones_custom_image_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'bones-thumb-600' => __('600px by 150px'),
        'bones-thumb-300' => __('300px by 300px'),
        'bones-thumb-150' => __('150px by 150px'),
    ) );
}

/*
The function above adds the ability to use the dropdown menu to select
the new images sizes you have just created from within the media manager
when you add media to your content blocks. If you add more image sizes,
duplicate one of the lines in the array and name it according to your
new image size.
*/

/************* ACTIVE SIDEBARS ********************/

// Sidebars & Widgetizes Areas
function bones_register_sidebars() {
	register_sidebar(array(
		'id' => 'sidebar1',
		'name' => __( 'Sidebar 1', 'bonestheme' ),
		'description' => __( 'The first (primary) sidebar.', 'bonestheme' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h4 class="widgettitle">',
		'after_title' => '</h4>',
	));

	/*
	to add more sidebars or widgetized areas, just copy
	and edit the above sidebar code. In order to call
	your new sidebar just use the following code:

	Just change the name to whatever your new
	sidebar's id is, for example:

	register_sidebar(array(
		'id' => 'sidebar2',
		'name' => __( 'Sidebar 2', 'bonestheme' ),
		'description' => __( 'The second (secondary) sidebar.', 'bonestheme' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h4 class="widgettitle">',
		'after_title' => '</h4>',
	));

	To call the sidebar in your template, you can just copy
	the sidebar.php file and rename it to your sidebar's name.
	So using the above example, it would be:
	sidebar-sidebar2.php

	*/
} // don't remove this bracket!


/************* COMMENT LAYOUT *********************/

// Comment Layout
function bones_comments( $comment, $args, $depth ) {
   $GLOBALS['comment'] = $comment; ?>
  <div id="comment-<?php comment_ID(); ?>" <?php comment_class('cf'); ?>>
    <article  class="cf">
      <header class="comment-author vcard">
        <?php
        /*
          this is the new responsive optimized comment image. It used the new HTML5 data-attribute to display comment gravatars on larger screens only. What this means is that on larger posts, mobile sites don't have a ton of requests for comment images. This makes load time incredibly fast! If you'd like to change it back, just replace it with the regular wordpress gravatar call:
          echo get_avatar($comment,$size='32',$default='<path_to_url>' );
        */
        ?>
        <?php // custom gravatar call ?>
        <?php
          // create variable
          $bgauthemail = get_comment_author_email();
        ?>
        <img data-gravatar="http://www.gravatar.com/avatar/<?php echo md5( $bgauthemail ); ?>?s=40" class="load-gravatar avatar avatar-48 photo" height="40" width="40" src="<?php echo get_template_directory_uri(); ?>/library/images/nothing.gif" />
        <?php // end custom gravatar call ?>
        <?php printf(__( '<cite class="fn">%1$s</cite> %2$s', 'bonestheme' ), get_comment_author_link(), edit_comment_link(__( '(Edit)', 'bonestheme' ),'  ','') ) ?>
        <time datetime="<?php echo comment_time('Y-m-j'); ?>"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>"><?php comment_time(__( 'F jS, Y', 'bonestheme' )); ?> </a></time>

      </header>
      <?php if ($comment->comment_approved == '0') : ?>
        <div class="alert alert-info">
          <p><?php _e( 'Your comment is awaiting moderation.', 'bonestheme' ) ?></p>
        </div>
      <?php endif; ?>
      <section class="comment_content cf">
        <?php comment_text() ?>
      </section>
      <?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
    </article>
  <?php // </li> is added by WordPress automatically ?>
<?php
} // don't remove this bracket!


/*
This is a modification of a function found in the
twentythirteen theme where we can declare some
external fonts. If you're using Google Fonts, you
can replace these fonts, change it in your scss files
and be up and running in seconds.
*/
// function bones_fonts() {
//   wp_register_style('googleFonts', 'http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic');
//   wp_enqueue_style( 'googleFonts');
// }

// add_action('wp_print_styles', 'bones_fonts');


// function get_my_header() {
 
//   if( !is_home() ) {
    
//     global $post;
//     // get category by ID
//     $category = get_the_category($post->ID);
//     // first category slug
//     $catslug = $category[0]->slug; 
  
//     // is there is a category slug call the header-$catslug.pgp
//     if (isset($catslug)) {
//            get_header($catslug);
//     } else if (is_single()) {
//       get_header('single');
//     }

//     else {
//       // else call normal header.php
//            get_header();
//       }// ends !is_home()
  
//   // else call normal header
//   } else {
//     get_header();
//   }// ends isset()
  
// } // ends get_myheader function

// Add to the body_class function
function condensed_body_class($classes) {
    global $post;
 
    // add a class for the name of the page - later might want to remove the auto generated pageid class which isn't very useful
    if( is_page()) {
        $classes[] = $post->post_type . '-' . $post->post_name;
        $classes[] = $post->post_name;
    }

    if(is_single() || is_category()) {
      // $category = get_the_category();
      // $classes[] = $category[0]->slug;
      // $classes[] = $category[0]->slug;
      $cat = get_query_var('cat');
      $yourcat = get_category ($cat);
      $classes[] = $yourcat->slug;
   }
 
    // add a class for the parent page name
    if ( is_page() && $post->post_parent ) {
        $post_parent = get_post($post->post_parent);
        $parentSlug = $post_parent->post_name;
        $classes[] = "parent-".$parentSlug;
    }

    if ( is_archive() || is_page()) {
      // $category = get_the_category();
      // $catParID = $category[0]->category_parent;
      // $catParent = get_cat_name ($catParID);
      // $classes[] = strtolower($catParent);
      $category = get_the_category(); 
      $category_parent_id = $category[0]->category_parent;
      
      $category_parent = get_term( $category_parent_id, 'category' );
      $css_slug = $category_parent->slug;
      $classes[] = $css_slug;
      // $classes[] = "parent-category-".$css_slug;
    }

 
    // add class for the name of the custom template used (if any)
    $temp = get_page_template();
    if ( $temp != null ) {
        $path = pathinfo($temp);
        $tmp = $path['filename'] . "." . $path['extension'];
        $tn= str_replace(".php", "", $tmp);
        $classes[] = "template-".$tn;
    }
 
    return $classes;
 
}
 
add_filter('body_class', 'condensed_body_class');


function add_category_name($classes = '') {
   if(is_archive()) {
      $category = get_the_category();
      $classes[] = $category[0]->slug; 
   }
   return $classes;
}
add_filter('body_class','add_category_name');

// //Page Slug Body Class
// function add_slug_body_class( $classes ) {
// global $post;
// if ( isset( $post ) ) {
// $classes[] = $post->post_type . '-' . $post->post_name;
// $classes[] = $post->post_name;
// }
// return $classes;
// }
// add_filter( 'body_class', 'add_slug_body_class' );

// function wp_browser_body_class($classes) {
// global $is_lynx, $is_gecko, $is_IE, $is_opera, $is_NS4, $is_safari, $is_chrome, $is_iphone, $is_ipad;
// if($is_lynx) $classes[] = 'lynx';
// elseif($is_gecko) $classes[] = 'gecko';
// elseif($is_opera) $classes[] = 'opera';
// elseif($is_NS4) $classes[] = 'ns4';
// elseif($is_safari) $classes[] = 'safari';
// elseif($is_chrome) $classes[] = 'chrome';
// elseif($is_IE) {
// $classes[] = 'ie';
// if(preg_match('/MSIE ([0-9]+)([a-zA-Z0-9.]+)/', $_SERVER['HTTP_USER_AGENT'], $browser_version))
// $classes[] = 'ie'.$browser_version[1];
// } elseif (strpos($_SERVER['HTTP_USER_AGENT'], 'Trident/7.0; rv:11.0') !== -1) {
//             $classes[] = 'ie11';
//             $classes[] = 'ie';
// } else $classes[] = 'unknown';
// if($is_iphone) $classes[] = 'iphone';
// if($is_ipad) $classes[] = 'ipad';
// if (strstr($_SERVER['HTTP_USER_AGENT'], 'iPad')) {
//    $classes[] = 'ipad';
// }
// if ( stristr( $_SERVER['HTTP_USER_AGENT'],"mac") ) {
// $classes[] = 'osx';
// } elseif ( stristr( $_SERVER['HTTP_USER_AGENT'],"linux") ) {
// $classes[] = 'linux';
// } elseif ( stristr( $_SERVER['HTTP_USER_AGENT'],"windows") ) {
// $classes[] = 'windows';
// }
// return $classes;
// }
// add_filter('body_class','wp_browser_body_class');
// 
// /*  Browser detection body_class() output
// /* ------------------------------------ */ 
// function alx_browser_body_class( $classes ) {
//     global $is_lynx, $is_gecko, $is_IE, $is_opera, $is_NS4, $is_safari, $is_chrome, $is_iphone;
 
//     if($is_lynx) $classes[] = 'lynx';
//     elseif($is_gecko) $classes[] = 'gecko firefox';
//     elseif($is_opera) $classes[] = 'opera';
//     elseif($is_NS4) $classes[] = 'ns4';
//     elseif($is_safari) $classes[] = 'safari';
//     elseif($is_chrome) $classes[] = 'chrome';
//     elseif($is_IE) {
//         $browser = $_SERVER['HTTP_USER_AGENT'];
//         $browser = substr( "$browser", 25, 8);
//         if ($browser == "MSIE 7.0"  ) {
//             $classes[] = 'ie7';
//             $classes[] = 'ie';
//         } elseif ($browser == "MSIE 6.0" ) {
//             $classes[] = 'ie6';
//             $classes[] = 'ie';
//         } elseif ($browser == "MSIE 8.0" ) {
//             $classes[] = 'ie8';
//             $classes[] = 'ie';
//         } elseif ($browser == "MSIE 9.0" ) {
//             $classes[] = 'ie9';
//             $classes[] = 'ie';
//         } elseif ($browser == "MSIE 10.0" ) {
//             $classes[] = 'ie10';
//             $classes[] = 'ie';
//         } elseif (strpos($_SERVER['HTTP_USER_AGENT'], 'Trident/7.0; rv:11.0') !== false) {
//             $classes[] = 'ie11';
//             $classes[] = 'ie';
//         } else {
//             $classes[] = 'ie';
//         }
//     }
//     else $classes[] = 'unknown';
 
//     if( $is_iphone ) $classes[] = 'iphone';
 
//     return $classes;
// }
// add_filter( 'body_class', 'alx_browser_body_class' );


function filter_ptags_on_images($content){
   return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}

add_filter('the_content', 'filter_ptags_on_images');

remove_filter ('acf_the_content', 'wpautop');

function category_has_parent($catid){
    $category = get_category($catid);
    if ($category->category_parent > 0){
        return true;
    }
    return false;
}

add_filter( 'envira_gallery_output_image_attr', 'tgm_envira_no_retina_attr' );
function tgm_envira_no_retina_attr( $attr ) {

return $attr .= ' data-no-retina';

}

function is_desc_cat($cats, $_post = null) {
  foreach ((array)$cats as $cat) {
    if (in_category($cat, $_post)) {
      return true;
    } else {
      if (!is_int($cat)) $cat = get_cat_ID($cat);
      $descendants = get_term_children($cat, 'category');
      if ($descendants && in_category($descendants, $_post)) return true;
    }
  }

return false;
}

function modify_excerpt( $text ) {
  $text = preg_replace( '|\[(.+?)\](.+?\[/\\1\])?|s', '', $text);
  return $text;
}
add_filter( 'the_excerpt', 'modify_excerpt' );


/* DON'T DELETE THIS CLOSING TAG */ ?>
