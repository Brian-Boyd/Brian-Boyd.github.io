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

// Create the tooltips only when document ready
$(document).ready(function()
{
  $('.resume').qtip({
    content: 'Download and view my PDF resume version!',
    position: {
      target: 'mouse', // Track the mouse as the positioning target
      adjust: { x: 5, y: 5 } // Offset it slightly from under the mouse
    }
  });
});