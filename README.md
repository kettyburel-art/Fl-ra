# Flōra PWA — Guide de déploiement

## Structure des fichiers

```
flora-pwa/
├── index.html        → App shell + toutes les pages
├── style.css         → Design system complet
├── app.js            → Logique applicative
├── manifest.json     → Identité PWA (installable)
├── sw.js             → Service Worker (offline)
├── icons/            → À créer (voir ci-dessous)
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

---

## ⚡ Déploiement GitHub Pages (recommandé)

### 1. Créer le dépôt
```bash
# Sur github.com → New repository → ex: flora-app
# Cochez "Public"
```

### 2. Upload des fichiers
```bash
git init
git add .
git commit -m "Flōra MVP v1.0"
git remote add origin https://github.com/TON_USERNAME/flora-app.git
git push -u origin main
```

### 3. Activer GitHub Pages
Settings → Pages → Source: `main` → `/root`

**URL publique :** `https://TON_USERNAME.github.io/flora-app/`

---

## 🎨 Créer les icônes (obligatoire pour PWA)

### Option simple — Génération rapide
1. Allez sur **https://favicon.io/favicon-generator/**
2. Text : « F », Background : `#2d4a3e`, Foreground : `#f7f3ee`
3. Download → renommez et placez dans `/icons/`

### Option soignée — Canva
1. Design carré 512×512
2. Fond couleur `#2d4a3e`
3. Texte Playfair Display `Flōra`
4. Export PNG → 2 tailles : 192×192 et 512×512

---

## 📱 Test installation PWA

### Chrome Desktop
1. Ouvrez l'URL GitHub Pages dans Chrome
2. Barre d'adresse → icône d'installation (⊕)
3. Cliquez « Installer »

### Android Chrome
1. Ouvrez l'URL
2. Menu ⋮ → « Ajouter à l'écran d'accueil »

### iOS Safari
1. Ouvrez l'URL
2. Partager → « Sur l'écran d'accueil »

---

## 💰 Modèle économique — Intégration paiement

### Phase 1 (actuelle) : Codes d'activation
Les codes valides sont dans `app.js` → `VALID_CODES`
```js
const VALID_CODES = ['FLORA2025', 'SJSR2025', 'BIENETRE'];
```
→ Envoi manuel par email après paiement PayPal/Stripe

### Phase 2 : Stripe Checkout (recommandé)
```html
<!-- Ajouter dans index.html -->
<script async src="https://js.stripe.com/v3/buy-button.js"></script>
<stripe-buy-button
  buy-button-id="buy_btn_XXXXXX"
  publishable-key="pk_live_XXXXXX">
</stripe-buy-button>
```
→ Stripe génère un lien de paiement → webhook → activation automatique

### Phase 3 : Backend léger (Netlify Functions)
- Validation des paiements Stripe
- Gestion des abonnements
- Envoi d'emails automatiques

---

## 🔧 Personnalisation rapide

### Changer les couleurs (style.css ligne 1-20)
```css
--green-deep:   #2d4a3e;  /* couleur principale */
--cream:        #f7f3ee;  /* fond */
--gold:         #d4a843;  /* premium */
```

### Ajouter des recettes (app.js)
```js
{
  id: 15,                          // id unique
  cat: 'dejeuner',                 // petit-dejeuner | dejeuner | diner | snack
  premium: false,                  // true = abonnés uniquement
  emoji: '🥘',
  nom: 'Nom de la recette',
  temps: '25 min',
  calories: 400,
  diff: 'Facile',
  tags: ['sg', 'sl'],              // sg=sans gluten, sl=sans lactose, vg=végétarien
  benefices: 'Description...',
  ingredients: ['...'],
  etapes: ['...']
}
```

### Modifier les codes promo
```js
const VALID_CODES = ['VOTREAPP2025', 'LANCEMENT', 'PROMO50'];
```

---

## 📊 Fonctionnalités MVP incluses

| Feature | Gratuit | Premium |
|---------|---------|---------|
| Journal bien-être | ✅ Illimité | ✅ |
| Historique journal | ✅ | ✅ |
| Recettes (accès) | ✅ 9 recettes | ✅ 14 recettes (extensible) |
| Agenda alimentaire | ✅ | ✅ |
| Générateur de menus | ✅ 3 jours | ✅ Illimité |
| Installation PWA | ✅ | ✅ |
| Mode offline | ✅ | ✅ |

---

## 🚀 Roadmap suggestions

### v1.1
- [ ] Export journal PDF (html → print)
- [ ] Rappels navigateur (Notification API)
- [ ] Partage de recettes

### v1.2  
- [ ] Synchronisation cloud (Firebase Firestore)
- [ ] Statistiques bien-être graphiques avancées
- [ ] Mode sombre

### v2.0
- [ ] Comptes utilisateurs (auth)
- [ ] Nouvelles recettes mensuelles automatiques
- [ ] Communauté & partage de menus

---

*Flōra v1.0 — Conçu avec ❤️ pour la communauté SJSR/TDAH*
