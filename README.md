📝 Todo App React
Une application de gestion de tâches moderne et intuitive construite avec React, TypeScript et Tailwind CSS. Organisez vos tâches par priorité et gérez votre productivité efficacement.
    
✨ Fonctionnalités
🎯 Gestion des tâches
•	Ajout de tâches avec saisie intuitive
•	Système de priorités : Urgente, Moyenne, Basse
•	Suppression individuelle ou en lot
•	Sélection multiple avec cases à cocher
🔍 Filtrage et organisation
•	Filtres par priorité avec compteurs en temps réel
•	Vue "Tous" pour afficher toutes les tâches
•	Interface responsive adaptée à tous les écrans
💾 Persistance des données
•	Sauvegarde automatique dans le localStorage
•	Récupération des données au redémarrage de l'application
•	Aucune perte de données lors de la fermeture du navigateur
🎨 Interface utilisateur
•	Design moderne avec Tailwind CSS
•	Icônes Lucide React pour une meilleure UX
•	Feedback visuel (tâches barrées quand sélectionnées)
•	États de boutons (désactivation intelligente)
🚀 Installation et démarrage
Prérequis
•	Node.js (version 14 ou supérieure)
•	npm ou yarn
Installation
# Cloner le repository
git clone https://github.com/votre-username/todo-app-react.git

# Naviguer dans le dossier du projet
cd todo-app-react

# Installer les dépendances
npm install

# Ou avec yarn
yarn install
Démarrage en développement
# Lancer le serveur de développement
npm start

# Ou avec yarn
yarn start
L'application sera accessible sur http://localhost:3000
Build pour la production
# Créer un build optimisé
npm run build

# Ou avec yarn
yarn build
🛠️ Technologies utilisées
Technologie	Version	Usage
React	18+	Framework principal
TypeScript	5+	Typage statique
Tailwind CSS	3+	Styles et responsive design
Lucide React	Latest	Icônes modernes
Vite/CRA	-	Build tool
📁 Structure du projet
src/
├── components/
│   ├── TodoItem.tsx      # Composant individuel de tâche
│   └── ...
├── types/
│   └── index.ts          # Types TypeScript
├── App.tsx               # Composant principal
├── App.css              # Styles personnalisés
└── main.tsx             # Point d'entrée
🎯 Utilisation
Ajouter une tâche
1.	Saisissez le texte de votre tâche dans le champ de saisie
2.	Sélectionnez la priorité (Urgente, Moyenne, Basse)
3.	Cliquez sur "Ajouter"
Filtrer les tâches
•	Utilisez les boutons de filtre pour afficher les tâches par priorité
•	Le compteur indique le nombre de tâches dans chaque catégorie
Gérer les sélections
•	Cochez les cases pour sélectionner une ou plusieurs tâches
•	Utilisez "Finir la sélection" pour supprimer toutes les tâches sélectionnées
•	Le bouton se désactive automatiquement quand aucune tâche n'est sélectionnée
Supprimer des tâches
•	Suppression individuelle : Cliquez sur l'icône poubelle
•	Suppression multiple : Sélectionnez les tâches et cliquez "Finir la sélection"
🎨 Personnalisation
Couleurs des priorités
Les priorités utilisent un code couleur intuitif :
•	🔴 Urgente : Rouge (badge-error)
•	🟡 Moyenne : Jaune (badge-warning)
•	🟢 Basse : Vert (badge-success)
Styles Tailwind personnalisables
Modifiez les classes dans les composants pour adapter l'apparence :
// Exemple dans TodoItem.tsx
className="btn btn-primary"  // Bouton principal
className="badge badge-error" // Badge urgent
🔧 Scripts disponibles
# Développement
npm start          # Démarre le serveur de développement
npm run build      # Build de production
npm run test       # Lance les tests (si configurés)
npm run lint       # Vérifie le code avec ESLint
📱 Responsive Design
L'application est optimisée pour tous les appareils :
•	Desktop : Interface complète avec tous les éléments visibles
•	Tablet : Adaptation des espacements et tailles
•	Mobile : Navigation tactile optimisée
🔮 Améliorations futures
•	[ ] Mode sombre/clair
•	[ ] Drag & drop pour réorganiser les tâches
•	[ ] Dates d'échéance
•	[ ] Catégories personnalisées
•	[ ] Synchronisation cloud
•	[ ] Notifications push
•	[ ] Export/Import des données
•	[ ] Recherche textuelle
•	[ ] Statistiques d'utilisation
🤝 Contribution
Les contributions sont les bienvenues ! Pour contribuer :
1.	Fork le projet
2.	Créez une branche pour votre fonctionnalité (git checkout -b feature/nouvelle-fonctionnalite)
3.	Committez vos changements (git commit -m 'Ajouter nouvelle fonctionnalité')
4.	Push vers la branche (git push origin feature/nouvelle-fonctionnalite)
5.	Ouvrez une Pull Request
📧 Contact
•	Email : mamadoumodoudiop20@gmail.com

