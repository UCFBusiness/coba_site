if (window.top !== window.self) 
window.top.location = window.self.location.href; 

var OB_startTime = new Date().getTime(); 
var OB_loadErrors = []; 

document.addEventListener('error', function (e) { OB_loadErrors.push(e) }, true); 

function _asyncScript(u) {
    var d = document, f = d.getElementsByTagName('script')[0], s = d.createElement('script'); 
    s.type = 'text/javascript'; 
    s.async = true; 
    s.src = u; 
    f.parentNode.insertBefore(s, f);
}
    
function _asyncStyles(u) {
    var d = document, 
    f = d.getElementsByTagName('script')[0], s = d.createElement('link'); 
    s.rel = 'stylesheet'; 
    s.href = u; 
    f.parentNode.insertBefore(s, f);
}
    (function() {
        var config = {kitId: "pyz0xnh", scriptTimeout: 3000};
        var h=document.getElementsByTagName("html")[0];
        h.className+=" wf-loading";
        
        var t=setTimeout(function(){
        h.className=h.className.replace(/( |^)wf-loading( |$)/g,"");
        h.className+=" wf-inactive"},config.scriptTimeout
    );
    
    // Create script tag
    var tk=document.createElement("script");

    tk.src='//use.typekit.net/'+config.kitId+'.js';
    tk.type="text/javascript";
    tk.async="true";
    tk.onload=tk.onreadystatechange=function(){
        var a=this.readyState;
        if(a&&a!="complete"&&a!="loaded")
        return;
        
        clearTimeout(t);
        try{Typekit.load(config)}catch(b){}};

        var s=document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(tk,s)})();
        
        var _gaq = _gaq || []; 
        _gaq.push(['_setAccount', 'UA-24232453-2']); 
        _gaq.push(['_trackPageview']); 
        _asyncScript(('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js');
        
        var _kmq = _kmq || []; var _kmk = _kmk || '965ccfe7459a74a1209b1412b24fe962252de6b3'; 
        _asyncScript('//i.kissmetrics.com/i.js'); 
        _asyncScript('//doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');