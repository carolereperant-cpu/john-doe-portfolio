# Portfolio de John Doe - Développeur web full stack

## Description

Ce projet est le portfolio professionnel de **John Doe**, étudiant en développement web au Centre Européen de Formation (CEF). Il a été réalisé dans le cadre de la formation de développeur web, afin de présenter ses compétences, ses services et ses réalisations sur le marché de l'emploi.

Le site est développé avec **React.js** et **Bootstrap 5**, avec un CSS personnalisé pour les effets graphiques.

## Prérequis

- [Node.js](https://nodejs.org/) v18 ou supérieur
- [npm](https://www.npmjs.com/) v9 ou supérieur (inclus avec Node.js)
- Un accès internet (pour charger Bootstrap, Bootstrap Icons et la police Nunito Sans via CDN)

## Installation

1. **Cloner le repository**

```bash
git clone https://github.com/votre-username/john-doe-portfolio.git
cd john-doe-portfolio
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm start
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
```

Les fichiers de production sont générés dans le dossier `build/`.

## Structure du projet

```
john-doe-portfolio/
├── public/
│   └── index.html           # HTML avec meta SEO, Bootstrap et Google Fonts
├── src/
│   ├── assets/
│   │   └── images/          # Images du projet
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js    # Navbar Bootstrap responsive
│   │   │   └── Footer.js    # Pied de page 3 colonnes
│   │   ├── pages/
│   │   │   ├── Home.js      # Page d'accueil
│   │   │   ├── Services.js  # Page services
│   │   │   ├── Portfolio.js # Page portfolio
│   │   │   ├── Contact.js   # Page contact
│   │   │   └── MentionsLegales.js
│   │   └── ui/
│   │       ├── GitHubModal.js  # Modale profil GitHub
│   │       └── ScrollToTop.js  # Retour en haut au changement de route
│   ├── styles/
│   │   └── index.css        # Styles globaux personnalisés
│   ├── App.js               # Routing principal
│   └── index.js             # Point d'entrée React
├── package.json
└── README.md
```