const nodemailer = require('nodemailer');

const transporteur = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'camden.ward@ethereal.email',
        pass: '8ZreT4RbjX2d4saaaaaaaaybSrP'
    }
});


  let optionsEmail = {
    from: 'camden.ward@ethereal.email',
    to: 'amzazakou@gmail.com',
    subject: 'Email de test avec Ethereal amza',
    text: 'Bonjour depuis Node.js avec Ethereal !',
    html: '<h1>Bonjour depuis Node.js avec Ethereal Amza!</h1>'
  };

  transporteur.sendMail(optionsEmail, (erreur, info) => {
    if (erreur) {
        return console.log(erreur);
    }
    console.log('Email envoyé :', info.response);

    console.log('URL de prévisualisation :', nodemailer.getTestMessageUrl(info));
});