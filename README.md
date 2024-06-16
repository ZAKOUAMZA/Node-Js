Introduction à Node.js, Express et MongoDB
Ce guide de formation en backend couvre les technologies Node.js, Express et MongoDB pour créer des serveurs backend performants et évolutifs. Voici les points essentiels à connaître :

Node.js
Qu'est-ce que Node.js ?

Définition : Plateforme côté serveur utilisant le moteur JavaScript V8 de Google Chrome.
Caractéristiques :
Modèle I/O non bloquant et basé sur des événements.
Très rapide grâce au moteur V8.
Monothread avec boucle d'événements, permettant une grande scalabilité.
Pas de mise en tampon des données, sorties en morceaux.
Open source, multiplateforme, sous licence MIT.
Quand utiliser Node.js ?

Applications liées aux I/O
Applications de streaming de données
Applications temps réel intensives en données (DIRT)
Applications basées sur les API JSON
Applications à page unique (SPA)
Quand ne pas utiliser Node.js ?

Applications intensives en CPU
Configuration de l'environnement local
Éditeur de texte

Utilisez un éditeur de texte comme VSCode, Notepad (Windows), ou vim (Linux/Unix).

Installation de Node.js

Windows :

Utilisez le fichier MSI pour installer Node.js et ajoutez le chemin dans la variable PATH.

Vérification de l'installation

Commande : node -v

Exécution d'un fichier Node.js

Créez un fichier main.js avec console.log("Hello, World!") et exécutez-le avec node main.js.

Création de votre première application Node.js
Importer les modules requis
Utilisez require pour charger des modules Node.js, par exemple var http = require("http");.

Créer un serveur

Utilisez http.createServer() pour créer un serveur écoutant sur le port 8081.

Exemple :


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');

Tester le serveur

Ouvrez http://127.0.0.1:8081/ dans un navigateur pour voir le résultat.

Utilisation du terminal REPL

Démarrage

Tapez node dans la console pour ouvrir le REPL.

Commandes REPL

Expressions simples : Tapez des expressions JavaScript comme 1 + 3.

Variables : Déclarez et utilisez des variables.

Expressions multilignes : Utilisez des boucles et des blocs de code.

Commandes REPL spécifiques :

ctrl + c : Termine la commande en cours.
ctrl + c deux fois : Quitte le REPL.
ctrl + d : Quitte le REPL.
tab : Liste des commandes actuelles.
.help : Liste toutes les commandes.
.save filename : Sauvegarde la session REPL actuelle.
.load filename : Charge le contenu d'un fichier dans la session REPL.
Gestion des modules avec NPM
Installation de modules

Commande : npm install <Nom du module>
Exemple : npm install express
Installation locale vs globale

Locale : Installée dans le répertoire node_modules de l'application.
Globale : Installée pour être utilisée en ligne de commande.
Fichier package.json

Définit les propriétés d'un package.
Commande pour générer : npm init
Contient des attributs comme name, version, dependencies.
Gestion des modules

Désinstallation : npm uninstall <Nom du module>
Mise à jour : npm update <Nom du module>
Recherche : npm search <Nom du module>
Publication : npm publish
En résumé, maîtrisez Node.js pour créer des serveurs backend efficaces en utilisant un modèle non bloquant et basé sur des événements, configurez votre environnement de développement, et gérez vos dépendances avec NPM.