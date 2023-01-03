function sendMail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "thanhduckrb767@gmail.com",
        Password : "8E68E3B307E56E58C71832222EF60489B1C2",
        To : 'thanhduckrb767@gmail.com',
        From :'thanhduckrb767@gmail.com',
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