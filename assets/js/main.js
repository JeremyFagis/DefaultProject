var $                = require('jquery'),
    tab              = require('bootstrap.tab'),
    collapse         = require('bootstrap.collapse'),
    tooltip          = require('bootstrap.tooltip'),
    popover          = require('bootstrap.popover'),
    simpleSelector   = require('./vendors/jquery.simple-selector'),
    dropify          = require('./vendors/dropify');

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
});

$(window).load(function(){
    if($('#loading').length > 0) {
        $('#loading').delay(200).fadeOut(400);
        $('body').removeClass('loading');
    }
});
