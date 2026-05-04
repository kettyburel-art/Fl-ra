# Flōra — Notes de version

Travail effectué entre les sessions du 28 avril et du 3 mai 2026.

**Cache PWA passé de 1.4.0 à 2.4.0** : à l'ouverture, l'app détecte qu'elle a une nouvelle version et recharge automatiquement les fichiers. Si quelque chose paraît bizarre la première fois, ferme et rouvre l'onglet.

---

## 🧪 Comment utiliser ce document lundi

Chaque section liste **ce qui a changé** suivi d'une **checklist de test**. Coche au fur et à mesure :

- ✅ ça marche comme prévu
- ⚠️ ça marche mais à ajuster
- ❌ bug à corriger

Si tu trouves un comportement bizarre, note-le avec la section concernée → on le règle ensemble.

---

## 📊 ZONE 1 — JOURNAL

### Mode rapide (nouveau)
- Bouton orange "⚡ Mode rapide · 30 secondes" en haut de l'onglet "Aujourd'hui"
- Modal compact avec 3 champs : qualité du sommeil (étoiles), douleur globale (slider 0-10), humeur (6 emojis)
- Préserve les autres champs déjà saisis (cycles, repas, médicaments…)
- En mode rapide, la douleur globale est appliquée aux 3 mesures (réveil/jour/nuit)

**Tests :**
- [ ] Le bouton orange apparaît bien en haut de "Aujourd'hui"
- [ ] Le modal s'ouvre, on voit les 3 sections
- [ ] Cliquer sur une étoile la dore + les précédentes
- [ ] Bouger le slider met à jour le grand chiffre central en temps réel
- [ ] Choisir une humeur la surligne en vert
- [ ] "Annuler" ne sauve rien
- [ ] "💾 Enregistrer" affiche un toast vert "✨ Saisie rapide enregistrée"
- [ ] Après save : retour à "Aujourd'hui", les données apparaissent dans le formulaire complet
- [ ] Cas important : si on avait déjà saisi des cycles/repas, ils ne sont **pas effacés**

### Onglet Statistiques
- Aucun changement visible côté utilisatrice — j'ai juste nettoyé du code mort en interne

**Tests :**
- [ ] L'onglet "Statistiques" affiche bien les graphiques sommeil/douleurs/humeur comme avant

### Onglet Calendrier (nouveau)
- 4ᵉ onglet entre "Statistiques" et "Historique"
- Grille mensuelle, semaine commençant lundi
- Chaque jour coloré selon score combiné douleur+qualité :
  - 🟢 Bon · 🟡 Correct · 🟠 Modéré · 🔴 Difficile · ⚪ Vide
- Emoji d'humeur visible sur chaque case si saisi
- Tap sur un jour → ouvre directement l'entrée dans "Aujourd'hui"
- Bouton ‹ › pour naviguer entre les mois
- Bilan du mois en bas : jours saisis, douleur moy, qualité moy, répartition par couleur

**Tests :**
- [ ] L'onglet "Calendrier" est visible
- [ ] Le mois courant s'affiche par défaut
- [ ] Les jours déjà saisis ont des couleurs (pas tous gris)
- [ ] Cliquer sur un jour passé ouvre son entrée
- [ ] Les flèches ‹ › changent bien de mois
- [ ] Le bilan du mois affiche des chiffres cohérents
- [ ] Les jours futurs sont non cliquables

### Confirmation avant suppression
- Cliquer sur ✕ d'un cycle de sommeil → "Supprimer ce cycle de sommeil (22:30 → 06:45) ?"
- Cliquer sur ✕ d'un repas → "Retirer le déjeuner « Saumon teriyaki » ?"

**Tests :**
- [ ] Supprimer un cycle déclenche la confirmation avec les heures
- [ ] Supprimer un repas affiche le nom de la recette dans la confirmation
- [ ] "Annuler" préserve bien le cycle/repas

### Export PDF du journal (nouveau)
- Bouton "📄 Exporter PDF" dans l'onglet "Historique"
- Si plusieurs mois de données : dialog pour choisir un mois ou tous
- Format paysage A4 — adapté au médecin (neurologue SJSR)
- Colonnes : Date · Sommeil & qualité · Humeur · Douleurs (R/J/N) · Symptômes · Médicaments · Notes
- Cartes résumé en haut : sommeil moy, qualité moy, douleur moy, jours consécutifs

