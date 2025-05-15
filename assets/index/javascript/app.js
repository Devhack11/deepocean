var navigation = new TimelineLite(
{
      paused: true, 
      reversed: true
}
);
navigation.to("#navigation-container", 0.5, 
{
      opacity: 1, 
      display: 'block'
}
)
.to(".navigation-open", 0.3, 
{
      opacity: 0
},
"-=0.1")
.to(".navigation-close", 0.3, 
{
      display: "block", 
               opacity: 1
}, "-=0.1")
.from(".navigation-list", 0.5, 
{
      opacity: 0, 
      y: 30
}
);
$(".navigation-open, .navigation-close").click (function() 
{
navigation.reversed() ? navigation.play() : navigation.reverse();
}
)



/* контент хэсэг хайрцаг */
gsap.registerPlugin(ScrollTrigger);

jQuery(function($) 
{
var textTween = gsap.to('#box-animate', 
{ attr: 
{ 
	  startOffset: '45%',
	  markers: false,
}, 
      ease: 'power5.in', 
	  duration: 2, 
	  onComplete: scrollText 
}
); 
function scrollText() 
{
textTween.invalidate();
gsap.to('#box-animate', 
{
      attr: { 
	  startOffset: '-55%' 
	  },
	  ease: 'power2.in', 
	  duration: 2,
	  scrollTrigger: { 	  
      start: 'top top',
      end: 'top top',
	  markers: false,
},
}
);
}
}
);



/* контент хэсэг дуу */
var getaudio = $('#button-player')[0],
     mouseovertimer,
     audiostatus = 'off',
     playerButton = ".player-button";

$(document).on('mouseenter', playerButton, function() 
{
if (!mouseovertimer) 
{
mouseovertimer = window.setTimeout(function() 
{
mouseovertimer = null;
if (!$(playerButton).hasClass("playing")) 
{
getaudio.load();
getaudio.play();            
$(playerButton).addClass('playing');
return false;
}
}, 2500);
} 
}
);
$(document).on('mouseleave', playerButton, function() 
{
if (mouseovertimer) 
{
window.clearTimeout(mouseovertimer);
mouseovertimer = null;
} 
}
);
$(document).on('click touch', playerButton, function(e) 
{
e.preventDefault();
if (!$(playerButton).hasClass("playing")) 
{
if (audiostatus == 'off') 
{
$(playerButton).addClass('playing');
getaudio.load();
getaudio.play();
window.clearTimeout(mouseovertimer);
audiostatus = 'on';
return false;
} 
else if (audiostatus == 'on') 
{
$(playerButton).addClass('playing');
getaudio.play();
}
} 
else if ($(playerButton).hasClass("playing")) 
{
getaudio.pause();
$(playerButton).removeClass('playing');
window.clearTimeout(mouseovertimer);
audiostatus = 'on';
}
return false;  
}
);
$('#button-player').on('ended', function() 
{
$(playerButton).removeClass('playing');
audiostatus = 'off';   
}
);