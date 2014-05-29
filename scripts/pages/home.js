define(['jquery', 'debounced', 'easing', 'sly', 'horizontal', 'pageslide'], function ($) {
    // runs 1st
    var screenwidth = parseInt($(this).width());
    var screenheight = parseInt($(this).height());
    var msg = "Hello World, this is a private method.";
    var gr = 1.618; // Golden Ratio

    var PrivateMessage = function () {
        return msg;
    };

    //-- Test jQuery
    $('#msg').text(' runs on jQuery');

    var PrivateMethods = {
        onLoad: function () // runs 2nd
        {
            //alert(gr);

            //-- Slide to the left; if slide is model, you'll have to call $.pageslide.close() to close.
            $("a.target_blank").pageslide({ direction: "left", modal: true });
            $("#slidecontent").css("height", function (index) {
                var toolBar = parseInt($('#toolbar').height());
                return screenheight - toolBar;
            });

            if (screenwidth < 1000) // load tablet scripts
            {
                require([], function () {
                    //-- screen-size ----------------------------------
                    $('#msg').text(screenwidth + ' x ' + screenheight + ' - tablet');

                    if (screenwidth < 700) // load mobile scripts
                    {
                        require([], function () {
                            //-- screen-size ----------------------------------
                            $("#msg").text(screenwidth + " x " + screenheight + " - mobile");
                        });
                    }
                });
            }

            if (screenwidth >= 1000) // load desktop scripts
            {
                require([], function () {
                    //-- screen-size ----------------------------------
                    $("#msg").text(screenwidth + " x " + screenheight + " - desktop");

                    //-- resize to fit -------------------------------
                    $("#pageslide").css("width", function (index) {
                        var cover = parseInt($("div.pt-cover").width());
                        return screenwidth - cover;
                    });
                });
            }
        },
        onResize: function () // runs 3rd
        {
            //alert(PrivateMessage());

            // ---------------------------------------------------
            // On Smart PageResize...
            // fires only after user is done resizing the window
            // ---------------------------------------------------            
            $(window).on('debouncedresize', function (event) {
                var screenwidth = parseInt($(this).width());
                var screenheight = parseInt($(this).height());

                if (screenwidth < 1000) // load tablet scripts
                {
                    require([], function () {
                        //-- screen-size ----------------------------------
                        $('#msg').text(screenwidth + ' x ' + screenheight + ' - tablet');

                        //-- resize to fit -------------------------------
                        //$('.cover').css('height', screenheight);

                        if (screenwidth < 700) // load mobile scripts
                        {
                            require([], function () {
                                //-- screen-size ----------------------------------
                                $("#msg").text(screenwidth + " x " + screenheight + " - mobile");

                                //-- resize to fit -------------------------------
                                //$('.cover').css('height', screenheight);
                            });
                        }
                    });
                }

                if (screenwidth >= 1000) // load desktop scripts
                {
                    require([], function () {
                        //-- screen-size ----------------------------------
                        $("#msg").text(screenwidth + " x " + screenheight + " - desktop");

                        //-- resize to fit -------------------------------
                        //$('.cover').css('height', screenheight);
                    });
                }
            }); //end debouncedresize
        }
    };

    return PrivateMethods;
});