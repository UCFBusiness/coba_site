define(['jquery'], function ($)
{
    // runs 1st
    var screenwidth = parseInt($(this).width());
    var screenheight = parseInt($(this).height());
    var msg = "Hello World, this is a private method.";
    var gr = 1.618; // Golden Ratio

    var PrivateMessage = function ()
    {
        return msg;
    };

    $('#msg').text(' runs on JQuery');

    var PrivateMethods = {
        onLoad: function () // runs 2nd
        {
            if (screenwidth < 1000) // load mobile scripts
            {
                require(['pageslide'], function ()
                {
                    //-- screen-size ----------------------------------
                    $('#msg').text(screenwidth + ' x ' + screenheight + ' - tablet');
                    //------------------------------------------------
                    //-- resize to fit -------------------------------
                    //$('.cover').css('height', screenheight);
                    //------------------------------------------------
                    
                    //$("#cnext").click(function(){
                    //    $("#pt-cover").slideToggle("slow")
                    //});

                    

                    //-- resize to fit -------------------------------
                    $('aside.cover').css('min-height', screenheight);
                    //-- Slide to the left; if slide is model, you'll have to call $.pageslide.close() to close
                    $(".target_blank").pageslide({ direction: "left", modal: true });
                    $("#slidecontent").css("height", screenheight);
                    //------------------------------------------------
                    
                    
                    if (screenwidth < 600) // load tablet scripts
                    {
                        require([], function ()
                        {
                            //-- screen-size ----------------------------------
                            $("#msg").text(screenwidth + " x " + screenheight + " - mobile");
                            //------------------------------------------------
                            //-- resize to fit -------------------------------
                            //$('.cover').css('height', screenheight);
                            //------------------------------------------------
                        });
                        
                    }
                });
            }
            
            if (screenwidth >= 1000) // load desktop scripts
            {
                require(['pageslide'], function ()
                {
                    //-- screen-size ----------------------------------
                    $("#msg").text(screenwidth + " x " + screenheight + " - desktop");
                    //------------------------------------------------
                    //-- resize to fit -------------------------------
                    //$('.cover').css('height', screenheight);
                    //------------------------------------------------

                    //-- Slide to the left; if slide is model, you'll have to call $.pageslide.close() to close
                    $(".target_blank").pageslide({ direction: "left", modal: true });
                    $("#pageslide").css("width", function (index) {
                        var cover = parseInt($("aside.cover").width());
                        return screenwidth - cover;
                    });
                    $("#slidecontent").css("height", screenheight);
                    //------------------------------------------------

                });
            }
        },
        onResize: function () // runs 3rd
        {
            alert(PrivateMessage());

            // ---------------------------------------------------
            // On Smart PageResize...
            // fires only after user is done resizing the window
            // ---------------------------------------------------            
            $(window).on('debouncedresize', function (event)
            {
                var screenwidth = parseInt($(this).width());
                var screenheight = parseInt($(this).height());

                if (screenwidth < 1000) // load mobile scripts
                {
                    require([], function ()
                    {
                        //-- screen-size ----------------------------------
                        $('#msg').text(screenwidth + ' x ' + screenheight + ' - tablet');
                        //------------------------------------------------
                        //-- resize to fit -------------------------------
                        //$('.cover').css('height', screenheight);
                        //------------------------------------------------
                        
                        if (screenwidth < 600) // load tablet scripts
                        {
                            require([], function ()
                            {
                                //-- screen-size ----------------------------------
                                $("#msg").text(screenwidth + " x " + screenheight + " - mobile");
                                //------------------------------------------------
                                //-- resize to fit -------------------------------
                                //$('.cover').css('height', screenheight);
                                //------------------------------------------------
                            });
                        }
                    });
                }

                if (screenwidth >= 1000) // load desktop scripts
                {
                    require([], function ()
                    {
                        //-- screen-size ----------------------------------
                        $("#msg").text(screenwidth + " x " + screenheight + " - desktop");
                        //------------------------------------------------
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