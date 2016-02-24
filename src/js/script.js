var mark = document.getElementById('mark');
var shop = document.getElementById('shop-now');

new Vivus('six-logo', {
  type: 'scenario',
  duration: 300,
  pathTimingFunction: Vivus.EASE_OUT
}, function (obj) {
  obj.el.classList.add('finished');
  mark.className += ' finished';

  setTimeout(function() {
    shop.className += ' finished';
  }, 500);
});
