/**
 * FLŌRA — DEFAULT RECIPE IMAGES
 * 
 * Dictionnaire d'images Unsplash magnifiques et libres de droits
 * Catégories : petit-dejeuner, brunch, dejeuner, diner, snack
 * + image générique de fallback
 * 
 * Palette : Forêt / Terre / Crème (tons doux, naturels)
 * 
 * Source : Unsplash (unsplash.com) — Licence Unsplash (libre et gratuit)
 * Optimisation : Images redimensionnées en 400x300px via unsplash.com?w=400&h=300&fit=crop
 */

const DEFAULT_RECIPE_IMAGES = {
  /* ─────────────────────────────────
     🌅 PETIT-DÉJEUNER (Doré chaleureux)
     ───────────────────────────────── */
  "petit-dejeuner": [
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1590533489535-10ee1d00c74d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1495496169671-411b4097df58?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop"
  ],

  /* ─────────────────────────────────
     🥂 BRUNCH (Rose pâle festif)
     ───────────────────────────────── */
  "brunch": [
    "https://images.unsplash.com/photo-1495799810585-f9535b390f2e?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1546518143-2a9fb8b8c03f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1501253691375-cd535d60154d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1543339494-58ecde50ae14?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
  ],

  /* ─────────────────────────────────
     ☀️ DÉJEUNER (Vert clair frais)
     ───────────────────────────────── */
  "dejeuner": [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1512621538989-15a088684cb5?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1512621537326-e1ade9ddbb28?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop"
  ],

  /* ─────────────────────────────────
     🌙 DÎNER (Violet doux apaisant)
     ───────────────────────────────── */
  "diner": [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1512621537326-e1ade9ddbb28?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  ],

  /* ─────────────────────────────────
     🍎 SNACK (Orangé énergique)
     ───────────────────────────────── */
  "snack": [
    "https://images.unsplash.com/photo-1553909764-5d4c29a78f28?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1599599810694-c6ca7d0b893d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1585609425556-4b7ac8e8847f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1599599810694-c6ca7d0b893d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1574484284002-952386c38f66?w=400&h=300&fit=crop"
  ],

  /* ─────────────────────────────────
     🌿 GÉNÉRIQUE / FALLBACK
     (Au cas où la catégorie ne matcherait pas)
     ───────────────────────────────── */
  "generic": [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1512621537326-e1ade9ddbb28?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1512621537326-e1ade9ddbb28?w=400&h=300&fit=crop"
  ]
};

/**
 * FONCTION UTILITAIRE : Obtenir une image pour une catégorie
 * 
 * @param {string} category - Catégorie de la recette (ex: 'petit-dejeuner', 'brunch')
 * @param {string} specificImage - URL d'image spécifique si la recette en a une
 * @returns {string} URL de l'image à utiliser
 */
function getRecipeImageUrl(category, specificImage = null) {
  // Si la recette a sa propre image, l'utiliser
  if (specificImage && specificImage.trim() !== '') {
    return specificImage;
  }

  // Sinon, puiser dans le dictionnaire par catégorie
  const categoryImages = DEFAULT_RECIPE_IMAGES[category] || DEFAULT_RECIPE_IMAGES['generic'];
  
  // Choisir une image aléatoire dans la catégorie (variété visuelle)
  return categoryImages[Math.floor(Math.random() * categoryImages.length)];
}

/**
 * FONCTION UTILITAIRE : Mapper une catégorie à une clé valide
 * 
 * @param {string} rawCategory - Catégorie brute
 * @returns {string} Catégorie normalisée
 */
function normalizeCategoryForImages(rawCategory) {
  const categoryMap = {
    'petit-dejeuner': 'petit-dejeuner',
    'petit_dejeuner': 'petit-dejeuner',
    'petitdejeuner': 'petit-dejeuner',
    'brunch': 'brunch',
    'dejeuner': 'dejeuner',
    'déjeuner': 'dejeuner',
    'diner': 'diner',
    'dîner': 'diner',
    'snack': 'snack',
  };

  const key = rawCategory.toLowerCase().trim();
  return categoryMap[key] || 'generic';
}
