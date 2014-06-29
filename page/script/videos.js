/********************************************************/
/*	Fancybox for youtube videos												  */
/********************************************************/

$('.fancybox-video-youtube').bind('click',function() 
{
  $.fancybox(
  {
    'padding'		: 0,
    'autoScale'		: false,
    'transitionIn'	: 'none',
    'transitionOut'	: 'none',
    'width'			: 680,
    'height'		: 495,
    'href'			: this.href,
    'type'			: 'iframe'
  });

  return false;
});

/********************************************************/
/*	Fancybox for vimeo videos												    */
/********************************************************/

$('.fancybox-video-vimeo').bind('click',function() 
{
	$.fancybox(
	{
		'padding'		: 0,
		'autoScale'		: false,
		'transitionIn'	: 'none',
		'transitionOut'	: 'none',
		'width'			: 600,
		'height'		: 338,
		'href'			: this.href,
		'type'			: 'iframe'
	});
	
	return false;
});