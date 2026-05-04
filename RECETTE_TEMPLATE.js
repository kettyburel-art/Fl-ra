// ============================================================
// TEMPLATE RECETTE FLŌRA — copier-coller dans flora_recettes.js
// avant la ligne `];` finale, en n'oubliant pas la VIRGULE devant
// si tu insères entre deux recettes existantes.
// ============================================================

// 1. NUMÉROTATION
//    → Le prochain ID à utiliser est : 176 (puis 177, 178, etc.)
//    → Pour le retrouver vite : ouvre flora_recettes.js, va à la fin,
//      regarde l'ID de la dernière recette, ajoute 1.

// 2. CATÉGORIE (cat) — obligatoire, choisir UNE valeur :
//    'petit-dejeuner' · 'brunch' · 'dejeuner' · 'diner' · 'snack'

// 3. PREMIUM — true (recette payante) ou false (gratuite)
//    Garder un bon ratio gratuit/premium (actuellement env. 50/50)

// 4. TAGS — choisir parmi : 'sg' (sans gluten), 'sl' (sans lactose), 'vg' (végétarien)
//    Mettre seulement les tags qui s'appliquent.

// 5. DIFFICULTÉ — texte libre conseillé : 'Très facile' · 'Facile' · 'Intermédiaire' · 'Patience'

// 6. BÉNÉFICES — court paragraphe (2-3 phrases) qui explique l'intérêt
//    SJSR/TDAH/anti-inflammatoire de la recette. Utile pour les Insights et la motivation.

// 7. INGRÉDIENTS — tableau de strings. Pour des recettes complexes en sections,
//    utiliser des séparateurs '— SECTION —' (avec tirets cadratins).

// 8. ÉTAPES — tableau de strings. Une étape = une instruction claire.
//    Préférer des phrases courtes. L'utilisatrice les voit l'une après l'autre.

// ============================================================

// ╔═════════════════════════════════════════════════════════╗
// ║ TEMPLATE SIMPLE (ingrédients en une seule liste)        ║
// ╚═════════════════════════════════════════════════════════╝

  ,{
    id: 176, cat: 'dejeuner', premium: false,
    emoji: '🥗', nom: 'Nom de la recette ici',
    temps: '20 min', calories: 350, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Description courte des bienfaits SJSR/TDAH ou anti-inflammatoire. Citer les nutriments clés (fer, magnésium, oméga-3, etc.) et leur effet. 2 à 3 phrases maximum.',
    ingredients: [
      '200g ingrédient principal',
      '1 c.à.s d\'huile d\'olive',
      '1 oignon',
      '2 gousses d\'ail',
      'Sel, poivre'
    ],
    etapes: [
      'Première étape de préparation.',
      'Cuisson : durée et température.',
      'Touche finale et service.'
    ]
  }

// ╔═════════════════════════════════════════════════════════╗
// ║ TEMPLATE AVEC SECTIONS (ex: pâte + garniture + sauce)   ║
// ╚═════════════════════════════════════════════════════════╝

  ,{
    id: 177, cat: 'diner', premium: true,
    emoji: '🥧', nom: 'Recette complexe en plusieurs parties',
    temps: '1h30', calories: 480, diff: 'Intermédiaire',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Description détaillée des bénéfices nutritionnels.',
    ingredients: [
      '— PÂTE —',
      '150g farine de riz',
      '80g maïzena',
      '100g margarine froide',
      '— GARNITURE —',
      '500g légumes',
      '2 œufs',
      '— FINITION —',
      'Sel, poivre, muscade'
    ],
    etapes: [
      'PÂTE — sablez les farines avec la margarine.',
      'PÂTE — ajoutez l\'eau froide, formez une boule, réfrigérez 30 min.',
      'GARNITURE — préparez les légumes, faites-les revenir.',
      'MONTAGE — étalez la pâte, garnissez, enfournez.',
      'CUISSON — 35 min à 180°C jusqu\'à dorure.'
    ]
  }

// ============================================================
// PETITS RAPPELS PROTOCOLE FLŌRA (constantes diététiques)
// ============================================================
// → Zéro glutamate ajouté → Sel Santé (sel + curcuma + poivre + herbes)
// → Citron systématique sur les plats riches en fer (vit C = absorption)
// → Cuisson vapeur douce privilégiée
// → Dimanche = batch légumineuses pour la semaine
// → Persil + basilic dans toutes les recettes possibles (dopamine + fer)

// ============================================================
// EXEMPLES DE BÉNÉFICES PAR NUTRIMENT (pour t'aider à rédiger)
// ============================================================
// FER : "Riche en fer héminique (mieux absorbé) + vitamine C du citron pour
//        optimiser l'absorption. Essentiel pour les SJSR : la carence en fer
//        est un facteur déclenchant connu des impatiences nocturnes."
//
// MAGNÉSIUM : "Le magnésium est un relaxant musculaire naturel. Une
//              supplémentation par l'alimentation aide à réduire les
//              impatiences et améliorer la qualité du sommeil."
//
// OMÉGA-3 : "Anti-inflammatoires puissants. Le saumon/sardine apporte de
//            l'EPA et du DHA, qui réduisent l'inflammation systémique
//            associée à de nombreuses pathologies chroniques."
//
// DOPAMINE : "Le persil et le basilic contiennent des précurseurs naturels
//             de la dopamine. Particulièrement utile en TDAH où la régulation
//             dopaminergique est altérée."
//
// PRÉBIOTIQUES : "Les fibres prébiotiques (poireau, ail, oignon) nourrissent
//                 le microbiote intestinal, qui produit 95% de la sérotonine
//                 corporelle. Un microbiote sain = meilleure humeur et sommeil."
