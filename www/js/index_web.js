jQuery(document).ready(function($){
    $('#backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    $('.buttonupdate').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 50);
        setTimeout(location.reload.bind(location), 60);
        return false;
    });
});