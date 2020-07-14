
// news slider on county page
var switcher = UIkit.switcher('#switcher', {
    connect: '#content',
    animation: 'uk-animation-fade'
  });
  var $toggles = UIkit.util.$$('.switcher-toggle');
  
  UIkit.util.each($toggles, function() {
    var $toggle = this;  
    
    UIkit.util.on($toggle, 'click', function(e) {
      var dir = UIkit.util.attr($toggle, 'uk-switcher-nav');
      var $active = UIkit.util.$('#content .uk-active');
      var index = UIkit.util.index($active);
      
      if (dir === 'previous') {
        switcher.show(index - 1);
      } else if (dir === 'next') {
        switcher.show(index + 1);
      }
    });
  });