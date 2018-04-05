
// This function loads in HTML from other files, just put a '<div data-include="<filename>"></div>'
$(document).ready(function() {

  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var html = 'components/' + $(this).data('include') + '.html';
    $(this).load(html);
  });

});