**Tests :**
- [ ] Cliquer "📄 Exporter PDF" ouvre une nouvelle fenêtre/onglet
- [ ] Le navigateur propose l'impression automatiquement
- [ ] Choisir "Enregistrer en PDF" donne un PDF lisible
- [ ] Toutes les colonnes sont remplies pour les jours saisis
- [ ] Si plusieurs mois saisis : le prompt apparaît bien

---

## 🍽️ ZONE 2 — RECETTES

### Système favoris ❤️ (nouveau)
- Cœur 🤍/❤️ sur chaque carte recette en haut à droite
- Cœur dans la modale d'une recette ouverte (à gauche de la croix)
- Tap sur le cœur → toggle, animation `heartPop`
- Filtre "❤️ Favoris" dans la barre des catégories (à côté de "Snacks")
- Quand on est en mode "Favoris", message "🤍 Aucune recette en favoris pour l'instant" si vide
- Les favoris sont **boostés (+0.35)** dans le scoring du générateur intelligent
- Badge "Coup de cœur ❤️" se débloque au premier favori marqué

**Tests :**
- [ ] Le cœur apparaît sur les cartes
- [ ] Cliquer le cœur sur une carte → ❤️ + animation, sans ouvrir la recette
- [ ] Le cœur dans la modale est synchronisé avec celui de la carte
- [ ] Le filtre "❤️ Favoris" affiche uniquement tes favoris
- [ ] Cliquer sur "Toutes" ou une catégorie désactive le filtre favoris
- [ ] Les favoris persistent après fermeture/réouverture de l'app
- [ ] Au premier favori marqué : toast "Badge débloqué ! Coup de cœur"

### Onglet Compléments (correction)
- Avant : impossible de basculer sur l'onglet 💊 Compléments depuis la page Recettes (fonction manquante)
- Maintenant : ça marche

**Tests :**
- [ ] Sur la page Recettes, cliquer "💊 Compléments" affiche la liste des compléments
- [ ] Cliquer "🥗 Recettes" pour revenir fonctionne aussi

---

## 📅 ZONE 3 — AGENDA & GÉNÉRATEUR

### Générateur de menu intelligent (refonte)
Avant : génération purement aléatoire. Maintenant l'algo applique 5 contraintes :

1. **Filtres profil** — sg/sl/vg du profil + accès premium. Fallback automatique si profil trop strict + bandeau d'avertissement.
2. **Score nutritionnel par priorité** — anti-inflammatoire (oméga, curcuma…), énergie (fer, lentille…), sommeil (magnésium, sarrasin…), digestion (fibres, vg).
3. **Anti-répétition stricte** — aucune même recette 2× sur la semaine.
4. **Anti-monotonie** — pas le même type d'ingrédient principal 2 jours d'affilée (poisson-gras, légumineuse, volaille, œuf, tofu…). Même contrainte entre déjeuner et dîner du jour.
5. **Équilibre semaine sur les dîners** (durée ≥ 5j) — viser ≥ 2 poissons gras + ≥ 1 légumineuse.
6. **Boost favoris** — recettes favorites ont +0.35 sur leur score.

Affichage du **bilan du menu généré** : nombre de recettes différentes, nombre de poissons gras, nombre de légumineuses.

Le **snack** est désormais aussi importé dans l'agenda (avant : oublié).

**Tests :**
- [ ] Génère un menu sur 7 jours, priorité "anti-inflammatoire"
- [ ] Vérifier qu'aucune recette n'apparaît 2 fois
- [ ] Le bilan en haut indique au moins 2 dîners poisson gras et 1 légumineuse
- [ ] Si tu as marqué quelques recettes en favoris : elles devraient apparaître plus souvent
- [ ] Si profil sg activé : le bandeau orange d'avertissement apparaît seulement si nécessaire
- [ ] "📅 Importer dans l'agenda" importe bien les 4 repas (incluant snack) sur les jours générés

### Vue "À manger aujourd'hui" sur l'accueil (nouveau)
- Bloc visible **uniquement si ≥ 1 repas planifié aujourd'hui**
- Position : entre les 6 cartes et le conseil SJSR
- 4 slots possibles dans l'ordre : 🌅 Petit-déj · ☀️ Déjeuner · 🍎 Collation · 🌙 Dîner
- Chaque item : emoji + nom + ⏱ temps + kcal
- Tap → ouvre la fiche recette directement
- Lien "Agenda →" en haut à droite

