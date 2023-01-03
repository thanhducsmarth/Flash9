function sendMail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "thanhduckrb767@gmail.com",
        Password : "8E68E3B307E56E58C71832222EF60489B1C2",
        To : 'thanhduckrb767@gmail.com',
        From :'thanhduckrb767@gmail.com',
        ReplayTo:  document.getElementById('email').value,
        Subject : "Chào",
        Body : "Heloo"
    }).then(
      message => alert(message)
    );
}

// them@website.com