/**
* pagehome.js
* http://cuitianze.github.io
* author: cuitianze
* data: 2014.7.30
*/

var BoxTrick = (function() {
  var $el = $('#main'),
    $section = $el.children('section'),
    isAnimating = false,
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed('transition')],
    supportTransitions = Modernizr.csstransitions;
  var initEvents = function() {
    $section.each(function() {
      var $section = $(this);
      $section.on('click', function() {
        if( !$section.data('open') ) {
          $section.data('open', true).addClass('expand expand-top');
          $el.addClass('expand-item');
        }
      }).find('span.icon-close').on('click',function() {
        $section.data('open', false).removeClass('expand').on(transEndEventName, function(event) {
          if( !$(event.target).is('section') ) return false;
          $(this).off(transEndEventName).removeClass('expand-top');
        })
        if(  !supportTransitions ) {
          $section.removeClass('expand-top');
        }
        $el.removeClass('expand-top');
        return false;
      })
    })
  }
  var init = function() {
    initEvents();
  }
  return {init: init};
}());
$(function() {
  BoxTrick.init();
})