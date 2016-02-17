new Vivus('six-logo', {
  type: 'scenario',
  duration: 300
}, function (obj) {
  console.log("done");
  var nav = document.getElementById('nav');
  var mark = document.getElementById('mark');
  var shop = document.getElementById('shop-now');

  obj.el.classList.add('finished');

  setTimeout(function() {
    mark.className += ' finished';
  }, 1000);
  setTimeout(function() {
    nav.className += ' finished';
    shop.className += ' finished';
  }, 2000);


});

