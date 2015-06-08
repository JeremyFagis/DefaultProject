var $ = require('jquery'),
    easing = require('./jquery.easing');

function ScrollTop(options)
{
    options = typeof(options) !== 'undefined' ? options : {};

    this.limit        = typeof(options.limit) !== 'undefined' ? options.limit : 150;
    this.tpl          = typeof(options.tpl) !== 'undefined' ? options.tpl : '<a href="#"></a>';
    this.content      = typeof(options.content) !== 'undefined' ? options.content : '&uarr;';
    this.btnClass     = typeof(options.btnClass) !== 'undefined' ? options.btnClass : 'scroll-to-top';
    this.visibleClass = typeof(options.visibleClass) !== 'undefined' ? options.visibleClass : 'visible';
    this.easing       = typeof(options.easing) !== 'undefined' ? options.easing : 'easeInOutExpo';
    this.duration     = typeof(options.duration) !== 'undefined' ? options.duration : 800;
    this.window       = $(window);
    this.btn          = null;

    this.onScroll = this.onScroll.bind(this);
    this.onClick  = this.onClick.bind(this);

    this.createButton();
    this.onScroll();
    this.initEvents();
}

ScrollTop.prototype.createButton = function()
{
    this.btn = $(this.tpl)
                .html(this.content)
                .addClass(this.btnClass)
                .prependTo('body');
};

ScrollTop.prototype.checkScroll = function(scroll)
{
    if(scroll > this.limit) {
        this.btn.addClass(this.visibleClass);
    } else {
        this.btn.removeClass(this.visibleClass);
    }
};

ScrollTop.prototype.initEvents = function()
{
    this.window.scroll(this.onScroll);
    this.btn.on('click', this.onClick);
};

ScrollTop.prototype.onScroll = function(event) {
    this.checkScroll(this.window.scrollTop());
};

ScrollTop.prototype.onClick = function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop : 0}, this.duration, this.easing);
    return false;
};

module.exports = ScrollTop;
