/*
 * Bones Scripts File
 * Author: Eddie Machado/Joshua Michaels
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/

/* 
* Detect User Agent Script
* This is by far the best detection script I've found. 
* Using javascript means that this will work with caching. W00t.
* 
* Get it here: http://cssuseragent.org
* Adds user agent classes to html element including OS and browser version.
* With support for about every device imaginable so if you want to create
* styles for a symbian browser, do your thang.
*/

var cssua=function(n,l,p){var q=/\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,r=/([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,s=/\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,t=/\bsilk-accelerated=true\b/,u=/\bfluidapp\b/,v=/(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,w=/(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,
x=/(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,k={parse:function(b,d){var a={};d&&(a.standalone=d);b=(""+b).toLowerCase();if(!b)return a;for(var c,e,g=b.split(/[()]/),f=0,k=g.length;f<k;f++)if(f%2){var m=g[f].split(";");c=0;for(e=m.length;c<e;c++)if(q.exec(m[c])){var h=RegExp.$1.split(" ").join("_"),l=RegExp.$2;if(!a[h]||parseFloat(a[h])<parseFloat(l))a[h]=l}}else if(m=g[f].match(r))for(c=0,e=m.length;c<e;c++)h=m[c].split(/[\/\s]+/),h.length&&"mozilla"!==h[0]&&(a[h[0].split(" ").join("_")]=h.slice(1).join("-"));
w.exec(b)?(a.mobile=RegExp.$1,s.exec(b)&&(delete a[a.mobile],a.blackberry=a.version||RegExp.$3||RegExp.$2||RegExp.$1,RegExp.$1?a.mobile="blackberry":"0.0.1"===a.version&&(a.blackberry="7.1.0.0"))):v.exec(b)?a.desktop=RegExp.$1:x.exec(b)&&(a.game=RegExp.$1,c=a.game.split(" ").join("_"),a.version&&!a[c]&&(a[c]=a.version));a.intel_mac_os_x?(a.mac_os_x=a.intel_mac_os_x.split("_").join("."),delete a.intel_mac_os_x):a.cpu_iphone_os?(a.ios=a.cpu_iphone_os.split("_").join("."),delete a.cpu_iphone_os):a.cpu_os?
(a.ios=a.cpu_os.split("_").join("."),delete a.cpu_os):"iphone"!==a.mobile||a.ios||(a.ios="1");a.opera&&a.version?(a.opera=a.version,delete a.blackberry):t.exec(b)?a.silk_accelerated=!0:u.exec(b)&&(a.fluidapp=a.version);if(a.applewebkit)a.webkit=a.applewebkit,delete a.applewebkit,a.opr&&(a.opera=a.opr,delete a.opr,delete a.chrome),a.safari&&(a.chrome||a.crios||a.opera||a.silk||a.fluidapp||a.phantomjs||a.mobile&&!a.ios?delete a.safari:a.safari=a.version&&!a.rim_tablet_os?a.version:{419:"2.0.4",417:"2.0.3",
416:"2.0.2",412:"2.0",312:"1.3",125:"1.2",85:"1.0"}[parseInt(a.safari,10)]||a.safari);else if(a.msie||a.trident)if(a.opera||(a.ie=a.msie||a.rv),delete a.msie,a.windows_phone_os)a.windows_phone=a.windows_phone_os,delete a.windows_phone_os;else{if("wpdesktop"===a.mobile||"xblwp7"===a.mobile||"zunewp7"===a.mobile)a.mobile="windows desktop",a.windows_phone=9>+a.ie?"7.0":10>+a.ie?"7.5":"8.0",delete a.windows_nt}else if(a.gecko||a.firefox)a.gecko=a.rv;a.rv&&delete a.rv;a.version&&delete a.version;return a},
format:function(b){var d="",a;for(a in b)if(a&&b.hasOwnProperty(a)){var c=a,e=b[a],c=c.split(".").join("-"),g=" ua-"+c;if("string"===typeof e){for(var e=e.split(" ").join("_").split(".").join("-"),f=e.indexOf("-");0<f;)g+=" ua-"+c+"-"+e.substring(0,f),f=e.indexOf("-",f+1);g+=" ua-"+c+"-"+e}d+=g}return d},encode:function(b){var d="",a;for(a in b)a&&b.hasOwnProperty(a)&&(d&&(d+="\x26"),d+=encodeURIComponent(a)+"\x3d"+encodeURIComponent(b[a]));return d}};k.userAgent=k.ua=k.parse(l,p);l=k.format(k.ua)+
" js";n.className=n.className?n.className.replace(/\bno-js\b/g,"")+l:l.substr(1);return k}(document.documentElement,navigator.userAgent,navigator.standalone);


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y }
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
*/
function loadGravatars() {
  // set the viewport using the function above
  viewport = updateViewportDimensions();
  // if the viewport is tablet or larger, we load in the gravatars
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',$(this).attr('data-gravatar'));
  });
 
	}
} // end function

jQuery(document).ready(function($) {
    var resizeTimer,
        $window = $(window);

    function imageresize()
    {
        if ($window.width() < 900 && $window.width() > 767)
        {
            $('#logo img').addClass('swirl').attr('src', 'http://jockey.dev:8888/wp-content/themes/jockeyintl/library/images/jockey_swirl.png');
        }
        else
        {
            $('#logo img').removeClass('swirl').attr('src', 'http://jockey.dev:8888/wp-content/themes/jockeyintl/library/images/jockey_logo.png');
        }

        if($window.width() < 768 ) {
          $('.about-jockey #banner').css({
          'background-position' : '20% ' + (-scrollPos/2)+'px'
    });
        }
    }
    imageresize();//Triggers when document first loads

    $window.resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(imageresize, 100);
    });
 });  

