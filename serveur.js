const http = require('http');

const serveur = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Node Wellcome  !!!!</h1>\n');
});

serveur.listen(3000, () => {
  console.log('Serveur en cours d\'exécution sur http://localhost:3000/');
});
