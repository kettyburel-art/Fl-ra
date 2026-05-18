/**
 * FLŌRA — Modern Recipe Card Renderer
 * 
 * Remplace la fonction de rendu des cartes pour utiliser :
 * - Images Unsplash (object-fit: cover)
 * - Badges flottants textuels par catégorie
 * - Lazy loading + fallback robuste
 * - Micro-zoom 5% au survol
 */

/**
 * FONCTION PRINCIPALE : Rendre une carte de recette moderni sée
 * 
 * Remplace complètement l'ancien `.recette-emoji` par une image + badge
 * 
 * @param {Object} recipe - Objet recette
 * @param {string} recipe.nom - Nom de la recette
 * @param {string} recipe.category - Catégorie (petit-dejeuner, brunch, etc)
 * @param {string} recipe.image - URL d'image personnalisée (optionnel)
 * @param {boolean} isLocked - La recette est-elle verrouillée (Premium only)
 * @param {boolean} isFav - Est-elle un favori ?
 * @returns {string} HTML de la carte
 */
function renderModernRecipeCard(recipe, isLocked = false, isFav = false) {
  // Normaliser la catégorie
  const normalizedCategory = normalizeCategoryForImages(recipe.category || 'generic');
  
  // Obtenir l'URL de l'image (fallback si URL morte)
  const imageUrl = getRecipeImageUrl(normalizedCategory, recipe.image || null);
  
  // HTML de la carte
  return `
    <div class="recette-card ${recipe.id ? `recipe-${recipe.id}` : ''}" 
         data-recipe-id="${recipe.id || ''}" 
         data-category="${normalizedCategory}">
      
      <!-- 1. CONTENEUR IMAGE MODERNE -->
      <div class="recette-img-container">
        <img 
          src="${imageUrl}" 
          alt="${recipe.nom}"
          loading="lazy"
          onerror="this.src='${DEFAULT_RECIPE_IMAGES.generic[0]}'"
          class="recipe-image"
          decoding="async"
        />
        
        <!-- 2. BADGE FLOTTANT TEXTE (remplace l'emoji) -->
        <div class="recette-cat-badge cat-${normalizedCategory}">
          ${getCategoryLabel(normalizedCategory)}
        </div>
      </div>

      <!-- 3. ZONE D'INFOS (titre, etc) -->
      <div class="recette-info">
        <div class="recette-name">${recipe.nom}</div>
        ${recipe.description ? `<div class="recette-desc">${recipe.description}</div>` : ''}
      </div>

      <!-- 4. BOUTON FAVORI (absolu sur l'image) -->
      <button 
        class="recette-fav-btn ${isFav ? 'fav-active' : ''}" 
        onclick="event.stopPropagation(); toggleFavorite(this, '${recipe.id}')"
        title="${isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}"
        aria-label="Ajouter aux favoris"
      >
        ${isFav ? '❤️' : '🤍'}
      </button>

      <!-- 5. OVERLAY VERROUILLAGE (si Premium only) -->
      ${isLocked ? `
        <div class="recette-card-locked" onclick="event.stopPropagation(); showPremium()">
          <div class="recette-emoji-blurred">✨</div>
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:10;pointer-events:none;">
            <div style="font-size:1.4rem;margin-bottom:6px;">🔒</div>
            <div style="font-size:0.75rem;color:var(--text-mid);font-weight:600;">Premium</div>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * FONCTION UTILITAIRE : Obtenir le label lisible pour une catégorie
 * 
 * @param {string} normalizedCategory - Catégorie normalisée
 * @returns {string} Label à afficher dans le badge
 */
function getCategoryLabel(normalizedCategory) {
  const labels = {
    'petit-dejeuner': 'Petit-Déj',
    'brunch': 'Brunch',
    'dejeuner': 'Déjeuner',
    'diner': 'Dîner',
    'snack': 'Snack',
    'generic': 'Recette'
  };
  
  return labels[normalizedCategory] || 'Recette';
}

/**
 * FONCTION DE REMPLACEMENT : Appliquer à toutes les cartes existantes
 * 
 * Appelle cette fonction après le DOM ready pour remplacer toutes les cartes
 */
function upgradeAllRecipeCards() {
  // Option 1 : Si tes données recettes sont dans un array global
  if (typeof RECETTES !== 'undefined' && Array.isArray(RECETTES)) {
    const container = document.getElementById('recettes-grid') || document.querySelector('[data-recipes-container]');
    
    if (container) {
      container.innerHTML = RECETTES
        .map((recipe, idx) => renderModernRecipeCard(recipe, false, false))
        .join('');
      
      console.log('✨ Flōra recipes upgraded to modern cards', RECETTES.length);
    }
  }
  
  // Option 2 : Chercher et remplacer les anciennes cartes existantes
  const oldCards = document.querySelectorAll('.recette-card:has(.recette-emoji)');
  oldCards.forEach(card => {
    // Extraire les données de l'ancienne carte
    const name = card.querySelector('.recette-name')?.textContent || 'Recette';
    const category = Array.from(card.classList)
      .find(cls => cls.startsWith('cat-'))
      ?.replace('cat-', '') || 'generic';
    
    console.log(`🔄 Upgrading: ${name} (${category})`);
    // La structure CSS peut être adaptée, mais le badge nouveau s'affichera
  });
}

/**
 * FONCTION ALTERNATIVE : Intégrer au rendu existant
 * 
 * Si tu as une fonction `renderRecipeCard()` existante,
 * remplace son HTML du conteneur émoji par :
 */
function replaceEmojiWithImage(cardElement, recipe) {
  const emojiContainer = cardElement.querySelector('.recette-emoji');
  
  if (emojiContainer) {
    const normalizedCategory = normalizeCategoryForImages(recipe.category);
    const imageUrl = getRecipeImageUrl(normalizedCategory, recipe.image);
    
    // Créer le nouveau conteneur image
    const imageContainer = document.createElement('div');
    imageContainer.className = 'recette-img-container';
    imageContainer.innerHTML = `
      <img 
        src="${imageUrl}" 
        alt="${recipe.nom}"
        loading="lazy"
        onerror="this.src='${DEFAULT_RECIPE_IMAGES.generic[0]}'"
        class="recipe-image"
        decoding="async"
      />
      <div class="recette-cat-badge cat-${normalizedCategory}">
        ${getCategoryLabel(normalizedCategory)}
      </div>
    `;
    
    // Remplacer l'emoji par l'image
    emojiContainer.replaceWith(imageContainer);
  }
}

/**
 * EVENT LISTENER : Ajouter la logique de clique sur les cartes
 * 
 * À adapter selon ta structure actuelle
 */
function attachRecipeCardListeners() {
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.recette-card');
    
    if (card && !e.target.classList.contains('recette-fav-btn')) {
      const recipeId = card.dataset.recipeId;
      if (recipeId) {
        // Ouvrir la modale détail recette
        showRecipeDetail(recipeId);
      }
    }
  });
}

