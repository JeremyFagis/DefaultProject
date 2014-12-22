var $              = require('jquery'),
    FastClick      = require('fastclick'),
    tab            = require('bootstrap.tab'),
    collapse       = require('bootstrap.collapse'),
    tooltip        = require('bootstrap.tooltip'),
    popover        = require('bootstrap.popover'),
    simpleSelector = require('./vendors/jquery.simple-selector'),
    dropify        = require('./vendors/dropify'),
    fancybox       = require('./vendors/jquery.fancybox.pack');
    easing         = require('./vendors/jquery.easing');

FastClick(document.body);

$(document).ready(function(){

    $(".selector").simpleSelector();

    $('input[type="file"]').dropify();

    $('.nav-tabs li:not(.disabled) a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('.collapse').collapse();

    $('.has-tooltip, [data-toggle="tooltip"]').tooltip({ container: 'body' });
    $('.has-popover, [data-toggle="popover"]').popover({ trigger: 'hover' });

    $(".fancybox").fancybox({
        padding: 10,
        nextEffect: 'fade',
        prevEffect: 'fade',
        helpers: {
            title: { type: 'inside' }
        }
    });

    // Scroll top button
    var scrollTopLimit = 150;
    $(window).scroll(function(){
        s = $(window).scrollTop();

        if (s > scrollTopLimit) {
            $('.scroll-to-top').addClass('visible');
        } else {
            $('.scroll-to-top').removeClass('visible');
        }
    });

    if($(window).scrollTop() > scrollTopLimit) {
        $('.scroll-to-top').addClass('visible');
    } else {
        $('.scroll-to-top').removeClass('visible');
    }

    $('.scroll-to-top').on('click', function(){
        $('html, body').animate({scrollTop : 0}, 800, 'easeInOutExpo');
        return false;
    });
});

$(window).load(function(){
    if($('#loading').length > 0) {
        $('#loading').delay(200).fadeOut(400);
        $('body').removeClass('loading');
    }
});


/**
 * DOC
 */

$(document).ready(function(){
    $('pre code').each(function(){
        $(this).html(htmlencode($(this).html()));
    });

    $('.code-button').on('click', function(e) {
        e.preventDefault();
    })
});

function htmlencode(str) {
    return str.replace(/[&<>"']/g, function($0) {
        return "&" + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"#39"}[$0] + ";";
    });
}
