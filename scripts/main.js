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
        'domReady': 'domReady',
        // The Libraries:
        'angular': [
            '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',
            // If CDN fails, load from this location
            'libs/angular.min'
        ],
        'jquery': [
            '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
            // If CDN fails, load from this location
            'libs/jquery-2.0.3.min'
        ],
        'jqueryui': [
            '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min',
            // If CDN fails, load from this location
            'libs/jquery-ui-1.10.3.min'
        ],
        'modernizr': [
            '//ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.6.2',
            // If CDN fails, load from this location
            'libs/modernizr-2.6.2'
        ],
        'bootstrap': [
            '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
            // If CDN fails, load from this location
            'libs/bootstrap.min'
        ],
        //--------------------------------------------
        'debounced': 'libs/jquery.debouncedresize',
        'transitions': 'js/pagetransitions',
        'pageslide': 'libs/jquery.pageslide',
        //lazyloading
        'lazyloader': 'libs/jquery.bttrlazyloading.min',
        //offcanvas
        'offcanvas': 'libs/jquery.offcanvas.min',
        'overthrow': 'libs/overthrow',
        'hammer': 'libs/hammer',
        'jhammer': 'libs/jquery.hammer',
        //pagescroll
        'mousewheel': 'libs/jquery.mousewheel',
        'mwintent': 'js/mwheelIntent',
        'jscroll': 'libs/jquery.jscrollpane.min',
        //sly
        'easing': 'libs/jquery.easing.min',
        'sly': 'libs/sly.min',
        'sly-horizontal': 'js/sly.horizontal'
    },
    shim: 
    {
        'jqueryui':
        {
            deps: ['jquery']
        },
        'bootstrap':
        {
            deps: ['jquery']
        },
        'transitions':
        {
            deps: ['jquery']
        },
        'easing':
        {
            deps: ['jquery']
        },
        'debounced':
        {
            deps: ['jquery']
        },
        'pageslide':
        {
            deps: ['jquery']
        },
        'lazyloader':
        {
            deps: ['jquery']
        },
        'mousewheel':
        {
            deps: ['jquery']
        },
        'jscroll':
        {
            deps: ['jquery','mousewheel','mwintent']
        },
        'sly':
        {
            deps: ['jquery', 'easing']
        },
        'sly-horizontal':
        {
            deps: ['sly']
        }
    }
});

// Enter global require code here...
require(['modernizr'], function ()
{
    require(['jquery', 'bootstrap', 'lazyloader', 'offcanvas', 'overthrow', 'hammer', 'jhammer', 'transitions'], function ($)
    {
        // Log that jquery was loaded into the global name-space
        console.log('jQuery', $.fn.jquery, 'loaded!');

        // Add off-canvas
        $("html").offcanvas({
            hasSidebarRight: true
        });
        
        // Right-click disabled
        $(document).bind('contextmenu', function (e)
        {
            return false;
        });
        
        // Lazyload images
        $('.img-responsive').bttrlazyloading({
            //placeholder: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
            backgroundcolor: 'transparent',
            animation: 'fadeIn',
            container: '.scroll-pane'
        });

        // Add scroll panes
        //$('.scroll-pane').jScrollPane();
        //----------------------------------------------- 
    })
});

// Logs the end of the file.
console.log( 'END: main.js' );
//-----------------------------------------------