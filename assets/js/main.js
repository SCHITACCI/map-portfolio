window.addEventListener("DOMContentLoaded", function() {

  // base
  const bodyEl = document.body;
  const cvButton = document.getElementById('cv-button');
  const activeClass = 'open-cv';

  var p = function(x) {
    console.log(x);
  };

  var toggleClass = function(){
    if (bodyEl.classList) {
      bodyEl.classList.toggle(activeClass);
    } else {
      var classes = bodyEl.className.split(' ');
      var existingIndex = classes.indexOf(activeClass);

      if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
      else
        classes.push(activeClass);

      bodyEl.className = classes.join(' ');
    }
  };


  var toggleClassFun = function(element, ListenerType, madeEvent) {
    if(element) {
      element.addEventListener('click' , madeEvent, false);
    } else {
      p(element + 'not found');
    }
  };


  toggleClassFun(cvButton, 'click', toggleClass);

}, false);
