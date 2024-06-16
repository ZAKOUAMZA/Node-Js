const generatePassword = require('generate-password');


const motDePasse = generatePassword.generate({
  length: 10,
  numbers: true
});

console.log('Mot de passe généré :', motDePasse);
