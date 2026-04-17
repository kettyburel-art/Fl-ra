/* ============================
   FLŌRA — Application Logic
   Version 1.0 MVP
   ============================*/

'use strict';

// ============================
// DATA — Recettes
// ============================
const RECETTES = [
  // --- PETITS-DÉJEUNERS (gratuit) ---
  {
    id: 1, cat: 'petit-dejeuner', premium: false,
    emoji: '🥣', nom: 'Chia pudding mangue-gingembre',
    temps: '5 min + 8h', calories: 320, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Riche en oméga-3 (chia) pour réduire l\'inflammation. Le gingembre soulage les douleurs articulaires. Idéal avant coucher pour favoriser le sommeil.',
    ingredients: [
      '40g graines de chia',
      '250ml lait de coco',
      '1/2 mangue fraîche',
      '1 cm gingembre frais râpé',
      '1 c.à.c miel ou sirop d\'agave',
      '1 pincée de curcuma'
    ],
    etapes: [
      'Mélangez le chia, le lait de coco, le gingembre râpé et le miel dans un bocal.',
      'Incorporez le curcuma et mélangez bien.',
      'Réfrigérez toute la nuit (minimum 4h).',
      'Au moment de servir, déposez les dés de mangue fraîche sur le dessus.',
      'Ajoutez quelques graines de courge si disponibles.'
    ]
  },
  {
    id: 2, cat: 'petit-dejeuner', premium: false,
    emoji: '🍌', nom: 'Porridge sarrasin banane-cannelle',
    temps: '10 min', calories: 360, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le sarrasin est riche en magnésium, essentiel pour les jambes (SJSR). La banane apporte du tryptophane précurseur de sérotonine.',
    ingredients: [
      '60g flocons de sarrasin',
      '200ml lait d\'avoine',
      '1 banane mûre',
      '1/2 c.à.c cannelle',
      '1 c.à.s beurre d\'amande',
      '1 c.à.c miel'
    ],
    etapes: [
      'Faites chauffer le lait d\'avoine à feu moyen.',
      'Ajoutez les flocons de sarrasin et la cannelle, mélangez.',
      'Laissez cuire 5 min en remuant jusqu\'à consistance crémeuse.',
      'Écrasez la moitié de la banane dans le porridge.',
      'Servez avec le reste de banane en rondelles, le beurre d\'amande et le miel.'
    ]
  },
  {
    id: 3, cat: 'petit-dejeuner', premium: false,
    emoji: '🥑', nom: 'Toast de riz à l\'avocat & graines',
    temps: '8 min', calories: 290, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'L\'avocat est riche en vitamine E, puissant anti-oxydant. Les graines de chanvre apportent des protéines complètes et des oméga-6 équilibrés.',
    ingredients: [
      '2 galettes de riz',
      '1 avocat mûr',
      '1 c.à.c graines de chanvre',
      '1 c.à.c graines de sésame',
      '1/2 citron',
      'Sel Santé, poivre',
      'Piment d\'Espelette (optionnel)'
    ],
    etapes: [
      'Écrasez l\'avocat à la fourchette avec le jus de citron.',
      'Assaisonnez avec le Sel Santé et le poivre.',
      'Étalez sur les galettes de riz.',
      'Parsemez de graines de chanvre et sésame.',
      'Ajoutez le piment d\'Espelette selon votre tolérance.'
    ]
  },

  // --- DÉJEUNERS (gratuit + premium) ---
  {
    id: 4, cat: 'dejeuner', premium: false,
    emoji: '🐟', nom: 'Saumon gingembre graines de lin',
    temps: '20 min', calories: 480, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Combinaison d\'oméga-3 (saumon + lin) pour une action anti-inflammatoire puissante. Le gingembre renforce l\'effet. Idéal 2-3x/semaine.',
    ingredients: [
      '150g pavé de saumon',
      '1 c.à.s huile d\'olive',
      '1 c.à.c graines de lin moulues',
      '1 cm gingembre frais',
      '1/2 citron',
      '150g épinards frais',
      'Herbes : ciboulette, persil',
      'Sel Santé'
    ],
    etapes: [
      'Préchauffez le four à 180°C ou préparez une poêle à feu moyen.',
      'Badigeonnez le saumon d\'huile d\'olive et de gingembre râpé.',
      'Assaisonnez avec le Sel Santé, enfournez 12-15 min ou poêlez 3-4 min chaque côté.',
      'Faites revenir les épinards à l\'huile d\'olive, 2 min.',
      'Dressez : épinards, saumon, graines de lin, herbes fraîches et jus de citron.'
    ]
  },
  {
    id: 5, cat: 'dejeuner', premium: false,
    emoji: '🥗', nom: 'Salade pois chiches-basilic',
    temps: '10 min', calories: 390, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les légumineuses sont la base de l\'alimentation anti-inflammatoire. Riches en fer et en fibres, elles stabilisent la glycémie et réduisent les douleurs.',
    ingredients: [
      '200g pois chiches cuits',
      '1 bouquet de basilic',
      '1 tomate',
      '1/2 concombre',
      '1 c.à.s huile d\'olive',
      '1/2 citron',
      '1 gousse d\'ail',
      'Sel Santé, cumin'
    ],
    etapes: [
      'Rincez les pois chiches et égouttez-les.',
      'Coupez la tomate et le concombre en dés.',
      'Émincez l\'ail finement ou pressez-le.',
      'Mélangez tout dans un saladier.',
      'Assaisonnez avec l\'huile d\'olive, le jus de citron, le cumin et le Sel Santé.',
      'Ajoutez le basilic ciselé au dernier moment.'
    ]
  },
  {
    id: 6, cat: 'dejeuner', premium: true,
    emoji: '🍲', nom: 'Curry lentilles corail-curcuma',
    temps: '25 min', calories: 420, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le curcuma + poivre noir = biodisponibilité maximale de la curcumine. Les lentilles corail apportent un fer facilement assimilable.',
    ingredients: [
      '180g lentilles corail',
      '400ml lait de coco',
      '1 c.à.c curcuma',
      '1/2 c.à.c poivre noir',
      '1 oignon',
      '2 gousses d\'ail',
      '1 c.à.c gingembre moulu',
      'Épinards, coriandre'
    ],
    etapes: [
      'Faites revenir oignon et ail dans l\'huile de coco.',
      'Ajoutez le curcuma, le gingembre, le poivre — 1 min.',
      'Incorporez les lentilles et le lait de coco.',
      'Couvrez et laissez mijoter 18-20 min.',
      'Ajoutez les épinards en fin de cuisson, servez avec la coriandre.'
    ]
  },
  {
    id: 7, cat: 'dejeuner', premium: true,
    emoji: '🥙', nom: 'Brandade morue-courgettes',
    temps: '30 min', calories: 380, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'La morue est une source de protéines légères et de vitamine D, souvent déficitaire en cas de douleurs chroniques.',
    ingredients: [
      '200g morue dessalée',
      '2 courgettes',
      '3 c.à.s huile d\'olive',
      '2 gousses d\'ail',
      '1 citron',
      'Persil frais',
      'Sel Santé'
    ],
    etapes: [
      'Pochez la morue dans l\'eau frémissante 8 min.',
      'Faites cuire les courgettes à la vapeur 10 min.',
      'Émiettez la morue, mixez les courgettes avec l\'huile d\'olive.',
      'Mélangez les deux préparations avec l\'ail pressé.',
      'Ajoutez le jus de citron et le persil. Servez tiède.'
    ]
  },

  // --- DÎNERS ---
  {
    id: 8, cat: 'diner', premium: false,
    emoji: '🐠', nom: 'Papillote saumon-légumes verts',
    temps: '25 min', calories: 350, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'La cuisson en papillote préserve tous les nutriments et oméga-3. Les brocolis apportent la vitamine C qui améliore l\'absorption du fer.',
    ingredients: [
      '150g saumon',
      '100g brocolis',
      '50g haricots verts',
      '1/2 courgette',
      '1 c.à.s huile d\'olive',
      '1/2 citron',
      'Thym, romarin',
      'Sel Santé'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Découpez une feuille de papier cuisson assez grande.',
      'Disposez les légumes au centre, posez le saumon dessus.',
      'Arrosez d\'huile d\'olive et de jus de citron, ajoutez les herbes.',
      'Fermez la papillote hermétiquement et enfournez 20 min.'
    ]
  },
  {
    id: 9, cat: 'diner', premium: false,
    emoji: '🥣', nom: 'Velouté poireau-patate douce',
    temps: '30 min', calories: 280, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Soupe douce pour le soir : la patate douce est riche en bêta-carotène anti-inflammatoire. Les poireaux sont prébiotiques pour le microbiote.',
    ingredients: [
      '2 poireaux',
      '1 patate douce',
      '500ml bouillon de légumes',
      '1 c.à.s huile d\'olive',
      '1 c.à.c curcuma',
      'Graines de courge',
      'Sel Santé'
    ],
    etapes: [
      'Émincez les poireaux et coupez la patate douce en cubes.',
      'Faites revenir les poireaux dans l\'huile d\'olive 5 min.',
      'Ajoutez la patate douce et le bouillon.',
      'Laissez mijoter 20 min jusqu\'à ce que les légumes soient tendres.',
      'Mixez finement, ajoutez le curcuma, rectifiez l\'assaisonnement.',
      'Servez avec les graines de courge toastées.'
    ]
  },
  {
    id: 10, cat: 'diner', premium: true,
    emoji: '🥩', nom: 'Agneau polenta pistaches',
    temps: '35 min', calories: 520, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'L\'agneau est la viande la plus riche en fer héminique (combat la fatigue SJSR). Les pistaches sont anti-inflammatoires et riches en magnésium.',
    ingredients: [
      '150g épaule d\'agneau',
      '80g polenta',
      '300ml bouillon',
      '30g pistaches',
      'Romarin, ail',
      '1 c.à.s huile d\'olive',
      'Sel Santé'
    ],
    etapes: [
      'Faites mariner l\'agneau avec le romarin, l\'ail et l\'huile d\'olive 30 min.',
      'Faites cuire la polenta dans le bouillon 5 min en remuant.',
      'Saisissez l\'agneau à feu vif 3 min de chaque côté.',
      'Laissez reposer 5 min avant de trancher.',
      'Dressez la polenta, disposez l\'agneau et parsemez de pistaches concassées.'
    ]
  },

  // --- SNACKS ---
  {
    id: 11, cat: 'snack', premium: false,
    emoji: '🟤', nom: 'Boules énergie datte-amande-cacao',
    temps: '15 min + 1h frigo', calories: 180, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Combo parfait SJSR : le magnésium des amandes + le fer des dattes + la théobromine du cacao. Snack anti-fatigue sans sucre ajouté.',
    ingredients: [
      '12 dattes Medjool dénoyautées',
      '80g amandes entières',
      '2 c.à.s cacao en poudre (non sucré)',
      '1 c.à.s beurre d\'amande',
      '1 c.à.c extrait de vanille',
      'Coco râpée pour rouler'
    ],
    etapes: [
      'Mixez les amandes jusqu\'à obtenir une poudre grossière.',
      'Ajoutez les dattes, le cacao, le beurre d\'amande et la vanille.',
      'Mixez jusqu\'à obtenir une masse homogène et collante.',
      'Formez des boules de la taille d\'une noix avec les mains humides.',
      'Roulez dans la coco râpée et réfrigérez 1h minimum.'
    ]
  },
  {
    id: 12, cat: 'snack', premium: false,
    emoji: '🍑', nom: 'Abricots rôtis miel-thym',
    temps: '20 min', calories: 150, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les abricots rôtis concentrent le bêta-carotène et le potassium. Le thym est anti-inflammatoire et facilite la digestion.',
    ingredients: [
      '4 abricots mûrs',
      '1 c.à.s miel',
      '2 branches de thym frais',
      '1 c.à.s jus de citron',
      'Amandes effilées (optionnel)'
    ],
    etapes: [
      'Préchauffez le four à 200°C.',
      'Coupez les abricots en deux et retirez les noyaux.',
      'Disposez-les face coupée vers le haut dans un plat.',
      'Arrosez de miel et de jus de citron, déposez le thym.',
      'Enfournez 15 min jusqu\'à ce qu\'ils soient dorés et fondants.',
      'Ajoutez les amandes effilées toastées avant de servir.'
    ]
  },
  {
    id: 13, cat: 'snack', premium: true,
    emoji: '🍫', nom: 'Mousse choco noir-cerise-piment',
    temps: '15 min + 2h frigo', calories: 220, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le cacao à 85% est l\'un des aliments les plus riches en flavonoïdes anti-inflammatoires. La cerise réduit les marqueurs de l\'inflammation (études SJSR).',
    ingredients: [
      '80g chocolat 85%',
      '200ml lait de coco entier',
      '100g cerises dénoyautées',
      '1 pincée de piment de Cayenne',
      '1 c.à.c extrait de vanille'
    ],
    etapes: [
      'Faites fondre le chocolat au bain-marie.',
      'Fouettez le lait de coco réfrigéré jusqu\'à consistance de crème fouettée.',
      'Incorporez délicatement le chocolat fondu refroidi.',
      'Ajoutez la vanille et le piment de Cayenne.',
      'Répartissez dans des verrines avec les cerises.',
      'Réfrigérez 2h minimum avant de servir.'
    ]
  },
  {
    id: 14, cat: 'snack', premium: true,
    emoji: '🍑', nom: 'Fondant pêche-noisette-farine de riz',
    temps: '35 min', calories: 260, diff: 'Moyen',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Alternative goûteuse au gâteau classique, sans gluten ni lactose. Les noisettes apportent de la vitamine E protectrice.',
    ingredients: [
      '2 pêches mûres',
      '150g farine de riz',
      '80g noisettes moulues',
      '2 œufs',
      '60ml huile de coco',
      '60g sucre de fleur de coco',
      '1/2 c.à.c levure chimique'
    ],
    etapes: [
      'Préchauffez le four à 170°C. Beurrez un moule avec l\'huile de coco.',
      'Fouettez les œufs avec le sucre jusqu\'à blanchiment.',
      'Ajoutez l\'huile de coco fondue.',
      'Incorporez la farine de riz, les noisettes moulues et la levure.',
      'Coupez les pêches en fines tranches et intégrez-les à la pâte.',
      'Enfournez 25-28 min. Laissez refroidir avant de démouler.'
    ]
  },

  // =============================================
  // SNACKS FASTOCHES — gratuits (découverte)
  // =============================================
  {
    id: 15, cat: 'snack', premium: false,
    emoji: '🍫', nom: 'Barres dattes-noisettes-chocolat',
    temps: '15 min + 12h frigo', calories: 200, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Seulement 3 ingrédients ! Les dattes apportent du fer et du magnésium, les noisettes de la vitamine E. Idéal pour remplacer les barres du commerce trop sucrées.',
    ingredients: [
      '300g dattes moelleuses (Medjool)',
      '120g noisettes',
      '90g chocolat noir'
    ],
    etapes: [
      'Torréfiez les noisettes quelques minutes au four ou à sec dans une poêle.',
      'Dénoyautez les dattes.',
      'Hachez grossièrement le chocolat au couteau.',
      'Mixez les noisettes et le chocolat jusqu\'à obtenir une poudre grossière. Réservez.',
      'Mixez les dattes jusqu\'à formation d\'une pâte. Ajoutez noisettes et chocolat. Mixez à nouveau.',
      'Tassez dans un moule chemisé de papier sulfurisé. Mettez un poids dessus et réfrigérez 12h.',
      'Découpez en barres et conservez au frigo dans une boîte hermétique.'
    ]
  },
  {
    id: 16, cat: 'snack', premium: false,
    emoji: '🥜', nom: 'Mélange de fruits secs énergie',
    temps: '2 min', calories: 160, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le snack anti-SJSR par excellence : noix (magnésium), baies de goji (fer + antioxydants), dattes (énergie lente). À préparer la veille et emporter partout.',
    ingredients: [
      '5 cerneaux de noix',
      '5 amandes',
      '5 noisettes',
      '3 fèves de cacao',
      '1 poignée de baies de goji',
      '1 poignée de raisins secs',
      '1 figue sèche coupée en dés',
      '1 abricot sec en petits morceaux',
      '1 datte Medjool dénoyautée'
    ],
    etapes: [
      'Tout mélanger dans un petit pot.',
      'Emporter dans son sac — prêt à grignoter à tout moment !'
    ]
  },
  {
    id: 17, cat: 'snack', premium: false,
    emoji: '🌾', nom: 'Barres d\'énergie flocons-compote',
    temps: '30 min', calories: 190, diff: 'Facile',
    tags: ['sl', 'vg'],
    benefices: 'Base polyvalente à personnaliser selon vos goûts. Les graines de courge apportent du zinc et du magnésium, excellents pour la fatigue et le sommeil.',
    ingredients: [
      '80g flocons de millet (ou avoine certifiée sg)',
      '80g lait végétal',
      '1 poignée de raisins secs',
      '1 poignée d\'amandes et noisettes concassées',
      '1 c.à.s graines de courge',
      '3 c.à.s compote de pomme',
      '1 c.à.s miel'
    ],
    etapes: [
      'Mélangez tous les ingrédients dans un saladier.',
      'Versez dans un moule à cake (12x26cm).',
      'Cuisez 25 min à 180°C.',
      'Laissez refroidir complètement avant de couper en barres.'
    ]
  },
  {
    id: 18, cat: 'snack', premium: false,
    emoji: '🥥', nom: 'Roses des sables aux amandes',
    temps: '10 min + 1h frigo', calories: 145, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les pétales de maïs apportent des glucides d\'énergie rapide. La purée d\'amande est riche en vitamine E et en graisses saines anti-inflammatoires.',
    ingredients: [
      '100g pétales de maïs sans gluten',
      '60g purée d\'amande',
      '1 à 2 c.à.s huile de coco',
      '½ verre de lait végétal',
      '2 c.à.s sirop d\'agave ou miel',
      '2 c.à.s noix de coco râpée (optionnel)'
    ],
    etapes: [
      'Chauffez doucement la purée d\'amande, le lait végétal et le sirop d\'agave dans une casserole 5 min.',
      'Ajoutez les pétales de maïs et mélangez 1 min.',
      'Formez des petits tas sur du papier sulfurisé ou dans des moules silicone.',
      'Réfrigérez au moins 1h. Pour des roses croustillantes, passez 5 min au four à 220°C.'
    ]
  },

  // =============================================
  // SNACKS FASTOCHES — premium (bibliothèque)
  // =============================================
  {
    id: 19, cat: 'snack', premium: true,
    emoji: '🟢', nom: 'Truffes cajou-matcha-menthe',
    temps: '10 min + 1h frigo', calories: 120, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les noix de cajou sont riches en zinc et en magnésium. Le thé matcha est un puissant antioxydant qui améliore la concentration sans exciter comme le café.',
    ingredients: [
      '140g noix de cajou',
      '1,5 à 2 c.à.s sirop d\'agave',
      '½ à 1 c.à.c thé matcha en poudre',
      '¾ c.à.c eau',
      '5 à 8 gouttes d\'huile essentielle de menthe poivrée alimentaire'
    ],
    etapes: [
      'Réduisez les noix de cajou en poudre au mini-hachoir.',
      'Ajoutez le sirop d\'agave, le matcha et l\'eau. Mixez.',
      'Ajustez matcha et sirop selon goût. Incorporez les gouttes de menthe.',
      'Façonnez des truffes à la main et réfrigérez 1h.',
      'Se conservent 1 semaine en boîte hermétique au frais.'
    ]
  },
  {
    id: 20, cat: 'snack', premium: true,
    emoji: '🌀', nom: 'Cookies sarrasin-raisins-chocolat',
    temps: '35 min', calories: 175, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le sarrasin est l\'allié SJSR numéro 1 : riche en magnésium et rutine qui améliore la circulation sanguine dans les jambes. Une collation légère et rassasiante.',
    ingredients: [
      '1 bol de flocons de sarrasin',
      '½ tasse de farine de sarrasin',
      '2 c.à.s huile de sésame',
      '1 verre de raisins secs',
      '4 c.à.s pépites de chocolat noir',
      '1 poignée de noisettes ou amandes',
      '1 verre de jus de pomme'
    ],
    etapes: [
      'Mélangez les flocons, la farine et l\'huile de sésame.',
      'Incorporez les autres ingrédients en mélangeant à chaque ajout.',
      'Laissez reposer 20 min pendant que le four préchauffe à 180°C.',
      'Formez des petits tas à la cuillère sur une plaque huilée.',
      'Enfournez 15 min. Laissez refroidir avant de décoller.'
    ]
  },
  {
    id: 21, cat: 'snack', premium: true,
    emoji: '🫐', nom: 'Galettes croustillantes cranberries',
    temps: '40 min', calories: 155, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les cranberries sont riches en proanthocyanidines, des antioxydants qui réduisent l\'inflammation. Les amandes apportent de la vitamine E.',
    ingredients: [
      '1,5 tasse de farine de riz',
      '1 c.à.c arrow-root',
      '4 c.à.s sucre de canne',
      '2 c.à.s poudre d\'amande',
      '1 c.à.c cannelle',
      'Quelques gouttes d\'extrait de vanille',
      '1/3 tasse d\'huile de tournesol',
      '1 poignée de noisettes',
      '1 poignée de cranberries séchées',
      '1/4 tasse d\'eau tiède'
    ],
    etapes: [
      'Mélangez la farine, l\'arrow-root, le sucre, la poudre d\'amande, la cannelle et la vanille.',
      'Incorporez l\'huile pour "sabler" la pâte.',
      'Écrasez grossièrement les noisettes. Ajoutez noisettes et cranberries.',
      'Ajoutez l\'eau tiède et malaxez.',
      'Étalez la pâte et formez de petites galettes. Enfournez à 180°C pour 20-25 min.'
    ]
  },
  {
    id: 22, cat: 'snack', premium: true,
    emoji: '🍪', nom: 'Cookies poudre d\'amande fruits secs',
    temps: '15 min', calories: 165, diff: 'Très facile',
    tags: ['sg', 'sl'],
    benefices: 'La poudre d\'amande remplace totalement la farine. Riche en protéines végétales et en vitamine E. Ces cookies sont légers et se conservent plusieurs jours.',
    ingredients: [
      '150g poudre d\'amande',
      '90g cassonade',
      '2 blancs d\'œufs',
      'Quelques gouttes d\'extrait d\'amande amère',
      '½ sachet de levure chimique sans gluten',
      'Fruits secs au choix : noix, raisins secs, noisettes'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Battez les blancs d\'œufs avec la cassonade jusqu\'à consistance mousseuse.',
      'Ajoutez la poudre d\'amande, la levure et l\'extrait d\'amande amère.',
      'Formez des galettes sur une plaque, enfoncez quelques fruits secs.',
      'Enfournez 10 min. Laissez refroidir avant de décoller.'
    ]
  },
  {
    id: 23, cat: 'snack', premium: true,
    emoji: '🌰', nom: 'Biscuits noix-châtaigne purée d\'amande',
    temps: '25 min', calories: 180, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'La farine de châtaigne est douce, naturellement sucrée et sans gluten. La purée d\'amande donne une texture croquante à l\'extérieur et fondante à l\'intérieur.',
    ingredients: [
      '80g purée d\'amande',
      '80g sucre',
      '1 œuf',
      '1/3 c.à.c vanille liquide',
      '90g farine de châtaigne',
      '½ c.à.c levure chimique',
      '75g noix décortiquées'
    ],
    etapes: [
      'Mélangez purée d\'amande et sucre.',
      'Ajoutez l\'œuf et la vanille. Bien mélanger.',
      'Incorporez la farine de châtaigne et la levure.',
      'Hachez grossièrement les noix et ajoutez à la pâte.',
      'Formez un boudin, découpez des tranches de 0,5 cm.',
      'Enfournez à 180°C pour 12-15 min. Laissez refroidir sur une grille.'
    ]
  },
  {
    id: 24, cat: 'snack', premium: true,
    emoji: '🍌', nom: 'Cookies moelleux banane-pralin',
    temps: '15 min', calories: 160, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Sans œufs ! La banane lie la pâte et apporte du potassium et du tryptophane. Le pralin ajoute du magnésium et une saveur gourmande irrésistible.',
    ingredients: [
      '1 grosse banane bien mûre',
      '1 pincée de cannelle',
      '15g sucre',
      '200g farine de riz',
      '½ c.à.c bicarbonate',
      '1 grosse c.à.s pâte de pralin',
      '2 c.à.s huile neutre'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Écrasez la banane avec la cannelle et le sucre.',
      'Ajoutez la farine et le bicarbonate. Bien mélanger.',
      'Incorporez la pâte de pralin et l\'huile.',
      'Formez de petites boules et faites cuire 10 min — les cookies doivent rester moelleux.'
    ]
  },

  // =============================================
  // PETITS-DÉJEUNERS supplémentaires
  // =============================================
  {
    id: 25, cat: 'petit-dejeuner', premium: false,
    emoji: '🥞', nom: 'Porridge compote de pomme-sarrasin',
    temps: '30 min', calories: 310, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le sarrasin est la céréale anti-SJSR par excellence grâce à sa richesse en magnésium et rutine. La compote de pomme évite le pic de glycémie du matin.',
    ingredients: [
      '125g farine de sarrasin',
      '40g farine de riz complète',
      '60g flocons de millet',
      '1 c.à.c cannelle moulue',
      '100ml huile végétale',
      '100ml lait de riz',
      '150ml compote de pomme',
      '3 c.à.s sirop d\'érable',
      '1 grosse pomme en cubes',
      '30g graines de courge'
    ],
    etapes: [
      'Préchauffez le four à 190°C.',
      'Mélangez les ingrédients secs dans un saladier.',
      'Dans un autre bol, mélangez les liquides et les cubes de pomme.',
      'Combinez les deux préparations.',
      'Versez dans des moules à muffins. Saupoudrez de graines de courge.',
      'Cuisez 25-30 min jusqu\'à légère dorure. Dégustez tiède.'
    ]
  },
  {
    id: 26, cat: 'petit-dejeuner', premium: false,
    emoji: '🫚', nom: 'Pains d\'épices sans gluten au miel',
    temps: '30 min', calories: 280, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le miel est un sucre à index glycémique modéré qui nourrit le microbiote. Les épices (cannelle, gingembre) ont des propriétés anti-inflammatoires reconnues.',
    ingredients: [
      '250g farine de riz',
      '170g miel',
      '80g confiture d\'oranges amères',
      '12cl lait de riz',
      '25g sucre roux',
      '2 c.à.c mélange épices pain d\'épices',
      '1 c.à.c bicarbonate de soude',
      'Amandes effilées et sucre en grains pour la déco'
    ],
    etapes: [
      'Préchauffez le four à 150°C.',
      'Mélangez les ingrédients secs dans un grand saladier.',
      'Faites chauffer le lait de riz et versez-le chaud sur le miel et la confiture. Bien mélanger.',
      'Incorporez ce mélange aux ingrédients secs.',
      'Versez dans des petits moules à cake. Décorez avec les amandes et le sucre en grains.',
      'Cuisez 20-25 min à 150°C.'
    ]
  },
  {
    id: 27, cat: 'petit-dejeuner', premium: true,
    emoji: '🧇', nom: 'Madeleines citron purée d\'amande',
    temps: '20 min', calories: 240, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'La purée d\'amande remplace le beurre et apporte des graisses saines. Le zeste de citron est riche en vitamine C qui booste l\'absorption du fer.',
    ingredients: [
      '80g sucre de canne blond',
      '2 jaunes d\'œufs',
      '1 zeste de citron finement râpé',
      '30g purée d\'amandes blanches',
      '30g huile de pépins de raisin',
      '80g farine de riz',
      '2 blancs d\'œufs'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Mélangez énergiquement sucre et jaunes d\'œufs jusqu\'à blanchiment.',
      'Incorporez le zeste, la purée d\'amandes et l\'huile, puis la farine.',
      'Montez les blancs en neige ferme. Incorporez 1/3 pour détendre, puis le reste délicatement.',
      'Répartissez dans des moules à madeleines bien huilés.',
      'Enfournez 12-15 min selon la taille. Laissez refroidir sur grille.'
    ]
  },
  {
    id: 28, cat: 'petit-dejeuner', premium: true,
    emoji: '🥐', nom: 'Mini muffins banane-noisette nomades',
    temps: '20 min', calories: 220, diff: 'Très facile',
    tags: ['sg', 'sl'],
    benefices: 'Sans gluten, sans lait et sans œufs ! La banane lie la pâte naturellement. Les noisettes apportent des graisses saines et les abricots secs du fer facilement assimilable.',
    ingredients: [
      '1 petite banane',
      '1 c.à.s purée de cacahuètes',
      '1 c.à.s purée de noisettes',
      '3 noix grossièrement hachées',
      '6 noisettes hachées',
      '2 c.à.s farine de riz',
      '1 c.à.c levure chimique sans gluten',
      '2 c.à.s flocons de millet',
      '2 c.à.s lait de riz',
      '2 abricots secs en petits dés'
    ],
    etapes: [
      'Écrasez la banane et mélangez avec les purées de cacahuètes et noisettes.',
      'Ajoutez les noix et noisettes hachées.',
      'Versez la farine, la levure, les flocons de millet et le lait de riz.',
      'Incorporez les abricots secs.',
      'Répartissez dans 10 moules à mini muffins. Enfournez à 180°C pour 15 min.'
    ]
  },

  // =============================================
  // DÉJEUNERS supplémentaires
  // =============================================
  {
    id: 29, cat: 'dejeuner', premium: false,
    emoji: '🥕', nom: 'Biscuits salés carotte-roquette-pois chiche',
    temps: '45 min', calories: 290, diff: 'Moyen',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La farine de pois chiche est une excellente source de protéines végétales et de fer. La carotte apporte du bêta-carotène. Idéal en en-cas salé ou en accompagnement.',
    ingredients: [
      '1 belle carotte',
      '1 grosse poignée de roquette',
      '80g farine de riz',
      '70g farine de pois chiche',
      '2 pincées de sel',
      '½ c.à.c cumin en poudre',
      '3 c.à.s huile d\'olive',
      '4 à 5 cl d\'eau'
    ],
    etapes: [
      'Râpez finement la carotte et hachez la roquette.',
      'Mélangez les farines, le sel, le cumin, la carotte et la roquette.',
      'Ajoutez l\'eau et l\'huile. Pétrissez à la main.',
      'Formez une boule et réfrigérez 30 min.',
      'Étalez la pâte, découpez à l\'emporte-pièce et enfournez à 180°C pour 15-20 min.',
      'Sortez quand les biscuits se colorent joliment. Laissez refroidir.'
    ]
  },
  {
    id: 30, cat: 'dejeuner', premium: false,
    emoji: '🫘', nom: 'Mini muffins polenta-pois chiches',
    temps: '30 min', calories: 310, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Sans gluten, sans lait et sans œufs ! La polenta et les pois chiches forment un duo protéines + glucides complexes parfait pour tenir jusqu\'au soir.',
    ingredients: [
      '60g farine de pois chiches',
      '50g polenta',
      '1 c.à.s graines de tournesol (ou olives/tomates séchées)',
      '1 c.à.c levure chimique sans gluten',
      '1 c.à.c sucre',
      '8cl lait végétal',
      '3cl huile d\'olive',
      'Sel, poivre'
    ],
    etapes: [
      'Mélangez la farine de pois chiches, la polenta, la levure, le sucre et les graines. Salez, poivrez.',
      'Creusez un puits, versez le lait végétal et l\'huile. Mélangez — pâte épaisse.',
      'Versez une cuillère de pâte dans 6 moules à mini muffins bien remplis.',
      'Décorez de quelques graines.',
      'Enfournez à 180°C pour 20 min. Dégustez tiède ou froid.'
    ]
  },
  {
    id: 31, cat: 'dejeuner', premium: true,
    emoji: '🫙', nom: 'Cake carotte-curcuma-tomates séchées',
    temps: '40 min', calories: 340, diff: 'Moyen',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Curcuma + carotte + jus de citron = trio anti-inflammatoire puissant. La purée de patate douce remplace les œufs et apporte des fibres et du bêta-carotène.',
    ingredients: [
      '90g farine de riz complète',
      '70g farine de maïs',
      '40g poudre d\'amandes',
      '2 c.à.c curcuma en poudre',
      '½ sachet de levure chimique',
      '70g carottes râpées',
      '100g purée de patate douce',
      '6 tomates séchées à l\'huile d\'olive',
      '8 olives noires',
      '200ml lait végétal',
      '1 c.à.s jus de citron',
      'Piment d\'Espelette, coriandre fraîche'
    ],
    etapes: [
      'Préchauffez le four à 210°C.',
      'Râpez les carottes avec le jus de citron. Coupez tomates et olives en petits dés.',
      'Mélangez les ingrédients secs dans un saladier.',
      'Dans un autre bol, mélangez purée de patate douce, lait, tomates, olives et coriandre.',
      'Combinez les deux préparations et versez dans des moules à muffins.',
      'Cuisez à 210°C pendant 10 min, puis 13-15 min à 180°C. Laissez refroidir complètement.'
    ]
  },
  {
    id: 32, cat: 'dejeuner', premium: true,
    emoji: '🫓', nom: 'Petits pains danois sans gluten',
    temps: '35 min', calories: 320, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les graines de lin et sésame apportent des oméga-3 et du calcium végétal. La gomme de guar remplace le gluten en structurant la pâte naturellement.',
    ingredients: [
      '200g farine de riz complet',
      '50g farine de pois chiche',
      '30g graines de lin',
      '30g graines de sésame',
      '1 c.à.s gomme de guar',
      '1dl huile d\'olive',
      '½ dl eau',
      '¾ dl lait de riz',
      '1 pincée de sel',
      '1 c.à.s herbes de Provence'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Mélangez tous les ingrédients secs dans un bol.',
      'Incorporez l\'huile, l\'eau et le lait de riz, puis le sel et les herbes.',
      'Mélangez pour obtenir une pâte homogène qui ne colle pas trop.',
      'Remplissez des petits moules à muffins.',
      'Cuisez 20-25 min. Vérifiez la cuisson en tapant le dessous : si dur, c\'est prêt !'
    ]
  },

  // =============================================
  // DÎNERS supplémentaires
  // =============================================
  {
    id: 33, cat: 'diner', premium: false,
    emoji: '🎃', nom: 'Velouté potimarron-chocolat-cannelle',
    temps: '35 min', calories: 290, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le potimarron est riche en bêta-carotène et en potassium. Le chocolat noir ajoute des flavonoïdes anti-inflammatoires. Un dîner doux et réconfortant pour favoriser le sommeil.',
    ingredients: [
      '190g purée de potimarron (cuit)',
      '60g miel',
      '55g poudre d\'amande',
      '35g fécule de maïs',
      '30g farine de châtaigne',
      '60ml lait d\'amande',
      '30ml huile d\'olive',
      '½ c.à.c cannelle',
      '2 c.à.s chocolat noir haché',
      'Graines de courge pour la déco'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Mélangez les ingrédients secs : fécule, farine, cannelle, chocolat haché et poudre d\'amande.',
      'Dans un autre bol, mélangez la purée froide, le miel, le lait et l\'huile.',
      'Combinez les deux préparations. Versez dans des moules huilés.',
      'Saupoudrez de graines de courge. Cuisez 25 min à 180°C.',
      'Vérifiez la cuisson avec la lame d\'un couteau — doit ressortir sèche.'
    ]
  },
  {
    id: 34, cat: 'diner', premium: false,
    emoji: '🥗', nom: 'Muffins provençaux olives-romarin',
    temps: '35 min', calories: 260, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les olives noires sont riches en graisses mono-insaturées anti-inflammatoires. Le romarin est un puissant antioxydant. Un dîner léger et méditerranéen.',
    ingredients: [
      '125g farine de riz',
      '½ c.à.c bicarbonate de soude',
      '125g lait de riz',
      '1 c.à.s vinaigre de cidre',
      '70g huile d\'olive',
      '15g tomates séchées en petits cubes',
      '6 olives noires en petits cubes',
      '1 c.à.s romarin haché',
      '1 c.à.s ail en granulé',
      'Poivre au goût'
    ],
    etapes: [
      'Mélangez le lait, le vinaigre de cidre et l\'huile dans un bol.',
      'Mélangez la farine, le bicarbonate, les tomates, olives, romarin et ail dans un saladier.',
      'Versez les liquides sur les solides. Mélangez sans pétrir.',
      'Versez dans 11 mini moules à muffins huilés.',
      'Cuisez 25 min à 180°C. Emportez partout !'
    ]
  },
  {
    id: 35, cat: 'diner', premium: true,
    emoji: '🎂', nom: 'Gâteau carotte-noix sans gluten',
    temps: '90 min', calories: 420, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Les carottes râpées fraîches apportent bêta-carotène et fibres. Les noix sont riches en oméga-3 d\'origine végétale. Un gâteau qui se prépare à l\'avance.',
    ingredients: [
      '1 tasse farine de riz',
      '1 tasse poudre d\'amande',
      '½ tasse fécule de maïs',
      '1 c.à.c bicarbonate',
      '2 c.à.c cannelle',
      '4 œufs',
      '1 tasse huile végétale',
      '1 tasse sucre de canne',
      '1 tasse cassonade',
      '1 tasse noix concassées',
      '250g carottes râpées'
    ],
    etapes: [
      'Mélangez les ingrédients secs : farines, bicarbonate, sel, cannelle.',
      'Battez dans un autre bol l\'huile, les œufs, le sucre et la cassonade pendant 5 min.',
      'Ajoutez progressivement le mélange sec aux liquides.',
      'Incorporez les noix puis les carottes râpées.',
      'Versez dans un grand moule graissé.',
      'Cuisez à 180°C pendant 60 min puis à 200°C pendant 20 min supplémentaires.'
    ]
  },
  {
    id: 36, cat: 'diner', premium: true,
    emoji: '🍊', nom: 'Gâteau chocolat-jus d\'orange sans beurre',
    temps: '40 min', calories: 310, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Sans œufs, sans beurre ! Le jus d\'orange apporte de la vitamine C qui améliore l\'humeur. Le cacao est riche en flavonoïdes anti-inflammatoires et en magnésium.',
    ingredients: [
      '200g farine sans gluten',
      '100g sucre muscovado',
      '3 c.à.s cacao en poudre',
      '1 sachet de levure chimique sans gluten',
      '1 c.à.c cannelle',
      '8cl huile de noisettes',
      '20cl jus d\'orange pur'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Mélangez la farine, le sucre, le cacao, la levure et la cannelle.',
      'Ajoutez l\'huile et le jus d\'orange.',
      'Mélangez à la cuillère en bois jusqu\'à consistance homogène.',
      'Versez dans un moule et cuisez 30-35 min.'
    ]
  },
  {
    id: 37, cat: 'diner', premium: true,
    emoji: '🍌', nom: 'Mini cakes banane-chocolat sans œufs',
    temps: '30 min', calories: 350, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les bananes mûres lient la pâte sans œufs et apportent du potassium. Le chocolat noir est anti-inflammatoire. Une recette ultra moelleuse idéale pour finir les bananes trop mûres.',
    ingredients: [
      '3 bananes mûres bio',
      '1 verre de sucre (100g environ)',
      '2 verres de farine de riz bio',
      '1 sachet de levure chimique sans gluten',
      '10cl huile d\'olive',
      '1 bouchon de rhum à la vanille',
      '80g chocolat noir en petits morceaux'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Écrasez les bananes à la fourchette.',
      'Ajoutez le sucre et mélangez.',
      'Mélangez farine et levure, puis incorporez progressivement à la pâte.',
      'Ajoutez l\'huile, le rhum vanillé et les morceaux de chocolat.',
      'Versez dans des moules. Cuisez 20 min jusqu\'à légère dorure. Bon tiède ou froid !'
    ]
  },

  // =============================================
  // RECETTES SÉRÉNITÉ SJSR/TDAH — Issues de la
  // bibliothèque Autour Du Naturel adaptée
  // =============================================

  // --- ENTRÉES / STARTERS ---
  {
    id: 38, cat: 'dejeuner', premium: false,
    emoji: '🍆', nom: 'Caviar d\'aubergines au tahini',
    temps: '30 min', calories: 190, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le tahini (crème de sésame) est riche en calcium et magnésium. L\'aubergine grillée est alcalinisante et riche en antioxydants. Le citron booste l\'absorption du fer.',
    ingredients: [
      '2 belles aubergines',
      '2 c.à.s tahini (crème de sésame)',
      '2 gousses d\'ail',
      '1 citron (jus)',
      '2 c.à.s huile d\'olive',
      'Sel Santé, cumin, persil frais'
    ],
    etapes: [
      'Percez les aubergines et faites-les griller entières au four à 220°C pendant 20-25 min.',
      'Laissez refroidir, puis pelez et égouttez la chair.',
      'Mixez la chair avec le tahini, l\'ail pressé, le jus de citron et l\'huile d\'olive.',
      'Assaisonnez avec le Sel Santé et le cumin.',
      'Servez frais avec du persil haché et un filet d\'huile d\'olive.'
    ]
  },
  {
    id: 39, cat: 'dejeuner', premium: false,
    emoji: '🥕', nom: 'Verrines de carottes au cumin',
    temps: '35 min', calories: 160, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Carottes riches en bêta-carotène antioxydant. Le cumin est anti-inflammatoire. La crème de riz apporte des glucides doux. Parfait en entrée légère ou en snack.',
    ingredients: [
      '1 kg de carottes',
      '1 oignon',
      '15cl crème de riz',
      '2 c.à.s huile d\'olive',
      '1 c.à.c cumin moulu',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Épluchez et coupez les carottes en rondelles.',
      'Faites revenir l\'oignon émincé dans l\'huile d\'olive jusqu\'à dorure.',
      'Ajoutez les carottes, le cumin, le Sel Santé et le poivre.',
      'Cuisez à feu doux 15 min — les carottes doivent rester légèrement fermes.',
      'Mixez et incorporez progressivement la crème de riz.',
      'Versez dans des verrines. Servez bien frais.'
    ]
  },
  {
    id: 40, cat: 'dejeuner', premium: false,
    emoji: '🥗', nom: 'Tartare de betteraves-graines de tournesol',
    temps: '15 min', calories: 175, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La betterave est riche en nitrates qui améliorent la circulation sanguine — excellente pour le SJSR. Les graines de tournesol apportent du magnésium et de la vitamine E.',
    ingredients: [
      '3 betteraves cuites',
      '2 c.à.s graines de tournesol toastées',
      '1 échalote',
      '2 c.à.s huile d\'olive',
      '1 c.à.s vinaigre de cidre',
      'Persil frais, sel Santé, poivre'
    ],
    etapes: [
      'Coupez les betteraves en petits cubes.',
      'Émincez finement l\'échalote.',
      'Mélangez betteraves, échalote, huile, vinaigre.',
      'Assaisonnez avec le Sel Santé et le poivre.',
      'Parsemez de graines de tournesol toastées et de persil haché.'
    ]
  },
  {
    id: 41, cat: 'dejeuner', premium: true,
    emoji: '🐟', nom: 'Tartare de saumon-avocat-gingembre',
    temps: '15 min', calories: 340, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Triple action anti-SJSR : oméga-3 du saumon, graisses saines de l\'avocat, gingembre anti-inflammatoire puissant. Le citron optimise l\'absorption du fer.',
    ingredients: [
      '200g saumon très frais (sushi-grade)',
      '1 avocat mûr',
      '1 cm gingembre frais râpé',
      '1 citron vert (jus + zeste)',
      '1 c.à.s tamari (sg)',
      'Ciboulette, graines de sésame'
    ],
    etapes: [
      'Coupez le saumon en petits cubes réguliers.',
      'Coupez l\'avocat en cubes de même taille.',
      'Mélangez délicatement avec le gingembre, le jus de citron vert et le tamari.',
      'Dressez dans des cercles. Parsemez de ciboulette et graines de sésame.',
      'Servez immédiatement bien frais.'
    ]
  },
  {
    id: 42, cat: 'dejeuner', premium: true,
    emoji: '🥬', nom: 'Soupe froide concombre-menthe-avocat',
    temps: '10 min', calories: 200, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Soupe alcalinisante et hydratante. L\'avocat apporte des graisses anti-inflammatoires. La menthe fraîche est digestive et apaisante. Idéale en été contre les jambes lourdes.',
    ingredients: [
      '2 concombres',
      '1 avocat',
      '1 citron vert',
      '1 bouquet de menthe fraîche',
      '1 yaourt de soja nature',
      'Sel Santé, glaçons'
    ],
    etapes: [
      'Pelez et coupez les concombres en morceaux.',
      'Mixez concombre, avocat, jus de citron, menthe et yaourt de soja.',
      'Assaisonnez avec le Sel Santé.',
      'Réfrigérez 30 min minimum avant de servir avec des glaçons.'
    ]
  },

  // --- PLATS PRINCIPAUX ---
  {
    id: 43, cat: 'dejeuner', premium: false,
    emoji: '🍗', nom: 'Poulet patate douce sauge',
    temps: '40 min', calories: 420, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'La patate douce à index glycémique bas fournit une énergie stable. La sauge est anti-inflammatoire. Le poulet apporte des protéines et du tryptophane précurseur de sérotonine.',
    ingredients: [
      '2 blancs de poulet',
      '2 patates douces',
      '6 feuilles de sauge fraîche',
      '2 c.à.s huile d\'olive',
      '1 citron',
      'Sel Santé, poivre, ail'
    ],
    etapes: [
      'Préchauffez le four à 200°C.',
      'Coupez les patates douces en cubes, enrobez d\'huile d\'olive, sauge et Sel Santé.',
      'Enfournez les patates 25 min.',
      'Faites dorer les blancs de poulet à la poêle 4 min chaque côté avec ail et huile.',
      'Servez le poulet sur les patates douces rôties avec un jus de citron.'
    ]
  },
  {
    id: 44, cat: 'dejeuner', premium: false,
    emoji: '🐟', nom: 'Saumon mi-cuit gingembre-lin',
    temps: '20 min', calories: 380, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Recette phare anti-SJSR : double dose d\'oméga-3 (saumon + lin). Le gingembre est le plus puissant anti-inflammatoire naturel. À manger 2-3x/semaine.',
    ingredients: [
      '150g pavé de saumon',
      '1 c.à.c graines de lin moulues',
      '1 cm gingembre frais râpé',
      '1/2 citron',
      '1 c.à.s huile d\'olive',
      '100g épinards frais',
      'Persil frais, Sel Santé'
    ],
    etapes: [
      'Badigeonnez le saumon de gingembre râpé et d\'huile d\'olive.',
      'Cuisez à la poêle 3-4 min côté peau, 2 min côté chair — le cœur doit rester nacré.',
      'Faites tomber les épinards à la poêle 2 min à l\'huile d\'olive.',
      'Dressez : épinards, saumon, graines de lin moulues, persil frais, jus de citron.'
    ]
  },
  {
    id: 45, cat: 'dejeuner', premium: true,
    emoji: '🐑', nom: 'Agneau confit polenta-pistaches',
    temps: '2h', calories: 520, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'L\'agneau est la viande la plus riche en fer héminique — combat directement la fatigue SJSR. Les pistaches apportent du magnésium. Un plat du dimanche thérapeutique.',
    ingredients: [
      '400g épaule d\'agneau',
      '150g polenta de maïs',
      '500ml bouillon de légumes',
      '50g pistaches',
      'Romarin, ail, huile d\'olive',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Préchauffez le four à 160°C. Faites dorer l\'agneau à la cocotte avec ail et romarin.',
      'Couvrez et enfournez 1h30 à 1h45 — la viande doit se détacher à la fourchette.',
      'Préparez la polenta en versant progressivement dans le bouillon chaud. Remuez 5 min.',
      'Effilochez l\'agneau à la fourchette.',
      'Dressez la polenta, posez l\'agneau, parsemez de pistaches concassées.'
    ]
  },
  {
    id: 46, cat: 'dejeuner', premium: true,
    emoji: '🥘', nom: 'Quinoa-légumes rôtis-grenade',
    temps: '35 min', calories: 390, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le quinoa est une protéine complète rare dans le végétal. La grenade est l\'un des fruits les plus antioxydants. Les légumes rôtis concentrent leurs nutriments.',
    ingredients: [
      '200g quinoa',
      '1 courgette',
      '1 poivron rouge',
      '1 aubergine',
      'Graines d\'une demi-grenade',
      'Huile d\'olive, Sel Santé',
      'Menthe fraîche, jus de citron'
    ],
    etapes: [
      'Cuisez le quinoa dans le double de son volume d\'eau 15 min.',
      'Coupez les légumes en cubes, enrobez d\'huile et de Sel Santé.',
      'Rôtissez à l\'air fryer 200°C 18 min ou au four 220°C 25 min.',
      'Mélangez quinoa, légumes rôtis, grenade, menthe et citron.',
      'Servez tiède ou froid selon saison.'
    ]
  },
  {
    id: 47, cat: 'dejeuner', premium: true,
    emoji: '🍝', nom: 'Penne coulis poivrons-féta végane',
    temps: '30 min', calories: 430, diff: 'Facile',
    tags: ['sg'],
    benefices: 'Le poivron rouge est l\'un des légumes les plus riches en vitamine C — booste l\'absorption du fer des pâtes. La feta apporte du calcium. Choisissez des pâtes sans gluten.',
    ingredients: [
      '200g penne sans gluten',
      '3 poivrons rouges',
      '100g feta (ou tofu ferme)',
      '2 gousses d\'ail',
      '2 c.à.s huile d\'olive',
      'Basilic frais, Sel Santé'
    ],
    etapes: [
      'Grilllez les poivrons au four 25 min à 220°C, puis pelez et épépinez.',
      'Mixez les poivrons avec l\'ail, l\'huile d\'olive et le Sel Santé.',
      'Cuisez les pâtes al dente selon le paquet.',
      'Mélangez pâtes et coulis de poivrons.',
      'Émiettez la feta par-dessus avec du basilic frais.'
    ]
  },

  // --- SOUPES ---
  {
    id: 48, cat: 'diner', premium: false,
    emoji: '🥣', nom: 'Soupe de lentilles-épinards-curcuma',
    temps: '30 min', calories: 310, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Binôme roi anti-SJSR : lentilles (fer) + épinards (fer + calcium) + citron (vitamine C) = absorption du fer maximisée. Le curcuma renforce l\'effet anti-inflammatoire.',
    ingredients: [
      '200g lentilles vertes',
      '150g épinards frais ou surgelés',
      '1 oignon',
      '2 gousses d\'ail',
      '1 c.à.c curcuma',
      '½ c.à.c poivre noir',
      '1 citron',
      'Huile d\'olive, Sel Santé'
    ],
    etapes: [
      'Rincez les lentilles. Faites revenir oignon et ail dans l\'huile d\'olive.',
      'Ajoutez le curcuma et le poivre noir, remuez 1 min.',
      'Ajoutez les lentilles et couvrez de 800ml d\'eau. Cuisez 20 min.',
      'Ajoutez les épinards en fin de cuisson. Remuez 2 min.',
      'Assaisonnez avec le Sel Santé et terminez avec un généreux jus de citron.'
    ]
  },
  {
    id: 49, cat: 'diner', premium: false,
    emoji: '🥕', nom: 'Velouté panais-poire-gingembre',
    temps: '35 min', calories: 240, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le panais est riche en potassium et vitamine C. La poire apporte de la douceur et des fibres prébiotiques pour le microbiote. Le gingembre est anti-nauséeux et anti-inflammatoire.',
    ingredients: [
      '3 panais',
      '2 poires mûres',
      '1 cm gingembre frais',
      '1 oignon',
      '600ml bouillon de légumes',
      '10cl crème de coco',
      'Sel Santé, graines de courge'
    ],
    etapes: [
      'Épluchez et coupez panais et poires en morceaux.',
      'Faites revenir l\'oignon dans l\'huile d\'olive.',
      'Ajoutez panais, poires, gingembre et bouillon. Cuisez 20 min.',
      'Mixez finement avec la crème de coco.',
      'Assaisonnez avec le Sel Santé. Parsemez de graines de courge toastées.'
    ]
  },
  {
    id: 50, cat: 'diner', premium: false,
    emoji: '🌿', nom: 'Soupe verte épinards-poireaux-petits pois',
    temps: '25 min', calories: 210, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Soupe chlorophylle : triple source de fer végétal (épinards, petits pois, poireaux). Les poireaux sont prébiotiques pour le microbiote. Terminer avec du persil frais pour la dopamine.',
    ingredients: [
      '2 poireaux',
      '150g épinards surgelés',
      '150g petits pois surgelés',
      '2 pommes de terre',
      '700ml eau',
      'Persil frais, Sel Santé'
    ],
    etapes: [
      'Émincez les poireaux et faites-les revenir dans l\'huile d\'olive.',
      'Ajoutez les pommes de terre en dés et couvrez d\'eau.',
      'Ajoutez les petits pois et les épinards. Cuisez 15 min.',
      'Mixez et assaisonnez avec le Sel Santé.',
      'Parsemez de persil frais avant de servir.'
    ]
  },
  {
    id: 51, cat: 'diner', premium: true,
    emoji: '🎃', nom: 'Velouté potimarron-châtaignes-noisettes',
    temps: '45 min', calories: 290, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le potimarron est riche en bêta-carotène et potassium. Les châtaignes apportent du magnésium et des glucides complexes. Un dîner doux et alcalinisant parfait pour le soir.',
    ingredients: [
      '500g potimarron',
      '150g châtaignes cuites',
      '1 oignon',
      '600ml bouillon de légumes',
      '10cl lait d\'avoine',
      'Noisettes toastées, Sel Santé'
    ],
    etapes: [
      'Coupez le potimarron en cubes (avec la peau si bio).',
      'Faites revenir l\'oignon, ajoutez le potimarron et les châtaignes.',
      'Couvrez de bouillon et cuisez 25 min à feu doux.',
      'Mixez avec le lait d\'avoine jusqu\'à consistance soyeuse.',
      'Assaisonnez avec le Sel Santé. Parsemez de noisettes toastées concassées.'
    ]
  },
  {
    id: 52, cat: 'diner', premium: true,
    emoji: '🐟', nom: 'Velouté poisson-fenouil-safran',
    temps: '40 min', calories: 310, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Le poisson blanc est une source de protéines légères faciles à digérer le soir. Le fenouil est antispasmodique et favorise le sommeil. Le safran a des propriétés antidépressives reconnues.',
    ingredients: [
      '300g dos de cabillaud ou lieu',
      '1 bulbe de fenouil',
      '1 oignon',
      '1 dose de safran',
      '600ml bouillon de poisson ou légumes',
      '10cl crème de riz',
      'Sel Santé, citron'
    ],
    etapes: [
      'Émincez le fenouil et l\'oignon. Faites revenir à l\'huile d\'olive.',
      'Ajoutez le safran et le bouillon. Cuisez 15 min.',
      'Ajoutez le poisson en morceaux et cuisez 8 min à feu doux.',
      'Mixez partiellement (garder quelques morceaux de poisson).',
      'Incorporez la crème de riz. Assaisonnez et servez avec du citron.'
    ]
  },
  {
    id: 53, cat: 'diner', premium: true,
    emoji: '🌽', nom: 'Soupe de maïs-poivrons doux-coriandre',
    temps: '25 min', calories: 240, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le maïs apporte des glucides à index glycémique modéré. Les poivrons rouges sont parmi les légumes les plus riches en vitamine C. La coriandre est un détoxifiant naturel.',
    ingredients: [
      '400g maïs doux (surgelé)',
      '2 poivrons rouges rôtis',
      '1 oignon',
      '500ml bouillon de légumes',
      '10cl lait de coco',
      'Coriandre fraîche, Sel Santé'
    ],
    etapes: [
      'Faites revenir l\'oignon dans l\'huile d\'olive.',
      'Ajoutez le maïs, les poivrons et le bouillon. Cuisez 10 min.',
      'Mixez avec le lait de coco.',
      'Assaisonnez avec le Sel Santé. Servez avec de la coriandre fraîche hachée.'
    ]
  },

  // --- DESSERTS SJSR ---
  {
    id: 54, cat: 'snack', premium: false,
    emoji: '🍫', nom: 'Mousse chocolat noir-cerises au piment',
    temps: '15 min + 2h frigo', calories: 230, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Le chocolat 85% est riche en magnésium et flavonoïdes. Les cerises réduisent les marqueurs de l\'inflammation (études spécifiques SJSR). Le piment améliore la circulation sanguine dans les jambes.',
    ingredients: [
      '100g chocolat noir 85% min',
      '3 blancs d\'œufs',
      '100g cerises fraîches ou surgelées',
      '1 pincée de piment de Cayenne',
      '1 c.à.c extrait de vanille'
    ],
    etapes: [
      'Faites fondre le chocolat au bain-marie. Laissez tiédir.',
      'Montez les blancs en neige ferme.',
      'Incorporez délicatement le chocolat fondu aux blancs en neige.',
      'Ajoutez la vanille et le piment de Cayenne.',
      'Répartissez dans des verrines avec les cerises. Réfrigérez 2h minimum.'
    ]
  },
  {
    id: 55, cat: 'snack', premium: false,
    emoji: '🍑', nom: 'Moelleux pêches-noisettes farine de riz',
    temps: '40 min', calories: 280, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les noisettes sont riches en vitamine E, puissant antioxydant protecteur. La farine de riz est naturellement sans gluten et légère. Les pêches apportent du bêta-carotène.',
    ingredients: [
      '3 pêches mûres',
      '150g farine de riz',
      '80g poudre de noisettes',
      '2 œufs',
      '80g sucre de canne',
      '60ml huile d\'olive douce',
      '1 sachet de levure sans gluten'
    ],
    etapes: [
      'Préchauffez le four à 170°C.',
      'Fouettez les œufs avec le sucre jusqu\'à blanchiment.',
      'Ajoutez l\'huile, la farine, les noisettes et la levure.',
      'Pelez et coupez les pêches en tranches. Incorporez-les à la pâte.',
      'Versez dans un moule. Enfournez 30-35 min. Vérifiez avec la lame d\'un couteau.'
    ]
  },
  {
    id: 56, cat: 'snack', premium: true,
    emoji: '🫐', nom: 'Sorbet Ninja Creami baies-gingembre',
    temps: '5 min + 24h congélo', calories: 120, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les fruits rouges sont les plus riches en antioxydants (anthocyanes) qui réduisent l\'inflammation. Le gingembre amplifie l\'effet. Un snack TV sain et délicieux.',
    ingredients: [
      '300g fruits rouges mélangés (surgelés)',
      '1 banane',
      '1 c.à.c gingembre frais râpé',
      '2 c.à.s sirop d\'agave',
      '100ml lait de coco'
    ],
    etapes: [
      'Mixez tous les ingrédients ensemble.',
      'Versez dans le pot Ninja Creami. Congelez 24h.',
      'Sortez du congélateur 5 min avant. Passez en mode "Sorbet".',
      'Servez immédiatement dans des verrines.'
    ]
  },
  {
    id: 57, cat: 'snack', premium: true,
    emoji: '🍐', nom: 'Poires rôties au four miel-cardamome',
    temps: '25 min', calories: 180, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les poires sont riches en fibres prébiotiques bénéfiques pour le microbiote. La cardamome est digestive et anti-inflammatoire. Le miel est un sucre doux à IG modéré.',
    ingredients: [
      '4 poires mûres mais fermes',
      '2 c.à.s miel',
      '½ c.à.c cardamome moulue',
      '½ c.à.c cannelle',
      '2 c.à.s amandes effilées',
      '1 citron (jus)'
    ],
    etapes: [
      'Préchauffez le four à 190°C.',
      'Coupez les poires en deux et retirez le cœur.',
      'Mélangez le miel, la cardamome, la cannelle et le jus de citron.',
      'Disposez les poires côté coupé vers le haut. Arrosez de la préparation.',
      'Parsemez d\'amandes effilées. Enfournez 18-20 min jusqu\'à légère caramélisation.'
    ]
  },
  {
    id: 58, cat: 'snack', premium: true,
    emoji: '🫘', nom: 'Crème de haricots blancs-tahini-herbes',
    temps: '10 min', calories: 210, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les haricots blancs sont riches en fer et en magnésium. Le tahini apporte du calcium végétal. Parfait en tartinade sur galettes de riz ou en accompagnement de légumes crus.',
    ingredients: [
      '400g haricots blancs cuits (boîte)',
      '2 c.à.s tahini',
      '2 gousses d\'ail',
      '1 citron (jus)',
      '2 c.à.s huile d\'olive',
      'Persil, ciboulette, Sel Santé'
    ],
    etapes: [
      'Rincez et égouttez les haricots blancs.',
      'Mixez avec le tahini, l\'ail pressé, le jus de citron et l\'huile d\'olive.',
      'Ajoutez un peu d\'eau pour obtenir la consistance désirée.',
      'Assaisonnez avec le Sel Santé. Incorporez les herbes fraîches.',
      'Servez avec des galettes de riz ou des bâtonnets de légumes.'
    ]
  },

  // --- SAUCES & CONDIMENTS ---
  {
    id: 59, cat: 'dejeuner', premium: false,
    emoji: '🫒', nom: 'Sauce vierge tomates-basilic-olive',
    temps: '10 min', calories: 110, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le lycopène des tomates est un antioxydant puissant. L\'huile d\'olive extra-vierge contient de l\'oléocanthal, un anti-inflammatoire naturel. La sauce vierge se prépare en 10 min.',
    ingredients: [
      '4 tomates mûres',
      '1 bouquet de basilic frais',
      '4 c.à.s huile d\'olive extra-vierge',
      '1 échalote',
      '1 citron (jus)',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Mondez les tomates (ébouillantez 30 sec puis pelez).',
      'Coupez-les en petits dés et égouttez-les.',
      'Mélangez avec l\'échalote émincée, l\'huile et le jus de citron.',
      'Assaisonnez avec le Sel Santé et le poivre.',
      'Ajoutez le basilic ciselé au dernier moment.'
    ]
  },
  {
    id: 60, cat: 'dejeuner', premium: true,
    emoji: '🌿', nom: 'Sauce au pourpier-yaourt végétal-citron',
    temps: '5 min', calories: 90, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le pourpier est l\'une des rares plantes riches en oméga-3 végétaux — exceptionnel pour le SJSR. Le yaourt de soja apporte des probiotiques bénéfiques pour le microbiote intestinal.',
    ingredients: [
      '1 bouquet de pourpier (ou épinards à défaut)',
      '150g yaourt de soja nature',
      '1 citron (jus)',
      '1 gousse d\'ail',
      '2 c.à.s huile d\'olive',
      'Sel Santé'
    ],
    etapes: [
      'Mixez le pourpier avec le yaourt de soja, le jus de citron et l\'ail.',
      'Incorporez l\'huile d\'olive progressivement.',
      'Assaisonnez avec le Sel Santé.',
      'Servez frais sur poisson vapeur, quinoa ou légumes rôtis.'
    ]
  },
  {
    id: 61, cat: 'dejeuner', premium: true,
    emoji: '🥜', nom: 'Sauce satay cacahuète-gingembre-tamari',
    temps: '5 min', calories: 180, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La cacahuète est riche en protéines et magnésium. Le gingembre et le tamari ajoutent une action anti-inflammatoire. Cette sauce versatile accompagne riz, poulet ou légumes vapeur.',
    ingredients: [
      '4 c.à.s beurre de cacahuète',
      '2 c.à.s tamari (sg)',
      '1 cm gingembre frais râpé',
      '1 citron vert (jus)',
      '1 c.à.c sirop d\'agave',
      '4 c.à.s eau chaude'
    ],
    etapes: [
      'Mélangez le beurre de cacahuète avec le tamari, le gingembre et le jus de citron vert.',
      'Ajoutez le sirop d\'agave.',
      'Diluez progressivement avec l\'eau chaude jusqu\'à la consistance désirée.',
      'Ajustez l\'assaisonnement. Conservez au frigo jusqu\'à 5 jours.'
    ]
  },

  // --- PETIT-DÉJEUNERS SJSR SUPPLÉMENTAIRES ---
  {
    id: 62, cat: 'petit-dejeuner', premium: false,
    emoji: '🫐', nom: 'Smoothie bowl fruits rouges-chia-granola',
    temps: '10 min', calories: 350, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les fruits rouges sont les champions des antioxydants anti-inflammatoires. Les graines de chia apportent des oméga-3. Le granola donne des glucides lents pour une énergie stable toute la matinée.',
    ingredients: [
      '200g fruits rouges (surgelés ok)',
      '1 banane congelée',
      '100ml lait d\'amande',
      '2 c.à.s graines de chia',
      '3 c.à.s granola sans gluten',
      '1 c.à.c gingembre frais râpé'
    ],
    etapes: [
      'Mixez les fruits rouges, la banane congelée et le lait d\'amande.',
      'Versez dans un bol épais.',
      'Parsemez de graines de chia, granola et gingembre râpé.',
      'Servez immédiatement avant que le mélange décongèle.'
    ]
  },
  {
    id: 63, cat: 'petit-dejeuner', premium: false,
    emoji: '🌰', nom: 'Bouillie de châtaigne-millet-noisettes',
    temps: '15 min', calories: 330, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La châtaigne est riche en magnésium et en glucides complexes à IG bas. Le millet est l\'une des céréales les plus riches en magnésium. Parfait petit-déjeuner SJSR pour les jambes calmes.',
    ingredients: [
      '50g farine de châtaigne',
      '30g flocons de millet',
      '300ml lait de noisette',
      '1 c.à.c miel',
      '1 pincée de cannelle',
      '1 c.à.s noisettes torréfiées concassées'
    ],
    etapes: [
      'Portez le lait de noisette à frémissement dans une casserole.',
      'Versez la farine de châtaigne et les flocons de millet en pluie en fouettant.',
      'Cuisez à feu doux 8 min en remuant constamment.',
      'Sucrez au miel, ajoutez la cannelle.',
      'Versez dans un bol, parsemez de noisettes torréfiées concassées.'
    ]
  },
  {
    id: 64, cat: 'petit-dejeuner', premium: true,
    emoji: '🥚', nom: 'Œufs cocotte épinards-curcuma',
    temps: '20 min', calories: 280, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Les œufs sont riches en vitamine B12 et en fer. Les épinards doublent l\'apport en fer. Le curcuma + poivre = absorption maximisée de tous les nutriments. Un brunch thérapeutique.',
    ingredients: [
      '2 œufs bio',
      '100g épinards frais ou surgelés',
      '1 c.à.c curcuma',
      '½ c.à.c poivre noir',
      '2 c.à.s huile d\'olive',
      'Sel Santé, persil frais'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Faites tomber les épinards dans l\'huile d\'olive avec le curcuma et le poivre.',
      'Répartissez dans 2 ramequins huilés.',
      'Cassez un œuf dans chaque ramequin. Assaisonnez avec le Sel Santé.',
      'Enfournez 10-12 min — le blanc doit être pris et le jaune encore coulant.',
      'Parsemez de persil frais avant de servir.'
    ]
  },
  {
    id: 65, cat: 'petit-dejeuner', premium: true,
    emoji: '🫚', nom: 'Lait d\'or curcuma-cannelle-gingembre',
    temps: '5 min', calories: 120, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La boisson anti-SJSR du soir par excellence. Le curcuma + poivre = biodisponibilité maximale. La cannelle régule la glycémie nocturne. Le gingembre apaise les jambes. À boire 30 min avant le coucher.',
    ingredients: [
      '250ml lait de millet ou d\'avoine',
      '1 c.à.c curcuma moulu',
      '½ c.à.c cannelle moulue',
      '¼ c.à.c gingembre moulu (ou frais râpé)',
      '1 pincée de poivre noir',
      '1 c.à.c miel (optionnel)'
    ],
    etapes: [
      'Chauffez le lait végétal à feu doux sans bouillir.',
      'Ajoutez le curcuma, la cannelle, le gingembre et le poivre noir.',
      'Fouettez bien pour dissoudre les épices.',
      'Sucrez légèrement au miel si désiré.',
      'Buvez chaud 30 min avant le coucher — c\'est votre rituel sérénité 🌙'
    ]
  }
];

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
  'dejeuner':       () => RECETTES.filter(r => r.cat === 'dejeuner'),
  'diner':          () => RECETTES.filter(r => r.cat === 'diner'),
  'snack':          () => RECETTES.filter(r => r.cat === 'snack'),
};

