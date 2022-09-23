jQuery.noConflict();

(function ($) {
	$(function () {
		// Menu List.
		$(document).ready(function() {
			var parent = $(".nav-list .parent ul");
				link = $(".nav-list .parent > a");
				active = $(".nav-list .active ul");

			parent.hide();
			active.show();

			link.click(function(e) {
				e.preventDefault();

				if (!$(this).parent().hasClass('active')) {
					link.parent().removeClass('active');
					parent.filter(':visible').slideUp('normal');

					$(this).parent().addClass('active');
					$(this).next().stop(true, true).slideDown('normal');
				} else {
					$(this).parent().removeClass('active');
					$(this).next().stop(true, true).slideUp('normal');
				}
			});
		});
	});
})(jQuery);