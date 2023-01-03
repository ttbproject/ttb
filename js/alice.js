// HTML document is loaded
jQuery(window).on("load", function(){     
 "use strict";

  // var preloader
  var loader = jQuery('.preloader');
  var bgpreloader = jQuery('.bg-preloader');
  
  var menumobile = $('#main-menu');

  //contactform var
  var contactname = jQuery('#name-contact');
  var contactemail = jQuery('#email-contact, input#email-contact');
  var contactmessage = jQuery('#message-contact');
  var contactsent = jQuery('#send-contact');
  
  //form failed succes var
  var successent = jQuery("#mail_success");
  var failedsent = jQuery("#mail_failed");

  //slidertext var
  var slidtext = jQuery('#slidertext');


// start function
loader.fadeOut('slow', function() {	
 "use strict";

 // opening slideup
 bgpreloader.fadeOut(1500);

 // animated transition & scroll onStep
 onStep();
 
 // stick navbar
 navdefault.sticky(); 
 
 // auto height
 $('.box').matchHeight();

 // mobile icon
    $(".navbar-toggle").on("click", function() {
      menumobile.toggleClass('menu-show');
      navdefault.toggleClass('fullHeight');
    });
  
});
// end function

// contact form
jQuery(function() {
    contactsent.on('click', function(e) {
        e.preventDefault();
        var e = contactname.val(),
            a = contactemail.val(),
            s = contactmessage.val(),
            r = !1;
        if (0 == a.length || "-1" == a.indexOf("@") || "-1" == a.indexOf(".")) {
            var r = !0;
          contactemail.css({"border-color": "#f7d204", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else  contactemail.css({"border-top": "none", 
             "border-left":"none", 
			 "border-bottom":"1px solid #333",
             "border-right":"none"});
		if (0 == e.length) {
            var r = !0;
             contactname.css({"border-color": "#f7d204", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else contactname.css({"border-top": "none", 
             "border-left":"none",
			 "border-bottom":"1px solid #333",
             "border-right":"none"});
        if (0 == s.length) {
            var r = !0;
            contactmessage.css({"border-color": "#f7d204", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else  contactmessage.css({"border-top": "none", 
             "border-left":"none",
			 "border-bottom":"1px solid #333",
             "border-right":"none"});
        return 0 == r && (contactsent.attr({
            disabled: "true",
            value: "Sending..."
        }), jQuery.ajax({
            type: "POST",
            url: "send.php",
            data: "name=" + e + "&email=" + a + "&subject=You Got Email&message=" + s,
            success: function(e) {
                "success" == e ? ( successent.fadeIn(500)) : (failedsent.html(e).fadeIn(500), contactsent.removeAttr("disabled").attr("value", "send").remove())
            }
        })), !1
    })
});


        // reservation form
        var sentbook = jQuery( '#send' );
        var selectarea = jQuery( '#selectarea, select#selectarea' );
        var phonebook = jQuery( '#phonebook' );
        var namebook = jQuery( '#namebook' );
        var emailbook = jQuery( '#emailbook, input#emailbook' );
        var messagebook = jQuery( '#messagebook' );
        jQuery( function() {
            sentbook.on( 'click', function( e ) {
                e.preventDefault();
                var sr = selectarea.val(),
                    ph = phonebook.val(),
                    e = namebook.val(),
                    a = emailbook.val(),
                    s = messagebook.val(),
                    r = !1;
                if ( 0 == a.length || "-1" == a.indexOf( "@" ) || "-1" == a.indexOf( "." ) ) {
                    var r = !0;
                    emailbook.css({"border-top": "none", 
             "border-left":"none", 
			 "border-bottom":"1px solid #ff0000",
             "border-right":"none"});
                } else emailbook.css({"border-top": "none", 
             "border-left":"none", 
			 "border-bottom":"1px solid #f7d204",
             "border-right":"none"});
                if ( 0 == ph.length ) {
                    var r = !0;
                    phonebook.css({"border-top": "none", 
             "border-left":"none", 
			 "border-bottom":"1px solid #ff0000",
             "border-right":"none"});
                } else phonebook.css({"border-top": "none", 
             "border-left":"none", 
			 "border-bottom":"1px solid #f7d204",
             "border-right":"none"});
                if ( 0 == e.length ) {
                    var r = !0;
                    namebook.css({"border-top": "none", 
             "border-left":"none", 
			 "border-bottom":"1px solid #ff0000",
             "border-right":"none"});
                } else namebook.css({"border-top": "none", 
             "border-left":"none", 
			 "border-bottom":"1px solid #f7d204",
             "border-right":"none"});
                if ( 0 == s.length ) {
                    var r = !0;
                    messagebook.css({"border-top": "none", 
             "border-left":"none", 
			 "border-bottom":"1px solid #ff0000",
             "border-right":"none"});
                } else messagebook.css({"border-top": "none", 
             "border-left":"none", 
			 "border-bottom":"1px solid #f7d204",
             "border-right":"none"});
                return 0 == r && ( sentbook.attr( {
                    disabled: "true",
                    value: "Sending..."
                } ), jQuery.ajax( {
                    type: "POST",
                    url: "book.php",
                    data: "&selectarea=" + sr + "&phonebook=" + ph + "&name=" + e + "&email=" + a + "&subject=You Got Reservation&message=" + s,
                    success: function( e ) {
                        "success" == e ? ( successent.fadeIn( 500 ) ) : ( failedsent.html( e )
                            .fadeIn( 500 ), sentbook.removeAttr( "disabled" )
                            .attr( "value", "send" )
                            .remove() )
                    }
                } ) ), !1
            } )
        } );


// countDown
 jQuery(function () {
            jQuery('#defaultCountdown').countdown({until: new Date(2018, 8-1, 1, 8)}); // year, month, date, hour
        });


//slideshow text home
jQuery(function() {
    var slideBegin = 3000,
        transSpeed = 500,
        simple_slideshow = slidtext,
        listItems = simple_slideshow.children('.main-text'),
        listLen = listItems.length,
        i = 0,
        changeList = function() {
            listItems.eq(i).fadeOut(transSpeed, function() {
                i += 1, i === listLen && (i = 0), listItems.eq(i).fadeIn(transSpeed)
            })
        };
    listItems.not(':first').hide(), setInterval(changeList, slideBegin);
});

        // projects
        var $containerpro = jQuery( '#projects-wrap' );
        $containerpro.isotope( {
            itemSelector: '.item',
            filter: '*'
        } );
        jQuery( '.filt-projects' )
            .on( 'click', function( e ) {
                e.preventDefault();
                var $this = jQuery( this );
                if ( $this.hasClass( 'selected' ) ) {
                    return false;
                }
                var $optionSetpro = $this.parents();
                $optionSetpro.find( '.selected' )
                    .removeClass( 'selected' );
                $this.addClass( 'selected' );
                var selector = $( this )
                    .attr( 'data-project' );
                $containerpro.isotope( {
                    filter: selector,
                } );
                return false;
            });
  // layout Isotope after each image loads
  $containerpro.imagesLoaded().progress( function() {
  $containerpro.isotope('layout');
  });
	   
	   // projects
        var $Wcontainerpro = jQuery( '.w-gallery-container' );
        $Wcontainerpro.isotope( {
            itemSelector: '.w-gallery',
            filter: '*'
        } );
        jQuery( '.filt-projects-w' )
            .on( 'click', function( e ) {
                e.preventDefault();
                var $this = jQuery( this );
                if ( $this.hasClass( 'selected' ) ) {
                    return false;
                }
                var $optionSetpro = $this.parents();
                $optionSetpro.find( '.selected' )
                    .removeClass( 'selected' );
                $this.addClass( 'selected' );
                var selector = $( this )
                    .attr( 'data-project' );
                $Wcontainerpro.isotope( {
                    filter: selector,
                } );
                return false;
            });
  // layout Isotope after each image loads
  $Wcontainerpro.imagesLoaded().progress( function() {
  $Wcontainerpro.isotope('layout');
  });

        // Magnific Popup img
        jQuery( '.big-img' )
            .magnificPopup( {
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                },
                gallery: {
                    enabled: false
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function( element ) {
                        return element.find( 'img' );
                    }
                }
            } );
			
	    // Magnific Popup img
        jQuery( '.big-img-1' )
            .magnificPopup( {
                type: 'image'
            } );
			
// img detail projects 
  var owl = $(".detailpro");
  owl.owlCarousel({
     navigation : true,
     singleItem : true,
     pagination: false,
     transitionStyle : "fade",
	 navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
  });
			
// owlCarousel testimonial
  var owl = jQuery("#owl-testimonial");
  owl.owlCarousel({
    slideSpeed: 1000,
    items: 1,
    navigation: true,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [900, 1],
    itemsTablet: [600, 1],
    itemsMobile: false,
	pagination: false,
    autoPlay: 3000,
    stopOnHover: true,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
});
  
        // owlCarousel recent post
        var owl = jQuery( "#owl-post" );
        owl.owlCarousel( {
            items: 3,
            pagination: true,
            itemsDesktop: [ 1000, 2 ],
            itemsDesktopSmall: [ 900, 2 ],
            itemsTablet: [ 600, 1 ],
            itemsMobile: false,
            autoPlay: false
        });
		
		// owlCarousel team
        var owl = jQuery( "#owl-team" );
        owl.owlCarousel( {
            items: 3,
            pagination: false,
            itemsDesktop: [ 1000, 2 ],
            itemsDesktopSmall: [ 900, 2 ],
            itemsTablet: [ 600, 1 ],
            itemsMobile: false,
            autoPlay: false,
            navigation: true,
            navigationText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ]
        } );

// owlCarousel brand
var owl = jQuery("#owl-brand");
   owl.owlCarousel({
   items : 5, 
   itemsDesktop : [1000,4], 
   itemsDesktopSmall : [900,3], 
   itemsTablet: [600,2],
   itemsMobile : false,
   autoPlay : 2000,
   stopOnHover : true,
   pagination: false
});	
   
// owl slider home
        var time = 7; // time in seconds
        var jQueryprogressBar,
            jQuerybar,
            jQueryelem,
            isPause,
            tick,
            percentTime;
        // Init the carousel
        jQuery( "#owl-slider-home" )
            .owlCarousel( {
                slideSpeed: 1000,
                paginationSpeed: 1000,
                pagination: false,
                singleItem: true,
                transitionStyle: 'fade',
                afterInit: progressBar,
                afterMove: moved,
                loop: true,
                autoHeight: true,
                touchDrag: false,
                mouseDrag: false,
                navigation: true,
                navigationText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ]
            } );
        // Init progressBar where elem is jQuery("#owl-slider-home")
        function progressBar( elem ) {
            jQueryelem = elem;
            // build progress bar elements
            buildProgressBar();
            // start counting
            start();
        }
        // create div#progressBar and div#bar then prepend to jQuery("#owl-slider-home")
        function buildProgressBar() {
            jQueryprogressBar = jQuery( "<div>", {
                id: "progressBar"
            } );
            jQuerybar = jQuery( "<div>", {
                id: "bar"
            } );
            jQueryprogressBar.append( jQuerybar )
                .prependTo( jQueryelem );
        }

        function start() {
            // reset timer
            percentTime = 0;
            isPause = false;
            // run interval every 0.01 second
            tick = setInterval( interval, 10 );
        };

        function interval() {
            if ( isPause === false ) {
                percentTime += 1 / time;
                jQuerybar.css( {
                    width: percentTime + "%"
                } );
                // if percentTime is equal or greater than 100
                if ( percentTime >= 100 ) {
                    // slide to next item 
                    jQueryelem.trigger( 'owl.next' )
                }
            }
        }
        // moved callback
        function moved() {
            // clear interval
            clearTimeout( tick );
            // start again
            start();
        }
		
// set mansory gallery
var maingall = jQuery('#w-gallery-container');
if (maingall.length) {
var masonry = new Macy({
        container: '#w-gallery-container',
        trueOrder: false,
        waitForImages: true,
        debug: true,
        columns: 3,
        breakAt: {
          1200: {
            columns: 3,
          },
          940: {
		    columns: 2,
          },
          520: {
            columns: 2,
          },
          400: {
            columns: 1
          }
        }
      });
} else {
   //nothing happen
}

// skill bar
var mainskill = jQuery('#mainskill');
if (mainskill.length) {
   $(window).on('scroll',function() {
   var hT = mainskill.offset().top,
       hH = mainskill.outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
     jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},2000);
	});
   }
});		
} else {
   //nothing happen
}


   
});
// HTML document is loaded end


