// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
export const disableScroll = function (elem, wheelEvent) {
  console.log("disableScroll");
  elem.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  elem.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  elem.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  elem.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
export const enableScroll = function (elem, wheelEvent) {
  console.log("enableScroll");
  elem.removeEventListener('DOMMouseScroll', preventDefault, false);
  elem.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  elem.removeEventListener('touchmove', preventDefault, wheelOpt);
  elem.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}