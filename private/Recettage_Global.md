# Cahier de recettage - site du gîte Pim

### 🎯 Objectif du document

Ce cahier de recettage global liste les **problèmes critiques à corriger, améliorations ergonomiques**, et **incohérences de structure** relevée sur l'ensemble du site.
Il vous servira de **référence pour le travail de rattrapage**, chaque apprenant doit **corriger l'intégralité du site** et **finaliser** le projet.

### 🏠 Page d'accueil - problèmes communs

##### *🧭 Navigation*

- [ ] Le **menu burger ne se referme** pas une fois ouvert.
- [ ] Le texte de la navbar semble centré mais **n'est pas aligné dans le code** → provoque des soucis en responsif.
- [ ] La **navigation varie selon les pages** : barre différente entre la page d'accueil et les pages spécifiques.

##### *🎨 Design & ergonomie*

- [ ] Le **bouton "Réservez"** devrait renommé en **"En savoir +"**, car il ne déclenche pas de réservation directe.
- [ ] Animation du logo dans le **footer uniquement**, absente du header → manque de cohérence.
- [ ] Des **icônes de clic apparaissent sur des images non interactives** → confusion utilisateur.
- [ ] La **pagination du carrousel** n'est pas intuitive.

##### *📱 Responsif et accessibilité*

- [ ] Texte trop petit à **992px**, difficile à lire.
- [ ] Le **logo déborde** sur la colonne centrale entre 771px et 991px.
- [ ] Les marges entre les sections sont **inégales**, perturbant la hiérarchie visuelle.
- [ ] La section "Expérience unique" **n'est pas adaptée au mobile** (576px et moins).
- [ ] Manque de **boutons adaptés au tactile (tablette)** → risque de "miss click".
- [ ] **Pas d'adaptation spécifique** pour les bornes de réservation.

##### *🧱 Structure et sémantique*

- [ ] Chaque section a sa propre structure → **manque d'uniformité** globale.
- [ ] Niveaux de titres non respectés (h1 / h3 mal répartis).
- [ ] Structure du DOM **nom conforme aux pratiques Bootstrap** (main, container-fluid, container-md mal utilisés).

##### *✍️ Contenu & rédactionnel*

- [ ] Problèmes de ponctuation : **phrases sans point, à la ligne selon les résolutions.**
- [ ] Exemples :
	- "Bungalow vue mer" sans ponctuation.
	- Citations à la ligne sur certaines résolutions (ex : Billy Gaytes).

### 🌐 Problèmes transversaux sur l'ensemble du site

##### *🧭 Navigation*

- [ ] **Navbar incohérente** d'une page à l'autre.
- [ ] Absence de **retour clair vers l'accueil** sur certaines pages.

##### *🎨 Design global*

- [ ] Le **design n'est pas uniformisé** : chaque module semble indépendant.
- [ ] Présence d'éléments cassés ou non alignés :
	- Cartes de présentation inégales.
	- Sections mal centrées ou écrasées.
- [ ] Certaines pages (ex : Garderie, Kayak, Bagne) **s'écartent fortement de la charte visuelle globale.**

##### *📱 Responsif*

- [ ] Plusieurs pages sont **cassées entre 681px et 1024px.**
- [ ] Formulaires ou contenus non accessibles sur mobile.
- [ ] Carrousels ou images déformées selon les tailles d'écran

##### *📄 Fonctionnalités des réservations (toutes activités)*

- [ ] **Aucun système unifié de réservation.**
- [ ] Problèmes récurrents :
	- **Pas de numéro de réservation généré.**
	- **Aucune confirmation claire (toast ou message).**
	- **Aucune validation des champs obligatoires.**
	- **Possibilité de réserver dans le passé.**
	- **Date de fin antérieure à la date de début possible.**
	- **Capacités non respectées** (plus de 15 enfants, repas au-delà des 30 couverts, etc.).
	- **Saisie libre de données invalides** (ex : 31 novembre).
	- **Aucune vérification du stock disponible** (chevaux, kayaks, chambres).
	- **Pas de rechargement automatique du formulaire après validation.**

