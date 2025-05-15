$(window).on('load', function() 
{
$('#status').fadeOut();

$('#content-section-loader').delay(350).fadeOut('slow');

$('body').delay(350).css(
{
      'overflow':'visible'
}
);
}
)




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