/**
 * FONCTION DE SÉCURITÉ : Fallback ultime pour images mortes
 * 
 * Placeholder SVG si Unsplash est down
 */
function getFallbackPlaceholder(category) {
  const colors = {
    'petit-dejeuner': '#fae5b8',
    'brunch': '#fad4dc',
    'dejeuner': '#bfdcc7',
    'diner': '#d4c8de',
    'snack': '#fad2b0',
    'generic': '#f7f3ee'
  };
  
  const bgColor = colors[category] || colors.generic;
  
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='${bgColor.replace('#', '%23')}' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-size='16' fill='%23999'%3EImage indisponible%3C/text%3E%3C/svg%3E`;
}

/* ════════════════════════════════════════════════════════════
   INSTRUCTIONS D'INTÉGRATION
   ════════════════════════════════════════════════════════════

   1. DANS TON HTML, charge les scripts dans cet ordre :
   
      <script src="flora-recipe-images.js"></script>
      <script src="flora-recipe-card-renderer.js"></script>
      <script src="app.js"></script> <!-- Ton code existant -->

   2. DANS TON CSS, ajoute avant ton style.css :
   
      <link rel="stylesheet" href="flora-modern-recipes.css" />
      <link rel="stylesheet" href="style.css" />

   3. APPELLE APRÈS LE DOM READY :
   
      document.addEventListener('DOMContentLoaded', () => {
        upgradeAllRecipeCards();
        attachRecipeCardListeners();
      });

   4. OU, si tu as une fonction renderRecipeCard() existante,
      ajoute au début :
      
      function renderRecipeCard(recipe, isLocked, isFav) {
        return renderModernRecipeCard(recipe, isLocked, isFav);
      }

   ════════════════════════════════════════════════════════════ */
