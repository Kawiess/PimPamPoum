# Cahier de recettage - Individuel

### 🔷 Partie commune - Page d'accueil

##### *🧭 Navigation*

- [ ] Le menu burger ne se referme pas automatiquement après ouverture.
- [ ] Le centrage du texte dans la navbar est mal géré dans le code, ce qui crée des décalages.
- [ ] La structure de navigation varie selon les pages : manque d'uniformité globale.

##### *🎨 Design & ergonomie*

- [ ] Le bouton "Réservez" n'a pas une fonction immédiate de réservation ; il devrait être intitulé "En savoir +" pour plus de clarté.
- [ ] Le logo animé dans le footer n'a pas d'équivalent dans le header : cela nuit à la cohérence visuelle.
- [ ] Les images qui ne sont pas des liens affichent une icône de clic, ce qui induit l'utilisateur en erreur.
- [ ] La pagination du carrousel d'accueil est peu intuitive.

##### *📱 Responsif et accessibilité*

- [ ] En dessous de 992px, le texte dans le header devient trop petit.
- [ ] Le logo "Gîte Pim" déborde sur la colonne centrale entre 771px et 991px (width forcé à 200px).
- [ ] Les marges entre les sections sont irrégulières.
- [ ] La section "Expérience unique" n'est pas adaptée aux écrans mobiles (576px et moins).
- [ ] Les boutons ne sont pas assez grands pour une utilisation confortable sur tablette.

##### *🧱 Structure et sémantique*

- [ ] Manque d'homogénéité entre les structures des sections.
- [ ] Niveaux de titres non hiérarchisés (h1, h3).
- [ ] Utilisation incorrecte des structures main, container-fluid, etc., en contradiction avec les conventions Bootstrap.

##### *✍️ Contenu & rédactionnel*

- [ ] Retours à la ligne mal placés (ex. citation Billy Gaytes).
- [ ] Problèmes de ponctuation selon les résolutions (ponctuation à la ligne, absente, ou déplacée).

### 🔷 Partie spécifique

##### *🧭 Navigation*

- [ ] La structure de navigation sur la page "Kayak" diffère des autres, rompant l'uniformité du site.
- [ ] Le bouton de réservation manque de visibilité et de statut clair de CTA (Call to Action).

##### *🎨 Design global*

- [ ] Le design général de la page ne suit pas la charte graphique ru reste du site.
- [ ] Carrousel cassé : il ne s'affiche pas correctement ou ne fonctionne pas.
- [ ] Texte de présentation avec ascenseur inutile : il serait préférable d'ajuster la taille du bloc au contenu.
- [ ] Le texte est mal amené, manque de hiérarchie visuelle claire.
- [ ] Les couleurs de boutons ne respectent pas les règles d'accessibilité (contraste insuffisant).
- [ ] Réservation de kayak : aucune confirmation claire n'est fournie (ni numéro de réservation, ni message utilisateur).

##### *📱 Responsif & accessibilité*

- [ ] Page non responsive : les éléments se chevauchent ou débordent selon la taille de l'écran.
- [ ] Le design ne s'adapte pas aux écrans mobiles et tablette.
- [ ] Formulaire peu lisible sur petit écran.

##### *🧱 Structure et sémantique*

- [ ] Utilisation de JavaScript non standard pour soumettre les formulaires (manque de clarté et de maintenabilité).
- [ ] Sémantique HTML non respectée : structure trop libre et non conforme aux attentes d'un site professionnel.

##### *📄 Fonctionnalité des réservations - Réservation de kayak*

- [ ] Il est possible de sélectionner une **heure de fin antérieure à l'heure de début**, entraînant une durée négative.
- [ ] Il semble impossible de réserver le jour même.
- [ ] L'interface ne propose pas de solution lorsque le nombre de personnes ne correspondant pas aux kayaks disponibles :
	- Par exemple : si je choisis 3 personnes, aucune suggestion entre 1 kayak double + 1 simple ou 3 simples.
- [ ] **Aucun message de validation ou d'erreur** ne s'affiche.
- [ ] **Aucun numéro de réservation généré.**
- [ ] L'expérience utilisateur est globalement confuse et incomplète.

### 🧨 Tableau des bugs

| Problème | Gravité
| -------- | -------
| Réservation avec heure de fin inférieure à l'heure de début (durée négative) | 🔴 Critique
| Réservation le jour même apparemment impossible | 🔴 Critique
| Aucun retour utilisateur (confirmation, erreur, ou numéro de réservation) | 🔴 Critique
| Aucune logique de répartition pour les kayaks selon le nombre de personnes | 🔴 Critique
| Design non responsif : éléments cassés, ascenseurs, chevauchements | 🔴 Critique
| Couleurs des boutons non accessibles (contraste insuffisant) | 🟡 Important
| Utilisation non standard de JavaScript pour les formulaires | 🟡 Important
| Carrousel cassé | 🟡 Important
| Texte mal hiérarchisé et mal intégré | 🟢 Suggestion
| Absence de CTA visible et clair | 🟢 Suggestion

### ✅ Compétences

| Compétence | État
| ---------- | ----
| C1		 |
| C2		 |
| C3		 |
| C4		 |
