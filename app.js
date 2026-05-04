/* ============================
   FLŌRA — Application Logic
   Version 1.0 MVP
   ============================*/

'use strict';

// ============================
// INJECT FLŌRA STYLES (Journal + Agenda + Fix overflow)
// ============================
(function injectFloraStyles() {
  if (document.getElementById('flora-injected-styles')) return;
  const style = document.createElement('style');
  style.id = 'flora-injected-styles';
  style.textContent = `
    /* === FIX OVERFLOW PAGE === */
    body, html { overflow-x: hidden; max-width: 100vw; }
    #app, #main-content { max-width: 100vw; overflow-x: hidden; box-sizing: border-box; }
    .page { max-width: 100%; box-sizing: border-box; }
    .card-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 20px;
    }
    .card-grid .card { min-width: 0; box-sizing: border-box; }
    .card-title, .card-sub {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* === JOURNAL === */
    .journal-date-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:12px}
    .date-nav-btn{background:#fff;border:1.5px solid #ede8e0;border-radius:50%;width:38px;height:38px;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#4a5e54}
    .date-nav-btn:disabled{opacity:.3;cursor:not-allowed}
    .journal-date{text-align:center;font-family:'Playfair Display',Georgia,serif;font-size:1rem;color:#4a5e54;font-style:italic;flex:1}
    .field{width:100%;padding:10px 12px;border:1.5px solid #ede8e0;border-radius:14px;font-size:0.95rem;font-family:'DM Sans',sans-serif;background:#fff;outline:none;box-sizing:border-box}

    /* === AGENDA TOGGLE === */
    .agenda-view-toggle{display:flex;gap:8px;margin-bottom:16px;background:#f7f3ee;padding:5px;border-radius:99px}
    .agenda-toggle-btn{flex:1;padding:9px 10px;border:none;background:transparent;font-size:0.85rem;color:#4a5e54;cursor:pointer;border-radius:99px;font-family:'DM Sans',sans-serif;font-weight:500;transition:all 0.18s}
    .agenda-toggle-btn.active{background:#2d4a3e;color:#fff;font-weight:600;box-shadow:0 2px 8px rgba(45,74,62,0.2)}

    /* === AGENDA NAV === */
    .agenda-month-nav{display:flex;align-items:center;justify-content:space-between;background:#fff;border-radius:14px;padding:10px 14px;margin-bottom:16px;box-shadow:0 2px 8px rgba(45,74,62,0.08);gap:8px}
    .agenda-nav-btn{background:#f7f3ee;border:none;border-radius:50%;width:36px;height:36px;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#2d4a3e;flex-shrink:0}
    .agenda-period-label{flex:1;text-align:center;font-family:'Playfair Display',Georgia,serif;font-size:1.05rem;color:#2d4a3e;font-style:italic;text-transform:capitalize}

    /* === CALENDRIER MENSUEL === */
    .cal-headers{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;margin-bottom:8px;padding:0 4px}
    .cal-header-cell{text-align:center;font-size:0.7rem;font-weight:700;color:#8a9e96;text-transform:uppercase;letter-spacing:0.05em;padding:4px 0}
    .cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;padding:0 4px}
    .cal-cell{aspect-ratio:1/1;background:#fff;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;position:relative;box-shadow:0 1px 3px rgba(45,74,62,0.06);transition:all 0.18s;min-width:0;padding:4px;box-sizing:border-box}
    .cal-cell:hover{transform:scale(1.05);box-shadow:0 2px 8px rgba(45,74,62,0.15)}
    .cal-cell-empty{background:transparent;box-shadow:none;cursor:default;pointer-events:none}
    .cal-day-num{font-family:'Playfair Display',Georgia,serif;font-size:0.95rem;font-weight:600;color:#1e2d26;line-height:1}
    .cal-cell.cal-today{background:#2d4a3e}
    .cal-cell.cal-today .cal-day-num{color:#fff}
    .cal-cell.cal-selected{background:#a0735c;transform:scale(1.05)}
    .cal-cell.cal-selected .cal-day-num{color:#fff}
    .cal-cell.cal-has-meals:not(.cal-today):not(.cal-selected){background:#f7f3ee}
    .cal-dots{display:flex;gap:3px;margin-top:3px}
    .cal-dot{width:5px;height:5px;border-radius:50%;display:inline-block}
    .cal-dot-meal{background:#3d6b58}
    .cal-dot-journal{background:#f0b429}
    .cal-cell.cal-today .cal-dot,.cal-cell.cal-selected .cal-dot{background:#fff}

    /* === DRAWER JOUR === */
    #agenda-day-drawer{margin-top:20px}
    #agenda-day-drawer.hidden{display:none}
    .drawer-card{background:#fff;border-radius:22px;padding:18px;box-shadow:0 4px 16px rgba(45,74,62,0.12);border:2px solid #c8e6d4}
    .drawer-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid #ede8e0}
    .drawer-day{font-family:'Playfair Display',Georgia,serif;font-size:1.15rem;font-weight:600;color:#2d4a3e;text-transform:capitalize}
    .drawer-sub{font-size:0.78rem;color:#8a9e96;margin-top:2px}
    .drawer-close{background:#f7f3ee;border:none;border-radius:50%;width:32px;height:32px;font-size:0.9rem;cursor:pointer;color:#4a5e54;flex-shrink:0}
    .drawer-meals{display:flex;flex-direction:column;gap:10px}
    .drawer-meal{background:#f7f3ee;border-radius:14px;padding:12px 14px;cursor:pointer;position:relative;transition:all 0.18s}
    .drawer-meal:hover{background:#c8e6d4}
    .drawer-meal-empty{border:2px dashed #ede8e0;background:#fff}
    .drawer-meal-empty:hover{border-color:#3d6b58;background:#f7f3ee}
    .drawer-meal-label{font-size:0.7rem;font-weight:700;color:#8a9e96;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px}
    .drawer-meal-content{display:flex;align-items:center;gap:10px}
    .drawer-meal-emoji{font-size:1.3rem}
    .drawer-meal-name{font-size:0.92rem;color:#1e2d26;font-weight:500}
    .drawer-meal-empty-text{font-size:0.88rem;color:#8a9e96;font-style:italic}
    .drawer-meal-clear{position:absolute;top:8px;right:8px;background:none;border:none;color:#8a9e96;font-size:0.85rem;cursor:pointer;padding:4px 8px}

        /* === DRAWER STYLE SÉRÉNITÉ === */
    .serenite-drawer{background:#fdf6f0;border-radius:24px;padding:0;box-shadow:0 -4px 20px rgba(45,74,62,0.15);overflow:hidden;margin-top:16px}
    .serenite-drawer-header{position:relative;padding:16px 18px 12px;background:#fdf6f0;border-bottom:1px solid rgba(160,115,92,0.1)}
    .serenite-drawer-handle{width:40px;height:4px;background:rgba(160,115,92,0.3);border-radius:99px;margin:0 auto 14px}
    .serenite-drawer-titles{padding-right:40px}
    .serenite-day-label{font-size:0.7rem;font-weight:600;color:#a0735c;letter-spacing:0.08em;margin-bottom:4px}
    .serenite-drawer-title{font-family:'Playfair Display',Georgia,serif;font-size:1.5rem;color:#2d4a3e;font-weight:600;line-height:1.2}
    .serenite-drawer-close{position:absolute;top:16px;right:16px;background:rgba(160,115,92,0.1);border:none;border-radius:50%;width:34px;height:34px;font-size:0.9rem;cursor:pointer;color:#4a5e54;display:flex;align-items:center;justify-content:center}

    .rappel-tdah{margin:14px 18px 0;padding:12px 14px;background:#f0e8f5;border-radius:14px;display:flex;gap:12px;align-items:center}
    .rappel-icon{font-size:1.4rem;flex-shrink:0}
    .rappel-content{flex:1;min-width:0}
    .rappel-label{font-size:0.78rem;color:#7a4e8a;font-weight:600;margin-bottom:2px}
    .rappel-text{font-size:0.88rem;color:#5a3070;font-weight:500;line-height:1.3}

    .meals-list{padding:14px 18px 20px;display:flex;flex-direction:column;gap:14px}

    .meal-card{background:#fff;border-radius:18px;padding:16px;box-shadow:0 2px 8px rgba(45,74,62,0.06)}
    .meal-card-empty{cursor:pointer;border:2px dashed rgba(160,115,92,0.2);background:#fdfcfa;box-shadow:none}
    .meal-card-empty:hover{border-color:#3d6b58;background:#fdf6f0}

    .meal-card-header{display:flex;align-items:center;gap:12px;margin-bottom:12px;position:relative}
    .meal-icon-circle{width:46px;height:46px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0}
    .meal-card-title{font-size:0.78rem;font-weight:700;color:#8a7e74;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:2px}
    .meal-card-time{font-size:0.85rem;color:#a0735c;font-weight:500}
    .meal-clear-btn{background:rgba(160,115,92,0.08);border:none;border-radius:50%;width:28px;height:28px;font-size:0.78rem;cursor:pointer;color:#8a7e74;flex-shrink:0;display:flex;align-items:center;justify-content:center}

    .meal-empty-cta{padding:14px;text-align:center;color:#a0735c;font-style:italic;font-size:0.92rem}

    .meal-recipe-name{font-family:'Playfair Display',Georgia,serif;font-size:1.25rem;color:#2d4a3e;font-weight:600;line-height:1.3;margin-bottom:14px;cursor:pointer}
    .meal-recipe-name:hover{color:#a0735c}

    .meal-ingredients{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}
    .ingredient-chip{background:#f5efe8;color:#5a4a40;padding:7px 12px;border-radius:10px;font-size:0.82rem;font-weight:500;line-height:1.2;display:inline-block}

    .meal-tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}
    .meal-tag{padding:4px 10px;border-radius:6px;font-size:0.7rem;font-weight:700;letter-spacing:0.06em}

    .meal-benefice{background:#f8f5f0;border-left:3px solid #c8a98a;padding:10px 12px;border-radius:8px;font-size:0.85rem;color:#5a4e44;line-height:1.5;font-style:italic}

        /* === COMPLÉMENTS === */
    .comp-card{background:#fff;border-radius:16px;padding:14px 16px;margin-bottom:10px;box-shadow:0 2px 6px rgba(45,74,62,0.06);cursor:pointer;transition:all 0.2s}
    .comp-card:hover{box-shadow:0 3px 10px rgba(45,74,62,0.12)}
    .comp-header{display:flex;align-items:center;gap:12px}
    .comp-icon-circle{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0}
    .comp-name{font-family:'Playfair Display',Georgia,serif;font-size:1.05rem;font-weight:600;color:#2d4a3e;line-height:1.2;margin-bottom:3px}
    .comp-benefit{font-size:0.82rem;color:#4a5e54;line-height:1.35}
    .comp-arrow{color:#a0735c;font-size:1.2rem;transition:transform 0.2s;flex-shrink:0}
    .comp-card.expanded .comp-arrow{transform:rotate(90deg)}
    .comp-details{max-height:0;overflow:hidden;transition:max-height 0.3s ease;margin-top:0}
    .comp-card.expanded .comp-details{max-height:500px;margin-top:14px;padding-top:14px;border-top:1px solid #ede8e0}
    .comp-detail-row{display:flex;flex-direction:column;gap:2px;padding:8px 0;border-bottom:1px solid #f5efe8}
    .comp-detail-row:last-child{border-bottom:none}
    .comp-detail-label{font-size:0.7rem;font-weight:700;color:#8a9e96;text-transform:uppercase;letter-spacing:0.05em}
    .comp-detail-val{font-size:0.85rem;color:#1e2d26;line-height:1.4}
    .comp-science{margin-top:10px;background:#f7f3ee;border-radius:10px;padding:10px 12px;font-size:0.78rem;color:#5a4e44;font-style:italic;line-height:1.4}

    /* === ANCIENS STYLES JOURNAL (sliders, mood, etc.) === */
    .slider-douleur-j{width:100%;height:8px;border-radius:99px;background:linear-gradient(to right,#4caf50 0%,#ff9800 50%,#f44336 100%);outline:none;cursor:pointer;-webkit-appearance:none;appearance:none}
    .slider-douleur-j::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#fff;border:2.5px solid #2d4a3e;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.2)}
    .slider-douleur-j::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#fff;border:2.5px solid #2d4a3e;cursor:pointer}

    /* === DARK MODE OVERRIDES — surcharge des styles injectés === */
    [data-theme="dark"] .comp-name { color: #f5efe8 !important; }
    [data-theme="dark"] .comp-benefit { color: #d4ccc0 !important; }
    [data-theme="dark"] .agenda-period-label,
    [data-theme="dark"] .drawer-day,
    [data-theme="dark"] .serenite-drawer-title,
    [data-theme="dark"] .meal-recipe-name { color: #f5efe8 !important; }
    [data-theme="dark"] .date-nav-btn,
    [data-theme="dark"] .journal-date,
    [data-theme="dark"] .agenda-toggle-btn,
    [data-theme="dark"] .drawer-close,
    [data-theme="dark"] .serenite-drawer-close { color: #d4ccc0; }
    [data-theme="dark"] .agenda-nav-btn { background: #1a201d; color: #f5efe8; }
    [data-theme="dark"] .date-nav-btn { background: #232a26; border-color: rgba(255,255,255,0.08); }
    [data-theme="dark"] .drawer-close { background: #1a201d; }
    [data-theme="dark"] .serenite-drawer-close { background: rgba(255,255,255,0.08); }
  `;
  document.head.appendChild(style);
})();

// ============================
// (anciens styles)
// ============================

// ============================
// DATA — Recettes
// ============================
// → Définies dans flora_recettes.js (175 recettes), chargé avant app.js dans index.html


// ============================
// DATA — Jours & Repas
// ============================
const JOURS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const JOURS_FULL = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const REPAS = [
  { label: 'Petit-déj', slug: 'petitdej', cat: 'petit-dejeuner' },
  { label: 'Déjeuner',  slug: 'dejeuner', cat: 'dejeuner' },
  { label: 'Dîner',     slug: 'diner',    cat: 'diner' }
];

const RECETTES_PAR_CAT = {
  'petit-dejeuner': () => RECETTES.filter(r => r.cat === 'petit-dejeuner'),
  'brunch':         () => RECETTES.filter(r => r.cat === 'brunch'),
  'dejeuner':       () => RECETTES.filter(r => r.cat === 'dejeuner'),
  'diner':          () => RECETTES.filter(r => r.cat === 'diner'),
  'snack':          () => RECETTES.filter(r => r.cat === 'snack'),
};

// ============================
// DONNÉES NUTRITIONNELLES
// Badges par recette : fer, omega3, magnesium, vitC, proteines, antioxydants
// Niveaux : '+' bon · '++' très bon · '+++' exceptionnel
// ============================
const NUTRI_MAP = {
  // Petits-déjeuners
  1:  { fer:'++', omega3:'+++', magnesium:'+',  conseil:'Préparez 3 bocaux le dimanche pour toute la semaine.', portion:'1 bocal', temps_actif:'5 min' },
  2:  { fer:'+',  magnesium:'++', vitC:'+',     conseil:'La cannelle régule la glycémie — parfait contre les fringales TDAH.', portion:'1 bol', temps_actif:'10 min' },
  3:  { proteines:'++', fer:'+', omega3:'++',   conseil:'L\'avocat s\'oxyde vite — préparez juste avant de servir.', portion:'2 toasts', temps_actif:'10 min' },
  4:  { omega3:'+++', fer:'++', vitC:'+',       conseil:'Le citron sur le saumon démarre la digestion des protéines.', portion:'1 assiette', temps_actif:'10 min' },
  5:  { fer:'++', proteines:'+', vitC:'++',     conseil:'Le basilic frais ajoute de la dopamine — à ne pas cuire.', portion:'1 bol', temps_actif:'15 min' },
  6:  { fer:'+++', magnesium:'++', proteines:'+', conseil:'Le poivre noir multiplie par 20 l\'absorption du curcuma.', portion:'1 bol', temps_actif:'10 min' },
  7:  { omega3:'++', proteines:'+++', fer:'+',  conseil:'Dessalez bien la morue — 12h minimum, 3 changements d\'eau.', portion:'1 assiette', temps_actif:'20 min' },
  8:  { omega3:'+++', vitC:'++', magnesium:'+', conseil:'La papillote en papier sulfurisé préserve tous les oméga-3.', portion:'1 papillote', temps_actif:'5 min' },
  9:  { vitC:'+', magnesium:'+', antioxydants:'++', conseil:'Mixez longuement pour une texture soyeuse parfaite.', portion:'1 grand bol', temps_actif:'10 min' },
  10: { fer:'+++', proteines:'++', magnesium:'+', conseil:'L\'agneau est l\'une des viandes les plus riches en fer héminique.', portion:'1 assiette', temps_actif:'20 min' },
  11: { magnesium:'+++', fer:'++', antioxydants:'++', conseil:'Roulez dans du cacao cru pour un coating antioxydant extra.', portion:'3 boules', temps_actif:'15 min' },
  12: { antioxydants:'++', vitC:'+',            conseil:'Le thym frais est antibactérien — ajoutez-le à la sortie du four.', portion:'1 ramequin', temps_actif:'5 min' },
  13: { magnesium:'++', antioxydants:'+++',     conseil:'Le piment de Cayenne libère des endorphines naturelles.', portion:'1 verrine', temps_actif:'10 min' },
  14: { magnesium:'+', proteines:'+',           conseil:'La pêche doit être très mûre pour le moelleux parfait.', portion:'6 parts', temps_actif:'15 min' },
  15: { fer:'+', magnesium:'++', antioxydants:'++', conseil:'Conservez au frigo dans du papier sulfurisé — 1 semaine.', portion:'8 barres', temps_actif:'15 min' },
  16: { omega3:'+', magnesium:'+', proteines:'+', conseil:'Portionnez en petits sachets le dimanche — prêt toute la semaine.', portion:'1 portion', temps_actif:'5 min' },
  17: { magnesium:'++', fer:'+',               conseil:'Le tahini apporte du calcium — idéal si sans lactose.', portion:'6 barres', temps_actif:'20 min' },
  18: { magnesium:'+', antioxydants:'+',        conseil:'Laissez durcir au frigo 30 min avant de déguster.', portion:'12 pièces', temps_actif:'10 min' },
  19: { antioxydants:'+++', magnesium:'++',     conseil:'La spiruline dans le matcha double l\'apport en fer.', portion:'12 truffes', temps_actif:'20 min' },
  20: { magnesium:'+', antioxydants:'++',       conseil:'Remplacez les raisins par des cranberries pour plus d\'antioxydants.', portion:'12 cookies', temps_actif:'15 min' },
  // Déjeuners
  51: { fer:'+++', omega3:'++', proteines:'++', conseil:'Les lentilles beluga gardent leur forme — ne pas trop cuire.', portion:'1 assiette', temps_actif:'15 min' },
  52: { omega3:'+++', proteines:'+++', vitC:'+', conseil:'La peau du saumon concentre les oméga-3 — mangez-la !', portion:'1 assiette', temps_actif:'15 min' },
  53: { fer:'++', proteines:'+', vitC:'++',     conseil:'Le poivron rouge cru garde 3× plus de vitamine C que cuit.', portion:'1 grand bol', temps_actif:'10 min' },
  54: { fer:'+++', omega3:'+', proteines:'+++', conseil:'Le cabillaud est le poisson le plus maigre — riche en protéines pures.', portion:'1 assiette', temps_actif:'20 min' },
  55: { proteines:'++', magnesium:'+', vitC:'+', conseil:'Le tofu ferme tient mieux à la cuisson que le tofu soyeux.', portion:'1 bol', temps_actif:'20 min' },
  // Dîners — quelques essentiels
  75: { omega3:'+++', proteines:'++', magnesium:'+', conseil:'Servez le tartare bien froid — posez le bol 10 min au congélateur.', portion:'1 assiette', temps_actif:'15 min' },
  76: { vitC:'+++', fer:'+', antioxydants:'++', conseil:'Le poivron rouge est le légume le plus riche en vitamine C — 3× une orange.', portion:'1 assiette', temps_actif:'15 min' },
  77: { omega3:'+++', proteines:'++', vitC:'+', conseil:'La papillote garde tous les oméga-3 intacts — ne jamais frire le saumon.', portion:'1 papillote', temps_actif:'5 min' },
  // Snacks Premium
  161: { antioxydants:'+++', magnesium:'+',     conseil:'Le matcha grade cérémonie ne doit jamais être préparé avec de l\'eau bouillante.', portion:'1 grand verre', temps_actif:'5 min' },
  // Brunch
  139: { magnesium:'+++', fer:'++', antioxydants:'++', conseil:'Laissez reposer la pâte 10 min — le sarrasin absorbe le liquide et épaissit.', portion:'6 pancakes', temps_actif:'15 min' },
  140: { omega3:'+++', proteines:'++', fer:'+', conseil:'L\'œuf poché parfait : eau frémissante (pas bouillante) + trait de vinaigre.', portion:'2 toasts', temps_actif:'10 min' },
  141: { vitC:'+++', fer:'+', antioxydants:'++', conseil:'Craquez 4 œufs directement dans la sauce chaude sans mélanger.', portion:'2 personnes', temps_actif:'15 min' },
  142: { antioxydants:'+++', omega3:'+', magnesium:'+', conseil:'La texture doit être épaisse comme de la crème glacée — ajoutez moins de lait.', portion:'1 grand bol', temps_actif:'10 min' },
  // Premium hors du commun
  154: { fer:'+++', proteines:'+++', omega3:'+', conseil:'Les encornets doivent être parfaitement secs avant cuisson — l\'humidité empêche la coloration.', portion:'1 assiette', temps_actif:'15 min' },
  155: { fer:'+++', omega3:'+++', antioxydants:'++', conseil:'L\'huile de lin ne supporte pas la chaleur — ajoutez-la toujours froide.', portion:'1 assiette', temps_actif:'20 min' },
  156: { omega3:'+++', proteines:'++', vitC:'++', conseil:'Le maquereau doit être ultra-frais — achetez-le le matin même.', portion:'1 assiette', temps_actif:'15 min' },
  157: { fer:'++', magnesium:'++', omega3:'+',   conseil:'Le safran infusé dans l\'eau chaude libère mieux sa couleur et ses arômes.', portion:'2 assiettes', temps_actif:'20 min' },
  160: { omega3:'+++', proteines:'+++', antioxydants:'++', conseil:'Qualité sushi obligatoire — achetez chez un poissonnier de confiance.', portion:'1 assiette', temps_actif:'10 min' },
  162: { antioxydants:'+++', vitC:'++', magnesium:'+', conseil:'Les asperges cuisent vite — 12 min max pour garder la couleur verte.', portion:'2 bols', temps_actif:'15 min' },
  163: { magnesium:'+++', antioxydants:'++', vitC:'+', conseil:'Le kasha (sarrasin torréfié) est plus digeste que le sarrasin cru.', portion:'2 assiettes', temps_actif:'15 min' },
};

// Enrichir chaque recette avec ses données nutritionnelles
RECETTES.forEach(r => {
  const n = NUTRI_MAP[r.id];
  if (n) {
    r.nutri      = { fer: n.fer, omega3: n.omega3, magnesium: n.magnesium, vitC: n.vitC, proteines: n.proteines, antioxydants: n.antioxydants };
    r.conseil    = n.conseil;
    r.portion    = n.portion;
    r.temps_actif = n.temps_actif;
  }
});

// ============================
// STATE
// ============================
let profile       = {};
let journal       = {};
let agenda        = {};
let isPremium     = false;
let currentCatFilter = '';

// ============================================================
// SYSTÈME DE FAVORIS ❤️
// ============================================================
// Stockage : localStorage 'flora_favoris' = { recetteId: timestamp }
var floraFavoris = {};
var currentFavorisFilter = false; // true quand l'onglet "Favoris" est actif

function loadFavoris() {
  try {
    floraFavoris = JSON.parse(localStorage.getItem('flora_favoris') || '{}');
  } catch (e) {
    floraFavoris = {};
  }
}

function saveFavoris() {
  try {
    localStorage.setItem('flora_favoris', JSON.stringify(floraFavoris));
  } catch (e) {
    console.error('[Flōra] Erreur save favoris:', e);
  }
}

function isFavori(id) {
  return !!floraFavoris[id];
}

function toggleFavori(id, event) {
  // Empêche le clic de remonter (sinon ouvre la recette quand on clique le cœur sur la carte)
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  if (floraFavoris[id]) {
    delete floraFavoris[id];
  } else {
    floraFavoris[id] = Date.now();
  }
  saveFavoris();

  // Mise à jour visuelle ciblée du cœur cliqué
  var hearts = document.querySelectorAll('[data-fav-id="' + id + '"]');
  hearts.forEach(function(h) {
    h.textContent = isFavori(id) ? '❤️' : '🤍';
    h.classList.toggle('fav-active', isFavori(id));
  });

  // Si on est sur la liste des recettes en mode "favoris", re-render
  if (currentFavorisFilter) {
    renderRecettes();
  }

  // Vérifier si un badge s'est débloqué
  if (typeof checkBadges === 'function') checkBadges();
}

function countFavoris() {
  return Object.keys(floraFavoris).length;
}


let currentWeekOffset = 0;

// ============================
// INIT
// ============================
window.addEventListener('load', () => {
  loadState();
  // Hide splash after animation
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
    if (!profile.name) {
      document.getElementById('onboarding').classList.remove('hidden');
    } else {
      initApp();
    }
  }, 2100);
});

function loadState() {
  // ============================
  // MIGRATIONS LEGACY (suppression progressive des anciennes clés)
  // ============================
  try {
    // 1. flora_profil (sans 'e') → flora_profile : récupérer cycleEnabled si manquant
    const legacyProfil = localStorage.getItem('flora_profil');
    if (legacyProfil) {
      const legacyData = JSON.parse(legacyProfil);
      if (legacyData && typeof legacyData.cycleEnabled !== 'undefined') {
        const currentProfile = JSON.parse(localStorage.getItem('flora_profile') || '{}');
        if (typeof currentProfile.cycleEnabled === 'undefined') {
          currentProfile.cycleEnabled = legacyData.cycleEnabled;
          localStorage.setItem('flora_profile', JSON.stringify(currentProfile));
        }
      }
      localStorage.removeItem('flora_profil');
    }
    // 2. flora-medications (avec tiret) → flora_medications (avec underscore)
    const legacyMeds = localStorage.getItem('flora-medications');
    if (legacyMeds && !localStorage.getItem('flora_medications')) {
      localStorage.setItem('flora_medications', legacyMeds);
    }
    if (legacyMeds) {
      localStorage.removeItem('flora-medications');
    }
    // 3. caferenceFer → carenceFer (typo)
    const profRaw = localStorage.getItem('flora_profile');
    if (profRaw) {
      const prof = JSON.parse(profRaw);
      if (prof && typeof prof.caferenceFer !== 'undefined' && typeof prof.carenceFer === 'undefined') {
        prof.carenceFer = prof.caferenceFer;
        delete prof.caferenceFer;
        localStorage.setItem('flora_profile', JSON.stringify(prof));
      }
    }
  } catch(e) {
    console.warn('[Flōra] Migration legacy:', e);
  }

  try {
    profile      = JSON.parse(localStorage.getItem('flora_profile') || '{}');
    journal      = JSON.parse(localStorage.getItem('flora_journal') || '{}');
    agenda       = JSON.parse(localStorage.getItem('flora_agenda')  || '{}');
    placardItems = JSON.parse(localStorage.getItem('flora_placard') || '{}');
    isPremium    = localStorage.getItem('flora_premium') === 'true';
  } catch(e) {
    console.warn('[Flōra] Erreur loadState:', e);
    profile = {}; journal = {}; agenda = {}; placardItems = {};
  }
}

function saveState() {
  // Sauvegarder le journal en PRIORITÉ pour qu'une erreur ailleurs ne le casse pas
  try {
    localStorage.setItem('flora_journal', JSON.stringify(journal || {}));
  } catch(e) { console.error('[Flōra] Erreur save journal:', e); }
  try {
    localStorage.setItem('flora_profile', JSON.stringify(profile || {}));
  } catch(e) { console.error('[Flōra] Erreur save profile:', e); }
  try {
    localStorage.setItem('flora_agenda', JSON.stringify(agenda || {}));
  } catch(e) { console.error('[Flōra] Erreur save agenda:', e); }
  try {
    localStorage.setItem('flora_placard', JSON.stringify(placardItems || {}));
  } catch(e) { console.error('[Flōra] Erreur save placard:', e); }
}

// unlockDemo — ouvre la modale premium sur la zone code
function unlockDemo() {
  showPremium();
  setTimeout(() => {
    const input = document.getElementById('promo-code');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      input.focus();
    }
  }, 300);
}

// ============================
// ONBOARDING
// ============================
function nextStep(step) {
  // Validation étape 2 — prénom obligatoire
  if (step === 3) {
    const name = document.getElementById('ob-name').value.trim();
    if (!name) {
      document.getElementById('ob-name').focus();
      document.getElementById('ob-name').style.borderColor = 'var(--red-soft)';
      return;
    }
    document.getElementById('ob-name').style.borderColor = '';
  }

  // Générer le récap à l'étape 5
  if (step === 5) {
    try { buildOnboardRecap(); } catch(e) { console.warn('recap error', e); }
  }

  // Masquer toutes les étapes — méthode robuste sans template literal
  const allSteps = document.querySelectorAll('.onboard-step');
  allSteps.forEach(function(el) { el.classList.remove('active'); });

  // Activer la bonne étape — chercher par attribut sans template literal
  let target = null;
  allSteps.forEach(function(el) {
    if (el.getAttribute('data-step') === String(step)) {
      target = el;
    }
  });

  if (target) {
    target.classList.add('active');
    // Scroll en haut
    const wrap = document.querySelector('.onboard-wrap');
    if (wrap) wrap.scrollTop = 0;
  }
}

function selectChoice(el, hiddenId, value) {
  // Radio-style dans les onboard-choices du même groupe
  el.closest('.onboard-choices').querySelectorAll('.onboard-choice').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById(hiddenId).value = value;
}

function buildOnboardRecap() {
  const name     = document.getElementById('ob-name').value.trim();
  const sjsrFreq = document.getElementById('ob-sjsr-freq').value;
  const fer      = document.getElementById('ob-fer').checked;
  const tdah     = document.getElementById('ob-tdah').checked;
  const sg       = document.getElementById('ob-sg').checked;
  const sl       = document.getElementById('ob-sl').checked;

  // Construire les recommandations personnalisées
  const recs = [];

  if (sjsrFreq === '5+' || sjsrFreq === '3-4') {
    recs.push({ icon: '🦵', text: 'Priorité fer + magnésium — recettes spéciales SJSR sélectionnées pour vous' });
    recs.push({ icon: '🌙', text: 'Journal sommeil avancé avec suivi SJSR nuit par nuit' });
  } else if (sjsrFreq === '1-2') {
    recs.push({ icon: '🦵', text: 'Recettes riches en magnésium et oméga-3 pour les jambes' });
  }

  if (fer) {
    recs.push({ icon: '🩸', text: 'Recettes boostées en fer héminique (sardines, lentilles beluga, teff)' });
  }

  if (tdah) {
    recs.push({ icon: '🧠', text: 'Mode Batch Cooking TDAH — une session de cuisine, toute la semaine préparée' });
    recs.push({ icon: '⚡', text: 'Petits-déjeuners protéinés pour la concentration matinale' });
  }

  if (sg || sl) {
    recs.push({ icon: '🌾', text: 'Toutes vos recettes sont 100% sans gluten et sans lactose' });
  }

  // Toujours
  recs.push({ icon: '📊', text: 'Suivi bien-être quotidien avec graphiques d\'évolution' });

  const recap = document.getElementById('onboard-recap');
  recap.innerHTML = `
    <div class="onboard-greeting">Bonjour ${name} 👋</div>
    <div class="onboard-recs">
      ${recs.map(r => `
        <div class="onboard-rec-item">
          <span class="onboard-rec-icon">${r.icon}</span>
          <span class="onboard-rec-text">${r.text}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function saveOnboarding() {
  const name = document.getElementById('ob-name').value.trim();
  if (!name) { nextStep(2); return; }

  profile = {
    name,
    goal:        document.getElementById('ob-goal').value,
    sansGluten:  document.getElementById('ob-sg').checked,
    sansLactose: document.getElementById('ob-sl').checked,
    vegetarien:  document.getElementById('ob-sv').checked,
    carenceFer:   document.getElementById('ob-fer').checked,
    tdah:         document.getElementById('ob-tdah').checked,
    sjsrFreq:     document.getElementById('ob-sjsr-freq').value,
    traitement:   document.getElementById('ob-traitement').value,
  };

  saveState();
  document.getElementById('onboarding').classList.add('hidden');

  // Demander la permission de notifications
  setTimeout(() => askNotificationPermission(), 1500);

  initApp();
}

// ============================
// NOTIFICATIONS
// ============================
// Note technique : les notifications ne se déclenchent que pendant que l'app
// est ouverte (les setTimeout meurent à la fermeture de l'onglet). Une vraie
// notification PWA programmée nécessiterait un backend Push ou la
// Notification Trigger API (encore expérimentale). En attendant :
//  1. on programme un rappel pour la session courante si l'heure cible est à venir,
//  2. à chaque ouverture de l'app après 21h sans entrée journal, on rappelle.

function askNotificationPermission() {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'granted') {
    scheduleNotifications();
    return;
  }
  if (Notification.permission !== 'denied') {
    // Afficher d'abord un message doux avant la demande système
    const banner = document.createElement('div');
    banner.style.cssText = 'position:fixed;bottom:80px;left:16px;right:16px;background:var(--green-deep);color:var(--white);border-radius:var(--radius-lg);padding:16px 18px;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,.25);';
    banner.innerHTML = `
      <div style="font-weight:600;margin-bottom:6px;">🌙 Rappels bien-être</div>
      <div style="font-size:0.82rem;opacity:.85;margin-bottom:12px;">Activez les rappels pour votre journal du soir (uniquement quand l'app est ouverte).</div>
      <div style="display:flex;gap:8px;">
        <button onclick="Notification.requestPermission().then(p=>{if(p==='granted')scheduleNotifications();});this.closest('[style]').remove();"
          style="flex:1;padding:9px;border:none;border-radius:var(--radius-md);background:var(--white);color:var(--green-deep);font-weight:600;font-family:var(--font-body);cursor:pointer;">
          Activer ✓
        </button>
        <button onclick="this.closest('[style]').remove();"
          style="padding:9px 14px;border:1.5px solid rgba(255,255,255,.3);border-radius:var(--radius-md);background:none;color:var(--white);font-family:var(--font-body);cursor:pointer;">
          Plus tard
        </button>
      </div>
    `;
    document.body.appendChild(banner);
    setTimeout(() => banner.remove(), 12000);
  }
}

function scheduleNotifications() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  // 1. Si on est déjà après 21h aujourd'hui ET que le journal du jour est vide → notif immédiate
  const now = new Date();
  const todayKey = dateKey(now);
  const journalDuJour = journal[todayKey];
  const journalRempli = journalDuJour && (
    (journalDuJour.cycles && journalDuJour.cycles.length > 0) ||
    (journalDuJour.douleurs && Object.values(journalDuJour.douleurs).some(v => v > 0)) ||
    (journalDuJour.symptomes && journalDuJour.symptomes.length > 0) ||
    (journalDuJour.notes && journalDuJour.notes.trim().length > 0)
  );

  if (now.getHours() >= 21 && !journalRempli) {
    new Notification('Flōra 🌿', {
      body: 'C\'est l\'heure de votre journal du soir. Comment se sont passées vos jambes cette nuit ?',
      icon: '/Fl-ra/icon.svg',
      badge: '/Fl-ra/icon.svg',
      tag: 'flora-journal-soir'
    });
  } else if (now.getHours() < 21) {
    // 2. Sinon, programmer pour 21h aujourd'hui (uniquement si l'app reste ouverte)
    const target = new Date();
    target.setHours(21, 0, 0, 0);
    const delay = target - now;
    setTimeout(() => {
      // Re-vérifier au moment du tir : peut-être que l'utilisatrice a rempli entre-temps
      const updatedJournal = journal[dateKey(new Date())];
      const stillEmpty = !updatedJournal || (
        (!updatedJournal.cycles || updatedJournal.cycles.length === 0) &&
        (!updatedJournal.symptomes || updatedJournal.symptomes.length === 0) &&
        (!updatedJournal.notes || !updatedJournal.notes.trim())
      );
      if (stillEmpty && Notification.permission === 'granted') {
        new Notification('Flōra 🌿', {
          body: 'C\'est l\'heure de votre journal du soir. Comment se sont passées vos jambes cette nuit ?',
          icon: '/Fl-ra/icon.svg',
          badge: '/Fl-ra/icon.svg',
          tag: 'flora-journal-soir'
        });
      }
    }, delay);
  }
}

function enableNotifications() {
  askNotificationPermission();
}

// ============================
// APP INIT
// ============================
// SYSTÈME D'ACCÈS BÊTA (pas un système d'authentification)
// ============================
// ⚠️ Ces "mots de passe" sont visibles dans le code source : ce sont des codes
// d'accès partagés, pas des mots de passe sécurisés. Ils servent uniquement à
// distinguer les rôles pendant la phase bêta. Le statut Premium se contourne
// trivialement côté client (localStorage). Un vrai backend (Cloudflare Worker
// + KV ou Stripe Customer Portal) sera nécessaire pour une monétisation réelle.

const ACCOUNTS = {
  // Compte administrateur (Ketty)
  'ketty@flora.app': {
    password: 'Fl0ra#Ketty@2026!',
    role: 'admin',
    name: 'Ketty',
    premium: true
  },
  // Compte invité bêta — à partager avec tes proches testeurs
  'invite@flora.app': {
    password: 'FloraB3ta#2026',
    role: 'beta',
    name: 'Invité·e',
    premium: true
  },
  // Comptes premium futurs : à gérer côté serveur, pas ici
};

let currentUser = null;

function showLogin() {
  document.getElementById('login-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('login-email').focus(), 100);
}

function closeLogin() {
  document.getElementById('login-modal').classList.add('hidden');
  document.getElementById('login-error').classList.add('hidden');
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
}

function doLogin() {
  const email    = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;
  const errorEl  = document.getElementById('login-error');

  const account = ACCOUNTS[email];

  if (!account || account.password !== password) {
    errorEl.textContent = '❌ Email ou mot de passe incorrect.';
    errorEl.classList.remove('hidden');
    return;
  }

  // Connexion réussie
  currentUser = { email, ...account };
  isPremium = account.premium;
  localStorage.setItem('flora_premium', 'true');
  localStorage.setItem('flora_user_email', email);
  localStorage.setItem('flora_user_name', account.name);

  // Mettre à jour le profil
  if (account.name) {
    profile.name = account.name;
    saveState();
  }

  closeLogin();
  loadProfil();
  renderRecettes();
  updateLoginButton();

  // Toast de bienvenue
  const msg = document.createElement('div');
  const icon = account.role === 'admin' ? '👑' : account.role === 'beta' ? '🌿' : '✨';
  const roleLabel = account.role === 'admin' ? ' (Admin)' : account.role === 'beta' ? ' (Bêta testeur·se)' : ' Premium';
  msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:var(--green-deep);color:var(--white);padding:12px 24px;border-radius:99px;font-size:0.88rem;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.25);white-space:nowrap;';
  msg.textContent = `${icon} Bienvenue ${account.name} !${roleLabel}`;
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

function doLogout() {
  currentUser = null;
  isPremium = false;
  localStorage.removeItem('flora_premium');
  localStorage.removeItem('flora_user_email');
  localStorage.removeItem('flora_user_name');
  renderRecettes();
  loadProfil();
  updateLoginButton();

  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:var(--text-mid);color:var(--white);padding:10px 20px;border-radius:99px;font-size:0.85rem;z-index:9999;';
  msg.textContent = '👋 Déconnecté·e';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
}

function updateLoginButton() {
  const btn = document.getElementById('header-login-btn');
  if (!btn) return;
  if (currentUser) {
    btn.textContent = currentUser.role === 'admin' ? '👑' : '✨';
    btn.title = `Connecté·e : ${currentUser.email}`;
    btn.onclick = () => {
      if (confirm(`Déconnexion de ${currentUser.email} ?`)) doLogout();
    };
  } else {
    btn.textContent = '🔑';
    btn.title = 'Se connecter';
    btn.onclick = showLogin;
  }
}

function tryLoginOnEnter(e) {
  if (e.key === 'Enter') doLogin();
}

function initLogin() {
  // Restaurer session si email stocké
  const savedEmail = localStorage.getItem('flora_user_email');
  if (savedEmail && ACCOUNTS[savedEmail]) {
    currentUser = { email: savedEmail, ...ACCOUNTS[savedEmail] };
    isPremium = true;
  }
  updateLoginButton();
}



// ============================================================
// LISTE DE COHÉRENCE FLŌRA — détection des aliments hors-contexte
// ============================================================
// Cette liste est ÉVOLUTIVE : tu peux ajouter/retirer des mots-clés ici
// pour ajuster la sensibilité des alertes. Les correspondances se font
// par mots-clés (substring casse-insensible) pour rattraper les variations.
//
// Niveaux :
//   - bloquant   : strictement incompatible (gluten, lait animal)
//   - inflammatoire : pro-inflammatoire à éviter (sucres raffinés, charcuterie...)
//   - info       : juste une note (caféine, alcool)
//
// L'alerte demande TOUJOURS confirmation, jamais de refus net.

var FLORA_INCOMPATIBLES = {
  bloquant: {
    label: 'gluten ou produit laitier animal',
    icon: '🟥',
    motsCles: [
      // Gluten
      'blé', 'ble ', 'farine de blé', 'farine de ble',
      'seigle', 'orge', 'malt', 'kamut', 'épeautre', 'epeautre',
      'semoule', 'couscous', 'boulgour', 'bulgur',
      'pâtes ', 'pates ', 'spaghetti', 'tagliatelle', 'macaroni', 'lasagne', 'ravioli',
      'pain ', 'baguette', 'brioche', 'biscotte', 'biscuit',
      'croissant', 'viennoiserie', 'pâtisserie', 'patisserie',
      // Lait animal
      'lait de vache', 'lait de chèvre', 'lait de chevre', 'lait de brebis',
      'lait demi-écrémé', 'lait écrémé', 'lait entier',
      'beurre ', 'beurre demi', 'beurre doux',
      'crème fraîche', 'creme fraiche', 'crème épaisse',
      'yaourt nature', 'yaourt vache', 'yaourt grec', 'yaourt brassé', 'yaourt aux fruits',
      'fromage blanc', 'fromage de vache', 'fromage râpé', 'fromage rape',
      'gruyère', 'gruyere', 'emmental', 'comté', 'comte', 'parmesan', 'mozzarella',
      'mascarpone', 'ricotta', 'feta', 'roquefort', 'camembert', 'brie',
      'cancoillotte', 'reblochon'
    ]
  },
  inflammatoire: {
    label: 'pro-inflammatoire',
    icon: '🟧',
    motsCles: [
      // Sucres raffinés
      'sucre blanc', 'sucre roux', 'sucre en poudre', 'sucre cristal', 'sucre semoule',
      'sirop de glucose', 'sirop de fructose', 'sirop de maïs', 'sirop de mais',
      'soda', 'cola', 'limonade', 'boisson énergisante', 'boisson energisante',
      // Charcuterie industrielle
      'jambon blanc', 'jambon industriel', 'saucisson', 'salami', 'chorizo',
      'lardons', 'lard fumé', 'lard fume', 'bacon',
      'pâté ', 'pate ', 'rillettes', 'mortadelle',
      'merguez', 'chipolata', 'saucisse fumée',
      // Friture / huiles raffinées
      'huile de tournesol raffinée', 'huile de palme', 'margarine',
      'frites surgelées', 'frites surgelees', 'nuggets',
      // Glutamate / additifs
      'sauce soja classique', 'bouillon kub', 'maggi', 'glutamate',
      'plat préparé', 'plat prepare', 'micro-ondable',
      // Aliments ultra-transformés
      'nutella', 'pâte à tartiner', 'pate a tartiner industrielle',
      'céréales sucrées', 'cereales sucrees', 'corn flakes'
    ]
  },
  info: {
    label: 'note informative',
    icon: '🟨',
    motsCles: [
      'café ', 'cafe ', 'expresso', 'espresso',
      'thé noir', 'the noir', 'thé earl grey',
      'vin ', 'champagne', 'bière', 'biere', 'rosé', 'rose ',
      'whisky', 'vodka', 'rhum', 'gin', 'apéritif', 'aperitif'
    ]
  }
};

// Vérifie si un nom d'ingrédient ou recette contient un mot-clé hors-contexte.
// Renvoie : null si rien | { niveau, label, icon, mot } si match
function checkFloraCompat(text) {
  if (!text) return null;
  // Normalise : minuscules + espaces, on garde les apostrophes/tirets
  var raw = String(text).toLowerCase().replace(/\s+/g, ' ');

  // Strip les alternatives entre parenthèses commençant par "ou":
  // "tofu ferme (ou feta)" → "tofu ferme"
  // "extrait vanille (ou bouchon de rhum)" → "extrait vanille"
  // Cela permet d'ignorer les ingrédients de remplacement non-Flōra.
  var stripped = raw.replace(/\(\s*ou[^)]*\)/g, '');
  // Retire aussi les notes explicatives "(alcool évaporé à la cuisson)" etc.
  stripped = stripped.replace(/\(\s*alcool[^)]*\)/g, '');
  stripped = stripped.replace(/\(\s*sans alcool[^)]*\)/g, '');

  var t = ' ' + stripped + ' ';

  // Skip global : si le texte indique explicitement "sans gluten", "sans lactose",
  // "sans beurre", "végane", "vegan", c'est une recette adaptée Flōra
  var skipPatterns = ['sans gluten', 'sans lactose', 'sans beurre', 'sans œuf',
                      'sans oeuf', 'sans lait', 'sans laitage', 'sans fromage',
                      ' sg ', ' sg/sl ', ' sg/', '/sl ', 'végane', 'vegane', 'vegan'];
  for (var s = 0; s < skipPatterns.length; s++) {
    if (t.indexOf(skipPatterns[s]) >= 0) return null;
  }

  // Exceptions ciblées : combinaisons de mots qui doivent être ignorées
  // même si un mot-clé bloquant/inflammatoire est trouvé dedans.
  var exceptions = [
    'levure de bière',   // produit nutritionnel sans alcool
    'levure de biere',
    'levure maltée',     // dérivé sans alcool ni gluten
    'levure maltee',
    'sirop d\'érable',   // sucres naturels OK sur Flōra
    'sirop d\'agave',
    'sirop d\'orgeat',
    'sirop de coco',
    'yaourt de soja',    // alternatives végétales OK
    'yaourt de coco',
    'yaourt d\'amande',
    'yaourt d\'avoine',
    'yaourt végétal',
    'lait de coco',
    'lait d\'amande',
    'lait d\'avoine',
    'lait de riz',
    'lait de noisette',
    'lait de cajou',
    'lait de chanvre',
    'lait végétal',
    'beurre de cacahuète',
    'beurre de cacahuete',
    'beurre d\'amande',
    'beurre de cajou',
    'beurre de coco',
    'beurre de noix',
    'beurre de noisette',
    'beurre de sésame',
    'beurre de tournesol',
    'margarine végétale',  // alternative SL pour "comfort food" SG/SL
    'margarine vegetale',
    'margarine bio',
    'margarine végane',
    'crème de coco',
    'creme de coco',
    'crème d\'amande',
    'crème d\'avoine',
    'crème de soja',
    'crème de riz',
    'crème végétale',
    'crème vegane',
    'fromage végétal',
    'fromage vegetal',
    'fromage de soja',
    'fromage de cajou',
    'fromage d\'amande',
    'fromage végane',
    'feta végane',       // tofu en alternative
    'feta vegane',
    'feta végétale',
    'feta de tofu',
    // Pains et biscuits SG
    'pain de sarrasin',
    'pain de mie sg',
    'pain de mie sans gluten',
    'pain d\'épices sans gluten',
    'pain d\'epices sans gluten',
    'pain à hamburger sg',
    'biscuit sans gluten',
    'biscuit sg',
    'pâtes sans gluten',
    'pates sans gluten',
    'pâtes de riz',
    'pates de riz',
    'pâtes de sarrasin',
    'pates de sarrasin',
    'pâtes de pois chiche',
    'pates de pois chiche',
    'pâtes de quinoa',
    'pates de quinoa',
    'mélange épices pain d\'épices', // épice en poudre, pas du pain
    'melange epices pain d\'epices',
    // Couleurs (pas de l'alcool ni de la viande)
    'pamplemousse rose',
    'pitaya rose',
    'baies roses',
    'baie rose',
    'sel rose',
    'poivre rose',
    'rose blanche',
    'rose comtesse',     // variété de pomme de terre
    'eau de rose',
    // Mélange épices (pour ras el hanout, etc.)
    'cinq épices',
    'cinq epices',
    'quatre épices',
    'quatre epices'
  ];
  for (var k = 0; k < exceptions.length; k++) {
    if (t.indexOf(exceptions[k]) >= 0) return null;
  }

  // Mots-clés courts qui doivent matcher en MOT ENTIER (pour éviter
  // que "gin" matche "gingembre", "vin" matche "vinaigre", etc.)
  // On considère un mot entier comme délimité par espace, début/fin de chaîne,
  // ou ponctuation simple.
  var motsEntiers = ['gin', 'vin', 'rose', 'rhum', 'malt', 'pain', 'pates',
                     'pâtes', 'cafe', 'café', 'orge', 'ble', 'blé', 'feta',
                     'brie', 'comte', 'comté'];

  // Ordre de priorité : bloquant > inflammatoire > info
  var ordre = ['bloquant', 'inflammatoire', 'info'];
  for (var i = 0; i < ordre.length; i++) {
    var niveau = ordre[i];
    var def = FLORA_INCOMPATIBLES[niveau];
    for (var j = 0; j < def.motsCles.length; j++) {
      var mot = def.motsCles[j].toLowerCase().trim();
      var found = false;

      if (motsEntiers.indexOf(mot) >= 0) {
        // Match en mot entier : entouré d'espace ou début de texte
        // Le texte t est déjà entouré d'espaces. On cherche " mot " ou " mot,"
        // ou similaire. Plus simple : regex avec word boundary.
        var re = new RegExp('(^|[\\s\',\\.\\-/\\(\\)])' + mot.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($|[\\s\',\\.\\-/\\(\\)])', 'i');
        found = re.test(t);
      } else {
        // Mots longs : substring classique
        if (t.indexOf(' ' + mot) >= 0 || t.indexOf(mot + ' ') >= 0 || t.indexOf(mot) === 0) {
          found = true;
        }
      }

      if (found) {
        return { niveau: niveau, label: def.label, icon: def.icon, mot: def.motsCles[j] };
      }
    }
  }
  return null;
}

const PLACARD_CATEGORIES = {
  '🥚 Protéines animales': [
    'Œufs bio','Saumon frais','Saumon fumé','Truite fumée',
    'Sardines fraîches','Sardines en boîte','Maquereaux en boîte',
    'Thon au naturel','Thon à l\'huile d\'olive','Anchois',
    'Hareng fumé','Cabillaud','Dos de cabillaud','Daurade',
    'Crevettes','Moules','Poulpe','Poulet','Blanc de poulet',
    'Dinde','Bœuf haché maigre','Steak de bœuf'
  ],
  '🫘 Protéines végétales': [
    'Pois chiches (boîte)','Pois chiches secs','Lentilles corail',
    'Lentilles vertes','Lentilles beluga','Haricots rouges (boîte)',
    'Haricots blancs (boîte)','Haricots noirs','Edamames surgelés',
    'Tofu ferme','Tofu fumé','Tofu soyeux','Tempeh'
  ],
  '🥦 Légumes frais': [
    'Épinards','Kale','Brocoli','Chou-fleur','Courgette',
    'Aubergine','Poivron rouge','Poivron jaune','Carotte',
    'Betterave cuite','Betterave crue','Fenouil','Poireau',
    'Champignons','Champignons shiitaké','Radis noir',
    'Patate douce','Pommes de terre','Oignon','Oignon rouge',
    'Ail','Gingembre frais','Céleri'
  ],
  '🥬 Légumes surgelés': [
    'Épinards surgelés','Brocolis surgelés','Petits pois surgelés',
    'Haricots verts surgelés','Edamames surgelés','Mélange légumes wok'
  ],
  '🌾 Féculents sans gluten': [
    'Quinoa','Riz complet','Riz basmati','Riz noir vénéré',
    'Sarrasin (kasha)','Flocons de sarrasin','Flocons de millet',
    'Farine de sarrasin','Farine de riz','Farine de pois chiche',
    'Farine d\'amande','Farine de coco','Farine de teff',
    'Galettes de riz','Pâtes de riz','Nouilles de riz',
    'Vermicelles de riz','Polenta'
  ],
  '🥑 Bons gras & noix': [
    'Avocat','Noix','Noix du Brésil','Noix de cajou',
    'Amandes','Amandes effilées','Noisettes','Pistaches',
    'Graines de courge','Graines de lin','Graines de chia',
    'Graines de chanvre','Graines de sésame','Graines de tournesol',
    'Pignons de pin','Purée d\'amande','Beurre de cajou',
    'Tahini','Beurre de cacahuète'
  ],
  '🫙 Conserves & bocaux': [
    'Tomates concassées','Coulis de tomates','Tomates séchées',
    'Sardines à l\'huile d\'olive','Maquereaux au naturel',
    'Thon au naturel','Anchois en bocal','Lait de coco entier',
    'Lait de coco allégé','Crème de coco','Pois chiches en boîte',
    'Haricots rouges en boîte','Haricots blancs en boîte',
    'Lentilles en boîte','Artichauds en bocal','Olives noires',
    'Olives vertes','Câpres','Cornichons','Bouillon de légumes',
    'Pâte miso (sans gluten)'
  ],
  '🛢 Huiles & vinaigres': [
    'Huile d\'olive vierge extra','Huile de coco',
    'Huile de sésame','Huile de colza bio (premier froid)',
    'Huile de cameline','Vinaigre de cidre',
    'Vinaigre balsamique','Vinaigre de riz','Tamari sans gluten'
  ],
  '🥛 Laits & yaourts végétaux': [
    'Lait d\'amande','Lait de coco (boisson)','Lait de riz',
    'Lait d\'avoine (sg)','Lait de noisette','Yaourt de soja',
    'Yaourt de coco','Crème d\'avoine (sg)'
  ],
  '🌿 Épices & herbes': [
    'Curcuma','Cumin','Gingembre en poudre','Cannelle',
    'Cardamome','Coriandre moulue','Paprika doux','Paprika fumé',
    'Piment d\'Espelette','Muscade','Origan','Thym','Romarin',
    'Herbes de Provence','Curry en poudre','Sel Santé',
    'Poivre noir','Fleur de sel','Levure nutritionnelle',
    'Bicarbonate alimentaire','Levure sans gluten'
  ],
  '🌿 Herbes fraîches': [
    'Persil plat','Coriandre fraîche','Basilic frais',
    'Menthe fraîche','Aneth','Ciboulette','Citronnelle'
  ],
  '🍋 Fruits frais': [
    'Citron','Citron vert','Orange','Pomme','Poire',
    'Banane','Avocat','Mangue','Ananas','Pêche','Abricot',
    'Myrtilles','Framboises','Fraises','Grenade'
  ],
  '🫐 Fruits surgelés': [
    'Myrtilles surgelées','Framboises surgelées',
    'Fruits rouges surgelés','Mangue surgelée',
    'Banane surgelée','Pulpe d\'açaï surgelée'
  ],
  '🍫 Sucrants & chocolat': [
    'Chocolat noir 85%','Chocolat noir 70%','Cacao cru en poudre',
    'Dattes Medjool','Sirop d\'érable','Sirop d\'agave',
    'Miel','Sucre de coco','Raisins secs','Cranberries séchées',
    'Abricots secs'
  ],
  '🧪 Compléments & superaliments': [
    'Spiruline en poudre','Protéines de chanvre','Graines de lin moulues',
    'Noix du Brésil','Flocons de levure nutritionnelle',
    'Algues wakamé séchées','Nori en feuilles'
  ],
  '🌺 Infusions & boissons': [
    'Valériane','Passiflore','Tilleul','Mélisse',
    'Infusion gingembre-citron','Thé vert','Rooibos',
    'Eau de coco','Kombucha'
  ],
};

const INGREDIENT_PRICES = {
  // Protéines animales
  'Œufs bio': 3.50, 'Saumon frais': 7.50, 'Saumon fumé': 4.50,
  'Truite fumée': 3.80, 'Sardines fraîches': 4.00, 'Sardines en boîte': 1.80,
  'Maquereaux en boîte': 1.90, 'Thon au naturel': 2.20, 'Thon à l\'huile d\'olive': 2.50,
  'Anchois': 2.80, 'Hareng fumé': 3.20, 'Cabillaud': 6.00,
  'Dos de cabillaud': 7.00, 'Daurade': 6.50, 'Crevettes': 5.50,
  'Moules': 3.50, 'Poulpe': 5.00, 'Poulet': 5.00, 'Blanc de poulet': 5.50,
  'Dinde': 4.80, 'Bœuf haché maigre': 6.50, 'Steak de bœuf': 7.00,
  // Protéines végétales
  'Pois chiches (boîte)': 1.10, 'Pois chiches secs': 1.80,
  'Lentilles corail': 2.00, 'Lentilles vertes': 1.80, 'Lentilles beluga': 2.50,
  'Haricots rouges (boîte)': 1.00, 'Haricots blancs (boîte)': 0.95,
  'Tofu ferme': 2.50, 'Tofu fumé': 2.80, 'Tofu soyeux': 2.20, 'Tempeh': 3.50,
  // Légumes
  'Épinards': 2.20, 'Kale': 2.50, 'Brocoli': 1.80, 'Chou-fleur': 2.00,
  'Courgette': 1.50, 'Aubergine': 1.60, 'Poivron rouge': 1.90,
  'Carotte': 1.00, 'Betterave cuite': 1.20, 'Fenouil': 1.80,
  'Champignons': 2.50, 'Patate douce': 1.80, 'Oignon': 0.80,
  'Ail': 0.90, 'Gingembre frais': 1.20,
  // Féculents
  'Quinoa': 2.80, 'Riz complet': 1.50, 'Riz noir vénéré': 3.20,
  'Sarrasin (kasha)': 1.80, 'Flocons de sarrasin': 2.00,
  'Galettes de riz': 1.90, 'Pâtes de riz': 2.20, 'Nouilles de riz': 2.00,
  // Bons gras
  'Avocat': 1.80, 'Noix': 3.80, 'Noix du Brésil': 4.50,
  'Noix de cajou': 4.00, 'Amandes': 4.00, 'Graines de courge': 2.50,
  'Graines de chia': 3.50, 'Graines de lin': 2.20, 'Tahini': 4.00,
  'Purée d\'amande': 5.00, 'Beurre de cajou': 5.50,
  // Conserves
  'Tomates concassées': 0.90, 'Sardines à l\'huile d\'olive': 2.20,
  'Maquereaux au naturel': 1.90, 'Thon au naturel': 2.20,
  'Lait de coco entier': 1.80, 'Lait de coco allégé': 1.50,
  'Olives noires': 2.00, 'Câpres': 1.80, 'Pâte miso (sans gluten)': 4.50,
  // Huiles
  'Huile d\'olive vierge extra': 7.00, 'Huile de coco': 4.50,
  'Huile de sésame': 3.80, 'Huile de colza bio (premier froid)': 4.00,
  'Tamari sans gluten': 3.50, 'Vinaigre de cidre': 2.50,
  // Laits végétaux
  'Lait d\'amande': 2.20, 'Lait de coco (boisson)': 1.80,
  'Lait de riz': 2.00, 'Lait d\'avoine (sg)': 2.20, 'Yaourt de soja': 1.80,
  // Fruits
  'Citron': 0.80, 'Banane': 0.60, 'Myrtilles': 3.50, 'Pomme': 1.20,
  'Mangue': 2.50, 'Framboises': 3.20, 'Fraises': 3.00,
  'Myrtilles surgelées': 3.20, 'Framboises surgelées': 2.80,
  // Épices
  'Curcuma': 2.50, 'Cumin': 1.80, 'Cannelle': 1.50,
  'Gingembre en poudre': 2.00, 'Paprika doux': 1.80, 'Sel Santé': 3.50,
  // Sucrants
  'Chocolat noir 85%': 2.80, 'Cacao cru en poudre': 4.50,
  'Dattes Medjool': 5.00, 'Sirop d\'érable': 5.50, 'Miel': 4.00,
  // Superaliments
  'Spiruline en poudre': 8.00, 'Protéines de chanvre': 9.00,
  'Algues wakamé séchées': 4.50,
};

let placardItems = {};
let currentBudget = 80;
let batchPlan = [];
let batchCurrentStep = 0;

// Liste des items personnalisés ajoutés par l'utilisatrice (catégorie → [items])
var floraPlacardCustom = {};

function loadPlacardCustom() {
  try {
    floraPlacardCustom = JSON.parse(localStorage.getItem('flora_placard_custom') || '{}');
  } catch (e) {
    floraPlacardCustom = {};
  }
}

function savePlacardCustom() {
  try {
    localStorage.setItem('flora_placard_custom', JSON.stringify(floraPlacardCustom));
  } catch (e) {
    console.error('[Flōra] Erreur save placard custom:', e);
  }
}

// Échappe les apostrophes pour insertion sûre dans onclick="..."
function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function renderPlacard() {
  const container = document.getElementById('placard-categories');
  if (!container) return;

  loadPlacardCustom();

  // Fusion : pour chaque catégorie, items prédéfinis + items custom
  var html = Object.entries(PLACARD_CATEGORIES).map(function(entry) {
    var cat = entry[0];
    var items = entry[1].slice(); // copie
    var customItems = floraPlacardCustom[cat] || [];
    var allItems = items.concat(customItems);

    var itemsHTML = allItems.map(function(item) {
      var isCustom = customItems.indexOf(item) >= 0;
      var checked  = placardItems[item];
      var safe = escAttr(item);
      return (
        '<span class="placard-item' + (checked ? ' checked' : '') + (isCustom ? ' placard-item-custom' : '') + '" ' +
              'data-name="' + safe + '" ' +
              'data-cat="' + escAttr(cat) + '" ' +
              'onclick="togglePlacardItem(this.dataset.name, this)">' +
          (checked ? '✓ ' : '') + item +
          (isCustom ? '<button class="placard-item-del" onclick="removeCustomPlacardItem(event, this.parentElement)" aria-label="Supprimer">×</button>' : '') +
        '</span>'
      );
    }).join('');

    return (
      '<div class="placard-category" data-cat-name="' + escAttr(cat) + '">' +
        '<div class="placard-cat-title">' + cat + '</div>' +
        '<div class="placard-items">' + itemsHTML + '</div>' +
      '</div>'
    );
  }).join('');

  container.innerHTML = html;
}

function togglePlacardItem(item, el) {
  placardItems[item] = !placardItems[item];
  el.classList.toggle('checked', placardItems[item]);
  // Reconstruire le contenu : ✓ + nom + (bouton × si custom)
  var isCustom = el.classList.contains('placard-item-custom');
  var prefix = placardItems[item] ? '✓ ' : '';
  el.innerHTML = prefix + escAttr(item) +
    (isCustom ? '<button class="placard-item-del" onclick="removeCustomPlacardItem(event, this.parentElement)" aria-label="Supprimer">×</button>' : '');
  localStorage.setItem('flora_placard', JSON.stringify(placardItems));
}

// Filtre temps réel sur la recherche
function filterPlacardItems(query) {
  var q = (query || '').trim().toLowerCase();
  var clearBtn = document.getElementById('placard-clear-btn');
  if (clearBtn) clearBtn.classList.toggle('hidden', !q);

  var categories = document.querySelectorAll('#placard-categories .placard-category');
  categories.forEach(function(catEl) {
    var items = catEl.querySelectorAll('.placard-item');
    var anyVisible = false;
    items.forEach(function(item) {
      var name = (item.dataset.name || '').toLowerCase();
      var match = !q || name.includes(q);
      item.style.display = match ? '' : 'none';
      if (match) anyVisible = true;
    });
    catEl.style.display = anyVisible ? '' : 'none';
  });
}

function clearPlacardSearch() {
  var input = document.getElementById('placard-search');
  if (input) input.value = '';
  filterPlacardItems('');
  if (input) input.focus();
}

// === Ajout d'un ingrédient personnalisé ===
function openPlacardAddModal() {
  var existing = document.getElementById('placard-add-modal');
  if (existing) existing.remove();

  // Récupérer la liste des catégories pour le sélecteur
  var catOptions = Object.keys(PLACARD_CATEGORIES).map(function(cat) {
    return '<option value="' + escAttr(cat) + '">' + cat + '</option>';
  }).join('');

  var modal = document.createElement('div');
  modal.id = 'placard-add-modal';
  modal.className = 'quick-modal-overlay';
  modal.onclick = function(e) {
    if (e.target === modal) closePlacardAddModal();
  };
  modal.innerHTML =
    '<div class="quick-modal" style="max-width:400px;">' +
      '<div class="quick-modal-header">' +
        '<div class="quick-modal-title">+ Ingrédient personnalisé</div>' +
        '<button class="quick-modal-close" onclick="closePlacardAddModal()" aria-label="Fermer">✕</button>' +
      '</div>' +
      '<p class="quick-modal-sub">Ajoute un ingrédient qui n\'est pas dans la liste prédéfinie.</p>' +

      '<div class="quick-section">' +
        '<div class="quick-section-title">Nom de l\'ingrédient</div>' +
        '<input type="text" id="placard-add-name" class="field" placeholder="Ex: Spiruline, Levure de bière…" autocomplete="off" />' +
      '</div>' +

      '<div class="quick-section">' +
        '<div class="quick-section-title">Catégorie</div>' +
        '<select id="placard-add-cat" class="field">' + catOptions + '</select>' +
      '</div>' +

      '<div id="placard-add-error" style="display:none;color:#c0614a;font-size:0.82rem;margin-bottom:10px;"></div>' +

      '<div class="quick-modal-actions">' +
        '<button class="quick-btn-cancel" onclick="closePlacardAddModal()">Annuler</button>' +
        '<button class="quick-btn-save" onclick="confirmAddPlacardItem()">+ Ajouter</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(modal);
  setTimeout(function() {
    var input = document.getElementById('placard-add-name');
    if (input) input.focus();
  }, 100);
}

function closePlacardAddModal() {
  var modal = document.getElementById('placard-add-modal');
  if (modal) modal.remove();
}

function confirmAddPlacardItem() {
  var nameEl = document.getElementById('placard-add-name');
  var catEl  = document.getElementById('placard-add-cat');
  var errEl  = document.getElementById('placard-add-error');
  if (!nameEl || !catEl) return;

  var name = (nameEl.value || '').trim();
  var cat  = catEl.value;

  function showErr(msg) {
    if (errEl) {
      errEl.textContent = msg;
      errEl.style.display = 'block';
    }
  }

  if (!name) { showErr('Donne un nom à l\'ingrédient.'); return; }
  if (name.length > 50) { showErr('Nom trop long (50 caractères max).'); return; }
  if (!cat || !PLACARD_CATEGORIES[cat]) { showErr('Choisis une catégorie.'); return; }

  // Doublons : vérifier qu'il n'existe pas déjà (toutes catégories confondues, casse-insensible)
  var lname = name.toLowerCase();
  var allItems = [];
  Object.values(PLACARD_CATEGORIES).forEach(function(arr) {
    arr.forEach(function(it) { allItems.push(it.toLowerCase()); });
  });
  loadPlacardCustom();
  Object.values(floraPlacardCustom).forEach(function(arr) {
    arr.forEach(function(it) { allItems.push(it.toLowerCase()); });
  });
  if (allItems.indexOf(lname) >= 0) {
    showErr('« ' + name + ' » existe déjà dans la liste.');
    return;
  }

  // Vérification de compatibilité avec les principes Flōra
  var alerte = checkFloraCompat(name);
  if (alerte) {
    var msg = '';
    if (alerte.niveau === 'bloquant') {
      msg = alerte.icon + ' « ' + name + ' » contient ' + alerte.label + ' (mot-clé détecté : « ' + alerte.mot.trim() + ' »).\n\n' +
            'Flōra est conçue pour une alimentation sans gluten et sans laitage animal. ' +
            'Si tu l\'ajoutes, ce produit sera dans ton placard mais ira à l\'encontre de la philosophie de l\'app.\n\n' +
            'Tu veux quand même l\'ajouter ?';
    } else if (alerte.niveau === 'inflammatoire') {
      msg = alerte.icon + ' « ' + name + ' » est ' + alerte.label + ' (mot-clé détecté : « ' + alerte.mot.trim() + ' »).\n\n' +
            'Ce type d\'aliment peut aggraver les inflammations chroniques (SJSR, douleurs).\n\n' +
            'Confirmer l\'ajout ?';
    } else {
      msg = alerte.icon + ' « ' + name + ' » : ' + alerte.label + '.\n\n' +
            'À consommer avec modération si tu es sensible (sommeil, SJSR).\n\n' +
            'Ajouter quand même ?';
    }
    if (!confirm(msg)) return;
  }

  // Ajout
  if (!floraPlacardCustom[cat]) floraPlacardCustom[cat] = [];
  floraPlacardCustom[cat].push(name);
  savePlacardCustom();

  // Cocher automatiquement le nouvel item (l'utilisatrice l'ajoute parce qu'elle l'a)
  placardItems[name] = true;
  localStorage.setItem('flora_placard', JSON.stringify(placardItems));

  closePlacardAddModal();
  renderPlacard();

  // Toast de confirmation
  var toast = document.createElement('div');
  toast.className = 'quick-save-toast';
  toast.textContent = '✓ « ' + name + ' » ajouté à ' + cat;
  document.body.appendChild(toast);
  setTimeout(function() {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(-10px)';
  }, 2200);
  setTimeout(function() { toast.remove(); }, 2700);
}

// Suppression d'un ingrédient personnalisé (croix rouge)
function removeCustomPlacardItem(event, itemEl) {
  if (event) {
    event.stopPropagation(); // ne pas toggler la coche
    event.preventDefault();
  }
  var name = itemEl.dataset.name;
  var cat  = itemEl.dataset.cat;
  if (!name || !cat) return;
  if (!confirm('Supprimer « ' + name + ' » du placard ?')) return;

  loadPlacardCustom();
  if (floraPlacardCustom[cat]) {
    floraPlacardCustom[cat] = floraPlacardCustom[cat].filter(function(x) { return x !== name; });
    if (!floraPlacardCustom[cat].length) delete floraPlacardCustom[cat];
    savePlacardCustom();
  }
  // Décocher si coché
  if (placardItems[name]) {
    delete placardItems[name];
    localStorage.setItem('flora_placard', JSON.stringify(placardItems));
  }
  renderPlacard();
}

// ============================================================
// MES RECETTES — recettes personnalisées éditables
// ============================================================
// Stockage : localStorage 'flora_my_recettes' = tableau des recettes
// IDs custom à partir de MY_RECIPE_ID_BASE pour ne jamais collisionner
// avec les 175 recettes officielles.

var MY_RECIPE_ID_BASE = 100000;
var floraMyRecettes = [];

function loadMyRecettes() {
  try {
    floraMyRecettes = JSON.parse(localStorage.getItem('flora_my_recettes') || '[]');
    if (!Array.isArray(floraMyRecettes)) floraMyRecettes = [];
  } catch (e) {
    floraMyRecettes = [];
  }
}

function saveMyRecettes() {
  try {
    localStorage.setItem('flora_my_recettes', JSON.stringify(floraMyRecettes));
  } catch (e) {
    console.error('[Flōra] Erreur save mes recettes:', e);
  }
}

// Fusionne les recettes perso dans le tableau global RECETTES
// (mutation pour éviter de toucher aux 44 références à RECETTES dans le code)
function mergeMyRecettesIntoGlobal() {
  if (typeof RECETTES === 'undefined' || !Array.isArray(RECETTES)) return;
  // Retirer d'abord toute recette perso précédemment ajoutée
  for (var i = RECETTES.length - 1; i >= 0; i--) {
    if (RECETTES[i].id >= MY_RECIPE_ID_BASE) RECETTES.splice(i, 1);
  }
  // Puis ré-ajouter les actuelles
  floraMyRecettes.forEach(function(r) { RECETTES.push(r); });
}

// Génère un nouvel ID unique pour une recette perso
function generateMyRecipeId() {
  var maxId = MY_RECIPE_ID_BASE - 1;
  floraMyRecettes.forEach(function(r) { if (r.id > maxId) maxId = r.id; });
  return maxId + 1;
}

// Page liste "Mes recettes"
function renderMyRecettes() {
  loadMyRecettes();
  var container = document.getElementById('my-recettes-container');
  if (!container) return;

  if (!floraMyRecettes.length) {
    container.innerHTML =
      '<button class="btn-primary full-width" onclick="openMyRecipeModal(null)" style="margin-bottom:16px;">+ Créer ma première recette</button>' +
      '<div class="empty-state">' +
        svgEmptyJournal() +
        '<div class="empty-state-title">Aucune recette personnelle pour l\'instant</div>' +
        '<div class="empty-state-text">Crée tes propres recettes pour les retrouver dans la recherche, le générateur de menu et tes favoris.</div>' +
      '</div>';
    return;
  }

  var html = '<button class="btn-primary full-width" onclick="openMyRecipeModal(null)" style="margin-bottom:16px;">+ Nouvelle recette</button>';
  html += '<div class="recettes-grid">';
  floraMyRecettes.forEach(function(r) {
    html +=
      '<div class="recette-card my-recipe-card">' +
        '<div class="recette-emoji cat-' + r.cat + '" onclick="openRecette(' + r.id + ')">' + (r.emoji || '🥗') + '</div>' +
        '<button class="my-recipe-edit-btn" onclick="openMyRecipeModal(' + r.id + ')" aria-label="Modifier">✎</button>' +
        '<button class="my-recipe-delete-btn" onclick="deleteMyRecipe(' + r.id + ')" aria-label="Supprimer">×</button>' +
        '<div class="recette-info" onclick="openRecette(' + r.id + ')">' +
          '<div class="recette-name">' + escapeHtml(r.nom) + '</div>' +
          '<div class="recette-meta">' +
            '<span class="recette-time">⏱ ' + escapeHtml(r.temps || '—') + '</span>' +
          '</div>' +
        '</div>' +
      '</div>';
  });
  html += '</div>';
  container.innerHTML = html;
}

// Modal de création / édition
// id = null pour création, id existant pour édition
function openMyRecipeModal(id) {
  loadMyRecettes();
  var existing = document.getElementById('my-recipe-modal');
  if (existing) existing.remove();

  var isEdit = id != null;
  var r = isEdit ? floraMyRecettes.find(function(x) { return x.id === id; }) : null;
  if (isEdit && !r) {
    alert('Recette introuvable.');
    return;
  }

  // Valeurs par défaut
  var nom        = r ? r.nom : '';
  var emoji      = r ? (r.emoji || '🥗') : '🥗';
  var cat        = r ? r.cat : 'dejeuner';
  var temps      = r ? (r.temps || '') : '';
  var calories   = r ? (r.calories || '') : '';
  var diff       = r ? (r.diff || 'Facile') : 'Facile';
  var benefices  = r ? (r.benefices || '') : '';
  var ingredients = r && r.ingredients ? r.ingredients.join('\n') : '';
  var etapes      = r && r.etapes      ? r.etapes.join('\n')     : '';
  var tagsArr    = r && r.tags ? r.tags : [];
  var tagSg = tagsArr.indexOf('sg') >= 0;
  var tagSl = tagsArr.indexOf('sl') >= 0;
  var tagVg = tagsArr.indexOf('vg') >= 0;

  var modal = document.createElement('div');
  modal.id = 'my-recipe-modal';
  modal.className = 'quick-modal-overlay';
  modal.onclick = function(e) {
    if (e.target === modal) closeMyRecipeModal();
  };

  // Petit set d'emojis fréquents pour la cuisine
  var emojiChoices = ['🥗','🍲','🥘','🍝','🍜','🍛','🍱','🥑','🍳','🥞','🥐','🍞','🍰','🧁','🥧','🍫','🍪','🍮','🍯','🍓','🥝','🍌','🥭','🍎','🍊','🍋','🥥','🥕','🥔','🍅','🥒','🌽','🍆','🥬','🥦','🌶','🫑','🍄','🌰','🥜','🍤','🦐','🐟','🍣','🍱','🥩','🍗','🥚','🥛','🍵','☕','🍷'];
  var emojiHTML = emojiChoices.map(function(e) {
    return '<button type="button" class="emoji-pick' + (e === emoji ? ' active' : '') + '" onclick="selectMyRecipeEmoji(\'' + e + '\')">' + e + '</button>';
  }).join('');

  modal.innerHTML =
    '<div class="quick-modal" style="max-width:520px;max-height:94vh;">' +
      '<div class="quick-modal-header">' +
        '<div class="quick-modal-title">' + (isEdit ? '✎ Modifier ma recette' : '+ Nouvelle recette') + '</div>' +
        '<button class="quick-modal-close" onclick="closeMyRecipeModal()" aria-label="Fermer">✕</button>' +
      '</div>' +

      // Nom
      '<div class="quick-section">' +
        '<div class="quick-section-title">Nom de la recette *</div>' +
        '<input type="text" id="myr-nom" class="field" placeholder="Ex: Curry doux pois chiches courge" maxlength="80" value="' + escapeHtml(nom) + '" />' +
      '</div>' +

      // Emoji
      '<div class="quick-section">' +
        '<div class="quick-section-title">Emoji</div>' +
        '<div id="myr-emoji-current" class="myr-emoji-current">' + emoji + '</div>' +
        '<div class="myr-emoji-grid">' + emojiHTML + '</div>' +
      '</div>' +

      // Catégorie + difficulté + temps + calories
      '<div class="quick-section">' +
        '<div class="quick-section-title">Catégorie *</div>' +
        '<select id="myr-cat" class="field">' +
          '<option value="petit-dejeuner"' + (cat==='petit-dejeuner'?' selected':'') + '>🌅 Petit-déjeuner</option>' +
          '<option value="brunch"'         + (cat==='brunch'        ?' selected':'') + '>🥂 Brunch</option>' +
          '<option value="dejeuner"'       + (cat==='dejeuner'      ?' selected':'') + '>☀️ Déjeuner</option>' +
          '<option value="diner"'          + (cat==='diner'         ?' selected':'') + '>🌙 Dîner</option>' +
          '<option value="snack"'          + (cat==='snack'         ?' selected':'') + '>🍎 Snack</option>' +
        '</select>' +
      '</div>' +

      '<div class="quick-section" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">' +
        '<div>' +
          '<div class="quick-section-title">Temps</div>' +
          '<input type="text" id="myr-temps" class="field" placeholder="20 min" value="' + escapeHtml(temps) + '" />' +
        '</div>' +
        '<div>' +
          '<div class="quick-section-title">Calories</div>' +
          '<input type="number" id="myr-calories" class="field" placeholder="400" value="' + escapeHtml(String(calories)) + '" min="0" max="2000" />' +
        '</div>' +
        '<div>' +
          '<div class="quick-section-title">Difficulté</div>' +
          '<select id="myr-diff" class="field">' +
            '<option value="Très facile"'   + (diff==='Très facile'  ?' selected':'') + '>Très facile</option>' +
            '<option value="Facile"'        + (diff==='Facile'       ?' selected':'') + '>Facile</option>' +
            '<option value="Intermédiaire"' + (diff==='Intermédiaire'?' selected':'') + '>Intermédiaire</option>' +
            '<option value="Avancée"'       + (diff==='Avancée'      ?' selected':'') + '>Avancée</option>' +
          '</select>' +
        '</div>' +
      '</div>' +

      // Tags
      '<div class="quick-section">' +
        '<div class="quick-section-title">Régime</div>' +
        '<div class="myr-tags">' +
          '<label class="myr-tag-label"><input type="checkbox" id="myr-tag-sg"' + (tagSg?' checked':'') + ' /> Sans gluten</label>' +
          '<label class="myr-tag-label"><input type="checkbox" id="myr-tag-sl"' + (tagSl?' checked':'') + ' /> Sans lactose</label>' +
          '<label class="myr-tag-label"><input type="checkbox" id="myr-tag-vg"' + (tagVg?' checked':'') + ' /> Végétarien</label>' +
        '</div>' +
      '</div>' +

      // Ingrédients
      '<div class="quick-section">' +
        '<div class="quick-section-title">Ingrédients * <span style="font-weight:400;color:var(--text-light);font-size:0.7rem;">(un par ligne)</span></div>' +
        '<textarea id="myr-ingredients" class="field" rows="6" placeholder="200g lentilles corail&#10;1 oignon&#10;2 c.à.s curcuma&#10;400ml lait de coco">' + escapeHtml(ingredients) + '</textarea>' +
      '</div>' +

      // Étapes
      '<div class="quick-section">' +
        '<div class="quick-section-title">Étapes * <span style="font-weight:400;color:var(--text-light);font-size:0.7rem;">(une par ligne)</span></div>' +
        '<textarea id="myr-etapes" class="field" rows="6" placeholder="Émincer l\'oignon, le faire revenir.&#10;Ajouter les lentilles et l\'eau, cuire 15 min.&#10;Ajouter le lait de coco et les épices.">' + escapeHtml(etapes) + '</textarea>' +
      '</div>' +

      // Bénéfices
      '<div class="quick-section">' +
        '<div class="quick-section-title">Bénéfices nutritionnels <span style="font-weight:400;color:var(--text-light);font-size:0.7rem;">(facultatif)</span></div>' +
        '<textarea id="myr-benefices" class="field" rows="3" placeholder="Riche en fibres, anti-inflammatoire, source de fer.">' + escapeHtml(benefices) + '</textarea>' +
      '</div>' +

      // Erreur
      '<div id="myr-error" style="display:none;color:#c0614a;font-size:0.82rem;margin-bottom:10px;padding:10px;background:#fde8e0;border-radius:8px;"></div>' +

      // Boutons
      '<div class="quick-modal-actions">' +
        '<button class="quick-btn-cancel" onclick="closeMyRecipeModal()">Annuler</button>' +
        '<button class="quick-btn-save" onclick="saveMyRecipe(' + (isEdit ? id : 'null') + ')">💾 ' + (isEdit ? 'Enregistrer' : 'Créer') + '</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(modal);
  modal.dataset.selectedEmoji = emoji;
}

function selectMyRecipeEmoji(e) {
  var modal = document.getElementById('my-recipe-modal');
  if (!modal) return;
  modal.dataset.selectedEmoji = e;
  var disp = document.getElementById('myr-emoji-current');
  if (disp) disp.textContent = e;
  // Mise à jour visuelle des chips
  var btns = modal.querySelectorAll('.emoji-pick');
  btns.forEach(function(b) {
    b.classList.toggle('active', b.textContent === e);
  });
}

function closeMyRecipeModal() {
  var modal = document.getElementById('my-recipe-modal');
  if (modal) modal.remove();
}

function saveMyRecipe(idOrNull) {
  var modal = document.getElementById('my-recipe-modal');
  var errEl = document.getElementById('myr-error');
  function showErr(msg) {
    if (errEl) {
      errEl.textContent = msg;
      errEl.style.display = 'block';
    }
  }
  if (errEl) errEl.style.display = 'none';

  var nom = (document.getElementById('myr-nom').value || '').trim();
  if (!nom)             { showErr('Donne un nom à ta recette.'); return; }
  if (nom.length > 80)  { showErr('Nom trop long (80 caractères max).'); return; }

  var cat = document.getElementById('myr-cat').value;
  var temps = (document.getElementById('myr-temps').value || '').trim();
  var calories = parseInt(document.getElementById('myr-calories').value, 10) || 0;
  var diff = document.getElementById('myr-diff').value;
  var benefices = (document.getElementById('myr-benefices').value || '').trim();
  var emoji = (modal && modal.dataset.selectedEmoji) || '🥗';

  var ingredientsRaw = (document.getElementById('myr-ingredients').value || '').trim();
  var ingredients = ingredientsRaw.split('\n').map(function(l) { return l.trim(); }).filter(function(l) { return l.length > 0; });
  if (!ingredients.length) { showErr('Ajoute au moins un ingrédient.'); return; }

  var etapesRaw = (document.getElementById('myr-etapes').value || '').trim();
  var etapes = etapesRaw.split('\n').map(function(l) { return l.trim(); }).filter(function(l) { return l.length > 0; });
  if (!etapes.length) { showErr('Ajoute au moins une étape.'); return; }

  var tags = [];
  if (document.getElementById('myr-tag-sg').checked) tags.push('sg');
  if (document.getElementById('myr-tag-sl').checked) tags.push('sl');
  if (document.getElementById('myr-tag-vg').checked) tags.push('vg');

  // Vérification de cohérence Flōra : nom + chaque ingrédient
  var alertes = [];
  var nomAlerte = checkFloraCompat(nom);
  if (nomAlerte) alertes.push({ where: 'le nom de la recette', text: nom, info: nomAlerte });
  ingredients.forEach(function(ing) {
    var a = checkFloraCompat(ing);
    if (a) alertes.push({ where: 'l\'ingrédient « ' + ing + ' »', text: ing, info: a });
  });

  if (alertes.length) {
    // Ne montrer que la première alerte la plus sévère, mais lister les mots-clés
    var maxAlerte = alertes[0];
    alertes.forEach(function(a) {
      var rank = { bloquant: 3, inflammatoire: 2, info: 1 };
      if (rank[a.info.niveau] > rank[maxAlerte.info.niveau]) maxAlerte = a;
    });
    var listeMots = alertes.map(function(a) { return a.info.mot.trim(); });
    var listeMotsUniq = [];
    listeMots.forEach(function(m) { if (listeMotsUniq.indexOf(m) < 0) listeMotsUniq.push(m); });

    var msg = '';
    if (maxAlerte.info.niveau === 'bloquant') {
      msg = maxAlerte.info.icon + ' Cette recette contient des éléments qui contredisent les principes Flōra (gluten ou laitage animal).\n\n' +
            'Mots-clés détectés : ' + listeMotsUniq.join(', ') + '\n\n' +
            'Tu peux quand même l\'enregistrer (par exemple si tu cuisines pour quelqu\'un d\'autre).\n\n' +
            'Vraiment enregistrer ?';
    } else if (maxAlerte.info.niveau === 'inflammatoire') {
      msg = maxAlerte.info.icon + ' Cette recette contient des aliments pro-inflammatoires.\n\n' +
            'Mots-clés détectés : ' + listeMotsUniq.join(', ') + '\n\n' +
            'Confirmer l\'enregistrement ?';
    } else {
      msg = maxAlerte.info.icon + ' Cette recette contient ' + listeMotsUniq.join(', ') + ' (à consommer avec modération).\n\n' +
            'Enregistrer quand même ?';
    }
    if (!confirm(msg)) return;
  }

  loadMyRecettes();
  var newRecipe;
  if (idOrNull == null || idOrNull === 'null') {
    // Création
    newRecipe = {
      id: generateMyRecipeId(),
      cat: cat,
      premium: false,
      emoji: emoji,
      nom: nom,
      temps: temps,
      calories: calories,
      diff: diff,
      tags: tags,
      benefices: benefices,
      ingredients: ingredients,
      etapes: etapes,
      isMyRecipe: true,    // marqueur
      createdAt: Date.now()
    };
    floraMyRecettes.push(newRecipe);
  } else {
    // Édition
    var idx = floraMyRecettes.findIndex(function(x) { return x.id === idOrNull; });
    if (idx < 0) { showErr('Recette introuvable.'); return; }
    floraMyRecettes[idx] = Object.assign({}, floraMyRecettes[idx], {
      cat: cat, emoji: emoji, nom: nom, temps: temps,
      calories: calories, diff: diff, tags: tags,
      benefices: benefices, ingredients: ingredients, etapes: etapes,
      updatedAt: Date.now()
    });
    newRecipe = floraMyRecettes[idx];
  }
  saveMyRecettes();
  mergeMyRecettesIntoGlobal();

  // Rafraîchir les vues qui dépendent de RECETTES
  if (typeof renderRecettes === 'function') renderRecettes();
  if (typeof updateRecipeCounters === 'function') updateRecipeCounters();
  if (typeof checkBadges === 'function') checkBadges();

  closeMyRecipeModal();
  renderMyRecettes();

  // Toast
  var toast = document.createElement('div');
  toast.className = 'quick-save-toast';
  toast.textContent = (idOrNull == null || idOrNull === 'null') ? '✓ Recette « ' + nom + ' » créée' : '✓ Recette modifiée';
  document.body.appendChild(toast);
  setTimeout(function() {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(-10px)';
  }, 2200);
  setTimeout(function() { toast.remove(); }, 2700);
}

function deleteMyRecipe(id) {
  loadMyRecettes();
  var r = floraMyRecettes.find(function(x) { return x.id === id; });
  if (!r) return;
  if (!confirm('Supprimer la recette « ' + r.nom + ' » ?\n\nElle sera retirée de la recherche, du générateur et de tes favoris si applicable.')) return;
  floraMyRecettes = floraMyRecettes.filter(function(x) { return x.id !== id; });
  saveMyRecettes();
  mergeMyRecettesIntoGlobal();
  // Retirer aussi du système favoris s'il y était
  if (typeof floraFavoris !== 'undefined' && floraFavoris[id]) {
    delete floraFavoris[id];
    if (typeof saveFavoris === 'function') saveFavoris();
  }
  // Rafraîchir les vues
  if (typeof renderRecettes === 'function') renderRecettes();
  if (typeof updateRecipeCounters === 'function') updateRecipeCounters();
  renderMyRecettes();
}

function updateMyRecipesSummary() {
  loadMyRecettes();
  var line = document.getElementById('my-recipes-summary-line');
  if (!line) return;
  var n = floraMyRecettes.length;
  if (n === 0)      line.textContent = 'Tes créations personnelles →';
  else if (n === 1) line.textContent = '1 recette créée →';
  else              line.textContent = n + ' recettes créées →';
}

function setBudget(amount) {
  currentBudget = amount;
  const input = document.getElementById('budget-input');
  if (input) input.value = amount;
  document.querySelectorAll('.budget-chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.textContent) === amount);
  });
  // Régénérer automatiquement la liste si elle est déjà visible
  const result = document.getElementById('shopping-result');
  if (result && !result.classList.contains('hidden')) {
    generateShoppingList();
  }
}

function generateShoppingList() {
  const budget = parseInt(document.getElementById('budget-input').value) || 80;
  currentBudget = budget;

  // Helper : vérifier si un essentiel est déjà dans le placard
  // Match flou : "Sardines" matche "Sardines fraîches", "Sardines en boîte", etc.
  const isInPlacard = (essentialName) => {
    const keyword = essentialName.toLowerCase();
    // 1. Match exact
    if (placardItems[essentialName]) return true;
    // 2. Match flou : n'importe quelle clé cochée du placard contient le mot-clé
    for (const key in placardItems) {
      if (placardItems[key] && key.toLowerCase().includes(keyword)) {
        return true;
      }
    }
    return false;
  };

  // Liste hiérarchisée : essentiels d'abord, puis variété, puis superaliments selon budget
  const essentials = [
    { 
      cat: '🥩 Protéines', 
      priority: ['Œufs bio', 'Sardines', 'Pois chiches', 'Lentilles'],
      bonus: ['Tofu', 'Saumon frais', 'Filet de poulet bio', 'Maquereaux'],
      premium: ['Boeuf haché bio', 'Agneau', 'Crevettes']
    },
    { 
      cat: '🥦 Légumes', 
      priority: ['Épinards', 'Brocoli', 'Courgette', 'Carotte'],
      bonus: ['Poivron', 'Aubergine', 'Patate douce', 'Champignons'],
      premium: ['Asperges', 'Artichaut', 'Endives']
    },
    { 
      cat: '🌾 Féculents', 
      priority: ['Riz complet', 'Quinoa'],
      bonus: ['Patate douce', 'Sarrasin', 'Pâtes sans gluten'],
      premium: ['Millet', 'Amarante']
    },
    { 
      cat: '🥑 Bons gras', 
      priority: ['Avocat', 'Noix', 'Graines de courge'],
      bonus: ['Amandes', 'Graines de chia', 'Graines de lin'],
      premium: ['Noix de macadamia', 'Pignons de pin']
    },
    { 
      cat: '🥫 Conserves', 
      priority: ['Tomates concassées', 'Lait de coco'],
      bonus: ['Haricots rouges', 'Olives'],
      premium: ['Cœurs d\'artichaut', 'Tahini']
    },
    { 
      cat: '🍋 Fruits', 
      priority: ['Citron', 'Banane'],
      bonus: ['Myrtilles', 'Pomme', 'Orange'],
      premium: ['Grenade', 'Mangue', 'Framboises']
    },
    { 
      cat: '🌿 Frais & herbes', 
      priority: [],
      bonus: ['Persil plat', 'Coriandre fraîche', 'Basilic frais'],
      premium: ['Aneth', 'Estragon', 'Cerfeuil']
    },
    { 
      cat: '🌱 Superaliments', 
      priority: [],
      bonus: [],
      premium: ['Spiruline en poudre', 'Protéines de chanvre', 'Algues wakamé séchées']
    },
  ];

  // Plafond du nombre d'articles selon budget — pour vraie différenciation
  // (en plus du plafond budgétaire)
  const maxItemsByBudget = budget < 40 ? 6
                         : budget < 60 ? 10
                         : budget < 90 ? 16
                         : 24;

  let total = 0;
  let itemCount = 0;
  const selected = [];

  // Stratégie selon budget
  const tiers = budget < 60 ? ['priority'] 
              : budget < 90 ? ['priority', 'bonus']
              : ['priority', 'bonus', 'premium'];

  for (const cat of essentials) {
    const catSelected = [];
    
    for (const tier of tiers) {
      for (const item of cat[tier] || []) {
        // Vérifier qu'on n'a pas atteint le plafond d'articles
        if (itemCount >= maxItemsByBudget) break;
        // Vérifier que l'article n'est pas déjà dans le placard (match flou)
        if (isInPlacard(item)) continue;
        // Vérifier que le prix tient dans le budget
        const price = INGREDIENT_PRICES[item] || 2.00;
        if (total + price > budget) continue;
        
        catSelected.push({ item, price });
        total += price;
        itemCount++;
      }
      if (itemCount >= maxItemsByBudget) break;
    }
    
    if (catSelected.length) selected.push({ cat: cat.cat, items: catSelected });
    if (itemCount >= maxItemsByBudget) break;
  }

  // Afficher
  const result = document.getElementById('shopping-result');
  const content = document.getElementById('shopping-list-content');
  document.getElementById('budget-total-badge').textContent =
    `${total.toFixed(2)}€ / ${budget}€`;

  // Si rien à acheter : message dédié
  if (itemCount === 0) {
    content.innerHTML = `
      <div class="shopping-empty">
        <div class="shopping-empty-icon">✨</div>
        <div class="shopping-empty-title">Vous avez déjà tout !</div>
        <div class="shopping-empty-sub">Tous les essentiels que je propose sont déjà dans votre placard. Bravo !</div>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="shopping-meta">
        <span class="shopping-meta-count">${itemCount} article${itemCount > 1 ? 's' : ''} à acheter</span>
        <span class="shopping-meta-budget">Budget : ${budget}€/sem.</span>
      </div>
      ${selected.map(cat => `
        <div class="shopping-category">
          <div class="shopping-cat-title">${cat.cat}</div>
          ${cat.items.map(({item, price}) => `
            <div class="shopping-item" onclick="this.classList.toggle('done')">
              <div class="shopping-check">✓</div>
              <div class="shopping-text">${item}</div>
              <div class="shopping-price">~${price.toFixed(2)}€</div>
            </div>
          `).join('')}
        </div>
      `).join('')}
    `;
  }

  // Générer menus basés sur les ingrédients du panier + placard
  const allItems = selected.flatMap(c => c.items.map(i => i.item));
  const placardCheckedItems = Object.keys(placardItems).filter(k => placardItems[k]);
  generateMenusFromBasket([...allItems, ...placardCheckedItems]);

  result.classList.remove('hidden');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function generateMenusFromBasket(basketItems) {
  // Trouver des recettes dont les ingrédients correspondent au panier
  const scored = RECETTES.map(r => {
    const matches = r.ingredients.filter(ing =>
      basketItems.some(b => ing.toLowerCase().includes(b.toLowerCase()))
    ).length;
    return { r, matches };
  }).filter(x => x.matches > 0)
    .sort((a, b) => b.matches - a.matches);

  const topRecettes = scored.slice(0, 9);
  const menusDiv = document.getElementById('shopping-menus');
  const menusContent = document.getElementById('shopping-menus-content');

  if (!topRecettes.length) { menusDiv.classList.add('hidden'); return; }

  const bycat = { 'petit-dejeuner': [], 'dejeuner': [], 'diner': [] };
  topRecettes.forEach(({r}) => { if (bycat[r.cat]) bycat[r.cat].push(r); });

  menusContent.innerHTML = `
    <div style="font-size:0.8rem;color:var(--text-light);margin-bottom:12px;">
      Basé sur votre panier de ${basketItems.length} ingrédients
    </div>
    ${Object.entries(bycat).map(([cat, recs]) => recs.length ? `
      <div style="margin-bottom:14px;">
        <div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-light);margin-bottom:8px;">
          ${cat === 'petit-dejeuner' ? '🌅 Petits-déjeuners' : cat === 'dejeuner' ? '☀️ Déjeuners' : '🌙 Dîners'}
        </div>
        ${recs.map(r => `
          <div class="card" style="margin-bottom:8px;" onclick="openRecette(${r.id})">
            <div class="card-icon">${r.emoji}</div>
            <div class="card-body">
              <div class="card-title">${r.nom}</div>
              <div class="card-sub">⏱ ${r.temps}</div>
            </div>
            <div class="card-arrow">→</div>
          </div>
        `).join('')}
      </div>
    ` : '').join('')}
  `;

  menusDiv.classList.remove('hidden');
}

function filterRecettesByPlacard() {
  const checkedItems = Object.keys(placardItems).filter(k => placardItems[k]);
  if (!checkedItems.length) {
    showPage('recettes');
    return;
  }

  // Filtrer les recettes : au moins 50% des ingrédients dans le placard
  const matching = RECETTES.filter(r => {
    const total = r.ingredients.length;
    const matched = r.ingredients.filter(ing =>
      checkedItems.some(item => ing.toLowerCase().includes(item.toLowerCase()))
    ).length;
    return total > 0 && (matched / total) >= 0.5;
  });

  // IMPORTANT : définir le filtre AVANT showPage pour qu'il soit pris en compte
  // au premier render automatique de showPage
  window._placardFilter = checkedItems;
  
  showPage('recettes');
  // Forcer un second render pour s'assurer que le filtre est bien appliqué
  renderRecettes();

  setTimeout(() => {
    const msg = document.createElement('div');
    msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:var(--green-deep);color:var(--white);padding:10px 18px;border-radius:99px;font-size:0.82rem;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.2);white-space:nowrap;';
    msg.textContent = `🗄️ ${matching.length} recette${matching.length > 1 ? 's' : ''} avec votre placard`;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
  }, 200);
}

// ============================
// BATCH COOKING
// ============================

const BATCH_STEPS_LIBRARY = [
  {
    id: 'base-cereales',
    title: 'Cuire les céréales de base',
    emoji: '🌾',
    time: '20 min',
    body: 'Mettez en route simultanément : <ul><li>200g de quinoa dans 400ml d\'eau</li><li>200g de riz complet dans 400ml d\'eau</li></ul>Laissez cuire à feu doux, couverts.',
    recettes: []
  },
  {
    id: 'legumineuses',
    title: 'Cuire les légumineuses',
    emoji: '🫘',
    time: '30 min',
    body: 'Pendant que les céréales cuisent : <ul><li>400g de lentilles corail : 10 min à l\'eau bouillante</li><li>Ou réchauffez 2 boîtes de pois chiches avec cumin et curcuma</li></ul>Préparez pour 4 portions.',
    recettes: []
  },
  {
    id: 'legumes-four',
    title: 'Légumes rôtis au four',
    emoji: '🥦',
    time: '25 min',
    body: 'Préchauffez le four à 200°C. Coupez en cubes et disposez sur une plaque : <ul><li>2 courgettes</li><li>1 patate douce</li><li>2 poivrons</li><li>Huile d\'olive + sel Santé + curcuma</li></ul>Enfournez 20-25 min.',
    recettes: []
  },
  {
    id: 'proteines',
    title: 'Préparer les protéines',
    emoji: '🥚',
    time: '15 min',
    body: '<ul><li>Faites cuire 6 œufs durs (10 min)</li><li>Faites revenir 2 blancs de poulet avec ail et herbes</li><li>Émiettez 1 boîte de sardines avec citron et persil</li></ul>Conservez au frigo en boîtes séparées.',
    recettes: []
  },
  {
    id: 'sauces-bases',
    title: 'Préparer les sauces de base',
    emoji: '🥣',
    time: '10 min',
    body: '<ul><li><strong>Houmous rapide</strong> : mixez pois chiches + tahini + citron + ail</li><li><strong>Vinaigrette anti-inflam</strong> : huile de colza + citron + curcuma + moutarde</li><li><strong>Pesto express</strong> : basilic + amandes + huile d\'olive + ail</li></ul>',
    recettes: []
  },
  {
    id: 'snacks',
    title: 'Préparer les snacks de la semaine',
    emoji: '🍫',
    time: '10 min',
    body: '<ul><li>Formez 12 energy balls dattes-cacao-amandes</li><li>Portionnez les noix en 5 sachets (lundi→vendredi)</li><li>Lavez et préparez les fruits pour la semaine</li></ul>',
    recettes: []
  },
  {
    id: 'soupe-veloutee',
    title: 'Préparer un velouté pour 3 jours',
    emoji: '🍵',
    time: '20 min',
    body: 'Un grand velouté batch : <ul><li>1 chou-fleur ou 1 courge</li><li>1 oignon, 2 gousses d\'ail</li><li>400ml lait de coco ou d\'amande</li><li>Curcuma, Sel Santé</li></ul>Mixez et conservez au frigo 3 jours.',
    recettes: []
  },
  {
    id: 'rangement',
    title: 'Ranger et étiqueter',
    emoji: '🗄️',
    time: '10 min',
    body: '<ul><li>Portionnez chaque préparation en 3-4 boîtes</li><li>Étiquetez avec le contenu et la date</li><li>Rangez par catégorie au frigo</li><li>Mettez à congeler ce qui dépasse 3 jours</li></ul>Votre semaine est prête ! 🎉',
    recettes: []
  }
];

// Sélection d'un chip dans un groupe batch (jour ou durée)
// group : préfixe identifiant le groupe (batch-day, batch-time)
// value : valeur du chip cliqué (sert de marqueur, non utilisée pour le moment)
function selectSleepChip(el, group, value) {
  if (!el) return;
  // Désactiver les chips du même groupe (mêmes attributs onclick)
  var siblings = el.parentElement ? el.parentElement.querySelectorAll('.sleep-chip') : [];
  siblings.forEach(function(s) {
    if (s.getAttribute('onclick') && s.getAttribute('onclick').indexOf(group) >= 0) {
      s.classList.remove('active');
    }
  });
  el.classList.add('active');
}

function generateBatch() {
  // Récupérer le chip temps actif dans la page batch
  const timeChips = document.querySelectorAll('#page-batch .sleep-chip');
  let availableTime = '2h';
  timeChips.forEach(chip => {
    if (chip.classList.contains('active') && ['1h','2h','3h'].includes(chip.textContent.trim())) {
      availableTime = chip.textContent.trim();
    }
  });

  const maxSteps = availableTime === '1h' ? 3 : availableTime === '2h' ? 5 : 8;

  batchPlan = BATCH_STEPS_LIBRARY.slice(0, maxSteps);
  batchCurrentStep = 0;

  document.getElementById('batch-weekly-summary').classList.add('hidden');
  renderBatchPlan();
  document.getElementById('batch-plan').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('batch-plan').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function renderBatchPlan() {
  const container = document.getElementById('batch-steps-container');
  const total = batchPlan.length;

  // Barre de progression
  const pct = total > 0 ? Math.round((batchCurrentStep / total) * 100) : 0;
  document.getElementById('batch-progress-fill').style.width = pct + '%';
  document.getElementById('batch-progress-label').textContent =
    `Étape ${batchCurrentStep} / ${total}`;

  container.innerHTML = batchPlan.map((step, i) => {
    const state = i < batchCurrentStep ? 'done' : i === batchCurrentStep ? 'active' : '';
    return `
      <div class="batch-step ${state}" id="batch-step-${i}">
        <div class="batch-step-header">
          <div class="batch-step-num">${i < batchCurrentStep ? '✓' : i + 1}</div>
          <div class="batch-step-title">${step.emoji} ${step.title}</div>
          <div class="batch-step-time">⏱ ${step.time}</div>
        </div>
        ${i === batchCurrentStep ? `
          <div class="batch-step-body">${step.body}</div>
          <div class="batch-timer">⏱ ${step.time} estimées pour cette étape</div>
          <div class="batch-step-actions">
            <button class="batch-btn-done" onclick="completeBatchStep(${i})">
              ✅ Étape terminée
            </button>
            <button class="batch-btn-skip" onclick="skipBatchStep(${i})">Passer</button>
          </div>
        ` : i < batchCurrentStep ? `
          <div class="batch-step-body" style="font-size:0.8rem;color:var(--green-mid);">✓ Terminé</div>
        ` : `
          <div class="batch-step-body" style="color:var(--text-light);font-size:0.82rem;">En attente…</div>
        `}
      </div>
    `;
  }).join('');

  // Afficher le résumé final si tout est fait
  if (batchCurrentStep >= total && total > 0) {
    document.getElementById('batch-weekly-summary').classList.remove('hidden');
  }
}

function completeBatchStep(idx) {
  if (idx === batchCurrentStep) {
    batchCurrentStep++;
    renderBatchPlan();
    // Scroll à l'étape suivante
    setTimeout(() => {
      const next = document.getElementById('batch-step-' + batchCurrentStep);
      if (next) next.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  }
}

function skipBatchStep(idx) {
  completeBatchStep(idx);
}

function importBatchToAgenda() {
  // Génère un menu depuis les recettes batch et l'importe dans l'agenda
  const today = new Date();
  const petits = RECETTES.filter(r => r.cat === 'petit-dejeuner' && !r.premium);
  const dejs   = RECETTES.filter(r => r.cat === 'dejeuner' && !r.premium);
  const dins   = RECETTES.filter(r => r.cat === 'diner' && !r.premium);
  const pick   = arr => arr[Math.floor(Math.random() * arr.length)];

  for (let i = 0; i < 5; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dk = dateKey(d);
    if (!agenda[dk]) agenda[dk] = {};
    agenda[dk]['petitdej'] = pick(petits)?.id;
    agenda[dk]['dejeuner'] = pick(dejs)?.id;
    agenda[dk]['diner']    = pick(dins)?.id;
  }

  saveState();
  if (typeof checkBadges === 'function') checkBadges();
  showPage('agenda');

  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:var(--green-deep);color:var(--white);padding:10px 20px;border-radius:99px;font-size:0.85rem;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.2);';
  msg.textContent = '✅ Semaine batch importée dans l\'agenda !';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2500);
}

function initPlacard() {
  placardItems = JSON.parse(localStorage.getItem('flora_placard') || '{}');
  loadPlacardCustom();
  renderPlacard();
}

function initApp() {
  document.getElementById('app').classList.remove('hidden');
  loadState();
  initLogin();
  initPlacard();
  loadBadges();
  loadFavoris();
  loadMyRecettes();
  mergeMyRecettesIntoGlobal();
  updateDashboard();
  renderRecettes();
  renderAgenda();
  loadProfil();
  setJournalDate();
  updateRecipeCounters();
  checkBadges(true); // vérification silencieuse au démarrage

  // Recette du jour — change chaque jour, cliquable directement
  // Personnalisée selon le profil : carence en fer ou TDAH → priorité fer/dopamine
  let rdjPool = RECETTES.filter(r => !r.premium);
  if (profile.carenceFer || profile.tdah) {
    const motsFer = ['lentille', 'pois chiche', 'haricot', 'épinard', 'persil',
                     'tofu', 'sardine', 'thon', 'maquereau', 'graine de courge',
                     'sésame', 'amande', 'noix', 'cacao', 'spiruline'];
    const ferRich = rdjPool.filter(r =>
      r.ingredients && r.ingredients.some(ing =>
        motsFer.some(mot => ing.toLowerCase().includes(mot))
      )
    );
    if (ferRich.length > 0) rdjPool = ferRich;
  }
  const rdj  = rdjPool[new Date().getDate() % rdjPool.length];
  const rdjEl = document.getElementById('recette-du-jour');
  const rdjEmoji = document.getElementById('rdj-emoji');
  if (rdjEl)    rdjEl.textContent = rdj.nom;
  if (rdjEmoji) rdjEmoji.textContent = rdj.emoji;
  // Stocker l'ID pour openRecetteDuJour
  window._rdjId = rdj.id;

  renderStreakOnDashboard();
  renderConseil();
}

// ============================
// NAVIGATION
// ============================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.add('hidden');
    p.classList.remove('active');
  });

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('active');
  }

  // Activer le bouton nav correspondant — sans template literal
  document.querySelectorAll('.nav-btn').forEach(function(btn) {
    if (btn.getAttribute('data-page') === page) btn.classList.add('active');
  });

  if (page === 'accueil')    { updateDashboard(); }
  if (page === 'journal')    { setJournalDate(); loadJournalEntry(); renderJournalToday(); }
  if (page === 'recettes')   renderRecettes();
  if (page === 'agenda')     renderAgenda();
  if (page === 'profil')     { loadProfil(); checkBadges(true); updateMyRecipesSummary(); }
  if (page === 'badges')     renderBadges();
  if (page === 'mes-recettes') renderMyRecettes();
  if (page === 'apropos')    { /* static */ }
  if (page === 'batch')      { /* batch s'initialise via generateBatch() */ }
  if (page === 'generateur') {
    checkGenAccess();
    // Réinitialiser sur l'onglet semaine à chaque ouverture
    switchGenTab('semaine', document.querySelector('#page-generateur .jtab'));
  }
  if (page === 'placard')    initPlacard();
  if (page === 'insights')   renderInsights();
  if (page === 'etirements') renderEtirementsPage();
}

// ============================
// DASHBOARD
// ============================
function updateDashboard() {
  const name = profile.name || 'vous';
  const hour = new Date().getHours();
  let greeting = 'Bonsoir';
  if (hour < 12) greeting = 'Bonjour';
  else if (hour < 18) greeting = 'Bonne après-midi';

  document.getElementById('dash-greeting').textContent = `${greeting}, ${name} 🌿`;
  document.getElementById('header-greeting').textContent = name;

  const now = new Date();
  const opts = { weekday: 'long', day: 'numeric', month: 'long' };
  document.getElementById('dash-date').textContent = now.toLocaleDateString('fr-FR', opts);

  // Streak (via getStreak si disponible)
  const streak = typeof getStreak === 'function' ? getStreak() : 0;
  const streakEl = document.getElementById('streak-count');
  if (streakEl) streakEl.textContent = streak;

  // Statut journal aujourd'hui
  const today = dateKey(new Date());
  const journalStatus = document.getElementById('journal-today-status');
  if (journalStatus) {
    journalStatus.textContent = journal[today]
      ? `✅ Entrée du jour enregistrée`
      : 'Aucune entrée aujourd\'hui';
  }

  // Statut agenda aujourd'hui
  const agendaStatus = document.getElementById('agenda-today');
  if (agendaStatus && agenda[today]) {
    const repas = [];
    const repasMap = { petitdej:'Petit-déj', dejeuner:'Déjeuner', diner:'Dîner' };
    Object.entries(agenda[today]).forEach(([slug, recId]) => {
      const rec = RECETTES.find(r => r.id === recId);
      if (rec) repas.push(rec.emoji + ' ' + rec.nom.split('-')[0].trim());
    });
    if (repas.length) {
      agendaStatus.textContent = repas[0] + (repas.length > 1 ? ` +${repas.length-1}` : '');
    }
  }

  // Bloc "À manger aujourd'hui"
  renderTodayMeals();

  // Bandeau d'incitation à saisir le journal (si pertinent)
  renderJournalNudge();

  // Week chart
  renderWeekChart();
}

function renderWeekChart() {
  const container = document.getElementById('week-chart');
  container.innerHTML = '';
  const maxH = 56; // hauteur max en px (conteneur 96px - padding - label)

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const k = dateKey(d);
    const entry = journal[k];
    const dayLabel = JOURS[(d.getDay() + 6) % 7];

    const energie = entry ? entry.energie : 0;
    const heightPx = entry ? Math.max(3, Math.round((energie / 10) * maxH)) : 3;

    const wrap = document.createElement('div');
    wrap.className = 'chart-bar-wrap';
    wrap.innerHTML = `
      <div class="chart-bar ${entry ? 'filled' : ''}"
           style="height:${heightPx}px"
           title="${entry ? `Énergie: ${energie}/10` : 'Pas de données'}"></div>
      <div class="chart-day">${dayLabel}</div>
    `;
    container.appendChild(wrap);
  }
}

// ============================================================
// VUE "À MANGER AUJOURD'HUI" (sur l'accueil)
// ============================================================
// Affiche les repas planifiés du jour en lien direct vers les recettes.
// Si aucun repas planifié, le bloc reste masqué.
function renderTodayMeals() {
  var block = document.getElementById('today-meals-block');
  var list  = document.getElementById('today-meals-list');
  if (!block || !list) return;

  var todayKey = dateKey(new Date());
  var entry = agenda[todayKey];

  // Configuration des slots dans l'ordre chronologique
  var slots = [
    { key: 'petitdej', emoji: '🌅', label: 'Petit-déjeuner' },
    { key: 'dejeuner', emoji: '☀️', label: 'Déjeuner' },
    { key: 'snack',    emoji: '🍎', label: 'Collation' },
    { key: 'diner',    emoji: '🌙', label: 'Dîner' }
  ];

  // Construction des items remplis
  var items = [];
  if (entry) {
    slots.forEach(function(slot) {
      var v = entry[slot.key];
      var rId = (typeof v === 'number') ? v : (v && v.recetteId);
      if (!rId) return;
      var r = RECETTES.find(function(x) { return x.id === rId; });
      if (!r) return;
      items.push({ slot: slot, recette: r });
    });
  }

  // Si aucun repas planifié → masquer le bloc
  if (!items.length) {
    block.classList.add('hidden');
    list.innerHTML = '';
    return;
  }

  // Sinon construire la liste
  block.classList.remove('hidden');
  var html = '';
  items.forEach(function(it) {
    var r = it.recette;
    var locked = r.premium && !isPremium;
    var fnCall = locked ? 'openRecettePreview(' + r.id + ')' : 'openRecette(' + r.id + ')';
    html += '<div class="today-meal-item" onclick="' + fnCall + '">';
    html +=   '<div class="today-meal-emoji">' + r.emoji + '</div>';
    html +=   '<div class="today-meal-info">';
    html +=     '<div class="today-meal-slot">' + it.slot.emoji + ' ' + it.slot.label + '</div>';
    html +=     '<div class="today-meal-name">' + r.nom + '</div>';
    html +=     '<div class="today-meal-meta">⏱ ' + r.temps + (r.calories ? ' · ' + r.calories + ' kcal' : '') + '</div>';
    html +=   '</div>';
    html +=   '<div class="today-meal-arrow">›</div>';
    html += '</div>';
  });
  list.innerHTML = html;
}

// ============================================================
// BANDEAU D'INCITATION À SAISIR LE JOURNAL
// ============================================================
// Affiche un bandeau contextuel sur l'accueil :
//  - matin tôt (avant 9h) : rien (laisser tranquille au réveil)
//  - pas saisi + série en cours ≥ 3j : bandeau urgent (préservation streak)
//  - pas saisi (après 9h) : bandeau doux d'encouragement
//  - saisi aujourd'hui : bandeau discret de confirmation
function renderJournalNudge() {
  var nudge = document.getElementById('journal-nudge');
  if (!nudge) return;

  var now = new Date();
  var hour = now.getHours();
  var todayKey = dateKey(now);
  var saisiAujourdhui = !!journal[todayKey];

  // Calcul de la série préservable : jours consécutifs en remontant depuis HIER
  // (utilisé pour afficher "tu as N jours, ne casse pas la série")
  function getActiveStreak() {
    var d = new Date();
    d.setDate(d.getDate() - 1); // commencer hier
    var s = 0;
    while (journal[dateKey(d)]) {
      s++;
      d.setDate(d.getDate() - 1);
    }
    return s;
  }

  // — Cas 1 : saisi aujourd'hui → confirmation discrète
  if (saisiAujourdhui) {
    var streakNow = (typeof getStreak === 'function') ? getStreak() : 0;
    var msg = streakNow >= 7
      ? '✨ Journal saisi · ' + streakNow + ' jours de suite — superbe !'
      : '✨ Journal du jour saisi · merci d\'avoir pris ce temps';
    nudge.className = 'journal-nudge journal-nudge-done';
    nudge.innerHTML = '<span class="nudge-icon">✨</span><span class="nudge-text">' + msg + '</span>';
    nudge.classList.remove('hidden');
    return;
  }

  // — Cas 2 : avant 9h, pas saisi → silence respectueux
  if (hour < 9) {
    nudge.classList.add('hidden');
    nudge.innerHTML = '';
    return;
  }

  // — Cas 3 : pas saisi, série préservable ≥ 3 jours → bandeau urgent
  var activeStreak = getActiveStreak();
  if (activeStreak >= 3) {
    nudge.className = 'journal-nudge journal-nudge-urgent';
    nudge.innerHTML =
      '<span class="nudge-icon">🔥</span>' +
      '<span class="nudge-text"><strong>' + activeStreak + ' jours de suite</strong> — ne casse pas ta série, prends 2 min</span>' +
      '<span class="nudge-arrow">→</span>';
    nudge.classList.remove('hidden');
    return;
  }

  // — Cas 4 : pas saisi, ni urgent → bandeau doux
  var icon, text;
  if (hour < 14) {
    icon = '🌿';
    text = 'Comment s\'est passée ta nuit ? Note ton ressenti';
  } else if (hour < 20) {
    icon = '☀️';
    text = 'Pense à noter ton journal du jour quand tu auras un moment';
  } else {
    icon = '🌙';
    text = 'Avant la nuit, prends 2 min pour ton journal';
  }
  nudge.className = 'journal-nudge journal-nudge-soft';
  nudge.innerHTML =
    '<span class="nudge-icon">' + icon + '</span>' +
    '<span class="nudge-text">' + text + '</span>' +
    '<span class="nudge-arrow">→</span>';
  nudge.classList.remove('hidden');
}

// ============================================================
// MODE RAPIDE DU JOURNAL
// ============================================================
// Modal compact : qualité du sommeil, douleur globale, humeur.
// Ne touche PAS aux autres champs déjà saisis (cycles, repas, médicaments...).
// Conçu pour les jours où l'utilisatrice n'a pas le temps de tout détailler.

function openQuickJournal() {
  // S'assure que les variables _journalX correspondent à l'entrée du jour courant
  // (loadJournalEntry est normalement déjà appelée à l'ouverture de l'onglet,
  // mais on la rappelle au cas où)
  if (typeof loadJournalEntry === 'function') loadJournalEntry();

  var existing = document.getElementById('quick-journal-modal');
  if (existing) existing.remove();

  // Calcul de la douleur globale = max des 3 mesures (réveil/jour/nuit)
  var dGlobal = Math.max(
    _journalDouleurs.reveil || 0,
    _journalDouleurs.jour   || 0,
    _journalDouleurs.nuit   || 0
  );

  var modal = document.createElement('div');
  modal.id = 'quick-journal-modal';
  modal.className = 'quick-modal-overlay';
  modal.onclick = function(e) {
    if (e.target === modal) closeQuickJournal();
  };

  modal.innerHTML =
    '<div class="quick-modal">' +
      '<div class="quick-modal-header">' +
        '<div class="quick-modal-title">⚡ Mode rapide</div>' +
        '<button class="quick-modal-close" onclick="closeQuickJournal()" aria-label="Fermer">✕</button>' +
      '</div>' +
      '<p class="quick-modal-sub">Note l\'essentiel en 30 secondes. Tu pourras compléter plus tard si besoin.</p>' +

      // Qualité sommeil
      '<div class="quick-section">' +
        '<div class="quick-section-title">⭐ Qualité du sommeil</div>' +
        '<div class="quick-stars" id="quick-stars">' + buildQuickStarsHTML(_journalQualite) + '</div>' +
      '</div>' +

      // Douleur globale
      '<div class="quick-section">' +
        '<div class="quick-section-title">🦵 Douleurs SJSR (globales)</div>' +
        '<div class="quick-douleur-display">' +
          '<span class="quick-douleur-val" id="quick-douleur-val">' + dGlobal + '</span><span class="quick-douleur-max">/10</span>' +
        '</div>' +
        '<input type="range" min="0" max="10" value="' + dGlobal + '" id="quick-douleur-slider" oninput="updateQuickDouleur(this.value)" class="quick-slider" />' +
        '<div class="quick-douleur-scale">' +
          '<span>0 · aucune</span><span>10 · insupportable</span>' +
        '</div>' +
      '</div>' +

      // Humeur
      '<div class="quick-section">' +
        '<div class="quick-section-title">💚 Humeur du jour</div>' +
        '<div class="quick-moods" id="quick-moods">' + buildQuickMoodsHTML(_journalMood) + '</div>' +
      '</div>' +

      // Boutons
      '<div class="quick-modal-actions">' +
        '<button class="quick-btn-cancel" onclick="closeQuickJournal()">Annuler</button>' +
        '<button class="quick-btn-save" onclick="saveQuickJournal()">💾 Enregistrer</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(modal);
  // Mémoriser la valeur initiale pour comparaison à la fermeture
  modal.dataset.initDouleur = dGlobal;
  modal.dataset.initQualite = _journalQualite || 0;
  modal.dataset.initMood    = _journalMood    || '';
}

function buildQuickStarsHTML(currentQualite) {
  var html = '';
  for (var i = 1; i <= 5; i++) {
    var active = i <= (currentQualite || 0);
    html += '<button class="quick-star ' + (active ? 'active' : '') + '" data-star="' + i + '" onclick="setQuickStars(' + i + ')" aria-label="' + i + ' étoile' + (i > 1 ? 's' : '') + '">' +
      (active ? '★' : '☆') +
    '</button>';
  }
  return html;
}

function buildQuickMoodsHTML(currentMood) {
  var moods = [
    { v: 'epuisee', e: '😫', l: 'Épuisée' },
    { v: 'fatiguee', e: '😔', l: 'Fatiguée' },
    { v: 'correcte', e: '😐', l: 'Correcte' },
    { v: 'bien', e: '🙂', l: 'Bien' },
    { v: 'reposee', e: '😊', l: 'Reposée' },
    { v: 'excellente', e: '🤩', l: 'Excellente' }
  ];
  return moods.map(function(m) {
    var sel = currentMood === m.v;
    return '<button class="quick-mood ' + (sel ? 'active' : '') + '" onclick="setQuickMood(\'' + m.v + '\')" aria-label="' + m.l + '">' +
      '<span class="quick-mood-emoji">' + m.e + '</span>' +
      '<span class="quick-mood-label">' + m.l + '</span>' +
    '</button>';
  }).join('');
}

function setQuickStars(n) {
  _journalQualite = n;
  var container = document.getElementById('quick-stars');
  if (container) container.innerHTML = buildQuickStarsHTML(n);
}

function updateQuickDouleur(val) {
  var v = parseInt(val, 10) || 0;
  // En mode rapide, on applique la même valeur aux 3 mesures
  // (pour rester compatible avec l'analyse v2 qui calcule la moyenne)
  _journalDouleurs.reveil = v;
  _journalDouleurs.jour   = v;
  _journalDouleurs.nuit   = v;
  var disp = document.getElementById('quick-douleur-val');
  if (disp) disp.textContent = v;
}

function setQuickMood(v) {
  _journalMood = v;
  var container = document.getElementById('quick-moods');
  if (container) container.innerHTML = buildQuickMoodsHTML(v);
}

function closeQuickJournal() {
  var modal = document.getElementById('quick-journal-modal');
  if (!modal) return;
  // Si l'utilisatrice a modifié quelque chose sans enregistrer, on restaure
  // les valeurs initiales pour ne pas polluer l'état du formulaire détaillé.
  var initD = parseInt(modal.dataset.initDouleur || '0', 10);
  var initQ = parseInt(modal.dataset.initQualite || '0', 10);
  var initM = modal.dataset.initMood || '';
  // On ne restaure que si l'utilisatrice annule (clic Annuler ou fermeture)
  // → l'enregistrement appelle saveQuickJournal qui ferme aussi mais via _saved=true
  if (!modal.dataset._saved) {
    _journalDouleurs.reveil = initD;
    _journalDouleurs.jour   = initD;
    _journalDouleurs.nuit   = initD;
    _journalQualite = initQ;
    _journalMood    = initM || null;
  }
  modal.remove();
}

function saveQuickJournal() {
  var modal = document.getElementById('quick-journal-modal');
  if (modal) modal.dataset._saved = '1';

  // Réutilise saveJournal existante : préserve les autres champs (cycles, repas,
  // médicaments...) parce que saveJournal sérialise les variables _journalX en mémoire,
  // qui n'ont pas été touchées hors qualité / douleur / humeur.
  if (typeof saveJournal === 'function') saveJournal();

  // Re-render l'onglet Aujourd'hui pour que les changements soient visibles
  if (typeof renderJournalToday === 'function') renderJournalToday();

  // Toast de confirmation
  var toast = document.createElement('div');
  toast.className = 'quick-save-toast';
  toast.textContent = '✨ Saisie rapide enregistrée';
  document.body.appendChild(toast);
  setTimeout(function() {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(-10px)';
  }, 2200);
  setTimeout(function() { toast.remove(); }, 2700);

  closeQuickJournal();
}

// ============================
// JOURNAL
// ============================
function dateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// Date courante du journal — modifiable via ← →
let currentJournalDate = new Date();

// ============================
// JOURNAL SJSR — VERSION SÉRÉNITÉ
// ============================

// État du journal (currentJournalDate déjà déclaré plus haut)
let _journalCycles = [];
let _journalLevers = 0;
let _journalQualite = 0;
let _journalMood = null;
let _journalSieste = 0;
let _journalDouleurs = { reveil: 0, jour: 0, nuit: 0 };
let _journalMeds = [];
let _journalRituels = [];
let _journalNotes = '';
// Nouveaux champs : habitudes du jour
let _journalEau = 0;
let _journalCafeine = { tasses: 0, heureDerniere: '' };
let _journalAlcool = 0;
let _journalSymptomes = [];
let _journalCycle = { phase: '', flux: '' };
// Repas du jour : 4 créneaux, chacun null | {type:'recette',recetteId:N} | {type:'libre',titre,ingredients[]} | {type:'saute'}
let _journalRepas = { 'petit-dejeuner': null, 'dejeuner': null, 'diner': null, 'snack': null };
let _statsPeriod = 14;

// Couleurs et thème
const J_COLORS = {
  green: '#3d6b58',
  greenDeep: '#2d4a3e',
  greenPale: '#c8e6d4',
  cream: '#f7f3ee',
  creamDark: '#ede8e0',
  white: '#ffffff',
  textDark: '#1e2d26',
  textMid: '#4a5e54',
  textLight: '#8a9e96',
  gold: '#f0b429',
  red: '#c0614a',
  orange: '#d97706'
};

// Helper: formater minutes en heure
function fmtMin(min) {
  if (!min || min === 0) return '—';
  const h = Math.floor(min / 60);
  const m = Math.round(min % 60);
  if (m === 0) return h + 'h';
  return h + 'h' + String(m).padStart(2, '0');
}

// Helper: générer options time
function timeOpts(selected) {
  let html = '';
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      const v = String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0');
      const lbl = String(h).padStart(2,'0') + 'h' + String(m).padStart(2,'0');
      html += '<option value="' + v + '"' + (v === selected ? ' selected' : '') + '>' + lbl + '</option>';
    }
  }
  return html;
}

// Calculer durée d'un cycle
function cycleDuration(couche, leve) {
  const [h1, m1] = couche.split(':').map(Number);
  const [h2, m2] = leve.split(':').map(Number);
  let total = (h2 * 60 + m2) - (h1 * 60 + m1);
  if (total < 0) total += 24 * 60;
  return total;
}

// Date format
function setJournalDate() {
  const today = new Date();
  const isToday = dateKey(currentJournalDate) === dateKey(today);
  const lbl = isToday
    ? 'Aujourd\'hui — ' + currentJournalDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
    : currentJournalDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const el = document.getElementById('journal-entry-date');
  if (el) el.textContent = lbl;
  const next = document.getElementById('journal-next-btn');
  if (next) {
    next.disabled = isToday;
    next.style.opacity = isToday ? '0.3' : '1';
  }
}

function changeJournalDay(delta) {
  const newDate = new Date(currentJournalDate);
  newDate.setDate(newDate.getDate() + delta);
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  if (newDate > today) return;
  const limit = new Date();
  limit.setDate(limit.getDate() - 90);
  if (newDate < limit) return;
  currentJournalDate = newDate;
  setJournalDate();
  loadJournalEntry();
  renderJournalToday();
}

// Charger une entrée existante
function loadJournalEntry() {
  const dk = dateKey(currentJournalDate);
  const entry = journal[dk];

  if (entry && entry.cycles2) {
    _journalCycles = JSON.parse(JSON.stringify(entry.cycles2));
    _journalLevers = entry.levers2 || 0;
    _journalQualite = entry.qualite2 || 0;
    _journalMood = entry.mood || null;
    _journalSieste = entry.sieste || 0;
    _journalDouleurs = entry.douleurs || { reveil: 0, jour: 0, nuit: 0 };
    _journalMeds = entry.meds2 || [];
    _journalRituels = entry.rituels2 || [];
    _journalNotes = entry.notes2 || '';
    // Nouveaux champs : habitudes du jour
    _journalEau = entry.eau || 0;
    _journalCafeine = entry.cafeine || { tasses: 0, heureDerniere: '' };
    _journalAlcool = entry.alcool || 0;
    _journalSymptomes = entry.symptomes || [];
    _journalCycle = entry.cycleMenstruel || { phase: '', flux: '' };
    _journalRepas = entry.repas || { 'petit-dejeuner': null, 'dejeuner': null, 'diner': null, 'snack': null };
  } else {
    _journalCycles = [{ couche: '23:00', leve: '07:00' }];
    _journalLevers = 0;
    _journalQualite = 0;
    _journalMood = null;
    _journalSieste = 0;
    _journalDouleurs = { reveil: 0, jour: 0, nuit: 0 };
    _journalMeds = [];
    _journalRituels = [];
    _journalNotes = '';
    // Nouveaux champs : habitudes du jour
    _journalEau = 0;
    _journalCafeine = { tasses: 0, heureDerniere: '' };
    _journalAlcool = 0;
    _journalSymptomes = [];
    _journalCycle = { phase: '', flux: '' };
    _journalRepas = { 'petit-dejeuner': null, 'dejeuner': null, 'diner': null, 'snack': null };
  }

  // Pré-remplir les slots Repas vides depuis l'agenda du jour (suggestion modifiable)
  prefillRepasFromAgenda(dk);
}

// Pré-remplit les créneaux Repas vides depuis l'agenda du jour
function prefillRepasFromAgenda(dk) {
  const dayAgenda = agenda[dk];
  if (!dayAgenda) return;
  // Mapping slug agenda → clé journal
  const slugToKey = {
    'petitdej': 'petit-dejeuner',
    'dejeuner': 'dejeuner',
    'diner':    'diner'
  };
  Object.keys(slugToKey).forEach(slug => {
    const journalKey = slugToKey[slug];
    // Ne pas écraser si l'utilisatrice a déjà saisi quelque chose
    if (_journalRepas[journalKey]) return;
    const recId = dayAgenda[slug];
    if (!recId) return;
    // Validation : la recette existe dans la base
    if (typeof recId === 'number' || (typeof recId === 'string' && !recId.startsWith('custom_'))) {
      const numId = parseInt(recId);
      if (!isNaN(numId) && RECETTES.some(r => r.id === numId)) {
        _journalRepas[journalKey] = { type: 'recette', recetteId: numId, fromAgenda: true };
      }
    }
  });
}

// Rendre l'UI complète du journal
function renderJournalToday() {
  const container = document.getElementById('journal-today-container');
  if (!container) return;

  const cyclesHTML = _journalCycles.map((c, i) => {
    const dur = fmtMin(cycleDuration(c.couche, c.leve));
    return (
      '<div style="background:#f7f3ee;border:1.5px solid #ede8e0;border-radius:14px;padding:14px 16px;margin-bottom:10px;">' +
        '<div style="font-size:0.82rem;font-weight:600;color:#2d4a3e;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;">' +
          '<span>🌙 Cycle ' + (i+1) + '</span>' +
          (_journalCycles.length > 1 ? '<button onclick="removeJCycle(' + i + ')" style="background:none;border:none;color:#8a9e96;font-size:1rem;cursor:pointer;padding:0 4px;line-height:1;">✕</button>' : '') +
        '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">' +
          '<div>' +
            '<label style="font-size:0.7rem;color:#8a9e96;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;display:block;margin-bottom:5px;">Couché</label>' +
            '<select onchange="updateJCycle(' + i + ',\'couche\',this.value)" style="width:100%;padding:10px 12px;border:1.5px solid #ede8e0;border-radius:14px;font-size:1rem;font-weight:600;color:#2d4a3e;background:#fff;cursor:pointer;outline:none;font-family:DM Sans,sans-serif;">' + timeOpts(c.couche) + '</select>' +
          '</div>' +
          '<div>' +
            '<label style="font-size:0.7rem;color:#8a9e96;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;display:block;margin-bottom:5px;">Levé</label>' +
            '<select onchange="updateJCycle(' + i + ',\'leve\',this.value)" style="width:100%;padding:10px 12px;border:1.5px solid #ede8e0;border-radius:14px;font-size:1rem;font-weight:600;color:#2d4a3e;background:#fff;cursor:pointer;outline:none;font-family:DM Sans,sans-serif;">' + timeOpts(c.leve) + '</select>' +
          '</div>' +
        '</div>' +
        '<div style="text-align:center;font-size:0.95rem;color:#3d6b58;font-weight:700;margin-top:10px;font-family:Playfair Display,serif;">⏱ ' + dur + '</div>' +
      '</div>'
    );
  }).join('');

  // Totaux
  let totalSleep = 0;
  let bedStart = null, bedEnd = null;
  _journalCycles.forEach(c => {
    totalSleep += cycleDuration(c.couche, c.leve);
    const [h1, m1] = c.couche.split(':').map(Number);
    const [h2, m2] = c.leve.split(':').map(Number);
    const start = h1 * 60 + m1;
    const end = h2 * 60 + m2;
    if (bedStart === null || start < bedStart) bedStart = start;
    if (bedEnd === null || end > bedEnd) bedEnd = end;
  });
  let bedTime = bedEnd - bedStart;
  if (bedTime < 0) bedTime += 24 * 60;
  const bedTimeStr = _journalCycles.length > 1 ? fmtMin(bedTime) : '—';

  // Étoiles
  const starsHTML = [1,2,3,4,5].map(n => {
    const active = n <= _journalQualite;
    return '<span onclick="setJStars(' + n + ')" style="font-size:2.2rem;cursor:pointer;color:' + (active ? '#f0b429' : '#ede8e0') + ';user-select:none;line-height:1;transition:color 0.15s;">★</span>';
  }).join('');

  // Humeur
  const moods = [
    { v:'epuisee', e:'😫', l:'Épuisée' },
    { v:'fatiguee', e:'😔', l:'Fatiguée' },
    { v:'correcte', e:'😐', l:'Correcte' },
    { v:'bien', e:'🙂', l:'Bien' },
    { v:'reposee', e:'😊', l:'Reposée' },
    { v:'excellente', e:'🤩', l:'Excellente' }
  ];
  const moodsHTML = moods.map(m => {
    const sel = _journalMood === m.v;
    return '<button onclick="setJMood(\'' + m.v + '\')" style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:12px 6px;background:' + (sel ? '#c8e6d4' : '#f7f3ee') + ';border:2px solid ' + (sel ? '#3d6b58' : '#ede8e0') + ';border-radius:14px;cursor:pointer;font-size:1.5rem;transition:all 0.18s;">' +
      m.e +
      '<span style="font-size:0.7rem;color:' + (sel ? '#2d4a3e' : '#4a5e54') + ';font-weight:' + (sel ? '600' : '500') + ';font-family:DM Sans,sans-serif;">' + m.l + '</span>' +
    '</button>';
  }).join('');

  // Sieste options
  const siesteOpts = [
    { v:0, l:'Pas de sieste' },
    { v:15, l:'15 min' },
    { v:20, l:'20 min' },
    { v:30, l:'30 min' },
    { v:45, l:'45 min' },
    { v:60, l:'1h' },
    { v:90, l:'1h30' },
    { v:120, l:'2h' }
  ].map(o => '<option value="' + o.v + '"' + (o.v === _journalSieste ? ' selected' : '') + '>' + o.l + '</option>').join('');

  let siesteInfo = 'Pas de sieste aujourd\'hui';
  if (_journalSieste > 0) {
    siesteInfo = _journalSieste < 60 ? 'Sieste de ' + _journalSieste + ' min' : 'Sieste de ' + Math.floor(_journalSieste/60) + 'h' + (_journalSieste%60 ? _journalSieste%60+'min' : '');
  }

  // Douleurs
  function douleurLabel(v) {
    if (v === 0) return { label: 'Aucune douleur', color: '#3d6b58' };
    if (v <= 3) return { label: 'Légère', color: '#3d6b58' };
    if (v <= 6) return { label: 'Modérée', color: '#d97706' };
    if (v <= 8) return { label: 'Intense', color: '#d97706' };
    return { label: 'Insupportable', color: '#c0614a' };
  }

  const douleursDef = [
    { key:'reveil', icon:'🌅', label:'Douleurs au réveil', sub:'Jambes / Impatiences au saut du lit' },
    { key:'jour', icon:'☀️', label:'Douleurs dans la journée', sub:'Impatiences · Tension · Fatigue musculaire' },
    { key:'nuit', icon:'🌙', label:'Douleurs pendant la nuit', sub:'SJSR nocturne · Levers forcés · Jambes' }
  ];

  const douleursHTML = douleursDef.map((d, i) => {
    const v = _journalDouleurs[d.key] || 0;
    const dl = douleurLabel(v);
    const isLast = i === douleursDef.length - 1;
    return '<div style="padding:14px 0;' + (isLast ? '' : 'border-bottom:1px solid #ede8e0;') + '">' +
      '<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">' +
        '<span style="font-size:1.2rem;margin-top:2px;flex-shrink:0;">' + d.icon + '</span>' +
        '<div>' +
          '<div style="font-weight:600;font-size:0.88rem;color:#1e2d26;">' + d.label + '</div>' +
          '<div style="font-size:0.68rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:2px;">' + d.sub + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="douleur-label-' + d.key + '" data-douleur-label="' + d.key + '" style="text-align:center;font-family:Playfair Display,serif;font-size:1.1rem;font-weight:600;margin:8px 0;color:' + dl.color + ';">' + v + ' — ' + dl.label + '</div>' +
      '<input type="range" min="0" max="10" step="1" value="' + v + '" aria-label="Douleur ' + d.label + '" aria-valuetext="' + v + ' sur 10, ' + dl.label + '" oninput="updateJDouleur(\'' + d.key + '\',this.value)" style="width:100%;height:8px;border-radius:99px;background:linear-gradient(to right,#4caf50 0%,#ff9800 50%,#f44336 100%);outline:none;cursor:pointer;-webkit-appearance:none;appearance:none;" class="slider-douleur-j">' +
      '<div style="display:flex;justify-content:space-between;font-size:0.68rem;color:#8a9e96;margin-top:5px;">' +
        '<span>0 · Aucune</span><span>5 · Modérée</span><span>10 · Insupportable</span>' +
      '</div>' +
    '</div>';
  }).join('');

  // Médication & Rituels
  const medsList = ['Tramadol','Lyrica','Fer','Magnésium','Autre'];
  const medsHTML = medsList.map(m => {
    const active = _journalMeds.includes(m);
    return '<span onclick="toggleJMed(\'' + m + '\')" style="padding:6px 14px;border-radius:99px;background:' + (active ? '#2d4a3e' : '#f7f3ee') + ';border:1.5px solid ' + (active ? '#2d4a3e' : '#ede8e0') + ';font-size:0.82rem;color:' + (active ? '#fff' : '#4a5e54') + ';cursor:pointer;user-select:none;">' + m + '</span>';
  }).join('');

  const rituelsList = ['Infusion','Lait d\'or','Étirements','Lecture','Méditation'];
  const rituelsHTML = rituelsList.map(r => {
    const active = _journalRituels.includes(r);
    return '<span onclick="toggleJRituel(\'' + r + '\')" style="padding:6px 14px;border-radius:99px;background:' + (active ? '#2d4a3e' : '#f7f3ee') + ';border:1.5px solid ' + (active ? '#2d4a3e' : '#ede8e0') + ';font-size:0.82rem;color:' + (active ? '#fff' : '#4a5e54') + ';cursor:pointer;user-select:none;">' + r + '</span>';
  }).join('');

  // Construire le HTML final
  container.innerHTML = (
    // BOUTON MODE RAPIDE
    '<button class="journal-quick-btn" onclick="openQuickJournal()" aria-label="Saisie rapide du journal">' +
      '<span class="quick-btn-icon">⚡</span>' +
      '<span class="quick-btn-label">Mode rapide · 30 secondes</span>' +
      '<span class="quick-btn-arrow">→</span>' +
    '</button>' +
    // CYCLES
    '<div class="journal-block">' +
      '<div class="jblock-title">🌙 Cycles de sommeil</div>' +
      '<p style="font-size:0.78rem;color:#8a9e96;margin:-8px 0 12px;font-style:italic;">Ajoutez autant de cycles que nécessaire</p>' +
      cyclesHTML +
      '<button onclick="addJCycle()" style="width:100%;border:2px dashed #ede8e0;background:transparent;color:#8a9e96;border-radius:14px;padding:12px;font-size:0.88rem;cursor:pointer;margin:4px 0 16px;font-family:DM Sans,sans-serif;">+ Ajouter un cycle</button>' +
      // Totaux
      '<div style="background:#f7f3ee;border-radius:14px;overflow:hidden;border:1px solid #ede8e0;">' +
        '<div style="display:flex;align-items:center;gap:8px;padding:9px 14px;border-bottom:1px solid #ede8e0;font-size:0.83rem;">' +
          '<span style="font-size:1rem;width:22px;">😴</span>' +
          '<span style="flex:1;color:#4a5e54;">Sommeil total cumulé</span>' +
          '<span style="font-weight:700;color:#3d6b58;font-family:Playfair Display,serif;font-size:0.95rem;">' + fmtMin(totalSleep) + '</span>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:8px;padding:9px 14px;border-bottom:1px solid #ede8e0;font-size:0.83rem;">' +
          '<span style="font-size:1rem;width:22px;">🛏</span>' +
          '<span style="flex:1;color:#4a5e54;">Temps total au lit</span>' +
          '<span style="font-weight:700;color:#1e2d26;font-size:0.9rem;">' + bedTimeStr + '</span>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:8px;padding:9px 14px;font-size:0.83rem;">' +
          '<span style="font-size:1rem;width:22px;">🚶</span>' +
          '<span style="flex:1;color:#4a5e54;">Nombre de levers</span>' +
          '<span style="font-weight:700;color:#1e2d26;font-size:0.9rem;">' + _journalLevers + 'x</span>' +
        '</div>' +
      '</div>' +
      // Levers nocturnes
      '<div style="margin-top:14px;padding-top:14px;border-top:1px solid #ede8e0;">' +
        '<div style="font-size:0.8rem;font-weight:600;color:#4a5e54;margin-bottom:8px;">🚶 Levers nocturnes</div>' +
        '<div style="display:flex;align-items:center;gap:12px;">' +
          '<button onclick="changeJLevers(-1)" style="width:36px;height:36px;border-radius:50%;background:#ede8e0;border:none;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;">−</button>' +
          '<span style="font-size:1.1rem;font-weight:700;color:#2d4a3e;min-width:28px;text-align:center;">' + _journalLevers + '</span>' +
          '<button onclick="changeJLevers(1)" style="width:36px;height:36px;border-radius:50%;background:#ede8e0;border:none;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;">+</button>' +
        '</div>' +
      '</div>' +
    '</div>' +

    // QUALITÉ
    '<div class="journal-block">' +
      '<div class="jblock-title">⭐ Qualité globale de la nuit</div>' +
      '<div style="display:flex;gap:10px;justify-content:center;margin:12px 0 6px;">' + starsHTML + '</div>' +
      '<div style="display:flex;justify-content:space-between;font-size:0.72rem;color:#8a9e96;margin-top:4px;padding:0 4px;">' +
        '<span>Très mauvaise</span><span>Moyenne</span><span>Excellente</span>' +
      '</div>' +
    '</div>' +

    // HUMEUR
    '<div class="journal-block">' +
      '<div class="jblock-title">🌅 Comment je me sens au réveil</div>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px;">' + moodsHTML + '</div>' +
    '</div>' +

    // SIESTE
    '<div class="journal-block">' +
      '<div class="jblock-title">☀️ Sieste <span style="font-size:0.75rem;color:#8a9e96;font-weight:400;">(week-end & vacances)</span></div>' +
      '<select onchange="updateJSieste(this.value)" class="field">' + siesteOpts + '</select>' +
      '<div style="font-size:0.8rem;color:#8a9e96;font-style:italic;margin-top:6px;">' + siesteInfo + '</div>' +
    '</div>' +

    // DOULEURS
    '<div class="journal-block">' +
      '<div class="jblock-title">🦵 Douleurs SJSR</div>' +
      douleursHTML +
    '</div>' +

    // HABITUDES DU JOUR (nouveau bloc)
    renderHabitudesBlock() +

    // REPAS DU JOUR (recette Flōra ou saisie libre)
    renderRepasBlock() +

    // SYMPTÔMES (nouveau bloc)
    renderSymptomesBlock() +

    // NOTES
    '<div class="journal-block">' +
      '<div class="jblock-title">📝 Notes — Symptômes · Déclencheurs · Observations</div>' +
      '<textarea id="journal-notes-new" rows="3" class="field" placeholder="Ex: Impatiences vers 23h · Levée 3 fois · Crampes · Dîner tardif · Stress…" oninput="_journalNotes=this.value">' + _journalNotes + '</textarea>' +
    '</div>' +

    // MÉDICATION
    '<div class="journal-block">' +
      '<div class="jblock-title">💊 Médication du soir</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px;">' + medsHTML + '</div>' +
    '</div>' +

    // RITUELS
    '<div class="journal-block">' +
      '<div class="jblock-title">🍵 Rituel du soir</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px;">' + rituelsHTML + '</div>' +
    '</div>' +

    // BOUTON SAUVEGARDE
    '<button class="btn-primary full-width" onclick="saveJournal()">Enregistrer 💾</button>' +
    '<div class="save-confirm hidden" id="save-confirm">✅ Entrée sauvegardée !</div>'
  );

  // Apply slider-douleur thumb style
  document.querySelectorAll('.slider-douleur-j').forEach(s => {
    if (!s.dataset.styled) {
      s.dataset.styled = '1';
    }
  });
}

// === Handlers ===
function addJCycle() {
  const last = _journalCycles[_journalCycles.length - 1];
  _journalCycles.push({ couche: last.leve, leve: last.leve });
  renderJournalToday();
}

function removeJCycle(i) {
  if (_journalCycles.length <= 1) return;
  var c = _journalCycles[i] || {};
  var detail = (c.couche && c.leve) ? ' (' + c.couche + ' → ' + c.leve + ')' : '';
  if (!confirm('Supprimer ce cycle de sommeil' + detail + ' ?')) return;
  _journalCycles.splice(i, 1);
  renderJournalToday();
}

function updateJCycle(i, field, val) {
  _journalCycles[i][field] = val;
  renderJournalToday();
}

function changeJLevers(delta) {
  _journalLevers = Math.max(0, _journalLevers + delta);
  renderJournalToday();
}

function setJStars(n) {
  _journalQualite = n;
  renderJournalToday();
}

function setJMood(v) {
  _journalMood = v;
  renderJournalToday();
}

function updateJSieste(v) {
  _journalSieste = parseInt(v) || 0;
  renderJournalToday();
}

function updateJDouleur(key, val) {
  const v = parseInt(val) || 0;
  _journalDouleurs[key] = v;

  // Calcul label/couleur (même logique que dans renderJournalToday)
  let label, color;
  if (v === 0)       { label = 'Aucune douleur'; color = '#3d6b58'; }
  else if (v <= 3)   { label = 'Légère';         color = '#3d6b58'; }
  else if (v <= 6)   { label = 'Modérée';        color = '#d97706'; }
  else if (v <= 8)   { label = 'Intense';        color = '#d97706'; }
  else               { label = 'Insupportable';  color = '#c0614a'; }

  // Update ciblé du label uniquement (pas de re-render global)
  const labelEl = document.querySelector('.douleur-label-' + key);
  if (labelEl) {
    labelEl.textContent = v + ' — ' + label;
    labelEl.style.color = color;
  }

  // Update aria-valuetext sur le slider lui-même pour l'accessibilité
  const sliderEl = document.querySelector('input[type=range][aria-valuetext^="' + v + ' sur 10"], .slider-douleur-j');
  // (Le slider conserve sa valeur native, pas besoin de la repousser)
}

function toggleJMed(m) {
  const idx = _journalMeds.indexOf(m);
  if (idx >= 0) _journalMeds.splice(idx, 1);
  else _journalMeds.push(m);
  renderJournalToday();
}

function toggleJRituel(r) {
  const idx = _journalRituels.indexOf(r);
  if (idx >= 0) _journalRituels.splice(idx, 1);
  else _journalRituels.push(r);
  renderJournalToday();
}

// Sauvegarde
function saveJournal() {
  const dk = dateKey(currentJournalDate);
  let totalSleep = 0;
  _journalCycles.forEach(c => {
    totalSleep += cycleDuration(c.couche, c.leve);
  });

  // Récupérer notes depuis input
  const notesEl = document.getElementById('journal-notes-new');
  if (notesEl) _journalNotes = notesEl.value;

  journal[dk] = Object.assign(journal[dk] || {}, {
    cycles2: _journalCycles,
    levers2: _journalLevers,
    qualite2: _journalQualite,
    mood: _journalMood,
    sieste: _journalSieste,
    douleurs: _journalDouleurs,
    meds2: _journalMeds,
    rituels2: _journalRituels,
    notes2: _journalNotes,
    // Nouveaux champs habitudes du jour
    eau: _journalEau,
    cafeine: _journalCafeine,
    alcool: _journalAlcool,
    symptomes: _journalSymptomes,
    cycleMenstruel: _journalCycle,
    repas: _journalRepas,
    totalSleep: totalSleep,
    // Compatibilité avec l'ancien format pour stats/streak
    duree: totalSleep / 60,
    qualite: _journalQualite,
    sjsr: Math.round(((_journalDouleurs.reveil || 0) + (_journalDouleurs.jour || 0) + (_journalDouleurs.nuit || 0)) / 3 / 2),
    energie: 5,
    douleur: Math.max(_journalDouleurs.reveil || 0, _journalDouleurs.jour || 0, _journalDouleurs.nuit || 0),
    notes: _journalNotes,
    ts: Date.now()
  });

  saveState();
  updateDashboard();
  if (typeof checkBadges === 'function') checkBadges();

  const c = document.getElementById('save-confirm');
  if (c) {
    c.classList.remove('hidden');
    setTimeout(() => c.classList.add('hidden'), 2500);
  }
}

// Tabs
function switchJTab(tab, btn) {
  ['today','stats','calendrier','historique'].forEach(t => {
    const el = document.getElementById('jtab-' + t);
    if (el) el.classList.add('hidden');
  });
  const target = document.getElementById('jtab-' + tab);
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('#page-journal .jtab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  if (tab === 'today') {
    setJournalDate();
    loadJournalEntry();
    renderJournalToday();
  }
  if (tab === 'stats') renderJournalStats();
  if (tab === 'calendrier') renderJournalCalendar();
  if (tab === 'historique') renderHistorique();
}

// Statistiques
function renderJournalStats() {
  const container = document.getElementById('stats-journal-container');
  if (!container) return;

  const days = _statsPeriod === 'compare' ? 30 : _statsPeriod;
  const today = new Date();
  const entries = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dk = dateKey(d);
    if (journal[dk]) entries.push(journal[dk]);
  }

  const tabsHTML = (
    '<div style="display:flex;gap:8px;margin-bottom:16px;">' +
      ['14','30','compare'].map((p, i) => {
        const labels = ['14 nuits','Mensuel','Comparatif'];
        const val = p === 'compare' ? 'compare' : parseInt(p);
        const active = _statsPeriod === val;
        return '<button onclick="setJStatsPeriod(\'' + p + '\')" style="flex:1;padding:9px 4px;border:1.5px solid #ede8e0;border-radius:14px;background:' + (active ? '#2d4a3e' : '#fff') + ';font-size:0.82rem;color:' + (active ? '#fff' : '#4a5e54') + ';cursor:pointer;font-family:DM Sans,sans-serif;font-weight:' + (active ? '600' : '400') + ';">' + labels[i] + '</button>';
      }).join('') +
    '</div>'
  );

  if (entries.length === 0) {
    container.innerHTML = tabsHTML +
      '<div class="empty-state journal-block">' +
        svgEmptyJournal() +
        '<div class="empty-state-title">Aucune entrée sur cette période</div>' +
        '<div class="empty-state-text">Commencez à remplir votre journal !</div>' +
      '</div>';
    return;
  }

  const n = entries.length;
  // Sommeil
  const totalSleeps = entries.map(e => e.totalSleep || (e.duree ? e.duree * 60 : 0));
  const avgSleep = totalSleeps.reduce((a,b) => a+b, 0) / n;
  const bestNight = Math.max.apply(null, totalSleeps);
  const goodNights = totalSleeps.filter(t => t >= 420).length;

  const avgQualite = entries.reduce((s,e) => s + (e.qualite2 || e.qualite || 0), 0) / n;
  const avgLevers = entries.reduce((s,e) => s + (e.levers2 || e.levers || 0), 0) / n;
  const avgSieste = entries.reduce((s,e) => s + (e.sieste || 0), 0) / n;

  // Douleurs
  const avgDR = entries.reduce((s,e) => s + ((e.douleurs && e.douleurs.reveil) || 0), 0) / n;
  const avgDJ = entries.reduce((s,e) => s + ((e.douleurs && e.douleurs.jour) || 0), 0) / n;
  const avgDN = entries.reduce((s,e) => s + ((e.douleurs && e.douleurs.nuit) || 0), 0) / n;
  const avgDG = (avgDR + avgDJ + avgDN) / 3;

  // Humeur
  const moodEmoji = { epuisee:'😫', fatiguee:'😔', correcte:'😐', bien:'🙂', reposee:'😊', excellente:'🤩' };
  const moods = entries.map(e => e.mood).filter(Boolean);
  const moodCount = {};
  moods.forEach(m => moodCount[m] = (moodCount[m] || 0) + 1);
  const sortedMoods = Object.entries(moodCount).sort((a,b) => b[1] - a[1]);
  const topMood = sortedMoods.length ? moodEmoji[sortedMoods[0][0]] : '—';

  const fmtH = m => {
    if (!m) return '—';
    const h = Math.floor(m / 60);
    const min = Math.round(m % 60);
    if (min === 0) return h + 'h';
    return h + '.' + Math.round(min/6) + 'h';
  };

  const stars = avg => {
    if (!avg) return '—';
    const r = Math.round(avg);
    return '★'.repeat(r) + '☆'.repeat(5 - r);
  };

  container.innerHTML = tabsHTML +

    // Sommeil
    '<div style="background:#fff;border-radius:22px;padding:16px;margin-bottom:12px;box-shadow:0 2px 10px rgba(45,74,62,0.12);">' +
      '<div style="font-size:0.72rem;font-weight:700;color:#8a9e96;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:12px;">😴 Sommeil</div>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px;">' +
        '<div style="background:#f7f3ee;border-radius:14px;padding:12px 8px;text-align:center;">' +
          '<div style="font-family:Playfair Display,serif;font-size:1.25rem;font-weight:600;color:#2d4a3e;">' + fmtH(avgSleep) + '</div>' +
          '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:4px;">DURÉE<br>MOYENNE</div>' +
        '</div>' +
        '<div style="background:#f7f3ee;border-radius:14px;padding:12px 8px;text-align:center;">' +
          '<div style="font-family:Playfair Display,serif;font-size:1rem;font-weight:600;color:#f0b429;">' + stars(avgQualite) + '</div>' +
          '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:4px;">QUALITÉ ⭐</div>' +
        '</div>' +
        '<div style="background:#f7f3ee;border-radius:14px;padding:12px 8px;text-align:center;">' +
          '<div style="font-family:Playfair Display,serif;font-size:1.25rem;font-weight:600;color:#2d4a3e;">' + avgLevers.toFixed(1) + 'x</div>' +
          '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:4px;">LEVERS /<br>NUIT</div>' +
        '</div>' +
      '</div>' +
      '<div style="background:#f7f3ee;border-radius:14px;padding:10px 16px;text-align:center;">' +
        '<div style="font-family:Playfair Display,serif;font-size:1.25rem;font-weight:600;color:#2d4a3e;">' + Math.round(avgSieste) + ' min</div>' +
        '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:4px;">SIESTE MOY. 💤</div>' +
      '</div>' +
    '</div>' +

    // Douleurs
    '<div style="background:#fff;border-radius:22px;padding:16px;margin-bottom:12px;box-shadow:0 2px 10px rgba(45,74,62,0.12);border:1px solid rgba(192,97,74,0.15);">' +
      '<div style="font-size:0.72rem;font-weight:700;color:#8a9e96;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:12px;">🦵 Douleurs SJSR</div>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:8px;">' +
        '<div style="background:#fef6f4;border-radius:14px;padding:12px 8px;text-align:center;">' +
          '<div style="font-family:Playfair Display,serif;font-size:1.25rem;font-weight:600;color:#c0614a;">' + avgDR.toFixed(1) + '/10</div>' +
          '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:4px;">🌅 AU<br>RÉVEIL</div>' +
        '</div>' +
        '<div style="background:#fef6f4;border-radius:14px;padding:12px 8px;text-align:center;">' +
          '<div style="font-family:Playfair Display,serif;font-size:1.25rem;font-weight:600;color:#c0614a;">' + avgDJ.toFixed(1) + '/10</div>' +
          '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:4px;">☀️ EN<br>JOURNÉE</div>' +
        '</div>' +
        '<div style="background:#fef6f4;border-radius:14px;padding:12px 8px;text-align:center;">' +
          '<div style="font-family:Playfair Display,serif;font-size:1.25rem;font-weight:600;color:#c0614a;">' + avgDN.toFixed(1) + '/10</div>' +
          '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:4px;">🌙 LA<br>NUIT</div>' +
        '</div>' +
      '</div>' +
      '<div style="background:#fef6f4;border-radius:14px;padding:10px 16px;text-align:center;">' +
        '<div style="font-family:Playfair Display,serif;font-size:1.25rem;font-weight:600;color:#c0614a;">' + avgDG.toFixed(1) + '/10</div>' +
        '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:4px;">📊 MOYENNE GLOBALE</div>' +
      '</div>' +
    '</div>' +

    // Bien-être
    '<div style="background:#fff;border-radius:22px;padding:16px;margin-bottom:12px;box-shadow:0 2px 10px rgba(45,74,62,0.12);">' +
      '<div style="font-size:0.72rem;font-weight:700;color:#8a9e96;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:12px;">✨ RESSENTI & BIEN-ÊTRE</div>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">' +
        '<div style="background:#f7f3ee;border-radius:14px;padding:12px 8px;text-align:center;">' +
          '<div style="font-family:Playfair Display,serif;font-size:1.25rem;font-weight:600;color:#3d6b58;">' + fmtH(bestNight) + '</div>' +
          '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:4px;">MEILLEURE<br>NUIT</div>' +
        '</div>' +
        '<div style="background:#f7f3ee;border-radius:14px;padding:12px 8px;text-align:center;">' +
          '<div style="font-family:Playfair Display,serif;font-size:1.25rem;font-weight:600;color:#3d6b58;">' + goodNights + '</div>' +
          '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:4px;">NUITS<br>≥ 7H ✅</div>' +
        '</div>' +
        '<div style="background:#f7f3ee;border-radius:14px;padding:12px 8px;text-align:center;">' +
          '<div style="font-family:Playfair Display,serif;font-size:1.6rem;font-weight:600;">' + topMood + '</div>' +
          '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:4px;">HUMEUR<br>RÉVEIL</div>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div style="font-size:0.75rem;color:#8a9e96;text-align:center;padding:8px 0;">' +
      n + ' entrée' + (n > 1 ? 's' : '') + ' sur ' + days + ' jours' +
    '</div>' +
    
    // CTA vers la page Insights complète
    '<button onclick="showPage(\'insights\')" class="insights-cta-btn">' +
      '<span style="font-size:1.4rem;">📊</span>' +
      '<span style="flex:1;text-align:left;padding:0 12px;">' +
        '<span style="display:block;font-weight:600;font-size:0.95rem;color:#2d4a3e;">Voir mes insights complets</span>' +
        '<span style="display:block;font-size:0.78rem;color:#4a5e54;margin-top:2px;">Corrélations alimentation ↔ symptômes</span>' +
      '</span>' +
      '<span style="font-size:1.2rem;color:#a0735c;">›</span>' +
    '</button>';
}

function setJStatsPeriod(p) {
  _statsPeriod = p === 'compare' ? 'compare' : parseInt(p);
  renderJournalStats();
}

// ============================================================
// VUE CALENDRIER MENSUEL DU JOURNAL
// ============================================================
var _calendarMonth = null; // {year, month} — initialisé à la 1re ouverture

function calendarScore(entry) {
  // Renvoie un score de 0 (excellent) à 1 (très difficile), ou null si vide
  if (!entry) return null;
  // Douleur dominante (la plus haute des 3 mesures)
  var dr = (entry.douleurs && entry.douleurs.reveil) || 0;
  var dj = (entry.douleurs && entry.douleurs.jour)   || 0;
  var dn = (entry.douleurs && entry.douleurs.nuit)   || 0;
  var douleurMax = Math.max(dr, dj, dn);
  // Fallback ancien format
  if (douleurMax === 0 && (entry.douleur || 0) > 0) douleurMax = entry.douleur;

  // Qualité du sommeil 0-5
  var qual = entry.qualite2 || entry.qualite || 0;

  // Si rien n'a été saisi (ni douleur ni qualité), considérer comme jour vide
  if (douleurMax === 0 && qual === 0) return null;

  var douleurFact = douleurMax / 10;                       // 0 = aucune, 1 = insupportable
  var qualFact    = qual ? (5 - qual) / 5 : 0.5;            // 0 = excellent, 1 = mauvais
  return douleurFact * 0.65 + qualFact * 0.35;
}

function calendarColor(score) {
  if (score == null) return { bg: '#f7f3ee', border: '#ede8e0', text: '#c0c0b8' }; // vide
  if (score <= 0.25)  return { bg: '#dcefe0', border: '#a8cfb1', text: '#2d4a3e' }; // bon
  if (score <= 0.45)  return { bg: '#f3e9c8', border: '#d9c97f', text: '#7a5e1e' }; // correct
  if (score <= 0.65)  return { bg: '#f4d6b8', border: '#d49d6b', text: '#7a4a1e' }; // modéré
  return                { bg: '#e9b7a8', border: '#c0614a', text: '#6b2917' };       // difficile
}

function renderJournalCalendar() {
  var container = document.getElementById('calendar-journal-container');
  if (!container) return;

  // Initialisation : mois courant
  if (!_calendarMonth) {
    var now = new Date();
    _calendarMonth = { year: now.getFullYear(), month: now.getMonth() };
  }

  var year  = _calendarMonth.year;
  var month = _calendarMonth.month; // 0-11

  // Bornes du mois affiché
  var firstOfMonth = new Date(year, month, 1);
  var lastOfMonth  = new Date(year, month + 1, 0);

  // Premier lundi à afficher (peut être dans le mois précédent)
  // En France, semaine commence lundi → getDay() : 0=dim, 1=lun ... 6=sam
  var firstWeekday = firstOfMonth.getDay();
  var offsetStart  = firstWeekday === 0 ? 6 : firstWeekday - 1; // jours à reculer
  var gridStart = new Date(year, month, 1 - offsetStart);

  // Dernier dimanche à afficher
  var lastWeekday = lastOfMonth.getDay();
  var offsetEnd   = lastWeekday === 0 ? 0 : 7 - lastWeekday;
  var gridEnd = new Date(year, month, lastOfMonth.getDate() + offsetEnd);

  // Construction des cases
  var todayKey = dateKey(new Date());
  var monthLabel = firstOfMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

  // Stats du mois (uniquement vrais jours du mois saisis)
  var entriesMois = [];
  for (var d = new Date(firstOfMonth); d <= lastOfMonth; d.setDate(d.getDate() + 1)) {
    var k = dateKey(d);
    if (journal[k]) entriesMois.push(journal[k]);
  }
  var nSaisis = entriesMois.length;
  var totalJours = lastOfMonth.getDate();

  function douleurMoy(e) {
    if (e.douleurs) {
      return ((e.douleurs.reveil || 0) + (e.douleurs.jour || 0) + (e.douleurs.nuit || 0)) / 3;
    }
    return e.douleur || 0;
  }
  var avgDouleur = nSaisis ? entriesMois.reduce(function(s, e) { return s + douleurMoy(e); }, 0) / nSaisis : 0;
  var avgQual = 0, qCount = 0;
  entriesMois.forEach(function(e) {
    var q = e.qualite2 || e.qualite || 0;
    if (q) { avgQual += q; qCount++; }
  });
  avgQual = qCount ? avgQual / qCount : 0;

  // Compteur par catégorie
  var catCount = { bon: 0, correct: 0, modere: 0, difficile: 0 };
  entriesMois.forEach(function(e) {
    var s = calendarScore(e);
    if (s == null) return;
    if (s <= 0.25) catCount.bon++;
    else if (s <= 0.45) catCount.correct++;
    else if (s <= 0.65) catCount.modere++;
    else catCount.difficile++;
  });

  // === HTML ===
  var html = '';

  // Header navigation mois
  html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;background:#fff;border-radius:14px;padding:10px 14px;box-shadow:0 2px 8px rgba(45,74,62,0.08);">';
  html +=   '<button onclick="changeJournalCalendarMonth(-1)" style="background:none;border:none;font-size:1.4rem;color:#3d6b58;cursor:pointer;padding:4px 10px;" aria-label="Mois précédent">‹</button>';
  html +=   '<div style="font-family:Playfair Display,Georgia,serif;font-size:1.05rem;font-weight:600;color:#2d4a3e;text-transform:capitalize;">' + monthLabel + '</div>';
  html +=   '<button onclick="changeJournalCalendarMonth(1)" style="background:none;border:none;font-size:1.4rem;color:#3d6b58;cursor:pointer;padding:4px 10px;" aria-label="Mois suivant">›</button>';
  html += '</div>';

  // En-têtes jours de la semaine
  var jours = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  html += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:6px;">';
  jours.forEach(function(j) {
    html += '<div style="text-align:center;font-size:0.7rem;font-weight:700;color:#8a9e96;text-transform:uppercase;letter-spacing:0.05em;padding:4px 0;">' + j + '</div>';
  });
  html += '</div>';

  // Grille
  html += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;">';
  var cur = new Date(gridStart);
  while (cur <= gridEnd) {
    var k = dateKey(cur);
    var inMonth = cur.getMonth() === month;
    var entry = journal[k] || null;
    var score = calendarScore(entry);
    var col = calendarColor(score);
    var isToday = k === todayKey;
    var isFuture = cur > new Date();

    var opacity = inMonth ? 1 : 0.35;
    var borderStyle = isToday ? '2px solid #3d6b58' : '1px solid ' + col.border;
    var clickable = !isFuture;

    var dayNum = cur.getDate();
    var titleAttr = '';
    if (entry) {
      var dr = (entry.douleurs && entry.douleurs.reveil) || 0;
      var dj = (entry.douleurs && entry.douleurs.jour)   || 0;
      var dn = (entry.douleurs && entry.douleurs.nuit)   || 0;
      var qual = entry.qualite2 || entry.qualite || 0;
      titleAttr = ' title="Douleurs R:' + dr + ' J:' + dj + ' N:' + dn + ' · Qualité ' + qual + '/5"';
    } else if (!isFuture && inMonth) {
      titleAttr = ' title="Pas d&apos;entrée pour ce jour"';
    }

    var emoji = '';
    if (entry && entry.mood) {
      var moodEmoji = { epuisee:'😫', fatiguee:'😔', correcte:'😐', bien:'🙂', reposee:'😊', excellente:'🤩' };
      emoji = moodEmoji[entry.mood] || '';
    }

    var clickAttr = clickable ? ' onclick="openJournalDay(\'' + k + '\')"' : '';
    var cursorStyle = clickable ? 'cursor:pointer;' : 'cursor:default;';

    html += '<div' + clickAttr + titleAttr + ' style="' + cursorStyle +
            'background:' + col.bg + ';border:' + borderStyle + ';border-radius:10px;' +
            'padding:6px 4px;min-height:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;' +
            'opacity:' + opacity + ';transition:transform 0.15s;" ' +
            (clickable ? 'onmouseover="this.style.transform=\'scale(1.04)\'" onmouseout="this.style.transform=\'scale(1)\'"' : '') + '>';
    html +=   '<div style="font-size:0.82rem;font-weight:600;color:' + col.text + ';">' + dayNum + '</div>';
    if (emoji) html += '<div style="font-size:0.85rem;line-height:1;margin-top:1px;">' + emoji + '</div>';
    html += '</div>';

    cur.setDate(cur.getDate() + 1);
  }
  html += '</div>';

  // Légende couleurs
  html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;padding:10px 12px;background:#fff;border-radius:12px;font-size:0.72rem;color:#4a5e54;">';
  var legende = [
    { c: '#dcefe0', b: '#a8cfb1', label: 'Bon' },
    { c: '#f3e9c8', b: '#d9c97f', label: 'Correct' },
    { c: '#f4d6b8', b: '#d49d6b', label: 'Modéré' },
    { c: '#e9b7a8', b: '#c0614a', label: 'Difficile' },
    { c: '#f7f3ee', b: '#ede8e0', label: 'Vide' }
  ];
  legende.forEach(function(l) {
    html += '<div style="display:flex;align-items:center;gap:5px;">';
    html +=   '<div style="width:14px;height:14px;background:' + l.c + ';border:1px solid ' + l.b + ';border-radius:3px;"></div>';
    html +=   '<span>' + l.label + '</span>';
    html += '</div>';
  });
  html += '</div>';

  // Stats du mois
  html += '<div style="margin-top:14px;background:#fff;border-radius:14px;padding:14px;box-shadow:0 2px 8px rgba(45,74,62,0.08);">';
  html +=   '<div style="font-size:0.72rem;font-weight:700;color:#8a9e96;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px;">Bilan du mois</div>';
  html +=   '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px;">';
  html +=     '<div style="background:#f7f3ee;border-radius:10px;padding:10px 6px;text-align:center;">';
  html +=       '<div style="font-family:Playfair Display,serif;font-size:1.15rem;font-weight:600;color:#2d4a3e;">' + nSaisis + '/' + totalJours + '</div>';
  html +=       '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:3px;">JOURS<br>SAISIS</div>';
  html +=     '</div>';
  html +=     '<div style="background:#f7f3ee;border-radius:10px;padding:10px 6px;text-align:center;">';
  html +=       '<div style="font-family:Playfair Display,serif;font-size:1.15rem;font-weight:600;color:#c0614a;">' + (avgDouleur ? (Math.round(avgDouleur * 10) / 10).toString().replace('.', ',') : '—') + '</div>';
  html +=       '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:3px;">DOULEUR<br>MOY /10</div>';
  html +=     '</div>';
  html +=     '<div style="background:#f7f3ee;border-radius:10px;padding:10px 6px;text-align:center;">';
  html +=       '<div style="font-family:Playfair Display,serif;font-size:1.15rem;font-weight:600;color:#f0b429;">' + (avgQual ? (Math.round(avgQual * 10) / 10).toString().replace('.', ',') : '—') + '</div>';
  html +=       '<div style="font-size:0.62rem;color:#8a9e96;text-transform:uppercase;letter-spacing:0.04em;margin-top:3px;">QUALITÉ<br>MOY /5</div>';
  html +=     '</div>';
  html +=   '</div>';
  // Répartition des jours
  if (nSaisis > 0) {
    html += '<div style="display:flex;gap:6px;font-size:0.72rem;color:#4a5e54;flex-wrap:wrap;">';
    html +=   '<span>🟢 ' + catCount.bon + ' bon' + (catCount.bon > 1 ? 's' : '') + '</span>';
    html +=   '<span>🟡 ' + catCount.correct + ' correct' + (catCount.correct > 1 ? 's' : '') + '</span>';
    html +=   '<span>🟠 ' + catCount.modere + ' modéré' + (catCount.modere > 1 ? 's' : '') + '</span>';
    html +=   '<span>🔴 ' + catCount.difficile + ' difficile' + (catCount.difficile > 1 ? 's' : '') + '</span>';
    html += '</div>';
  }
  html += '</div>';

  html += '<div style="margin-top:10px;font-size:0.72rem;color:#8a9e96;text-align:center;font-style:italic;">Tape sur un jour pour ouvrir l\'entrée du journal</div>';

  container.innerHTML = html;
}

function changeJournalCalendarMonth(delta) {
  if (!_calendarMonth) return;
  var d = new Date(_calendarMonth.year, _calendarMonth.month + delta, 1);
  _calendarMonth = { year: d.getFullYear(), month: d.getMonth() };
  renderJournalCalendar();
}

function openJournalDay(dk) {
  // Parse YYYY-MM-DD vers Date locale
  var parts = dk.split('-');
  if (parts.length !== 3) return;
  currentJournalDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  // Bascule sur l'onglet Aujourd'hui
  var btn = document.querySelector('#page-journal .jtab');
  switchJTab('today', btn);
}

// ============================================================
// SYSTÈME DE BADGES
// ============================================================
//
// Catalogue des badges. Chaque badge a :
// - id, emoji, titre, description
// - hint : ce qu'il faut faire pour le débloquer (affiché grisé)
// - check(ctx) : fonction qui renvoie true si débloqué
//                ctx = { journal, agenda, RECETTES }
//
// Stockage : localStorage 'flora_badges' = { id: { unlockedAt: ms } }

var BADGES_CATALOG = [
  // — Démarrage
  {
    id: 'first-entry', emoji: '🌱', cat: 'Démarrage',
    titre: 'Première entrée',
    description: 'Tu as ouvert ton journal pour la première fois.',
    hint: 'Remplis une entrée dans ton journal.',
    check: function(ctx) { return Object.keys(ctx.journal).length >= 1; }
  },

  // — Régularité de saisie
  {
    id: 'streak-7', emoji: '🌿', cat: 'Régularité',
    titre: 'Semaine fidèle',
    description: '7 jours consécutifs de saisie. La constance paie.',
    hint: 'Saisis ton journal 7 jours de suite.',
    check: function(ctx) { return badgeStreakAtLeast(ctx.journal, 7); }
  },
  {
    id: 'streak-30', emoji: '🌳', cat: 'Régularité',
    titre: 'Mois fidèle',
    description: '30 jours consécutifs. Tu prends vraiment soin de toi.',
    hint: 'Saisis ton journal 30 jours de suite.',
    check: function(ctx) { return badgeStreakAtLeast(ctx.journal, 30); }
  },

  // — Sommeil
  {
    id: 'good-night', emoji: '😴', cat: 'Sommeil',
    titre: 'Bonne nuit',
    description: 'Première nuit ≥ 7h avec une qualité ≥ 4/5.',
    hint: 'Une nuit de 7h ou plus avec qualité ≥ 4/5.',
    check: function(ctx) {
      return Object.values(ctx.journal).some(function(e) {
        var sleep = e.totalSleep || (e.duree ? e.duree * 60 : 0);
        var qual = e.qualite2 || e.qualite || 0;
        return sleep >= 420 && qual >= 4;
      });
    }
  },
  {
    id: 'seven-stars', emoji: '⭐', cat: 'Sommeil',
    titre: 'Sept étoiles',
    description: '7 nuits de qualité 4 ou 5 étoiles.',
    hint: 'Cumule 7 nuits avec qualité ≥ 4/5.',
    check: function(ctx) {
      var n = Object.values(ctx.journal).filter(function(e) {
        return (e.qualite2 || e.qualite || 0) >= 4;
      }).length;
      return n >= 7;
    }
  },

  // — Santé / Douleurs
  {
    id: 'apaisement', emoji: '🦵', cat: 'Apaisement',
    titre: 'Vague d\'apaisement',
    description: '5 jours consécutifs avec douleur max ≤ 3/10.',
    hint: 'Une période de 5 jours douleur max ≤ 3/10.',
    check: function(ctx) { return badgeApaisement(ctx.journal, 5); }
  },

  // — Cuisine
  {
    id: 'first-recipe', emoji: '🍽️', cat: 'Cuisine',
    titre: 'Premier pas',
    description: 'Tu as planifié ta première recette dans l\'agenda.',
    hint: 'Ajoute une recette à ton agenda.',
    check: function(ctx) { return badgeRecettesUtilisees(ctx.agenda).length >= 1; }
  },
  {
    id: 'coup-coeur', emoji: '❤️', cat: 'Cuisine',
    titre: 'Coup de cœur',
    description: 'Tu as ajouté ta première recette favorite.',
    hint: 'Touche le cœur d\'une recette pour la mémoriser.',
    check: function(ctx) {
      return typeof countFavoris === 'function' && countFavoris() >= 1;
    }
  },
  {
    id: 'curieuse-10', emoji: '🥗', cat: 'Cuisine',
    titre: 'Curieuse',
    description: '10 recettes différentes essayées (planifiées).',
    hint: 'Planifie 10 recettes différentes.',
    check: function(ctx) { return badgeRecettesUtilisees(ctx.agenda).length >= 10; }
  },
  {
    id: 'exploratrice-30', emoji: '🌶️', cat: 'Cuisine',
    titre: 'Exploratrice',
    description: '30 recettes différentes essayées. Tu connais bien Flōra !',
    hint: 'Planifie 30 recettes différentes.',
    check: function(ctx) { return badgeRecettesUtilisees(ctx.agenda).length >= 30; }
  },

  // — Planification
  {
    id: 'semaine-planifiee', emoji: '📅', cat: 'Planification',
    titre: 'Semaine planifiée',
    description: 'Une semaine complète avec 5 jours × 3 repas planifiés.',
    hint: 'Planifie 5 jours d\'affilée avec petit-déj, déjeuner et dîner.',
    check: function(ctx) { return badgeSemainePlanifiee(ctx.agenda); }
  }
];

// — Helpers de check
function badgeStreakAtLeast(journal, n) {
  // Cherche n'importe quelle séquence de n jours consécutifs saisis
  var keys = Object.keys(journal).sort();
  if (keys.length < n) return false;
  var streak = 1;
  for (var i = 1; i < keys.length; i++) {
    var prev = new Date(keys[i - 1]);
    var cur  = new Date(keys[i]);
    var diff = (cur - prev) / 86400000;
    if (Math.round(diff) === 1) {
      streak++;
      if (streak >= n) return true;
    } else {
      streak = 1;
    }
  }
  return streak >= n;
}

function badgeApaisement(journal, n) {
  var keys = Object.keys(journal).sort();
  function dMax(e) {
    if (e.douleurs) {
      return Math.max(e.douleurs.reveil || 0, e.douleurs.jour || 0, e.douleurs.nuit || 0);
    }
    return e.douleur || 0;
  }
  var streak = 0;
  for (var i = 0; i < keys.length; i++) {
    var e = journal[keys[i]];
    if (dMax(e) <= 3) {
      // Vérifier consécutif si i > 0
      if (i > 0) {
        var prev = new Date(keys[i - 1]);
        var cur  = new Date(keys[i]);
        if (Math.round((cur - prev) / 86400000) !== 1) streak = 0;
      }
      streak++;
      if (streak >= n) return true;
    } else {
      streak = 0;
    }
  }
  return false;
}

function badgeRecettesUtilisees(agenda) {
  // Renvoie un tableau d'IDs uniques de recettes planifiées
  var seen = {};
  Object.keys(agenda || {}).forEach(function(dk) {
    var d = agenda[dk] || {};
    ['petitdej', 'dejeuner', 'diner', 'snack'].forEach(function(slot) {
      var v = d[slot];
      if (typeof v === 'number') seen[v] = true;
      else if (v && v.recetteId) seen[v.recetteId] = true;
    });
  });
  return Object.keys(seen);
}

function badgeSemainePlanifiee(agenda) {
  // Cherche 5 jours consécutifs avec petitdej + dejeuner + diner planifiés
  var keys = Object.keys(agenda || {}).filter(function(k) {
    var d = agenda[k] || {};
    return d.petitdej && d.dejeuner && d.diner;
  }).sort();
  if (keys.length < 5) return false;
  var streak = 1;
  for (var i = 1; i < keys.length; i++) {
    var prev = new Date(keys[i - 1]);
    var cur  = new Date(keys[i]);
    if (Math.round((cur - prev) / 86400000) === 1) {
      streak++;
      if (streak >= 5) return true;
    } else {
      streak = 1;
    }
  }
  return false;
}

// — État des badges (chargé depuis localStorage)
var floraBadges = {};

function loadBadges() {
  try {
    floraBadges = JSON.parse(localStorage.getItem('flora_badges') || '{}');
  } catch (e) {
    floraBadges = {};
  }
}

function saveBadges() {
  try {
    localStorage.setItem('flora_badges', JSON.stringify(floraBadges));
  } catch (e) {
    console.error('[Flōra] Erreur save badges:', e);
  }
}

// — Vérification + déclenchement notifications
function checkBadges(silent) {
  loadBadges();
  var ctx = { journal: journal || {}, agenda: agenda || {}, RECETTES: RECETTES };
  var newlyUnlocked = [];

  BADGES_CATALOG.forEach(function(b) {
    if (floraBadges[b.id]) return; // déjà débloqué
    try {
      if (b.check(ctx)) {
        floraBadges[b.id] = { unlockedAt: Date.now() };
        newlyUnlocked.push(b);
      }
    } catch (e) {
      // Si le check plante, on ignore silencieusement
    }
  });

  if (newlyUnlocked.length) {
    saveBadges();
    if (!silent) {
      // Afficher un toast par badge, espacés de 600ms
      newlyUnlocked.forEach(function(b, i) {
        setTimeout(function() { showBadgeToast(b); }, i * 600);
      });
    }
  }

  // Mise à jour de la ligne de résumé sur le profil si présente
  var summary = document.getElementById('badges-summary-line');
  if (summary) {
    var total = BADGES_CATALOG.length;
    var done = Object.keys(floraBadges).length;
    summary.textContent = done + ' / ' + total + ' débloqués →';
  }

  return newlyUnlocked;
}

// — Toast lors d'un déblocage
function showBadgeToast(badge) {
  var toast = document.createElement('div');
  toast.style.cssText =
    'position:fixed;top:80px;left:50%;transform:translateX(-50%);' +
    'background:linear-gradient(135deg, #2d4a3e, #3d6b58);color:#fff;' +
    'padding:14px 18px;border-radius:14px;z-index:9999;' +
    'box-shadow:0 6px 24px rgba(45,74,62,0.35);' +
    'font-family:Georgia,serif;display:flex;align-items:center;gap:12px;' +
    'max-width:90vw;animation:badgeSlideIn 0.4s ease-out;';
  toast.innerHTML =
    '<div style="font-size:2rem;line-height:1;">' + badge.emoji + '</div>' +
    '<div>' +
      '<div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.05em;opacity:0.85;">Badge débloqué !</div>' +
      '<div style="font-weight:600;font-size:1rem;">' + badge.titre + '</div>' +
    '</div>';
  document.body.appendChild(toast);
  setTimeout(function() {
    toast.style.transition = 'opacity 0.4s, transform 0.4s';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(-10px)';
  }, 3500);
  setTimeout(function() { toast.remove(); }, 4000);
}

// — Page Mes badges
function renderBadges() {
  loadBadges();
  var container = document.getElementById('badges-container');
  if (!container) return;

  // Re-vérifier silencieusement (au cas où l'utilisatrice arrive directement)
  checkBadges(true);

  var total = BADGES_CATALOG.length;
  var done = Object.keys(floraBadges).length;
  var progressPct = total ? Math.round((done / total) * 100) : 0;

  // Regrouper par catégorie
  var byCat = {};
  BADGES_CATALOG.forEach(function(b) {
    if (!byCat[b.cat]) byCat[b.cat] = [];
    byCat[b.cat].push(b);
  });

  var html = '';

  // En-tête progression
  html += '<div style="background:linear-gradient(135deg,#2d4a3e,#3d6b58);color:#fff;border-radius:18px;padding:18px;margin-bottom:18px;">';
  html +=   '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">';
  html +=     '<div>';
  html +=       '<div style="font-family:Playfair Display,Georgia,serif;font-size:1.3rem;">' + done + ' / ' + total + '</div>';
  html +=       '<div style="font-size:0.8rem;opacity:0.85;">badges débloqués</div>';
  html +=     '</div>';
  html +=     '<div style="font-size:2.4rem;">🏅</div>';
  html +=   '</div>';
  html +=   '<div style="background:rgba(255,255,255,0.2);height:8px;border-radius:99px;overflow:hidden;">';
  html +=     '<div style="background:#f0d896;height:100%;width:' + progressPct + '%;border-radius:99px;transition:width 0.4s;"></div>';
  html +=   '</div>';
  html += '</div>';

  // Liste par catégorie
  Object.keys(byCat).forEach(function(cat) {
    html += '<div style="margin-bottom:18px;">';
    html +=   '<div style="font-size:0.72rem;font-weight:700;color:#8a9e96;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:10px;padding-left:4px;">' + cat + '</div>';
    html +=   '<div style="display:grid;grid-template-columns:1fr;gap:8px;">';

    byCat[cat].forEach(function(b) {
      var unlocked = !!floraBadges[b.id];
      var unlockDate = '';
      if (unlocked && floraBadges[b.id].unlockedAt) {
        var dt = new Date(floraBadges[b.id].unlockedAt);
        unlockDate = ' · ' + dt.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
      }
      var bg     = unlocked ? '#fff' : '#f7f3ee';
      var emo    = unlocked ? b.emoji : '🔒';
      var titreCol  = unlocked ? '#2d4a3e' : '#a8a8a0';
      var descCol   = unlocked ? '#4a5e54' : '#a8a8a0';
      var border = unlocked ? '1px solid #dcefe0' : '1px solid #ede8e0';
      var emoBg  = unlocked ? '#dcefe0' : '#ede8e0';

      html += '<div style="background:' + bg + ';border:' + border + ';border-radius:14px;padding:12px 14px;display:flex;align-items:center;gap:14px;' + (unlocked ? 'box-shadow:0 2px 8px rgba(45,74,62,0.06);' : '') + '">';
      html +=   '<div style="width:46px;height:46px;background:' + emoBg + ';border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;">' + emo + '</div>';
      html +=   '<div style="flex:1;min-width:0;">';
      html +=     '<div style="font-weight:600;color:' + titreCol + ';font-size:0.92rem;">' + b.titre;
      if (unlocked) html += ' <span style="font-size:0.7rem;color:#8a9e96;font-weight:400;">' + unlockDate + '</span>';
      html +=     '</div>';
      html +=     '<div style="font-size:0.78rem;color:' + descCol + ';margin-top:2px;line-height:1.35;">' + (unlocked ? b.description : b.hint) + '</div>';
      html +=   '</div>';
      html += '</div>';
    });

    html +=   '</div>';
    html += '</div>';
  });

  // Petit message au pied
  if (done < total) {
    html += '<div style="text-align:center;font-size:0.78rem;color:#8a9e96;font-style:italic;margin-top:14px;">Continue à prendre soin de toi à ton rythme 🌿</div>';
  } else {
    html += '<div style="text-align:center;font-size:0.85rem;color:#3d6b58;font-weight:600;margin-top:14px;">🎉 Tu as débloqué tous les badges ! Bravo.</div>';
  }

  container.innerHTML = html;
}



function exportJournalPDF() {
  // 1. Tri des entrées + filtre optionnel par mois
  var allEntries = Object.entries(journal).sort(function(a, b) {
    return a[0].localeCompare(b[0]);
  });

  if (!allEntries.length) {
    alert('Aucune entrée à exporter. Commencez par remplir votre journal !');
    return;
  }

  // Si plus d'un mois, demander à l'utilisatrice
  var mois = {};
  allEntries.forEach(function(e) { mois[e[0].slice(0, 7)] = true; });
  var moisListe = Object.keys(mois).sort();
  var entries = allEntries;
  var titreMois = '';

  if (moisListe.length > 1) {
    var label = '';
    moisListe.forEach(function(m, i) {
      var d = new Date(m + '-01T12:00:00');
      label += (i + 1) + '. ' + d.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }) + '\n';
    });
    var choix = prompt(
      'Quel mois exporter ?\n\n' + label + '\n0. Tous les mois\n\nTapez le numéro :',
      '0'
    );
    if (choix === null) return; // annulé
    var n = parseInt(choix, 10);
    if (n >= 1 && n <= moisListe.length) {
      var moisChoisi = moisListe[n - 1];
      entries = allEntries.filter(function(e) { return e[0].slice(0, 7) === moisChoisi; });
      var dM = new Date(moisChoisi + '-01T12:00:00');
      titreMois = ' — ' + dM.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    }
  } else if (moisListe.length === 1) {
    var dU = new Date(moisListe[0] + '-01T12:00:00');
    titreMois = ' — ' + dU.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  }

  if (!entries.length) {
    alert('Aucune entrée pour ce mois.');
    return;
  }

  // 2. Helpers
  var name = (typeof profile !== 'undefined' && profile && profile.name) ? profile.name : 'Utilisateur·trice';
  var today = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  function escapeHtmlSafe(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function fmtSleep(min) {
    if (!min) return '—';
    var h = Math.floor(min / 60);
    var m = Math.round(min % 60);
    if (m === 0) return h + 'h';
    return h + 'h' + (m < 10 ? '0' : '') + m;
  }

  function douleurMoy(e) {
    if (e.douleurs) {
      var dr = e.douleurs.reveil || 0;
      var dj = e.douleurs.jour   || 0;
      var dn = e.douleurs.nuit   || 0;
      return Math.round(((dr + dj + dn) / 3) * 10) / 10;
    }
    return e.douleur || 0;
  }

  var moodEmoji = {
    epuisee: '😫', fatiguee: '😔', correcte: '😐',
    bien: '🙂', reposee: '😊', excellente: '🤩'
  };

  // 3. Construction des lignes du tableau (concaténation)
  var rows = '';
  entries.forEach(function(pair) {
    var date = pair[0], e = pair[1];
    var d = new Date(date + 'T12:00:00');
    var label = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

    var qual = e.qualite2 || e.qualite || 0;
    var stars = '★'.repeat(qual) + '☆'.repeat(Math.max(0, 5 - qual));

    var totalSleep = e.totalSleep || (e.duree ? e.duree * 60 : 0);
    var levers = (typeof e.levers2 === 'number') ? e.levers2 : (e.levers || 0);
    var sommeilTxt = fmtSleep(totalSleep);
    if (levers > 0) sommeilTxt += '<br><small style="color:#8a9e96;">' + levers + ' lever' + (levers > 1 ? 's' : '') + '</small>';

    var dr = (e.douleurs && e.douleurs.reveil) || 0;
    var dj = (e.douleurs && e.douleurs.jour)   || 0;
    var dn = (e.douleurs && e.douleurs.nuit)   || 0;
    var dMoy = douleurMoy(e);
    var dColor = dMoy > 5 ? '#c0614a' : (dMoy > 2 ? '#d4a574' : '#3d6b58');

    var moodIcon = e.mood ? (moodEmoji[e.mood] || e.mood) : '—';

    var meds = (e.meds2 && e.meds2.length) ? e.meds2.join(', ')
              : (e.meds && e.meds.length ? e.meds.join(', ') : '—');
    var symp = (e.symptomes && e.symptomes.length) ? e.symptomes.join(', ')
              : (e.symptoms && e.symptoms.length ? e.symptoms.join(', ') : '—');
    var notes = e.notes2 || e.notes || '';
    var sieste = e.sieste ? (e.sieste + ' min') : '';

    rows += '<tr style="border-bottom:1px solid #e8e8e0;">';
    rows +=   '<td style="padding:10px 8px;font-weight:600;color:#2d4a3e;white-space:nowrap;">' + escapeHtmlSafe(label) + '</td>';
    rows +=   '<td style="padding:10px 8px;text-align:center;">' + sommeilTxt + '<br><small>' + stars + '</small>' + (sieste ? '<br><small style="color:#8a9e96;">+ sieste ' + sieste + '</small>' : '') + '</td>';
    rows +=   '<td style="padding:10px 8px;text-align:center;font-size:1.3rem;">' + moodIcon + '</td>';
    rows +=   '<td style="padding:10px 8px;text-align:center;color:' + dColor + ';font-weight:600;">' + (dMoy ? dMoy + '/10' : '—') + '<br><small style="color:#8a9e96;font-weight:400;">R:' + dr + ' J:' + dj + ' N:' + dn + '</small></td>';
    rows +=   '<td style="padding:10px 8px;font-size:0.82em;color:#4a5e54;">' + escapeHtmlSafe(symp) + '</td>';
    rows +=   '<td style="padding:10px 8px;font-size:0.82em;color:#4a5e54;">' + escapeHtmlSafe(meds) + '</td>';
    rows +=   '<td style="padding:10px 8px;font-size:0.8em;font-style:italic;color:#8a9e96;max-width:220px;">' + escapeHtmlSafe(notes) + '</td>';
    rows += '</tr>';
  });

  // 4. Statistiques résumé
  var n = entries.length;
  var totalSleepSum = 0, qualSum = 0, qualCount = 0, douleurSum = 0, douleurCount = 0;
  entries.forEach(function(p) {
    var e = p[1];
    totalSleepSum += (e.totalSleep || (e.duree ? e.duree * 60 : 0));
    var q = e.qualite2 || e.qualite || 0;
    if (q) { qualSum += q; qualCount++; }
    var dm = douleurMoy(e);
    if (dm) { douleurSum += dm; douleurCount++; }
  });
  var avgSleepMin = totalSleepSum / n;
  var avgQual = qualCount ? (qualSum / qualCount).toFixed(1) : '—';
  var avgDouleur = douleurCount ? (douleurSum / douleurCount).toFixed(1) : '—';
  var streak = (typeof getStreak === 'function') ? getStreak() : 0;

  // 5. HTML complet (concaténation)
  var html = '';
  html += '<!DOCTYPE html><html lang="fr"><head>';
  html += '<meta charset="UTF-8"/>';
  html += '<title>Journal Flōra — ' + escapeHtmlSafe(name) + '</title>';
  html += '<style>';
  html += '* { margin:0; padding:0; box-sizing:border-box; }';
  html += 'body { font-family: Georgia, serif; color: #1e2d26; background: #fff; padding: 40px; }';
  html += 'h1 { font-size: 1.9rem; color: #2d4a3e; margin-bottom: 4px; font-family: "Playfair Display", Georgia, serif; }';
  html += '.subtitle { color: #8a9e96; font-size: 0.9rem; margin-bottom: 28px; }';
  html += '.summary { display: flex; gap: 16px; margin-bottom: 28px; flex-wrap: wrap; }';
  html += '.sum-card { background: #f7f3ee; border-radius: 12px; padding: 14px 18px; flex: 1; min-width: 130px; text-align: center; }';
  html += '.sum-val { font-size: 1.5rem; font-weight: 700; color: #2d4a3e; font-family: "Playfair Display", Georgia, serif; }';
  html += '.sum-label { font-size: 0.72rem; color: #8a9e96; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.04em; }';
  html += 'table { width: 100%; border-collapse: collapse; font-size: 0.86rem; }';
  html += 'thead tr { background: #2d4a3e; color: #fff; }';
  html += 'thead th { padding: 10px 8px; text-align: left; font-weight: 600; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.04em; }';
  html += 'tbody tr:nth-child(even) { background: #f7f3ee; }';
  html += '.legende { font-size: 0.78rem; color: #8a9e96; margin-top: 14px; padding: 10px 14px; background: #f7f3ee; border-radius: 8px; }';
  html += '.footer { margin-top: 28px; text-align: center; font-size: 0.76rem; color: #8a9e96; border-top: 1px solid #ede8e0; padding-top: 14px; font-style: italic; }';
  html += '.print-btn { position: fixed; top: 12px; right: 12px; padding: 10px 16px; background: #3d6b58; color: white; border: none; border-radius: 8px; font-size: 0.92rem; cursor: pointer; font-family: Georgia, serif; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 999; }';
  html += '@page { size: A4 landscape; margin: 14mm; }';
  html += '@media print { body { padding: 0; } .print-btn { display: none; } }';
  html += '</style></head><body>';

  html += '<button class="print-btn" onclick="window.print()">🖨️ Imprimer / Enregistrer en PDF</button>';
  html += '<h1>Flōra 🌿 — Journal de bien-être' + escapeHtmlSafe(titreMois) + '</h1>';
  html += '<div class="subtitle">' + escapeHtmlSafe(name) + ' · Exporté le ' + today + ' · ' + n + ' entrée' + (n > 1 ? 's' : '') + '</div>';

  html += '<div class="summary">';
  html +=   '<div class="sum-card"><div class="sum-val">' + fmtSleep(avgSleepMin) + '</div><div class="sum-label">Sommeil moyen</div></div>';
  html +=   '<div class="sum-card"><div class="sum-val">' + avgQual + '/5</div><div class="sum-label">Qualité moy.</div></div>';
  html +=   '<div class="sum-card"><div class="sum-val">' + avgDouleur + '/10</div><div class="sum-label">Douleur moy.</div></div>';
  html +=   '<div class="sum-card"><div class="sum-val">' + streak + '</div><div class="sum-label">Jours consécutifs</div></div>';
  html += '</div>';

  html += '<table>';
  html +=   '<thead><tr>';
  html +=     '<th>Date</th>';
  html +=     '<th>Sommeil & qualité</th>';
  html +=     '<th>Humeur</th>';
  html +=     '<th>Douleurs SJSR</th>';
  html +=     '<th>Symptômes</th>';
  html +=     '<th>Médicaments / suppléments</th>';
  html +=     '<th>Notes</th>';
  html +=   '</tr></thead>';
  html +=   '<tbody>' + rows + '</tbody>';
  html += '</table>';

  html += '<div class="legende"><strong>Légende douleurs :</strong> R = au réveil · J = en journée · N = pendant la nuit · Échelle 0-10. ';
  html += '<strong>Qualité du sommeil :</strong> 1 à 5 étoiles.</div>';

  html += '<div class="footer">Flōra — Application bien-être SJSR/TDAH anti-inflammatoire · kettyburel-art.github.io/Fl-ra/<br>';
  html += 'Document généré automatiquement · À partager avec votre médecin si besoin</div>';

  html += '<scr' + 'ipt>setTimeout(function(){ window.print(); }, 600);</scr' + 'ipt>';
  html += '</body></html>';

  // 6. Ouverture
  var blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  var url  = URL.createObjectURL(blob);
  var win  = window.open(url, '_blank');
  if (!win) {
    var a = document.createElement('a');
    a.href = url;
    a.download = 'flora-journal-' + dateKey(new Date()) + '.html';
    a.click();
  }
  setTimeout(function() { URL.revokeObjectURL(url); }, 8000);
}


function renderHistorique() {
  const container = document.getElementById('historique-list');
  const entries   = Object.entries(journal).sort((a, b) => b[0].localeCompare(a[0]));

  if (!entries.length) {
    container.innerHTML =
      '<div class="empty-state">' +
        svgEmptyJournal() +
        '<div class="empty-state-title">Aucune entrée pour l\'instant</div>' +
        '<div class="empty-state-text">Tes entrées apparaîtront ici, classées par date.</div>' +
      '</div>';
    return;
  }

  container.innerHTML = entries.map(([date, e]) => {
    const d     = new Date(date + 'T12:00:00');
    const label = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    const stars = '★'.repeat(e.qualite) + '☆'.repeat(5 - e.qualite);
    const sleepLabel = e.coucher && e.lever
      ? `${e.coucher}→${e.lever} (${e.duree}h, ${e.cycles || '?'} cycles)`
      : `${e.duree}h`;
    return `
      <div class="hist-entry">
        <div class="hist-date">${label}</div>
        <div class="hist-stats">
          <span class="hist-stat">🌙 ${sleepLabel} ${stars}</span>
          <span class="hist-stat">⚡ ${e.energie}/10</span>
          <span class="hist-stat">💢 douleur ${e.douleur}/10</span>
          ${e.sjsr > 0 ? `<span class="hist-stat">🦵 SJSR ${e.sjsr}/5</span>` : ''}
          ${e.symptoms && e.symptoms.length ? `<span class="hist-stat">🔹 ${e.symptoms.slice(0,2).join(', ')}</span>` : ''}
        </div>
        ${e.notes ? `<div style="font-size:0.8rem;color:var(--text-mid);margin-top:8px;font-style:italic;">"${e.notes}"</div>` : ''}
      </div>`;
  }).join('');
}

// ============================
// RECETTES
// ============================
function renderRecettes() {
  const search = (document.getElementById('recette-search')?.value || '').toLowerCase();
  const grid   = document.getElementById('recettes-grid');

  let recettes = RECETTES.filter(r => {
    if (currentCatFilter && r.cat !== currentCatFilter) return false;
    if (currentFavorisFilter && !isFavori(r.id)) return false;
    if (search && !r.nom.toLowerCase().includes(search)) return false;
    // Filtre nutritionnel
    if (currentNutriFilter) {
      if (currentNutriFilter === 'rapide') {
        const mins = parseInt((r.temps_actif || r.temps || '99').replace(/\D/g,'')) || 99;
        if (mins >= 20) return false;
      } else {
        if (!r.nutri || !r.nutri[currentNutriFilter]) return false;
      }
    }
    if (window._placardFilter && window._placardFilter.length) {
      // Compter combien d'ingrédients de la recette sont dans le placard
      const totalIngredients = r.ingredients.length;
      const matchedIngredients = r.ingredients.filter(ing =>
        window._placardFilter.some(item => ing.toLowerCase().includes(item.toLowerCase()))
      ).length;
      // Exiger au moins 50% des ingrédients dans le placard (recettes vraiment réalisables)
      const matchRatio = totalIngredients > 0 ? matchedIngredients / totalIngredients : 0;
      if (matchRatio < 0.5) return false;
    }
    return true;
  });

  // Badge filtre placard
  const placardBadge = document.getElementById('placard-filter-badge');
  if (placardBadge) {
    if (window._placardFilter && window._placardFilter.length) {
      const textEl = placardBadge.querySelector('.placard-badge-text');
      if (textEl) {
        textEl.textContent = `Filtre placard — ${recettes.length} recette${recettes.length > 1 ? 's' : ''}`;
      }
      placardBadge.style.display = 'flex';
    } else {
      placardBadge.style.display = 'none';
    }
  }

  grid.innerHTML = recettes.map(r => {
    const locked = r.premium && !isPremium;

    // Carte premium verrouillée — avec aperçu alléchant
    if (locked) {
      return `
        <div class="recette-card recette-card-locked" onclick="openRecettePreview(${r.id})">
          <div class="recette-emoji recette-emoji-blurred cat-${r.cat}">${r.emoji}</div>
          <div class="recette-lock-overlay">
            <div class="recette-lock-icon">⭐</div>
            <div class="recette-lock-label">Premium</div>
          </div>
          <div class="recette-info">
            <div class="recette-name">${r.nom}</div>
            <div class="recette-meta">
              <span class="recette-time">⏱ ${r.temps}</span>
              <span class="recette-tag premium">⭐ Premium</span>
            </div>
          </div>
        </div>`;
    }

    // Carte normale déverrouillée
    return `
      <div class="recette-card" onclick="openRecette(${r.id})">
        <div class="recette-emoji cat-${r.cat}">${r.emoji}</div>
        <button class="recette-fav-btn ${isFavori(r.id) ? 'fav-active' : ''}"
                data-fav-id="${r.id}"
                onclick="toggleFavori(${r.id}, event)"
                aria-label="${isFavori(r.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}">${isFavori(r.id) ? '❤️' : '🤍'}</button>
        <div class="recette-info">
          <div class="recette-name">${r.nom}</div>
          <div class="recette-meta">
            <span class="recette-time">⏱ ${r.temps}</span>
          </div>
        </div>
      </div>`;
  }).join('');

  if (!recettes.length) {
    var emptyMsg = '';
    if (currentFavorisFilter) {
      emptyMsg =
        '<div class="empty-state" style="grid-column:1/-1;">' +
          svgEmptyFavoris() +
          '<div class="empty-state-title">Aucune recette en favoris</div>' +
          '<div class="empty-state-text">Touche le cœur d\'une recette pour la mémoriser ici.</div>' +
        '</div>';
    } else {
      emptyMsg =
        '<div class="empty-state" style="grid-column:1/-1;">' +
          '<div style="font-size:2.4rem;margin-bottom:8px;">🔍</div>' +
          '<div class="empty-state-title">Aucune recette trouvée</div>' +
          (window._placardFilter && window._placardFilter.length
            ? '<button onclick="window._placardFilter=null;renderRecettes();" ' +
              'style="margin-top:12px;padding:8px 16px;border:none;border-radius:99px;background:var(--green-pale);color:var(--green-deep);font-size:0.82rem;cursor:pointer;">' +
              'Effacer le filtre placard</button>'
            : '') +
        '</div>';
    }
    grid.innerHTML = emptyMsg;
  }
}

// Aperçu séduisant pour recettes Premium verrouillées
function openRecettePreview(id) {
  const r = RECETTES.find(x => x.id === id);
  if (!r) return;

  const modal   = document.getElementById('recette-modal');
  const content = document.getElementById('modal-content');

  // Masquer partiellement les ingrédients (2 visibles, reste flou)
  const ingVisibles  = r.ingredients.slice(0, 2);
  const ingCaches    = r.ingredients.slice(2);

  content.innerHTML = `
    <div class="modal-recipe-header cat-${r.cat}">
      <div class="modal-recipe-emoji">${r.emoji}</div>
      <div class="modal-recipe-title">${r.nom}</div>
      <div class="recipe-meta-row">
        <span class="chip active">⏱ ${r.temps}</span>
        <span class="chip">${r.calories} kcal</span>
        <span class="chip">${r.diff}</span>
        <span class="chip" style="background:var(--gold);color:var(--white);">⭐ Premium</span>
      </div>
    </div>

    <!-- Bénéfices santé — 100% visible pour accrocher -->
    <div class="recipe-benefits" style="border-left:3px solid var(--gold);">
      🌿 ${r.benefices}
    </div>

    <!-- Ingrédients — aperçu partiel -->
    <div class="recipe-section-title">Ingrédients (1 personne)</div>
    <ul class="recipe-ingredient-list">
      ${ingVisibles.map(i => `<li>${i}</li>`).join('')}
      ${ingCaches.length ? `
        <li class="ingredient-locked">
          <span style="filter:blur(4px);user-select:none;">
            ${ingCaches[0]}
          </span>
        </li>
        ${ingCaches.length > 1 ? `
          <li class="ingredient-locked" style="color:var(--text-light);font-style:italic;list-style:none;padding-left:0;">
            + ${ingCaches.length - 1} autre${ingCaches.length > 2 ? 's' : ''} ingrédient${ingCaches.length > 2 ? 's' : ''}…
          </li>` : ''}
      ` : ''}
    </ul>

    <!-- Préparation — complètement masquée -->
    <div class="recipe-section-title">Préparation</div>
    <div class="preview-locked-steps">
      <div class="preview-step-blur">
        <div class="step-blur-line" style="width:90%"></div>
        <div class="step-blur-line" style="width:75%"></div>
        <div class="step-blur-line" style="width:82%"></div>
      </div>
      <div class="preview-lock-banner">
        <div class="preview-lock-icon">🔒</div>
        <div class="preview-lock-text">
          <strong>Recette complète — Premium</strong><br>
          <span>Accédez aux ${r.etapes.length} étapes de préparation</span>
        </div>
      </div>
    </div>

    <!-- CTA Premium -->
    <div class="preview-cta-block">
      <div class="preview-cta-perks">
        <span>✅ ${RECETTES.filter(x=>x.premium).length} recettes exclusives</span>
        <span>✅ Générateur de menus illimité</span>
        <span>✅ Statistiques bien-être avancées</span>
      </div>
      <a href="https://buy.stripe.com/eVqeVcbsX136eDj0rR9EI00"
         target="_blank"
         class="btn-premium large"
         style="display:block;text-align:center;text-decoration:none;margin-top:12px;"
         onclick="closeModal()">
        💳 Passer à Premium — 4,99€/mois
      </a>
      <button class="btn-link" style="width:100%;margin-top:10px;text-align:center;" onclick="closeModal();showLogin();">
        Déjà abonné·e ? Se connecter
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function openRecette(id) {
  const r = RECETTES.find(x => x.id === id);
  if (!r) return;

  if (r.premium && !isPremium) { openRecettePreview(id); return; }

  const modal   = document.getElementById('recette-modal');
  const content = document.getElementById('modal-content');

  // Tags
  const tagLabels = [];
  if (r.tags.includes('sg')) tagLabels.push({ label:'Sans gluten', color:'var(--green-pale)', text:'var(--green-deep)' });
  if (r.tags.includes('sl')) tagLabels.push({ label:'Sans lactose', color:'#e8f4f8', text:'#2a6478' });
  if (r.tags.includes('vg')) tagLabels.push({ label:'Végétarien', color:'#f0f9e8', text:'#3a6b1a' });

  // Badges nutritionnels
  const nutriIcons = {
    fer:          { icon:'🩸', label:'Fer',       color:'#fde8e8', text:'#8b1a1a' },
    omega3:       { icon:'🐟', label:'Oméga-3',   color:'#e8f0fd', text:'#1a3d8b' },
    magnesium:    { icon:'💊', label:'Magnésium', color:'#f0e8fd', text:'#5a1a8b' },
    vitC:         { icon:'🍋', label:'Vit. C',    color:'#fdf8e8', text:'#7a5c00' },
    proteines:    { icon:'💪', label:'Protéines', color:'#e8fdf0', text:'#1a6b3a' },
    antioxydants: { icon:'🫐', label:'Antioxyd.', color:'#f5e8fd', text:'#6b1a6b' },
  };

  const nutriBadges = r.nutri
    ? Object.entries(r.nutri)
        .filter(([k, v]) => v)
        .map(([k, v]) => {
          const n = nutriIcons[k];
          if (!n) return '';
          const stars = v === '+++' ? '●●●' : v === '++' ? '●●○' : '●○○';
          return `<div class="nutri-badge" style="background:${n.color};color:${n.text};">
            ${n.icon} ${n.label} <span class="nutri-stars">${stars}</span>
          </div>`;
        }).join('')
    : '';

  // Étapes numérotées
  const etapesHTML = r.etapes.map((e, i) => `
    <div class="recipe-step-item">
      <div class="step-number">${i + 1}</div>
      <div class="step-text">${e}</div>
    </div>
  `).join('');

  content.innerHTML = `
    <!-- En-tête -->
    <div class="modal-recipe-header cat-${r.cat}">
      <button class="modal-fav-btn ${isFavori(r.id) ? 'fav-active' : ''}"
              data-fav-id="${r.id}"
              onclick="toggleFavori(${r.id}, event)"
              aria-label="${isFavori(r.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}">${isFavori(r.id) ? '❤️' : '🤍'}</button>
      <div class="modal-recipe-emoji">${r.emoji}</div>
      <div class="modal-recipe-title">${r.nom}</div>

      <!-- Méta rapide -->
      <div class="recipe-meta-row">
        <span class="chip active">⏱ ${r.temps}</span>
        ${r.temps_actif ? `<span class="chip">✋ ${r.temps_actif} actif</span>` : ''}
        <span class="chip">${r.calories} kcal</span>
        <span class="chip">${r.diff}</span>
        ${r.portion ? `<span class="chip">🍽 ${r.portion}</span>` : ''}
      </div>

      <!-- Tags alimentaires -->
      <div class="recipe-tags-row">
        ${tagLabels.map(t => `<span class="recipe-tag-pill" style="background:${t.color};color:${t.text};">${t.label}</span>`).join('')}
        ${r.premium ? '<span class="recipe-tag-pill" style="background:var(--gold);color:#fff;">⭐ Premium</span>' : ''}
      </div>
    </div>

    <!-- Bénéfices santé -->
    <div class="recipe-benefits">
      <div class="recipe-benefits-icon">🌿</div>
      <div>${r.benefices}</div>
    </div>

    <!-- Badges nutritionnels -->
    ${nutriBadges ? `
    <div class="nutri-badges-grid">${nutriBadges}</div>
    ` : ''}

    <!-- Ingrédients -->
    <div class="recipe-section-title">
      <span>🛒 Ingrédients</span>
      <span class="recipe-section-sub">${r.portion || '1 personne'}</span>
    </div>
    <ul class="recipe-ingredient-list">
      ${r.ingredients.map(i => `
        <li>
          <span class="ingredient-dot">·</span>
          <span>${i}</span>
        </li>`).join('')}
    </ul>

    <!-- Préparation -->
    <div class="recipe-section-title">
      <span>👩‍🍳 Préparation</span>
      ${r.temps_actif ? `<span class="recipe-section-sub">~${r.temps_actif}</span>` : ''}
    </div>
    <div class="recipe-steps-list">${etapesHTML}</div>

    <!-- Conseil chef -->
    ${r.conseil ? `
    <div class="recipe-conseil">
      <div class="recipe-conseil-icon">💡</div>
      <div>
        <strong>Conseil</strong><br>
        <span>${r.conseil}</span>
      </div>
    </div>` : ''}

    <!-- Actions -->
    <div class="recipe-actions">
      <button class="btn-primary" style="flex:1;" onclick="addToAgenda(${r.id})">
        📅 Agenda
      </button>
      <button class="btn-primary" style="padding:14px 16px;background:var(--green-mid);" onclick="printRecette(${r.id})" title="Imprimer / PDF" aria-label="Imprimer ou enregistrer en PDF">
        🖨️
      </button>
      <button class="btn-primary" style="padding:14px 16px;background:var(--green-mid);" onclick="shareRecette(${r.id})" title="Partager" aria-label="Partager">
        📤
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('recette-modal').classList.add('hidden');
}

// Alias pour compatibilité vue jour Sérénité
function closeRecette() { closeModal(); }

// Imprimer / enregistrer en PDF une recette (utile pour la cuisine sans téléphone)
function printRecette(id) {
  const r = RECETTES.find(x => x.id === id);
  if (!r) return;

  // Construire les sections d'ingrédients (avec gestion des séparateurs '— SECTION —')
  const ingsHTML = (r.ingredients || []).map(ing => {
    if (/^[—-]/.test(ing.trim())) {
      return '</ul><h3 style="margin:14px 0 6px;font-size:0.95rem;color:#3d6b58;border-bottom:1px solid #ccc;padding-bottom:3px;">' +
             escapeHtml(ing.replace(/^[—-]\s*|\s*[—-]$/g, '')) + '</h3><ul>';
    }
    return '<li>' + escapeHtml(ing) + '</li>';
  }).join('');

  const etapesHTML = (r.etapes || []).map((e, i) =>
    '<li><strong>Étape ' + (i+1) + '.</strong> ' + escapeHtml(e) + '</li>'
  ).join('');

  const tagsHTML = (r.tags || []).map(t => {
    const labels = { sg: 'Sans gluten', sl: 'Sans lactose', vg: 'Végétarien' };
    return '<span style="display:inline-block;padding:3px 10px;background:#e8f0e8;color:#3d6b58;border-radius:99px;font-size:0.78rem;margin-right:5px;">' + (labels[t] || t) + '</span>';
  }).join('');

  // Ouvrir une nouvelle fenêtre avec un document propre dédié à l'impression
  const w = window.open('', '_blank');
  if (!w) {
    alert('Veuillez autoriser les pop-ups pour imprimer la recette.');
    return;
  }

  const html = '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">' +
    '<title>' + escapeHtml(r.nom) + ' — Flōra</title>' +
    '<style>' +
      '@page { size: A4; margin: 18mm 16mm; }' +
      'body { font-family: Georgia, serif; color: #2d4a3e; line-height: 1.55; max-width: 720px; margin: 0 auto; padding: 20px; }' +
      'h1 { font-family: "Playfair Display", Georgia, serif; font-size: 1.8rem; color: #2d4a3e; margin: 0 0 6px; line-height: 1.2; }' +
      '.subtitle { color: #8a9e96; font-size: 0.92rem; margin-bottom: 16px; }' +
      '.meta { display: flex; flex-wrap: wrap; gap: 14px; padding: 10px 14px; background: #f7f3ee; border-radius: 8px; margin-bottom: 18px; font-size: 0.88rem; }' +
      '.meta strong { color: #3d6b58; }' +
      '.benef { padding: 12px 14px; background: #f1f8f1; border-left: 4px solid #3d6b58; border-radius: 4px; margin-bottom: 18px; font-size: 0.9rem; font-style: italic; }' +
      'h2 { font-family: "Playfair Display", Georgia, serif; font-size: 1.2rem; color: #3d6b58; margin: 22px 0 8px; border-bottom: 2px solid #ede8e0; padding-bottom: 4px; }' +
      'h3 { font-family: "Playfair Display", Georgia, serif; }' +
      'ul, ol { padding-left: 22px; }' +
      'li { margin-bottom: 6px; }' +
      'ol li { margin-bottom: 10px; }' +
      'footer { margin-top: 30px; padding-top: 14px; border-top: 1px solid #ede8e0; color: #8a9e96; font-size: 0.78rem; text-align: center; font-style: italic; }' +
      '.print-btn { position: fixed; top: 12px; right: 12px; padding: 10px 16px; background: #3d6b58; color: white; border: none; border-radius: 8px; font-size: 0.92rem; cursor: pointer; font-family: Georgia, serif; box-shadow: 0 2px 8px rgba(0,0,0,0.15); }' +
      '@media print { .print-btn { display: none; } }' +
    '</style>' +
    '</head><body>' +
    '<button class="print-btn" onclick="window.print()">🖨️ Imprimer / Enregistrer en PDF</button>' +
    '<h1>' + r.emoji + ' ' + escapeHtml(r.nom) + '</h1>' +
    '<div class="subtitle">' + tagsHTML + '</div>' +
    '<div class="meta">' +
      '<span>⏱ <strong>' + escapeHtml(r.temps) + '</strong></span>' +
      '<span>🔥 <strong>' + r.calories + ' kcal</strong></span>' +
      '<span>📊 <strong>' + escapeHtml(r.diff) + '</strong></span>' +
    '</div>' +
    (r.benefices ? '<div class="benef">💡 ' + escapeHtml(r.benefices) + '</div>' : '') +
    '<h2>Ingrédients</h2>' +
    '<ul>' + ingsHTML + '</ul>' +
    '<h2>Préparation</h2>' +
    '<ol>' + etapesHTML + '</ol>' +
    '<footer>Recette extraite de Flōra · Application bien-être SJSR & TDAH · Recette #' + r.id + '</footer>' +
    '<scr' + 'ipt>setTimeout(function(){ window.print(); }, 500);</scr' + 'ipt>' +
    '</body></html>';

  w.document.open();
  w.document.write(html);
  w.document.close();
}

function shareRecette(id) {
  const r = RECETTES.find(x => x.id === id);
  if (!r) return;
  const text = `🌿 ${r.emoji} ${r.nom}\n⏱ ${r.temps} · ${r.calories} kcal\n\n${r.benefices}\n\nIngrédients :\n${r.ingredients.map(i=>'• '+i).join('\n')}\n\n👉 Flōra : https://kettyburel-art.github.io/Fl-ra/`;
  if (navigator.share) {
    navigator.share({ title: `Flōra — ${r.nom}`, text, url: 'https://kettyburel-art.github.io/Fl-ra/' }).catch(()=>{});
  } else {
    navigator.clipboard?.writeText(text).then(() => {
      const msg = document.createElement('div');
      msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:var(--green-deep);color:var(--white);padding:10px 20px;border-radius:99px;font-size:0.85rem;z-index:9999;white-space:nowrap;box-shadow:0 4px 16px rgba(0,0,0,.2);';
      msg.textContent = '✅ Recette copiée !';
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 2000);
    });
  }
}


function filterRecettes() { renderRecettes(); }

let currentNutriFilter = '';

function filterNutri(nutri, el) {
  currentNutriFilter = nutri;
  document.querySelectorAll('#nutri-filters .chip').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  renderRecettes();
}

function filterCat(cat, el) {
  currentCatFilter = cat;
  // Cliquer sur une catégorie désactive le filtre favoris (modes exclusifs)
  currentFavorisFilter = false;
  document.querySelectorAll('#cat-filters .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderRecettes();
}

// Bascule du filtre "❤️ Favoris" — exclusif des autres catégories
function toggleFavorisFilter(el) {
  currentFavorisFilter = !currentFavorisFilter;
  if (currentFavorisFilter) {
    // Activer favoris : désactiver toutes les autres catégories
    currentCatFilter = '';
    document.querySelectorAll('#cat-filters .chip').forEach(c => c.classList.remove('active'));
    if (el) el.classList.add('active');
  } else {
    // Revenir à "Toutes"
    if (el) el.classList.remove('active');
    currentCatFilter = '';
    var allChip = document.querySelector('#cat-filters .chip');
    if (allChip) allChip.classList.add('active');
  }
  renderRecettes();
}

// ============================
// STATISTIQUES BIEN-ÊTRE
// ============================
// Note : la vraie fonction de stats du journal est renderJournalStats(),
// affichée dans l'onglet "Statistiques" du journal (#stats-journal-container).
// renderStats() est conservée comme alias défensif — si du code historique
// l'appelle encore, on bascule sur la bonne implémentation.
function renderStats() {
  if (typeof renderJournalStats === 'function') {
    return renderJournalStats();
  }
}

// ============================
// CONSEILS SJSR ROTATIFS
// ============================
const CONSEILS_SJSR = [
  { icon: '🩸', text: 'Associez toujours vos sources de fer à de la vitamine C (citron, poivron) pour multiplier par 3 leur absorption.' },
  { icon: '🦵', text: 'Le magnésium bisglycinate pris le soir réduit significativement les impatiences nocturnes. Privilégiez les eaux riches en magnésium.' },
  { icon: '🐟', text: 'Les oméga-3 (sardines, maquereaux, saumon) réduisent l\'inflammation des nerfs responsable du SJSR. Objectif : 3 fois par semaine.' },
  { icon: '☕', text: 'La caféine amplifie les symptômes SJSR. Évitez-la après 14h — cela inclut le thé, le cola et le chocolat noir en excès.' },
  { icon: '🌙', text: '1 cycle de sommeil = 90 min. Programmez votre réveil sur un multiple de 90 min pour vous réveiller en phase légère.' },
  { icon: '🫘', text: 'Les lentilles beluga (noires) sont les plus riches en fer végétal. Cuisez-les avec du jus de citron pour maximiser l\'absorption.' },
  { icon: '🧠', text: 'Le SJSR et le TDAH partagent souvent une carence en dopamine. Les protéines au petit-déjeuner (œufs, sardines) boostent sa production.' },
  { icon: '🏃', text: 'L\'exercice modéré (marche, yoga) améliore le SJSR. Évitez les efforts intenses le soir — ils aggravent les symptômes nocturnes.' },
  { icon: '🥬', text: 'Les épinards cuits libèrent plus de fer que crus. Faites-les tomber à la poêle avec de l\'ail et un filet de citron en fin de cuisson.' },
  { icon: '💊', text: 'Si votre ferritine est < 75 µg/L, demandez à votre médecin une supplémentation en fer — c\'est le premier traitement du SJSR léger.' },
  { icon: '🌿', text: 'La valériane et la passiflore ont des effets prouvés sur l\'endormissement. À infuser 8 min, 30 min avant le coucher.' },
  { icon: '🫀', text: 'La betterave améliore la circulation sanguine dans les jambes grâce à ses nitrates naturels. Consommez-en 3 fois par semaine.' },
];

let conseilIdx = new Date().getDate() % CONSEILS_SJSR.length;

function renderConseil() {
  const c = CONSEILS_SJSR[conseilIdx];
  const iconEl = document.getElementById('conseil-icon');
  const textEl = document.getElementById('conseil-text');
  if (iconEl) iconEl.textContent = c.icon;
  if (textEl) {
    textEl.style.opacity = '0';
    setTimeout(() => {
      textEl.textContent = c.text;
      textEl.style.opacity = '1';
    }, 150);
  }
}

function nextConseil() {
  conseilIdx = (conseilIdx + 1) % CONSEILS_SJSR.length;
  renderConseil();
}

function openRecetteDuJour() {
  if (window._rdjId) openRecette(window._rdjId);
  else showPage('recettes');
}


function getStreak() {
  const today = new Date();
  let streak = 0;
  let d = new Date(today);
  while (true) {
    if (journal[dateKey(d)]) { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }
  return streak;
}

function getStreakMessage(n) {
  if (n === 0) return 'Commencez votre suivi aujourd\'hui 🌱';
  if (n === 1) return 'Premier jour — continuez !';
  if (n < 7)   return `${n} jours de suite — bel élan !`;
  if (n < 14)  return 'Une semaine complète 🎉';
  if (n < 30)  return 'Régulière et déterminée 💚';
  return 'Un mois de suivi — extraordinaire 🏆';
}

function renderStreakOnDashboard() {
  const streak = getStreak();
  const el = document.getElementById('streak-big');
  if (!el) return;
  el.innerHTML = `
    <div class="streak-flame">🔥</div>
    <div class="streak-info">
      <div class="streak-count-big">${streak} <span style="font-size:1rem;opacity:.7">jour${streak > 1 ? 's' : ''}</span></div>
      <div class="streak-label">de suivi consécutif</div>
      <div class="streak-message">${getStreakMessage(streak)}</div>
    </div>
  `;
}

function addToAgenda(recetteId) {
  const r = RECETTES.find(x => x.id === recetteId);
  if (!r) return;

  closeModal();

  // Ouvre un mini-modal de sélection jour + repas
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9998;display:flex;align-items:flex-end;';

  const today = new Date();
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push(d);
  }

  // Définir les types de repas compatibles
  const repasOptions = REPAS.filter(rep => rep.cat === r.cat);
  const repasLabel = repasOptions.length ? repasOptions[0].label : 'Repas';
  const repasSlug  = repasOptions.length ? repasOptions[0].slug  : 'dejeuner';

  overlay.innerHTML = `
    <div style="width:100%;background:var(--white);border-radius:24px 24px 0 0;padding:24px 20px 36px;max-height:80vh;overflow-y:auto;">
      <div style="font-family:var(--font-display);font-size:1.1rem;color:var(--green-deep);margin-bottom:4px;">
        Ajouter à l'agenda
      </div>
      <div style="font-size:0.85rem;color:var(--text-mid);margin-bottom:16px;">
        ${r.emoji} ${r.nom} → ${repasLabel}
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${dates.map(d => {
          const dk = dateKey(d);
          const label = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
          return `<button onclick="quickAddToAgenda('${dk}','${repasSlug}',${recetteId},this.closest('[style*=fixed]'))"
            style="background:var(--cream);border:1.5px solid var(--cream-dark);border-radius:var(--radius-md);padding:12px 16px;text-align:left;font-family:var(--font-body);font-size:0.88rem;color:var(--text-dark);cursor:pointer;">
            📅 ${label}
          </button>`;
        }).join('')}
      </div>
      <button onclick="this.closest('[style*=fixed]').remove()"
        style="width:100%;margin-top:16px;padding:12px;border:none;border-radius:var(--radius-md);background:var(--cream-dark);color:var(--text-mid);font-family:var(--font-body);cursor:pointer;">
        Annuler
      </button>
    </div>`;

  document.body.appendChild(overlay);
}

function quickAddToAgenda(dk, slug, recId, overlayEl) {
  if (!agenda[dk]) agenda[dk] = {};
  agenda[dk][slug] = recId;
  saveState();
  if (overlayEl) overlayEl.remove();
  renderAgenda();

  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:var(--green-deep);color:var(--white);padding:10px 20px;border-radius:99px;font-size:0.85rem;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.2);white-space:nowrap;';
  msg.textContent = '✅ Ajouté à l\'agenda !';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
}

// ============================
// AGENDA
// ============================
// ============================
// AGENDA — VUE CALENDRIER MENSUEL
// ============================
let _agendaView = 'month'; // 'month' | 'week'
let _agendaMonthOffset = 0; // décalage mois courant
let _agendaSelectedDay = null; // dateKey du jour sélectionné

// JOURS_FULL déjà déclaré plus haut
const MOIS_LONG = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

function getWeekDates(offset) {
  offset = offset || 0;
  const now   = new Date();
  const dow   = (now.getDay() + 6) % 7;
  const start = new Date(now);
  start.setDate(now.getDate() - dow + offset * 7);
  return Array.from({ length: 7 }, function(_, i) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
}

function setAgendaView(view, btn) {
  _agendaView = view;
  _agendaMonthOffset = 0;
  _agendaSelectedDay = null;

  document.querySelectorAll('.agenda-toggle-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');

  // Cacher drawer
  const drawer = document.getElementById('agenda-day-drawer');
  if (drawer) drawer.classList.add('hidden');

  renderAgenda();
}

function changeAgendaPeriod(dir) {
  if (_agendaView === 'month') {
    _agendaMonthOffset += dir;
  } else {
    currentWeekOffset += dir;
  }
  _agendaSelectedDay = null;
  const drawer = document.getElementById('agenda-day-drawer');
  if (drawer) drawer.classList.add('hidden');
  renderAgenda();
}

function renderAgenda() {
  if (_agendaView === 'month') {
    renderAgendaMonth();
  } else {
    renderAgendaWeek();
  }
}

function renderAgendaMonth() {
  const today = new Date();
  const targetMonth = new Date(today.getFullYear(), today.getMonth() + _agendaMonthOffset, 1);
  const year = targetMonth.getFullYear();
  const month = targetMonth.getMonth();
  const todayKey = dateKey(today);

  // Label
  const label = MOIS_LONG[month] + ' ' + year;
  const lblEl = document.getElementById('agenda-period-label');
  if (lblEl) lblEl.textContent = label;

  // Calculer les jours du mois
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const nbDays = lastDay.getDate();
  // 0 = lundi (ISO)
  const firstDow = (firstDay.getDay() + 6) % 7;

  // Construire la grille
  let cellsHTML = '';

  // En-têtes jours
  cellsHTML += '<div class="cal-headers">';
  ['L','M','M','J','V','S','D'].forEach(function(j) {
    cellsHTML += '<div class="cal-header-cell">' + j + '</div>';
  });
  cellsHTML += '</div>';

  // Grille des jours
  cellsHTML += '<div class="cal-grid">';

  // Cases vides avant le 1er
  for (let i = 0; i < firstDow; i++) {
    cellsHTML += '<div class="cal-cell cal-cell-empty"></div>';
  }

  // Jours du mois
  for (let day = 1; day <= nbDays; day++) {
    const d = new Date(year, month, day);
    const k = dateKey(d);
    const isToday = k === todayKey;
    const isSelected = k === _agendaSelectedDay;
    const dayData = agenda[k] || {};
    const hasMeals = Object.keys(dayData).length > 0;
    const hasJournal = !!journal[k];

    let dotsHTML = '';
    if (hasMeals) dotsHTML += '<span class="cal-dot cal-dot-meal"></span>';
    if (hasJournal) dotsHTML += '<span class="cal-dot cal-dot-journal"></span>';

    cellsHTML += '<div class="cal-cell ' +
      (isToday ? 'cal-today ' : '') +
      (isSelected ? 'cal-selected ' : '') +
      (hasMeals ? 'cal-has-meals ' : '') +
      '" onclick="selectAgendaDay(\''+k+'\')">' +
      '<span class="cal-day-num">' + day + '</span>' +
      (dotsHTML ? '<div class="cal-dots">' + dotsHTML + '</div>' : '') +
    '</div>';
  }

  cellsHTML += '</div>';

  document.getElementById('agenda-content').innerHTML = cellsHTML;

  // Si un jour est sélectionné, afficher le drawer
  if (_agendaSelectedDay) {
    renderAgendaDayDrawer(_agendaSelectedDay);
  }
}

function selectAgendaDay(dk) {
  _agendaSelectedDay = (_agendaSelectedDay === dk) ? null : dk;
  renderAgendaMonth();

  if (_agendaSelectedDay) {
    setTimeout(function() {
      const drawer = document.getElementById('agenda-day-drawer');
      if (drawer) drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  } else {
    const drawer = document.getElementById('agenda-day-drawer');
    if (drawer) drawer.classList.add('hidden');
  }
}

function renderAgendaDayDrawer(dk) {
  const drawer = document.getElementById('agenda-day-drawer');
  if (!drawer) return;

  const d = new Date(dk + 'T12:00:00');
  const dayLbl = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  const isToday = dk === dateKey(new Date());
  const dayData = agenda[dk] || {};

  // Horaires par défaut pour chaque type de repas
  const horaires = {
    petitdej: '7h – 8h',
    dejeuner: '12h – 13h30',
    diner: '19h – 20h'
  };

  // Définition des repas avec icônes colorées (style Sérénité)
  const repasConfig = [
    { slug: 'petitdej', label: 'PETIT-DÉJEUNER', icon: '☀️', bg: '#fff4d6', cat: 'petit-dejeuner' },
    { slug: 'dejeuner', label: 'DÉJEUNER', icon: '🥗', bg: '#e8f5d9', cat: 'dejeuner' },
    { slug: 'diner', label: 'DÎNER · SOMMEIL', icon: '🌙', bg: '#fef8c8', cat: 'diner' }
  ];

  // Mapping des tags vers labels visuels
  const tagLabels = {
    'sg': { l: 'SG', c: '#3d6b58', bg: '#e8f5d9' },
    'sl': { l: 'SL', c: '#3d6b58', bg: '#e8f5d9' },
    'vg': { l: 'VG', c: '#3d6b58', bg: '#e8f5d9' },
    'fer': { l: 'FER', c: '#c2547a', bg: '#fdf0f8' },
    'mag': { l: 'MAG', c: '#3d6b58', bg: '#e8f5d9' },
    'omega3': { l: 'Ω3', c: '#3d6b58', bg: '#e8f5d9' },
    'dopa': { l: 'DOPA', c: '#d97706', bg: '#fef3c7' }
  };

  // Générer le résumé titres pour le rappel TDAH
  const titlesResume = repasConfig
    .map(r => {
      const recId = dayData[r.slug];
      if (!recId) return null;
      const rec = RECETTES.find(x => x.id === recId);
      return rec ? rec.nom.split(/[·,-]/)[0].trim() : null;
    })
    .filter(Boolean)
    .join(' · ');

  // Construire le HTML pour chaque repas
  const repasHTML = repasConfig.map(r => {
    const recId = dayData[r.slug];
    
    // Cas: repas libre (custom_) — vérifier AVANT le cas vide
    if (typeof recId === 'string' && recId.startsWith('custom_')) {
      const customMeal = getCustomMeal(recId);
      if (customMeal) {
        const ingredientsHTML = (customMeal.ingredients || [])
          .map(ing => '<span class="ingredient-chip">◆ ' + ing + '</span>')
          .join('');
        const beneficesAuto = computeMealBenefices(customMeal.ingredients);
        return `
          <div class="meal-card meal-card-libre">
            <div class="meal-card-header">
              <div class="meal-icon-circle" style="background:${r.bg};">${r.icon}</div>
              <div style="flex:1;">
                <div class="meal-card-title">${r.label} <span class="meal-libre-tag">✨ Libre</span></div>
                <div class="meal-card-time">${horaires[r.slug]}</div>
              </div>
              <button class="meal-clear-btn" onclick="event.stopPropagation();clearAgendaMeal('${dk}','${r.slug}');">✕</button>
            </div>
            <div class="meal-recipe-name">${customMeal.nom}</div>
            ${ingredientsHTML ? '<div class="meal-ingredients">' + ingredientsHTML + '</div>' : ''}
            ${beneficesAuto ? '<div class="meal-benefice">🌿🌿 ' + beneficesAuto + '</div>' : ''}
          </div>
        `;
      }
    }
    
    // Recette de la bibliothèque
    const rec = recId ? RECETTES.find(x => x.id === recId) : null;

    // Cas: aucune recette assignée
    if (!rec) {
      return `
        <div class="meal-card meal-card-empty">
          <div class="meal-card-header" onclick="editAgendaMeal('${dk}','${r.slug}')">
            <div class="meal-icon-circle" style="background:${r.bg};">${r.icon}</div>
            <div>
              <div class="meal-card-title">${r.label}</div>
              <div class="meal-card-time">${horaires[r.slug]}</div>
            </div>
          </div>
          <div class="meal-empty-actions">
            <button class="meal-empty-action" onclick="editAgendaMeal('${dk}','${r.slug}')">
              📖 Choisir une recette
            </button>
            <button class="meal-empty-action meal-empty-action-libre" onclick="openRepasLibre('${dk}','${r.slug}')">
              ✨ Repas libre
            </button>
          </div>
        </div>
      `;
    }

    // Cas: recette présente — affichage complet
    const ingredientsHTML = (rec.ingredients || [])
      .map(ing => `<span class="ingredient-chip">◆ ${ing}</span>`)
      .join('');

    const tagsArr = (rec.tags || []).map(t => tagLabels[t]).filter(Boolean);
    const tagsHTML = tagsArr.length
      ? `<div class="meal-tags">${tagsArr.map(t =>
          `<span class="meal-tag" style="color:${t.c};background:${t.bg};">${t.l}</span>`
        ).join('')}</div>`
      : '';

    const benefice = rec.benefices
      ? `<div class="meal-benefice">🌿🌿 ${rec.benefices}</div>`
      : '';

    return `
      <div class="meal-card">
        <div class="meal-card-header">
          <div class="meal-icon-circle" style="background:${r.bg};">${r.icon}</div>
          <div style="flex:1;">
            <div class="meal-card-title">${r.label}</div>
            <div class="meal-card-time">${horaires[r.slug]} · <span style="color:#a0735c;">⏱ ${rec.temps}</span></div>
          </div>
          <button class="meal-clear-btn" onclick="event.stopPropagation();clearAgendaMeal('${dk}','${r.slug}');">✕</button>
        </div>

        <div class="meal-recipe-name" onclick="openRecette(${rec.id})">${rec.nom}</div>

        ${ingredientsHTML ? `<div class="meal-ingredients">${ingredientsHTML}</div>` : ''}

        ${tagsHTML}

        ${benefice}
      </div>
    `;
  }).join('');

  drawer.classList.remove('hidden');
  drawer.innerHTML = `
    <div class="serenite-drawer">
      <!-- Header drawer -->
      <div class="serenite-drawer-header">
        <div class="serenite-drawer-handle"></div>
        <div class="serenite-drawer-titles">
          <div class="serenite-day-label">${dayLbl.toUpperCase()}${isToday ? ' · AUJOURD\'HUI' : ''}</div>
          <div class="serenite-drawer-title">🌿 Bon repas</div>
        </div>
        <button class="serenite-drawer-close" onclick="closeAgendaDayDrawer()">✕</button>
      </div>

      ${titlesResume ? `
        <!-- Rappel TDAH -->
        <div class="rappel-tdah">
          <div class="rappel-icon">🧠</div>
          <div class="rappel-content">
            <div class="rappel-label">Rappel TDAH</div>
            <div class="rappel-text">${titlesResume}</div>
          </div>
        </div>
      ` : ''}

      <!-- Cards repas -->
      <div class="meals-list">
        ${repasHTML}
      </div>
    </div>
  `;
}

function closeAgendaDayDrawer() {
  _agendaSelectedDay = null;
  const drawer = document.getElementById('agenda-day-drawer');
  if (drawer) drawer.classList.add('hidden');
  renderAgendaMonth();
}

function renderAgendaWeek() {
  const dates = getWeekDates(currentWeekOffset);
  const today = dateKey(new Date());

  const startLabel = dates[0].toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
  const endLabel   = dates[6].toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  const lblEl = document.getElementById('agenda-period-label');
  if (lblEl) lblEl.textContent = startLabel + ' – ' + endLabel;

  const html = dates.map(function(d, i) {
    const k = dateKey(d);
    const isToday = k === today;
    const dayData = agenda[k] || {};
    const dayName = JOURS_FULL[i];

    const repasHTML = REPAS.map(function(r) {
      const slug = r.slug;
      const recId = dayData[slug];
      const rec = recId ? RECETTES.find(function(x) { return x.id === recId; }) : null;
      return '<div class="agenda-meal" onclick="editAgendaMeal(\''+k+'\',\''+slug+'\')">' +
        '<div class="meal-label">' + r.label + '</div>' +
        '<div class="meal-content ' + (rec ? '' : 'meal-empty') + '">' + (rec ? rec.emoji + ' ' + rec.nom : '+ Ajouter') + '</div>' +
        (rec ? '<button class="meal-edit-btn" onclick="event.stopPropagation();clearAgendaMeal(\''+k+'\',\''+slug+'\')">✕</button>' : '') +
      '</div>';
    }).join('');

    return '<div class="agenda-day">' +
      '<div class="agenda-day-header ' + (isToday ? 'today-header' : '') + '">' +
        '<span>' + dayName + ' ' + d.getDate() + '</span>' +
        (isToday ? '<span style="font-size:0.7rem;opacity:0.8;">Aujourd\'hui</span>' : '') +
      '</div>' +
      '<div class="agenda-meals">' + repasHTML + '</div>' +
    '</div>';
  }).join('');

  document.getElementById('agenda-content').innerHTML = html;
}

function changeWeek(dir) {
  currentWeekOffset += dir;
  renderAgenda();
}

function editAgendaMeal(dk, slug) {
  // Récupère la catégorie depuis l'objet REPAS
  const repasObj = REPAS.find(r => r.slug === slug);
  const cat = repasObj ? repasObj.cat : 'dejeuner';

  // Si une recette est en attente (depuis "Ajouter à l'agenda"), la placer directement
  if (window._pendingRecetteId) {
    const pendingRec = RECETTES.find(x => x.id === window._pendingRecetteId);
    if (pendingRec && pendingRec.cat === cat) {
      setAgendaMeal(dk, slug, window._pendingRecetteId);
      window._pendingRecetteId = null;
      return;
    }
  }

  const recs = RECETTES.filter(r => r.cat === cat && (!r.premium || isPremium));
  if (!recs.length) return;

  const modal   = document.getElementById('recette-modal');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <h3 style="font-family:var(--font-display);color:var(--green-deep);margin-bottom:16px;">Choisir pour ce repas</h3>
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${recs.map(r => `
        <div class="card" style="cursor:pointer;" onclick="setAgendaMeal('${dk}','${slug}',${r.id})">
          <div class="card-icon">${r.emoji}</div>
          <div class="card-body">
            <div class="card-title">${r.nom}</div>
            <div class="card-sub">⏱ ${r.temps}</div>
          </div>
        </div>`).join('')}
    </div>`;

  modal.classList.remove('hidden');
}

function setAgendaMeal(dk, repas, recId) {
  if (!agenda[dk]) agenda[dk] = {};
  agenda[dk][repas] = recId;
  saveState();
  closeModal();
  renderAgenda();
}

function clearAgendaMeal(dk, repas) {
  if (agenda[dk]) {
    delete agenda[dk][repas];
    saveState();
    renderAgenda();
  }
}

// ============================
// GÉNÉRATEUR
// ============================
// ============================
// GÉNÉRATEUR — ONGLETS
// ============================
function switchGenTab(tab, el) {
  ['semaine','mensuel','brunch'].forEach(t => {
    const el2 = document.getElementById('gen-tab-'+t);
    if (el2) el2.classList.add('hidden');
  });
  const target = document.getElementById('gen-tab-'+tab);
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('#page-generateur .jtab').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');

  if (tab === 'mensuel') renderPlanMensuel();
  if (tab === 'brunch')  renderBrunchList();
}

// Bascule entre les onglets Recettes et Compléments de la page Recettes
function switchRecettesTab(tab, btn) {
  var tabs = ['recettes', 'complements'];
  tabs.forEach(function(t) {
    var el = document.getElementById(t + '-tab-content');
    if (el) el.classList.add('hidden');
  });
  var target = document.getElementById(tab + '-tab-content');
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('#page-recettes .jtab').forEach(function(b) {
    b.classList.remove('active');
  });
  if (btn) btn.classList.add('active');

  // Remplir la liste des compléments à la première ouverture
  if (tab === 'complements' && typeof renderComplementsList === 'function') {
    var listEl = document.getElementById('complements-list');
    if (listEl && !listEl.dataset.rendered) {
      renderComplementsList('complements-list');
      listEl.dataset.rendered = 'true';
    }
  }
}

// Plans mensuels → définis dans flora_plans.js, chargé avant app.js dans index.html


const JOURS_SEMAINE = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
const MOIS = ['jan','fév','mar','avr','mai','juin','juil','août','sep','oct','nov','déc'];

function renderPlanMensuel() {
  const now = new Date();
  const moisNum = now.getMonth(); // 3=avril, 4=mai
  // Plans disponibles pour 2026
  const plansDisponibles = [3, 4]; // avril, mai
  let moisAffiche;
  if (plansDisponibles.includes(moisNum)) {
    moisAffiche = moisNum;
  } else {
    // Hors avril/mai : afficher le plus proche du mois courant
    moisAffiche = plansDisponibles.reduce((a, b) =>
      Math.abs(b - moisNum) < Math.abs(a - moisNum) ? b : a
    );
  }
  renderPlanMoisSpec(moisAffiche);
}

function renderPlanMoisSpec(moisIdx) {
  const container = document.getElementById('plan-mensuel-content');
  if (!container) return;

  const plan    = moisIdx === 3 ? PLAN_MENSUEL_AVRIL : PLAN_MENSUEL_MAI;
  const nomMois = moisIdx === 3 ? 'Avril 2026' : 'Mai 2026';
  const annee   = 2026;
  const getR    = id => RECETTES.find(r => r.id === id);
  const now     = new Date();
  const jourAuj = now.getDate();
  const moisAuj = now.getMonth();

  const selectorHTML = `
    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
      <button class="budget-chip ${moisIdx===3?'active':''}" onclick="renderPlanMoisSpec(3)">🌸 Avril 2026</button>
      <button class="budget-chip ${moisIdx===4?'active':''}" onclick="renderPlanMoisSpec(4)">🌿 Mai 2026</button>
    </div>
    <p style="font-size:0.78rem;color:var(--text-light);margin-bottom:12px;">
      ${plan.length} jours · Cliquez sur une recette pour la voir · 📍 = aujourd\'hui
    </p>
  `;

  const joursHTML = plan.map(jour => {
    const date     = new Date(annee, moisIdx, jour.j);
    const dayName  = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'][date.getDay()];
    const isWE     = date.getDay() === 0 || date.getDay() === 6;
    const isToday  = jour.j === jourAuj && moisIdx === moisAuj;
    const isPast   = (moisIdx < moisAuj) || (moisIdx === moisAuj && jour.j < jourAuj);
    const locked   = !isPremium && jour.j > 7;

    const pdc   = getR(jour.pdc);
    const dej   = getR(jour.dej);
    const din   = getR(jour.din);
    const snack = getR(jour.snack);

    return `
      <div class="plan-jour${locked?' plan-jour-locked':''}${isToday?' plan-jour-today':''}${isPast?' plan-jour-past':''}">
        <div class="plan-jour-header">
          <div class="plan-jour-date">
            <strong>${dayName} ${jour.j}${isToday?' 📍':''}</strong>
            <span class="plan-jour-theme">${jour.theme}</span>
          </div>
          ${locked?'<span class="plan-lock">⭐ Premium</span>':''}
        </div>
        ${locked?`
          <div class="plan-locked-msg" onclick="showPremium()">
            Débloquer ${nomMois} complet — Premium 4,99€/mois →
          </div>
        `:`
          <div class="plan-repas">
            ${pdc  ?`<div class="plan-meal" onclick="openRecette(${pdc.id})"><span class="plan-meal-label">${isWE?'🥂':'🌅'}</span><span>${pdc.emoji} ${pdc.nom}</span></div>`:''}
            ${dej  ?`<div class="plan-meal" onclick="openRecette(${dej.id})"><span class="plan-meal-label">☀️</span><span>${dej.emoji} ${dej.nom}</span></div>`:''}
            ${din  ?`<div class="plan-meal" onclick="openRecette(${din.id})"><span class="plan-meal-label">🌙</span><span>${din.emoji} ${din.nom}</span></div>`:''}
            ${snack?`<div class="plan-meal" onclick="openRecette(${snack.id})" style="opacity:.75"><span class="plan-meal-label">🍎</span><span>${snack.emoji} ${snack.nom}</span></div>`:''}
          </div>
        `}
      </div>
    `;
  }).join('');

  container.innerHTML = selectorHTML + joursHTML;

  // Scroll vers aujourd'hui si on est dans le bon mois
  if (moisIdx === moisAuj) {
    setTimeout(() => {
      const todayEl = container.querySelector('.plan-jour-today');
      if (todayEl) todayEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  }
}

function renderBrunchList() {
  const container = document.getElementById('brunch-content');
  if (!container) return;

  const brunchs = RECETTES.filter(r => r.cat === 'brunch');
  container.innerHTML = brunchs.map(r => {
    const locked = r.premium && !isPremium;
    return `
      <div class="card" style="margin-bottom:10px;" onclick="${locked ? 'openRecettePreview('+r.id+')' : 'openRecette('+r.id+')'}">
        <div class="card-icon">${r.emoji}${locked ? '' : ''}</div>
        <div class="card-body">
          <div class="card-title">${r.nom}</div>
          <div class="card-sub">⏱ ${r.temps} · ${r.calories} kcal${r.premium ? ' · ⭐ Premium' : ''}</div>
        </div>
        <div class="card-arrow">→</div>
      </div>
    `;
  }).join('');
}

function generateBrunchMenu() {
  const brunchs = RECETTES.filter(r => r.cat === 'brunch' && (!r.premium || isPremium));
  if (!brunchs.length) { showPremium(); return; }

  const picks = [];
  const shuffled = [...brunchs].sort(() => Math.random() - 0.5);
  // 1 sucré + 1 salé
  const sucres = shuffled.filter(r => ['🥞','🫐','🧇','🍌','🌺','🍓','🫙'].includes(r.emoji));
  const sales  = shuffled.filter(r => !['🥞','🫐','🧇','🍌','🌺','🍓','🫙'].includes(r.emoji));

  const pick1 = sucres[0] || shuffled[0];
  const pick2 = sales[0]  || shuffled[1];

  const container = document.getElementById('brunch-content');
  if (!container) return;

  const suggestion = document.createElement('div');
  suggestion.className = 'journal-block';
  suggestion.style.cssText = 'background:linear-gradient(135deg,var(--green-pale),#fef3e2);border:1.5px solid var(--gold);margin-bottom:16px;';
  suggestion.innerHTML = `
    <div class="jblock-title">🎲 Suggestion brunch du jour</div>
    <div class="card" style="margin:8px 0;" onclick="openRecette(${pick1?.id})">
      <div class="card-icon">${pick1?.emoji}</div>
      <div class="card-body"><div class="card-title">${pick1?.nom}</div><div class="card-sub">☕ Sucré</div></div>
      <div class="card-arrow">→</div>
    </div>
    ${pick2 ? `<div class="card" onclick="openRecette(${pick2.id})">
      <div class="card-icon">${pick2.emoji}</div>
      <div class="card-body"><div class="card-title">${pick2.nom}</div><div class="card-sub">🍳 Salé</div></div>
      <div class="card-arrow">→</div>
    </div>` : ''}
  `;

  container.parentElement.insertBefore(suggestion, container);
  setTimeout(() => suggestion.remove(), 10000);
}

function checkGenAccess() {
  // Rien à faire — le mur premium est géré dans generateMenu
}

// ============================================================
// GÉNÉRATEUR DE MENU INTELLIGENT
// ============================================================
//
// Contraintes appliquées en cascade :
//  1. Filtres durs : profil (sg/sl/vg), accès premium
//  2. Boost nutritionnel selon priorité utilisatrice
//  3. Anti-répétition stricte (aucun même plat dans la semaine)
//  4. Anti-monotonie : pas le même type d'ingrédient principal 2 jours
//     d'affilée (poisson, légumineuse, volaille, œuf, tofu, autre)
//  5. Équilibre semaine sur les dîners : viser ≥ 2 poissons gras
//     (oméga-3) et ≥ 1 légumineuse sur la semaine

// Détection du type d'ingrédient principal d'une recette
function detectMainType(recette) {
  var allText = ((recette.ingredients || []).join(' ') + ' ' + (recette.nom || '')).toLowerCase();
  // Ordre = priorité (poisson gras avant poisson maigre)
  if (/saumon|maquereau|sardine|hareng|truite/.test(allText))         return 'poisson-gras';
  if (/cabillaud|colin|dorade|lieu|merlu|bar\b|sole/.test(allText))   return 'poisson-maigre';
  if (/lentille|pois chiche|haricot|fève|edamame/.test(allText))      return 'legumineuse';
  if (/poulet|dinde|volaille/.test(allText))                          return 'volaille';
  if (/agneau|bœuf|boeuf|veau|porc/.test(allText))                    return 'viande-rouge';
  if (/tofu|tempeh|seitan/.test(allText))                             return 'tofu';
  if (/œuf|oeuf/.test(allText))                                       return 'oeuf';
  if (/quinoa|sarrasin|riz|millet|polenta/.test(allText))             return 'cereale';
  return 'autre';
}

// Score nutritionnel selon la priorité (0 à 1)
function scorePriority(recette, priorite) {
  var text = ((recette.benefices || '') + ' ' + (recette.ingredients || []).join(' ') + ' ' + (recette.nom || '')).toLowerCase();
  if (priorite === 'sommeil') {
    var motsSommeil = ['magnésium', 'magnesium', 'tryptophane', 'mélatonine', 'melatonine', 'sommeil',
                       'sarrasin', 'amande', 'noix', 'banane', 'cerise', 'chocolat', 'cacao', 'avoine'];
    return motsSommeil.filter(function(m) { return text.includes(m); }).length / 4;
  }
  if (priorite === 'energie') {
    var motsEnergie = ['fer', 'protéine', 'proteine', 'tyrosine', 'dopamine', 'énergie', 'energie',
                       'lentille', 'pois chiche', 'sardine', 'maquereau', 'persil', 'épinard', 'epinard',
                       'graine de courge', 'spiruline', 'cacao'];
    return motsEnergie.filter(function(m) { return text.includes(m); }).length / 4;
  }
  if (priorite === 'digestion') {
    var motsDigest = ['microbiote', 'fibre', 'digestion', 'probiotique', 'fenouil', 'gingembre',
                      'curcuma', 'menthe', 'aneth', 'cumin'];
    var bonus = (recette.tags && recette.tags.indexOf('vg') >= 0) ? 0.4 : 0;
    return Math.min(1, motsDigest.filter(function(m) { return text.includes(m); }).length / 3 + bonus);
  }
  // anti-inflammatoire (par défaut)
  var motsAI = ['oméga', 'omega', 'curcuma', 'gingembre', 'anti-inflammatoire', 'antioxydant',
                'chia', 'lin', 'saumon', 'maquereau', 'sardine', 'noix', 'olive', 'avocat'];
  return motsAI.filter(function(m) { return text.includes(m); }).length / 4;
}

// Filtre dur d'un pool selon le profil utilisateur
function applyProfileFilter(pool) {
  return pool.filter(function(r) {
    if (profile.sansGluten  && !(r.tags || []).includes('sg')) return false;
    if (profile.sansLactose && !(r.tags || []).includes('sl')) return false;
    if (profile.vegetarien  && !(r.tags || []).includes('vg')) return false;
    return true;
  });
}

// Choix pondéré : score = base aléatoire + bonus priorité − pénalité contraintes
function pickWeighted(pool, priorite, used, prevType) {
  if (!pool.length) return null;
  // Filtrer ce qui a déjà été utilisé cette semaine
  var available = pool.filter(function(r) { return !used[r.id]; });
  if (!available.length) available = pool; // fallback si épuisé

  var scored = available.map(function(r) {
    var s = Math.random() * 0.5;          // base aléatoire (variété)
    s += scorePriority(r, priorite) * 0.6; // boost priorité
    if (typeof isFavori === 'function' && isFavori(r.id)) s += 0.35; // boost favori
    if (prevType && detectMainType(r) === prevType) s -= 0.4; // pénalité monotonie
    return { r: r, score: s };
  });
  scored.sort(function(a, b) { return b.score - a.score; });
  return scored[0].r;
}

function generateMenu() {
  var duree    = parseInt(document.getElementById('gen-duree').value, 10);
  var priorite = document.getElementById('gen-priorite').value;

  if (!isPremium && duree > 3) {
    document.getElementById('generated-menu').classList.add('hidden');
    document.getElementById('gen-premium-wall').classList.remove('hidden');
    return;
  }
  document.getElementById('gen-premium-wall').classList.add('hidden');

  // 1. Pools filtrés par accès et profil
  function pool(cat) {
    var arr = RECETTES.filter(function(r) {
      return r.cat === cat && (!r.premium || isPremium);
    });
    var filtered = applyProfileFilter(arr);
    return filtered.length ? filtered : arr; // fallback si profil trop strict
  }
  var petitsDej = pool('petit-dejeuner');
  var brunchs   = pool('brunch');
  var dejeuners = pool('dejeuner');
  var diners    = pool('diner');
  var snacks    = pool('snack');

  // 2. Détection si profil restrictif a forcé un fallback (pour avertir)
  var stricteFallback = false;
  ['petit-dejeuner', 'dejeuner', 'diner', 'snack'].forEach(function(c) {
    var raw = RECETTES.filter(function(r) { return r.cat === c && (!r.premium || isPremium); });
    var filt = applyProfileFilter(raw);
    if (raw.length && !filt.length) stricteFallback = true;
  });

  // 3. Génération jour par jour avec mémoire des contraintes
  var today = new Date();
  var used = {}; // recette.id → true si déjà utilisée
  var jours = [];
  var prevDejType = null, prevDinType = null;

  for (var i = 0; i < duree; i++) {
    var d = new Date(today);
    d.setDate(today.getDate() + i);
    var jourSem = d.getDay(); // 0=dim, 6=sam
    var isWeekend = jourSem === 0 || jourSem === 6;

    var pDejPool = (isWeekend && brunchs.length) ? brunchs : petitsDej;
    var pDej  = pickWeighted(pDejPool,  priorite, used, null);
    var dej   = pickWeighted(dejeuners, priorite, used, prevDejType);
    // Pour le dîner : éviter le type du déjeuner du jour ET du dîner de la veille
    var dejTypeToday = dej ? detectMainType(dej) : null;
    var dinAvoidType = (prevDinType && Math.random() < 0.5) ? prevDinType : dejTypeToday;
    var din   = pickWeighted(diners,    priorite, used, dinAvoidType);
    var snack = pickWeighted(snacks,    priorite, used, null);

    [pDej, dej, din, snack].forEach(function(r) { if (r) used[r.id] = true; });
    if (dej) prevDejType = detectMainType(dej);
    if (din) prevDinType = detectMainType(din);

    jours.push({
      d: d, isWeekend: isWeekend,
      pDej: pDej, dej: dej, din: din, snack: snack,
      isBrunch: pDejPool === brunchs && isWeekend
    });
  }

  // 4. Équilibre semaine sur les dîners (≥ 2 poissons gras, ≥ 1 légumineuse si duree ≥ 5)
  if (duree >= 5) {
    var dinTypes = jours.map(function(j) { return j.din ? detectMainType(j.din) : null; });
    var nbPoissonGras = dinTypes.filter(function(t) { return t === 'poisson-gras'; }).length;
    var nbLegumineuse = dinTypes.filter(function(t) { return t === 'legumineuse'; }).length;

    function trySwap(targetType, minNeeded, count) {
      while (count < minNeeded) {
        var candidat = diners.filter(function(r) { return detectMainType(r) === targetType && !used[r.id]; });
        if (!candidat.length) return count; // pool épuisé
        // Trouver le jour à remplacer : un jour dont le dîner n'est PAS le type cible et qui a un type abondant
        var idxRemplacable = -1;
        for (var k = 0; k < jours.length; k++) {
          var t = jours[k].din ? detectMainType(jours[k].din) : null;
          if (t !== targetType && t !== 'legumineuse' && t !== 'poisson-gras') {
            idxRemplacable = k; break;
          }
        }
        if (idxRemplacable < 0) {
          // dernier recours : remplacer un type déjà sur-représenté
          for (var k2 = 0; k2 < jours.length; k2++) {
            var t2 = jours[k2].din ? detectMainType(jours[k2].din) : null;
            if (t2 !== targetType) { idxRemplacable = k2; break; }
          }
        }
        if (idxRemplacable < 0) return count;
        var newDin = candidat[Math.floor(Math.random() * candidat.length)];
        if (jours[idxRemplacable].din) used[jours[idxRemplacable].din.id] = false;
        used[newDin.id] = true;
        jours[idxRemplacable].din = newDin;
        count++;
      }
      return count;
    }
    nbPoissonGras = trySwap('poisson-gras', 2, nbPoissonGras);
    nbLegumineuse = trySwap('legumineuse', 1, nbLegumineuse);
  }

  // 5. Construction du HTML
  var html = '';
  jours.forEach(function(j) {
    var label    = j.d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    var pDejLab  = j.isBrunch ? '🥂 Brunch' : '🌅 Petit-déj';
    var pDejId = j.pDej ? j.pDej.id : '';
    var dejId  = j.dej  ? j.dej.id  : '';
    var dinId  = j.din  ? j.din.id  : '';
    var snId   = j.snack ? j.snack.id : '';

    html += '<div class="gen-day-block" data-pdej="' + pDejId + '" data-dej="' + dejId + '" data-din="' + dinId + '" data-snack="' + snId + '">';
    html +=   '<div class="gen-day-title">📅 ' + label + (j.isWeekend ? ' 🌿' : '') + '</div>';
    if (j.pDej) {
      html += '<div class="gen-meal" onclick="openRecette(' + j.pDej.id + ')" style="cursor:pointer;">';
      html +=   '<div class="gen-meal-label">' + pDejLab + '</div>';
      html +=   '<div class="gen-meal-name">' + j.pDej.emoji + ' ' + j.pDej.nom + '</div>';
      html += '</div>';
    }
    if (j.dej) {
      html += '<div class="gen-meal" onclick="openRecette(' + j.dej.id + ')" style="cursor:pointer;">';
      html +=   '<div class="gen-meal-label">☀️ Déjeuner</div>';
      html +=   '<div class="gen-meal-name">' + j.dej.emoji + ' ' + j.dej.nom + '</div>';
      html += '</div>';
    }
    if (j.din) {
      html += '<div class="gen-meal" onclick="openRecette(' + j.din.id + ')" style="cursor:pointer;">';
      html +=   '<div class="gen-meal-label">🌙 Dîner</div>';
      html +=   '<div class="gen-meal-name">' + j.din.emoji + ' ' + j.din.nom + '</div>';
      html += '</div>';
    }
    if (j.snack) {
      html += '<div class="gen-meal" onclick="openRecette(' + j.snack.id + ')" style="cursor:pointer;opacity:0.85;">';
      html +=   '<div class="gen-meal-label">🍎 Collation</div>';
      html +=   '<div class="gen-meal-name">' + j.snack.emoji + ' ' + j.snack.nom + '</div>';
      html += '</div>';
    }
    html += '</div>';
  });

  // 6. Bilan équilibre (info utilisatrice)
  var bilanHtml = '';
  if (duree >= 5) {
    var typesD = jours.map(function(j) { return j.din ? detectMainType(j.din) : null; }).filter(Boolean);
    var nbPG = typesD.filter(function(t) { return t === 'poisson-gras'; }).length;
    var nbLeg = typesD.filter(function(t) { return t === 'legumineuse'; }).length;
    var allRecettes = [];
    jours.forEach(function(j) { ['pDej','dej','din','snack'].forEach(function(k) { if (j[k]) allRecettes.push(j[k].id); }); });
    var nbDistinctes = Object.keys(allRecettes.reduce(function(o, id) { o[id] = 1; return o; }, {})).length;

    bilanHtml = '<div style="background:#f1f8f1;border-left:4px solid #3d6b58;border-radius:8px;padding:12px 14px;margin:12px 0;font-size:0.82rem;color:#2d4a3e;">';
    bilanHtml +=   '<div style="font-weight:600;margin-bottom:6px;">🌿 Bilan de la semaine</div>';
    bilanHtml +=   '<div>· ' + nbDistinctes + ' recettes différentes sur ' + allRecettes.length + ' repas</div>';
    bilanHtml +=   '<div>· ' + nbPG + ' dîner' + (nbPG > 1 ? 's' : '') + ' avec poisson gras (oméga-3)</div>';
    bilanHtml +=   '<div>· ' + nbLeg + ' dîner' + (nbLeg > 1 ? 's' : '') + ' légumineuse (fer + fibres)</div>';
    bilanHtml += '</div>';
  }

  // 7. Avertissement profil restrictif
  var fallbackHtml = '';
  if (stricteFallback) {
    fallbackHtml = '<div style="background:#fef6e7;border-left:4px solid #d4a574;border-radius:8px;padding:10px 14px;margin:12px 0;font-size:0.78rem;color:#7a5e1e;">';
    fallbackHtml +=  '⚠️ Certaines catégories n\'avaient pas assez de recettes compatibles avec ton profil. Quelques choix peuvent ne pas respecter tous tes filtres.';
    fallbackHtml += '</div>';
  }

  var generated = document.getElementById('generated-menu');
  generated.innerHTML =
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">' +
      '<div style="font-family:var(--font-display);color:var(--green-deep);font-size:1.1rem;">Menu généré ✨</div>' +
      '<button class="btn-primary" onclick="generateMenu()" style="padding:8px 16px;font-size:0.82rem;">🔄 Régénérer</button>' +
    '</div>' +
    fallbackHtml +
    bilanHtml +
    html +
    '<button class="btn-primary full-width" onclick="applyMenuToAgenda()">📅 Importer dans l\'agenda</button>';

  generated.classList.remove('hidden');
  generated.dataset.duree = duree;
}

function applyMenuToAgenda() {
  // Récupère les recettes du menu généré depuis les data-attributes
  const generated = document.getElementById('generated-menu');
  const blocks = generated.querySelectorAll('.gen-day-block');

  if (!blocks.length) {
    showPage('agenda');
    return;
  }

  const today = new Date();
  blocks.forEach((block, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dk = dateKey(d);

    // Récupérer les IDs stockés en data-attributes
    const pDejId = parseInt(block.dataset.pdej);
    const dejId  = parseInt(block.dataset.dej);
    const dinId  = parseInt(block.dataset.din);
    const snId   = parseInt(block.dataset.snack);

    if (!agenda[dk]) agenda[dk] = {};
    if (pDejId) agenda[dk]['petitdej'] = pDejId;
    if (dejId)  agenda[dk]['dejeuner'] = dejId;
    if (dinId)  agenda[dk]['diner']    = dinId;
    if (snId)   agenda[dk]['snack']    = snId;
  });

  saveState();
  if (typeof checkBadges === 'function') checkBadges();
  showPage('agenda');

  // Toast confirmation
  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:var(--green-deep);color:var(--white);padding:10px 20px;border-radius:99px;font-size:0.85rem;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.2);white-space:nowrap;';
  msg.textContent = '✅ Menu importé dans l\'agenda !';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2500);
}

// ============================
// PROFIL
// ============================
function loadProfil() {
  document.getElementById('p-name').value    = profile.name    || '';
  document.getElementById('p-goal').value    = profile.goal    || 'global';
  document.getElementById('p-sg').checked    = !!profile.sansGluten;
  document.getElementById('p-sl').checked    = !!profile.sansLactose;
  document.getElementById('p-sv').checked    = !!profile.vegetarien;
  
  // Toggle cycle menstruel (par défaut activé)
  const cycleEl = document.getElementById('p-cycle');
  if (cycleEl) {
    cycleEl.checked = profile.cycleEnabled !== false;
  }

  const initials = (profile.name || '?').charAt(0).toUpperCase();
  document.getElementById('avatar-initials').textContent   = initials;
  document.getElementById('profil-display-name').textContent = profile.name || 'Mon profil';

  const badge = document.getElementById('profil-plan-badge');
  if (isPremium) {
    badge.textContent = '⭐ Abonné·e Premium';
    badge.className = 'profil-badge premium';
  } else {
    badge.textContent = 'Version gratuite';
    badge.className = 'profil-badge';
  }
}

function saveProfil(btn) {
  profile.name        = document.getElementById('p-name').value.trim();
  profile.goal        = document.getElementById('p-goal').value;
  profile.sansGluten  = document.getElementById('p-sg').checked;
  profile.sansLactose = document.getElementById('p-sl').checked;
  profile.vegetarien  = document.getElementById('p-sv').checked;
  
  // Sauvegarder le toggle cycle
  const cycleEl = document.getElementById('p-cycle');
  if (cycleEl) {
    profile.cycleEnabled = cycleEl.checked;
  }

  saveState();
  updateDashboard();
  loadProfil();

  // Feedback
  if (btn) {
    btn.textContent = '✅ Enregistré !';
    setTimeout(() => btn.textContent = 'Enregistrer', 2000);
  }
}

function resetApp() {
  if (confirm('Réinitialiser toutes les données ? Cette action est irréversible.')) {
    localStorage.clear();
    window.location.reload();
  }
}

// ============================
// PREMIUM
// ============================
function showPremium() {
  document.getElementById('premium-modal').classList.remove('hidden');
}

function closePremium() {
  document.getElementById('premium-modal').classList.add('hidden');
}

function activatePremiumDemo() {
  activatePremium();
  closePremium();
}

function checkCode() {
  const code = document.getElementById('promo-code').value.trim().toUpperCase();
  const errorEl   = document.getElementById('code-error');
  const successEl = document.getElementById('code-success');

  // Réinitialiser les messages
  errorEl?.classList.add('hidden');
  successEl?.classList.add('hidden');

  // Codes fixes de démo/test
  const FIXED_CODES = ['FLORA2025', 'SJSR2025', 'BIENETRE'];

  // Format dynamique post-paiement Stripe : FLORA-XXXXXXXX (8+ chars après le tiret)
  const isDynamicCode = /^FLORA-[A-Z0-9]{6,}$/.test(code);

  if (FIXED_CODES.includes(code) || isDynamicCode) {
    activatePremium();
    successEl?.classList.remove('hidden');
    setTimeout(() => closePremium(), 1800);
  } else {
    document.getElementById('promo-code').style.borderColor = 'var(--red-soft)';
    errorEl?.classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('promo-code').style.borderColor = '';
      errorEl?.classList.add('hidden');
    }, 3000);
  }
}

function activatePremium() {
  isPremium = true;
  localStorage.setItem('flora_premium', 'true');
  loadProfil();
  renderRecettes();
}

// ============================
// SERVICE WORKER
// ============================

// Fix tabs Recettes/Compléments — bind explicite au DOMContentLoaded
(function() {
  function bindRecettesTabs() {
    const tabs = document.querySelectorAll('#page-recettes .journal-tabs .jtab');
    if (!tabs.length) {
      console.warn('[Flōra] Onglets recettes non trouvés');
      return;
    }
    tabs.forEach(function(tab, idx) {
      const tabType = idx === 0 ? 'recettes' : 'complements';
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof switchRecettesTab === 'function') {
          switchRecettesTab(tabType, this);
        }
      });
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindRecettesTabs);
  } else {
    bindRecettesTabs();
  }
})();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ============================================================
// JOURNAL ENRICHI — Habitudes du jour + Symptômes étendus
// ============================================================

// === BLOC HABITUDES DU JOUR ===
function renderHabitudesBlock() {
  // Hydratation : 8 verres = jauge cliquable
  const verresHTML = Array.from({length: 8}, (_, i) => {
    const filled = i < _journalEau;
    return '<button onclick="toggleEau(' + (i+1) + ')" aria-label="Verre ' + (i+1) + '" style="width:32px;height:42px;border:2px solid ' + (filled ? '#3b82f6' : '#d4ecf2') + ';background:' + (filled ? 'linear-gradient(to top, #60a5fa, #93c5fd)' : '#f7f3ee') + ';border-radius:6px 6px 14px 14px;cursor:pointer;padding:0;transition:all 0.18s;display:flex;align-items:flex-end;justify-content:center;font-size:0.7rem;color:' + (filled ? '#fff' : '#a4b8c4') + ';font-weight:600;">' + (filled ? '✓' : (i+1)) + '</button>';
  }).join('');
  
  const eauLabel = _journalEau === 0 ? 'Aucun verre' 
                 : _journalEau === 1 ? '1 verre' 
                 : _journalEau >= 8 ? '8 verres ou +'
                 : _journalEau + ' verres';

  // Caféine
  const cafTasses = _journalCafeine.tasses || 0;
  const cafHeure = _journalCafeine.heureDerniere || '';
  const cafTassesLabel = cafTasses === 0 ? 'Aucune tasse' 
                       : cafTasses === 1 ? '1 tasse'
                       : cafTasses + ' tasses';
  
  // Alerte caféine si dernière prise > 14h
  let cafAlert = '';
  if (cafHeure) {
    const [h] = cafHeure.split(':').map(Number);
    if (h >= 14 && h <= 23) {
      cafAlert = '<div style="font-size:0.75rem;color:#c0614a;margin-top:8px;padding:8px 12px;background:rgba(192,97,74,0.08);border-radius:8px;border-left:3px solid #c0614a;">⚠️ Café après 14h : peut aggraver le SJSR la nuit (demi-vie 5-6h)</div>';
    }
  }

  // Alcool
  const alcoolLabel = _journalAlcool === 0 ? 'Aucun verre' 
                    : _journalAlcool === 1 ? '1 verre' 
                    : _journalAlcool + ' verres';

  // Cycle menstruel : afficher seulement si le profil le permet
  // Vérifie le sexe ou le toggle dans le profil
  const showCycle = shouldShowCycle();
  let cycleHTML = '';
  if (showCycle) {
    const phases = [
      { v:'', l:'—' },
      { v:'regles', l:'🌹 Règles' },
      { v:'folliculaire', l:'🌱 Folliculaire' },
      { v:'ovulation', l:'✨ Ovulation' },
      { v:'luteale', l:'🌙 Lutéale' }
    ];
    const flux = [
      { v:'', l:'—' },
      { v:'leger', l:'Léger' },
      { v:'modere', l:'Modéré' },
      { v:'abondant', l:'Abondant' }
    ];
    
    const phaseOpts = phases.map(p => 
      '<option value="' + p.v + '"' + (p.v === _journalCycle.phase ? ' selected' : '') + '>' + p.l + '</option>'
    ).join('');
    
    const fluxOpts = flux.map(f => 
      '<option value="' + f.v + '"' + (f.v === _journalCycle.flux ? ' selected' : '') + '>' + f.l + '</option>'
    ).join('');

    cycleHTML = 
      '<div class="habitude-row">' +
        '<div class="habitude-label">🌸 Cycle menstruel</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
          '<select onchange="updateCyclePhase(this.value)" class="field" style="font-size:0.85rem;padding:8px 10px;">' + phaseOpts + '</select>' +
          (_journalCycle.phase === 'regles' 
            ? '<select onchange="updateCycleFlux(this.value)" class="field" style="font-size:0.85rem;padding:8px 10px;">' + fluxOpts + '</select>'
            : '<div style="display:flex;align-items:center;font-size:0.78rem;color:#8a9e96;font-style:italic;padding-left:10px;">Phase actuelle</div>'
          ) +
        '</div>' +
      '</div>';
  }

  return '<div class="journal-block">' +
    '<div class="jblock-title">🌿 Habitudes du jour</div>' +
    
    // HYDRATATION
    '<div class="habitude-row">' +
      '<div class="habitude-label">💧 Hydratation <span style="font-weight:400;color:#8a9e96;">(verres d\'eau)</span></div>' +
      '<div style="display:flex;gap:5px;justify-content:flex-start;flex-wrap:wrap;margin-bottom:4px;">' + verresHTML + '</div>' +
      '<div style="font-size:0.78rem;color:#3d6b58;font-weight:500;">' + eauLabel + '</div>' +
    '</div>' +
    
    // CAFÉINE
    '<div class="habitude-row">' +
      '<div class="habitude-label">☕ Caféine</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
        '<div>' +
          '<label style="font-size:0.7rem;color:#8a9e96;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;display:block;margin-bottom:5px;">Tasses</label>' +
          '<div style="display:flex;align-items:center;gap:8px;background:#f7f3ee;border-radius:14px;padding:6px;">' +
            '<button onclick="changeCafTasses(-1)" style="width:30px;height:30px;border-radius:50%;background:#fff;border:none;font-size:1rem;cursor:pointer;">−</button>' +
            '<span style="flex:1;text-align:center;font-weight:700;color:#2d4a3e;">' + cafTassesLabel + '</span>' +
            '<button onclick="changeCafTasses(1)" style="width:30px;height:30px;border-radius:50%;background:#fff;border:none;font-size:1rem;cursor:pointer;">+</button>' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<label style="font-size:0.7rem;color:#8a9e96;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;display:block;margin-bottom:5px;">Dernière prise</label>' +
          '<input type="time" value="' + cafHeure + '" onchange="updateCafHeure(this.value)" class="field" style="font-size:0.9rem;padding:8px 10px;" ' + (cafTasses === 0 ? 'disabled' : '') + ' />' +
        '</div>' +
      '</div>' +
      cafAlert +
    '</div>' +
    
    // ALCOOL
    '<div class="habitude-row">' +
      '<div class="habitude-label">🍷 Alcool <span style="font-weight:400;color:#8a9e96;">(verres dans la journée)</span></div>' +
      '<div style="display:flex;align-items:center;gap:8px;background:#f7f3ee;border-radius:14px;padding:6px;">' +
        '<button onclick="changeAlcool(-1)" style="width:30px;height:30px;border-radius:50%;background:#fff;border:none;font-size:1rem;cursor:pointer;">−</button>' +
        '<span style="flex:1;text-align:center;font-weight:700;color:#2d4a3e;">' + alcoolLabel + '</span>' +
        '<button onclick="changeAlcool(1)" style="width:30px;height:30px;border-radius:50%;background:#fff;border:none;font-size:1rem;cursor:pointer;">+</button>' +
      '</div>' +
      (_journalAlcool >= 2 ? '<div style="font-size:0.74rem;color:#a0735c;margin-top:6px;font-style:italic;">L\'alcool peut aggraver le SJSR la nuit même.</div>' : '') +
    '</div>' +
    
    // CYCLE (conditionnel)
    cycleHTML +
    
  '</div>';
}

// === BLOC SYMPTÔMES ÉTENDUS ===
function renderSymptomesBlock() {
  const symptomesList = [
    { id:'fatigue', label:'😴 Fatigue', color:'#a0735c' },
    { id:'anxiete', label:'😟 Anxiété', color:'#a0735c' },
    { id:'brouillard', label:'🌫️ Brouillard mental', color:'#a0735c' },
    { id:'maux-tete', label:'🤕 Maux de tête', color:'#a0735c' },
    { id:'crampes', label:'🦵 Crampes', color:'#c0614a' },
    { id:'fourmillements', label:'⚡ Fourmillements', color:'#c0614a' },
    { id:'jambes-lourdes', label:'🪨 Jambes lourdes', color:'#c0614a' },
    { id:'douleurs-articulaires', label:'🦴 Douleurs articulaires', color:'#a0735c' },
    { id:'ballonnements', label:'🎈 Ballonnements', color:'#d4a843' },
    { id:'rgo', label:'🔥 Reflux / RGO', color:'#d4a843' },
    { id:'transit', label:'🌀 Transit perturbé', color:'#d4a843' },
    { id:'irritabilite', label:'😤 Irritabilité', color:'#a0735c' },
    { id:'concentration', label:'🎯 Concentration ↓', color:'#a0735c' },
    { id:'surcharge-sensorielle', label:'🔊 Surcharge sensorielle', color:'#7a4e8a' },
    { id:'hyperfocus', label:'🔍 Hyperfocus', color:'#7a4e8a' },
    { id:'procrastination', label:'⏳ Procrastination', color:'#7a4e8a' },
    { id:'bouffees-chaleur', label:'🔥 Bouffées de chaleur', color:'#c0614a' },
    { id:'secheresse', label:'💧 Sécheresse oculaire/buccale', color:'#a0735c' }
  ];
  
  const chipsHTML = symptomesList.map(s => {
    const active = _journalSymptomes.includes(s.id);
    return '<button onclick="toggleSymptome(\'' + s.id + '\')" class="symptome-chip ' + (active ? 'active' : '') + '" ' +
           'style="' + (active ? 'background:' + s.color + '22;border-color:' + s.color + ';color:' + s.color + ';' : '') + '">' +
           s.label +
           '</button>';
  }).join('');
  
  const count = _journalSymptomes.length;
  const countLabel = count === 0 ? 'Aucun symptôme' 
                   : count === 1 ? '1 symptôme'
                   : count + ' symptômes';
  
  return '<div class="journal-block">' +
    '<div class="jblock-title">🩺 Symptômes ressentis aujourd\'hui ' +
      '<span style="font-size:0.75rem;color:#8a9e96;font-weight:400;">— ' + countLabel + '</span>' +
    '</div>' +
    '<div class="symptomes-grid">' + chipsHTML + '</div>' +
  '</div>';
}

// === HANDLERS — Habitudes du jour ===
function toggleEau(n) {
  // Cliquer sur le verre N : si on est déjà à N, on descend à N-1, sinon on monte à N
  _journalEau = (_journalEau === n) ? n - 1 : n;
  if (_journalEau < 0) _journalEau = 0;
  if (_journalEau > 8) _journalEau = 8;
  renderJournalToday();
}

function changeCafTasses(delta) {
  _journalCafeine.tasses = Math.max(0, Math.min(10, (_journalCafeine.tasses || 0) + delta));
  if (_journalCafeine.tasses === 0) _journalCafeine.heureDerniere = '';
  renderJournalToday();
}

function updateCafHeure(val) {
  _journalCafeine.heureDerniere = val;
  renderJournalToday();
}

function changeAlcool(delta) {
  _journalAlcool = Math.max(0, Math.min(10, _journalAlcool + delta));
  renderJournalToday();
}

function updateCyclePhase(val) {
  _journalCycle.phase = val;
  if (val !== 'regles') _journalCycle.flux = '';
  renderJournalToday();
}

function updateCycleFlux(val) {
  _journalCycle.flux = val;
  renderJournalToday();
}

function toggleSymptome(id) {
  const i = _journalSymptomes.indexOf(id);
  if (i === -1) {
    _journalSymptomes.push(id);
  } else {
    _journalSymptomes.splice(i, 1);
  }
  renderJournalToday();
}

// ============================================================
// BLOC REPAS DU JOUR — saisie libre + recettes Flōra
// ============================================================

const REPAS_SLOTS = [
  { key: 'petit-dejeuner', label: 'Petit-déj', emoji: '🌅' },
  { key: 'dejeuner',       label: 'Déjeuner', emoji: '☀️' },
  { key: 'diner',          label: 'Dîner',    emoji: '🌙' },
  { key: 'snack',          label: 'Snack',    emoji: '🍎' }
];

function renderRepasBlock() {
  const slotsHTML = REPAS_SLOTS.map(s => {
    const r = _journalRepas[s.key];
    let contenu = '';
    if (!r) {
      // Aucune saisie — 3 boutons modes
      contenu =
        '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">' +
          '<button onclick="setRepasMode(\'' + s.key + '\',\'recette\')" class="repas-mode-btn">🍽️ Recette Flōra</button>' +
          '<button onclick="setRepasMode(\'' + s.key + '\',\'libre\')" class="repas-mode-btn">✏️ Repas libre</button>' +
          '<button onclick="setRepasMode(\'' + s.key + '\',\'saute\')" class="repas-mode-btn">⏭️ Sauté</button>' +
        '</div>';
    } else if (r.type === 'recette') {
      const recette = RECETTES.find(rec => rec.id === r.recetteId);
      const fromAgendaBadge = r.fromAgenda ?
        '<span style="font-size:0.65rem;background:var(--green-deep);color:#fff;padding:2px 7px;border-radius:99px;margin-left:6px;vertical-align:middle;white-space:nowrap;">📅 prévu</span>' : '';
      contenu =
        '<div style="display:flex;align-items:center;gap:10px;margin-top:8px;padding:10px;background:var(--cream);border-radius:10px;">' +
          '<span style="font-size:1.4rem;">' + (recette ? recette.emoji : '🍽️') + '</span>' +
          '<div style="flex:1;font-size:0.88rem;color:var(--text);font-weight:500;">' + (recette ? escapeHtml(recette.nom) : 'Recette inconnue') + fromAgendaBadge + '</div>' +
          '<button onclick="clearRepas(\'' + s.key + '\')" aria-label="Retirer" style="background:none;border:none;color:var(--text-light);cursor:pointer;font-size:1.1rem;padding:4px 8px;">✕</button>' +
        '</div>';
    } else if (r.type === 'libre') {
      const ingsTxt = (r.ingredients && r.ingredients.length) ? r.ingredients.slice(0, 4).join(' · ') + (r.ingredients.length > 4 ? '…' : '') : '';
      contenu =
        '<div style="display:flex;align-items:flex-start;gap:10px;margin-top:8px;padding:10px;background:var(--cream);border-radius:10px;">' +
          '<span style="font-size:1.2rem;">✏️</span>' +
          '<div style="flex:1;">' +
            '<div style="font-size:0.88rem;color:var(--text);font-weight:600;">' + escapeHtml(r.titre || 'Repas libre') + '</div>' +
            (ingsTxt ? '<div style="font-size:0.75rem;color:var(--text-light);margin-top:2px;">' + escapeHtml(ingsTxt) + '</div>' : '') +
          '</div>' +
          '<button onclick="openRepasLibreEdit(\'' + s.key + '\')" aria-label="Modifier" style="background:none;border:none;color:var(--green-deep);cursor:pointer;font-size:0.9rem;padding:4px 6px;">✎</button>' +
          '<button onclick="clearRepas(\'' + s.key + '\')" aria-label="Retirer" style="background:none;border:none;color:var(--text-light);cursor:pointer;font-size:1rem;padding:4px 6px;">✕</button>' +
        '</div>';
    } else if (r.type === 'saute') {
      contenu =
        '<div style="display:flex;align-items:center;gap:10px;margin-top:8px;padding:10px;background:#f7f3ee;border-radius:10px;opacity:0.7;">' +
          '<span style="font-size:1.2rem;">⏭️</span>' +
          '<div style="flex:1;font-size:0.85rem;color:var(--text-light);font-style:italic;">Repas sauté</div>' +
          '<button onclick="clearRepas(\'' + s.key + '\')" aria-label="Retirer" style="background:none;border:none;color:var(--text-light);cursor:pointer;font-size:1rem;padding:4px 8px;">✕</button>' +
        '</div>';
    }
    return '<div style="padding:10px 0;border-bottom:1px solid #ede8e0;">' +
      '<div style="display:flex;align-items:center;gap:8px;">' +
        '<span style="font-size:1.05rem;">' + s.emoji + '</span>' +
        '<span style="font-weight:600;color:var(--text);font-size:0.92rem;">' + s.label + '</span>' +
      '</div>' +
      contenu +
    '</div>';
  }).join('');

  return '<div class="journal-block">' +
    '<div class="jblock-title">🍽️ Repas du jour</div>' +
    '<div style="font-size:0.78rem;color:var(--text-light);margin-bottom:4px;">Pour aider Flōra à corréler ce que vous mangez avec vos symptômes.</div>' +
    slotsHTML +
  '</div>';
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ============================================================
// ILLUSTRATIONS SVG POUR LES ÉTATS VIDES
// ============================================================
// Toutes les illustrations partagent la palette Flōra (vert profond + crème + doré).
// Elles sont volontairement minimalistes (un seul trait, lignes douces) pour
// rester légères et cohérentes avec l'identité botanique de l'app.

function svgEmptyFavoris() {
  return (
    '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="empty-illustration" aria-hidden="true">' +
      // Tige souple
      '<path d="M60 110 Q58 80 60 50" stroke="#3d6b58" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      // Feuille gauche
      '<path d="M60 75 Q40 70 38 58 Q48 60 60 70 Z" fill="#a8cfb1" stroke="#3d6b58" stroke-width="1.5" stroke-linejoin="round"/>' +
      // Feuille droite
      '<path d="M60 65 Q80 60 82 48 Q72 50 60 60 Z" fill="#a8cfb1" stroke="#3d6b58" stroke-width="1.5" stroke-linejoin="round"/>' +
      // Cœur stylisé en haut
      '<path d="M60 35 C53 28, 42 28, 42 38 C42 48, 60 58, 60 58 C60 58, 78 48, 78 38 C78 28, 67 28, 60 35 Z" ' +
        'fill="#fde8ec" stroke="#c0614a" stroke-width="1.8" stroke-linejoin="round" opacity="0.85"/>' +
      // Petite étincelle
      '<circle cx="35" cy="25" r="1.5" fill="#f0b429"/>' +
      '<circle cx="88" cy="20" r="1.2" fill="#f0b429"/>' +
      '<circle cx="92" cy="55" r="1" fill="#f0b429"/>' +
    '</svg>'
  );
}

function svgEmptyMeals() {
  return (
    '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="empty-illustration" aria-hidden="true">' +
      // Assiette (cercle)
      '<circle cx="60" cy="62" r="38" fill="#f7f3ee" stroke="#3d6b58" stroke-width="2"/>' +
      // Cercle intérieur
      '<circle cx="60" cy="62" r="30" fill="none" stroke="#3d6b58" stroke-width="1" opacity="0.5" stroke-dasharray="2 3"/>' +
      // Couverts croisés
      // Fourchette gauche
      '<line x1="38" y1="20" x2="38" y2="48" stroke="#3d6b58" stroke-width="2" stroke-linecap="round"/>' +
      '<line x1="35" y1="20" x2="35" y2="32" stroke="#3d6b58" stroke-width="1.5" stroke-linecap="round"/>' +
      '<line x1="41" y1="20" x2="41" y2="32" stroke="#3d6b58" stroke-width="1.5" stroke-linecap="round"/>' +
      // Cuillère droite
      '<line x1="82" y1="32" x2="82" y2="48" stroke="#3d6b58" stroke-width="2" stroke-linecap="round"/>' +
      '<ellipse cx="82" cy="26" rx="6" ry="9" fill="none" stroke="#3d6b58" stroke-width="2"/>' +
      // Petites étoiles décoratives
      '<text x="20" y="105" font-size="10" fill="#f0b429">✦</text>' +
      '<text x="95" y="105" font-size="8" fill="#f0b429">✦</text>' +
    '</svg>'
  );
}

function svgEmptyJournal() {
  return (
    '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="empty-illustration" aria-hidden="true">' +
      // Carnet ouvert
      '<rect x="20" y="35" width="80" height="55" rx="4" fill="#f7f3ee" stroke="#3d6b58" stroke-width="2"/>' +
      // Pliure centrale
      '<line x1="60" y1="35" x2="60" y2="90" stroke="#3d6b58" stroke-width="1.5"/>' +
      // Lignes texte (page gauche)
      '<line x1="28" y1="48" x2="54" y2="48" stroke="#a8cfb1" stroke-width="1.2" stroke-linecap="round"/>' +
      '<line x1="28" y1="58" x2="48" y2="58" stroke="#a8cfb1" stroke-width="1.2" stroke-linecap="round"/>' +
      '<line x1="28" y1="68" x2="52" y2="68" stroke="#a8cfb1" stroke-width="1.2" stroke-linecap="round"/>' +
      // Lignes texte (page droite)
      '<line x1="66" y1="48" x2="92" y2="48" stroke="#a8cfb1" stroke-width="1.2" stroke-linecap="round"/>' +
      '<line x1="66" y1="58" x2="86" y2="58" stroke="#a8cfb1" stroke-width="1.2" stroke-linecap="round"/>' +
      '<line x1="66" y1="68" x2="90" y2="68" stroke="#a8cfb1" stroke-width="1.2" stroke-linecap="round"/>' +
      // Petite plume / brin
      '<path d="M85 18 Q88 24 88 32 Q92 30 94 22 Q92 16 85 18 Z" fill="#a8cfb1" stroke="#3d6b58" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<line x1="88" y1="30" x2="86" y2="38" stroke="#3d6b58" stroke-width="1.5" stroke-linecap="round"/>' +
    '</svg>'
  );
}

function setRepasMode(slotKey, mode) {
  if (mode === 'saute') {
    _journalRepas[slotKey] = { type: 'saute' };
    saveJournal(); // sauve discrètement
    renderJournalToday();
  } else if (mode === 'recette') {
    openRepasRecetteSelector(slotKey);
  } else if (mode === 'libre') {
    openRepasLibreModal(slotKey, null);
  }
}

function clearRepas(slotKey) {
  var current = _journalRepas[slotKey];
  if (current) {
    var nom = '';
    if (current.type === 'recette' && current.recetteId) {
      var r = RECETTES.find(function(x) { return x.id === current.recetteId; });
      nom = r ? ' « ' + r.nom + ' »' : '';
    } else if (current.type === 'libre' && current.titre) {
      nom = ' « ' + current.titre + '»';
    }
    var slotLabels = {
      'petit-dejeuner': 'petit-déjeuner',
      'dejeuner': 'déjeuner',
      'diner': 'dîner',
      'snack': 'collation'
    };
    var slotLabel = slotLabels[slotKey] || slotKey;
    if (!confirm('Retirer le ' + slotLabel + nom + ' ?')) return;
  }
  _journalRepas[slotKey] = null;
  saveJournal();
  renderJournalToday();
}

// === MODALE : sélecteur de recette ===
function openRepasRecetteSelector(slotKey) {
  // Filtrer recettes par catégorie correspondant au slot
  const catMap = {
    'petit-dejeuner': ['petit-dejeuner', 'brunch'],
    'dejeuner':       ['dejeuner', 'brunch'],
    'diner':          ['diner'],
    'snack':          ['snack']
  };
  const cats = catMap[slotKey] || [];
  const recettesFiltrees = RECETTES.filter(r => cats.includes(r.cat));

  const modal = document.createElement('div');
  modal.id = 'repas-recette-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:10000;display:flex;align-items:flex-end;justify-content:center;';
  modal.innerHTML =
    '<div style="background:var(--white);border-radius:20px 20px 0 0;width:100%;max-width:500px;max-height:85vh;display:flex;flex-direction:column;">' +
      '<div style="padding:16px 18px;border-bottom:1px solid #ede8e0;display:flex;align-items:center;justify-content:space-between;">' +
        '<div style="font-family:Playfair Display,serif;font-size:1.15rem;color:var(--green-deep);">Choisir une recette</div>' +
        '<button onclick="closeRepasRecetteSelector()" aria-label="Fermer" style="background:none;border:none;font-size:1.4rem;color:var(--text-light);cursor:pointer;">✕</button>' +
      '</div>' +
      '<input type="text" id="repas-recette-search" placeholder="Rechercher…" oninput="filterRepasRecettes()" ' +
        'style="margin:12px 18px 0;padding:10px 14px;border:1.5px solid #ede8e0;border-radius:10px;font-family:var(--font-body);font-size:0.9rem;">' +
      '<div id="repas-recette-list" style="overflow-y:auto;padding:10px 18px 18px;flex:1;">' +
        recettesFiltrees.map(r =>
          '<div data-nom="' + escapeHtml(r.nom.toLowerCase()) + '" onclick="selectRepasRecette(\'' + slotKey + '\',' + r.id + ')" ' +
            'style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:10px;cursor:pointer;margin-bottom:6px;background:var(--cream);">' +
            '<span style="font-size:1.5rem;">' + r.emoji + '</span>' +
            '<div style="flex:1;">' +
              '<div style="font-weight:500;font-size:0.92rem;">' + escapeHtml(r.nom) + '</div>' +
              '<div style="font-size:0.72rem;color:var(--text-light);">' + r.temps + ' · ' + r.calories + ' kcal</div>' +
            '</div>' +
          '</div>'
        ).join('') +
      '</div>' +
    '</div>';
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function closeRepasRecetteSelector() {
  const m = document.getElementById('repas-recette-modal');
  if (m) m.remove();
  document.body.style.overflow = '';
}

function filterRepasRecettes() {
  const q = document.getElementById('repas-recette-search').value.trim().toLowerCase();
  const items = document.querySelectorAll('#repas-recette-list > div');
  items.forEach(el => {
    const nom = el.getAttribute('data-nom') || '';
    el.style.display = (!q || nom.includes(q)) ? '' : 'none';
  });
}

function selectRepasRecette(slotKey, recetteId) {
  // Choix manuel : pas de flag fromAgenda (c'est le choix actif de l'utilisatrice)
  _journalRepas[slotKey] = { type: 'recette', recetteId: recetteId };
  saveJournal();
  closeRepasRecetteSelector();
  renderJournalToday();
}

// === MODALE : saisie repas libre avec autocomplétion placard ===
let _journalRepasCtx = { slotKey: null, titre: '', ingredients: [] };

function openRepasLibreModal(slotKey, existing) {
  _journalRepasCtx = {
    slotKey: slotKey,
    titre: (existing && existing.titre) || '',
    ingredients: (existing && existing.ingredients) ? existing.ingredients.slice() : []
  };

  const modal = document.createElement('div');
  modal.id = 'repas-libre-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:10000;display:flex;align-items:flex-end;justify-content:center;';
  modal.innerHTML =
    '<div style="background:var(--white);border-radius:20px 20px 0 0;width:100%;max-width:500px;max-height:90vh;display:flex;flex-direction:column;">' +
      '<div style="padding:16px 18px;border-bottom:1px solid #ede8e0;display:flex;align-items:center;justify-content:space-between;">' +
        '<div style="font-family:Playfair Display,serif;font-size:1.15rem;color:var(--green-deep);">Repas libre</div>' +
        '<button onclick="closeRepasLibreModal()" aria-label="Fermer" style="background:none;border:none;font-size:1.4rem;color:var(--text-light);cursor:pointer;">✕</button>' +
      '</div>' +
      '<div style="overflow-y:auto;padding:14px 18px;flex:1;">' +
        '<label style="font-size:0.78rem;color:var(--text-light);display:block;margin-bottom:4px;">Titre du repas</label>' +
        '<input type="text" id="rl-titre" placeholder="Ex: Salade au resto · Restes · Pizza maison…" value="' + escapeHtml(_journalRepasCtx.titre) + '" ' +
          'style="width:100%;padding:10px 12px;border:1.5px solid #ede8e0;border-radius:10px;font-family:var(--font-body);font-size:0.92rem;margin-bottom:14px;" ' +
          'oninput="_journalRepasCtx.titre=this.value">' +
        '<label style="font-size:0.78rem;color:var(--text-light);display:block;margin-bottom:4px;">Ingrédients (optionnel — aide à la corrélation Insights)</label>' +
        '<input type="text" id="rl-ing-input" placeholder="Tapez puis ↵ ou choisissez…" oninput="filterIngredientSuggestions(this.value)" onkeydown="if(event.key===\'Enter\'){event.preventDefault();addIngredientLibre(this.value);this.value=\'\';filterIngredientSuggestions(\'\');}" ' +
          'style="width:100%;padding:10px 12px;border:1.5px solid #ede8e0;border-radius:10px;font-family:var(--font-body);font-size:0.92rem;">' +
        '<div id="rl-suggestions" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;"></div>' +
        '<div id="rl-selected-ings" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:14px;min-height:30px;"></div>' +
      '</div>' +
      '<div style="padding:14px 18px;border-top:1px solid #ede8e0;display:flex;gap:8px;">' +
        '<button onclick="closeRepasLibreModal()" style="flex:1;padding:11px;border:1.5px solid #ede8e0;border-radius:10px;background:var(--white);font-family:var(--font-body);cursor:pointer;">Annuler</button>' +
        '<button onclick="saveRepasLibreFromModal()" style="flex:1;padding:11px;border:none;border-radius:10px;background:var(--green-deep);color:var(--white);font-family:var(--font-body);font-weight:600;cursor:pointer;">Enregistrer</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  refreshSelectedIngredientsUI();
  filterIngredientSuggestions('');
  setTimeout(() => document.getElementById('rl-titre').focus(), 100);
}

function openRepasLibreEdit(slotKey) {
  const existing = _journalRepas[slotKey];
  openRepasLibreModal(slotKey, existing);
}

function closeRepasLibreModal() {
  const m = document.getElementById('repas-libre-modal');
  if (m) m.remove();
  document.body.style.overflow = '';
  _journalRepasCtx = { slotKey: null, titre: '', ingredients: [] };
}

// Source d'ingrédients pour l'autocomplétion : placard (si rempli) + recettes Flōra
function getAllKnownIngredients() {
  const set = new Set();
  // 1. Placard de l'utilisatrice
  try {
    Object.keys(placardItems || {}).forEach(k => {
      if (placardItems[k]) set.add(k);
    });
  } catch(e) {}
  // 2. Ingrédients des recettes Flōra (mots simples extraits)
  RECETTES.forEach(r => {
    (r.ingredients || []).forEach(line => {
      // Garder juste le nom (sans quantité) — heuristique simple
      const cleaned = line.replace(/^[—\-•]\s*/, '').replace(/^[\d.,/½¼¾]+\s*[a-zA-Z%]*\s+(de\s+|d\')?/i, '').replace(/[,;].*$/, '').trim();
      if (cleaned && cleaned.length > 1 && cleaned.length < 40 && !cleaned.match(/^[—A-Z]{2,}$/)) {
        set.add(cleaned.toLowerCase());
      }
    });
  });
  return Array.from(set).sort();
}

function filterIngredientSuggestions(q) {
  const sugBox = document.getElementById('rl-suggestions');
  if (!sugBox) return;
  const all = getAllKnownIngredients();
  const query = (q || '').trim().toLowerCase();
  let filtered;
  if (query.length === 0) {
    // Vue par défaut : 12 suggestions populaires
    filtered = all.slice(0, 12);
  } else {
    filtered = all.filter(ing => ing.includes(query)).slice(0, 15);
  }
  // Exclure ceux déjà sélectionnés
  filtered = filtered.filter(ing => !_journalRepasCtx.ingredients.includes(ing));
  sugBox.innerHTML = filtered.map(ing =>
    '<button onclick="addIngredientLibre(\'' + escapeHtml(ing).replace(/'/g, "\\'") + '\')" ' +
      'style="padding:6px 12px;border:1.5px solid #ede8e0;border-radius:99px;background:var(--white);font-family:var(--font-body);font-size:0.78rem;cursor:pointer;color:var(--text);">+ ' +
      escapeHtml(ing) + '</button>'
  ).join('');
}

function addIngredientLibre(ing) {
  const trimmed = (ing || '').trim().toLowerCase();
  if (!trimmed) return;
  if (_journalRepasCtx.ingredients.includes(trimmed)) return;
  _journalRepasCtx.ingredients.push(trimmed);
  refreshSelectedIngredientsUI();
  // Re-filtrer les suggestions pour exclure ce nouvel ingrédient
  const inputEl = document.getElementById('rl-ing-input');
  filterIngredientSuggestions(inputEl ? inputEl.value : '');
}

function removeIngredientLibre(ing) {
  _journalRepasCtx.ingredients = _journalRepasCtx.ingredients.filter(x => x !== ing);
  refreshSelectedIngredientsUI();
  const inputEl = document.getElementById('rl-ing-input');
  filterIngredientSuggestions(inputEl ? inputEl.value : '');
}

function refreshSelectedIngredientsUI() {
  const box = document.getElementById('rl-selected-ings');
  if (!box) return;
  if (_journalRepasCtx.ingredients.length === 0) {
    box.innerHTML = '<div style="font-size:0.75rem;color:var(--text-light);font-style:italic;">Aucun ingrédient ajouté</div>';
    return;
  }
  box.innerHTML = _journalRepasCtx.ingredients.map(ing =>
    '<span style="display:inline-flex;align-items:center;gap:6px;padding:6px 10px;background:var(--green-deep);color:var(--white);border-radius:99px;font-size:0.78rem;">' +
      escapeHtml(ing) +
      '<button onclick="removeIngredientLibre(\'' + escapeHtml(ing).replace(/'/g, "\\'") + '\')" aria-label="Retirer" style="background:none;border:none;color:var(--white);cursor:pointer;font-size:0.95rem;padding:0;line-height:1;">×</button>' +
    '</span>'
  ).join('');
}

function saveRepasLibreFromModal() {
  const titre = (_journalRepasCtx.titre || '').trim();
  if (!titre && _journalRepasCtx.ingredients.length === 0) {
    // Rien saisi : annuler purement
    closeRepasLibreModal();
    return;
  }
  _journalRepas[_journalRepasCtx.slotKey] = {
    type: 'libre',
    titre: titre || 'Repas libre',
    ingredients: _journalRepasCtx.ingredients.slice()
  };
  saveJournal();
  closeRepasLibreModal();
  renderJournalToday();
}

// === Détermine si on doit afficher le bloc cycle menstruel ===
function shouldShowCycle() {
  // Lecture directe depuis l'objet profile (clé localStorage 'flora_profile')
  if (profile.cycleEnabled === true) return true;
  if (profile.cycleEnabled === false) return false;
  // Par défaut : afficher
  return true;
}

// ============================================================
// PAGE INSIGHTS — Corrélations alimentation ↔ symptômes
// ============================================================

let _insightsPeriod = 30; // jours

function renderInsights() {
  const container = document.getElementById('insights-container');
  if (!container) return;
  
  // Récolter les entrées sur la période — comparaison de strings YYYY-MM-DD (évite les bugs timezone)
  const cutoffDate = new Date();
  cutoffDate.setHours(0, 0, 0, 0);
  cutoffDate.setDate(cutoffDate.getDate() - _insightsPeriod);
  const cutoffKey = dateKey(cutoffDate);
  const entries = Object.entries(journal)
    .filter(([dk, e]) => e && dk >= cutoffKey)
    .sort((a, b) => a[0].localeCompare(b[0]));
  
  // Sélecteur de période
  const periodSelector = '<div class="insights-period-selector">' +
    [7, 14, 30, 90].map(d => 
      '<button class="insights-period-btn ' + (_insightsPeriod === d ? 'active' : '') + '" onclick="setInsightsPeriod(' + d + ')">' + 
      d + ' jours</button>'
    ).join('') +
  '</div>';
  
  // Si pas assez de données
  if (entries.length < 3) {
    container.innerHTML = periodSelector + 
      '<div class="insights-empty">' +
        '<div class="insights-empty-icon">📊</div>' +
        '<div class="insights-empty-title">Pas encore assez de données</div>' +
        '<div class="insights-empty-sub">' +
          'Continuez à remplir votre journal pendant ' + (3 - entries.length) + ' jour' + (3 - entries.length > 1 ? 's' : '') + ' supplémentaire' + (3 - entries.length > 1 ? 's' : '') + ' ' +
          'pour commencer à voir des corrélations entre vos habitudes et vos symptômes.' +
        '</div>' +
        '<button class="btn-primary" style="margin-top:16px;" onclick="showPage(\'journal\')">Ouvrir mon journal →</button>' +
      '</div>';
    return;
  }
  
  // Générer les insights
  const insights = computeInsights(entries);
  
  let html = periodSelector;
  
  // INTRO résumé
  html += '<div class="insights-intro">' +
    '<div class="insights-intro-icon">🌿</div>' +
    '<div>' +
      '<div class="insights-intro-title">Vue sur ' + entries.length + ' jour' + (entries.length > 1 ? 's' : '') + '</div>' +
      '<div class="insights-intro-sub">Analyse de vos habitudes et de vos ressentis</div>' +
    '</div>' +
  '</div>';
  
  // SECTION 1 : Patterns sommeil
  html += renderInsightSection('🌙 Sommeil', insights.sleep);
  
  // SECTION 2 : Hydratation & boissons
  html += renderInsightSection('💧 Hydratation & boissons', insights.drinks);
  
  // SECTION 3 : Symptômes les plus fréquents
  html += renderInsightSection('🩺 Symptômes', insights.symptoms);
  
  // SECTION 4 : Corrélations alimentation
  html += renderInsightSection('🍽️ Alimentation', insights.food);
  
  // SECTION 5 : Cycle (si données)
  if (insights.cycle && insights.cycle.length > 0) {
    html += renderInsightSection('🌸 Cycle menstruel', insights.cycle);
  }
  
  // SECTION 6 : Recommandations
  html += renderInsightRecommendations(insights);
  
  // Disclaimer
  html += '<div class="insights-disclaimer">' +
    '<strong>Important.</strong> Ces analyses sont des observations statistiques sur vos données personnelles, ' +
    'pas un diagnostic médical. Une corrélation n\'implique pas une causalité. Discutez de vos observations ' +
    'avec votre médecin pour les interpréter correctement.' +
  '</div>';
  
  container.innerHTML = html;
}

function setInsightsPeriod(days) {
  _insightsPeriod = days;
  renderInsights();
}

// === Calcul des insights ===
function computeInsights(entries) {
  const result = {
    sleep: [],
    drinks: [],
    symptoms: [],
    food: [],
    cycle: []
  };
  
  // ====== SOMMEIL ======
  const sleepDurs = entries.map(([_, e]) => (e.duree || 0)).filter(d => d > 0);
  if (sleepDurs.length > 0) {
    const avg = sleepDurs.reduce((a,b) => a+b, 0) / sleepDurs.length;
    const goodNights = sleepDurs.filter(d => d >= 7).length;
    const pct = Math.round((goodNights / sleepDurs.length) * 100);
    
    result.sleep.push({
      level: avg >= 7 ? 'good' : avg >= 6 ? 'caution' : 'warning',
      title: 'Durée moyenne : ' + avg.toFixed(1) + 'h par nuit',
      detail: pct + '% de vos nuits sont supérieures ou égales à 7h.' +
              (avg < 7 ? ' L\'objectif recommandé pour la récupération est de 7-9h.' : '')
    });
    
    // Qualité moyenne
    const qualites = entries.map(([_, e]) => e.qualite || 0).filter(q => q > 0);
    if (qualites.length > 0) {
      const avgQ = qualites.reduce((a,b) => a+b, 0) / qualites.length;
      result.sleep.push({
        level: avgQ >= 4 ? 'good' : avgQ >= 3 ? 'caution' : 'warning',
        title: 'Qualité moyenne : ' + avgQ.toFixed(1) + ' / 5 ⭐',
        detail: avgQ >= 4 
          ? 'Excellente perception globale de votre sommeil.' 
          : avgQ >= 3 
            ? 'Sommeil correct, peut-être perfectible.'
            : 'Votre perception du sommeil est faible — un signal à surveiller.'
      });
    }
    
    // SJSR moyen
    const sjsrs = entries.map(([_, e]) => e.sjsr || 0).filter(s => s > 0);
    if (sjsrs.length >= 3) {
      const avgS = sjsrs.reduce((a,b) => a+b, 0) / sjsrs.length;
      result.sleep.push({
        level: avgS <= 2 ? 'good' : avgS <= 3 ? 'caution' : 'warning',
        title: 'SJSR moyen : ' + avgS.toFixed(1) + ' / 5',
        detail: avgS <= 2 
          ? 'Symptômes SJSR globalement bien contrôlés.' 
          : avgS <= 3 
            ? 'Symptômes SJSR modérés, identifiez les déclencheurs.'
            : 'Symptômes SJSR significatifs — à discuter avec votre médecin.'
      });
    }
  }
  
  // ====== HYDRATATION ======
  const eauVals = entries.map(([_, e]) => e.eau).filter(e => typeof e === 'number');
  if (eauVals.length > 0) {
    const avgEau = eauVals.reduce((a,b) => a+b, 0) / eauVals.length;
    result.drinks.push({
      level: avgEau >= 6 ? 'good' : avgEau >= 4 ? 'caution' : 'warning',
      title: 'Hydratation moyenne : ' + avgEau.toFixed(1) + ' verres/jour',
      detail: avgEau >= 6 
        ? 'Bonne hydratation. Continuez !' 
        : avgEau >= 4 
          ? 'Hydratation correcte, vous pourriez augmenter à 6-8 verres pour réduire les crampes nocturnes.'
          : 'Hydratation faible. La déshydratation aggrave les crampes nocturnes et le SJSR. Visez 8 verres/jour.'
    });
  }
  
  // ====== CAFÉINE ======
  const cafEntries = entries.filter(([_, e]) => e.cafeine && e.cafeine.tasses > 0);
  if (cafEntries.length >= 3) {
    const avgTasses = cafEntries.reduce((a, [_, e]) => a + e.cafeine.tasses, 0) / cafEntries.length;
    
    // Nombre de jours avec caféine après 14h
    const cafeineLate = cafEntries.filter(([_, e]) => {
      if (!e.cafeine.heureDerniere) return false;
      const [h] = e.cafeine.heureDerniere.split(':').map(Number);
      return h >= 14;
    });
    
    if (cafeineLate.length > 0) {
      const pctLate = Math.round((cafeineLate.length / cafEntries.length) * 100);
      
      // Comparer le sommeil avec / sans caféine tardive
      const sleepWithLate = cafeineLate.map(([_, e]) => e.duree || 0).filter(d => d > 0);
      const sleepWithoutLate = entries
        .filter(([_, e]) => {
          if (!e.cafeine || e.cafeine.tasses === 0) return true;
          if (!e.cafeine.heureDerniere) return true;
          const [h] = e.cafeine.heureDerniere.split(':').map(Number);
          return h < 14;
        })
        .map(([_, e]) => e.duree || 0)
        .filter(d => d > 0);
      
      let cafComparison = '';
      if (sleepWithLate.length >= 2 && sleepWithoutLate.length >= 2) {
        const avgWith = sleepWithLate.reduce((a,b) => a+b, 0) / sleepWithLate.length;
        const avgWithout = sleepWithoutLate.reduce((a,b) => a+b, 0) / sleepWithoutLate.length;
        const diff = avgWithout - avgWith;
        if (Math.abs(diff) >= 0.3) {
          cafComparison = ' Vos nuits sont en moyenne <strong>' + Math.abs(diff).toFixed(1) + 'h plus ' + 
            (diff > 0 ? 'longues' : 'courtes') + '</strong> les jours sans caféine après 14h.';
        }
      }
      
      result.drinks.push({
        level: pctLate > 50 ? 'warning' : pctLate > 25 ? 'caution' : 'good',
        title: '☕ Caféine après 14h : ' + pctLate + '% des jours',
        detail: 'La caféine a une demi-vie de 5-6h. Une prise après 14h peut perturber l\'endormissement et aggraver le SJSR.' + cafComparison
      });
    } else {
      result.drinks.push({
        level: 'good',
        title: '☕ Caféine : ' + avgTasses.toFixed(1) + ' tasse' + (avgTasses > 1 ? 's' : '') + ' en moyenne',
        detail: 'Bonne hygiène — toujours avant 14h. C\'est idéal pour préserver le sommeil.'
      });
    }
  }
  
  // ====== ALCOOL ======
  const alcoolEntries = entries.filter(([_, e]) => typeof e.alcool === 'number' && e.alcool > 0);
  if (alcoolEntries.length >= 2) {
    const totalAlcool = alcoolEntries.reduce((a, [_, e]) => a + e.alcool, 0);
    const avgAlcool = totalAlcool / entries.length;
    const pctJoursAlcool = Math.round((alcoolEntries.length / entries.length) * 100);
    
    // Comparer le SJSR avec / sans alcool
    const sjsrWith = alcoolEntries.map(([_, e]) => e.sjsr || 0).filter(s => s > 0);
    const sjsrWithout = entries
      .filter(([_, e]) => !e.alcool || e.alcool === 0)
      .map(([_, e]) => e.sjsr || 0)
      .filter(s => s > 0);
    
    let alcoolComparison = '';
    if (sjsrWith.length >= 2 && sjsrWithout.length >= 2) {
      const avgWith = sjsrWith.reduce((a,b) => a+b, 0) / sjsrWith.length;
      const avgWithout = sjsrWithout.reduce((a,b) => a+b, 0) / sjsrWithout.length;
      const diff = avgWith - avgWithout;
      if (Math.abs(diff) >= 0.3) {
        alcoolComparison = ' Votre SJSR moyen est <strong>' + Math.abs(diff).toFixed(1) + ' point' + 
          (Math.abs(diff) > 1 ? 's' : '') + ' plus ' + (diff > 0 ? 'élevé' : 'bas') + 
          '</strong> les jours avec alcool.';
      }
    }
    
    result.drinks.push({
      level: pctJoursAlcool > 50 ? 'warning' : pctJoursAlcool > 25 ? 'caution' : 'good',
      title: '🍷 Alcool : ' + pctJoursAlcool + '% des jours',
      detail: 'L\'alcool fragmente le sommeil et peut aggraver le SJSR la nuit même.' + alcoolComparison
    });
  }
  
  // ====== SYMPTÔMES ======
  const allSymptoms = {};
  entries.forEach(([_, e]) => {
    if (e.symptomes && Array.isArray(e.symptomes)) {
      e.symptomes.forEach(s => {
        allSymptoms[s] = (allSymptoms[s] || 0) + 1;
      });
    }
  });
  
  const sortedSymptoms = Object.entries(allSymptoms)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  
  if (sortedSymptoms.length > 0) {
    const labels = {
      'fatigue': 'Fatigue',
      'anxiete': 'Anxiété',
      'brouillard': 'Brouillard mental',
      'maux-tete': 'Maux de tête',
      'crampes': 'Crampes',
      'fourmillements': 'Fourmillements',
      'jambes-lourdes': 'Jambes lourdes',
      'douleurs-articulaires': 'Douleurs articulaires',
      'ballonnements': 'Ballonnements',
      'rgo': 'Reflux / RGO',
      'transit': 'Transit perturbé',
      'irritabilite': 'Irritabilité',
      'concentration': 'Concentration ↓',
      'surcharge-sensorielle': 'Surcharge sensorielle',
      'hyperfocus': 'Hyperfocus',
      'procrastination': 'Procrastination',
      'bouffees-chaleur': 'Bouffées de chaleur',
      'secheresse': 'Sécheresse'
    };
    
    sortedSymptoms.forEach(([symp, count]) => {
      const pct = Math.round((count / entries.length) * 100);
      result.symptoms.push({
        level: pct > 50 ? 'warning' : pct > 25 ? 'caution' : 'good',
        title: (labels[symp] || symp) + ' : ' + count + ' jour' + (count > 1 ? 's' : '') + ' (' + pct + '%)',
        detail: pct > 50 
          ? 'Symptôme très fréquent — à discuter avec votre médecin.'
          : pct > 25 
            ? 'Présent régulièrement — identifiez les déclencheurs possibles.'
            : 'Présent occasionnellement.'
      });
    });
  }
  
  // ====== ALIMENTATION (corrélation agenda ↔ symptômes/SJSR) ======
  // Sources : (1) recettes de l'agenda, (2) repas libres de l'agenda, (3) repas saisis dans le journal du jour
  const foodCorrelations = {};
  
  // Helper : tagger un texte d'ingrédients selon nutriments
  function tagFromIngredients(ingredientsText) {
    const tags = [];
    const lower = ingredientsText.toLowerCase();
    if (/(épinard|lentille|pois chiche|haricot|abats|foie|boudin|sardine|persil|spiruline|graines? de courge|sésame|tofu|cacao|chocolat noir)/i.test(lower)) tags.push('fer');
    if (/(saumon|sardine|maquereau|hareng|graines? de lin|graines? de chia|noix\b|huile de colza|huile de lin)/i.test(lower)) tags.push('omega3');
    if (/(amande|cacao|chocolat|graines? de courge|épinard|sarrasin|banane|avocat)/i.test(lower)) tags.push('magnesium');
    return tags;
  }
  
  entries.forEach(([dk, e]) => {
    const sjsrScore = e.sjsr || 0;
    
    // Source 1 & 2 : Agenda
    const dayAgenda = agenda[dk];
    if (dayAgenda) {
      Object.values(dayAgenda).forEach(recId => {
        if (!recId) return;
        
        // Recette bibliothèque
        if (typeof recId === 'number' || (typeof recId === 'string' && !recId.startsWith('custom_'))) {
          const recette = RECETTES.find(r => r.id === recId || r.id === parseInt(recId));
          if (!recette) return;
          
          const tags = [];
          if (recette.nutri && recette.nutri.fer) tags.push('fer');
          if (recette.nutri && recette.nutri.omega3) tags.push('omega3');
          if (recette.nutri && recette.nutri.magnesium) tags.push('magnesium');
          // Fallback : analyser les ingrédients de la recette si pas de nutri
          if (tags.length === 0 && recette.ingredients) {
            tagFromIngredients(recette.ingredients.join(' ')).forEach(t => tags.push(t));
          }
          
          tags.forEach(tag => {
            if (!foodCorrelations[tag]) foodCorrelations[tag] = { sjsrSum: 0, count: 0 };
            foodCorrelations[tag].sjsrSum += sjsrScore;
            foodCorrelations[tag].count += 1;
          });
        }
        
        // Repas libre de l'agenda
        if (typeof recId === 'string' && recId.startsWith('custom_')) {
          const customMeal = getCustomMeal(recId);
          if (!customMeal || !customMeal.ingredients) return;
          tagFromIngredients(customMeal.ingredients.join(' ')).forEach(tag => {
            if (!foodCorrelations[tag]) foodCorrelations[tag] = { sjsrSum: 0, count: 0 };
            foodCorrelations[tag].sjsrSum += sjsrScore;
            foodCorrelations[tag].count += 1;
          });
        }
      });
    }
    
    // Source 3 : Repas saisis directement dans le journal du jour
    if (e.repas && typeof e.repas === 'object') {
      Object.values(e.repas).forEach(repas => {
        if (!repas || repas.type === 'saute') return;
        
        if (repas.type === 'recette' && repas.recetteId) {
          const recette = RECETTES.find(r => r.id === repas.recetteId);
          if (!recette) return;
          const tags = [];
          if (recette.nutri && recette.nutri.fer) tags.push('fer');
          if (recette.nutri && recette.nutri.omega3) tags.push('omega3');
          if (recette.nutri && recette.nutri.magnesium) tags.push('magnesium');
          if (tags.length === 0 && recette.ingredients) {
            tagFromIngredients(recette.ingredients.join(' ')).forEach(t => tags.push(t));
          }
          tags.forEach(tag => {
            if (!foodCorrelations[tag]) foodCorrelations[tag] = { sjsrSum: 0, count: 0 };
            foodCorrelations[tag].sjsrSum += sjsrScore;
            foodCorrelations[tag].count += 1;
          });
        }
        
        if (repas.type === 'libre' && repas.ingredients && repas.ingredients.length) {
          tagFromIngredients(repas.ingredients.join(' ')).forEach(tag => {
            if (!foodCorrelations[tag]) foodCorrelations[tag] = { sjsrSum: 0, count: 0 };
            foodCorrelations[tag].sjsrSum += sjsrScore;
            foodCorrelations[tag].count += 1;
          });
        }
      });
    }
  });
  
  const tagLabels = {
    'fer': '🩸 Repas riches en fer',
    'omega3': '🐟 Repas riches en oméga-3',
    'magnesium': '⚡ Repas riches en magnésium'
  };
  
  Object.entries(foodCorrelations).forEach(([tag, data]) => {
    if (data.count < 3) return; // pas assez de données
    
    const avgSjsr = data.sjsrSum / data.count;
    const overallSjsr = entries.reduce((a, [_, e]) => a + (e.sjsr || 0), 0) / entries.length;
    const diff = overallSjsr - avgSjsr;
    
    if (Math.abs(diff) >= 0.5) {
      result.food.push({
        level: diff > 0 ? 'good' : 'caution',
        title: tagLabels[tag] + ' : ' + data.count + ' fois',
        detail: 'SJSR moyen ces jours-là : <strong>' + avgSjsr.toFixed(1) + '/5</strong> ' +
                '(vs <strong>' + overallSjsr.toFixed(1) + '/5</strong> en moyenne globale). ' +
                (diff > 0 
                  ? '✅ Tendance positive — continuez sur cette voie.' 
                  : '⚠️ Tendance moins favorable — peut-être un autre facteur en cause.')
      });
    }
  });
  
  if (result.food.length === 0) {
    result.food.push({
      level: 'info',
      title: 'Pas encore assez de données',
      detail: 'Pour des corrélations alimentation ↔ symptômes, remplissez votre agenda alimentaire chaque jour. ' +
              'Au bout de 2-3 semaines, des patterns apparaîtront.'
    });
  }
  
  // ====== CYCLE MENSTRUEL ======
  const cycleEntries = entries.filter(([_, e]) => e.cycleMenstruel && e.cycleMenstruel.phase);
  if (cycleEntries.length >= 3) {
    const phases = ['regles', 'folliculaire', 'ovulation', 'luteale'];
    const phaseLabels = {
      'regles': '🌹 Règles',
      'folliculaire': '🌱 Phase folliculaire',
      'ovulation': '✨ Ovulation',
      'luteale': '🌙 Phase lutéale'
    };
    
    phases.forEach(phase => {
      const phaseDays = cycleEntries.filter(([_, e]) => e.cycleMenstruel.phase === phase);
      if (phaseDays.length < 2) return;
      
      const avgSjsr = phaseDays.reduce((a, [_, e]) => a + (e.sjsr || 0), 0) / phaseDays.length;
      const overallSjsr = entries.reduce((a, [_, e]) => a + (e.sjsr || 0), 0) / entries.length;
      const diff = avgSjsr - overallSjsr;
      
      if (Math.abs(diff) >= 0.4) {
        result.cycle.push({
          level: diff > 0 ? 'caution' : 'good',
          title: phaseLabels[phase] + ' : SJSR à ' + avgSjsr.toFixed(1) + '/5',
          detail: diff > 0 
            ? 'Vos symptômes semblent plus présents pendant cette phase (' + Math.abs(diff).toFixed(1) + ' point de plus). ' +
              'C\'est cohérent avec le rôle des hormones sur le SJSR.'
            : 'Vos symptômes sont mieux contrôlés pendant cette phase.'
        });
      }
    });
  }
  
  return result;
}

function renderInsightSection(title, insights) {
  if (!insights || insights.length === 0) return '';
  
  return '<div class="insights-section">' +
    '<div class="insights-section-title">' + title + '</div>' +
    insights.map(i => 
      '<div class="insight-card insight-' + i.level + '">' +
        '<div class="insight-card-title">' + i.title + '</div>' +
        '<div class="insight-card-detail">' + i.detail + '</div>' +
      '</div>'
    ).join('') +
  '</div>';
}

function renderInsightRecommendations(insights) {
  const recos = [];
  
  // Recommandations basées sur les patterns détectés
  const allInsights = [...insights.sleep, ...insights.drinks, ...insights.symptoms, ...insights.food];
  const warnings = allInsights.filter(i => i.level === 'warning');
  
  if (warnings.length === 0) {
    return '<div class="insights-section">' +
      '<div class="insights-section-title">💡 Recommandations</div>' +
      '<div class="insight-card insight-good">' +
        '<div class="insight-card-title">Vous êtes sur la bonne voie</div>' +
        '<div class="insight-card-detail">Aucun signal d\'alerte majeur détecté sur cette période. Continuez vos bonnes habitudes !</div>' +
      '</div>' +
    '</div>';
  }
  
  // Logique de recommandations contextuelles
  const hasWarningCafeine = warnings.some(w => w.title.includes('Caféine'));
  const hasWarningAlcool = warnings.some(w => w.title.includes('Alcool'));
  const hasWarningHydratation = warnings.some(w => w.title.includes('Hydratation'));
  const hasWarningSleep = warnings.some(w => w.title.includes('Durée'));
  const hasFrequentCrampes = insights.symptoms.some(s => s.title.toLowerCase().includes('crampes') && s.level === 'warning');
  
  if (hasWarningCafeine) {
    recos.push({
      icon: '☕',
      title: 'Stopper la caféine avant 14h',
      detail: 'Test recommandé : 2 semaines sans café après 14h. Comparez avec vos données précédentes.'
    });
  }
  
  if (hasWarningAlcool) {
    recos.push({
      icon: '🍷',
      title: 'Réduire ou décaler l\'alcool',
      detail: 'Évitez l\'alcool 3-4h avant le coucher. Privilégiez les boissons sans alcool en semaine.'
    });
  }
  
  if (hasWarningHydratation || hasFrequentCrampes) {
    recos.push({
      icon: '💧',
      title: 'Augmenter l\'hydratation',
      detail: 'Visez 6-8 verres d\'eau/jour. Une déshydratation chronique peut aggraver crampes et SJSR.'
    });
  }
  
  if (hasWarningSleep) {
    recos.push({
      icon: '🌙',
      title: 'Travailler l\'hygiène du sommeil',
      detail: 'Couchez-vous à heures régulières, pas d\'écrans 1h avant. Visez 7-9h.'
    });
  }
  
  if (recos.length === 0) {
    recos.push({
      icon: '🩺',
      title: 'Discuter avec votre médecin',
      detail: 'Plusieurs signaux d\'alerte détectés. Partagez ces données lors de votre prochaine consultation.'
    });
  }
  
  return '<div class="insights-section">' +
    '<div class="insights-section-title">💡 Recommandations personnalisées</div>' +
    recos.map(r => 
      '<div class="insight-recommendation">' +
        '<div class="insight-reco-icon">' + r.icon + '</div>' +
        '<div>' +
          '<div class="insight-reco-title">' + r.title + '</div>' +
          '<div class="insight-reco-detail">' + r.detail + '</div>' +
        '</div>' +
      '</div>'
    ).join('') +
  '</div>';
}

// === COMPTEUR RECETTES UNIFIÉ ===
function updateRecipeCounters() {
  const total = RECETTES.length;
  const free = RECETTES.filter(r => !r.premium).length;
  const premium = total - free;
  
  document.querySelectorAll('[data-recipe-count="total"]').forEach(el => el.textContent = total);
  document.querySelectorAll('[data-recipe-count="free"]').forEach(el => el.textContent = free);
  document.querySelectorAll('[data-recipe-count="premium"]').forEach(el => el.textContent = premium);
}

// ============================================================
// EXPORT / IMPORT DES DONNÉES — RGPD
// ============================================================

const FLORA_DATA_KEYS = [
  'flora_journal',
  'flora_agenda',
  'flora_placard',
  'flora_profile',
  'flora_premium',
  'flora_user_email',
  'flora_user_name',
  'flora_medications',
  'flora_custom_meals',
  'flora_theme'
];

function exportFloraData() {
  const data = {
    _meta: {
      app: 'Flora',
      version: '1.2',
      exportedAt: new Date().toISOString(),
      schema: 1
    },
    data: {}
  };
  
  // Récolter toutes les clés Flōra
  FLORA_DATA_KEYS.forEach(key => {
    const value = localStorage.getItem(key);
    if (value !== null) {
      try {
        // Si c'est du JSON, on le parse pour avoir un export lisible
        data.data[key] = JSON.parse(value);
      } catch(e) {
        // Sinon on garde la string telle quelle
        data.data[key] = value;
      }
    }
  });
  
  // Compter les entrées pour le toast de confirmation
  const journalCount = data.data.flora_journal ? Object.keys(data.data.flora_journal).length : 0;
  const agendaCount = data.data.flora_agenda ? Object.keys(data.data.flora_agenda).length : 0;
  
  // Créer le blob et déclencher le téléchargement
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  const dateStr = new Date().toISOString().split('T')[0];
  a.download = 'flora-data-' + dateStr + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  // Libérer la mémoire après un délai
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  
  // Feedback
  showFloraDataToast(
    '✅ Export réussi',
    journalCount + ' entrée' + (journalCount > 1 ? 's' : '') + ' de journal · ' + 
    agendaCount + ' jour' + (agendaCount > 1 ? 's' : '') + ' d\'agenda',
    'success'
  );
}

function importFloraData(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  
  reader.onload = function(e) {
    try {
      const text = e.target.result;
      const parsed = JSON.parse(text);
      
      // Vérifier la structure
      if (!parsed._meta || !parsed.data) {
        throw new Error('Format de fichier non reconnu');
      }
      
      if (parsed._meta.app !== 'Flora') {
        throw new Error('Ce fichier ne provient pas de Flōra');
      }
      
      // Compter ce qui va être importé
      const incomingJournal = parsed.data.flora_journal || {};
      const incomingAgenda = parsed.data.flora_agenda || {};
      const journalCount = Object.keys(incomingJournal).length;
      const agendaCount = Object.keys(incomingAgenda).length;
      
      // Compter les données actuelles
      let currentJournal = {};
      let currentAgenda = {};
      try {
        currentJournal = JSON.parse(localStorage.getItem('flora_journal') || '{}');
        currentAgenda = JSON.parse(localStorage.getItem('flora_agenda') || '{}');
      } catch(err) {}
      
      const currentJournalCount = Object.keys(currentJournal).length;
      const currentAgendaCount = Object.keys(currentAgenda).length;
      
      // Demander confirmation à l'utilisateur
      let confirmMsg = 'Importer ces données ?\n\n';
      confirmMsg += '📥 Données à importer :\n';
      confirmMsg += '   • ' + journalCount + ' entrée' + (journalCount > 1 ? 's' : '') + ' de journal\n';
      confirmMsg += '   • ' + agendaCount + ' jour' + (agendaCount > 1 ? 's' : '') + ' d\'agenda\n\n';
      
      if (currentJournalCount > 0 || currentAgendaCount > 0) {
        confirmMsg += '⚠️ Données actuelles sur cet appareil :\n';
        confirmMsg += '   • ' + currentJournalCount + ' entrée' + (currentJournalCount > 1 ? 's' : '') + ' de journal\n';
        confirmMsg += '   • ' + currentAgendaCount + ' jour' + (currentAgendaCount > 1 ? 's' : '') + ' d\'agenda\n\n';
        confirmMsg += 'Les données seront FUSIONNÉES (les entrées du même jour seront remplacées).';
      } else {
        confirmMsg += 'Aucune donnée actuelle — l\'import remplacera votre profil vide.';
      }
      
      if (!confirm(confirmMsg)) {
        input.value = ''; // reset
        return;
      }
      
      // FUSION (merge) plutôt que remplacement total
      let imported = 0;
      Object.entries(parsed.data).forEach(([key, value]) => {
        if (!FLORA_DATA_KEYS.includes(key)) return; // sécurité
        
        try {
          // Pour journal et agenda : merge par date
          if (key === 'flora_journal' || key === 'flora_agenda') {
            const existing = JSON.parse(localStorage.getItem(key) || '{}');
            const merged = Object.assign({}, existing, value);
            localStorage.setItem(key, JSON.stringify(merged));
          } 
          // Pour le reste : remplacement direct
          else {
            const valueToStore = typeof value === 'string' ? value : JSON.stringify(value);
            localStorage.setItem(key, valueToStore);
          }
          imported++;
        } catch(err) {
          console.error('Erreur import clé', key, err);
        }
      });
      
      // Reset input
      input.value = '';
      
      // Feedback puis reload pour appliquer les changements
      showFloraDataToast(
        '✅ Import réussi',
        journalCount + ' entrée' + (journalCount > 1 ? 's' : '') + ' importée' + (journalCount > 1 ? 's' : '') + '. Rechargement…',
        'success'
      );
      
      // Reload après 1.5s pour appliquer
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      
    } catch(err) {
      console.error('Erreur import :', err);
      input.value = ''; // reset
      showFloraDataToast(
        '❌ Erreur d\'import',
        err.message || 'Le fichier ne semble pas être un export Flōra valide',
        'error'
      );
    }
  };
  
  reader.onerror = function() {
    input.value = '';
    showFloraDataToast('❌ Erreur de lecture', 'Impossible de lire le fichier', 'error');
  };
  
  reader.readAsText(file);
}

// Toast de confirmation pour Export/Import
function showFloraDataToast(title, message, level) {
  const existing = document.getElementById('flora-data-toast');
  if (existing) existing.remove();
  
  const colors = {
    success: { bg: '#3d6b58', text: '#fff' },
    error: { bg: '#c0614a', text: '#fff' },
    info: { bg: '#2d4a3e', text: '#fff' }
  };
  const c = colors[level] || colors.info;
  
  const toast = document.createElement('div');
  toast.id = 'flora-data-toast';
  toast.className = 'flora-data-toast';
  toast.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%) translateY(-20px);background:' + c.bg + ';color:' + c.text + ';padding:14px 22px;border-radius:14px;box-shadow:0 6px 24px rgba(0,0,0,0.2);z-index:10000;opacity:0;transition:all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);max-width:90vw;';
  toast.innerHTML = 
    '<div style="font-weight:600;font-size:0.95rem;margin-bottom:4px;">' + title + '</div>' +
    '<div style="font-size:0.82rem;opacity:0.92;">' + message + '</div>';
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  }, 10);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(-20px)';
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}

// ============================================================
// THÈME — Mode sombre / clair / auto
// ============================================================

function setTheme(theme) {
  // Validation
  if (!['light', 'dark', 'auto'].includes(theme)) theme = 'light';
  
  // Application immédiate
  if (theme === 'light') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  
  // Sauvegarde
  try {
    localStorage.setItem('flora_theme', theme);
  } catch(e) {}
  
  // Mise à jour des boutons actifs
  document.querySelectorAll('.theme-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.themeValue === theme);
  });
  
  // Mise à jour du theme-color du navigateur (barre du haut sur mobile)
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    let isDark = theme === 'dark';
    if (theme === 'auto') {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    themeColorMeta.setAttribute('content', isDark ? '#0d1210' : '#2d4a3e');
  }
}

function loadTheme() {
  let saved = 'light';
  try {
    saved = localStorage.getItem('flora_theme') || 'light';
  } catch(e) {}
  setTheme(saved);
}

// Appliquer le thème au plus tôt (avant initApp)
loadTheme();

// ============================================================
// REPAS LIBRES — Composer un repas avec les ingrédients du placard
// ============================================================

// Stockage : flora_custom_meals { 'custom_xxx': { id, nom, ingredients, slug, dk, createdAt, isLibrary } }

let _repasLibreCtx = { dk: null, slug: null, ingredients: [], nom: '', saveAsRecipe: false };

function getCustomMeals() {
  try {
    return JSON.parse(localStorage.getItem('flora_custom_meals') || '{}');
  } catch(e) {
    return {};
  }
}

function getCustomMeal(id) {
  const all = getCustomMeals();
  return all[id] || null;
}

function saveCustomMeal(meal) {
  const all = getCustomMeals();
  all[meal.id] = meal;
  localStorage.setItem('flora_custom_meals', JSON.stringify(all));
}

function deleteCustomMeal(id) {
  const all = getCustomMeals();
  delete all[id];
  localStorage.setItem('flora_custom_meals', JSON.stringify(all));
}

// === Calcul automatique des bénéfices nutritionnels selon ingrédients ===
function computeMealBenefices(ingredients) {
  if (!ingredients || !ingredients.length) return '';
  
  const lower = ingredients.map(i => i.toLowerCase()).join(' ');
  const benefits = [];
  
  // Détection par mots-clés
  if (/(saumon|sardine|maquereau|hareng|graines? de lin|graines? de chia|noix)/i.test(lower)) {
    benefits.push('riche en oméga-3');
  }
  if (/(épinard|lentille|pois chiche|haricot|abats|foie|boudin|rouge)/i.test(lower)) {
    benefits.push('source de fer');
  }
  if (/(amande|cacao|chocolat|graines? de courge|épinard|sarrasin|banane)/i.test(lower)) {
    benefits.push('apport en magnésium');
  }
  if (/(citron|persil|kiwi|fraise|poivron|brocoli|orange)/i.test(lower)) {
    benefits.push('vitamine C');
  }
  if (/(œuf|saumon|sardine|maquereau|champignon)/i.test(lower)) {
    benefits.push('vitamine D');
  }
  if (/(riz complet|sarrasin|quinoa|patate douce|pomme de terre|millet)/i.test(lower)) {
    benefits.push('glucides lents');
  }
  if (/(curcuma|gingembre|cannelle|ail)/i.test(lower)) {
    benefits.push('anti-inflammatoire');
  }
  if (/(persil|basilic|coriandre|menthe)/i.test(lower)) {
    benefits.push('herbes aromatiques');
  }
  if (/(banane|avocat|amande|graines? de courge)/i.test(lower)) {
    benefits.push('soutien dopamine');
  }
  
  if (benefits.length === 0) return '';
  
  // Capitaliser et joindre
  const text = benefits.slice(0, 4).join(', ');
  return text.charAt(0).toUpperCase() + text.slice(1) + '.';
}

// === Ouvrir le composeur de repas libre ===
function openRepasLibre(dk, slug) {
  _repasLibreCtx = { dk, slug, ingredients: [], nom: '', saveAsRecipe: false };
  
  // Pré-remplir avec les ingrédients cochés du placard
  const placardChecked = Object.keys(placardItems).filter(k => placardItems[k]);
  
  // Fermer le drawer agenda actuel
  const drawer = document.getElementById('agenda-day-drawer');
  if (drawer) drawer.classList.add('hidden');
  
  renderRepasLibreModal(placardChecked);
}

function renderRepasLibreModal(placardChecked) {
  // Retirer modal existant
  document.getElementById('flora-repas-libre-modal')?.remove();
  
  const slugLabels = {
    petitdej: '☀️ Petit-déjeuner',
    dejeuner: '🥗 Déjeuner',
    diner: '🌙 Dîner',
    snack: '🍎 Collation'
  };
  
  // Construire la liste d'ingrédients par catégorie depuis le placard
  // On ne montre QUE les ingrédients cochés dans le placard + bouton ajout libre
  let categoriesHTML = '';
  
  if (typeof PLACARD_CATEGORIES !== 'undefined') {
    const cats = Object.entries(PLACARD_CATEGORIES);
    cats.forEach(([catName, items]) => {
      const itemsAvailable = items.filter(item => placardItems[item]);
      if (itemsAvailable.length === 0) return;
      
      const itemsHTML = itemsAvailable.map(item => {
        const isSelected = _repasLibreCtx.ingredients.includes(item);
        return '<button class="repas-libre-ing-chip ' + (isSelected ? 'selected' : '') + '" ' +
               'onclick="toggleRepasLibreIngredient(\'' + item.replace(/'/g, "\\'") + '\')">' + 
               item + '</button>';
      }).join('');
      
      categoriesHTML += 
        '<div class="repas-libre-cat">' +
          '<div class="repas-libre-cat-title">' + catName + '</div>' +
          '<div class="repas-libre-cat-items">' + itemsHTML + '</div>' +
        '</div>';
    });
  }
  
  if (!categoriesHTML) {
    categoriesHTML = '<div class="repas-libre-empty">' +
      '<div style="font-size:2rem;margin-bottom:8px;">🗄️</div>' +
      '<div style="font-weight:600;color:#2d4a3e;margin-bottom:6px;">Aucun ingrédient dans le placard</div>' +
      '<div style="font-size:0.84rem;color:#6c8278;">Cochez d\'abord vos ingrédients dans la page Placard pour pouvoir composer un repas libre.</div>' +
    '</div>';
  }
  
  // Liste des ingrédients sélectionnés
  const selectedHTML = _repasLibreCtx.ingredients.length === 0
    ? '<div style="font-size:0.85rem;color:#8a9e96;font-style:italic;text-align:center;padding:12px 0;">Aucun ingrédient sélectionné</div>'
    : _repasLibreCtx.ingredients.map(ing => 
        '<span class="repas-libre-selected-chip">' + ing + 
        ' <button onclick="toggleRepasLibreIngredient(\'' + ing.replace(/'/g, "\\'") + '\')" aria-label="Retirer">✕</button></span>'
      ).join('');
  
  // Bénéfices auto-calculés
  const beneficesAuto = computeMealBenefices(_repasLibreCtx.ingredients);
  
  const modal = document.createElement('div');
  modal.id = 'flora-repas-libre-modal';
  modal.className = 'flora-modal-overlay';
  modal.innerHTML = 
    '<div class="flora-modal-content repas-libre-modal">' +
      '<div class="flora-modal-header">' +
        '<div>' +
          '<div class="flora-modal-overline">' + (slugLabels[_repasLibreCtx.slug] || '🍽️ Repas') + '</div>' +
          '<h2 class="flora-modal-title">✨ Composer un repas libre</h2>' +
        '</div>' +
        '<button class="flora-modal-close" aria-label="Fermer" onclick="closeRepasLibre()">✕</button>' +
      '</div>' +
      
      '<div class="flora-modal-body">' +
        // Champ nom du repas
        '<div class="repas-libre-section">' +
          '<label class="repas-libre-label">Nom du repas</label>' +
          '<input type="text" id="repas-libre-nom" class="field" ' +
            'placeholder="Ex : Pavé cabillaud aux épinards" ' +
            'value="' + (_repasLibreCtx.nom || '') + '" ' +
            'oninput="_repasLibreCtx.nom=this.value" />' +
        '</div>' +
        
        // Ingrédients sélectionnés
        '<div class="repas-libre-section">' +
          '<label class="repas-libre-label">Ingrédients sélectionnés' +
            (_repasLibreCtx.ingredients.length > 0 ? ' (' + _repasLibreCtx.ingredients.length + ')' : '') +
          '</label>' +
          '<div class="repas-libre-selected">' + selectedHTML + '</div>' +
          (beneficesAuto ? '<div class="repas-libre-benefices">🌿 ' + beneficesAuto + '</div>' : '') +
        '</div>' +
        
        // Catégories du placard
        '<div class="repas-libre-section">' +
          '<label class="repas-libre-label">📦 Mes ingrédients du placard</label>' +
          '<div class="repas-libre-categories">' + categoriesHTML + '</div>' +
        '</div>' +
        
        // Option : sauvegarder en bibliothèque
        '<label class="repas-libre-save-toggle">' +
          '<input type="checkbox" ' + (_repasLibreCtx.saveAsRecipe ? 'checked' : '') + ' ' +
            'onchange="_repasLibreCtx.saveAsRecipe=this.checked">' +
          '<span class="repas-libre-save-label">' +
            '<span style="font-weight:600;">📚 Sauvegarder dans ma bibliothèque</span>' +
            '<span class="repas-libre-save-sub">Pour réutiliser ce repas plus tard</span>' +
          '</span>' +
        '</label>' +
      '</div>' +
      
      '<div class="flora-modal-footer">' +
        '<button class="flora-btn-secondary" onclick="closeRepasLibre()">Annuler</button>' +
        '<button class="flora-btn-primary" onclick="saveRepasLibre()" ' +
          (_repasLibreCtx.ingredients.length === 0 ? 'disabled' : '') + '>' +
          '✓ Ajouter au repas' +
        '</button>' +
      '</div>' +
    '</div>';
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function toggleRepasLibreIngredient(ing) {
  const i = _repasLibreCtx.ingredients.indexOf(ing);
  if (i === -1) {
    _repasLibreCtx.ingredients.push(ing);
  } else {
    _repasLibreCtx.ingredients.splice(i, 1);
  }
  // Sauvegarder le nom actuel avant re-render
  const nomEl = document.getElementById('repas-libre-nom');
  if (nomEl) _repasLibreCtx.nom = nomEl.value;
  
  // Re-render
  const placardChecked = Object.keys(placardItems).filter(k => placardItems[k]);
  renderRepasLibreModal(placardChecked);
}

function closeRepasLibre() {
  const modal = document.getElementById('flora-repas-libre-modal');
  if (modal) modal.remove();
  document.body.style.overflow = '';
  
  // Reouvrir le drawer agenda si on était dedans
  if (_repasLibreCtx.dk && document.getElementById('agenda-day-drawer')) {
    renderAgendaDayDrawer(_repasLibreCtx.dk);
  }
  _repasLibreCtx = { dk: null, slug: null, ingredients: [], nom: '', saveAsRecipe: false };
}

function saveRepasLibre() {
  const nomEl = document.getElementById('repas-libre-nom');
  if (nomEl) _repasLibreCtx.nom = nomEl.value.trim();
  
  if (_repasLibreCtx.ingredients.length === 0) {
    alert('Sélectionnez au moins un ingrédient.');
    return;
  }
  
  // === DIAGNOSTIC : afficher le contexte ===
  const debugInfo = 'dk=' + _repasLibreCtx.dk + ' / slug=' + _repasLibreCtx.slug + ' / ing=' + _repasLibreCtx.ingredients.length;
  
  if (!_repasLibreCtx.dk || !_repasLibreCtx.slug) {
    alert('🐛 BUG : contexte invalide → ' + debugInfo);
    return;
  }
  
  const nom = _repasLibreCtx.nom || _repasLibreCtx.ingredients.slice(0, 3).join(' · ');
  const id = 'custom_' + Date.now();
  const dk = _repasLibreCtx.dk;
  const slug = _repasLibreCtx.slug;
  
  const meal = {
    id: id,
    nom: nom,
    ingredients: [..._repasLibreCtx.ingredients],
    slug: slug,
    createdAt: new Date().toISOString(),
    isLibrary: _repasLibreCtx.saveAsRecipe
  };
  
  // 1. Sauvegarder le repas custom
  saveCustomMeal(meal);
  
  // 2. Ajouter à l'agenda
  if (!agenda[dk]) agenda[dk] = {};
  agenda[dk][slug] = id;
  saveState();
  
  // === DIAGNOSTIC : vérifier la sauvegarde ===
  const verifAgenda = JSON.parse(localStorage.getItem('flora_agenda') || '{}');
  const verifMeals = JSON.parse(localStorage.getItem('flora_custom_meals') || '{}');
  if (!verifAgenda[dk] || verifAgenda[dk][slug] !== id || !verifMeals[id]) {
    alert('🐛 BUG sauvegarde : agenda[' + dk + '][' + slug + ']=' + (verifAgenda[dk] ? verifAgenda[dk][slug] : 'undefined') + ' / meal=' + (verifMeals[id] ? 'OK' : 'MANQUANT'));
    return;
  }
  
  // 3. Reset le contexte
  _repasLibreCtx = { dk: null, slug: null, ingredients: [], nom: '', saveAsRecipe: false };
  
  // 4. Fermer modal repas libre
  const modal = document.getElementById('flora-repas-libre-modal');
  if (modal) modal.remove();
  document.body.style.overflow = '';
  
  // 5. Toast
  if (typeof showFloraDataToast === 'function') {
    showFloraDataToast(
      '✨ Repas ajouté',
      meal.isLibrary 
        ? meal.nom + ' · Sauvegardé dans la bibliothèque' 
        : meal.nom,
      'success'
    );
  }
  
  // 6. FORCER LE RE-RENDER : navigation agenda + ouverture drawer
  _agendaSelectedDay = dk;
  
  // Si la page agenda n'est pas active, y aller
  const agendaPage = document.getElementById('page-agenda');
  if (agendaPage && agendaPage.classList.contains('hidden')) {
    showPage('agenda');
  }
  
  // Force le re-render mois + drawer après un délai pour laisser le DOM se stabiliser
  setTimeout(function() {
    if (typeof renderAgendaMonth === 'function') renderAgendaMonth();
    
    setTimeout(function() {
      const drawer = document.getElementById('agenda-day-drawer');
      if (drawer) {
        drawer.classList.remove('hidden');
        if (typeof renderAgendaDayDrawer === 'function') {
          renderAgendaDayDrawer(dk);
        }
      }
    }, 100);
  }, 200);
}

// === Bouton d'accès depuis le PLACARD ===
function openRepasLibreFromPlacard() {
  // Demander pour quel slot et quelle date
  const today = dateKey(new Date());
  const slot = prompt(
    'Pour quel repas voulez-vous composer ce repas libre ?\n\n' +
    '1 = Petit-déjeuner\n' +
    '2 = Déjeuner\n' +
    '3 = Dîner\n\n' +
    'Tapez 1, 2 ou 3 :'
  );
  
  if (!slot) return;
  
  const slugMap = { '1': 'petitdej', '2': 'dejeuner', '3': 'diner' };
  const slug = slugMap[slot.trim()];
  if (!slug) {
    alert('Choix invalide. Tapez 1, 2 ou 3.');
    return;
  }
  
  openRepasLibre(today, slug);
}

// ============================================================
// ÉTIREMENTS SJSR — Module interactif avec timer
// ============================================================

const ETIREMENTS_SJSR = [
  {
    id: 'mollet-debout',
    nom: 'Étirement du mollet debout',
    icon: '🦵',
    color: '#4a8068',
    duree: 20,
    benefice: 'Soulage les impatiences',
    instructions: [
      'Debout face à un mur, mains posées dessus à hauteur d\'épaules.',
      'Reculez une jambe, talon bien plaqué au sol.',
      'Poussez doucement le talon vers le sol, jambe arrière tendue.',
      'Maintenez l\'étirement sans à-coups.'
    ]
  },
  {
    id: 'rotations-cheville',
    nom: 'Rotations de cheville au sol',
    icon: '🔄',
    color: '#3d6b58',
    duree: 30,
    benefice: 'Active la circulation',
    instructions: [
      'Allongez-vous sur le dos, jambes tendues.',
      'Soulevez une jambe à 30°, pied détendu.',
      'Effectuez 10 rotations de cheville dans un sens.',
      'Puis 10 rotations dans l\'autre sens. Changez de jambe.'
    ]
  },
  {
    id: 'flexion-hanche',
    nom: 'Flexion douce de hanche',
    icon: '🪑',
    color: '#7a4e8a',
    duree: 20,
    benefice: 'Détente musculaire',
    instructions: [
      'Asseyez-vous sur une chaise, dos droit.',
      'Pliez doucement un genou vers vous, mains autour du tibia.',
      'Tirez doucement vers la poitrine sans forcer.',
      'Relâchez progressivement. Changez de jambe.'
    ]
  },
  {
    id: 'ischio-assis',
    nom: 'Étirement ischio-jambiers assis',
    icon: '🧘',
    color: '#a04060',
    duree: 25,
    benefice: 'Soulagement lombaire et des jambes',
    instructions: [
      'Asseyez-vous au sol, jambes tendues devant vous.',
      'Penchez le buste en avant, dos droit.',
      'Atteignez les pieds (sans forcer), genoux légèrement souples.',
      'Respirez profondément pendant l\'étirement.'
    ]
  },
  {
    id: 'jambes-elevees',
    nom: 'Posture des jambes élevées',
    icon: '🛌',
    color: '#3d6b58',
    duree: 60,
    benefice: 'Active la circulation',
    instructions: [
      'Allongez-vous sur le dos, près d\'un mur.',
      'Positionnez vos jambes contre le mur, à 90°.',
      'Bras le long du corps, paumes vers le ciel.',
      'Maintenez la position en respirant profondément.'
    ]
  },
  {
    id: 'massage-mollets',
    nom: 'Massage des mollets',
    icon: '👐',
    color: '#a0735c',
    duree: 45,
    benefice: 'Soulage la tension',
    instructions: [
      'Asseyez-vous sur le sol ou le lit.',
      'Utilisez vos mains pour pétrir vos mollets fermement.',
      'Massez des chevilles vers les genoux (sens du retour veineux).',
      'Insistez sur les zones tendues, sans douleur excessive.'
    ]
  }
];

let _etirementTimer = null;
let _etirementTimerSec = 0;
let _etirementCurrentId = null;

function renderEtirementsPage() {
  const container = document.getElementById('etirements-container');
  if (!container) return;
  
  const cardsHTML = ETIREMENTS_SJSR.map(e => 
    '<button class="etirement-card" onclick="openEtirementDetail(\'' + e.id + '\')" ' +
      'style="--etir-color: ' + e.color + ';">' +
      '<div class="etirement-icon" style="background: ' + e.color + '22; color: ' + e.color + ';">' + e.icon + '</div>' +
      '<div class="etirement-content">' +
        '<div class="etirement-name">' + e.nom + '</div>' +
        '<div class="etirement-benefice">' + e.benefice + '</div>' +
        '<div class="etirement-duree">⏱ ' + e.duree + ' secondes</div>' +
      '</div>' +
      '<div class="etirement-arrow">›</div>' +
    '</button>'
  ).join('');
  
  container.innerHTML = 
    '<div class="etirements-intro">' +
      '<div class="etirements-intro-icon">🧘‍♀️</div>' +
      '<div>' +
        '<div class="etirements-intro-title">6 étirements pour soulager le SJSR</div>' +
        '<div class="etirements-intro-sub">Pratiquez quotidiennement, le soir avant le coucher ou pendant une crise.</div>' +
      '</div>' +
    '</div>' +
    
    '<button class="etirements-routine-btn" onclick="startRoutineComplete()">' +
      '<span style="font-size:1.4rem;">▶️</span>' +
      '<span style="flex:1;text-align:left;padding:0 12px;">' +
        '<span style="display:block;font-weight:600;font-size:0.95rem;">Routine complète guidée</span>' +
        '<span style="display:block;font-size:0.78rem;opacity:0.85;margin-top:2px;">~3 min · les 6 exercices avec timer auto</span>' +
      '</span>' +
      '<span style="font-size:1.2rem;">›</span>' +
    '</button>' +
    
    '<div class="etirements-list">' + cardsHTML + '</div>' +
    
    '<div class="etirements-disclaimer">' +
      '<strong>Important.</strong> Arrêtez immédiatement en cas de douleur vive. ' +
      'Ces étirements ne remplacent pas un avis médical. En cas de SJSR sévère ou persistant, ' +
      'consultez votre médecin ou un kinésithérapeute.' +
    '</div>';
}

function openEtirementDetail(id) {
  const etir = ETIREMENTS_SJSR.find(e => e.id === id);
  if (!etir) return;
  
  document.getElementById('flora-etirement-modal')?.remove();
  
  const stepsHTML = etir.instructions.map((step, i) => 
    '<div class="etirement-step">' +
      '<div class="etirement-step-num" style="background:' + etir.color + ';">' + (i + 1) + '</div>' +
      '<div class="etirement-step-text">' + step + '</div>' +
    '</div>'
  ).join('');
  
  const modal = document.createElement('div');
  modal.id = 'flora-etirement-modal';
  modal.className = 'flora-modal-overlay';
  modal.innerHTML = 
    '<div class="flora-modal-content etirement-detail-modal">' +
      '<div class="flora-modal-header" style="background: linear-gradient(135deg, ' + etir.color + '22, ' + etir.color + '08);">' +
        '<div class="etirement-detail-icon" style="background:' + etir.color + '33; color:' + etir.color + ';">' + etir.icon + '</div>' +
        '<div style="flex:1;">' +
          '<div class="flora-modal-overline" style="color:' + etir.color + ';">' + etir.benefice + '</div>' +
          '<h2 class="flora-modal-title">' + etir.nom + '</h2>' +
        '</div>' +
        '<button class="flora-modal-close" aria-label="Fermer" onclick="closeEtirementDetail()">✕</button>' +
      '</div>' +
      
      '<div class="flora-modal-body">' +
        // Timer
        '<div class="etirement-timer-block">' +
          '<div class="etirement-timer-display" id="etir-timer-display" style="color:' + etir.color + ';">' +
            etir.duree + 's' +
          '</div>' +
          '<div class="etirement-timer-progress">' +
            '<div class="etirement-timer-bar" id="etir-timer-bar" style="background:' + etir.color + ';"></div>' +
          '</div>' +
          '<button class="etirement-timer-btn" id="etir-timer-btn" ' +
            'onclick="toggleEtirementTimer(\'' + etir.id + '\', ' + etir.duree + ')" ' +
            'style="background:' + etir.color + ';">' +
            '▶ Démarrer le timer' +
          '</button>' +
        '</div>' +
        
        '<div class="etirement-instructions">' +
          '<div class="etirement-instructions-title">Exécution</div>' +
          stepsHTML +
        '</div>' +
        
        '<div class="etirement-tip">' +
          '<span style="font-size:1.2rem;">💡</span>' +
          '<span>Respirez profondément pendant l\'étirement. ' +
            'Ne forcez jamais — l\'étirement doit être confortable.</span>' +
        '</div>' +
      '</div>' +
    '</div>';
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  _etirementCurrentId = id;
}

function closeEtirementDetail() {
  if (_etirementTimer) {
    clearInterval(_etirementTimer);
    _etirementTimer = null;
  }
  const modal = document.getElementById('flora-etirement-modal');
  if (modal) modal.remove();
  document.body.style.overflow = '';
  _etirementCurrentId = null;
}

function toggleEtirementTimer(id, duree) {
  const etir = ETIREMENTS_SJSR.find(e => e.id === id);
  if (!etir) return;
  
  const btn = document.getElementById('etir-timer-btn');
  const display = document.getElementById('etir-timer-display');
  const bar = document.getElementById('etir-timer-bar');
  
  if (_etirementTimer) {
    // Pause
    clearInterval(_etirementTimer);
    _etirementTimer = null;
    if (btn) btn.innerHTML = '▶ Reprendre';
    return;
  }
  
  if (_etirementTimerSec === 0 || _etirementTimerSec >= duree) {
    _etirementTimerSec = 0;
  }
  
  if (btn) btn.innerHTML = '⏸ Pause';
  
  _etirementTimer = setInterval(() => {
    _etirementTimerSec++;
    const remaining = duree - _etirementTimerSec;
    const progress = (_etirementTimerSec / duree) * 100;
    
    if (display) display.textContent = remaining + 's';
    if (bar) bar.style.width = progress + '%';
    
    if (_etirementTimerSec >= duree) {
      clearInterval(_etirementTimer);
      _etirementTimer = null;
      _etirementTimerSec = 0;
      if (display) display.textContent = '✓ Terminé';
      if (btn) btn.innerHTML = '🔁 Recommencer';
      
      // Vibration de fin si supporté
      if ('vibrate' in navigator) {
        try { navigator.vibrate([200, 100, 200]); } catch(e) {}
      }
      
      // Toast
      if (typeof showFloraDataToast === 'function') {
        showFloraDataToast('✓ Étirement terminé', etir.nom + ' · ' + etir.benefice, 'success');
      }
    }
  }, 1000);
}

// === ROUTINE COMPLÈTE GUIDÉE ===
let _routineState = { index: 0, timer: null, sec: 0, isPaused: false };

function startRoutineComplete() {
  _routineState = { index: 0, timer: null, sec: 0, isPaused: false };
  renderRoutineStep();
}

function renderRoutineStep() {
  const etir = ETIREMENTS_SJSR[_routineState.index];
  if (!etir) {
    closeRoutine();
    if (typeof showFloraDataToast === 'function') {
      showFloraDataToast('🌿 Routine terminée', 'Bravo, vous avez complété les 6 étirements !', 'success');
    }
    return;
  }
  
  document.getElementById('flora-routine-modal')?.remove();
  
  const stepsHTML = etir.instructions.map((step, i) => 
    '<div class="etirement-step">' +
      '<div class="etirement-step-num" style="background:' + etir.color + ';">' + (i + 1) + '</div>' +
      '<div class="etirement-step-text">' + step + '</div>' +
    '</div>'
  ).join('');
  
  const total = ETIREMENTS_SJSR.length;
  const current = _routineState.index + 1;
  
  const modal = document.createElement('div');
  modal.id = 'flora-routine-modal';
  modal.className = 'flora-modal-overlay';
  modal.innerHTML = 
    '<div class="flora-modal-content etirement-detail-modal">' +
      '<div class="flora-modal-header" style="background: linear-gradient(135deg, ' + etir.color + '22, ' + etir.color + '08);">' +
        '<div class="etirement-detail-icon" style="background:' + etir.color + '33; color:' + etir.color + ';">' + etir.icon + '</div>' +
        '<div style="flex:1;">' +
          '<div class="flora-modal-overline" style="color:' + etir.color + ';">Étape ' + current + ' / ' + total + '</div>' +
          '<h2 class="flora-modal-title">' + etir.nom + '</h2>' +
        '</div>' +
        '<button class="flora-modal-close" aria-label="Quitter la routine" onclick="closeRoutine()">✕</button>' +
      '</div>' +
      
      '<div class="flora-modal-body">' +
        '<div class="routine-progress-bar">' +
          '<div class="routine-progress-fill" style="width:' + ((current - 1) / total * 100) + '%; background:' + etir.color + ';"></div>' +
        '</div>' +
        
        '<div class="etirement-timer-block">' +
          '<div class="etirement-timer-display" id="routine-timer-display" style="color:' + etir.color + ';">' +
            etir.duree + 's' +
          '</div>' +
          '<div class="etirement-timer-progress">' +
            '<div class="etirement-timer-bar" id="routine-timer-bar" style="background:' + etir.color + ';"></div>' +
          '</div>' +
        '</div>' +
        
        '<div class="etirement-instructions">' +
          '<div class="etirement-instructions-title">' + etir.benefice + '</div>' +
          stepsHTML +
        '</div>' +
      '</div>' +
      
      '<div class="flora-modal-footer">' +
        '<button class="flora-btn-secondary" onclick="skipRoutineStep()">⏭ Passer</button>' +
        '<button class="flora-btn-primary" id="routine-control-btn" onclick="toggleRoutineTimer()" ' +
          'style="background:' + etir.color + ';">▶ Démarrer</button>' +
      '</div>' +
    '</div>';
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  _routineState.sec = 0;
}

function toggleRoutineTimer() {
  const etir = ETIREMENTS_SJSR[_routineState.index];
  if (!etir) return;
  
  const btn = document.getElementById('routine-control-btn');
  const display = document.getElementById('routine-timer-display');
  const bar = document.getElementById('routine-timer-bar');
  
  if (_routineState.timer) {
    clearInterval(_routineState.timer);
    _routineState.timer = null;
    if (btn) btn.innerHTML = '▶ Reprendre';
    return;
  }
  
  if (btn) btn.innerHTML = '⏸ Pause';
  
  _routineState.timer = setInterval(() => {
    _routineState.sec++;
    const remaining = etir.duree - _routineState.sec;
    const progress = (_routineState.sec / etir.duree) * 100;
    
    if (display) display.textContent = remaining + 's';
    if (bar) bar.style.width = progress + '%';
    
    if (_routineState.sec >= etir.duree) {
      clearInterval(_routineState.timer);
      _routineState.timer = null;
      if (display) display.textContent = '✓';
      
      if ('vibrate' in navigator) {
        try { navigator.vibrate([200, 100, 200]); } catch(e) {}
      }
      
      // Auto-passer à l'étape suivante après 1.5s
      setTimeout(() => {
        _routineState.index++;
        renderRoutineStep();
      }, 1500);
    }
  }, 1000);
}

function skipRoutineStep() {
  if (_routineState.timer) {
    clearInterval(_routineState.timer);
    _routineState.timer = null;
  }
  _routineState.index++;
  _routineState.sec = 0;
  renderRoutineStep();
}

function closeRoutine() {
  if (_routineState.timer) {
    clearInterval(_routineState.timer);
    _routineState.timer = null;
  }
  const modal = document.getElementById('flora-routine-modal');
  if (modal) modal.remove();
  document.body.style.overflow = '';
  _routineState = { index: 0, timer: null, sec: 0, isPaused: false };
}
