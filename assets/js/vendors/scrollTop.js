var $ = require('jquery');

function scrollTop(options)
{
    options = typeof(options) !== 'undefined' ? options : {};

    this.limit       = typeof(options.limit) !== 'undefined' ? options.limit : 150;
    this.btn         = typeof(options.btn) !== 'undefined' ? options.btn : '.scroll-to-top';
    this.toggleClass = typeof(options.toggleClass) !== 'undefined' ? options.toggleClass : 'visible';
    this.easing      = typeof(options.easing) !== 'undefined' ? options.easing : 'easeInOutExpo';
    this.duration    = typeof(options.duration) !== 'undefined' ? options.duration : 800;

    this.checkScroll($(window).scrollTop());
    this.initEvents();
}

scrollTop.prototype.constructor = scrollTop;

scrollTop.prototype.initEvents = function()
{
    var _this = this;
    $(window).scroll(function() {
        _this.checkScroll($(window).scrollTop());
    });

    $(this.btn).on('click', function(){
        $('html, body').animate({scrollTop : 0}, _this.duration, _this.easing);
        return false;
    });
};

scrollTop.prototype.checkScroll = function(scroll)
{
    if(scroll > this.limit) {
        $(this.btn).addClass(this.toggleClass);
    } else {
        $(this.btn).removeClass(this.toggleClass);
    }
};

module.exports = scrollTop;
