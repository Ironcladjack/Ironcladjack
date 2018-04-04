
// This function loads in HTML from other files, just put a '<div data-include="<filename>"></div>'
$(document).ready(function() {

  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var html = 'components/' + $(this).data('include') + '.html';
    var css = 'components/' + $(this).data('include') + '.css';
    $(this).load(css).load(html);
  });

});
