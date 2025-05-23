
(function($) 
{ 
$(document).ready(function()
{"use strict";

var progressPath = document.querySelector('.progress-bar path');
var pathLength = progressPath.getTotalLength();
 	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		

var updateProgress = function () 
{
var scroll = $(window).scrollTop();
var height = $(document).height() - $(window).height();
var progress = pathLength - (scroll * pathLength / height);
	progressPath.style.strokeDashoffset = progress;
}
updateProgress();

$(window).scroll(updateProgress);	
var offset = 50;
var duration = 550;
jQuery(window).on('scroll', function() 
{
if (jQuery(this).scrollTop() > offset) 
{
jQuery('.progress-bar').addClass('progress-top');
} 
else 
{
jQuery('.progress-bar').removeClass('progress-tops');
}
}
);				
jQuery('.progress-bar').on('click', function(event) 
{
event.preventDefault();
jQuery('html, body').animate(
{
      scrollTop: 0
}, 
duration);
return false;
}
)
}
);
}
)
(jQuery);




/*
$(document).ready(function() 
{
$('#card-scroll').bind('mousewheel', function(e) 
{
this.scrollLeft -= (e.originalEvent.wheelDelta );
}
);
$('#card-scroll').bind('DOMMouseScroll', function(e) 
{
this.scrollLeft += (e.originalEvent.detail* 40);
}
);
}
);
*/