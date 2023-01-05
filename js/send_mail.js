function sendMail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "f9.flash9@gmail.com",
        Password : "D9B62694B056B05C65256917130B71CB6E5A",
        To : 'f9.flash9@gmail.com',
        From :'f9.flash9@gmail.com',
        ReplayTo:  document.getElementById('email').value,
        Subject : "Chào",
        Body : "Name: " +document.getElementById('name_form').value
            + "<br> Email: " + document.getElementById('email').value
            + "<br> Phone: " + document.getElementById('phone_form').value
            + "<br> Message: " + document.getElementById('message').value
    }).then(
      message => alert("Gửi thành công")
    );
}

// them@website.com


