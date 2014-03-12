define(['jquery'], function ($)
{
    // runs 1st
    var screenwidth = parseInt($(this).width());
    var screenheight = parseInt($(this).height());
    var gr = 1.618;

    var msg = "Hello World, this is a private method.";

    $('#msg').text(' runs on JQuery');
    //alert('runs 1st');

    var PrivateMessage = function ()
    {
        return msg;
    };

    var PrivateMethods = {
        onLoad: function () // runs 2nd
        {
            //alert('runs 2nd');

            if (screenwidth <= 600) // load mobile scripts
            {
                require([], function ()
                {
                    //-- resize to fit -------------------------------
                    //$('.cover').css('height', screenheight);
                    //------------------------------------------------
                });
            }

            if ((screenwidth > 600) && (screenwidth < 1000)) // load tablet scripts
            {
                require([], function ()
                {
                    //-- resize to fit -------------------------------
                    //$('.cover').css('height', screenheight);
                    //------------------------------------------------
                });
            }

            if (screenwidth >= 1000) // load desktop scripts
            {
                require([], function ()
                {
                    //-- resize to fit -------------------------------
                    //$('.cover').css('height', screenheight);
                    //------------------------------------------------
                });
            }
        },
        onResize: function () // runs 3rd
        {
            //alert('runs 3rd');
            alert(PrivateMessage());

            // ---------------------------------------------------
            // On Smart PageResize...
            // fires only after user is done resizing the window
            // ---------------------------------------------------            
            $(window).on('debouncedresize', function (event)
            {
                var screenwidth = parseInt($(this).width());
                var screenheight = parseInt($(this).height());

                if (screenwidth <= 600) // load mobile scripts
                {
                    require([], function ()
                    {
                        //-- resize to fit -------------------------------
                        //$('.cover').css('height', screenheight);
                        //------------------------------------------------
                    });
                }

                if ((screenwidth > 600) && (screenwidth < 1000)) // load tablet scripts
                {
                    require([], function ()
                    {
                        //-- resize to fit -------------------------------
                        //$('.cover').css('height', screenheight);
                        //------------------------------------------------
                    });
                }

                if (screenwidth >= 1000) // load desktop scripts
                {
                    require([], function ()
                    {
                        //-- resize to fit -------------------------------
                        //$('.cover').css('height', screenheight);
                        //------------------------------------------------
                    });
                }
            }); //end debouncedresize
        }
    };

    return PrivateMethods;
});