**Tests :**
- [ ] Si rien planifié aujourd'hui : le bloc est masqué (pas affiché vide)
- [ ] Si seulement le déjeuner planifié : seul le déjeuner apparaît (pas de placeholder vides)
- [ ] L'ordre des slots est toujours chronologique
- [ ] Tap sur un item ouvre bien la fiche recette
- [ ] Si on planifie un repas dans l'agenda puis on revient à l'accueil : il apparaît

---

## 🏠 ZONE 4 — ACCUEIL

### Indicateur de saisie journal (nouveau)
Bandeau contextuel sous le streak, 4 états selon situation :

- **Caché** (avant 9h sans saisie) : silence respectueux au réveil
- 🌿 **Doux** (matin/après-midi/soir, sans saisie) : encouragement adapté à l'heure :
  - 9h-14h : "🌿 Comment s'est passée ta nuit ? Note ton ressenti"
  - 14h-20h : "☀️ Pense à noter ton journal du jour quand tu auras un moment"
  - 20h+ : "🌙 Avant la nuit, prends 2 min pour ton journal"
- 🔥 **Urgent** (série ≥ 3 jours sans saisie aujourd'hui) : "**X jours de suite** — ne casse pas ta série, prends 2 min" (fond orange, flamme animée)
- ✨ **Done** (saisi aujourd'hui) : confirmation discrète vert profond, mention de la série si ≥ 7j

Tap sur le bandeau (sauf "done") → ouvre la page Journal directement.

**Tests :**
- [ ] Avant 9h sans saisie : aucun bandeau
- [ ] Après 10h sans saisie : bandeau vert doux
- [ ] Après saisie : bandeau vert profond "✨ Journal du jour saisi"
- [ ] Si tu as déjà saisi 3 jours de suite la veille et avant-veille mais pas aujourd'hui : bandeau orange urgent avec le bon nombre de jours
- [ ] Tap sur bandeau doux/urgent → ouvre la page journal

---

## 🏅 ZONE 5 — BADGES (nouveau)

### Catalogue 11 badges
- 🌱 **Première entrée** (Démarrage)
- 🌿 **Semaine fidèle** (Régularité, 7j consécutifs)
- 🌳 **Mois fidèle** (Régularité, 30j consécutifs)
- 😴 **Bonne nuit** (Sommeil, 1× ≥ 7h qualité 4+)
- ⭐ **Sept étoiles** (Sommeil, 7 nuits qualité 4+ cumulées)
- 🦵 **Vague d'apaisement** (5j consécutifs douleur max ≤ 3)
- 🍽️ **Premier pas** (Cuisine, 1 recette planifiée)
- ❤️ **Coup de cœur** (Cuisine, 1er favori marqué)
- 🥗 **Curieuse** (Cuisine, 10 recettes différentes)
- 🌶️ **Exploratrice** (Cuisine, 30 recettes différentes)
- 📅 **Semaine planifiée** (Planification, 5j × 3 repas consécutifs)

### Architecture
- Storage `flora_badges` dans localStorage
- Vérification après saveJournal, applyMenuToAgenda, importBatchToAgenda, ouverture profil/badges, démarrage app
- **Toast** vert profond 3.5s quand un badge se débloque (emoji + titre)
- **Page "Mes badges"** depuis le profil :
  - Bandeau progression `X / 11` avec barre dorée
  - Badges groupés par catégorie
  - Verrouillés en gris avec 🔒 et hint
  - Débloqués en couleur avec date

**Tests :**
- [ ] Sur le profil, ligne "🏅 Mes badges" affiche `X / 11 débloqués →`
- [ ] Cliquer ouvre la page badges, le bandeau de progression est correct
- [ ] Les badges déjà débloqués (probable : Première entrée, Premier pas, Coup de cœur après tes tests favoris) sont bien colorés
- [ ] Les autres sont grisés avec 🔒 + hint
- [ ] Marquer un nouveau favori (si pas déjà fait) → toast "Badge débloqué ! Coup de cœur"

---

## 🐛 BUGS CORRIGÉS PENDANT L'AUDIT

### Fonctions appelées mais inexistantes (3)
- **`selectSleepChip`** : les chips de la page Batch (jour/durée) crashaient silencieusement au clic. La sélection visuelle ne marchait pas.
- **`switchRecettesTab`** : impossible de basculer sur l'onglet Compléments depuis Recettes.
- **`renderStats`** : 159 lignes de code orphelin que personne n'appelait + qui cherchait un élément DOM inexistant. Réduit à un alias défensif.

### Tests automatisés passés (audit en 20 passes)
- ✓ Toutes les recettes ont bien `ingredients`
- ✓ Tous les fichiers JS valides syntaxiquement
- ✓ Pas de `querySelector` avec template literal (piège WebView Facebook/Instagram)
- ✓ Tous les `e.douleurs.X` gardés par `if (e.douleurs)`
- ✓ HTML parfaitement équilibré
- ✓ Algorithme menu : pool très petit, profil ultra-restrictif → fallback gracieux
- ✓ Calendrier : entrée partielle → null propre, pas de crash
- ✓ Badges : journal/agenda vides → false, pas d'erreur
- ✓ Mode rapide : compatible avec calendrier, stats v2, export PDF
- ✓ Tests fonctionnels : checkBadges, renderJournalCalendar, renderBadges, generateMenu, renderTodayMeals, renderJournalNudge — tous passent

---

## 🗄️ ZONE 6 — PLACARD

### Barre de recherche (nouveau)
- Champ de recherche en haut du placard
- Filtre temps réel sur le nom des ingrédients (~200 items)
- Croix ✕ pour effacer la recherche
- Catégories vides automatiquement masquées pendant la recherche

### Ajout d'ingrédients personnalisés (nouveau)
- Bouton "+ Ajouter un ingrédient personnalisé" (style pointillé vert) en haut du placard
- Modal avec champ nom + sélecteur de catégorie
- Validation : nom non vide, ≤ 50 caractères, catégorie valide
- Détection des doublons (casse-insensible, dans liste prédéfinie ET custom)
- Auto-cochage à l'ajout (logique : tu l'ajoutes parce que tu l'as)
- Toast de confirmation "✓ « Spiruline » ajouté à 🥑 Bons gras & noix"

### Suppression d'ingrédients personnalisés (nouveau)
- Les items custom ont une bordure pointillée + petite croix rouge à droite
- Clic sur la croix → confirmation "Supprimer « X » du placard ?"
- L'item est retiré et décoché s'il était coché
- Stockage séparé `flora_placard_custom` (la liste prédéfinie reste intacte)

### Alertes de cohérence Flōra (nouveau)
Quand tu ajoutes un ingrédient personnalisé qui contredit les principes anti-inflammatoires sans gluten / sans laitage animal, une alerte de confirmation s'affiche. **Tu peux toujours valider** (par exemple si tu cuisines pour quelqu'un d'autre), mais tu es prévenue.

3 niveaux de détection :
- 🟥 **Bloquant** — gluten (blé, semoule, pâtes…) ou lait animal (beurre, yaourt vache, fromage…). Message ferme : "Flōra est conçue pour une alimentation sans gluten et sans laitage animal."
- 🟧 **Inflammatoire** — sucres raffinés, charcuterie, friture, glutamate. Message : "Ce type d'aliment peut aggraver les inflammations chroniques (SJSR, douleurs)."
- 🟨 **Info** — caféine, alcool. Message doux : "À consommer avec modération si tu es sensible."

Les exceptions intelligentes sont gérées : "Lait de coco", "Beurre d'amande", "Yaourt de soja", "Pâtes de riz", "Pain sans gluten", "Sirop d'érable", "Levure de bière", "Levure maltée", "Margarine végétale", "Pamplemousse rose", "Gingembre" ne déclenchent **pas** d'alerte. Les alternatives entre parenthèses (« tofu (ou feta) ») sont aussi ignorées.

### Audit qualité des 175 recettes existantes (nouveau)
Toutes les recettes ont été passées au crible de la fonction `checkFloraCompat`. Avant : 55 alertes (mélange faux positifs + vraies anomalies). Après corrections de la fonction et des recettes : **0 alerte bloquante, 0 alerte inflammatoire, 1 alerte info légitime** (vin rouge en cuisson recette 170).

Anomalies corrigées dans la base de recettes :
- **Recette 23** « Biscuits noix-châtaigne » → renommée « Biscuits SG noix-châtaigne »
- **Recette 26** « Pains d'épices SG » → sucre roux remplacé par sucre de coco
- **Recette 29** « Biscuits salés » → renommée « Biscuits SG salés »
- **Recette 37** « Mini cakes banane-chocolat » → bouchon de rhum remplacé par extrait de vanille (rhum proposé en alternative)
- **Recette 47** « Penne coulis poivrons » → tofu mis avant feta (alternative)
- **Recette 102** « Pain paléo » → renommée « Pain SG paléo »
- **Recette 168** « Cake poulet-estragon » → version SL par défaut (crème de soja, levure maltée + fromage végétal), version originale Sophie Dudemaine en variante dans les bénéfices, tag `sl` ajouté
- **Recette 170** « Chou-fleur sicilienne » → parmesan râpé remplacé par levure maltée
- **Recette 175** « Brownie tiramisu » → beurre remplacé par beurre de coco, sucre par sucre de coco

**Tests :**
- [ ] Tenter d'ajouter "Pain complet" → alerte rouge bloquant
- [ ] Tenter "Saucisson" → alerte orange inflammatoire
- [ ] Tenter "Café arabica" → alerte jaune info
- [ ] Tenter "Lait de coco" → aucune alerte (exception)
- [ ] Tenter "Beurre de cacahuète" → aucune alerte
- [ ] Tenter "Yaourt de soja" → aucune alerte
- [ ] Tenter "Gingembre frais" → aucune alerte (faux positif évité)
- [ ] Tenter "Pamplemousse rose" → aucune alerte
- [ ] Confirmer une alerte → l'ingrédient s'ajoute quand même
- [ ] Recette 175 (Brownie tiramisu) : vérifier qu'il y a bien "beurre de coco" dans les ingrédients
- [ ] Recette 168 (Cake poulet-estragon) : vérifier le tag sl + crème de soja

---

## 🎨 ZONE 7 — VISUEL & ILLUSTRATIONS

### Halos colorés sur les emojis de recettes (nouveau)
Chaque catégorie a maintenant son ambiance chromatique :
- 🌅 **Petit-déjeuner** → halo doré chaleureux
- 🥂 **Brunch** → halo rose pâle festif
- ☀️ **Déjeuner** → halo vert clair frais
- 🌙 **Dîner** → halo violet doux apaisant
- 🍎 **Snack** → halo orangé énergique

Repérage visuel instantané dans la liste des 175 recettes. Léger effet d'ombre douce sous chaque emoji pour plus de relief.

### Hero de la modale recette (nouveau)
Quand tu ouvres une recette, un **bandeau coloré** dégradé en haut occupe maintenant toute la largeur. L'emoji est affiché en très grand (4.4rem au lieu de 3rem) avec une ombre portée douce et un halo lumineux radial. Le titre de la recette en blanc-vert sur le bandeau coloré assorti à la catégorie.

### Illustrations SVG des états vides (nouveau)
À la place des emojis bruts, les états vides affichent maintenant de petites illustrations vectorielles cohérentes avec l'identité botanique Flōra :

- **Aucun favori** → branche stylisée avec deux feuilles + cœur rosé en haut + étincelles dorées
- **Aucun repas planifié** → assiette avec couverts décoratifs + étoiles dorées
- **Aucune entrée journal / historique** → carnet ouvert avec lignes d'écriture + petite plume

Chaque illustration flotte doucement (animation de 4 secondes en boucle). Style minimaliste à un trait, palette Flōra (vert profond + crème + doré + touches rosées).

**Tests :**
- [ ] Sur la liste des recettes, tu vois différentes nuances de couleurs selon les catégories
- [ ] Filtre par catégorie "Dîners" → uniquement des halos violets
- [ ] Ouvrir une recette → bandeau coloré en haut avec emoji géant
- [ ] Le bandeau a la bonne couleur selon la catégorie (déjeuner = vert, snack = orange…)
- [ ] Filtre "❤️ Favoris" sans favoris → illustration branche+cœur (pas juste un emoji 🤍)
- [ ] Onglet Historique du journal vide → illustration carnet ouvert

---

## 📖 ZONE 8 — MES RECETTES

### Page "Mes recettes" (nouveau, gros morceau)
Tu peux maintenant **créer tes propres recettes depuis l'app** sans repasser par moi. Elles sont automatiquement intégrées au pool de recettes Flōra.

**Accès** : Profil → 📖 « Mes recettes »

**Création / édition** : modal complet avec tous les champs
- Nom de la recette (obligatoire, ≤ 80 caractères)
- Sélecteur d'emoji (52 emojis cuisine au choix, fond aux couleurs Flōra)
- Catégorie (Petit-déj / Brunch / Déjeuner / Dîner / Snack)
- Temps, calories, difficulté
- Tags : Sans gluten · Sans lactose · Végétarien
- Ingrédients (un par ligne, au moins 1)
- Étapes (une par ligne, au moins 1)
- Bénéfices nutritionnels (facultatif)

**Validation des ingrédients par `checkFloraCompat`** : si un ingrédient ou le nom contient un mot-clé hors-contexte (gluten, laitage animal, sucre raffiné, alcool…), une alerte avec confirmation s'affiche. Les exceptions intelligentes sont gérées (lait de coco, pâtes de riz, levure de bière, etc.).

### Intégration automatique dans tout l'écosystème
- ✅ Apparaissent dans la **recherche** des recettes
- ✅ Disponibles dans le **générateur de menu intelligent** (avec scoring identique aux autres)
- ✅ Peuvent être marquées en **favoris** (cœur ❤️)
- ✅ Comptées dans le **compteur** "X recettes" de la page Recettes
- ✅ Disponibles dans la **liste de courses** de l'agenda
- ✅ Affichées avec **halos colorés** selon la catégorie comme les recettes officielles
- ✅ Suppression d'une recette nettoie automatiquement les favoris liés

**Architecture technique** (pour info) : IDs perso à partir de 100000 pour ne jamais entrer en collision avec les 175 recettes officielles. Stockage `localStorage.flora_my_recettes` séparé. À chaque démarrage, fusion automatique dans le tableau global `RECETTES`.

**Tests :**
- [ ] Profil → "📖 Mes recettes" affiche la page (vide au départ avec illustration)
- [ ] Bouton "+ Créer ma première recette" → modal s'ouvre
- [ ] Remplir le minimum (nom + 1 ingrédient + 1 étape) → bouton "💾 Créer" fonctionne
- [ ] La recette créée apparaît dans la liste avec son emoji et halo
- [ ] Aller sur la page Recettes principale → la recette perso y est avec halo coloré
- [ ] Le compteur en haut de la page Recettes a augmenté de 1
- [ ] Cliquer la recette perso ouvre la modale détaillée comme une recette normale
- [ ] Marquer en favori avec ❤️ fonctionne
- [ ] Tenter d'ajouter "100g beurre demi-sel" en ingrédient → alerte rouge bloquante
- [ ] Confirmer l'alerte → la recette se crée quand même
- [ ] Bouton ✎ sur la carte perso → modal d'édition rempli
- [ ] Bouton × sur la carte → confirmation puis suppression
- [ ] Générer un menu de 7 jours → la recette perso peut apparaître si conditions remplies
- [ ] Persistance : fermer/rouvrir l'app, les recettes perso sont toujours là

---

## 📌 EN ATTENTE / NON FAIT

Idées discutées mais pas implémentées (à voir si pertinentes après tes tests) :

- **Mode "rapide" du journal sans étoile/slider** — version encore plus minimaliste (juste 3 emojis humeur + bouton "Tout va bien" ?). À évaluer après usage du mode rapide actuel.
- **Notifications push** pour rappel saisie journal — nécessite la permission utilisateur, à voir si tu en veux.
- **Vue calendrier des badges** — voir quand tu as débloqué chaque badge sur une timeline.

---

## ✅ CHECKLIST PRIORITAIRE LUNDI

Si tu as peu de temps, teste ces 9 points en priorité :

1. [ ] L'app s'ouvre sans erreur après mise à jour automatique du cache
2. [ ] Mode rapide → enregistre une saisie test
3. [ ] Onglet Calendrier → vérifier qu'il existe et que les données apparaissent
4. [ ] Cœur sur une recette → toggle marche
5. [ ] Filtre "❤️ Favoris" → affiche bien les favoris
6. [ ] Générateur de menu 7 jours → vérifier le bilan en haut
7. [ ] Page "Mes badges" depuis le profil → progression cohérente
8. [ ] Export PDF du journal → fichier lisible
9. [ ] Placard : recherche + ajout d'un ingrédient perso (ex: "Spiruline")

Si ces 9 points passent, le reste devrait suivre.

---

*Document généré le 3 mai 2026.*
