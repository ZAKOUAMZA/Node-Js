const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node amza', (err) => {
  if (err) throw err;
  console.log('Fichier créé avec succès!');
});


fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Données de hello.txt :', data);
});
