var text = "Hi! my name is Enkhbayar, I'm a Front end Developer, Ui Ux Designer who lives in Mongolia.";
var count = 0;
var maxSpeed = 200;   
function cursorAnimate()
{
$('#headline-cursor').animate(
{
      opacity: 0
}, 
     'fast', 'swing').animate(
{
      opacity: 1
},
     'fast', 'swing');
}
$(document).ready(function()
{
setInterval ('cursorAnimate()', 100);
function character(start, end, text) 
{
return text.substring(start, end);  
}
function type() 
{
var randomNum = Math.floor(Math.random() * maxSpeed);
setTimeout(type, randomNum);
$('.headline-animation').append(character(count, count+1, text));
count++;
}
type();
}
);



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