/*
 * Put all your regular jQuery in here.
*/
jQuery(document).ready(function($) {

  /*
   * Let's fire off the gravatar function
   * You can remove this if you don't need it
  */
  // loadGravatars();
  
  /*
   * Collapsible header script
   * slightly different for mobile just below
  */
  var shrinkHeader = 69;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    // var img = $(".header-background > img");
      if ( scroll >= shrinkHeader ) {
         // $("body:not('.home') #content").css('margin-top', img.height());
           $('.header, .header-background').addClass('shrink');
           $('body').addClass('header-shrink');
           $('.breadcrumbs-outer').addClass('bc-sticky');
        }
        else {
            $('.header, .header-background').removeClass('shrink');
            $('body').removeClass('header-shrink');
            $('.breadcrumbs-outer').removeClass('bc-sticky');
        }
  });

  function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
  }

  if ( $('.ipad, .iphone').length > 0 ) {
      $('.header, .header-background').addClass('shrink-mobile');
      $('.breadcrumbs').addClass('bc-sticky');
  }

  if(navigator.userAgent.match(/iPhone/i)) {
    if(navigator.userAgent.match(/iPhone OS 4/i) || (/iPhone OS 5/i) ) {
        $('body').addClass('iphone4');
    }
    
}

// jQuery(document).ready(function($){
//   $('.category-philippines, .category-vietnam, .category-thailand, .category-south-africa').addClass('partners');
// });


function scrollBanner() {
  $(document).scroll(function(){
    var scrollPos = $(this).scrollTop();
    $('#banner-text').css({
      'top' : (scrollPos/3)+'px',
      'opacity' : 1-(scrollPos/259)
    });
    $('#banner').css({
      'background-position' : 'center ' + (-scrollPos/2)+'px'
    });

    $('.international-collection #banner, .international-collection-global-programs #banner').css({
      'background-position' : '0 ' + (-scrollPos/2)+'px'
    });

    $('.show-youre-jockey #banner').css({
      'background-position' : '90% ' + (-scrollPos/2)+'px'
    });

    $('.usa-originals-mens #banner').css({
      'background-position' : '10% ' + (-scrollPos/2)+'px'
    });

    $('.usa-originals-womens #banner').css({
      'background-position' : '25% ' + (-scrollPos/2)+'px'
    });

    $('.usa-originals-global-programs #banner').css({
      'background-position' : '85% ' + (-scrollPos/2)+'px'
    });

    $('.jockey-sport #banner').css({
      'background-position' : '94% ' + (-scrollPos/2)+'px'
    });

    $('.nplp #banner').css({
      'background-position' : '50% ' + '20%' + (-scrollPos/2)+'px'
    });

  });    
}
scrollBanner();



  /*
   * Nav menu hover functions
   * slightly different for mobile just below
  */

  // Add red to top-level menus when sub-menus are hovered on
  $('#menu-item-290 > ul.sub-menu').hover(function() {
      $('#menu-item-290 > a').toggleClass('jockey-red');
  });

  $('#menu-item-291 > ul.sub-menu').hover(function() {
      $('#menu-item-291 > a').toggleClass('jockey-red');
  });

  // Split Partner Pages sub-menu into two columns (and add red)
  // Add class to sub-menu
  $("#menu-item-6530 > ul.sub-menu").addClass("partner-ul");

  // Left Column
  $("#menu-item-6530 > ul li").slice(0, 10).wrapAll("<div class='partner-group columnleft'>").hover(function() {
      $('#menu-item-6530 > a').toggleClass('jockey-red');
  });

  // // Right column
  $("#menu-item-6530 > ul li").slice(10, 20).wrapAll("<div class='partner-group columnright'>").hover(function() {
      $('#menu-item-6530 > a').toggleClass('jockey-red');
  });

  $('<br />').insertAfter('.entry-content iframe');

  // $( window ).resize(function() {
  //   $('.header-bg').resize();
  // });
  
  // if (!$('body').hasClass('ie')) {
  //   $('.slider-link')attr.title = "";
// }
// 
  // $('#breadcrumbs a[href*="global-seasonal-fashion"]').attr('href', '#');
  // $('#breadcrumbs a[href*="global-programs"]').attr('href', '#');

  // Make Mediaelement.js videos responsive.
  $('video').css('width', '100%');
  $('video').css('height', '100%');



  $( 'iframe[src*="youtube"]' ).attr( 'src', function(index, value) {
  return value + '?wmode=transparent';
});

  $('.entry-content .wp-post-image').each(function() {
    $(this).attr('data-no-retina', '');
  });

  

}); /* end of as page load scripts */


  /*
   * Mobile nav menu hover fix 
   * since we can't hover on touch devices, let's make it clickable instead
  */

// Detect touch device
function is_touch_device() {
    return !!('ontouchstart' in window);
}

