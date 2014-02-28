define(['jquery'], function ($)
{
    $('#foo').text(' runs on JQuery');

    var PrivateMethods = {
        doSomething: function ()
        {
            alert('I Did Something');
        }
    };

    return PrivateMethods;
});