//Logs the start of the file.
console.log( "START: main.js" );

// Configure RequireJS
requirejs.config({
    baseUrl: "scripts",
    paths: {
        // The Libraries used
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
            // If CDN fails, load from this location
            'libs/jquery-1.9.1.min'
        ],
        modernizer: [
            '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min',
            // If CDN fails, load from this location
            'libs/modernizr-2.6.2.min'
        ],
        bootstrap: [
            '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min',
            // If CDN fails, load from this location
            'libs/bootstrap.min'
        ],
        debounce: 'libs/jquery.debouncedresize'
    }
    
    
    //Log that jquery was loaded into the global name-space.
    console.log("jQuery", $.fn.jquery, "loaded!");
});


//Test
require(['page/home'],function(Y){
    Y.doSomething();
});
        

//Logs the end of the file.
console.log( "END: main.js" );