jQuery(document).ready(function($) { 
  
  /* If mobile browser, prevent click on parent nav item from redirecting to URL */
  if(is_touch_device()) { 

    // Clone top-level menu item(s) and place them as the first item of the sub menu.
    // $('#menu-main li#menu-item-290').clone().prependTo('li#menu-item-165 > ul.sub-menu').addClass('mobile-tl');
    // $('#menu-main li#menu-item-291').clone().prependTo('li#menu-item-19 > ul.sub-menu').addClass('mobile-tl');
    // $('#menu-main li#menu-item-22').clone().prependTo('li#menu-item-22 > ul.sub-menu').addClass('mobile-tl');

  //   $("#menu-item-22 > ul li").slice(0, 10).wrapAll("<div class='partner-group columnleft'>").hover(function() {
  //     $('#menu-item-22 > a').toggleClass('jockey-red');
  // });

  // // Right column
  // $("#menu-item-22 > ul li").slice(10, 20).wrapAll("<div class='partner-group columnright'>").hover(function() {
  //     $('#menu-item-22 > a').toggleClass('jockey-red');
  // });
    
    // Deactivate links for top-level menu items (2 options here - we're using #2 but both work)
    $('#menu-main li:not(.mobile-tl) > ul').each(function (index, elem) {
      /* Option 1: Use this to modify the href on the <a> to # */
      // $(elem).prev('a:first').attr('href' ,'#');

      
      /* OR Option 2: Use this to keep the href on the <a> intact but prevent the default action */

      $(elem).prev('a:first').click(function(event) {
          event.preventDefault();
      });
    });
  }
  
});