##### *☁️ Météo*

- [ ] **Aucune intégration météo fonctionnelle** détectée sur certaines pages.
- [ ] Lorsqu'elle est présente, **elle interfère avec d'autres éléments** (ex : chevauchement avec les chevaux sur la page Randonnée).
- [ ] Le comportement météo **n'est pas harmonisé** entre les pages.

##### *🛠️ Ergonomie des formulaires*

- [ ] Les **formulaires sont souvent peu guidés**, sans info-bulle ou indication claire.
- [ ] Certains champs sont **incompréhensibles ou non expliqués** (ex : numéro de séjour).
- [ ] Le formulaire **fonctionne parfois même sans remplissage**, ce qui est bloquant.
- [ ] L'esthétique varie fortement selon les pages.

### 🧨 Tableau récapitulatif des bugs et problèmes critiques

| Problème | Gravité
| -------- | -------
| Possibilité de réserver dans le passé | 🔴 Critique
| Date de fin antérieure à la date de début | 🔴 Critique
| Pas de confirmation utilisateur (ni message, ni numéro de réservation) | 🔴 Critique
| Capacité non vérifiée ni décrémentée (chambre, repas, activités) | 🔴 Critique
| Aucun système centralisé de génération de numéros de réservation | 🔴 Critique
| Champs obligatoires non validés (réservation validée même vide) | 🔴 Critique
| Réservations possibles avec des données incohérentes (31/11, durée négative, etc.) | 🔴 Critique
| Pages de confirmation absentes ou 404 (ex : Bagne) | 🔴 Critique
| Météo absente ou dysfonctionnelle (non dynamique ou mal intégrée) | 🔴 Critique
| Design incohérent entre les pages (chartes non respectée) | 🟡 Important
| Navigation et structure DOM différentes d'une page à l'autre | 🟡 Important
| Problèmes de responsif sur toutes les résolutions intermédiaires (681px - 1024px) | 🟡 Important
| Absence d'accessibilité tactile (tablette, bornes) | 🟡 Important
| Utilisation incorrecte de _class_, _id_, et containers Bootstrap | 🟡 Important
| Contenu textuel peu homogène : fautes, guillemets inutiles, ponctuation instable | 🟢 Suggestion
| Citations défilantes trop rapides, sans attribution claire (ex : page Bagne) | 🟢 Suggestion
| Présentation "type excel" (ex : Garderie) à revoir pour plus de lisibilité | 🟢 Suggestion

### 📌 Rappels sur les exigences fonctionnelles non respectées

| Exigence du cahier des charges | Statut
| ------------------------------ | ------
| Formulaires dynamiques sans rechargement | ❌ Non respecté sur certaines pages
| Génération d'un numéro de réservation unique par type | ❌ Nom implémenté
| Intégration météo dynamique | ❌ Partielle / dysfonctionnelle
| Responsif pour smartphone + bornes | ❌ Non conforme
| Réservation filtrée par capacités et logique métier | ❌ Non implémentée
| Uniformité graphique et navigation | ❌ À corriger sur l'ensemble

### ✅ Recommandations de vos formateurs pour la suite

- **Centraliser la logique de réservation** pour éviter les divergences par activité.
- **Créer un composant formulaire unique, réutilisable,** avec :
	- Validation des champs.
	- Génération automatique de numéro.
	- Météo liée à la date.
	- Retour utilisateur unifié (toast clair).
- **Travailler sur une refonte graphique harmonisée** pour garantir une expérience fluide.
- **Corriger les problèmes de responsif** à toutes les tailles critiques (mobile, tablette, desktop intermédiaire).
- **Tester tous les parcours de réservation** avec des cas limites : dates invalides, capacité dépassée, données manquantes.
- **Ajouter des tests utilisateurs ou des retours d'expérience internes** pour guider l'interface.