// ============================
// STATE
// ============================
let profile       = {};
let journal       = {};
let agenda        = {};
let isPremium     = false;
let currentCatFilter = '';
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
  profile   = JSON.parse(localStorage.getItem('flora_profile') || '{}');
  journal   = JSON.parse(localStorage.getItem('flora_journal') || '{}');
  agenda    = JSON.parse(localStorage.getItem('flora_agenda')  || '{}');
  isPremium = localStorage.getItem('flora_premium') === 'true';
}

function saveState() {
  localStorage.setItem('flora_profile', JSON.stringify(profile));
  localStorage.setItem('flora_journal',  JSON.stringify(journal));
  localStorage.setItem('flora_agenda',   JSON.stringify(agenda));
}

// ============================
// ONBOARDING
// ============================
function nextStep(step) {
  document.querySelectorAll('.onboard-step').forEach(el => el.classList.remove('active'));
  document.querySelector(`[data-step="${step}"]`).classList.add('active');
}

function saveOnboarding() {
  const name = document.getElementById('ob-name').value.trim();
  if (!name) { document.getElementById('ob-name').focus(); return; }

  profile = {
    name,
    goal:      document.getElementById('ob-goal').value,
    sansGluten: document.getElementById('ob-sg').checked,
    sansLactose: document.getElementById('ob-sl').checked,
    vegetarien:  document.getElementById('ob-sv').checked,
  };

  saveState();
  document.getElementById('onboarding').classList.add('hidden');
  initApp();
}

