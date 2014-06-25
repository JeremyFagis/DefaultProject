;(function ( $, window, document, undefined ) {

    var pluginName = "simpleInputFile",
        defaults = {
            wrapperClass: "input-file-wrapper",
            defaultText: 'Envoyer un ficher',
            iconHtml: '<i class="icon-upload-cloud" />'
        },
        isIE = !!window.ActiveXObject;

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            if (!isIE) {
                var element = $(this.element);
                var defaultText = element.data('default-text') || this.settings.defaultText;
                var value = element.val() || defaultText;

                element.wrap('<div class="' + this.settings.wrapperClass + '"/>');
                $('<span class="filename"/>').text(value).prependTo(element.parent());
                $(this.settings.iconHtml).prependTo(element.parent());

                element.on('change', function(){
                    var fileName = $(this).val().split('\\').pop();
                    $(this).siblings('span').html(fileName);
                });
            }
        }
    };

    $.fn[ pluginName ] = function ( options ) {
        this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });

        return this;
    };

})( jQuery, window, document );
