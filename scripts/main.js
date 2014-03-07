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
        // The Libraries used
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
            '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min',
            // If CDN fails, load from this location
            'libs/modernizr-2.6.2'
        ],
        'bootstrap': [
            '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
            // If CDN fails, load from this location
            'libs/bootstrap.min'
        ],
        'debounced': 'libs/jquery.debouncedresize',
        'underscore': 'libs/underscore.min',
        'echo': 'libs/echo.min'
    },
    shim: 
    {
        'jqueryui':
        {
            deps: ['jquery']
        },
        'bootstrap':
        {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        'debounced':
        {
            deps: ['jquery'],
            exports: 'Debounced'
        },
        'underscore': 
        {
            exports: '_'
        }
    }
});

// Enter global require code here...
require(['modernizr','bootstrap','echo'], function ()
{
    // Log that jquery was loaded into the global name-space.
    console.log('jQuery', $.fn.jquery, 'loaded!');
    //-----------------------------------------------

    // Right-click disabled
    $(document).bind('contextmenu', function (e)
    {
        return false;
    });
    //-----------------------------------------------

    // Lazyload images
    Echo.init({
        offset: 0,
        throttle: 250
    });
    //Echo.render(); // is also available for non-scroll callbacks
    //-----------------------------------------------
});

// Logs the end of the file.
console.log( 'END: main.js' );
//-----------------------------------------------