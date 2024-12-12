# ThreatScope - Dashboard Actualité Cyber 🛡️💻

## Description 📜

Ce projet consiste en une application web dédiée à la centralisation de l’actualité cybersécurité, permettant aux utilisateurs de consulter des informations provenant de multiples sources sélectionnables en fonction de leurs préférences. Ces sources d'actualités sont intégrées via différents mécanismes tels que les flux RSS, les appels API et le scraping de sites web.

L'application est divisée en trois parties distinctes :

- **Frontend** : Interface utilisateur construite avec React et Material-UI (MUI), permettant aux utilisateurs de consulter les informations de manière interactive et intuitive.
- **Backend** : Serveur Node.js avec Express.js, qui gère la logique métier, les requêtes API et la communication avec la base de données.
- **Base de données** : MySQL, pour stocker les données essentielles à l’application.

Le projet a été conçu pour être facilement conteneurisé avec **Docker** et déployé sur **Kubernetes**, garantissant ainsi une gestion optimisée des ressources et une scalabilité pour un futur développement.

## Prérequis 🛠️

Avant de commencer, assurez-vous que les outils suivants sont installés sur votre machine :

- **Docker Desktop** : Pour la gestion des conteneurs et l’orchestration des services.
- **Kubernetes (Minikube et kubectl)** : Pour le déploiement de l’application sur un cluster local.
- **Node.js** : Nécessaire pour l'exécution du backend.
- **Yarn** : Utilisé pour gérer les dépendances JavaScript du projet.

L’application a été testée sous **Windows**. Il ne devrait pas y avoir de problème pour faire fonctionner cette application sur **Linux** ou **MacOS**.

## Déploiement local avec Docker 🐳

Pour lancer l'application en local à l'aide de Docker, exécutez la commande suivante dans le répertoire racine du projet. Cela permettra de créer les images Docker et de démarrer les services définis dans le fichier docker-compose.yml.

```bash
docker-compose up --build
```

# Déploiement avec Kubernetes ☸️

Pour déployer l'application sur un cluster Kubernetes, vous devez d'abord configurer un cluster Kubernetes local avec Minikube ou sur une plateforme cloud.
```bash
minikube start
```

Ensuite, déployer l'application automatiquement en lançant le fichier de déploiement automatisé :
```bash
cd kubernetes
deploy_app.bat
```

Une fois le déploiement terminé, vous pouvez vérifier l'état des pods et services Kubernetes avec : 
```bash
kubectl get pods
kubectl get svc
```

Si vous n'avez eu aucun problème, démarrez l'application :
```bash
minikube service frontend --url
```

## Conclusion 🎯
Avec ThreatScope, vous bénéficiez d’une application web flexible, facile à déployer et à mettre à l’échelle. Grâce à l’utilisation de Docker et Kubernetes, vous pouvez gérer efficacement les ressources et garantir une performance optimale pour un avenir en pleine croissance. 🚀

Dans l'état actuel, l'application ne propose pas encore les outils de scraping, appels de flux RSS et d'API mais cela est en développement. ⏳