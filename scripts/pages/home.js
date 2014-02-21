define(['jquery'], function ($)
{
    $('#foo').text('runs on JQuery');

    var Methods = {
        doSomething: function ()
        {
            // alert('I Did Something');
        }
    };

    return Methods;
});