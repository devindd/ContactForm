document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM!');

  var form = document.querySelector('.form'); // wyszukuje formularz
  var error = document.querySelector('.error-message');
  var success = document.querySelector('.success-message');
  var button = document.querySelector('.button');

  form.addEventListener( 'submit', function(event){ //blokujemy domyślne klikniecie
    event.preventDefault();
    error.innerHTML = ''; // resetuje komunikaty

  var name = this.elements[0].value; //this to jest form(pobieramy kolejne wartości z tablicy form)
  var surname = this.elements[1].value;
  var phone = this.elements[2].value;
  var email = this.elements[3].value;
  var agree = this.elements[4].checked; // checkbox, interesuje czy jest zaznaczone czy nie.


  if(name.length <= 2) {
      error.innerHTML +='<p>Twoje imię jest za krótkie!</p>';
  }

  if(surname.length <= 2) {
      error.innerHTML +='<p>Twoje nazwisko jest za krótkie!</p>';
  }

  if(phone.length <= 8 ) {
      error.innerHTML +='<p>Numer telefonu jest za krótki!</p>';
  }

  if(phone.length > 9 ) {
      error.innerHTML +='<p>Numer telefonu jest za długi!</p>';
  }

  if(email.indexOf("@") < 0)
      error.innerHTML +='<p>E-mial musi miec znak @ !</p>';

  if(!agree) {
    error.innerHTML +='<p>Najpierw wyraź zgodę!</p>';
  }

  if(error.innerHTML !== '') { // jeśli dane są OK to wysyła
    valid = false;
  }

  if(error.innerHTML == '') {
    success.innerHTML +='<p>Poprawnie wysłano dane!</p>';
  }


  });


});
