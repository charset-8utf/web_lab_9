var form = document.getElementById('form');

function retrieveFormValue(event) {
  event.preventDefault();

  var name = form.querySelector('[name="name"]'),
    email = form.querySelector('[name="email"]'),
    message = form.querySelector('[name="message"]');

    var values = {
    name: name.value,
    email: email.value,
    message: message.value
  };

  var jsonData = JSON.stringify(values);
  window.location.href = "result.html?data=" + encodeURIComponent(jsonData);
}

form.addEventListener('submit', retrieveFormValue);