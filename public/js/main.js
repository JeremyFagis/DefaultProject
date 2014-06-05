$(document).ready(function(){

    $(".selector").simpleSelector();

    $('input[type="file"]').simpleInputFile();

    $('.nav-tabs li:not(.disabled) a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

});
