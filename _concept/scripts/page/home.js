define(['jquery'],function($){
    $('#foo').text('changed by JQuery');
    
    var Methods = {
        doSomething: function(){
            alert('I Did Something');
        }
    };
    
    return Methods;
});