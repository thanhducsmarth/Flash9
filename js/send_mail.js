function sendMail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "f9.flash9@gmail.com",
        Password : "E8F8AC731D034EBAFFA3CB3B2C1573C0C8C4",
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


