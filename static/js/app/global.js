// namespace principal
App = window.App || {};
// App = {};

// namespace para objetos
App.objects = {};

App.objects.OnAnimationGlobal = function() {
	this.el = $('.pages');
	this.load = $('#wrap-loader');
	this.win = $(window);
	this.header = $('#header');
	this.btnScroll = $('.btn-scroll');

	this.initEvents();
}

App.objects.OnAnimationGlobal.prototype = {
	initEvents: function() {
		this.setSizesPages();
		this.onResize();
		this.onScroll();
		this.loadingSite();
	},

	loadingSite: function() {
		var that = this;
		this.win.on('load', function(){
			that.load.fadeOut();
		});
	},

	setSizesPages: function() {
		this.el.height( this.win.height() );
	},

	onResize: function() {
		var that = this;
		this.win.on('resize', function(){
			that.setSizesPages();
		});
	},

	onScroll: function() {
		var that = this;
		this.win.on('scroll', function() {
			if ( that.win.scrollTop() >= that.el.height() ) {
				$('.wrap-board').addClass('active');
			}

			if ( that.win.scrollTop() > 0 ) {
				that.btnScroll.fadeOut();
			} else {
				that.btnScroll.fadeIn();
			}
		});

		this.btnScroll.on('click', function( event ){
            event.preventDefault();
            var self = $(this);
            $('html, body').animate({ scrollTop: $('#'+self.attr('data-href') ).offset().top }, 400, 'swing' );
            return true;
        });

        TweenMax.to($('.icon-btn-arrow'), 1, {bottom:'1em', loop:true, repeat:-1, ease:Elastic.easeOut});
	}
}

$(function () {
	App.objects.onAnimationGlobal = new App.objects.OnAnimationGlobal();
});