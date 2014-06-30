$(document).ready(function() 
{
  var page=
  {
    'summary'     :  {html:'summary.html',js:''},
    'about'       :  {html:'about.html',js:''},
    'programming' :  {html:'programming.html',js:''},
    'portfolio'   :  {html:'portfolio.html',js:'images.js'},
    'hire'        :  {html:'hire.html',js:''},
    'toolbox'     :  {html:'toolbox.html',js:''},
    'bucket'      :  {html:'bucket.html',js:''},
    'education'   :  {html:'education.html',js:''},
    'employment'  :  {html:'employment.html',js:''}
  };
         
  $('#geneva').geneva(page);

});

// content works, but the other options do not
$(document).ready(function() {
  $('a').each(function() {
    $('[title!=""]').qtip({
      content: {
        text: $(this).attr('title'),
      },
      style: {
        tip: "topLeft",
        classes: "ui-tooltip-light ui-tooltip-shadow ui-tooltip-rounded ui-tooltip-wide",
        width: 150
      },
      position: {
        at: "top center",
        my: "top left"
      },
      show: {
        solo: true
      },
      hide: {
        delay: 1000,
        fixed: true
      }
    });
  });
});