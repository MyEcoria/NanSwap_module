# Nanswap Client Node.js

Ce module Node.js vous permet d'envoyer des requêtes à l'API Nanswap. Vous pouvez utiliser ce module pour réaliser les opérations suivantes :

* Récupérer la liste des devises supportées par l'API (`getCurrencies`) <br>
* Récupérer un devis de conversion de devises (`getEstimate`) <br>
* Récupérer un devis de conversion de devises en sens inverse (`getEstimateReverse`) <br>
* Récupérer les limites de conversion de devises (`getLimits`) <br>
* Créer une nouvelle commande de conversion de devises (`createOrder`) <br>
* Récupérer les détails d'une commande de conversion de devises (`getOrder`) <br>

## Installation
Pour utiliser ce module, commencez par l'installer dans votre projet Node.js:
```
npm install nanswap 
```

## Utilisation
Pour utiliser ce module dans votre code, importez-le en ajoutant cette ligne en haut de votre fichier:
```
const nanswap = require('nanswap'); 
```

Vous pouvez maintenant appeler les fonctions de ce module pour envoyer des requêtes à l'API Nanswap. Voici un exemple d'utilisation de la fonction `getCurrencies`:
```
nanswap.getCurrencies(); 
```

## Description
Voici une description de chaque fonction proposée par ce module :
<br>
### `getCurrencies()`
Cette fonction envoie une requête GET à l'API Nanswap pour récupérer la liste des devises supportées.

Exemple d'utilisation :
```
nanswap.getCurrencies();
```

### `getEstimate(from, to, amount)`
Cette fonction envoie une requête GET à l'API Nanswap pour récupérer un devis de conversion de devises.

* `from` : la devise source (par exemple, XNO pour Nano) <br>
* `to` : la devise cible (par exemple, BAN pour Banano) <br>
* `amount` : le montant à convertir <br>

Exemple d'utilisation :
```
nanswap.getEstimate('XNO', 'BAN', 10);
```

### `getEstimateReverse(from, to, amount)`
Cette fonction envoie une requête GET à l'API Nanswap pour récupérer un devis de conversion de devises en sens inverse.

* `from` : la devise cible (par exemple, BAN pour Banano)
* `to` : la devise source (par exemple, XNO pour Nano)
* `amount` : le montant cible à convertir

Exemple d'utilisation :
```
nanswap.getEstimateReverse('XNO', 'BAN', 1650);
```

### `getLimits(from, to)`
Cette fonction envoie une requête GET à l'API Nanswap pour récupérer les limites de conversion de devises.

* `from` : la devise source (par exemple, XNO pour Nano)
* `to` : la devise cible (par exemple, BAN pour Banano)

Exemple d'utilisation :

```
nanswap.getLimits('XNO', 'BAN');
```

### `createOrder(apiKey, from, to, amount, toAddress)`
Cette fonction envoie une requête POST à l'API Nanswap pour créer une nouvelle commande de conversion de devises.

* `apiKey` : votre clé API Nanswap
* `from` : la devise source (par exemple, XNO pour Nano)
* `to` : la devise cible (par exemple, BAN pour Banano)
* `amount` : le montant à convertir
* `toAddress` : l'adresse de destination de la devise cible

Exemple d'utilisation :
```
nanswap.createOrder('API_KEY', 'XNO', 'BAN', 10, 'ban_1f99kwxmkq4zquqwfs3qjznwjsq6s7t6pw6qhmnqmmiq5uofirzbtajhg63g');
```

### `getOrder(id)`
Cette fonction envoie une requête GET à l'API Nanswap pour récupérer les détails d'une commande de conversion de devises. Cette fonction retourne les détails de la commande, tels que son statut et le montant converti.

* `id` : l'ID de la commande à récupérer

Exemple d'utilisation :
```
nanswap.getOrder('iIt8VosbQGV');
```