/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function(){function a(){}function b(a){return f.retinaImageSuffix+a}function c(a,c){if(this.path=a||"","undefined"!=typeof c&&null!==c)this.at_2x_path=c,this.perform_check=!1;else{if(void 0!==document.createElement){var d=document.createElement("a");d.href=this.path,d.pathname=d.pathname.replace(g,b),this.at_2x_path=d.href}else{var e=this.path.split("?");e[0]=e[0].replace(g,b),this.at_2x_path=e.join("?")}this.perform_check=!0}}function d(a){this.el=a,this.path=new c(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var b=this;this.path.check_2x_variant(function(a){a&&b.swap()})}var e="undefined"==typeof exports?window:exports,f={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};e.Retina=a,a.configure=function(a){null===a&&(a={});for(var b in a)a.hasOwnProperty(b)&&(f[b]=a[b])},a.init=function(a){null===a&&(a=e);var b=a.onload||function(){};a.onload=function(){var a,c,e=document.getElementsByTagName("img"),f=[];for(a=0;a<e.length;a+=1)c=e[a],c.getAttributeNode("data-no-retina")||f.push(new d(c));b()}},a.isRetina=function(){var a="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return e.devicePixelRatio>1?!0:e.matchMedia&&e.matchMedia(a).matches?!0:!1};var g=/\.\w+$/;e.RetinaImagePath=c,c.confirmed_paths=[],c.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},c.prototype.check_2x_variant=function(a){var b,d=this;return this.is_external()?a(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in c.confirmed_paths?a(!0):(b=new XMLHttpRequest,b.open("HEAD",this.at_2x_path),b.onreadystatechange=function(){if(4!==b.readyState)return a(!1);if(b.status>=200&&b.status<=399){if(f.check_mime_type){var e=b.getResponseHeader("Content-Type");if(null===e||!e.match(/^image/i))return a(!1)}return c.confirmed_paths.push(d.at_2x_path),a(!0)}return a(!1)},b.send(),void 0):a(!0)},e.RetinaImage=d,d.prototype.swap=function(a){function b(){c.el.complete?(f.force_original_dimensions&&(c.el.setAttribute("width",c.el.offsetWidth),c.el.setAttribute("height",c.el.offsetHeight)),c.el.setAttribute("src",a)):setTimeout(b,5)}"undefined"==typeof a&&(a=this.path.at_2x_path);var c=this;b()},a.isRetina()&&a.init(e)}();

/* Respond.js: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */
(function( w ){

  "use strict";

  //exposed namespace
  var respond = {};
  w.respond = respond;

  //define update even in native-mq-supporting browsers, to avoid errors
  respond.update = function(){};

  //define ajax obj
  var requestQueue = [],
    xmlHttp = (function() {
      var xmlhttpmethod = false;
      try {
        xmlhttpmethod = new w.XMLHttpRequest();
      }
      catch( e ){
        xmlhttpmethod = new w.ActiveXObject( "Microsoft.XMLHTTP" );
      }
      return function(){
        return xmlhttpmethod;
      };
    })(),

    //tweaked Ajax functions from Quirksmode
    ajax = function( url, callback ) {
      var req = xmlHttp();
      if (!req){
        return;
      }
      req.open( "GET", url, true );
      req.onreadystatechange = function () {
        if ( req.readyState !== 4 || req.status !== 200 && req.status !== 304 ){
          return;
        }
        callback( req.responseText );
      };
      if ( req.readyState === 4 ){
        return;
      }
      req.send( null );
    },
    isUnsupportedMediaQuery = function( query ) {
      return query.replace( respond.regex.minmaxwh, '' ).match( respond.regex.other );
    };

  //expose for testing
  respond.ajax = ajax;
  respond.queue = requestQueue;
  respond.unsupportedmq = isUnsupportedMediaQuery;
  respond.regex = {
    media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
    keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
    comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
    urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
    findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
    only: /(only\s+)?([a-zA-Z]+)\s?/,
    minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
    maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
    minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
    other: /\([^\)]*\)/g
  };

  //expose media query support flag for external use
  respond.mediaQueriesSupported = w.matchMedia && w.matchMedia( "only all" ) !== null && w.matchMedia( "only all" ).matches;

  //if media queries are supported, exit here
  if( respond.mediaQueriesSupported ){
    return;
  }

  //define vars
  var doc = w.document,
    docElem = doc.documentElement,
    mediastyles = [],
    rules = [],
    appendedEls = [],
    parsedSheets = {},
    resizeThrottle = 30,
    head = doc.getElementsByTagName( "head" )[0] || docElem,
    base = doc.getElementsByTagName( "base" )[0],
    links = head.getElementsByTagName( "link" ),

    lastCall,
    resizeDefer,

    //cached container for 1em value, populated the first time it's needed
    eminpx,

    // returns the value of 1em in pixels
    getEmValue = function() {
      var ret,
        div = doc.createElement('div'),
        body = doc.body,
        originalHTMLFontSize = docElem.style.fontSize,
        originalBodyFontSize = body && body.style.fontSize,
        fakeUsed = false;

      div.style.cssText = "position:absolute;font-size:1em;width:1em";

      if( !body ){
        body = fakeUsed = doc.createElement( "body" );
        body.style.background = "none";
      }

      // 1em in a media query is the value of the default font size of the browser
      // reset docElem and body to ensure the correct value is returned
      docElem.style.fontSize = "100%";
      body.style.fontSize = "100%";

      body.appendChild( div );

      if( fakeUsed ){
        docElem.insertBefore( body, docElem.firstChild );
      }

      ret = div.offsetWidth;

      if( fakeUsed ){
        docElem.removeChild( body );
      }
      else {
        body.removeChild( div );
      }

      // restore the original values
      docElem.style.fontSize = originalHTMLFontSize;
      if( originalBodyFontSize ) {
        body.style.fontSize = originalBodyFontSize;
      }


      //also update eminpx before returning
      ret = eminpx = parseFloat(ret);

      return ret;
    },

    //enable/disable styles
    applyMedia = function( fromResize ){
      var name = "clientWidth",
        docElemProp = docElem[ name ],
        currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[ name ] || docElemProp,
        styleBlocks = {},
        lastLink = links[ links.length-1 ],
        now = (new Date()).getTime();

      //throttle resize calls
      if( fromResize && lastCall && now - lastCall < resizeThrottle ){
        w.clearTimeout( resizeDefer );
        resizeDefer = w.setTimeout( applyMedia, resizeThrottle );
        return;
      }
      else {
        lastCall = now;
      }

      for( var i in mediastyles ){
        if( mediastyles.hasOwnProperty( i ) ){
          var thisstyle = mediastyles[ i ],
            min = thisstyle.minw,
            max = thisstyle.maxw,
            minnull = min === null,
            maxnull = max === null,
            em = "em";

          if( !!min ){
            min = parseFloat( min ) * ( min.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
          }
          if( !!max ){
            max = parseFloat( max ) * ( max.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
          }

          // if there's no media query at all (the () part), or min or max is not null, and if either is present, they're true
          if( !thisstyle.hasquery || ( !minnull || !maxnull ) && ( minnull || currWidth >= min ) && ( maxnull || currWidth <= max ) ){
            if( !styleBlocks[ thisstyle.media ] ){
              styleBlocks[ thisstyle.media ] = [];
            }
            styleBlocks[ thisstyle.media ].push( rules[ thisstyle.rules ] );
          }
        }
      }

      //remove any existing respond style element(s)
      for( var j in appendedEls ){
        if( appendedEls.hasOwnProperty( j ) ){
          if( appendedEls[ j ] && appendedEls[ j ].parentNode === head ){
            head.removeChild( appendedEls[ j ] );
          }
        }
      }
      appendedEls.length = 0;

      //inject active styles, grouped by media type
      for( var k in styleBlocks ){
        if( styleBlocks.hasOwnProperty( k ) ){
          var ss = doc.createElement( "style" ),
            css = styleBlocks[ k ].join( "\n" );

          ss.type = "text/css";
          ss.media = k;

          //originally, ss was appended to a documentFragment and sheets were appended in bulk.
          //this caused crashes in IE in a number of circumstances, such as when the HTML element had a bg image set, so appending beforehand seems best. Thanks to @dvelyk for the initial research on this one!
          head.insertBefore( ss, lastLink.nextSibling );

          if ( ss.styleSheet ){
            ss.styleSheet.cssText = css;
          }
          else {
            ss.appendChild( doc.createTextNode( css ) );
          }

          //push to appendedEls to track for later removal
          appendedEls.push( ss );
        }
      }
    },
    //find media blocks in css text, convert to style blocks
    translate = function( styles, href, media ){
      var qs = styles.replace( respond.regex.comments, '' )
          .replace( respond.regex.keyframes, '' )
          .match( respond.regex.media ),
        ql = qs && qs.length || 0;

      //try to get CSS path
      href = href.substring( 0, href.lastIndexOf( "/" ) );

      var repUrls = function( css ){
          return css.replace( respond.regex.urls, "$1" + href + "$2$3" );
        },
        useMedia = !ql && media;

      //if path exists, tack on trailing slash
      if( href.length ){ href += "/"; }

      //if no internal queries exist, but media attr does, use that
      //note: this currently lacks support for situations where a media attr is specified on a link AND
        //its associated stylesheet has internal CSS media queries.
        //In those cases, the media attribute will currently be ignored.
      if( useMedia ){
        ql = 1;
      }

      for( var i = 0; i < ql; i++ ){
        var fullq, thisq, eachq, eql;

        //media attr
        if( useMedia ){
          fullq = media;
          rules.push( repUrls( styles ) );
        }
        //parse for styles
        else{
          fullq = qs[ i ].match( respond.regex.findStyles ) && RegExp.$1;
          rules.push( RegExp.$2 && repUrls( RegExp.$2 ) );
        }

        eachq = fullq.split( "," );
        eql = eachq.length;

        for( var j = 0; j < eql; j++ ){
          thisq = eachq[ j ];

          if( isUnsupportedMediaQuery( thisq ) ) {
            continue;
          }

          mediastyles.push( {
            media : thisq.split( "(" )[ 0 ].match( respond.regex.only ) && RegExp.$2 || "all",
            rules : rules.length - 1,
            hasquery : thisq.indexOf("(") > -1,
            minw : thisq.match( respond.regex.minw ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" ),
            maxw : thisq.match( respond.regex.maxw ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" )
          } );
        }
      }

      applyMedia();
    },

    //recurse through request queue, get css text
    makeRequests = function(){
      if( requestQueue.length ){
        var thisRequest = requestQueue.shift();

        ajax( thisRequest.href, function( styles ){
          translate( styles, thisRequest.href, thisRequest.media );
          parsedSheets[ thisRequest.href ] = true;

          // by wrapping recursive function call in setTimeout
          // we prevent "Stack overflow" error in IE7
          w.setTimeout(function(){ makeRequests(); },0);
        } );
      }
    },

    //loop stylesheets, send text content to translate
    ripCSS = function(){

      for( var i = 0; i < links.length; i++ ){
        var sheet = links[ i ],
        href = sheet.href,
        media = sheet.media,
        isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";

        //only links plz and prevent re-parsing
        if( !!href && isCSS && !parsedSheets[ href ] ){
          // selectivizr exposes css through the rawCssText expando
          if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
            translate( sheet.styleSheet.rawCssText, href, media );
            parsedSheets[ href ] = true;
          } else {
            if( (!/^([a-zA-Z:]*\/\/)/.test( href ) && !base) ||
              href.replace( RegExp.$1, "" ).split( "/" )[0] === w.location.host ){
              // IE7 doesn't handle urls that start with '//' for ajax request
              // manually add in the protocol
              if ( href.substring(0,2) === "//" ) { href = w.location.protocol + href; }
              requestQueue.push( {
                href: href,
                media: media
              } );
            }
          }
        }
      }
      makeRequests();
    };

  //translate CSS
  ripCSS();

  //expose update for re-running respond later on
  respond.update = ripCSS;

  //expose getEmValue
  respond.getEmValue = getEmValue;

  //adjust on resize
  function callMedia(){
    applyMedia( true );
  }

  if( w.addEventListener ){
    w.addEventListener( "resize", callMedia, false );
  }
  else if( w.attachEvent ){
    w.attachEvent( "onresize", callMedia );
  }
})(this);

/*
selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms 
of the MIT license.

selectivizr.com
*/
/* 
  
Notes about this source
-----------------------

 * The #DEBUG_START and #DEBUG_END comments are used to mark blocks of code
   that will be removed prior to building a final release version (using a
   pre-compression script)
  
  
References:
-----------
 
 * CSS Syntax          : http://www.w3.org/TR/2003/WD-css3-syntax-20030813/#style
 * Selectors           : http://www.w3.org/TR/css3-selectors/#selectors
 * IE Compatability    : http://msdn.microsoft.com/en-us/library/cc351024(VS.85).aspx
 * W3C Selector Tests  : http://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/html/tests/
 
*/

(function(win) {

  // If browser isn't IE, then stop execution! This handles the script 
  // being loaded by non IE browsers because the developer didn't use 
  // conditional comments.
  if (/*@cc_on!@*/true) return;

  // =========================== Init Objects ============================

  var doc = document;
  var root = doc.documentElement;
  var xhr = getXHRObject();
  var ieVersion = /MSIE (\d+)/.exec(navigator.userAgent)[1];
  
  // If were not in standards mode, IE is too old / new or we can't create
  // an XMLHttpRequest object then we should get out now.
  if (doc.compatMode != 'CSS1Compat' || ieVersion<6 || ieVersion>8 || !xhr) {
    return;
  }
  
  
  // ========================= Common Objects ============================

  // Compatiable selector engines in order of CSS3 support. Note: '*' is
  // a placholder for the object key name. (basically, crude compression)
  var selectorEngines = {
    "NW"                : "*.Dom.select",
    "MooTools"              : "$$",
    "DOMAssistant"            : "*.$", 
    "Prototype"             : "$$",
    "YAHOO"               : "*.util.Selector.query",
    "Sizzle"              : "*", 
    "jQuery"              : "*",
    "dojo"                : "*.query"
  };

  var selectorMethod;
  var enabledWatchers           = [];     // array of :enabled/:disabled elements to poll
  var ie6PatchID              = 0;      // used to solve ie6's multiple class bug
  var patchIE6MultipleClasses       = true;   // if true adds class bloat to ie6
  var namespace               = "slvzr";
  
  // Stylesheet parsing regexp's
  var RE_COMMENT              = /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g;
  var RE_IMPORT             = /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g;
  var RE_ASSET_URL            = /\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g;
  var RE_PSEUDO_STRUCTURAL        = /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;
  var RE_PSEUDO_ELEMENTS          = /:(:first-(?:line|letter))/g;
  var RE_SELECTOR_GROUP         = /(^|})\s*([^\{]*?[\[:][^{]+)/g;
  var RE_SELECTOR_PARSE         = /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g; 
  var RE_LIBRARY_INCOMPATIBLE_PSEUDOS   = /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;
  var RE_PATCH_CLASS_NAME_REPLACE     = /[^\w-]/g;
  
  // HTML UI element regexp's
  var RE_INPUT_ELEMENTS         = /^(INPUT|SELECT|TEXTAREA|BUTTON)$/;
  var RE_INPUT_CHECKABLE_TYPES      = /^(checkbox|radio)$/;

  // Broken attribute selector implementations (IE7/8 native [^=""], [$=""] and [*=""])
  var BROKEN_ATTR_IMPLEMENTATIONS     = ieVersion>6 ? /[\$\^*]=(['"])\1/ : null;

  // Whitespace normalization regexp's
  var RE_TIDY_TRAILING_WHITESPACE     = /([(\[+~])\s+/g;
  var RE_TIDY_LEADING_WHITESPACE      = /\s+([)\]+~])/g;
  var RE_TIDY_CONSECUTIVE_WHITESPACE    = /\s+/g;
  var RE_TIDY_TRIM_WHITESPACE       = /^\s*((?:[\S\s]*\S)?)\s*$/;
  
  // String constants
  var EMPTY_STRING            = "";
  var SPACE_STRING            = " ";
  var PLACEHOLDER_STRING          = "$1";

  // =========================== Patching ================================

  // --[ patchStyleSheet() ]----------------------------------------------
  // Scans the passed cssText for selectors that require emulation and
  // creates one or more patches for each matched selector.
  function patchStyleSheet( cssText ) {
    return cssText.replace(RE_PSEUDO_ELEMENTS, PLACEHOLDER_STRING).
      replace(RE_SELECTOR_GROUP, function(m, prefix, selectorText) {  
          var selectorGroups = selectorText.split(",");
          for (var c = 0, cs = selectorGroups.length; c < cs; c++) {
            var selector = normalizeSelectorWhitespace(selectorGroups[c]) + SPACE_STRING;
            var patches = [];
            selectorGroups[c] = selector.replace(RE_SELECTOR_PARSE, 
              function(match, combinator, pseudo, attribute, index) {
                if (combinator) {
                  if (patches.length>0) {
                    applyPatches( selector.substring(0, index), patches );
                    patches = [];
                  }
                  return combinator;
                }   
                else {
                  var patch = (pseudo) ? patchPseudoClass( pseudo ) : patchAttribute( attribute );
                  if (patch) {
                    patches.push(patch);
                    return "." + patch.className;
                  }
                  return match;
                }
              }
            );
          }
          return prefix + selectorGroups.join(",");
        });
  };

  // --[ patchAttribute() ]-----------------------------------------------
  // returns a patch for an attribute selector.
  function patchAttribute( attr ) {
    return (!BROKEN_ATTR_IMPLEMENTATIONS || BROKEN_ATTR_IMPLEMENTATIONS.test(attr)) ? 
      { className: createClassName(attr), applyClass: true } : null;
  };

  // --[ patchPseudoClass() ]---------------------------------------------
  // returns a patch for a pseudo-class
  function patchPseudoClass( pseudo ) {

    var applyClass = true;
    var className = createClassName(pseudo.slice(1));
    var isNegated = pseudo.substring(0, 5) == ":not(";
    var activateEventName;
    var deactivateEventName;

    // if negated, remove :not() 
    if (isNegated) {
      pseudo = pseudo.slice(5, -1);
    }
    
    // bracket contents are irrelevant - remove them
    var bracketIndex = pseudo.indexOf("(")
    if (bracketIndex > -1) {
      pseudo = pseudo.substring(0, bracketIndex);
    }   
    
    // check we're still dealing with a pseudo-class
    if (pseudo.charAt(0) == ":") {
      switch (pseudo.slice(1)) {

        case "root":
          applyClass = function(e) {
            return isNegated ? e != root : e == root;
          }
          break;

        case "target":
          // :target is only supported in IE8
          if (ieVersion == 8) {
            applyClass = function(e) {
              var handler = function() { 
                var hash = location.hash;
                var hashID = hash.slice(1);
                return isNegated ? (hash == EMPTY_STRING || e.id != hashID) : (hash != EMPTY_STRING && e.id == hashID);
              };
              addEvent( win, "hashchange", function() {
                toggleElementClass(e, className, handler());
              })
              return handler();
            }
            break;
          }
          return false;
        
        case "checked":
          applyClass = function(e) { 
            if (RE_INPUT_CHECKABLE_TYPES.test(e.type)) {
              addEvent( e, "propertychange", function() {
                if (event.propertyName == "checked") {
                  toggleElementClass( e, className, e.checked !== isNegated );
                }               
              })
            }
            return e.checked !== isNegated;
          }
          break;
          
        case "disabled":
          isNegated = !isNegated;

        case "enabled":
          applyClass = function(e) { 
            if (RE_INPUT_ELEMENTS.test(e.tagName)) {
              addEvent( e, "propertychange", function() {
                if (event.propertyName == "$disabled") {
                  toggleElementClass( e, className, e.$disabled === isNegated );
                } 
              });
              enabledWatchers.push(e);
              e.$disabled = e.disabled;
              return e.disabled === isNegated;
            }
            return pseudo == ":enabled" ? isNegated : !isNegated;
          }
          break;
          
        case "focus":
          activateEventName = "focus";
          deactivateEventName = "blur";
                
        case "hover":
          if (!activateEventName) {
            activateEventName = "mouseenter";
            deactivateEventName = "mouseleave";
          }
          applyClass = function(e) {
            addEvent( e, isNegated ? deactivateEventName : activateEventName, function() {
              toggleElementClass( e, className, true );
            })
            addEvent( e, isNegated ? activateEventName : deactivateEventName, function() {
              toggleElementClass( e, className, false );
            })
            return isNegated;
          }
          break;
          
        // everything else
        default:
          // If we don't support this pseudo-class don't create 
          // a patch for it
          if (!RE_PSEUDO_STRUCTURAL.test(pseudo)) {
            return false;
          }
          break;
      }
    }
    return { className: className, applyClass: applyClass };
  };

  // --[ applyPatches() ]-------------------------------------------------
  // uses the passed selector text to find DOM nodes and patch them 
  function applyPatches(selectorText, patches) {
    var elms;
    
    // Although some selector libraries can find :checked :enabled etc. 
    // we need to find all elements that could have that state because 
    // it can be changed by the user.
    var domSelectorText = selectorText.replace(RE_LIBRARY_INCOMPATIBLE_PSEUDOS, EMPTY_STRING);
    
    // If the dom selector equates to an empty string or ends with 
    // whitespace then we need to append a universal selector (*) to it.
    if (domSelectorText == EMPTY_STRING || domSelectorText.charAt(domSelectorText.length - 1) == SPACE_STRING) {
      domSelectorText += "*";
    }
    
    // Ensure we catch errors from the selector library
    try {
      elms = selectorMethod( domSelectorText );
    } catch (ex) {
      // #DEBUG_START
      log( "Selector '" + selectorText + "' threw exception '" + ex + "'" );
      // #DEBUG_END
    }


    if (elms) {
      for (var d = 0, dl = elms.length; d < dl; d++) {  
        var elm = elms[d];
        var cssClasses = elm.className;
        for (var f = 0, fl = patches.length; f < fl; f++) {
          var patch = patches[f];
          
          if (!hasPatch(elm, patch)) {
            if (patch.applyClass && (patch.applyClass === true || patch.applyClass(elm) === true)) {
              cssClasses = toggleClass(cssClasses, patch.className, true );
            }
          }
        }
        elm.className = cssClasses;
      }
    }
  };

  // --[ hasPatch() ]-----------------------------------------------------
  // checks for the exsistence of a patch on an element
  function hasPatch( elm, patch ) {
    return new RegExp("(^|\\s)" + patch.className + "(\\s|$)").test(elm.className);
  };
  
  
  // =========================== Utility =================================
  
  function createClassName( className ) {
    return namespace + "-" + ((ieVersion == 6 && patchIE6MultipleClasses) ?
      ie6PatchID++
    :
      className.replace(RE_PATCH_CLASS_NAME_REPLACE, function(a) { return a.charCodeAt(0) }));
  };

  // --[ log() ]----------------------------------------------------------
  // #DEBUG_START
  function log( message ) {
    if (win.console) {
      win.console.log(message);
    }
  };
  // #DEBUG_END

  // --[ trim() ]---------------------------------------------------------
  // removes leading, trailing whitespace from a string
  function trim( text ) {
    return text.replace(RE_TIDY_TRIM_WHITESPACE, PLACEHOLDER_STRING);
  };

  // --[ normalizeWhitespace() ]------------------------------------------
  // removes leading, trailing and consecutive whitespace from a string
  function normalizeWhitespace( text ) {
    return trim(text).replace(RE_TIDY_CONSECUTIVE_WHITESPACE, SPACE_STRING);
  };

  // --[ normalizeSelectorWhitespace() ]----------------------------------
  // tidies whitespace around selector brackets and combinators
  function normalizeSelectorWhitespace( selectorText ) {
    return normalizeWhitespace(selectorText.
      replace(RE_TIDY_TRAILING_WHITESPACE, PLACEHOLDER_STRING).
      replace(RE_TIDY_LEADING_WHITESPACE, PLACEHOLDER_STRING)
    );
  };

  // --[ toggleElementClass() ]-------------------------------------------
  // toggles a single className on an element
  function toggleElementClass( elm, className, on ) {
    var oldClassName = elm.className;
    var newClassName = toggleClass(oldClassName, className, on);
    if (newClassName != oldClassName) {
      elm.className = newClassName;
      elm.parentNode.className += EMPTY_STRING;
    }
  };

  // --[ toggleClass() ]--------------------------------------------------
  // adds / removes a className from a string of classNames. Used to 
  // manage multiple class changes without forcing a DOM redraw
  function toggleClass( classList, className, on ) {
    var re = RegExp("(^|\\s)" + className + "(\\s|$)");
    var classExists = re.test(classList);
    if (on) {
      return classExists ? classList : classList + SPACE_STRING + className;
    } else {
      return classExists ? trim(classList.replace(re, PLACEHOLDER_STRING)) : classList;
    }
  };
  
  // --[ addEvent() ]-----------------------------------------------------
  function addEvent(elm, eventName, eventHandler) {
    elm.attachEvent("on" + eventName, eventHandler);
  };

  // --[ getXHRObject() ]-------------------------------------------------
  function getXHRObject()
  {
    if (win.XMLHttpRequest) {
      return new XMLHttpRequest;
    }
    try { 
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) { 
      return null;
    }
  };

  // --[ loadStyleSheet() ]-----------------------------------------------
  function loadStyleSheet( url ) {
    xhr.open("GET", url, false);
    xhr.send();
    return (xhr.status==200) ? xhr.responseText : EMPTY_STRING; 
  };
  
  // --[ resolveUrl() ]---------------------------------------------------
  // Converts a URL fragment to a fully qualified URL using the specified
  // context URL. Returns null if same-origin policy is broken
  function resolveUrl( url, contextUrl ) {
  
    function getProtocolAndHost( url ) {
      return url.substring(0, url.indexOf("/", 8));
    };
    
    // absolute path
    if (/^https?:\/\//i.test(url)) {
      return getProtocolAndHost(contextUrl) == getProtocolAndHost(url) ? url : null;
    }
    
    // root-relative path
    if (url.charAt(0)=="/") {
      return getProtocolAndHost(contextUrl) + url;
    }

    // relative path
    var contextUrlPath = contextUrl.split(/[?#]/)[0]; // ignore query string in the contextUrl  
    if (url.charAt(0) != "?" && contextUrlPath.charAt(contextUrlPath.length - 1) != "/") {
      contextUrlPath = contextUrlPath.substring(0, contextUrlPath.lastIndexOf("/") + 1);
    }
    
    return contextUrlPath + url;
  };
  
  // --[ parseStyleSheet() ]----------------------------------------------
  // Downloads the stylesheet specified by the URL, removes it's comments
  // and recursivly replaces @import rules with their contents, ultimately
  // returning the full cssText.
  function parseStyleSheet( url ) {
    if (url) {
      return loadStyleSheet(url).replace(RE_COMMENT, EMPTY_STRING).
      replace(RE_IMPORT, function( match, quoteChar, importUrl, quoteChar2, importUrl2 ) { 
        return parseStyleSheet(resolveUrl(importUrl || importUrl2, url));
      }).
      replace(RE_ASSET_URL, function( match, quoteChar, assetUrl ) { 
        quoteChar = quoteChar || EMPTY_STRING;
        return " url(" + quoteChar + resolveUrl(assetUrl, url) + quoteChar + ") "; 
      });
    }
    return EMPTY_STRING;
  };
  
  // --[ init() ]---------------------------------------------------------
  function init() {
    // honour the <base> tag
    var url, stylesheet;
    var baseTags = doc.getElementsByTagName("BASE");
    var baseUrl = (baseTags.length > 0) ? baseTags[0].href : doc.location.href;
    
    /* Note: This code prevents IE from freezing / crashing when using 
    @font-face .eot files but it modifies the <head> tag and could
    trigger the IE stylesheet limit. It will also cause FOUC issues.
    If you choose to use it, make sure you comment out the for loop 
    directly below this comment.

    var head = doc.getElementsByTagName("head")[0];
    for (var c=doc.styleSheets.length-1; c>=0; c--) {
      stylesheet = doc.styleSheets[c]
      head.appendChild(doc.createElement("style"))
      var patchedStylesheet = doc.styleSheets[doc.styleSheets.length-1];
      
      if (stylesheet.href != EMPTY_STRING) {
        url = resolveUrl(stylesheet.href, baseUrl)
        if (url) {
          patchedStylesheet.cssText = patchStyleSheet( parseStyleSheet( url ) )
          stylesheet.disabled = true
          setTimeout( function () {
            stylesheet.owningElement.parentNode.removeChild(stylesheet.owningElement)
          })
        }
      }
    }
    */
    
    for (var c = 0; c < doc.styleSheets.length; c++) {
      stylesheet = doc.styleSheets[c]
      if (stylesheet.href != EMPTY_STRING) {
        url = resolveUrl(stylesheet.href, baseUrl);
        if (url) {
          stylesheet.cssText = patchStyleSheet( parseStyleSheet( url ) );
        }
      }
    }
    
    // :enabled & :disabled polling script (since we can't hook 
    // onpropertychange event when an element is disabled) 
    if (enabledWatchers.length > 0) {
      setInterval( function() {
        for (var c = 0, cl = enabledWatchers.length; c < cl; c++) {
          var e = enabledWatchers[c];
          if (e.disabled !== e.$disabled) {
            if (e.disabled) {
              e.disabled = false;
              e.$disabled = true;
              e.disabled = true;
            }
            else {
              e.$disabled = e.disabled;
            }
          }
        }
      },250)
    }
  };
  
  // Bind selectivizr to the ContentLoaded event. 
  ContentLoaded(win, function() {
    // Determine the "best fit" selector engine
    for (var engine in selectorEngines) {
      var members, member, context = win;
      if (win[engine]) {
        members = selectorEngines[engine].replace("*", engine).split(".");
        while ((member = members.shift()) && (context = context[member])) {}
        if (typeof context == "function") {
          selectorMethod = context;
          init();
          return;
        }
      }
    }
  });
  
  
  /*!
   * ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   *
   */

  // @w window reference
  // @f function reference
  function ContentLoaded(win, fn) {

    var done = false, top = true,
    init = function(e) {
      if (e.type == "readystatechange" && doc.readyState != "complete") return;
      (e.type == "load" ? win : doc).detachEvent("on" + e.type, init, false);
      if (!done && (done = true)) fn.call(win, e.type || e);
    },
    poll = function() {
      try { root.doScroll("left"); } catch(e) { setTimeout(poll, 50); return; }
      init('poll');
    };

    if (doc.readyState == "complete") fn.call(win, EMPTY_STRING);
    else {
      if (doc.createEventObject && root.doScroll) {
        try { top = !win.frameElement; } catch(e) { }
        if (top) poll();
      }
      addEvent(doc,"readystatechange", init);
      addEvent(win,"load", init);
    }
  }
})(this);

/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

// ;(function($){$.fn.unveil=function(threshold,callback){var $w=$(window),th=threshold||0,retina=window.devicePixelRatio>1,attrib=retina?"data-src-retina":"data-src",images=this,loaded;this.one("unveil",function(){var source=this.getAttribute(attrib);source=source||this.getAttribute("data-src");if(source){this.setAttribute("src",source);if(typeof callback==="function")callback.call(this);}});function unveil(){var inview=images.filter(function(){var $e=$(this),wt=$w.scrollTop(),wb=wt+$w.height(),et=$e.offset().top,eb=et+$e.height();return eb>=wt-th&&et<=wb+th;});loaded=inview.trigger("unveil");images=images.not(loaded);}$w.scroll(unveil);$w.resize(unveil);unveil();return this;};})(window.jQuery||window.Zepto);


/*
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
// (function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);