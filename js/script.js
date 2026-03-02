function sendToWhatsApp() {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var service = document.getElementById("service").value;
    var message = document.getElementById("message").value;

    var whatsappNumber = "27793352699";

    var url = "https://wa.me/" + whatsappNumber + "?text="
    + "Hello MARULA MPHAMBANE JAMES LUBISI (PTY) LTD,%0A"
    + "Name: " + name + "%0A"
    + "Phone: " + phone + "%0A"
    + "Service Needed: " + service + "%0A"
    + "Message: " + message;

    window.open(url, '_blank');
      }
