/*! Avoid `console` errors in browsers that lack a console. */
(function () { for (var g, h = function () { }, f = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "), j = f.length, i = window.console = window.console || {}; j--; ) { g = f[j], i[g] || (i[g] = h) } })();
//-----------------------------------------------
// Logs the start of the file.
console.log( 'START: main.js' );
//-----------------------------------------------

// Configure RequireJS
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        /**-----------------------------------
         Frameworks/Libraries
        -----------------------------------**/

        'angular': [ // angular does not support AMD out of the box, put it in a shim
            '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',
            // If CDN fails, load from this location
            'libs/angular.min'
        ],
        'bootstrap': [
            '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
            // If CDN fails, load from this location
            'libs/bootstrap.min'
        ],
        'jquery': [
            '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
            // If CDN fails, load from this location
            'libs/jquery-2.0.3.min'
        ],
        'jquery-ui': [
            '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min',
            // If CDN fails, load from this location
            'libs/jquery-ui-1.10.3.min'
        ],
        'modernizr': [
            //'//ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.6.2',
            // If CDN fails, load from this location
            'libs/modernizr-2.6.2.min'
        ],
        'domReady': 'libs/domReady',

        /**-----------------------------------
         jQuery Plugins
        -----------------------------------**/

        'debounced': 'libs/jquery.debouncedresize',
        'lazyloader': 'libs/jquery.bttrlazyloading.min',
        // offcanvas ---------------------------------
        'offcanvas': 'libs/jquery.offcanvas',
        'overthrow': 'libs/overthrow',
        'hammer': 'libs/hammer',
        'jhammer': 'libs/jquery.hammer',
        // pagescroll --------------------------------
        'mousewheel': 'libs/jquery.mousewheel',
        'mwintent': 'libs/mwheelIntent',
        'jscroll': 'libs/jquery.jscrollpane.min',
        // -------------------------------------------
        'pageslide': 'libs/jquery.pageslide',
        'transitions': 'js/pagetransitions',
        // sly ----------------------------------------
        'easing': 'libs/jquery.easing.min',
        'sly': 'libs/sly.min',
        'sly-horizontal': 'js/sly.horizontal'
        // -------------------------------------------
    },
    shim:
    {
        'angular':
        {
            exports: 'angular'
        },
        'bootstrap':
        {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'jquery':
        {
            exports: '$'
        },
        'jquery-ui':
        {
            deps: ['jquery'],
            exports: 'jqueryui'
        },
        'modernizr':
        {
            exports: 'modernizr'
        },
        // -------------------------------------------
        'debounced':
        {
            deps: ['jquery']
        },
        'easing':
        {
            deps: ['jquery']
        },
        'jscroll':
        {
            deps: ['jquery', 'mousewheel', 'mwintent']
        },
        'lazyloader':
        {
            deps: ['jquery']
        },
        'mousewheel':
        {
            deps: ['jquery']
        },
        'pageslide':
        {
            deps: ['jquery']
        },
        'sly':
        {
            deps: ['jquery', 'easing']
        },
        'sly-horizontal':
        {
            deps: ['sly']
        },
        'transitions':
        {
            deps: ['jquery']
        }
        // -------------------------------------------
    }
});

// Enter global require code here...
require(['modernizr'], function ()
{
    require(['jquery', 'domReady'], function ($, domReady)
    {
        // Log that jquery was loaded into the global name-space
        console.log('jQuery', $.fn.jquery, 'loaded!');

        // Right-click disabled
        $(document).bind('contextmenu', function (e)
        {
            return false;
        });

        domReady(function ()
        {
            require(['angular', 'bootstrap', 'lazyloader', 'offcanvas', 'overthrow', 'hammer', 'jhammer', 'transitions'], function ()
            {
                // Add off-canvas
                $("html").offcanvas({
                    hasSidebarRight: true
                });

                var screenheight = parseInt($(this).height());
                $(".pt-perspective").css("height", function (index)
                {
                    //var topBar = parseInt($('.topBar').height());
                    //return screenheight - topBar;
                    return screenheight;
                });

                // Lazyload website images
                $('.img-responsive').bttrlazyloading({
                    //placeholder: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
                    backgroundcolor: 'transparent',
                    animation: 'fadeIn',
                    container: '.scroll-pane'
                });

                // Add scroll panes
                //$('.scroll-pane').jScrollPane();
                //----------------------------------------------- 

                // Logs the end of the file.
                console.log('END: main.js');
                //-----------------------------------------------
            });
        });
    });
});