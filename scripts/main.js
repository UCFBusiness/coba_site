/*! Avoid `console` errors in browsers that lack a console. */
(function () { for (var g, h = function () { }, f = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "), j = f.length, i = window.console = window.console || {}; j--; ) { g = f[j], i[g] || (i[g] = h) } })();

// Logs the start of the file.
console.log( 'START: main.js' );

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
        'modernizer': [
            '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min',
            // If CDN fails, load from this location
            'libs/modernizr-2.6.2.min'
        ],
        'bootstrap': [
            '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min',
            // If CDN fails, load from this location
            'libs/bootstrap.min'
        ],
        'debouncedresize': 'libs/jquery.debounced-resize',
        'underscore': 'libs/underscore.min',
        'modernizr': 'libs/modernizr-2.6.2'
    },
    shim: 
    {
        'debouncedresize':
        {
            deps: ['jquery'],
            exports: 'debounced'
        },
        'underscore': 
        {
            exports: '_'
        }
    }
});


// Enter global require code here...
require(['jquery'], function ()
{

    // Log that jquery was loaded into the global name-space.
    console.log('jQuery', $.fn.jquery, 'loaded!');

    // Disable right-click
    $(document).bind('contextmenu', function (e)
    {
        return false;
    });

});


// Logs the end of the file.
console.log( 'END: main.js' );