window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var jsonData = urlParams.get("data");
  
    var formData = JSON.parse(decodeURIComponent(jsonData));
  
    console.log(formData);
    
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
      <div class="form-data">
        <p><strong>Имя:</strong> <span id="name">${formData.name}</span></p>
        <p><strong>Email:</strong> <span id="email">${formData.email}</span></p>
        <p><strong>Сообщение:</strong> <span id="message">${formData.message}</span></p>
      </div>
    `;
  };