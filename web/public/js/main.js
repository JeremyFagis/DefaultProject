$(document).ready(function(){

    $(".selector").simpleSelector();

    $('input[type="file"]').simpleInputFile();

    $('.nav-tabs li:not(.disabled) a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('.collapse').collapse();

    $('.has-tooltip').tooltip({ container: 'body' });

    $(".fancybox").fancybox({
        padding: 10,
        nextEffect: 'fade',
        prevEffect: 'fade',
        helpers: {
            title: { type: 'inside' }
        }
    });

});

$(window).load(function(){
    if($('#loading').length > 0) {
        $('#loading').delay(200).fadeOut(400);
        $('body').removeClass('loading');
    }
});
