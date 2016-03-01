(function () {

  var ele = document.getElementsByClassName('footer-green-col');
  var len = ele.length;

  for (var i=0; i<len; i++) {
    ele[i].addEventListener('click', shoe_click);
  }

  function shoe_click() {
    // console.log("shoe f");
    var elements = document.getElementsByClassName("footer-green-col");
    for (var k=0; k<elements.length; k++) {
      if(elements[k].classList.contains('active-selected-item')) {
        elements[k].classList.remove('active-selected-item');
      }
    }
    event.currentTarget.classList.add('active-selected-item');
  }

}());