// ============================
// APP INIT
// ============================
function initApp() {
  document.getElementById('app').classList.remove('hidden');
  updateDashboard();
  renderRecettes();
  renderAgenda();
  loadProfil();
  setJournalDate();

  // Recette du jour (aléatoire parmi gratuites)
  const free = RECETTES.filter(r => !r.premium);
  const rdj  = free[new Date().getDate() % free.length];
  document.getElementById('recette-du-jour').textContent = rdj.nom;
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

  const target = document.getElementById(`page-${page}`);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('active');
  }

  const navBtn = document.querySelector(`[data-page="${page}"]`);
  if (navBtn) navBtn.classList.add('active');

  if (page === 'journal')    setJournalDate();
  if (page === 'recettes')   renderRecettes();
  if (page === 'agenda')     renderAgenda();
  if (page === 'profil')     loadProfil();
  if (page === 'generateur') checkGenAccess();
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
  document.getElementById('dash-date').textContent =
    now.toLocaleDateString('fr-FR', opts);

  // Streak
  let streak = 0;
  const today = dateKey(new Date());
  let d = new Date();
  while (true) {
    const k = dateKey(d);
    if (journal[k]) { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }
  document.getElementById('streak-count').textContent = streak;

  // Journal today status
  if (journal[today]) {
    document.getElementById('journal-today-status').textContent = '✅ Entrée enregistrée';
  }

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

// ============================
// JOURNAL
// ============================
function dateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function setJournalDate() {
  const now = new Date();
  const opts = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  document.getElementById('journal-entry-date').textContent =
    now.toLocaleDateString('fr-FR', opts);
}

function updateSliderVal(sliderId, valId, isStars = false, isSjsr = false) {
  const val = parseFloat(document.getElementById(sliderId).value);
  const el  = document.getElementById(valId);

  if (isStars) {
    const stars = ['★☆☆☆☆','★★☆☆☆','★★★☆☆','★★★★☆','★★★★★'];
    el.textContent = stars[val - 1] || '';
  } else if (isSjsr) {
    const labels = ['Aucun', 'Léger', 'Modéré', 'Fort', 'Très fort', 'Insupportable'];
    el.textContent = labels[val] || val;
  } else if (sliderId === 'sl-duree') {
    el.textContent = val + 'h';
  } else {
    el.textContent = val + '/10';
  }
}

function toggleChip(el) {
  el.classList.toggle('active');
}

function saveJournal() {
  const today = dateKey(new Date());
  const symptoms = Array.from(document.querySelectorAll('#symptom-chips .chip.active'))
    .map(c => c.textContent);

  journal[today] = {
    duree:    parseFloat(document.getElementById('sl-duree').value),
    qualite:  parseInt(document.getElementById('sl-qualite').value),
    sjsr:     parseInt(document.getElementById('sl-sjsr').value),
    energie:  parseInt(document.getElementById('sl-energie').value),
    douleur:  parseInt(document.getElementById('sl-douleur').value),
    symptoms,
    notes:    document.getElementById('journal-notes').value,
    ts:       Date.now()
  };

  saveState();
  updateDashboard();

  const confirm = document.getElementById('save-confirm');
  confirm.classList.remove('hidden');
  setTimeout(() => confirm.classList.add('hidden'), 2500);
}

function switchJTab(tab, el) {
  document.querySelectorAll('.jtab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');

  document.getElementById('jtab-today').classList.add('hidden');
  document.getElementById('jtab-historique').classList.add('hidden');
  document.getElementById(`jtab-${tab}`).classList.remove('hidden');

  if (tab === 'historique') renderHistorique();
}

function renderHistorique() {
  const container = document.getElementById('historique-list');
  const entries   = Object.entries(journal).sort((a, b) => b[0].localeCompare(a[0]));

  if (!entries.length) {
    container.innerHTML = '<p style="text-align:center;color:var(--text-light);margin-top:32px;">Aucune entrée pour l\'instant.</p>';
    return;
  }

  container.innerHTML = entries.map(([date, e]) => {
    const d     = new Date(date + 'T12:00:00');
    const label = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    const stars = '★'.repeat(e.qualite) + '☆'.repeat(5 - e.qualite);
    return `
      <div class="hist-entry">
        <div class="hist-date">${label}</div>
        <div class="hist-stats">
          <span class="hist-stat">🌙 ${e.duree}h ${stars}</span>
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
    if (search && !r.nom.toLowerCase().includes(search)) return false;
    return true;
  });

  grid.innerHTML = recettes.map(r => {
    const locked = r.premium && !isPremium;
    return `
      <div class="recette-card" onclick="${locked ? 'showPremium()' : `openRecette(${r.id})`}">
        <div class="recette-emoji">${r.emoji}${locked ? '<span style="position:absolute;right:8px;top:8px;font-size:1rem;">🔒</span>' : ''}</div>
        <div class="recette-info">
          <div class="recette-name">${r.nom}</div>
          <div class="recette-meta">
            <span class="recette-time">⏱ ${r.temps}</span>
            ${r.premium ? '<span class="recette-tag premium">⭐ Premium</span>' : ''}
          </div>
        </div>
      </div>`;
  }).join('');

  if (!recettes.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-light);padding:32px;">Aucune recette trouvée.</p>';
  }
}

function filterRecettes() { renderRecettes(); }

function filterCat(cat, el) {
  currentCatFilter = cat;
  document.querySelectorAll('#cat-filters .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderRecettes();
}

function openRecette(id) {
  const r = RECETTES.find(x => x.id === id);
  if (!r) return;

  const modal   = document.getElementById('recette-modal');
  const content = document.getElementById('modal-content');

  const tags = [];
  if (r.tags.includes('sg')) tags.push('Sans gluten');
  if (r.tags.includes('sl')) tags.push('Sans lactose');
  if (r.tags.includes('vg')) tags.push('Végétarien');

  content.innerHTML = `
    <div class="modal-recipe-header">
      <div class="modal-recipe-emoji">${r.emoji}</div>
      <div class="modal-recipe-title">${r.nom}</div>
      <div class="recipe-meta-row">
        <span class="chip active">⏱ ${r.temps}</span>
        <span class="chip">${r.calories} kcal</span>
        <span class="chip">${r.diff}</span>
        ${tags.map(t => `<span class="chip">${t}</span>`).join('')}
      </div>
    </div>

    <div class="recipe-benefits">🌿 ${r.benefices}</div>

    <div class="recipe-section-title">Ingrédients (1 personne)</div>
    <ul class="recipe-ingredient-list">
      ${r.ingredients.map(i => `<li>${i}</li>`).join('')}
    </ul>

    <div class="recipe-section-title">Préparation</div>
    <ol class="recipe-steps">
      ${r.etapes.map(e => `<li>${e}</li>`).join('')}
    </ol>

    <div style="margin-top:20px;">
      <button class="btn-primary full-width" onclick="addToAgenda(${r.id})">
        📅 Ajouter à l'agenda
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('recette-modal').classList.add('hidden');
}

function addToAgenda(recetteId) {
  closeModal();
  // Mémorise la recette à placer et navigue vers l'agenda
  window._pendingRecetteId = recetteId;
  showPage('agenda');
  // Petit message d'aide
  setTimeout(() => {
    const r = RECETTES.find(x => x.id === recetteId);
    if (r) {
      const msg = document.createElement('div');
      msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:var(--green-deep);color:var(--cream);padding:10px 18px;border-radius:99px;font-size:0.85rem;z-index:999;white-space:nowrap;box-shadow:0 4px 16px rgba(0,0,0,0.2)';
      msg.textContent = `Tapez un repas pour placer "${r.nom}"`;
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 3000);
    }
  }, 300);
}

// ============================
// AGENDA
// ============================
function getWeekDates(offset = 0) {
  const now   = new Date();
  const dow   = (now.getDay() + 6) % 7; // 0=lundi
  const start = new Date(now);
  start.setDate(now.getDate() - dow + offset * 7);

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
}

function renderAgenda() {
  const dates = getWeekDates(currentWeekOffset);
  const today = dateKey(new Date());

  // Week label
  const startLabel = dates[0].toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
  const endLabel   = dates[6].toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  document.getElementById('week-label').textContent = `${startLabel} – ${endLabel}`;

  const grid = document.getElementById('agenda-grid');
  grid.innerHTML = dates.map((d, i) => {
    const k       = dateKey(d);
    const isToday = k === today;
    const dayData = agenda[k] || {};
    const dayName = JOURS_FULL[i];

    const repasHTML = REPAS.map(r => {
      const slug  = r.slug;
      const recId = dayData[slug];
      const rec   = recId ? RECETTES.find(x => x.id === recId) : null;
      return `
        <div class="agenda-meal" onclick="editAgendaMeal('${k}','${slug}')">
          <div class="meal-label">${r.label}</div>
          <div class="meal-content ${rec ? '' : 'meal-empty'}">${rec ? rec.emoji + ' ' + rec.nom : '+ Ajouter'}</div>
          ${rec ? `<button class="meal-edit-btn" onclick="event.stopPropagation();clearAgendaMeal('${k}','${slug}')">✕</button>` : ''}
        </div>`;
    }).join('');

    return `
      <div class="agenda-day">
        <div class="agenda-day-header ${isToday ? 'today-header' : ''}">
          <span>${dayName} ${d.getDate()}</span>
          ${isToday ? '<span style="font-size:0.7rem;opacity:0.8;">Aujourd\'hui</span>' : ''}
        </div>
        <div class="agenda-meals">${repasHTML}</div>
      </div>`;
  }).join('');
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
function checkGenAccess() {
  // Free users get 3-day generation; premium = unlimited
}

function generateMenu() {
  const duree     = parseInt(document.getElementById('gen-duree').value);
  const priorite  = document.getElementById('gen-priorite').value;

  if (!isPremium && duree > 3) {
    document.getElementById('generated-menu').classList.add('hidden');
    document.getElementById('gen-premium-wall').classList.remove('hidden');
    return;
  }

  document.getElementById('gen-premium-wall').classList.add('hidden');

  const petitsDej = RECETTES.filter(r => r.cat === 'petit-dejeuner' && (!r.premium || isPremium));
  const dejeuners = RECETTES.filter(r => r.cat === 'dejeuner'       && (!r.premium || isPremium));
  const diners    = RECETTES.filter(r => r.cat === 'diner'           && (!r.premium || isPremium));

  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  const today = new Date();
  let html = '';

  for (let i = 0; i < duree; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const label = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

    const pDej = pick(petitsDej);
    const dej  = pick(dejeuners);
    const din  = pick(diners);

    html += `
      <div class="gen-day-block">
        <div class="gen-day-title">📅 ${label}</div>
        <div class="gen-meal"><div class="gen-meal-label">Petit-déj</div><div class="gen-meal-name">${pDej.emoji} ${pDej.nom}</div></div>
        <div class="gen-meal"><div class="gen-meal-label">Déjeuner</div><div class="gen-meal-name">${dej.emoji} ${dej.nom}</div></div>
        <div class="gen-meal"><div class="gen-meal-label">Dîner</div><div class="gen-meal-name">${din.emoji} ${din.nom}</div></div>
      </div>`;
  }

  const generated = document.getElementById('generated-menu');
  generated.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
      <div style="font-family:var(--font-display);color:var(--green-deep);font-size:1.1rem;">Menu généré ✨</div>
      <button class="btn-primary" onclick="generateMenu()" style="padding:8px 16px;font-size:0.82rem;">🔄 Régénérer</button>
    </div>
    ${html}
    <button class="btn-primary full-width" onclick="applyMenuToAgenda()">Importer dans l'agenda</button>`;

  generated.classList.remove('hidden');
  // Store for import
  generated.dataset.duree = duree;
}

function applyMenuToAgenda() {
  // Basic: navigate to agenda
  showPage('agenda');
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
  isPremium = true;
  localStorage.setItem('flora_premium', 'true');
  closePremium();
  loadProfil();
  renderRecettes();
  alert('✅ Essai Premium activé ! Profitez de toutes les fonctionnalités pendant 7 jours.');
}

const VALID_CODES = ['FLORA2025', 'SJSR2025', 'BIENETRE'];

function checkCode() {
  const code = document.getElementById('promo-code').value.trim().toUpperCase();
  if (VALID_CODES.includes(code)) {
    activatePremiumDemo();
  } else {
    document.getElementById('promo-code').style.borderColor = 'var(--red-soft)';
    setTimeout(() => document.getElementById('promo-code').style.borderColor = '', 2000);
  }
}

function unlockDemo() {
  document.getElementById('promo-code').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('promo-code').focus();
}

// ============================
// SERVICE WORKER
// ============================
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
