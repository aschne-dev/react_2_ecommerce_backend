## Backend E-commerce
Ce dépôt contient l'API Express utilisée par le projet front-end [react_2_ecommerce](https://github.com/aschne-dev/react_2_ecommerce). Elle expose toutes les routes nécessaires pour gérer produits, panier, commandes et résumé de paiement, tout en servant les assets statiques compilés dans `dist/`.

### Pile technique
- Node.js 22+, Express 4 et CORS pour l'API REST.
- Sequelize configuré en mode SQLite (fichier `database.sqlite`) avec modèles pour produits, options de livraison, panier et commandes.
- Données par défaut dans `defaultData/` chargées automatiquement lors du premier démarrage.

### Prérequis
- Node.js >= 22 et npm (ou pnpm/yarn équivalent).
- Optionnel : `nodemon` installé globalement si vous voulez un rechargement automatique (sinon utilisez le script fourni).

### Installation et exécution
1. Clonez ou téléchargez ce dépôt.
2. Installez les dépendances : `npm install`.
3. Lancez le serveur :
   - `npm run dev` démarre l'API avec `nodemon` sur `http://localhost:3000`.
   - `npm start` démarre l'API en mode production (Node simple).
4. Le serveur initialise la base s'il s'agit d'un premier démarrage et sert également `dist/index.html` pour tout chemin non-API.

### Scripts disponibles
- `npm run dev` : mode développement avec rechargement.
- `npm start` : démarre l'API (utile pour déploiement).
- `npm run zip` : crée une archive du projet (utilisé pour partager l'exercice).
- `npm test` : placeholder (aucun test automatisé pour l'instant).

### Documentation API
Toutes les routes détaillées (produits, panier, commandes, résumé de paiement, réinitialisation) se trouvent dans `documentation.md`. Vous y trouverez :
- Endpoints disponibles, paramètres (`search`, `page`, `expand`, etc.).
- Formats des requêtes/ réponses JSON.
- Comportement spécifique comme la remise à zéro du panier après une commande ou la réinitialisation via `POST /api/reset`.

### Dépannage
Des conseils supplémentaires sont regroupés dans `troubleshooting.md` (copier/coller des erreurs dans l'IA, récupérer une version saine du dépôt, etc.). En cas d'erreurs de port ou de dépendances, assurez-vous qu'aucun autre service n'occupe le port 3000 et que la base `database.sqlite` est accessible en écriture.

### Ressources utiles
- Tutoriel vidéo (Partie 1) : https://youtu.be/vBprybSmJs8
- Front-end compagnon : https://github.com/aschne-dev/react_2_ecommerce
- Documentation interne : `documentation.md`
- Guide de dépannage : `troubleshooting.md`

Bon développement !
