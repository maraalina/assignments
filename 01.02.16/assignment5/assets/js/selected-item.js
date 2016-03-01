(function () {

  var money_btn = document.getElementsByClassName('money-btn');
  var len_money= money_btn.length;
  var payment_btn = document.getElementsByClassName("payment-btn");
  var len_payment = payment_btn.length;

  for (var i=0; i<len_money; i++) {
    money_btn[i].addEventListener('click', number_click);
  }
  for (var i=0; i<len_payment; i++) {
    payment_btn[i].addEventListener('click', payment_click);
  }



  function number_click() {
    var money_btn = document.getElementsByClassName("money-btn");
    for (var k=0; k<money_btn.length; k++) {
      if(money_btn[k].classList.contains('active-money-btn')) {
        money_btn[k].classList.remove('active-money-btn');
      }
    }
    // console.log(event.currentTarget.innerText);
    event.currentTarget.classList.add('active-money-btn');
    document.getElementById("big-sum").innerText = event.currentTarget.innerText.replace('$', '.00$');
  }

  function payment_click() {
    var payment_btn = document.getElementsByClassName("payment-btn");
    for (var k=0; k<payment_btn.length; k++) {
      if(payment_btn[k].classList.contains('active-payment-btn')) {
        payment_btn[k].classList.remove('active-payment-btn');
        payment_btn[k].classList.remove('arrow_box');
      }
    }
      event.currentTarget.classList.add('active-payment-btn');
      event.currentTarget.classList.add('arrow_box');
  }

}());
