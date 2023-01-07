# Nanswap Client Node.js and Python

Ce module Node.js et python vous permet d'envoyer des requêtes à l'API Nanswap. Vous pouvez utiliser ce module pour réaliser les opérations suivantes :

* Récupérer la liste des devises supportées par l'API (`getCurrencies`) <br>
* Récupérer un devis de conversion de devises (`getEstimate`) <br>
* Récupérer un devis de conversion de devises en sens inverse (`getEstimateReverse`) <br>
* Récupérer les limites de conversion de devises (`getLimits`) <br>
* Créer une nouvelle commande de conversion de devises (`createOrder`) <br>
* Récupérer les détails d'une commande de conversion de devises (`getOrder`) <br>
* Cette fonction retourne la liste des devises prises en charge par les partenaires de NanSwap (`getCurrenciesPartner()`) <br>
* Cette fonction retourne un devis de conversion de devises par les partenaires en utilisant les devises et le montant spécifiés en paramètres, ainsi que les réseaux de devises source et cible (`getEstimatePartner(from, to, amount, fromNetwork, toNetwork)`) <br>
* Cette fonction retourne les limites de conversion de devises par les partenaires en utilisant les devises et les réseaux de devises spécifiés en paramètres (`getLimitsPartner(from, to, fromNetwork, toNetwork)`) <br>
* Cette fonction envoie une commande de conversion de devises pour les partenaires en utilisant les devises et l'adresse de destination spécifiées en paramètres, ainsi que les réseaux de devises source et cible (`createOrderPartner(from, fromNetwork, to, toNetwork, amount, toAddress)`) <br>
* Cette fonction retourne les détails de l'ordre de conversion de devises pour les partenaires en utilisant l'identifiant de l'ordre spécifié en paramètre (`getOrderPartner(id)`) <br>

## Installation
Pour utiliser ce module, commencez par l'installer dans votre projet Node.js:
```
npm install nanswap 
npm install request
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

### `getCurrenciesPartner()`
Cette fonction permet de récupérer la liste des devises supportées par l'API de Nanswap pour les conversions avec des plateformes partenaires.

Exemple d'utilisation :
```
nanswap.getCurrenciesPartner()
```

### `getEstimatePartner(from, to, amount, fromNetwork, toNetwork)`
Récupère un devis de conversion de devises avec une plateforme partenaire en utilisant les devises, le montant et les plateformes spécifiés en paramètres.

Exemple d'utilisation :
```
nanswap.getEstimatePartner('USDT', 'XNO', 100, 'ETH', '');
```

### `getLimitsPartner(from, to, fromNetwork, toNetwork)`
Récupère les limites de conversion de devises avec une plateforme partenaire en utilisant les devises et les plateformes spécifiées en paramètres.

Exemple d'utilisation :
```
nanswap.getLimitsPartner('USDT', 'XNO', 'BSC', '');
```

### `createOrderPartner(from, fromNetwork, to, toNetwork, amount, toAddress)`
Crée une nouvelle commande de conversion de devises avec une plateforme partenaire en utilisant les devises, les plateformes et l'adresse de destination spécifiées en paramètres.

Exemple d'utilisation :
```
nanswap.createOrderPartner('USDT', 'BSC', 'XNO', '', 10, 'nano_3rksbipm1b1g64gw6t36ufc77q7mtw1uybnto4xyn1e7ae5aikyknb9fg4su');
```

### `getOrderPartner(id)`
La fonction getOrderPartner permet de récupérer les détails d'une commande de conversion de devises depuis une autre plateforme en utilisant son identifiant unique.

Exemple d'utilisation :
```
nanswap.getOrderPartner('ebdbd588bbe362')
```

## Test

```
const apiKey = 'your-api-key';

async function runDemo() {
  // Get the list of available currencies
  const currencies = await getCurrencies();
  console.log('Currencies:', currencies);

  // Get an estimate for a currency conversion
  const estimate = await getEstimate('BTC', 'ETH', 0.1);
  console.log('Estimate:', estimate);

  // Get an estimate for a reverse currency conversion
  const estimateReverse = await getEstimateReverse('ETH', 'BTC', 1);
  console.log('Estimate (Reverse):', estimateReverse);

  // Get the limits for a currency conversion
  const limits = await getLimits('BTC', 'ETH');
  console.log('Limits:', limits);

  // Create an order for a currency conversion
  const order = await createOrder(apiKey, 'BTC', 'ETH', 0.1, 'your-eth-address');
  console.log('Order:', order);

  // Get an existing order
  const retrievedOrder = await getOrder(order.id);
  console.log('Retrieved Order:', retrievedOrder);

  // Get the list of available currencies for a partner
  const partnerCurrencies = await getCurrenciesPartner();
  console.log('Partner Currencies:', partnerCurrencies);

  // Get an estimate for a currency conversion with a partner
  const partnerEstimate = await getEstimatePartner(apiKey, 'BTC', 'ETH', 0.1, 'partner-id');
  console.log('Partner Estimate:', partnerEstimate);
}

runDemo();
```
