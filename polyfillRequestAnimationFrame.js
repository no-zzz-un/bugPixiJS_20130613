(function() {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    console.log('polyfill cancel/requestAnimationFrame using '+vendors[x]);
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = (
      window[vendors[x]+'CancelAnimationFrame'] ||
      window[vendors[x]+'CancelRequestAnimationFrame']
      );
  }

  if (!window.requestAnimationFrame) {
    console.log('polyfill requestAnimationFrame using setTimeout');
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    console.log('polyfill cancelAnimationFrame using clearTimeout');
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
}());
