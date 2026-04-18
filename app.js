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
  },

  // =============================================
  // NOUVELLES RECETTES — Vague 3
  // Mix toutes catégories · Printemps/Été · SJSR
  // =============================================

  // --- PETITS-DÉJEUNERS ---
  {
    id: 66, cat: 'petit-dejeuner', premium: false,
    emoji: '🥭', nom: 'Bol açaí mangue-coco',
    temps: '10 min', calories: 340, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'L\'açaí est l\'un des fruits les plus riches en antioxydants. La mangue apporte de la vitamine C qui booste l\'absorption du fer. Un petit-déjeuner anti-inflammatoire express.',
    ingredients: [
      '100g pulpe d\'açaï surgelée',
      '1 banane congelée',
      '100ml lait de coco',
      '½ mangue fraîche',
      '2 c.à.s noix de coco râpée',
      '1 c.à.s graines de chanvre'
    ],
    etapes: [
      'Mixez la pulpe d\'açaï, la banane congelée et le lait de coco.',
      'Versez dans un bol — la texture doit être épaisse comme une glace.',
      'Disposez les dés de mangue fraîche par-dessus.',
      'Parsemez de noix de coco râpée et graines de chanvre.',
      'Servez immédiatement.'
    ]
  },
  {
    id: 67, cat: 'petit-dejeuner', premium: false,
    emoji: '🍓', nom: 'Pancakes sarrasin-fraises sans œuf',
    temps: '20 min', calories: 380, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le sarrasin est riche en magnésium et rutine, essentiels pour le SJSR. Les fraises sont une des meilleures sources de vitamine C. Sans œufs grâce à la banane comme liant.',
    ingredients: [
      '150g farine de sarrasin',
      '1 banane mûre écrasée',
      '200ml lait de riz',
      '1 c.à.c levure sans gluten',
      '1 c.à.s huile de coco',
      '150g fraises fraîches',
      '1 c.à.s sirop d\'agave'
    ],
    etapes: [
      'Mélangez farine, levure et lait de riz. Incorporez la banane écrasée.',
      'Ajoutez l\'huile de coco fondue. La pâte doit être légèrement épaisse.',
      'Faites cuire des petites crêpes épaisses 2-3 min chaque côté dans une poêle huilée.',
      'Servez avec les fraises coupées en deux et un filet de sirop d\'agave.'
    ]
  },
  {
    id: 68, cat: 'petit-dejeuner', premium: true,
    emoji: '🥜', nom: 'Toast patate douce-beurre d\'amande',
    temps: '15 min', calories: 290, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La patate douce rôtie remplace le pain — index glycémique bas, riche en bêta-carotène. Le beurre d\'amande apporte du magnésium et des graisses anti-inflammatoires.',
    ingredients: [
      '1 patate douce moyenne',
      '2 c.à.s beurre d\'amande',
      '1 banane',
      '1 c.à.c graines de chia',
      '1 c.à.c miel',
      '1 pincée de cannelle'
    ],
    etapes: [
      'Coupez la patate douce en tranches de 1 cm dans la longueur.',
      'Passez au grille-pain 2 fois ou faites dorer à la poêle 4 min chaque côté.',
      'Étalez le beurre d\'amande sur chaque tranche.',
      'Disposez des rondelles de banane par-dessus.',
      'Parsemez de chia, cannelle et un filet de miel.'
    ]
  },
  {
    id: 69, cat: 'petit-dejeuner', premium: true,
    emoji: '🌺', nom: 'Granola maison noix-fruits rouges',
    temps: '35 min + 30min four', calories: 410, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Batch cooking du dimanche — se conserve 3 semaines. Les fruits rouges séchés sont concentrés en anthocyanes anti-inflammatoires. Les noix apportent des oméga-3 végétaux.',
    ingredients: [
      '300g flocons de millet ou sarrasin',
      '100g noix mélangées',
      '50g amandes effilées',
      '3 c.à.s huile de coco',
      '3 c.à.s sirop d\'érable',
      '1 c.à.c cannelle',
      '80g fruits rouges séchés (cranberries, myrtilles)'
    ],
    etapes: [
      'Préchauffez le four à 160°C.',
      'Mélangez flocons, noix, amandes, huile de coco fondue, sirop d\'érable et cannelle.',
      'Étalez sur une plaque et enfournez 25-30 min en remuant toutes les 10 min.',
      'Laissez refroidir complètement — le granola durcit en refroidissant.',
      'Ajoutez les fruits rouges séchés. Conservez en bocal hermétique.'
    ]
  },

  // --- DÉJEUNERS ---
  {
    id: 70, cat: 'dejeuner', premium: false,
    emoji: '🥙', nom: 'Bowl quinoa-pois chiches-légumes rôtis',
    temps: '35 min', calories: 450, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le bowl parfait pour le bureau — se prépare en batch le dimanche. Quinoa + pois chiches = protéines complètes. Les légumes rôtis concentrent leurs vitamines et minéraux.',
    ingredients: [
      '200g quinoa',
      '400g pois chiches cuits',
      '1 courgette',
      '1 poivron rouge',
      '2 c.à.s huile d\'olive',
      '1 c.à.c curcuma',
      '1 citron',
      'Persil frais, Sel Santé'
    ],
    etapes: [
      'Cuisez le quinoa 15 min dans le double de son volume d\'eau.',
      'Coupez courgette et poivron en cubes. Enrobez d\'huile, curcuma et Sel Santé.',
      'Rôtissez à 200°C pendant 20 min ou à l\'air fryer 180°C 15 min.',
      'Assemblez le bowl : quinoa, légumes rôtis, pois chiches.',
      'Arrosez d\'huile d\'olive et de jus de citron. Parsemez de persil.'
    ]
  },
  {
    id: 71, cat: 'dejeuner', premium: false,
    emoji: '🐠', nom: 'Sardines à l\'huile sur salade de roquette',
    temps: '10 min', calories: 360, diff: 'Très facile',
    tags: ['sg', 'sl'],
    benefices: 'Les sardines sont la meilleure source de fer héminique et d\'oméga-3. Riches en calcium (arêtes). Repas ultra-rapide idéal au bureau. La roquette apporte du fer végétal.',
    ingredients: [
      '1 boîte de sardines à l\'huile d\'olive',
      '80g roquette',
      '1 tomate',
      '½ concombre',
      '1 citron',
      '1 c.à.s câpres',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Disposez la roquette dans un grand bol.',
      'Ajoutez la tomate et le concombre coupés en dés.',
      'Égouttez les sardines et posez-les sur la salade.',
      'Ajoutez les câpres.',
      'Assaisonnez avec le jus de citron, Sel Santé et poivre.'
    ]
  },
  {
    id: 72, cat: 'dejeuner', premium: true,
    emoji: '🍜', nom: 'Nouilles de riz saumon-épinards-sésame',
    temps: '20 min', calories: 490, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Les nouilles de riz sont une alternative légère aux pâtes. Saumon + épinards = combo fer + oméga-3 imbattable pour le SJSR. Le sésame apporte du calcium végétal.',
    ingredients: [
      '150g nouilles de riz',
      '120g saumon fumé',
      '100g épinards frais',
      '2 c.à.s tamari (sg)',
      '1 c.à.s huile de sésame',
      '1 cm gingembre râpé',
      'Graines de sésame, citron vert'
    ],
    etapes: [
      'Cuisez les nouilles de riz selon le paquet. Égouttez et réservez.',
      'Dans une poêle, faites tomber les épinards avec le gingembre.',
      'Ajoutez le tamari et l\'huile de sésame.',
      'Incorporez les nouilles et mélangez 1 min.',
      'Dressez avec le saumon fumé, les graines de sésame et le citron vert.'
    ]
  },
  {
    id: 73, cat: 'dejeuner', premium: true,
    emoji: '🥗', nom: 'Salade de lentilles beluga-betterave-noix',
    temps: '25 min', calories: 420, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les lentilles beluga sont les plus riches en fer et protéines. La betterave améliore la circulation sanguine (idéal SJSR). Les noix apportent des oméga-3 végétaux.',
    ingredients: [
      '200g lentilles beluga (noires)',
      '2 betteraves cuites',
      '50g noix',
      '1 bouquet de persil',
      '2 c.à.s vinaigre balsamique',
      '3 c.à.s huile d\'olive',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Cuisez les lentilles 20 min dans l\'eau bouillante. Égouttez et laissez refroidir.',
      'Coupez les betteraves en cubes.',
      'Mélangez lentilles, betteraves et noix grossièrement concassées.',
      'Préparez la vinaigrette : huile d\'olive, vinaigre balsamique, Sel Santé.',
      'Assaisonnez et parsemez de persil frais haché.'
    ]
  },
  {
    id: 74, cat: 'dejeuner', premium: true,
    emoji: '🥘', nom: 'Tajine de légumes printaniers-pois chiches',
    temps: '40 min', calories: 380, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le cumin, la coriandre et le curcuma forment un trio anti-inflammatoire puissant. Les pois chiches apportent du fer et des protéines végétales. Idéal batch cooking.',
    ingredients: [
      '400g pois chiches cuits',
      '2 carottes',
      '1 courgette',
      '1 oignon',
      '400g tomates concassées',
      '1 c.à.c curcuma',
      '1 c.à.c cumin',
      '1 c.à.c coriandre moulue',
      'Coriandre fraîche, Sel Santé'
    ],
    etapes: [
      'Faites revenir l\'oignon émincé dans l\'huile d\'olive.',
      'Ajoutez les épices et remuez 1 min pour les torréfier.',
      'Ajoutez carottes et courgette en cubes, puis les tomates concassées.',
      'Incorporez les pois chiches. Couvrez et laissez mijoter 25 min.',
      'Servez avec de la coriandre fraîche. Se congèle très bien.'
    ]
  },

  // --- DÎNERS ---
  {
    id: 75, cat: 'diner', premium: false,
    emoji: '🐟', nom: 'Dos de cabillaud vapeur-purée patate douce',
    temps: '25 min', calories: 320, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Le cabillaud est une protéine légère idéale le soir — facile à digérer. La vapeur préserve tous les nutriments. La patate douce à IG bas évite les pics glycémiques nocturnes.',
    ingredients: [
      '150g dos de cabillaud',
      '2 patates douces',
      '10cl lait de coco',
      '1 citron',
      'Coriandre fraîche',
      'Sel Santé, curcuma'
    ],
    etapes: [
      'Faites cuire les patates douces à la vapeur 15 min. Mixez avec le lait de coco et le curcuma.',
      'Assaisonnez le cabillaud avec le Sel Santé et le citron.',
      'Cuisez à la vapeur 8-10 min — le poisson doit se détacher en feuillets.',
      'Dressez la purée, posez le cabillaud par-dessus.',
      'Parsemez de coriandre fraîche et d\'un filet de citron.'
    ]
  },
  {
    id: 76, cat: 'diner', premium: false,
    emoji: '🥦', nom: 'Curry de légumes verts-lait de coco léger',
    temps: '25 min', calories: 280, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Dîner alcalinisant par excellence. Les brocolis et épinards apportent du fer et du calcium. Le lait de coco est anti-inflammatoire. Le curcuma + poivre = absorption maximisée.',
    ingredients: [
      '200g brocolis',
      '100g épinards',
      '100g petits pois',
      '200ml lait de coco allégé',
      '1 c.à.c pâte de curry vert (sg)',
      '1 c.à.c curcuma',
      'Citron vert, coriandre'
    ],
    etapes: [
      'Faites revenir la pâte de curry dans un peu d\'huile de coco 1 min.',
      'Ajoutez le lait de coco et le curcuma. Portez à frémissement.',
      'Ajoutez les brocolis et laissez cuire 5 min.',
      'Incorporez les épinards et les petits pois en fin de cuisson.',
      'Servez avec du jus de citron vert et de la coriandre fraîche.'
    ]
  },
  {
    id: 77, cat: 'diner', premium: true,
    emoji: '🍄', nom: 'Risotto de quinoa-champignons-herbes',
    temps: '30 min', calories: 350, diff: 'Moyen',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le quinoa remplace le riz pour un risotto sans gluten naturellement riche en protéines. Les champignons sont riches en sélénium antioxydant et en vitamine D.',
    ingredients: [
      '200g quinoa',
      '300g champignons mélangés',
      '1 oignon',
      '2 gousses d\'ail',
      '600ml bouillon de légumes chaud',
      '2 c.à.s levure nutritionnelle',
      'Thym, persil, Sel Santé'
    ],
    etapes: [
      'Faites revenir oignon et ail dans l\'huile d\'olive.',
      'Ajoutez les champignons et faites dorer 5 min.',
      'Incorporez le quinoa, mélangez 1 min.',
      'Ajoutez le bouillon louche par louche comme un risotto, en remuant.',
      'En fin de cuisson, ajoutez la levure nutritionnelle et les herbes.'
    ]
  },
  {
    id: 78, cat: 'diner', premium: true,
    emoji: '🌮', nom: 'Galettes de pois chiche-épinards farcies',
    temps: '30 min', calories: 360, diff: 'Moyen',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les pois chiches sont la base idéale SJSR — fer, magnésium, protéines végétales complètes. Ces galettes se préparent en batch et se réchauffent facilement.',
    ingredients: [
      '400g pois chiches cuits',
      '100g épinards cuits',
      '2 gousses d\'ail',
      '1 c.à.c cumin',
      '1 c.à.c curcuma',
      '2 c.à.s farine de pois chiche',
      'Huile d\'olive, Sel Santé'
    ],
    etapes: [
      'Mixez les pois chiches avec l\'ail, le cumin et le curcuma.',
      'Incorporez les épinards essorés et la farine de pois chiche.',
      'Formez des galettes de 1 cm d\'épaisseur.',
      'Faites cuire à la poêle huilée 4 min chaque côté.',
      'Servez avec une sauce tahini-citron ou de la sauce vierge.'
    ]
  },
  {
    id: 79, cat: 'diner', premium: true,
    emoji: '🐙', nom: 'Salade tiède de poulpe-pommes de terre-olives',
    temps: '45 min', calories: 390, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Le poulpe est une excellente source de fer héminique et de zinc. Les olives apportent des graisses mono-insaturées anti-inflammatoires. Un plat méditerranéen thérapeutique.',
    ingredients: [
      '300g poulpe cuit',
      '300g pommes de terre',
      '60g olives noires',
      '1 citron',
      '3 c.à.s huile d\'olive',
      'Persil plat, origan',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Cuisez les pommes de terre à l\'eau 20 min. Laissez tiédir et coupez en rondelles.',
      'Coupez le poulpe en morceaux.',
      'Mélangez poulpe, pommes de terre et olives.',
      'Préparez la vinaigrette : huile d\'olive, citron, origan, Sel Santé.',
      'Assaisonnez généreusement. Parsemez de persil plat frais.'
    ]
  },

  // --- SNACKS / DESSERTS ---
  {
    id: 80, cat: 'snack', premium: false,
    emoji: '🍎', nom: 'Chips de pomme cannelle au four',
    temps: '5 min + 2h four', calories: 90, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les pommes sont riches en quercétine, un antioxydant anti-inflammatoire puissant. La cannelle régule la glycémie. Un snack zéro sucre ajouté pour les envies de grignotage.',
    ingredients: [
      '3 pommes',
      '1 c.à.c cannelle',
      '1 pincée de cardamome'
    ],
    etapes: [
      'Préchauffez le four à 100°C.',
      'Coupez les pommes en tranches très fines (2mm) à la mandoline ou au couteau.',
      'Disposez sur une plaque recouverte de papier cuisson.',
      'Saupoudrez de cannelle et cardamome.',
      'Enfournez 1h30 à 2h en retournant à mi-cuisson. Laissez sécher dans le four éteint.'
    ]
  },
  {
    id: 81, cat: 'snack', premium: false,
    emoji: '🫐', nom: 'Nice cream myrtilles-banane-spiruline',
    temps: '5 min + 24h congélo', calories: 150, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La spiruline est la source végétale la plus concentrée en fer biodisponible — parfaite SJSR. Les myrtilles sont champions en anthocyanes anti-inflammatoires. Zéro sucre ajouté.',
    ingredients: [
      '2 bananes congelées',
      '150g myrtilles surgelées',
      '1 c.à.c spiruline en poudre',
      '2 c.à.s lait de coco'
    ],
    etapes: [
      'Mixez les bananes congelées avec le lait de coco jusqu\'à texture crémeuse.',
      'Ajoutez les myrtilles et la spiruline.',
      'Mixez à nouveau — la couleur devient bleu-vert magnifique.',
      'Servez immédiatement ou recongelez 30 min pour une texture plus ferme.'
    ]
  },
  {
    id: 82, cat: 'snack', premium: false,
    emoji: '🌰', nom: 'Beurre de noisettes maison',
    temps: '15 min', calories: 190, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les noisettes sont parmi les noix les plus riches en vitamine E. Fait maison = zéro huile de palme, zéro sucre ajouté. Une cuillère le matin booste le magnésium de la journée.',
    ingredients: [
      '300g noisettes entières',
      '1 pincée de sel Santé',
      '1 c.à.c miel (optionnel)'
    ],
    etapes: [
      'Préchauffez le four à 180°C. Étalez les noisettes sur une plaque.',
      'Torréfiez 10-12 min jusqu\'à ce que les peaux craquèlent.',
      'Frottez dans un torchon pour enlever un maximum de peaux.',
      'Mixez au robot puissant 8-10 min en raclant les bords régulièrement.',
      'La pâte va passer de sèche à crémeuse. Ajoutez le sel et le miel. Conservez en bocal.'
    ]
  },
  {
    id: 83, cat: 'snack', premium: true,
    emoji: '🍋', nom: 'Tarte au citron sans cuisson farine de coco',
    temps: '20 min + 2h frigo', calories: 280, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Sans cuisson et sans lactose. La farine de coco est riche en fibres et protéines. Le citron apporte de la vitamine C. Le curcuma dans la garniture renforce l\'action anti-inflammatoire.',
    ingredients: [
      '150g noix de cajou trempées 2h',
      '4 dattes Medjool',
      '80g farine de coco',
      '3 citrons (jus + zeste)',
      '100ml lait de coco entier',
      '3 c.à.s sirop d\'agave',
      '1 pincée de curcuma'
    ],
    etapes: [
      'Mixez les dattes avec la farine de coco pour former la base. Tassez dans un moule.',
      'Mixez les cajous égouttés avec le jus de citron, le zeste, le lait de coco et l\'agave.',
      'Ajoutez le curcuma pour la couleur jaune naturelle.',
      'Versez sur la base. Réfrigérez 2h minimum.',
      'Démoulez et décorez d\'un zeste de citron.'
    ]
  },
  {
    id: 84, cat: 'snack', premium: true,
    emoji: '🍫', nom: 'Bark chocolat noir-pistaches-fleur de sel',
    temps: '15 min + 1h frigo', calories: 210, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le chocolat 85% est la meilleure source alimentaire de magnésium. Les pistaches apportent du fer et du potassium. La fleur de sel exalte les saveurs et apporte des minéraux.',
    ingredients: [
      '200g chocolat noir 85%',
      '50g pistaches décortiquées',
      '30g cranberries séchées',
      '1 pincée de fleur de sel',
      '1 c.à.c zeste d\'orange'
    ],
    etapes: [
      'Faites fondre le chocolat au bain-marie.',
      'Étalez sur une plaque recouverte de papier cuisson (5mm d\'épaisseur).',
      'Parsemez de pistaches, cranberries, fleur de sel et zeste d\'orange.',
      'Réfrigérez 1h jusqu\'à solidification complète.',
      'Cassez en morceaux irréguliers. Conservez au frais.'
    ]
  },
  {
    id: 85, cat: 'snack', premium: true,
    emoji: '🧁', nom: 'Muffins courgette-citron-amande',
    temps: '35 min', calories: 240, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La courgette apporte de l\'eau, des fibres et de la vitamine C sans alourdir. La poudre d\'amande est riche en vitamine E. Ces muffins se conservent 4 jours et sont parfaits pour le petit-déjeuner.',
    ingredients: [
      '200g courgette râpée',
      '150g poudre d\'amande',
      '80g farine de riz',
      '2 citrons (jus + zeste)',
      '3 c.à.s sirop d\'agave',
      '60ml huile d\'olive',
      '1 sachet levure sans gluten'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Essorez bien la courgette râpée dans un torchon.',
      'Mélangez poudre d\'amande, farine, levure.',
      'Incorporez courgette, jus et zeste de citron, sirop d\'agave et huile.',
      'Versez dans des moules à muffins. Enfournez 22-25 min.'
    ]
  },

  // --- BATCH COOKING SPÉCIAL ---
  {
    id: 86, cat: 'dejeuner', premium: false,
    emoji: '🍲', nom: 'Soupe minestrone détox printemps',
    temps: '35 min', calories: 260, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Soupe complète riche en légumes de printemps. Les petits pois et épinards apportent du fer. Le bouillon de légumes maison est alcalinisant. Parfait pour 4 portions batch cooking.',
    ingredients: [
      '2 courgettes',
      '2 carottes',
      '100g petits pois',
      '100g haricots verts',
      '400g tomates concassées',
      '100g haricots blancs cuits',
      '1 oignon, 2 gousses d\'ail',
      '1L bouillon de légumes',
      'Basilic frais, Sel Santé'
    ],
    etapes: [
      'Faites revenir oignon et ail dans l\'huile d\'olive.',
      'Ajoutez carottes et courgettes en petits dés. Faites revenir 3 min.',
      'Ajoutez les tomates, le bouillon et portez à ébullition.',
      'Incorporez les haricots verts, petits pois et haricots blancs.',
      'Laissez mijoter 15 min. Parsemez de basilic frais. Se congèle en portions.'
    ]
  },
  {
    id: 87, cat: 'dejeuner', premium: true,
    emoji: '🫙', nom: 'Houmous maison pois chiche-tahini',
    temps: '10 min', calories: 180, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le houmous est l\'en-cas idéal SJSR : fer des pois chiches + calcium du tahini + vitamine C du citron = absorption maximale. Batch cooking — dure 5 jours au frigo.',
    ingredients: [
      '400g pois chiches cuits',
      '3 c.à.s tahini',
      '2 citrons (jus)',
      '2 gousses d\'ail',
      '4 c.à.s huile d\'olive',
      '4 c.à.s eau froide',
      'Cumin, paprika, Sel Santé'
    ],
    etapes: [
      'Rincez les pois chiches. Gardez quelques-uns pour la déco.',
      'Mixez tahini et jus de citron 1 min pour blanchir.',
      'Ajoutez ail, pois chiches, huile et eau froide. Mixez 3-4 min.',
      'Assaisonnez avec le Sel Santé et le cumin.',
      'Dressez avec un filet d\'huile, paprika et les pois chiches réservés.'
    ]
  },
  {
    id: 88, cat: 'diner', premium: false,
    emoji: '🍆', nom: 'Gratin d\'aubergines-tomates-herbes',
    temps: '50 min', calories: 290, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'L\'aubergine est riche en nasunine, un antioxydant puissant dans la peau violette. Les tomates apportent du lycopène anti-inflammatoire. Plat méditerranéen alcalinisant.',
    ingredients: [
      '3 aubergines',
      '4 tomates',
      '3 gousses d\'ail',
      '1 bouquet de basilic',
      '4 c.à.s huile d\'olive',
      '1 c.à.c origan',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Préchauffez le four à 190°C.',
      'Coupez aubergines et tomates en rondelles.',
      'Dans un plat huilé, disposez en alternance aubergines et tomates.',
      'Parsemez d\'ail émincé, origan, Sel Santé et huile d\'olive.',
      'Enfournez 35-40 min. Parsemez de basilic frais avant de servir.'
    ]
  },
  {
    id: 89, cat: 'petit-dejeuner', premium: false,
    emoji: '🫐', nom: 'Muffins myrtilles-farine d\'avoine sg',
    temps: '30 min', calories: 290, diff: 'Facile',
    tags: ['sl', 'vg'],
    benefices: 'Les myrtilles sont anti-inflammatoires et neuroprotectrices — particulièrement bénéfiques pour le TDAH. La farine d\'avoine certifiée sg est riche en bêta-glucane pour le microbiote.',
    ingredients: [
      '200g farine d\'avoine certifiée sg',
      '150g myrtilles fraîches ou surgelées',
      '2 œufs',
      '100ml lait d\'amande',
      '60g sucre de coco',
      '60ml huile de coco',
      '1 sachet levure sans gluten'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Fouettez les œufs avec le sucre de coco jusqu\'à blanchiment.',
      'Ajoutez lait d\'amande et huile de coco fondue.',
      'Incorporez farine et levure. Ajoutez délicatement les myrtilles.',
      'Versez dans des moules à muffins. Enfournez 20-22 min.'
    ]
  },
  {
    id: 90, cat: 'snack', premium: false,
    emoji: '🌿', nom: 'Infusion nuit profonde valériane-passiflore',
    temps: '5 min', calories: 5, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La valériane réduit le temps d\'endormissement et améliore la qualité du sommeil — études cliniques validées pour le SJSR. La passiflore est anxiolytique naturelle. À boire 30 min avant le coucher.',
    ingredients: [
      '1 sachet de valériane ou 1 c.à.c de racine séchée',
      '1 sachet de passiflore',
      '1 c.à.c de tilleul',
      '250ml eau bouillante',
      '1 c.à.c miel'
    ],
    etapes: [
      'Faites bouillir l\'eau (90°C idéalement, pas 100°C pour préserver les principes actifs).',
      'Versez sur les plantes dans une tasse.',
      'Laissez infuser 8-10 min à couvert.',
      'Filtrez, sucrez légèrement au miel.',
      'Buvez calme, dans le noir ou avec une lumière douce — votre rituel SJSR 🌙'
    ]
  },
  {
    id: 91, cat: 'diner', premium: true,
    emoji: '🐚', nom: 'Moules marinières lait de coco-citronnelle',
    temps: '20 min', calories: 310, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Les moules sont la source de fer héminique la plus concentrée — encore plus que la viande rouge. Riches en zinc et oméga-3. La citronnelle est anti-inflammatoire et digestive.',
    ingredients: [
      '1 kg de moules',
      '200ml lait de coco',
      '1 tige de citronnelle',
      '2 cm gingembre frais',
      '2 gousses d\'ail',
      '1 citron vert',
      'Coriandre fraîche'
    ],
    etapes: [
      'Grattez et rincez les moules. Jetez celles qui sont ouvertes.',
      'Faites revenir ail, gingembre et citronnelle dans l\'huile de coco.',
      'Ajoutez les moules et le lait de coco. Couvrez à feu vif.',
      'Cuisez 4-5 min en secouant la cocotte — les moules doivent s\'ouvrir.',
      'Arrosez de jus de citron vert. Parsemez de coriandre fraîche.'
    ]
  },
  {
    id: 92, cat: 'snack', premium: true,
    emoji: '🍯', nom: 'Caramels mous dattes-beurre de cajou',
    temps: '15 min + 1h frigo', calories: 160, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Des caramels sains sans sucre raffiné ! Les dattes ont un IG modéré et sont riches en fer et potassium. Le cajou apporte du zinc et du magnésium. Parfait snack TV anti-SJSR.',
    ingredients: [
      '200g dattes Medjool dénoyautées',
      '80g beurre de cajou',
      '2 c.à.s lait de coco',
      '1 c.à.c extrait de vanille',
      '1 pincée de fleur de sel'
    ],
    etapes: [
      'Faites tremper les dattes 10 min dans l\'eau chaude.',
      'Égouttez et mixez avec le beurre de cajou, le lait de coco et la vanille.',
      'Étalez dans un moule recouvert de papier cuisson (1 cm d\'épaisseur).',
      'Parsemez de fleur de sel. Réfrigérez 1h.',
      'Découpez en petits carrés. Conservez au frigo.'
    ]
  },
  {
    id: 93, cat: 'petit-dejeuner', premium: true,
    emoji: '🫚', nom: 'Crêpes farine de teff-banane',
    temps: '20 min', calories: 320, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le teff est la céréale la plus riche en fer — une crêpe apporte autant de fer que 100g de viande. Originaire d\'Éthiopie, sans gluten, il est aussi riche en calcium et magnésium.',
    ingredients: [
      '150g farine de teff',
      '1 banane écrasée',
      '200ml lait de riz',
      '1 c.à.s huile de coco',
      '1 c.à.c extrait de vanille',
      '1 pincée de sel Santé'
    ],
    etapes: [
      'Mixez tous les ingrédients jusqu\'à pâte lisse.',
      'Laissez reposer 10 min — la farine de teff absorbe les liquides.',
      'Huilez légèrement une poêle antiadhésive.',
      'Cuisez des petites crêpes 2-3 min chaque côté.',
      'Servez avec des fruits frais, du miel ou du beurre d\'amande.'
    ]
  },
  {
    id: 94, cat: 'diner', premium: true,
    emoji: '🫑', nom: 'Poivrons farcis quinoa-légumes-herbes',
    temps: '45 min', calories: 340, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les poivrons rouges sont les champions de la vitamine C — boostent l\'absorption du fer du quinoa. Plat complet batch cooking qui se récauffe parfaitement.',
    ingredients: [
      '4 poivrons rouges',
      '200g quinoa cuit',
      '100g pois chiches cuits',
      '1 courgette en dés',
      '1 tomate en dés',
      '1 c.à.c cumin',
      'Persil, Sel Santé'
    ],
    etapes: [
      'Préchauffez le four à 190°C.',
      'Coupez les poivrons en deux, retirez les graines.',
      'Mélangez quinoa, pois chiches, courgette, tomate, cumin et persil.',
      'Remplissez les poivrons de la farce. Arrosez d\'huile d\'olive.',
      'Enfournez 30 min. Les poivrons doivent être tendres et légèrement caramélisés.'
    ]
  },
  {
    id: 95, cat: 'snack', premium: false,
    emoji: '🥕', nom: 'Houmous de betterave-carotte express',
    temps: '10 min', calories: 140, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La betterave améliore la circulation sanguine dans les jambes — action directe sur le SJSR. La carotte apporte du bêta-carotène. Un snack coloré, nutritif et anti-inflammatoire.',
    ingredients: [
      '200g betteraves cuites',
      '200g pois chiches cuits',
      '2 carottes cuites',
      '2 c.à.s tahini',
      '1 citron',
      '1 gousse d\'ail',
      'Sel Santé, cumin'
    ],
    etapes: [
      'Mixez tous les ingrédients ensemble.',
      'Ajoutez un peu d\'eau si la consistance est trop épaisse.',
      'Assaisonnez avec le Sel Santé et le cumin.',
      'Servez avec des bâtonnets de légumes crus ou des galettes de riz.',
      'Se conserve 4 jours au réfrigérateur.'
    ]
  },

  // =============================================
  // GUIDE 50 RECETTES ANTI-INFLAMMATOIRES
  // Sans gluten · Sans lactose · Vague 4
  // =============================================

  // --- PETITS-DÉJEUNERS ---
  {
    id: 96, cat: 'petit-dejeuner', premium: false,
    emoji: '🍳', nom: 'Omelette épinards-curcuma',
    temps: '10 min', calories: 220, diff: 'Très facile',
    tags: ['sg', 'sl'],
    benefices: 'Les œufs sont riches en vitamine B12 et fer. Les épinards apportent du fer végétal. Le curcuma + œuf = absorption maximale des nutriments. Petit-déjeuner protéiné anti-SJSR.',
    ingredients: [
      '2 œufs bio',
      '1 poignée d\'épinards frais',
      '½ c.à.c curcuma',
      '1 c.à.s huile d\'olive',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Battez les œufs avec le curcuma, le Sel Santé et le poivre.',
      'Faites revenir les épinards dans l\'huile d\'olive 1 min.',
      'Versez les œufs sur les épinards.',
      'Cuisez à feu doux jusqu\'à prise complète.',
      'Pliez et servez immédiatement.'
    ]
  },
  {
    id: 97, cat: 'petit-dejeuner', premium: false,
    emoji: '🥑', nom: 'Smoothie vert détox avocat-pomme-gingembre',
    temps: '5 min', calories: 280, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'L\'avocat apporte des graisses mono-insaturées anti-inflammatoires. Les épinards donnent du fer et du chlorophylle. Le gingembre est l\'anti-inflammatoire naturel le plus puissant.',
    ingredients: [
      '1 grosse poignée d\'épinards',
      '½ avocat',
      '1 pomme',
      '1 cm gingembre frais',
      '200ml eau de coco',
      '½ citron (jus)'
    ],
    etapes: [
      'Pelez la pomme et coupez en morceaux.',
      'Placez tous les ingrédients dans le blender.',
      'Mixez jusqu\'à obtenir une texture lisse.',
      'Ajoutez de l\'eau si trop épais.',
      'Buvez immédiatement pour profiter des nutriments.'
    ]
  },
  {
    id: 98, cat: 'petit-dejeuner', premium: false,
    emoji: '🍌', nom: 'Pancakes banane-œuf (2 ingrédients)',
    temps: '10 min', calories: 200, diff: 'Très facile',
    tags: ['sg', 'sl'],
    benefices: 'La recette la plus simple du monde — sans farine ! La banane apporte du potassium et du tryptophane. Les œufs donnent des protéines complètes. Parfait pour les matins pressés.',
    ingredients: [
      '1 banane très mûre',
      '2 œufs bio',
      '1 c.à.c huile de coco'
    ],
    etapes: [
      'Écrasez la banane à la fourchette jusqu\'à consistance lisse.',
      'Battez les œufs et mélangez à la banane.',
      'Huilez une poêle antiadhésive avec l\'huile de coco.',
      'Versez de petites quantités de pâte et cuisez 2 min chaque côté.',
      'Servez avec des fruits frais ou du miel.'
    ]
  },
  {
    id: 99, cat: 'petit-dejeuner', premium: false,
    emoji: '🥜', nom: 'Tartines de sarrasin purée d\'amande-banane',
    temps: '5 min', calories: 310, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le pain de sarrasin est riche en magnésium et rutine. La purée d\'amande apporte des graisses saines et de la vitamine E. La banane fournit du tryptophane et du potassium.',
    ingredients: [
      '2 tartines de pain de sarrasin',
      '2 c.à.s purée d\'amande complète',
      '1 banane',
      '1 c.à.c miel (optionnel)'
    ],
    etapes: [
      'Étalez généreusement la purée d\'amande sur les tartines.',
      'Coupez la banane en rondelles et disposez-les par-dessus.',
      'Ajoutez un filet de miel si désiré.',
      'Dégustez immédiatement.'
    ]
  },
  {
    id: 100, cat: 'petit-dejeuner', premium: true,
    emoji: '🫐', nom: 'Yaourt de soja myrtilles-noix du Brésil',
    temps: '3 min', calories: 240, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les noix du Brésil sont la source alimentaire la plus riche en sélénium — un antioxydant puissant. 2 noix du Brésil = apport journalier en sélénium recommandé. Les myrtilles sont anti-inflammatoires.',
    ingredients: [
      '1 yaourt de soja bio nature',
      '1 poignée de myrtilles fraîches',
      '2 noix du Brésil concassées',
      '1 c.à.c miel',
      '1 c.à.c graines de lin moulues'
    ],
    etapes: [
      'Versez le yaourt dans un bol.',
      'Disposez les myrtilles par-dessus.',
      'Ajoutez les noix du Brésil concassées.',
      'Arrosez d\'un filet de miel et saupoudrez de graines de lin.',
      'Dégustez immédiatement.'
    ]
  },
  {
    id: 101, cat: 'petit-dejeuner', premium: true,
    emoji: '🐟', nom: 'Assiette scandinave saumon-avocat-œuf poché',
    temps: '10 min', calories: 380, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Triple puissance anti-SJSR : oméga-3 du saumon + graisses saines de l\'avocat + fer et B12 de l\'œuf. Un petit-déjeuner digne d\'un restaurant healthy, en 10 minutes.',
    ingredients: [
      '1 tranche de saumon fumé',
      '½ avocat',
      '1 œuf bio',
      '1 citron',
      'Aneth ou ciboulette',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Portez une casserole d\'eau à frémissement avec un filet de vinaigre.',
      'Cassez l\'œuf dans un bol, créez un tourbillon dans l\'eau et glissez l\'œuf doucement.',
      'Cuisez 3 min pour un jaune coulant.',
      'Disposez le saumon et l\'avocat en tranches dans une assiette.',
      'Posez l\'œuf poché, assaisonnez et parsemez d\'herbes fraîches.'
    ]
  },
  {
    id: 102, cat: 'petit-dejeuner', premium: true,
    emoji: '🌰', nom: 'Pain paléo poudre d\'amande-graines de lin',
    temps: '10 min + 40min four', calories: 290, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Zéro céréale, zéro gluten. La poudre d\'amande est riche en vitamine E et graisses saines. Les graines de lin apportent des oméga-3. Se conserve 5 jours au frigo.',
    ingredients: [
      '150g poudre d\'amande',
      '50g graines de lin moulues',
      '3 œufs bio',
      '½ c.à.c bicarbonate',
      '1 pincée de sel Santé',
      '1 c.à.s huile d\'olive'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Mélangez poudre d\'amande, graines de lin, bicarbonate et sel.',
      'Incorporez les œufs battus et l\'huile d\'olive.',
      'Versez dans un moule à cake huilé.',
      'Enfournez 35-40 min. Vérifiez avec un couteau — doit ressortir sec.'
    ]
  },
  {
    id: 103, cat: 'petit-dejeuner', premium: true,
    emoji: '💪', nom: 'Smoothie protéiné chanvre-cacao-datte',
    temps: '5 min', calories: 350, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les protéines de chanvre sont complètes et riches en magnésium. Le cacao cru est anti-inflammatoire et stimulant naturel. Les dattes apportent du fer et de l\'énergie lente.',
    ingredients: [
      '2 c.à.s protéine de chanvre',
      '300ml lait de noisette',
      '1 c.à.s cacao cru en poudre',
      '1 datte Medjool dénoyautée',
      '1 banane congelée'
    ],
    etapes: [
      'Placez tous les ingrédients dans le blender.',
      'Mixez 1 min jusqu\'à consistance lisse et crémeuse.',
      'Ajustez la consistance avec plus de lait si nécessaire.',
      'Versez dans un grand verre et buvez immédiatement.'
    ]
  },

  // --- DÉJEUNERS ---
  {
    id: 104, cat: 'dejeuner', premium: false,
    emoji: '🌿', nom: 'Salade lentilles corail-carottes-cumin',
    temps: '20 min', calories: 360, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les lentilles corail cuisent en 10 min et sont ultra-riches en fer facilement assimilable. Le cumin améliore la digestion des légumineuses. La carotte apporte du bêta-carotène.',
    ingredients: [
      '200g lentilles corail',
      '2 carottes râpées',
      '1 bouquet de coriandre',
      '1 c.à.c cumin moulu',
      '2 c.à.s huile d\'olive',
      '1 citron',
      'Sel Santé'
    ],
    etapes: [
      'Rincez et cuisez les lentilles corail 10 min dans l\'eau bouillante. Égouttez.',
      'Laissez tiédir. Mélangez avec les carottes râpées.',
      'Assaisonnez avec le cumin, l\'huile d\'olive et le jus de citron.',
      'Parsemez de coriandre fraîche.',
      'Servez tiède ou froid.'
    ]
  },
  {
    id: 105, cat: 'dejeuner', premium: false,
    emoji: '🌾', nom: 'Taboulé de quinoa frais menthe-persil',
    temps: '20 min + 30min repos', calories: 340, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le quinoa remplace la semoule — naturellement sans gluten et protéiné. Le persil est l\'herbe la plus riche en fer et vitamine C. La menthe est digestive et anti-spasmodique.',
    ingredients: [
      '200g quinoa',
      '1 bouquet de persil plat',
      '10 feuilles de menthe fraîche',
      '3 tomates',
      '½ concombre',
      '2 citrons (jus)',
      '3 c.à.s huile d\'olive, Sel Santé'
    ],
    etapes: [
      'Cuisez le quinoa 15 min. Égouttez et laissez refroidir complètement.',
      'Hachez finement persil et menthe.',
      'Coupez tomates et concombre en petits dés.',
      'Mélangez quinoa, herbes et légumes.',
      'Assaisonnez avec citron, huile et sel. Laissez reposer 30 min au frais.'
    ]
  },
  {
    id: 106, cat: 'dejeuner', premium: false,
    emoji: '🥗', nom: 'Salade kale massé pomme-noix',
    temps: '15 min', calories: 310, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le kale est le légume le plus riche en calcium végétal. Le massage à l\'huile le rend plus digeste et libère ses nutriments. Les noix apportent des oméga-3. Anti-inflammatoire puissant.',
    ingredients: [
      '200g kale frais',
      '2 c.à.s huile d\'olive',
      '1 pomme',
      '50g noix',
      '1 citron',
      '1 c.à.s vinaigre de cidre',
      'Sel Santé'
    ],
    etapes: [
      'Retirez les tiges du kale. Déchirez les feuilles en morceaux.',
      'Massez les feuilles avec l\'huile d\'olive et le citron pendant 2-3 min — elles deviennent tendres.',
      'Coupez la pomme en fines lamelles.',
      'Mélangez kale, pomme et noix grossièrement concassées.',
      'Assaisonnez avec le vinaigre et le Sel Santé.'
    ]
  },
  {
    id: 107, cat: 'dejeuner', premium: false,
    emoji: '🐟', nom: 'Salade betteraves-harengs fumés-pomme',
    temps: '10 min', calories: 380, diff: 'Très facile',
    tags: ['sg', 'sl'],
    benefices: 'Le hareng fumé est encore plus riche en oméga-3 que le saumon. La betterave améliore la circulation sanguine. La pomme apporte de la quercétine anti-inflammatoire.',
    ingredients: [
      '2 betteraves cuites',
      '150g filets de hareng fumé',
      '1 pomme',
      '1 c.à.s câpres',
      '2 c.à.s huile de colza',
      '1 c.à.s vinaigre de cidre',
      'Aneth, Sel Santé'
    ],
    etapes: [
      'Coupez les betteraves et la pomme en cubes.',
      'Coupez les harengs en morceaux.',
      'Mélangez délicatement tous les ingrédients.',
      'Assaisonnez avec l\'huile de colza, le vinaigre et le Sel Santé.',
      'Parsemez d\'aneth frais.'
    ]
  },
  {
    id: 108, cat: 'dejeuner', premium: true,
    emoji: '🍱', nom: 'Bowl riz noir-crevettes-edamames',
    temps: '30 min', calories: 450, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Le riz noir vénéré est riche en anthocyanes — plus que les myrtilles ! Les crevettes sont une excellente source de zinc et de fer. Les edamames apportent des protéines végétales complètes.',
    ingredients: [
      '150g riz noir vénéré',
      '150g crevettes décortiquées',
      '100g edamames',
      '1 radis noir',
      '2 c.à.s tamari (sg)',
      '1 c.à.s huile de sésame',
      'Graines de sésame, citron vert'
    ],
    etapes: [
      'Cuisez le riz noir 30-35 min. Il doit rester légèrement al dente.',
      'Faites sauter les crevettes dans l\'huile de sésame 3 min.',
      'Ajoutez les edamames et le tamari. Mélangez 1 min.',
      'Dressez : riz noir, crevettes, edamames, radis noir en lamelles.',
      'Parsemez de sésame et arrosez de jus de citron vert.'
    ]
  },
  {
    id: 109, cat: 'dejeuner', premium: true,
    emoji: '🌯', nom: 'Wraps de laitue au poulet-avocat',
    temps: '15 min', calories: 320, diff: 'Très facile',
    tags: ['sg', 'sl'],
    benefices: 'Zéro glucides transformés — la laitue remplace la tortilla. Le poulet est riche en tryptophane et protéines. L\'avocat apporte des graisses anti-inflammatoires. Idéal déjeuner bureau léger.',
    ingredients: [
      '4 grandes feuilles de laitue iceberg',
      '150g poulet cuit émietté',
      '1 avocat',
      '1 tomate',
      '1 citron vert',
      'Coriandre fraîche',
      'Sel Santé'
    ],
    etapes: [
      'Lavez et séchez les feuilles de laitue.',
      'Écrasez l\'avocat avec le jus de citron vert et le Sel Santé.',
      'Coupez la tomate en petits dés.',
      'Étalez la purée d\'avocat sur chaque feuille de laitue.',
      'Garnissez de poulet émietté, tomate et coriandre. Roulez et dégustez.'
    ]
  },
  {
    id: 110, cat: 'dejeuner', premium: true,
    emoji: '🥗', nom: 'Salade haricots blancs-thon-basilic',
    temps: '10 min', calories: 390, diff: 'Très facile',
    tags: ['sg', 'sl'],
    benefices: 'Les haricots blancs sont riches en fer et fibres prébiotiques. Le thon apporte des oméga-3 et protéines. Le basilic est anti-inflammatoire et favorise la production de dopamine.',
    ingredients: [
      '400g haricots blancs cuits',
      '1 boîte de thon au naturel',
      '1 bouquet de basilic frais',
      '4 oignons nouveaux',
      '2 c.à.s huile d\'olive',
      '1 citron',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Rincez et égouttez les haricots blancs.',
      'Émiettez le thon.',
      'Émincez les oignons nouveaux.',
      'Mélangez haricots, thon et oignons.',
      'Assaisonnez avec l\'huile d\'olive, le citron et le Sel Santé. Parsemez de basilic.'
    ]
  },
  {
    id: 111, cat: 'dejeuner', premium: true,
    emoji: '🐠', nom: 'Poke bowl thon-wakamé-riz vinaigré',
    temps: '25 min', calories: 480, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Le wakamé est riche en iode, magnésium et calcium. Le thon cru sushi-grade est une source concentrée d\'oméga-3. Un plat complet anti-SJSR inspiré de la cuisine hawaïenne.',
    ingredients: [
      '150g riz à sushi',
      '2 c.à.s vinaigre de riz',
      '150g thon cru qualité sushi',
      '20g algues wakamé réhydratées',
      '½ concombre',
      '1 c.à.s tamari',
      '1 c.à.s huile de sésame, graines de sésame'
    ],
    etapes: [
      'Cuisez le riz. Laissez tiédir et assaisonnez avec le vinaigre de riz.',
      'Coupez le thon en cubes.',
      'Réhydratez le wakamé 5 min dans l\'eau froide.',
      'Coupez le concombre en fines rondelles.',
      'Assemblez : riz, thon, wakamé, concombre. Assaisonnez avec tamari et huile de sésame.'
    ]
  },

  // --- PLATS CHAUDS / DÎNERS ---
  {
    id: 112, cat: 'diner', premium: false,
    emoji: '🥦', nom: 'Wok poulet-brocolis-noix de cajou-tamari',
    temps: '20 min', calories: 420, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Le brocoli est une des meilleures sources de vitamine C (booste l\'absorption du fer). Les noix de cajou apportent du zinc et magnésium. Le tamari sans gluten remplace la sauce soja.',
    ingredients: [
      '2 blancs de poulet',
      '200g brocolis',
      '60g noix de cajou',
      '3 c.à.s tamari sans gluten',
      '1 cm gingembre râpé',
      '2 gousses d\'ail',
      '1 c.à.s huile de sésame'
    ],
    etapes: [
      'Coupez le poulet en lanières.',
      'Faites chauffer l\'huile de sésame à feu vif.',
      'Faites sauter le poulet 4 min. Réservez.',
      'Dans la même poêle, faites sauter ail, gingembre et brocolis 3 min.',
      'Remettez le poulet, ajoutez tamari et cajou. Mélangez 1 min.'
    ]
  },
  {
    id: 113, cat: 'diner', premium: false,
    emoji: '🫙', nom: 'Zoodles courgette au pesto basilic-pignons',
    temps: '15 min', calories: 280, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Zéro glucides ! Les courgettes remplacent les pâtes. Le basilic est riche en antioxydants et favorise la dopamine. Les pignons apportent du zinc et du magnésium. Dîner ultra-léger.',
    ingredients: [
      '3 courgettes',
      '1 bouquet de basilic frais',
      '30g pignons de pin',
      '1 gousse d\'ail',
      '4 c.à.s huile d\'olive',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Faites des filaments de courgette avec un spiraliseur ou épluche-légumes.',
      'Pour le pesto : mixez basilic, pignons, ail et huile d\'olive.',
      'Assaisonnez le pesto avec le Sel Santé.',
      'Mélangez les zoodles avec le pesto froid.',
      'Servez immédiatement — les courgettes crues ou à peine chauffées.'
    ]
  },
  {
    id: 114, cat: 'diner', premium: false,
    emoji: '🐟', nom: 'Daurade au four fenouil-orange',
    temps: '35 min', calories: 350, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'La daurade est riche en protéines légères et oméga-3. Le fenouil est anti-spasmodique et favorise le sommeil. L\'orange apporte de la vitamine C qui optimise l\'absorption du fer.',
    ingredients: [
      '1 daurade (ou 2 filets)',
      '1 bulbe de fenouil',
      '1 orange',
      '3 c.à.s huile d\'olive',
      'Thym, romarin',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Préchauffez le four à 190°C.',
      'Émincez le fenouil et disposez dans un plat.',
      'Ajoutez des rondelles d\'orange.',
      'Posez la daurade par-dessus, arrosez d\'huile d\'olive.',
      'Parsemez de thym et romarin. Enfournez 25-30 min.'
    ]
  },
  {
    id: 115, cat: 'diner', premium: false,
    emoji: '🍅', nom: 'Shakshuka œufs-poivrons-tomates épicée',
    temps: '25 min', calories: 310, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le lycopène des tomates cuites est plus biodisponible que cru. Les poivrons sont riches en vitamine C. Les épices (cumin, paprika) sont anti-inflammatoires. Un dîner complet économique.',
    ingredients: [
      '4 œufs bio',
      '400g tomates concassées',
      '2 poivrons rouges',
      '1 oignon',
      '2 gousses d\'ail',
      '1 c.à.c cumin',
      '1 c.à.c paprika',
      'Coriandre fraîche, Sel Santé'
    ],
    etapes: [
      'Faites revenir oignon et ail dans l\'huile d\'olive.',
      'Ajoutez les poivrons émincés et cuisez 5 min.',
      'Ajoutez les tomates, le cumin et le paprika. Laissez mijoter 10 min.',
      'Creusez 4 puits dans la sauce. Cassez un œuf dans chaque puits.',
      'Couvrez et cuisez 5-7 min. Parsemez de coriandre fraîche.'
    ]
  },
  {
    id: 116, cat: 'diner', premium: true,
    emoji: '🌾', nom: 'Kasha sarrasin grillé-champignons-tofu',
    temps: '25 min', calories: 360, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le kasha (sarrasin grillé) est plus riche en magnésium que le sarrasin cru. Les champignons apportent de la vitamine D et du sélénium. Le tofu au tamari est une protéine complète végétale.',
    ingredients: [
      '200g sarrasin grillé (kasha)',
      '200g champignons mélangés',
      '150g tofu ferme',
      '2 carottes',
      '2 c.à.s tamari',
      '1 oignon',
      'Huile d\'olive, Sel Santé'
    ],
    etapes: [
      'Coupez le tofu en cubes et faites-le mariner dans le tamari 15 min.',
      'Cuisez le kasha 10 min dans le double de son volume d\'eau.',
      'Faites revenir oignon, carottes et champignons dans l\'huile d\'olive.',
      'Ajoutez le tofu et faites dorer.',
      'Incorporez le kasha cuit. Mélangez et assaisonnez avec le Sel Santé.'
    ]
  },
  {
    id: 117, cat: 'diner', premium: true,
    emoji: '🦃', nom: 'Blanquette de dinde légère au coco',
    temps: '40 min', calories: 390, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'La dinde est la viande la plus riche en tryptophane — précurseur de la sérotonine et mélatonine. Idéale le soir pour favoriser l\'endormissement. Le lait de coco remplace la crème fraîche.',
    ingredients: [
      '400g escalopes de dinde',
      '200g champignons',
      '2 carottes',
      '200ml lait de coco',
      '200ml bouillon de volaille',
      '1 oignon, bouquet garni',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Coupez la dinde en cubes.',
      'Faites revenir l\'oignon dans l\'huile d\'olive.',
      'Ajoutez la dinde et faites dorer.',
      'Ajoutez carottes, champignons, bouillon et lait de coco.',
      'Laissez mijoter à feu doux 25 min avec le bouquet garni.'
    ]
  },
  {
    id: 118, cat: 'diner', premium: true,
    emoji: '🐟', nom: 'Thon grillé sésame-purée de panais',
    temps: '25 min', calories: 420, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Le thon grillé est une source concentrée d\'oméga-3 et de protéines. Le panais est riche en potassium et vitamine C. Le sésame apporte du calcium et du zinc.',
    ingredients: [
      '2 pavés de thon',
      '3 c.à.s graines de sésame',
      '4 panais',
      '100ml lait d\'amande',
      '1 c.à.s huile d\'olive',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Cuisez les panais à la vapeur 15 min. Mixez avec le lait d\'amande.',
      'Assaisonnez la purée avec le Sel Santé.',
      'Panez les pavés de thon dans les graines de sésame des 2 côtés.',
      'Faites saisir à feu vif 2 min chaque côté — le cœur doit rester rosé.',
      'Servez le thon sur la purée de panais.'
    ]
  },
  {
    id: 119, cat: 'diner', premium: true,
    emoji: '🐠', nom: 'Boulettes de sardines à la marocaine',
    temps: '30 min', calories: 340, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Les sardines fraîches sont la source de fer héminique la plus économique. Cumin + coriandre + persil = trio anti-inflammatoire marocain. Riche en oméga-3 et calcium (arêtes).',
    ingredients: [
      '400g sardines fraîches vidées',
      '1 bouquet de persil',
      '2 gousses d\'ail',
      '1 c.à.c cumin',
      '400g tomates concassées',
      '1 c.à.c paprika',
      'Huile d\'olive, Sel Santé'
    ],
    etapes: [
      'Levez les filets de sardines ou demandez à votre poissonnier.',
      'Mixez les filets avec le persil, l\'ail et le cumin.',
      'Formez des petites boulettes.',
      'Préparez la sauce : faites mijoter les tomates avec le paprika 10 min.',
      'Plongez les boulettes dans la sauce et cuisez 12 min à feu doux.'
    ]
  },
  {
    id: 120, cat: 'diner', premium: false,
    emoji: '🎃', nom: 'Potimarron rôti au thym-huile d\'olive',
    temps: '35 min', calories: 230, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le potimarron (avec sa peau si bio) est riche en bêta-carotène et potassium. Le thym est antibactérien et anti-inflammatoire. Un accompagnement ou plat léger idéal pour le soir.',
    ingredients: [
      '1 potimarron bio',
      '3 c.à.s huile d\'olive',
      '4 branches de thym frais',
      '2 gousses d\'ail en chemise',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Préchauffez le four à 200°C.',
      'Lavez le potimarron et coupez-le en quartiers (peau conservée si bio).',
      'Disposez sur une plaque avec l\'ail en chemise.',
      'Arrosez d\'huile d\'olive, parsemez de thym, assaisonnez.',
      'Enfournez 30 min jusqu\'à fondant et légèrement caramélisé.'
    ]
  },
  {
    id: 121, cat: 'diner', premium: true,
    emoji: '🍆', nom: 'Moussaka sans lactose crème de cajou',
    temps: '60 min', calories: 430, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'La moussaka revisitée sans béchamel — la crème de cajou remplace parfaitement la sauce lactée. L\'aubergine est riche en antioxydants. La viande hachée apporte du fer héminique.',
    ingredients: [
      '3 aubergines',
      '400g viande hachée de bœuf maigre',
      '400g tomates concassées',
      '150g noix de cajou trempées',
      '200ml eau',
      '1 c.à.c noix de muscade',
      'Cannelle, Sel Santé'
    ],
    etapes: [
      'Coupez les aubergines en rondelles et faites-les griller à l\'huile d\'olive.',
      'Faites revenir la viande avec les tomates, cannelle et Sel Santé.',
      'Mixez les cajou égouttés avec l\'eau et la muscade pour la béchamel de cajou.',
      'Dans un plat : couche d\'aubergines, couche de viande, couche d\'aubergines.',
      'Nappez de crème de cajou. Enfournez 30 min à 180°C.'
    ]
  },

  // --- SOUPES, SNACKS & DESSERTS ---
  {
    id: 122, cat: 'diner', premium: false,
    emoji: '🥦', nom: 'Velouté de chou-fleur à la muscade',
    temps: '25 min', calories: 200, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le chou-fleur est riche en vitamine C et sulforaphane, un puissant antioxydant anti-inflammatoire. La muscade a des propriétés sédatives légères — idéale pour un dîner favorisant le sommeil.',
    ingredients: [
      '1 chou-fleur',
      '200ml lait d\'amande',
      '1 pincée de muscade',
      '1 oignon',
      '1 c.à.s huile d\'olive',
      'Graines de courge, Sel Santé'
    ],
    etapes: [
      'Coupez le chou-fleur en fleurettes. Faites cuire à la vapeur 15 min.',
      'Faites revenir l\'oignon dans l\'huile d\'olive.',
      'Mixez chou-fleur, oignon et lait d\'amande jusqu\'à consistance veloutée.',
      'Ajoutez la muscade et le Sel Santé.',
      'Servez avec des graines de courge toastées.'
    ]
  },
  {
    id: 123, cat: 'diner', premium: true,
    emoji: '🫙', nom: 'Soupe miso-tofu-algues',
    temps: '10 min', calories: 180, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le miso est un aliment fermenté riche en probiotiques bénéfiques pour le microbiote. Le tofu apporte des protéines végétales complètes. Les algues sont riches en iode et minéraux.',
    ingredients: [
      '1L eau',
      '3 c.à.s pâte miso sans gluten',
      '150g tofu soyeux en dés',
      '10g algues wakamé séchées',
      '3 oignons nouveaux émincés',
      '1 c.à.s tamari'
    ],
    etapes: [
      'Portez l\'eau à frémissement — ne pas bouillir pour préserver les probiotiques du miso.',
      'Réhydratez le wakamé 5 min dans l\'eau froide. Égouttez.',
      'Délayez la pâte miso dans un peu d\'eau chaude.',
      'Ajoutez le miso délayé, le tofu et le wakamé dans la casserole.',
      'Chauffez 2 min. Parsemez d\'oignons nouveaux et servez immédiatement.'
    ]
  },
  {
    id: 124, cat: 'snack', premium: false,
    emoji: '🥑', nom: 'Guacamole maison express',
    temps: '5 min', calories: 180, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'L\'avocat est la star des graisses anti-inflammatoires. Le citron vert apporte de la vitamine C. La coriandre est un chélateur naturel de métaux lourds. Un snack parfait et nutritif.',
    ingredients: [
      '2 avocats mûrs',
      '½ oignon rouge',
      '1 citron vert (jus)',
      '½ piment jalapeño (optionnel)',
      '1 bouquet de coriandre fraîche',
      'Sel Santé'
    ],
    etapes: [
      'Écrasez les avocats à la fourchette — gardez une texture rustique.',
      'Émincez finement l\'oignon rouge.',
      'Hachez la coriandre.',
      'Mélangez tous les ingrédients.',
      'Assaisonnez avec le jus de citron vert et le Sel Santé. Servez immédiatement.'
    ]
  },
  {
    id: 125, cat: 'snack', premium: false,
    emoji: '🍫', nom: 'Mousse chocolat à l\'aquafaba',
    temps: '15 min + 1h frigo', calories: 195, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'L\'aquafaba (jus de pois chiches) monte en neige comme des blancs d\'œufs — zéro œuf, vegan ! Le chocolat 85% est riche en magnésium et flavonoïdes anti-inflammatoires. Un dessert bluffant.',
    ingredients: [
      '150g chocolat noir 85%',
      '150ml aquafaba (jus boîte pois chiches)',
      '1 c.à.s sirop d\'agave',
      '1 c.à.c extrait de vanille'
    ],
    etapes: [
      'Faites fondre le chocolat au bain-marie. Laissez refroidir 10 min.',
      'Montez l\'aquafaba en neige ferme au batteur électrique (5-7 min).',
      'Incorporez délicatement le chocolat fondu à l\'aquafaba en neige.',
      'Ajoutez le sirop d\'agave et la vanille. Mélangez délicatement.',
      'Répartissez dans des verrines. Réfrigérez 1h minimum.'
    ]
  },
  {
    id: 126, cat: 'snack', premium: false,
    emoji: '🍎', nom: 'Pommes au four cannelle-noix',
    temps: '5 min + 25min four', calories: 160, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La pomme cuite libère plus de quercétine qu\'en version crue. La cannelle régule la glycémie et est anti-inflammatoire. Les noix apportent des oméga-3. Un dessert simple et réconfortant.',
    ingredients: [
      '4 pommes',
      '1 c.à.c cannelle',
      '40g noix concassées',
      '1 c.à.s sirop d\'érable',
      '1 c.à.s raisins secs'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Évidez les pommes en gardant la base intacte.',
      'Mélangez noix, raisins, cannelle et sirop d\'érable.',
      'Garnissez les pommes de cette préparation.',
      'Enfournez 25 min jusqu\'à ce que les pommes soient fondantes.'
    ]
  },
  {
    id: 127, cat: 'snack', premium: false,
    emoji: '🍓', nom: 'Sorbet minute framboise-lait de coco',
    temps: '3 min', calories: 120, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les framboises sont riches en ellagitanins, des antioxydants anti-inflammatoires puissants. Zéro sucre ajouté, zéro lactose. Un dessert express sain et délicieux.',
    ingredients: [
      '300g framboises surgelées',
      '3 c.à.s lait de coco',
      '1 c.à.s sirop d\'agave (optionnel)'
    ],
    etapes: [
      'Placez les framboises surgelées dans le blender.',
      'Ajoutez le lait de coco.',
      'Mixez jusqu\'à obtenir une texture crémeuse et homogène.',
      'Ajoutez du sirop d\'agave si trop acide.',
      'Servez immédiatement dans des verrines.'
    ]
  },
  {
    id: 128, cat: 'snack', premium: false,
    emoji: '🌿', nom: 'Infusion gingembre-citron anti-inflammatoire',
    temps: '5 min', calories: 10, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le gingembre frais contient des gingérols et shogaols aux propriétés anti-inflammatoires prouvées cliniquement. Le citron alcalinise l\'organisme. La meilleure boisson après chaque repas pour le SJSR.',
    ingredients: [
      '3 cm gingembre frais',
      '1 citron bio',
      '300ml eau bouillante',
      '1 c.à.c miel (optionnel)',
      '1 pincée de curcuma'
    ],
    etapes: [
      'Râpez ou tranchez finement le gingembre frais.',
      'Versez l\'eau chaude (90°C) sur le gingembre.',
      'Ajoutez le jus de citron et une rondelle pour la déco.',
      'Laissez infuser 5 min.',
      'Ajoutez le curcuma et le miel. Buvez chaud.'
    ]
  },
  {
    id: 129, cat: 'snack', premium: false,
    emoji: '🍫', nom: 'Chocolat noir 85% et amandes — snack SJSR',
    temps: '1 min', calories: 180, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le snack anti-SJSR le plus simple : 2 carrés de chocolat 85% = 50mg de magnésium. 10 amandes = magnésium + vitamine E + calcium. À consommer en soirée devant la TV.',
    ingredients: [
      '2 carrés de chocolat noir 85% minimum',
      '10 amandes entières',
      '1 pincée de fleur de sel (optionnel)'
    ],
    etapes: [
      'Sortez le chocolat du réfrigérateur 5 min avant pour libérer les arômes.',
      'Disposez les amandes dans un petit bol.',
      'Savourez lentement en laissant fondre le chocolat.',
      'La fleur de sel exalte les flavonoïdes du chocolat.',
      'Parfait devant un bon drama coréen 🌙'
    ]
  },
  {
    id: 130, cat: 'snack', premium: true,
    emoji: '⚡', nom: 'Energy balls dattes-cacao-amandes',
    temps: '15 min + 30min frigo', calories: 170, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les dattes + amandes + cacao = combinaison parfaite fer + magnésium + flavonoïdes. Sans sucre ajouté, sans cuisson. Le cacao cru préserve tous les antioxydants contrairement au cacao traité.',
    ingredients: [
      '200g dattes Medjool dénoyautées',
      '100g amandes',
      '2 c.à.s cacao cru en poudre',
      '1 c.à.c extrait de vanille',
      'Noix de coco râpée pour rouler'
    ],
    etapes: [
      'Mixez les amandes jusqu\'à poudre grossière.',
      'Ajoutez les dattes, le cacao et la vanille.',
      'Mixez jusqu\'à formation d\'une boule homogène.',
      'Formez des boules de la taille d\'une noix.',
      'Roulez dans la noix de coco. Réfrigérez 30 min. Conservez 2 semaines au frigo.'
    ]
  },
  {
    id: 131, cat: 'petit-dejeuner', premium: false,
    emoji: '🌱', nom: 'Miam-ô-Fruit banane-colza-graines',
    temps: '5 min', calories: 320, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La méthode Kousmine revisitée : la banane écrasée + huile de colza (oméga-3) + graines = petit-déjeuner complet anti-inflammatoire. L\'huile de colza est à consommer froide uniquement.',
    ingredients: [
      '½ banane bien mûre',
      '2 c.à.s huile de colza bio (premier froid)',
      '1 c.à.s graines de lin moulues',
      '1 c.à.s graines de sésame',
      'Fruits de saison au choix',
      '1 c.à.c jus de citron'
    ],
    etapes: [
      'Écrasez la banane à la fourchette dans un bol.',
      'Incorporez immédiatement l\'huile de colza en mélangeant vigoureusement.',
      'Ajoutez le jus de citron pour éviter l\'oxydation.',
      'Parsemez des graines moulues.',
      'Ajoutez les fruits de saison coupés en morceaux. Consommez immédiatement.'
    ]
  },
  {
    id: 132, cat: 'dejeuner', premium: true,
    emoji: '🥗', nom: 'Carpaccio de courgettes crues-huile de cameline',
    temps: '10 min', calories: 190, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'L\'huile de cameline est la plus riche en oméga-3 végétaux (34%) après le lin. La courgette crue est plus riche en vitamines. La menthe est digestive et anti-spasmodique.',
    ingredients: [
      '3 courgettes fraîches',
      '3 c.à.s huile de cameline (ou colza)',
      '1 citron',
      'Feuilles de menthe fraîche',
      'Sel Santé, poivre',
      'Zeste de citron'
    ],
    etapes: [
      'Tranchez très finement les courgettes à la mandoline (2mm).',
      'Disposez en rosace dans les assiettes.',
      'Arrosez d\'huile de cameline et de jus de citron.',
      'Assaisonnez avec le Sel Santé et le poivre.',
      'Parsemez de feuilles de menthe et de zeste de citron.'
    ]
  },
  {
    id: 133, cat: 'dejeuner', premium: true,
    emoji: '🥗', nom: 'Salade riz sauvage-potimarron-canneberges',
    temps: '40 min', calories: 390, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le riz sauvage est techniquement une graminée sans gluten, riche en magnésium. Le potimarron est riche en bêta-carotène. Les canneberges sont anti-inflammatoires et riches en antioxydants.',
    ingredients: [
      '150g riz sauvage',
      '300g potimarron',
      '50g canneberges séchées',
      '50g amandes effilées',
      '3 c.à.s huile d\'olive',
      '1 orange (jus)',
      'Persil, Sel Santé'
    ],
    etapes: [
      'Cuisez le riz sauvage 40 min. Égouttez.',
      'Coupez le potimarron en cubes et rôtissez à 200°C 20 min.',
      'Toastez les amandes à sec dans une poêle.',
      'Mélangez riz, potimarron, canneberges et amandes.',
      'Assaisonnez avec l\'huile d\'olive, le jus d\'orange et le Sel Santé.'
    ]
  },
  {
    id: 134, cat: 'diner', premium: true,
    emoji: '🥩', nom: 'Chili con carne léger haricots rouges',
    temps: '35 min', calories: 410, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Le bœuf maigre est riche en fer héminique et zinc. Les haricots rouges apportent du fer végétal et des fibres. Le piment contient de la capsaïcine anti-inflammatoire. Idéal batch cooking.',
    ingredients: [
      '300g bœuf haché maigre',
      '400g haricots rouges cuits',
      '400g purée de tomates',
      '1 oignon, 2 gousses d\'ail',
      '1 c.à.c cumin',
      '1 c.à.c piment en poudre',
      'Coriandre fraîche, Sel Santé'
    ],
    etapes: [
      'Faites revenir oignon et ail dans l\'huile d\'olive.',
      'Ajoutez la viande et faites dorer en émiettant.',
      'Ajoutez le cumin et le piment. Mélangez 1 min.',
      'Incorporez la purée de tomates et les haricots.',
      'Laissez mijoter 20 min. Parsemez de coriandre fraîche.'
    ]
  },
  {
    id: 135, cat: 'diner', premium: true,
    emoji: '🍄', nom: 'Risotto de riz complet champignons-purée d\'amande',
    temps: '45 min', calories: 420, diff: 'Moyen',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le riz complet conserve son magnésium et fibres. La purée d\'amande remplace le beurre — apport de vitamine E et graisses saines. Les champignons apportent du sélénium et vitamine D.',
    ingredients: [
      '200g riz complet',
      '300g champignons mélangés',
      '1 oignon',
      '700ml bouillon de légumes chaud',
      '2 c.à.s purée d\'amande',
      '2 c.à.s levure nutritionnelle',
      'Thym, Sel Santé'
    ],
    etapes: [
      'Faites revenir l\'oignon dans l\'huile d\'olive.',
      'Ajoutez le riz et faites-le nacrer 2 min.',
      'Incorporez le bouillon louche par louche en remuant.',
      'Ajoutez les champignons à mi-cuisson (30 min total).',
      'En fin de cuisson, incorporez la purée d\'amande et la levure nutritionnelle.'
    ]
  },
  {
    id: 136, cat: 'dejeuner', premium: false,
    emoji: '🥗', nom: 'Salade patate douce froide-roquette-pignons',
    temps: '30 min', calories: 360, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La patate douce froide développe de l\'amidon résistant — un prébiotique excellent pour le microbiote. La roquette est riche en fer et glucosinolates anti-inflammatoires. Les pignons apportent du zinc.',
    ingredients: [
      '2 patates douces',
      '80g roquette',
      '30g pignons de pin',
      '1 citron',
      '3 c.à.s huile d\'olive',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Coupez les patates douces en cubes et rôtissez à 200°C 20 min.',
      'Laissez refroidir complètement.',
      'Toastez les pignons à sec dans une poêle.',
      'Mélangez patates douces froides et roquette.',
      'Préparez la vinaigrette au citron et assaisonnez. Parsemez de pignons.'
    ]
  },
  {
    id: 137, cat: 'dejeuner', premium: true,
    emoji: '🥗', nom: 'Nems raw légumes-tofu fumé feuilles de riz',
    temps: '20 min', calories: 290, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les nems raw sans friture conservent tous les nutriments. Le tofu fumé apporte des protéines végétales. Les légumes crus sont riches en enzymes digestives. Une entrée légère et colorée.',
    ingredients: [
      '8 feuilles de riz',
      '2 carottes en julienne',
      '½ concombre en bâtonnets',
      '1 avocat',
      '100g tofu fumé',
      'Menthe fraîche',
      'Sauce tamari-gingembre pour tremper'
    ],
    etapes: [
      'Trempez les feuilles de riz 20 sec dans l\'eau tiède.',
      'Disposez sur un torchon humide.',
      'Garnissez de carottes, concombre, avocat et tofu fumé.',
      'Ajoutez des feuilles de menthe fraîche.',
      'Roulez en serrant bien. Servez avec la sauce tamari-gingembre.'
    ]
  },
  {
    id: 138, cat: 'snack', premium: true,
    emoji: '🥜', nom: 'Granola sans céréales amandes-cajou-sésame',
    temps: '20 min', calories: 290, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Granola paléo — zéro céréale, zéro gluten ! Les noix apportent des graisses saines, du magnésium et du zinc. Les graines de courge sont riches en tryptophane. Se conserve 1 mois en bocal.',
    ingredients: [
      '150g amandes',
      '100g noix de cajou',
      '50g graines de courge',
      '2 c.à.s huile de coco fondue',
      '2 c.à.s sirop d\'érable',
      '1 c.à.c cannelle'
    ],
    etapes: [
      'Préchauffez le four à 160°C.',
      'Concassez grossièrement amandes et cajou.',
      'Mélangez avec les graines de courge, l\'huile de coco, le sirop d\'érable et la cannelle.',
      'Étalez sur une plaque recouverte de papier cuisson.',
      'Enfournez 15 min en remuant à mi-cuisson. Laissez refroidir complètement avant de ranger.'
    ]
  },

  // =============================================
  // BRUNCH — 15 recettes sg/sl anti-inflam
  // Spéciales week-end, conviviales, généreuses
  // =============================================
  {
    id: 139, cat: 'brunch', premium: false,
    emoji: '🥞', nom: 'Pancakes sarrasin-myrtilles sauce érable',
    temps: '25 min', calories: 420, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le sarrasin est la céréale reine du SJSR — magnésium, rutine, fer. Les myrtilles apportent des anthocyanes anti-inflammatoires. Un brunch convivial qui prend soin de tes jambes.',
    ingredients: [
      '200g farine de sarrasin',
      '2 œufs bio',
      '250ml lait de riz',
      '1 c.à.s huile de coco',
      '150g myrtilles fraîches ou surgelées',
      '3 c.à.s sirop d\'érable',
      '1 c.à.c levure sans gluten'
    ],
    etapes: [
      'Mélangez farine, levure, lait de riz et œufs jusqu\'à pâte lisse.',
      'Laissez reposer 10 min.',
      'Faites chauffer une poêle huilée à feu moyen.',
      'Versez des louches de pâte, posez quelques myrtilles dessus.',
      'Cuisez 3 min chaque côté. Servez avec le sirop d\'érable.'
    ]
  },
  {
    id: 140, cat: 'brunch', premium: false,
    emoji: '🥑', nom: 'Toast avocat-saumon fumé-œuf poché',
    temps: '15 min', calories: 450, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Le trio gagnant SJSR : oméga-3 du saumon + graisses anti-inflammatoires de l\'avocat + fer et B12 de l\'œuf. Un brunch protéiné qui tient toute la matinée.',
    ingredients: [
      '2 tranches pain de sarrasin grillé',
      '1 avocat mûr',
      '100g saumon fumé',
      '2 œufs bio',
      '1 citron',
      'Aneth frais, câpres',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Portez l\'eau à frémissement avec un trait de vinaigre.',
      'Écrasez l\'avocat avec le citron et le Sel Santé.',
      'Faites pocher les œufs 3 min (jaune coulant).',
      'Étalez l\'avocat sur le pain grillé, disposez le saumon.',
      'Posez l\'œuf poché, parsemez d\'aneth et câpres.'
    ]
  },
  {
    id: 141, cat: 'brunch', premium: false,
    emoji: '🍳', nom: 'Shakshuka végétarienne aux poivrons',
    temps: '30 min', calories: 380, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Plat convivial du Moyen-Orient. Les poivrons rouges sont champions de la vitamine C — idéal pour absorber le fer végétal. Les tomates cuites libèrent leur lycopène anti-inflammatoire.',
    ingredients: [
      '4 œufs bio',
      '400g tomates concassées',
      '2 poivrons rouges',
      '1 oignon rouge',
      '3 gousses d\'ail',
      '1 c.à.c cumin, 1 c.à.c paprika fumé',
      'Coriandre fraîche, Sel Santé'
    ],
    etapes: [
      'Faites revenir oignon et ail dans l\'huile d\'olive.',
      'Ajoutez les poivrons émincés, cuisez 8 min.',
      'Incorporez les tomates, cumin et paprika. Mijotez 10 min.',
      'Creusez 4 nids, cassez un œuf dans chacun.',
      'Couvrez et cuisez 5-6 min. Parsemez de coriandre fraîche.'
    ]
  },
  {
    id: 142, cat: 'brunch', premium: false,
    emoji: '🫐', nom: 'Bowl açaï topping granola-fruits frais',
    temps: '10 min', calories: 390, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'L\'açaï est l\'un des aliments les plus riches en antioxydants au monde. Le granola maison apporte magnésium et fibres. Un brunch Instagram-friendly qui fait du bien à l\'intérieur.',
    ingredients: [
      '200g pulpe d\'açaï surgelée',
      '1 banane congelée',
      '100ml lait de coco',
      '50g granola sg maison',
      'Myrtilles, fraises, kiwi',
      '2 c.à.s noix de coco râpée',
      '1 c.à.s graines de chia'
    ],
    etapes: [
      'Mixez la pulpe d\'açaï avec la banane congelée et le lait de coco.',
      'Versez dans un grand bol — la texture doit être épaisse.',
      'Disposez le granola d\'un côté, les fruits de l\'autre.',
      'Parsemez de noix de coco et graines de chia.',
      'Servez immédiatement avec une cuillère large.'
    ]
  },
  {
    id: 143, cat: 'brunch', premium: true,
    emoji: '🧇', nom: 'Gaufres teff-banane sauce framboise',
    temps: '30 min', calories: 440, diff: 'Moyen',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le teff est la céréale la plus riche en fer — une gaufre = autant de fer que 100g de bœuf. La sauce framboise apporte des antioxydants et de la vitamine C qui booste l\'absorption du fer.',
    ingredients: [
      '200g farine de teff',
      '2 bananes mûres',
      '200ml lait d\'amande',
      '2 œufs bio',
      '2 c.à.s huile de coco',
      '200g framboises fraîches',
      '2 c.à.s sirop d\'agave',
      '1 c.à.c levure sg'
    ],
    etapes: [
      'Écrasez les bananes, mélangez avec les œufs, le lait et l\'huile.',
      'Incorporez la farine de teff et la levure.',
      'Faites chauffer le gaufrier huilé.',
      'Cuisez chaque gaufre 4-5 min.',
      'Mixez les framboises avec le sirop d\'agave. Servez sur les gaufres chaudes.'
    ]
  },
  {
    id: 144, cat: 'brunch', premium: true,
    emoji: '🥗', nom: 'Buddha bowl brunch saumon-avocat-quinoa',
    temps: '25 min', calories: 510, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Un repas complet anti-SJSR dans un bol : oméga-3, fer, magnésium, vitamine C. Le quinoa chaud avec l\'avocat frais et le saumon mariné crée une harmonie chaud-froid parfaite.',
    ingredients: [
      '150g quinoa',
      '120g saumon fumé ou frais',
      '1 avocat',
      '1 œuf mollet',
      '50g épinards frais',
      '1 citron vert',
      '2 c.à.s tamari',
      '1 c.à.s graines de sésame'
    ],
    etapes: [
      'Cuisez le quinoa 15 min. Assaisonnez au tamari et sésame.',
      'Faites l\'œuf mollet (7 min, eau bouillante).',
      'Coupez l\'avocat en tranches, arrosez de citron vert.',
      'Dressez le bol : quinoa chaud, épinards, saumon, avocat.',
      'Posez l\'œuf coupé en deux. Décorez de graines de sésame.'
    ]
  },
  {
    id: 145, cat: 'brunch', premium: false,
    emoji: '🍌', nom: 'Banana bread sans gluten chocolat-noix',
    temps: '15 min + 50min four', calories: 360, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le banana bread à partager en famille. Les bananes mûres sont riches en potassium et tryptophane. Le chocolat 85% apporte du magnésium. Les noix donnent des oméga-3 végétaux.',
    ingredients: [
      '3 bananes très mûres',
      '200g farine de riz',
      '80g poudre d\'amande',
      '3 œufs bio',
      '80ml huile de coco',
      '100g pépites de chocolat 85%',
      '60g noix concassées',
      '1 sachet levure sg'
    ],
    etapes: [
      'Préchauffez le four à 175°C.',
      'Écrasez les bananes. Mélangez avec les œufs et l\'huile de coco.',
      'Incorporez farine, poudre d\'amande et levure.',
      'Ajoutez les pépites de chocolat et les noix.',
      'Versez dans un moule à cake. Enfournez 50 min. Vérifiez avec un couteau.'
    ]
  },
  {
    id: 146, cat: 'brunch', premium: false,
    emoji: '🍄', nom: 'Œufs brouillés champignons-herbes truffées',
    temps: '15 min', calories: 340, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Les œufs brouillés à la perfection : texture crémeuse sans beurre. Les champignons apportent du sélénium et vitamine D. L\'huile de truffe élève ce plat simple au rang de brunch gastronomique.',
    ingredients: [
      '4 œufs bio',
      '200g champignons mélangés',
      '2 c.à.s huile d\'olive',
      '1 c.à.c huile de truffe (optionnel)',
      '1 bouquet ciboulette',
      '2 tranches pain de sarrasin',
      'Sel Santé, poivre'
    ],
    etapes: [
      'Faites sauter les champignons dans l\'huile d\'olive 5 min. Réservez.',
      'Battez les œufs avec le Sel Santé.',
      'À feu très doux, cuisez les œufs en remuant constamment à la spatule.',
      'Retirez du feu avant prise complète — ils finissent de cuire hors du feu.',
      'Dressez sur le pain grillé avec les champignons, la ciboulette et l\'huile de truffe.'
    ]
  },
  {
    id: 147, cat: 'brunch', premium: true,
    emoji: '🦪', nom: 'Gravlax de saumon maison aneth-betterave',
    temps: '20 min + 24h marinade', calories: 280, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Le gravlax est du saumon cru mariné — préserve tous les oméga-3 intacts. La betterave colore naturellement et apporte des nitrates pour la circulation. Préparez la veille pour le brunch du dimanche.',
    ingredients: [
      '400g filet de saumon très frais',
      '3 c.à.s sel Santé',
      '2 c.à.s sirop d\'érable',
      '1 betterave crue râpée',
      '1 bouquet d\'aneth',
      '1 citron (zeste)',
      'Poivre noir concassé'
    ],
    etapes: [
      'Mélangez sel, sirop d\'érable, betterave râpée, aneth et zeste de citron.',
      'Enrobez le filet de saumon de cette marinade.',
      'Emballez dans du film alimentaire, placez au frigo 24-48h.',
      'Rincez délicatement avant de servir.',
      'Tranchez finement en biais. Servez avec du pain de seigle sg et de la crème de cajou.'
    ]
  },
  {
    id: 148, cat: 'brunch', premium: false,
    emoji: '🥐', nom: 'Muffins salés courgette-feta végane',
    temps: '35 min', calories: 290, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Des muffins à emporter — idéaux pour un brunch nomade. La courgette apporte de l\'eau et de la légèreté. La feta végane à base de cajou donne l\'onctuosité sans lactose.',
    ingredients: [
      '2 courgettes râpées',
      '150g farine de pois chiche',
      '80g farine de riz',
      '100g tofu ferme émietté (feta végane)',
      '3 œufs bio',
      '80ml huile d\'olive',
      '1 c.à.c origan, 1 c.à.c curcuma',
      '1 sachet levure sg'
    ],
    etapes: [
      'Préchauffez le four à 180°C.',
      'Essorez bien les courgettes râpées dans un torchon.',
      'Mélangez farines, levure et épices.',
      'Incorporez œufs, huile, courgettes et tofu émietté.',
      'Remplissez les moules à muffins. Enfournez 22-25 min.'
    ]
  },
  {
    id: 149, cat: 'brunch', premium: true,
    emoji: '🌺', nom: 'Smoothie bowl dragon fruit-coco-grenade',
    temps: '10 min', calories: 310, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le dragon fruit (pitaya) est riche en bétalaïnes, des antioxydants rares aux propriétés anti-inflammatoires remarquables. La grenade apporte des polyphénols qui réduisent la douleur chronique.',
    ingredients: [
      '150g pitaya rose surgelée',
      '1 banane congelée',
      '100ml lait de coco',
      '½ grenade (graines)',
      '2 c.à.s noix de coco râpée',
      '1 c.à.s graines de grenade de lin',
      '1 c.à.c miel'
    ],
    etapes: [
      'Mixez la pitaya avec la banane congelée et le lait de coco.',
      'La couleur rose fuchsia doit être intense et la texture épaisse.',
      'Versez dans un bol froid.',
      'Décorez avec les graines de grenade, la noix de coco et les graines de lin.',
      'Servez immédiatement — la pitaya colore magnifiquement.'
    ]
  },
  {
    id: 150, cat: 'brunch', premium: false,
    emoji: '🥚', nom: 'Frittata aux légumes de saison',
    temps: '25 min', calories: 360, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'La frittata italienne est une omelette cuite au four — riche en protéines et légumes. Elle se mange chaude ou froide, parfaite pour partager. Les légumes de saison maximisent les nutriments.',
    ingredients: [
      '6 œufs bio',
      '1 courgette',
      '1 poivron rouge',
      '100g épinards frais',
      '1 oignon rouge',
      '2 c.à.s huile d\'olive',
      'Basilic frais, Sel Santé, poivre'
    ],
    etapes: [
      'Préchauffez le four à 190°C.',
      'Faites revenir l\'oignon et les légumes dans l\'huile d\'olive 8 min.',
      'Battez les œufs avec le Sel Santé et le basilic.',
      'Versez les œufs sur les légumes dans une poêle allant au four.',
      'Enfournez 12-15 min jusqu\'à prise complète. Démoulez et servez en parts.'
    ]
  },
  {
    id: 151, cat: 'brunch', premium: true,
    emoji: '🍓', nom: 'Crépes de teff sauce fraise-basilic',
    temps: '30 min', calories: 380, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Des crêpes ultra-fines à la farine de teff — la plus riche en fer de toutes les céréales. La sauce fraise-basilic est une association surprenante qui apporte vitamine C et dopamine (basilic).',
    ingredients: [
      '150g farine de teff',
      '300ml lait de riz',
      '2 œufs bio',
      '1 c.à.s huile de coco',
      '300g fraises fraîches',
      '10 feuilles de basilic frais',
      '2 c.à.s sirop d\'agave'
    ],
    etapes: [
      'Mélangez farine de teff, lait de riz, œufs et huile de coco.',
      'Laissez reposer 15 min — la pâte s\'épaissit légèrement.',
      'Cuisez des crêpes fines dans une poêle bien chaude.',
      'Mixez les fraises avec le basilic et le sirop d\'agave.',
      'Servez les crêpes avec la sauce fraise-basilic tiède.'
    ]
  },
  {
    id: 152, cat: 'brunch', premium: false,
    emoji: '🫙', nom: 'Overnight oats mangue-passion-chia',
    temps: '5 min + 8h repos', calories: 340, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le brunch préparé la veille — zéro stress le matin. Les flocons de millet remplacent l\'avoine (sg). La mangue + fruit de la passion = vitamines C, A et enzymes digestives.',
    ingredients: [
      '80g flocons de millet',
      '2 c.à.s graines de chia',
      '250ml lait de coco',
      '1 mangue fraîche',
      '2 fruits de la passion',
      '1 c.à.s sirop d\'érable',
      '1 pincée de cardamome'
    ],
    etapes: [
      'Mélangez les flocons de millet avec les graines de chia et le lait de coco.',
      'Ajoutez le sirop d\'érable et la cardamome.',
      'Réfrigérez toute la nuit — les graines gonflent et créent une texture crémeuse.',
      'Le matin, coupez la mangue en cubes et récupérez la pulpe des fruits de la passion.',
      'Dressez en verrines avec les fruits par-dessus.'
    ]
  },
  {
    id: 153, cat: 'brunch', premium: true,
    emoji: '🧆', nom: 'Falafels dorés sauce tahini-citron',
    temps: '45 min', calories: 430, diff: 'Moyen',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les falafels maison sont riches en fer, fibres et protéines végétales. Cuits au four plutôt que frits — 60% de calories en moins. Le tahini apporte du calcium et des graisses saines.',
    ingredients: [
      '400g pois chiches cuits',
      '1 oignon',
      '3 gousses d\'ail',
      '1 bouquet coriandre + persil',
      '1 c.à.c cumin, 1 c.à.c coriandre moulue',
      '2 c.à.s farine de pois chiche',
      '3 c.à.s tahini',
      '2 citrons'
    ],
    etapes: [
      'Préchauffez le four à 200°C.',
      'Mixez pois chiches, oignon, ail, herbes et épices — texture granuleuse, pas lisse.',
      'Incorporez la farine de pois chiche. Formez des boulettes.',
      'Disposez sur plaque huilée. Enfournez 25 min en retournant à mi-cuisson.',
      'Sauce tahini : mélangez tahini + jus de citron + eau + ail. Servez avec les falafels.'
    ]
  },

  // =============================================
  // PREMIUM "HORS DU COMMUN"
  // Ingrédients originaux, techniques de chef
  // Exclusives abonnés Premium
  // =============================================
  {
    id: 154, cat: 'dejeuner', premium: true,
    emoji: '🦑', nom: 'Encornets grillés sauce vierge yuzu-gingembre',
    temps: '20 min', calories: 340, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Les encornets sont une source exceptionnelle de fer héminique et de zinc — souvent ignorée. Le yuzu japonais est 3x plus riche en vitamine C que le citron. Une association umami-agrume inédite.',
    ingredients: [
      '300g anneaux d\'encornet frais',
      '1 yuzu (ou citron + zeste d\'orange)',
      '2 cm gingembre frais',
      '3 tomates cerises coupées',
      '10 feuilles de basilic thaï',
      '2 c.à.s huile d\'olive',
      'Fleur de sel, poivre de Timut'
    ],
    etapes: [
      'Séchez bien les encornets — l\'humidité empêche la coloration.',
      'Faites chauffer une poêle en fonte à feu très vif.',
      'Saisissez les encornets 1 min chaque côté — ils doivent colorer vite.',
      'Préparez la sauce vierge : tomates, yuzu, gingembre râpé, basilic thaï et huile d\'olive.',
      'Dressez les encornets avec la sauce vierge et la fleur de sel.'
    ]
  },
  {
    id: 155, cat: 'diner', premium: true,
    emoji: '🌿', nom: 'Tartare de betterave-lentilles beluga-huile de lin',
    temps: '25 min', calories: 290, diff: 'Moyen',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Un tartare entièrement végétal. Les lentilles beluga + betterave = combo fer record. L\'huile de lin apportée froide conserve ses oméga-3 intacts. Le poivre de Sichuan est un analgésique naturel.',
    ingredients: [
      '200g lentilles beluga cuites',
      '2 betteraves crues râpées finement',
      '3 c.à.s huile de lin (premier froid)',
      '1 échalote',
      '2 c.à.s câpres',
      '1 c.à.s moutarde de Dijon sg',
      'Poivre de Sichuan, sel fumé'
    ],
    etapes: [
      'Émincez finement l\'échalote, hachez les câpres.',
      'Mélangez lentilles, betterave râpée, échalote et câpres.',
      'Assaisonnez avec la moutarde, le sel fumé et le poivre de Sichuan concassé.',
      'Finissez avec l\'huile de lin froide — ne jamais la chauffer.',
      'Façonnez en cercle avec un emporte-pièce. Servez immédiatement.'
    ]
  },
  {
    id: 156, cat: 'diner', premium: true,
    emoji: '🐙', nom: 'Ceviche de maquereau-concombre-lait de coco',
    temps: '15 min + 30min marinade', calories: 310, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Le ceviche "cuit" le poisson par l\'acidité du citron — aucune chaleur, tous les oméga-3 préservés. Le maquereau est la source la plus concentrée en EPA/DHA. Le lait de coco adoucit l\'acidité.',
    ingredients: [
      '300g filets de maquereau très frais',
      '3 citrons verts (jus)',
      '1 citron jaune (jus)',
      '100ml lait de coco',
      '½ concombre',
      '1 piment doux',
      'Coriandre fraîche, oignon rouge'
    ],
    etapes: [
      'Coupez le maquereau en cubes de 1 cm.',
      'Couvrez de jus de citron vert — la chair doit blanchir (30 min).',
      'Égouttez partiellement. Ajoutez le lait de coco et le jus de citron jaune.',
      'Incorporez concombre en dés, oignon rouge émincé et piment.',
      'Parsemez de coriandre fraîche. Servez dans des verres froids.'
    ]
  },
  {
    id: 157, cat: 'diner', premium: true,
    emoji: '🌾', nom: 'Risotto de millet-safran-moules fumées',
    temps: '35 min', calories: 420, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Le millet remplace le riz pour un risotto sans gluten riche en magnésium. Le safran a des propriétés anti-dépressives et anti-inflammatoires prouvées. Les moules fumées sont concentrées en fer.',
    ingredients: [
      '200g millet décortiqué',
      '1 pot de moules fumées',
      '1 pincée de safran',
      '1 échalote, 2 gousses d\'ail',
      '150ml vin blanc sg (ou bouillon)',
      '600ml bouillon de légumes chaud',
      '2 c.à.s huile d\'olive, persil plat'
    ],
    etapes: [
      'Faites infuser le safran dans 2 c.à.s d\'eau chaude.',
      'Faites revenir échalote et ail, ajoutez le millet.',
      'Déglacez au vin blanc (ou bouillon). Ajoutez le safran infusé.',
      'Incorporez le bouillon louche par louche en remuant.',
      'En fin de cuisson, ajoutez les moules fumées. Parsemez de persil.'
    ]
  },
  {
    id: 158, cat: 'dejeuner', premium: true,
    emoji: '🥬', nom: 'Nems crus feuille de riz-spiruline-crevettes',
    temps: '20 min', calories: 280, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'La spiruline dans la sauce dipping est la source végétale la plus concentrée en fer et protéines. Les crevettes apportent du zinc et sélénium. Le gingembre dans la sauce est puissamment anti-inflammatoire.',
    ingredients: [
      '8 feuilles de riz',
      '150g crevettes cuites',
      '1 avocat',
      '1 mangue verte',
      'Menthe, coriandre fraîche',
      '2 c.à.s tamari, 1 c.à.c spiruline',
      '1 cm gingembre, 1 citron vert'
    ],
    etapes: [
      'Trempez les feuilles de riz 20 sec. Posez sur torchon humide.',
      'Garnissez de crevettes, avocat, mangue verte et herbes.',
      'Roulez en serrant bien.',
      'Sauce spiruline : mélangez tamari + gingembre râpé + jus citron vert + spiruline.',
      'Servez les nems avec la sauce verte légèrement piquante.'
    ]
  },
  {
    id: 159, cat: 'diner', premium: true,
    emoji: '🫀', nom: 'Carpaccio de betterave-fraise-vinaigre balsamique vieilli',
    temps: '20 min + 1h frigo', calories: 220, diff: 'Moyen',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'La betterave tranchée fine améliore la circulation sanguine dans les jambes en 90 min. Les fraises apportent de l\'ellagique acid anti-inflammatoire. Le vinaigre balsamique vieilli est un prébiotique naturel.',
    ingredients: [
      '3 betteraves crues de couleurs variées',
      '150g fraises fraîches',
      '3 c.à.s vinaigre balsamique vieilli (12 ans)',
      '2 c.à.s huile de cameline',
      'Basilic frais, noix concassées',
      'Fleur de sel, poivre'
    ],
    etapes: [
      'Tranchez les betteraves crues très finement à la mandoline.',
      'Disposez en rosace sur les assiettes, alternez les couleurs.',
      'Coupez les fraises en deux, disposez entre les betteraves.',
      'Arrosez d\'huile de cameline et vinaigre balsamique.',
      'Réfrigérez 1h — les betteraves marinent légèrement. Parsemez de basilic et noix.'
    ]
  },
  {
    id: 160, cat: 'dejeuner', premium: true,
    emoji: '🦈', nom: 'Tataki de thon rouge-sésame noir-sauce ponzu',
    temps: '15 min', calories: 380, diff: 'Moyen',
    tags: ['sg', 'sl'],
    benefices: 'Technique japonaise : le thon est saisi 30 secondes par face, cru à cœur. Préserve tous les oméga-3. Le sésame noir est plus riche en antioxydants que le blanc. La sauce ponzu alcalinise l\'organisme.',
    ingredients: [
      '300g thon rouge qualité sushi',
      '3 c.à.s graines de sésame noir',
      '3 c.à.s tamari',
      '2 c.à.s jus de yuzu ou citron',
      '1 c.à.s mirin sg',
      'Daikon râpé, gingembre mariné',
      'Huile de sésame'
    ],
    etapes: [
      'Mélangez tamari, jus de yuzu et mirin — c\'est la sauce ponzu.',
      'Enrobez le thon de graines de sésame noir.',
      'Faites chauffer une poêle à feu très vif avec l\'huile de sésame.',
      'Saisissez le thon 30 secondes par face — cru à cœur.',
      'Tranchez finement, servez avec la sauce ponzu et le daikon râpé.'
    ]
  },
  {
    id: 161, cat: 'snack', premium: true,
    emoji: '🍵', nom: 'Matcha latte froid lait d\'avoine-miel de thym',
    temps: '5 min', calories: 120, diff: 'Très facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le matcha grade cérémonie contient de la L-théanine qui améliore la concentration sans excitation — idéal TDAH. Ses catéchines sont les antioxydants les plus puissants du thé. Le miel de thym est antibactérien.',
    ingredients: [
      '1 c.à.c matcha grade cérémonie',
      '300ml lait d\'avoine sg bien froid',
      '1 c.à.s miel de thym',
      '2 c.à.s eau chaude (70°C)',
      'Glaçons',
      '1 pincée de sel'
    ],
    etapes: [
      'Tamisez le matcha dans un bol.',
      'Ajoutez l\'eau chaude (pas bouillante — amèrerait le matcha).',
      'Fouettez en zigzag jusqu\'à mousse verte brillante.',
      'Ajoutez le miel de thym et la pincée de sel.',
      'Versez sur les glaçons, complétez avec le lait d\'avoine froid. Ne pas mélanger — boire en strates.'
    ]
  },
  {
    id: 162, cat: 'diner', premium: true,
    emoji: '🌸', nom: 'Velouté d\'asperges vertes-amande-huile de truffe',
    temps: '30 min', calories: 260, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Les asperges sont riches en glutathion, le "maître antioxydant" du corps. Elles contiennent de l\'asparagine qui détoxifie les reins. L\'huile de truffe est anti-inflammatoire et transforme ce velouté en expérience gastronomique.',
    ingredients: [
      '500g asperges vertes',
      '100ml lait d\'amande',
      '1 oignon, 2 gousses d\'ail',
      '500ml bouillon de légumes',
      '1 c.à.s huile de truffe blanche',
      '30g amandes effilées grillées',
      'Sel Santé, poivre blanc'
    ],
    etapes: [
      'Cassez les asperges — elles se brisent naturellement à l\'endroit tendre.',
      'Faites revenir oignon et ail, ajoutez les asperges.',
      'Couvrez de bouillon chaud. Cuisez 12 min — les asperges doivent rester vertes.',
      'Mixez avec le lait d\'amande jusqu\'à texture soyeuse.',
      'Servez avec un filet d\'huile de truffe et les amandes grillées.'
    ]
  },
  {
    id: 163, cat: 'dejeuner', premium: true,
    emoji: '🏔️', nom: 'Salade de sarrasin kasha-agrumes-herbes fraîches-zaatar',
    temps: '20 min', calories: 360, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le zaatar (mélange thym-sésame-sumac) est un condiment du Moyen-Orient aux propriétés antimicrobiennes et antioxydantes. Le sumac contient de l\'acide gallique, puissant anti-inflammatoire. Le kasha est du sarrasin torréfié — digestif et riche en magnésium.',
    ingredients: [
      '200g sarrasin grillé (kasha)',
      '1 orange sanguine',
      '1 pamplemousse rose',
      '1 bouquet de menthe fraîche',
      '1 bouquet de persil plat',
      '2 c.à.s zaatar',
      '3 c.à.s huile d\'olive, 1 citron'
    ],
    etapes: [
      'Cuisez le kasha 10 min dans le double de son volume d\'eau. Égouttez.',
      'Pelez à vif l\'orange sanguine et le pamplemousse. Coupez en suprêmes.',
      'Mélangez le kasha tiède avec les herbes hachées.',
      'Ajoutez les suprêmes d\'agrumes et le zaatar.',
      'Assaisonnez avec huile d\'olive et citron. La salade se mange tiède.'
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
  'brunch':         () => RECETTES.filter(r => r.cat === 'brunch'),
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
  localStorage.setItem('flora_placard',  JSON.stringify(placardItems));
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
    caferenceFer: document.getElementById('ob-fer').checked,
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
// NOTIFICATIONS PUSH
// ============================
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
      <div style="font-size:0.82rem;opacity:.85;margin-bottom:12px;">Activez les notifications pour votre rappel journal du soir et vos conseils anti-SJSR.</div>
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
  if (!('serviceWorker' in navigator) || Notification.permission !== 'granted') return;

  // Notification journal du soir (21h)
  const now = new Date();
  const target = new Date();
  target.setHours(21, 0, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);

  const delay = target - now;
  setTimeout(() => {
    new Notification('Flōra 🌿', {
      body: 'C\'est l\'heure de votre journal du soir. Comment se sont passées vos jambes cette nuit ?',
      icon: '/Fl-ra/icon.svg',
      badge: '/Fl-ra/icon.svg',
      tag: 'flora-journal-soir'
    });
    // Relancer chaque 24h
    setInterval(() => {
      new Notification('Flōra 🌿', {
        body: 'Votre journal du soir vous attend 🌙',
        icon: '/Fl-ra/icon.svg',
        tag: 'flora-journal-soir'
      });
    }, 24 * 60 * 60 * 1000);
  }, delay);
}

function enableNotifications() {
  askNotificationPermission();
}

// ============================
// APP INIT
// ============================
// ============================
// SYSTÈME DE CONNEXION
// Comptes hardcodés (pas de serveur)
// ============================

const ACCOUNTS = {
  // Compte administrateur (toi)
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
  // Comptes premium (abonnés Stripe)
  // Format : email → { password, role:'premium', name, premium:true }
  // Ajouter manuellement après chaque paiement Stripe
  // ex: 'client@email.com': { password: 'FLORA-xxxxxxxx', role:'premium', name:'Prénom', premium:true }
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

// Admin : ajouter un compte premium
function adminAddPremium(email, name, code) {
  if (!currentUser || currentUser.role !== 'admin') return;
  ACCOUNTS[email] = {
    password: code,
    role: 'premium',
    name: name,
    premium: true
  };
  alert(`✅ Compte ajouté : ${email}\nMot de passe : ${code}`);
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

function renderPlacard() {
  const container = document.getElementById('placard-categories');
  if (!container) return;

  container.innerHTML = Object.entries(PLACARD_CATEGORIES).map(([cat, items]) => `
    <div class="placard-category">
      <div class="placard-cat-title">${cat}</div>
      <div class="placard-items">
        ${items.map(item => `
          <span class="placard-item ${placardItems[item] ? 'checked' : ''}"
                onclick="togglePlacardItem('${item}', this)">
            ${placardItems[item] ? '✓ ' : ''}${item}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function togglePlacardItem(item, el) {
  placardItems[item] = !placardItems[item];
  el.classList.toggle('checked', placardItems[item]);
  el.textContent = (placardItems[item] ? '✓ ' : '') + item;
  localStorage.setItem('flora_placard', JSON.stringify(placardItems));
}

function setBudget(amount) {
  currentBudget = amount;
  document.getElementById('budget-input').value = amount;
  document.querySelectorAll('.budget-chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.textContent) === amount);
  });
}

function generateShoppingList() {
  const budget = parseInt(document.getElementById('budget-input').value) || 80;
  currentBudget = budget;

  // Liste curatée et équilibrée par catégorie, triée par priorité nutritionnelle SJSR
  const BASKET_TEMPLATE = [
    { cat: '🥩 Protéines', items: [
      { n: 'Pavé de saumon (x2)',        p: 7.50 },
      { n: 'Œufs bio (x6)',              p: 3.50 },
      { n: 'Sardines en boîte (x2)',     p: 3.60 },
      { n: 'Maquereaux en boîte (x2)',   p: 3.80 },
      { n: 'Thon au naturel (x2)',       p: 4.40 },
      { n: 'Blanc de poulet (400g)',     p: 5.50 },
      { n: 'Tofu ferme (400g)',          p: 2.50 },
      { n: 'Lentilles vertes (500g)',    p: 1.80 },
      { n: 'Pois chiches (boîte)',       p: 1.10 },
      { n: 'Haricots rouges (boîte)',    p: 1.00 },
    ]},
    { cat: '🥦 Légumes', items: [
      { n: 'Épinards frais (250g)',      p: 2.20 },
      { n: 'Brocoli',                    p: 1.80 },
      { n: 'Poivron rouge (x2)',         p: 3.80 },
      { n: 'Courgette (x2)',             p: 2.00 },
      { n: 'Carotte (500g)',             p: 1.00 },
      { n: 'Patate douce (x2)',          p: 2.00 },
      { n: 'Aubergine',                  p: 1.60 },
      { n: 'Champignons (250g)',         p: 2.50 },
      { n: 'Betterave cuite',            p: 1.20 },
      { n: 'Fenouil',                    p: 1.80 },
      { n: 'Ail (tête)',                 p: 0.90 },
      { n: 'Gingembre frais',            p: 1.20 },
    ]},
    { cat: '🌾 Féculents', items: [
      { n: 'Quinoa (500g)',              p: 2.80 },
      { n: 'Riz complet (1kg)',          p: 1.50 },
      { n: 'Lentilles corail (500g)',    p: 2.00 },
      { n: 'Flocons de sarrasin',        p: 2.00 },
      { n: 'Pâtes de riz (500g)',        p: 2.20 },
    ]},
    { cat: '🥑 Bons gras', items: [
      { n: 'Avocat (x2)',                p: 3.60 },
      { n: 'Noix (200g)',                p: 3.80 },
      { n: 'Graines de chia (250g)',     p: 3.50 },
      { n: 'Graines de lin (250g)',      p: 2.20 },
      { n: 'Graines de courge (100g)',   p: 2.50 },
      { n: 'Amandes (200g)',             p: 4.00 },
      { n: 'Tahini (250g)',              p: 4.00 },
    ]},
    { cat: '🥫 Conserves', items: [
      { n: 'Tomates concassées (x2)',    p: 1.80 },
      { n: 'Lait de coco entier (x2)',   p: 3.60 },
      { n: 'Bouillon de légumes (x4)',   p: 2.00 },
    ]},
    { cat: '🍋 Fruits', items: [
      { n: 'Citron (x4)',                p: 2.00 },
      { n: 'Banane (x4)',                p: 1.60 },
      { n: 'Myrtilles (250g)',           p: 3.50 },
      { n: 'Pomme (x4)',                 p: 2.00 },
    ]},
    { cat: '🌿 Épices & Huiles', items: [
      { n: 'Huile olive vierge extra',   p: 7.00 },
      { n: 'Curcuma (pot)',              p: 2.50 },
      { n: 'Cannelle (pot)',             p: 1.50 },
      { n: 'Tamari sans gluten',         p: 3.50 },
    ]},
    { cat: '🥛 Laits végétaux', items: [
      { n: 'Lait de riz (1L)',           p: 2.00 },
      { n: 'Lait amande (1L)',           p: 2.20 },
      { n: 'Yaourt coco (x4)',           p: 3.60 },
    ]},
  ];

  // Quotas par catégorie selon le budget (nombre max d'articles)
  function getQuotas(budget) {
    if (budget <= 30) return { '🥩 Protéines':3, '🥦 Légumes':3, '🌾 Féculents':2, '🥑 Bons gras':1, '🥫 Conserves':1, '🍋 Fruits':1, '🌿 Épices & Huiles':1, '🥛 Laits végétaux':0 };
    if (budget <= 50) return { '🥩 Protéines':4, '🥦 Légumes':4, '🌾 Féculents':2, '🥑 Bons gras':2, '🥫 Conserves':2, '🍋 Fruits':2, '🌿 Épices & Huiles':1, '🥛 Laits végétaux':1 };
    if (budget <= 80) return { '🥩 Protéines':5, '🥦 Légumes':6, '🌾 Féculents':3, '🥑 Bons gras':3, '🥫 Conserves':2, '🍋 Fruits':3, '🌿 Épices & Huiles':2, '🥛 Laits végétaux':1 };
    return              { '🥩 Protéines':7, '🥦 Légumes':8, '🌾 Féculents':4, '🥑 Bons gras':4, '🥫 Conserves':3, '🍋 Fruits':4, '🌿 Épices & Huiles':3, '🥛 Laits végétaux':2 };
  }

  function isInPlacard(nom) {
    const n = nom.toLowerCase();
    return Object.keys(placardItems).some(p =>
      placardItems[p] && n.includes(p.toLowerCase().split(' ')[0])
    );
  }

  const quotas = getQuotas(budget);
  const byCategorie = {};
  let total = 0;

  for (const { cat, items } of BASKET_TEMPLATE) {
    const max = quotas[cat] || 0;
    if (!max) continue;
    byCategorie[cat] = [];
    for (const { n, p } of items) {
      if (byCategorie[cat].length >= max) break;
      if (isInPlacard(n)) continue;
      if (total + p > budget) continue;
      byCategorie[cat].push({ item: n, price: p });
      total += p;
    }
    if (!byCategorie[cat].length) delete byCategorie[cat];
  }

  // Afficher
  const result = document.getElementById('shopping-result');
  const listContent = document.getElementById('shopping-list-content');
  document.getElementById('budget-total-badge').textContent = `${total.toFixed(2)}€ / ${budget}€`;

  const orderedCats = ['🥩 Protéines','🥦 Légumes','🌾 Féculents','🥑 Bons gras','🥫 Conserves','🍋 Fruits','🌿 Épices & Huiles','🥛 Laits végétaux'];

  listContent.innerHTML = orderedCats
    .filter(cat => byCategorie[cat]?.length)
    .map(cat => `
      <div class="shopping-category">
        <div class="shopping-cat-title">${cat}</div>
        ${byCategorie[cat].map(({item, price}) => `
          <div class="shopping-item" onclick="this.classList.toggle('done')">
            <div class="shopping-check">✓</div>
            <div class="shopping-text">${item}</div>
            <div class="shopping-price">~${price.toFixed(2)}€</div>
          </div>
        `).join('')}
      </div>
    `).join('');

  const allItems = Object.values(byCategorie).flat().map(i => i.item);
  generateMenusFromBasket(allItems);

  result.classList.remove('hidden');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Stockage global des menus générés depuis le panier
let _basketMenus = { pdc: [], dej: [], din: [], snack: [] };
let _basketItems = [];

function generateMenusFromBasket(basketItems) {
  _basketItems = basketItems;
  const menusDiv = document.getElementById('shopping-menus');
  const menusContent = document.getElementById('shopping-menus-content');

  // Score chaque recette selon correspondance avec le panier
  function scoreRecettes(cat) {
    return RECETTES
      .filter(r => r.cat === cat && (!r.premium || isPremium))
      .map(r => {
        const matches = r.ingredients.filter(ing =>
          basketItems.some(b => {
            const bw = b.toLowerCase().replace(/\s*\(.*\)/, '').replace(/\s*x\d+/, '').trim();
            return bw.length > 3 && ing.toLowerCase().includes(bw.split(' ')[0]);
          })
        ).length;
        return { r, matches };
      })
      .sort((a, b) => b.matches - a.matches)
      .map(x => x.r);
  }

  _basketMenus = {
    pdc:   scoreRecettes('petit-dejeuner'),
    dej:   scoreRecettes('dejeuner'),
    din:   scoreRecettes('diner'),
    snack: scoreRecettes('snack'),
  };

  if (!_basketMenus.pdc.length && !_basketMenus.dej.length && !_basketMenus.din.length) {
    menusDiv.classList.add('hidden');
    return;
  }

  renderBasketMenus(menusDiv, menusContent);
}

function renderBasketMenus(menusDiv, menusContent) {
  // Sélection courante (index dans chaque liste)
  if (!window._basketIdx) window._basketIdx = { pdc: 0, dej: 0, din: 0, snack: 0 };

  const idx = window._basketIdx;
  const get = (cat) => _basketMenus[cat][idx[cat]] || _basketMenus[cat][0];

  const pdc   = get('pdc');
  const dej   = get('dej');
  const din   = get('din');
  const snack = get('snack');

  function mealCard(r, slot, label, emoji) {
    if (!r) return '';
    const alts = _basketMenus[slot].length;
    return `
      <div class="basket-meal-row" id="basket-slot-${slot}">
        <div class="basket-meal-label">${emoji} ${label}</div>
        <div class="basket-meal-card" onclick="openRecette(${r.id})">
          <div class="basket-meal-icon">${r.emoji}</div>
          <div class="basket-meal-body">
            <div class="basket-meal-name">${r.nom}</div>
            <div class="basket-meal-sub">⏱ ${r.temps}</div>
          </div>
        </div>
        ${alts > 1 ? `
        <div class="basket-meal-alts">
          <span style="font-size:0.75rem;color:var(--text-light);">${alts} options disponibles</span>
          <button class="basket-alt-btn" onclick="prevBasketMeal('${slot}')">‹</button>
          <button class="basket-alt-btn" onclick="nextBasketMeal('${slot}')">›</button>
        </div>` : ''}
      </div>`;
  }

  menusContent.innerHTML = `
    <div style="font-size:0.8rem;color:var(--text-light);margin-bottom:14px;">
      Recettes sélectionnées selon votre panier · Faites défiler pour changer
    </div>
    ${mealCard(pdc,   'pdc',   'Petit-déjeuner', '🌅')}
    ${mealCard(dej,   'dej',   'Déjeuner',       '☀️')}
    ${mealCard(din,   'din',   'Dîner',          '🌙')}
    ${mealCard(snack, 'snack', 'Snack',          '🍎')}
    <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px;">
      <button class="btn-primary full-width" onclick="addBasketMenusToAgenda()">
        📅 Ajouter tous ces menus à l'agenda
      </button>
    </div>
  `;

  // Injecter les styles si pas encore présents
  if (!document.getElementById('basket-menu-styles')) {
    const style = document.createElement('style');
    style.id = 'basket-menu-styles';
    style.textContent = `
      .basket-meal-row { margin-bottom:14px; }
      .basket-meal-label { font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-light);margin-bottom:6px; }
      .basket-meal-card { display:flex;align-items:center;gap:12px;background:var(--cream);border-radius:var(--radius-md);padding:12px;cursor:pointer;transition:opacity .2s; }
      .basket-meal-card:active { opacity:.7; }
      .basket-meal-icon { font-size:1.6rem;flex-shrink:0; }
      .basket-meal-body { flex:1;min-width:0; }
      .basket-meal-name { font-size:0.88rem;font-weight:600;color:var(--green-deep);white-space:nowrap;overflow:hidden;text-overflow:ellipsis; }
      .basket-meal-sub  { font-size:0.75rem;color:var(--text-light);margin-top:2px; }
      .basket-meal-alts { display:flex;align-items:center;gap:8px;margin-top:6px;justify-content:flex-end; }
      .basket-alt-btn   { background:var(--cream-dark);border:none;border-radius:50%;width:28px;height:28px;font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--green-deep);font-weight:700; }
    `;
    document.head.appendChild(style);
  }

  menusDiv.classList.remove('hidden');
}

function nextBasketMeal(slot) {
  if (!window._basketIdx) window._basketIdx = { pdc:0, dej:0, din:0, snack:0 };
  const max = _basketMenus[slot].length;
  window._basketIdx[slot] = (window._basketIdx[slot] + 1) % max;
  const menusDiv = document.getElementById('shopping-menus');
  const menusContent = document.getElementById('shopping-menus-content');
  renderBasketMenus(menusDiv, menusContent);
}

function prevBasketMeal(slot) {
  if (!window._basketIdx) window._basketIdx = { pdc:0, dej:0, din:0, snack:0 };
  const max = _basketMenus[slot].length;
  window._basketIdx[slot] = (window._basketIdx[slot] - 1 + max) % max;
  const menusDiv = document.getElementById('shopping-menus');
  const menusContent = document.getElementById('shopping-menus-content');
  renderBasketMenus(menusDiv, menusContent);
}

function addBasketMenusToAgenda() {
  if (!window._basketIdx) window._basketIdx = { pdc:0, dej:0, din:0, snack:0 };
  const idx = window._basketIdx;
  const get = (cat) => _basketMenus[cat][idx[cat]] || _basketMenus[cat][0];

  const pdc   = get('pdc');
  const dej   = get('dej');
  const din   = get('din');
  const snack = get('snack');

  // Choisir le jour de départ
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9998;display:flex;align-items:flex-end;';

  const today = new Date();
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push(d);
  }

  overlay.innerHTML = `
    <div style="width:100%;background:var(--white);border-radius:24px 24px 0 0;padding:24px 20px 36px;max-height:80vh;overflow-y:auto;">
      <div style="font-family:var(--font-display);font-size:1.1rem;color:var(--green-deep);margin-bottom:4px;">
        📅 Ajouter à l'agenda
      </div>
      <div style="font-size:0.82rem;color:var(--text-mid);margin-bottom:16px;">
        Choisissez le jour de départ. Les 4 repas seront ajoutés.
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${dates.map(d => {
          const dk = dateKey(d);
          const label = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
          return `<button onclick="confirmAddBasketToAgenda('${dk}', ${pdc?.id||'null'}, ${dej?.id||'null'}, ${din?.id||'null'}, ${snack?.id||'null'}, this.closest('[style*=fixed]'))"
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

function confirmAddBasketToAgenda(dk, pdcId, dejId, dinId, snackId, overlayEl) {
  if (!agenda[dk]) agenda[dk] = {};
  if (pdcId)   agenda[dk]['petit-dejeuner'] = pdcId;
  if (dejId)   agenda[dk]['dejeuner']       = dejId;
  if (dinId)   agenda[dk]['diner']          = dinId;
  if (snackId) agenda[dk]['snack']          = snackId;
  saveState();
  if (overlayEl) overlayEl.remove();
  renderAgenda();

  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:var(--green-deep);color:var(--white);padding:10px 20px;border-radius:99px;font-size:0.85rem;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.2);white-space:nowrap;';
  msg.textContent = '✅ 4 repas ajoutés à l\'agenda !';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2500);
}

function generateShoppingFromAgenda() {
  // Collecter toutes les recettes planifiées cette semaine
  const dates = getWeekDates(currentWeekOffset);
  const recetteIds = new Set();

  dates.forEach(d => {
    const dk = dateKey(d);
    const dayData = agenda[dk] || {};
    Object.values(dayData).forEach(recId => {
      if (recId) recetteIds.add(recId);
    });
  });

  if (!recetteIds.size) {
    const msg = document.createElement('div');
    msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:#c0392b;color:#fff;padding:10px 20px;border-radius:99px;font-size:0.85rem;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.2);white-space:nowrap;';
    msg.textContent = '⚠️ Aucune recette dans l\'agenda cette semaine';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2500);
    return;
  }

  // Collecter tous les ingrédients de ces recettes (dédupliqués)
  const ingredientSet = {};
  recetteIds.forEach(id => {
    const r = RECETTES.find(x => x.id === id);
    if (!r) return;
    r.ingredients.forEach(ing => {
      // Nettoyer quantités
      const clean = ing
        .replace(/^\d[\d,./]* ?(g|kg|ml|cl|l|càs|càc|cs|cc|pincée|boîte|tranche|filet|pavé|gousse|botte|bouquet|poignée|portion)s? /i, '')
        .replace(/^\d+ /, '')
        .trim();
      if (clean.length < 3) return;
      // Grouper par mot-clé principal
      const key = clean.toLowerCase().split(' ')[0];
      if (!ingredientSet[key]) ingredientSet[key] = { label: clean, count: 0 };
      ingredientSet[key].count++;
    });
  });

  // Trier par fréquence, exclure ce qui est dans le placard
  const sorted = Object.values(ingredientSet)
    .sort((a, b) => b.count - a.count)
    .filter(({ label }) => {
      const l = label.toLowerCase();
      return !Object.keys(placardItems).some(p =>
        placardItems[p] && l.includes(p.toLowerCase().split(' ')[0])
      );
    });

  // Catégoriser
  const CATEGORIE_KEYWORDS = [
    { cat: '🥩 Protéines',    kw: ['saumon','truite','sardine','maquereau','thon','anchois','hareng','cabillaud','daurade','crevette','poulet','dinde','boeuf','bœuf','oeuf','œuf','tofu','tempeh','lentille','pois chiche','haricot'] },
    { cat: '🥦 Légumes',      kw: ['épinard','kale','brocoli','chou','courgette','aubergine','poivron','carotte','betterave','fenouil','champignon','patate','oignon','ail','gingembre','tomate','concombre','asperge','céleri','roquette'] },
    { cat: '🌾 Féculents',    kw: ['quinoa','riz','sarrasin','pâte','nouille','galette','flocon','farine','polenta','boulgour'] },
    { cat: '🥑 Bons gras',    kw: ['noix','amande','cajou','noisette','pistache','graine','tahini','avocat'] },
    { cat: '🥫 Conserves',    kw: ['lait de coco','tomate concass','bouillon','miso','concentré'] },
    { cat: '🍋 Fruits',       kw: ['citron','banane','myrtille','fraise','framboise','mangue','pomme','poire','datte','abricot','cerise','orange','pêche'] },
    { cat: '🌿 Épices',       kw: ['curcuma','cumin','cannelle','paprika','basilic','persil','coriandre','menthe','thym','romarin','origan','safran','curry','vanille','poivre','sel'] },
    { cat: '🫙 Huiles',       kw: ['huile','vinaigre','tamari','sauce soja'] },
    { cat: '🥛 Laits végét.', kw: ['lait','yaourt','crème de coco'] },
  ];

  function getCat(label) {
    const l = label.toLowerCase();
    for (const { cat, kw } of CATEGORIE_KEYWORDS) {
      if (kw.some(k => l.includes(k))) return cat;
    }
    return '🛒 Divers';
  }

  const byCategorie = {};
  sorted.forEach(({ label }) => {
    const cat = getCat(label);
    if (!byCategorie[cat]) byCategorie[cat] = [];
    // Éviter quasi-doublons
    const key = label.toLowerCase().split(' ')[0];
    if (!byCategorie[cat].some(i => i.toLowerCase().split(' ')[0] === key)) {
      byCategorie[cat].push(label);
    }
  });

  // Afficher dans un overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9998;display:flex;align-items:flex-end;';

  const orderedCats = ['🥩 Protéines','🥦 Légumes','🌾 Féculents','🥑 Bons gras','🥫 Conserves','🍋 Fruits','🌿 Épices','🫙 Huiles','🥛 Laits végét.','🛒 Divers'];

  const listHTML = orderedCats
    .filter(cat => byCategorie[cat]?.length)
    .map(cat => `
      <div style="margin-bottom:14px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--text-light);margin-bottom:6px;">${cat}</div>
        ${byCategorie[cat].map(item => `
          <div onclick="this.style.opacity=this.style.opacity==='0.4'?'1':'0.4';this.querySelector('span').textContent=this.style.opacity==='0.4'?'✓':' '"
            style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--cream-dark);cursor:pointer;">
            <span style="color:var(--green-mid);font-weight:700;width:16px;"> </span>
            <span style="font-size:0.88rem;color:var(--text-dark);">${item}</span>
          </div>
        `).join('')}
      </div>
    `).join('');

  overlay.innerHTML = `
    <div style="width:100%;background:var(--white);border-radius:24px 24px 0 0;padding:24px 20px 36px;max-height:85vh;overflow-y:auto;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <div style="font-family:var(--font-display);font-size:1.1rem;color:var(--green-deep);">🛒 Liste de courses</div>
        <button onclick="this.closest('[style*=fixed]').remove()"
          style="background:var(--cream-dark);border:none;border-radius:50%;width:30px;height:30px;font-size:1rem;cursor:pointer;">✕</button>
      </div>
      <div style="font-size:0.78rem;color:var(--text-light);margin-bottom:16px;">
        ${recetteIds.size} recette${recetteIds.size > 1 ? 's' : ''} · semaine du ${dates[0].toLocaleDateString('fr-FR', {day:'numeric',month:'long'})}
        · Touchez un article pour le cocher
      </div>
      ${listHTML || '<p style="color:var(--text-light);text-align:center;">Aucun ingrédient trouvé.</p>'}
    </div>`;

  document.body.appendChild(overlay);
}

function filterRecettesByPlacard() {
  const checkedItems = Object.keys(placardItems).filter(k => placardItems[k]);
  if (!checkedItems.length) {
    showPage('recettes');
    return;
  }

  // Filtrer les recettes par ingrédients du placard
  const matching = RECETTES.filter(r =>
    r.ingredients.some(ing =>
      checkedItems.some(item => ing.toLowerCase().includes(item.toLowerCase()))
    )
  );

  showPage('recettes');
  // Stocker le filtre placard pour renderRecettes
  window._placardFilter = checkedItems;
  renderRecettes();

  setTimeout(() => {
    const msg = document.createElement('div');
    msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:var(--green-deep);color:var(--white);padding:10px 18px;border-radius:99px;font-size:0.82rem;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.2);white-space:nowrap;';
    msg.textContent = `🗄️ ${matching.length} recettes avec votre placard`;
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
  showPage('agenda');

  const msg = document.createElement('div');
  msg.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:var(--green-deep);color:var(--white);padding:10px 20px;border-radius:99px;font-size:0.85rem;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.2);';
  msg.textContent = '✅ Semaine batch importée dans l\'agenda !';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2500);
}

function initPlacard() {
  placardItems = JSON.parse(localStorage.getItem('flora_placard') || '{}');
  renderPlacard();
}

function initApp() {
  document.getElementById('app').classList.remove('hidden');
  loadState();
  initLogin();
  initPlacard();
  updateDashboard();
  renderRecettes();
  renderAgenda();
  loadProfil();
  setJournalDate();
  updateSleepCalc();

  // Recette du jour — change chaque jour, cliquable directement
  const free = RECETTES.filter(r => !r.premium);
  const rdj  = free[new Date().getDate() % free.length];
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

  if (page === 'journal')    { setJournalDate(); updateSleepCalc(); initSjsrToggle(); }
  if (page === 'recettes')   renderRecettes();
  if (page === 'agenda')     renderAgenda();
  if (page === 'profil')     { loadProfil(); renderStats(); }
  if (page === 'apropos')    { /* static */ }
  if (page === 'generateur') {
    checkGenAccess();
    // Réinitialiser sur l'onglet semaine à chaque ouverture
    switchGenTab('semaine', document.querySelector('#page-generateur .jtab'));
  }
  if (page === 'placard')    initPlacard();
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

// ============================
// JOURNAL — SOMMEIL AVANCÉ
// ============================
let currentCycles = 4; // défaut 4 cycles = ~6h

function updateSleepCalc() {
  const coucher = document.getElementById('sl-coucher').value;
  const lever   = document.getElementById('sl-lever').value;
  if (!coucher || !lever) return;

  // Calcul durée
  const [hC, mC] = coucher.split(':').map(Number);
  const [hL, mL] = lever.split(':').map(Number);
  let totalMin = (hL * 60 + mL) - (hC * 60 + mC);
  if (totalMin < 0) totalMin += 24 * 60; // nuit qui passe minuit

  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  const label = m > 0 ? `${h}h${String(m).padStart(2,'0')}` : `${h}h00`;
  document.getElementById('sleep-duration-badge').textContent = label;

  // Suggérer nb cycles (1 cycle ≈ 90 min)
  const cyclesSuggeres = Math.round(totalMin / 90);
  const clamped = Math.max(1, Math.min(6, cyclesSuggeres));
  setCyclesByCount(clamped);
}

function setCycles(n, el) {
  currentCycles = n;
  document.querySelectorAll('.cycle-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i < n);
  });
  updateCyclesInfo();
}

function setCyclesByCount(n) {
  currentCycles = n;
  document.querySelectorAll('.cycle-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i < n);
  });
  updateCyclesInfo();
}

function updateCyclesInfo() {
  const min = currentCycles * 90;
  const h = Math.floor(min / 60);
  const m = min % 60;
  const label = m > 0 ? `${h}h${m}` : `${h}h`;
  const info = document.getElementById('cycles-info');
  if (info) info.textContent = `~${label} de sommeil réel (${currentCycles} cycle${currentCycles > 1 ? 's' : ''})`;
}

function getSleepDuration() {
  const coucher = document.getElementById('sl-coucher')?.value;
  const lever   = document.getElementById('sl-lever')?.value;
  if (!coucher || !lever) return 0;
  const [hC, mC] = coucher.split(':').map(Number);
  const [hL, mL] = lever.split(':').map(Number);
  let totalMin = (hL * 60 + mL) - (hC * 60 + mC);
  if (totalMin < 0) totalMin += 24 * 60;
  return Math.round(totalMin / 60 * 10) / 10; // en heures, 1 décimale
}

// Compteur levers nocturnes
let leversCount = 0;
const leversLabels = ['Aucun lever','1 lever','2 levers','3 levers','4 levers ou plus'];

function changeCounter(type, delta) {
  if (type === 'levers') {
    leversCount = Math.max(0, Math.min(4, leversCount + delta));
    document.getElementById('levers-count').textContent = leversCount;
    document.getElementById('levers-info').textContent = leversLabels[leversCount] || leversCount + ' levers';
  }
}

// Chips sommeil — sélection exclusive (radio)
function selectSleepChip(el, group, value) {
  el.closest('.sleep-chips-row').querySelectorAll('.sleep-chip').forEach(c => {
    c.classList.remove('active');
    delete c.dataset.selected;
  });
  el.classList.add('active');
  el.dataset.selected = value;
}

// Chips sommeil — sélection multiple (toggle)
function toggleSleepChip(el) {
  el.classList.toggle('active');
}

// Afficher/masquer localisation SJSR selon intensité
const origSjsrInput = document.getElementById ? null : null;
function initSjsrToggle() {
  const sjsrSlider = document.getElementById('sl-sjsr');
  if (sjsrSlider) {
    sjsrSlider.addEventListener('input', function() {
      const locRow = document.getElementById('sjsr-location-row');
      if (locRow) locRow.style.display = parseInt(this.value) > 0 ? 'block' : 'none';
    });
  }
}

// Collecter toutes les données sommeil avancées
function getSleepData() {
  // Endormissement
  const endEl = document.querySelector('[data-selected][onclick*="endormissement"]');
  const endormissement = endEl ? endEl.dataset.selected : 'rapide';

  // Localisation SJSR
  const locEl = document.querySelector('[data-selected][onclick*="location"]');
  const sjsrLocation = locEl ? locEl.dataset.selected : '';

  // Médications cochées
  const meds = Array.from(document.querySelectorAll('[onclick*="med"].active')).map(c => c.textContent);

  // Rituels cochés
  const rituels = Array.from(document.querySelectorAll('[onclick*="rituel"].active')).map(c => c.textContent);

  return { levers: leversCount, endormissement, sjsrLocation, meds, rituels };
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
  const sleepExtra = getSleepData();

  journal[today] = {
    coucher:        document.getElementById('sl-coucher')?.value || '',
    lever:          document.getElementById('sl-lever')?.value || '',
    duree:          getSleepDuration(),
    cycles:         currentCycles,
    levers:         sleepExtra.levers,
    endormissement: sleepExtra.endormissement,
    sjsrLocation:   sleepExtra.sjsrLocation,
    meds:           sleepExtra.meds,
    rituels:        sleepExtra.rituels,
    qualite:        parseInt(document.getElementById('sl-qualite').value),
    sjsr:           parseInt(document.getElementById('sl-sjsr').value),
    energie:        parseInt(document.getElementById('sl-energie').value),
    douleur:        parseInt(document.getElementById('sl-douleur').value),
    symptoms,
    notes:          document.getElementById('journal-notes').value,
    ts:             Date.now()
  };

  saveState();
  updateDashboard();

  const confirm = document.getElementById('save-confirm');
  confirm.classList.remove('hidden');
  setTimeout(() => confirm.classList.add('hidden'), 2500);
}

function switchJTab(tab, el) {
  document.querySelectorAll('.jtab').forEach(function(t) { t.classList.remove('active'); });
  if (el) el.classList.add('active');

  document.getElementById('jtab-today').classList.add('hidden');
  document.getElementById('jtab-historique').classList.add('hidden');

  // Sans template literal — robuste WebView
  const targetId = tab === 'today' ? 'jtab-today' : 'jtab-historique';
  document.getElementById(targetId).classList.remove('hidden');

  if (tab === 'historique') renderHistorique();
}

// ============================
// EXPORT PDF JOURNAL
// ============================
function exportJournalPDF() {
  const entries = Object.entries(journal).sort((a,b) => a[0].localeCompare(b[0]));

  if (!entries.length) {
    alert('Aucune entrée à exporter. Commencez par remplir votre journal !');
    return;
  }

  const name = profile.name || 'Utilisateur·trice';
  const today = new Date().toLocaleDateString('fr-FR', { day:'numeric', month:'long', year:'numeric' });

  const rows = entries.map(([date, e]) => {
    const d = new Date(date + 'T12:00:00');
    const label = d.toLocaleDateString('fr-FR', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
    const stars = '★'.repeat(e.qualite||0) + '☆'.repeat(5-(e.qualite||0));
    const sleep = e.coucher && e.lever
      ? `${e.coucher} → ${e.lever} (${e.duree}h, ${e.cycles||'?'} cycles)`
      : `${e.duree||'—'}h`;
    const sjsrLabels = ['Aucun','Léger','Modéré','Fort','Très fort','Insupportable'];
    const sjsrLabel = sjsrLabels[e.sjsr||0] || '—';
    const symp = e.symptoms?.length ? e.symptoms.join(', ') : '—';
    const meds = e.meds?.length ? e.meds.join(', ') : '—';

    return `
      <tr style="border-bottom:1px solid #e8e8e0;">
        <td style="padding:10px 8px;font-weight:600;color:#2d4a3e;white-space:nowrap;">${label}</td>
        <td style="padding:10px 8px;text-align:center;">${sleep}<br><small>${stars}</small></td>
        <td style="padding:10px 8px;text-align:center;">${e.energie||'—'}/10</td>
        <td style="padding:10px 8px;text-align:center;">${e.douleur||'—'}/10</td>
        <td style="padding:10px 8px;text-align:center;color:${(e.sjsr||0)>2?'#c0614a':'#3d6b58'};">${sjsrLabel}</td>
        <td style="padding:10px 8px;font-size:0.85em;color:#4a5e54;">${symp}</td>
        <td style="padding:10px 8px;font-size:0.82em;font-style:italic;color:#8a9e96;">${e.notes||''}</td>
      </tr>
    `;
  }).join('');

  const avgEnergie = entries.length
    ? (entries.reduce((s,[,e])=>s+(e.energie||0),0)/entries.length).toFixed(1) : '—';
  const avgDouleur = entries.length
    ? (entries.reduce((s,[,e])=>s+(e.douleur||0),0)/entries.length).toFixed(1) : '—';
  const nuitsSjsr = entries.filter(([,e])=>(e.sjsr||0)>0).length;
  const streak = getStreak();

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <title>Journal Flōra — ${name}</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: Georgia, serif; color: #1e2d26; background: #fff; padding: 40px; }
    h1 { font-size: 2rem; color: #2d4a3e; margin-bottom: 4px; }
    .subtitle { color: #8a9e96; font-size: 0.9rem; margin-bottom: 32px; }
    .summary { display: flex; gap: 24px; margin-bottom: 32px; }
    .sum-card { background: #f7f3ee; border-radius: 12px; padding: 16px 20px; flex: 1; text-align: center; }
    .sum-val { font-size: 1.8rem; font-weight: 700; color: #2d4a3e; }
    .sum-label { font-size: 0.78rem; color: #8a9e96; margin-top: 4px; }
    table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    thead tr { background: #2d4a3e; color: #fff; }
    thead th { padding: 10px 8px; text-align: left; font-weight: 600; font-size: 0.8rem; }
    tbody tr:nth-child(even) { background: #f7f3ee; }
    .footer { margin-top: 32px; text-align: center; font-size: 0.78rem; color: #8a9e96; border-top: 1px solid #ede8e0; padding-top: 16px; }
    @media print {
      body { padding: 20px; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <h1>Flōra 🌿 — Journal de bien-être</h1>
  <div class="subtitle">
    ${name} · Exporté le ${today} · ${entries.length} entrée${entries.length>1?'s':''}
  </div>

  <div class="summary">
    <div class="sum-card">
      <div class="sum-val">${avgEnergie}</div>
      <div class="sum-label">Énergie moyenne /10</div>
    </div>
    <div class="sum-card">
      <div class="sum-val">${avgDouleur}</div>
      <div class="sum-label">Douleur moyenne /10</div>
    </div>
    <div class="sum-card">
      <div class="sum-val">${nuitsSjsr}</div>
      <div class="sum-label">Nuits SJSR</div>
    </div>
    <div class="sum-card">
      <div class="sum-val">${streak}</div>
      <div class="sum-label">Jours consécutifs</div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Sommeil</th>
        <th>Énergie</th>
        <th>Douleur</th>
        <th>SJSR</th>
        <th>Symptômes</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>

  <div class="footer">
    Flōra — Application bien-être SJSR/TDAH anti-inflammatoire · kettyburel-art.github.io/Fl-ra/<br>
    Document généré automatiquement · À partager avec votre médecin si besoin
  </div>

  <script>window.onload = () => window.print();</script>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const win  = window.open(url, '_blank');
  if (!win) {
    // Fallback si popup bloqué
    const a = document.createElement('a');
    a.href = url;
    a.download = `flora-journal-${dateKey(new Date())}.html`;
    a.click();
  }
  setTimeout(() => URL.revokeObjectURL(url), 5000);
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
    if (search && !r.nom.toLowerCase().includes(search)) return false;
    if (window._placardFilter && window._placardFilter.length) {
      const match = r.ingredients.some(ing =>
        window._placardFilter.some(item => ing.toLowerCase().includes(item.toLowerCase()))
      );
      if (!match) return false;
    }
    return true;
  });

  // Badge filtre placard
  const placardBadge = document.getElementById('placard-filter-badge');
  if (placardBadge) {
    if (window._placardFilter && window._placardFilter.length) {
      placardBadge.textContent = `🗄️ Filtre placard actif (${recettes.length} recettes)`;
      placardBadge.style.display = 'block';
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
          <div class="recette-emoji recette-emoji-blurred">${r.emoji}</div>
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
        <div class="recette-emoji">${r.emoji}</div>
        <div class="recette-info">
          <div class="recette-name">${r.nom}</div>
          <div class="recette-meta">
            <span class="recette-time">⏱ ${r.temps}</span>
          </div>
        </div>
      </div>`;
  }).join('');

  if (!recettes.length) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:32px;">
        <div style="font-size:2rem;margin-bottom:8px;">🔍</div>
        <div style="color:var(--text-light);font-size:0.88rem;">Aucune recette trouvée.</div>
        ${window._placardFilter?.length ? `
          <button onclick="window._placardFilter=null;renderRecettes();"
            style="margin-top:12px;padding:8px 16px;border:none;border-radius:99px;background:var(--green-pale);color:var(--green-deep);font-size:0.82rem;cursor:pointer;">
            Effacer le filtre placard
          </button>` : ''}
      </div>`;
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
    <div class="modal-recipe-header">
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

  // Si Premium verrouillé → aperçu
  if (r.premium && !isPremium) {
    openRecettePreview(id);
    return;
  }

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

    <div style="margin-top:20px;display:flex;gap:8px;">
      <button class="btn-primary" style="flex:1;" onclick="addToAgenda(${r.id})">
        📅 Ajouter à l'agenda
      </button>
      <button class="btn-primary" style="padding:14px 16px;background:var(--green-mid);" onclick="shareRecette(${r.id})" title="Partager">
        📤
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('recette-modal').classList.add('hidden');
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

function filterCat(cat, el) {
  currentCatFilter = cat;
  document.querySelectorAll('#cat-filters .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderRecettes();
}

// ============================
// STATISTIQUES BIEN-ÊTRE
// ============================
function renderStats() {
  const statsEl = document.getElementById('stats-container');
  if (!statsEl) return;

  const days = 30;
  const today = new Date();
  const entries = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    entries.push({ date: dateKey(d), data: journal[dateKey(d)] || null, d });
  }

  const filled = entries.filter(e => e.data);
  const avgEnergie = filled.length
    ? Math.round(filled.reduce((s, e) => s + (e.data.energie || 0), 0) / filled.length * 10) / 10 : 0;
  const avgDouleur = filled.length
    ? Math.round(filled.reduce((s, e) => s + (e.data.douleur || 0), 0) / filled.length * 10) / 10 : 0;
  const nuitsSjsr = filled.filter(e => e.data.sjsr > 0).length;

  const visible = isPremium ? entries : entries.slice(-7);

  statsEl.innerHTML = `
    <div class="stats-summary-grid">
      <div class="stats-summary-card">
        <div class="stats-summary-val">${avgEnergie || '—'}</div>
        <div class="stats-summary-label">Énergie moy.<br>/10</div>
      </div>
      <div class="stats-summary-card">
        <div class="stats-summary-val">${avgDouleur || '—'}</div>
        <div class="stats-summary-label">Douleur moy.<br>/10</div>
      </div>
      <div class="stats-summary-card">
        <div class="stats-summary-val">${nuitsSjsr}</div>
        <div class="stats-summary-label">Nuits SJSR<br>${isPremium ? '30j' : '7j'}</div>
      </div>
    </div>

    <div class="stats-section" style="margin-top:16px;">
      <div class="stats-section-title">⚡ Énergie & Douleur — ${isPremium ? '30 derniers jours' : '7 derniers jours'}</div>
      <div class="stats-chart-wrap">
        <div class="stats-chart-bars">
          ${visible.map(e => {
            const en  = e.data ? Math.round((e.data.energie || 0) / 10 * 70) : 0;
            const do_ = e.data ? Math.round((e.data.douleur  || 0) / 10 * 70) : 0;
            const day = e.d.toLocaleDateString('fr-FR', { weekday: 'short' }).slice(0,3);
            return `<div class="stats-bar-wrap">
              <div style="display:flex;gap:2px;align-items:flex-end;height:70px;justify-content:center;">
                <div class="stats-bar energie" style="height:${en}px;width:45%;"></div>
                <div class="stats-bar douleur" style="height:${do_}px;width:45%;"></div>
              </div>
              <div class="stats-day-label">${day}</div>
            </div>`;
          }).join('')}
        </div>
        <div class="stats-legend">
          <div class="stats-legend-item"><div class="stats-legend-dot" style="background:var(--green-mid)"></div> Énergie</div>
          <div class="stats-legend-item"><div class="stats-legend-dot" style="background:var(--red-soft)"></div> Douleur</div>
        </div>
      </div>
    </div>

    <div class="stats-section">
      <div class="stats-section-title">🦵 Nuits SJSR</div>
      <div class="stats-chart-wrap">
        <div class="stats-chart-bars">
          ${visible.map(e => {
            const sjsr = e.data ? Math.round((e.data.sjsr || 0) / 5 * 70) : 0;
            const day  = e.d.toLocaleDateString('fr-FR', { weekday: 'short' }).slice(0,3);
            return `<div class="stats-bar-wrap">
              <div style="height:70px;display:flex;align-items:flex-end;justify-content:center;">
                <div class="stats-bar sjsr" style="height:${sjsr}px;width:80%;"></div>
              </div>
              <div class="stats-day-label">${day}</div>
            </div>`;
          }).join('')}
        </div>
        <div style="font-size:0.75rem;color:var(--text-light);margin-top:6px;">0 = aucun · 5 = insupportable</div>
      </div>
    </div>

    ${!isPremium ? `
    <div class="stats-premium-wall">
      <div style="font-size:1.8rem;">📊</div>
      <p>Débloquez l'historique complet sur <strong>30 jours</strong>, les tendances et l'export PDF.</p>
      <a href="https://buy.stripe.com/eVqeVcbsX136eDj0rR9EI00" target="_blank"
         class="btn-premium" style="display:block;text-align:center;text-decoration:none;">
        ⭐ Passer à Premium — 4,99€/mois
      </a>
    </div>` : ''}
  `;
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

let currentAgendaView = 'semaine';
let currentMonthOffset = 0;

function switchAgendaView(view, el) {
  currentAgendaView = view;
  document.querySelectorAll('#page-agenda .jtab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  document.getElementById('agenda-view-semaine').classList.toggle('hidden', view !== 'semaine');
  document.getElementById('agenda-view-mois').classList.toggle('hidden', view !== 'mois');
  if (view === 'mois') renderAgendaMensuel();
  else renderAgenda();
}

function changeAgendaMonth(dir) {
  currentMonthOffset += dir;
  renderAgendaMensuel();
}

function renderAgendaMensuel() {
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth() + currentMonthOffset, 1);
  const year  = targetDate.getFullYear();
  const month = targetDate.getMonth();
  const today = dateKey(new Date());

  const monthName = targetDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  document.getElementById('month-label').textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const grid = document.getElementById('agenda-month-grid');

  // Construire les jours du mois
  let html = '<div style="display:flex;flex-direction:column;gap:10px;">';

  // Déterminer si on commence par la 2ème semaine (si on est après le 13)
  // La vue commence toujours au 1er mais scroll vers aujourd'hui
  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day);
    const dk = dateKey(d);
    const isToday = dk === today;
    const dayData = agenda[dk] || {};
    const dow = d.getDay(); // 0=dim
    const dowNames = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
    const dowName = dowNames[dow];
    const isWE = dow === 0 || dow === 6;

    // Repas planifiés ce jour
    const repasPlanned = REPAS.map(r => {
      const recId = dayData[r.slug];
      const rec = recId ? RECETTES.find(x => x.id === recId) : null;
      return rec ? `<span style="font-size:0.75rem;background:var(--cream);border-radius:6px;padding:2px 6px;white-space:nowrap;">${rec.emoji} ${rec.nom.length > 18 ? rec.nom.slice(0,18)+'…' : rec.nom}</span>` : null;
    }).filter(Boolean);

    html += `
      <div id="month-day-${dk}"
        onclick="jumpToWeekDay('${dk}')"
        style="background:${isToday ? 'var(--green-deep)' : isWE ? 'var(--cream)' : 'var(--white)'};
               border:1.5px solid ${isToday ? 'var(--green-deep)' : 'var(--cream-dark)'};
               border-radius:var(--radius-md);padding:10px 12px;cursor:pointer;transition:opacity .2s;"
      >
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${repasPlanned.length ? '8px' : '0'};">
          <div style="font-weight:700;font-size:0.9rem;color:${isToday ? 'var(--white)' : isWE ? 'var(--green-mid)' : 'var(--green-deep)'};">
            ${dowName} ${day}${isToday ? ' 📍' : ''}
          </div>
          <div style="font-size:0.72rem;color:${isToday ? 'rgba(255,255,255,0.7)' : 'var(--text-light)'};">
            ${repasPlanned.length ? repasPlanned.length + ' repas' : '+ Ajouter'}
          </div>
        </div>
        ${repasPlanned.length ? `<div style="display:flex;flex-wrap:wrap;gap:4px;">${repasPlanned.join('')}</div>` : ''}
      </div>`;
  }

  html += '</div>';
  grid.innerHTML = html;

  // Scroll vers aujourd'hui si on est dans le bon mois
  if (month === now.getMonth() && year === now.getFullYear()) {
    setTimeout(() => {
      const todayEl = document.getElementById(`month-day-${today}`);
      if (todayEl) todayEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  }
}

function jumpToWeekDay(dk) {
  // Basculer en vue semaine et naviguer vers la semaine contenant ce jour
  const target = new Date(dk.slice(0,4), dk.slice(4,6)-1, dk.slice(6,8));
  const now = new Date();
  const nowMonday = new Date(now);
  nowMonday.setDate(now.getDate() - (now.getDay()+6)%7);
  const targetMonday = new Date(target);
  targetMonday.setDate(target.getDate() - (target.getDay()+6)%7);
  const diffDays = Math.round((targetMonday - nowMonday) / (1000*60*60*24));
  currentWeekOffset = Math.round(diffDays / 7);
  switchAgendaView('semaine', document.getElementById('agenda-tab-semaine'));
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

// Plan mensuel Avril 2026
const PLAN_MENSUEL_AVRIL = [
  // Semaine 1 — Focus Fer & SJSR
  { j:1,  pdc:1,  dej:4,  din:75, snack:129, theme:'🩸 Boost Fer' },
  { j:2,  pdc:2,  dej:5,  din:76, snack:80,  theme:'🌿 Anti-inflam' },
  { j:3,  pdc:3,  dej:29, din:9,  snack:81,  theme:'🧠 Focus TDAH' },
  { j:4,  pdc:4,  dej:54, din:33, snack:82,  theme:'🦵 Jambes légères' },
  { j:5,  pdc:5,  dej:55, din:34, snack:18,  theme:'⚡ Énergie' },
  { j:6,  pdc:25, dej:39, din:112,snack:16,  theme:'🥂 Week-end' },
  { j:7,  pdc:26, dej:40, din:113,snack:17,  theme:'🛌 Sommeil' },
  // Semaine 2 — Focus Magnésium
  { j:8,  pdc:8,  dej:58, din:114,snack:86,  theme:'💊 Magnésium' },
  { j:9,  pdc:9,  dej:59, din:115,snack:87,  theme:'🌙 Nuit calme' },
  { j:10, pdc:10, dej:60, din:116,snack:88,  theme:'🧠 Focus TDAH' },
  { j:11, pdc:11, dej:61, din:117,snack:89,  theme:'🩸 Boost Fer' },
  { j:12, pdc:12, dej:62, din:118,snack:90,  theme:'🌿 Anti-inflam' },
  { j:13, pdc:13, dej:63, din:119,snack:91,  theme:'🥂 Week-end' },
  { j:14, pdc:14, dej:64, din:120,snack:92,  theme:'🛌 Sommeil' },
  // Semaine 3 — Focus Oméga-3
  { j:15, pdc:15, dej:65, din:121,snack:93,  theme:'🐟 Oméga-3' },
  { j:16, pdc:16, dej:66, din:122,snack:94,  theme:'🦵 Jambes légères' },
  { j:17, pdc:17, dej:67, din:123,snack:95,  theme:'⚡ Énergie' },
  { j:18, pdc:18, dej:68, din:75, snack:96,  theme:'🌿 Anti-inflam' },
  { j:19, pdc:19, dej:69, din:76, snack:97,  theme:'🧠 Focus TDAH' },
  { j:20, pdc:20, dej:70, din:77, snack:98,  theme:'🥂 Week-end' },
  { j:21, pdc:21, dej:71, din:78, snack:99,  theme:'🛌 Sommeil' },
  // Semaine 4 — Focus Intestin & Probiotiques
  { j:22, pdc:22, dej:72, din:79, snack:100, theme:'🫘 Intestin' },
  { j:23, pdc:23, dej:73, din:112,snack:101, theme:'🩸 Boost Fer' },
  { j:24, pdc:24, dej:74, din:113,snack:102, theme:'🌿 Anti-inflam' },
  { j:25, pdc:25, dej:104,din:114,snack:103, theme:'🦵 Jambes légères' },
  { j:26, pdc:26, dej:105,din:115,snack:104, theme:'⚡ Énergie' },
  { j:27, pdc:1,  dej:106,din:116,snack:105, theme:'🥂 Week-end' },
  { j:28, pdc:2,  dej:107,din:117,snack:106, theme:'🛌 Sommeil' },
  { j:29, pdc:3,  dej:108,din:118,snack:107, theme:'🧠 Focus TDAH' },
  { j:30, pdc:4,  dej:109,din:119,snack:108, theme:'🌟 Bilan mensuel' },
];

// Plan mensuel Mai 2026
const PLAN_MENSUEL_MAI = [
  { j:1,  pdc:1,   dej:104, din:156, snack:161, theme:'🌸 1er mai · Détox' },
  { j:2,  pdc:2,   dej:105, din:75,  snack:80,  theme:'🩸 Boost Fer' },
  { j:3,  pdc:96,  dej:106, din:76,  snack:81,  theme:'🧠 Focus TDAH' },
  { j:4,  pdc:97,  dej:107, din:157, snack:82,  theme:'🦵 Jambes légères' },
  { j:5,  pdc:98,  dej:108, din:77,  snack:83,  theme:'⚡ Énergie' },
  { j:6,  pdc:99,  dej:109, din:78,  snack:161, theme:'🥂 Week-end Brunch' },
  { j:7,  pdc:100, dej:110, din:79,  snack:84,  theme:'🛌 Sommeil profond' },
  { j:8,  pdc:101, dej:111, din:112, snack:85,  theme:'💊 Magnésium' },
  { j:9,  pdc:102, dej:104, din:113, snack:128, theme:'🌙 Nuit calme' },
  { j:10, pdc:103, dej:105, din:114, snack:88,  theme:'🧠 Focus TDAH' },
  { j:11, pdc:131, dej:106, din:162, snack:89,  theme:'🌿 Anti-inflam' },
  { j:12, pdc:1,   dej:107, din:115, snack:90,  theme:'🩸 Boost Fer' },
  { j:13, pdc:66,  dej:108, din:116, snack:91,  theme:'🥂 Brunch printemps' },
  { j:14, pdc:67,  dej:109, din:117, snack:92,  theme:'🛌 Récupération' },
  { j:15, pdc:68,  dej:110, din:118, snack:93,  theme:'🫘 Microbiote' },
  { j:16, pdc:69,  dej:111, din:119, snack:94,  theme:'🦵 Circulation' },
  { j:17, pdc:96,  dej:60,  din:120, snack:95,  theme:'⚡ Vitalité' },
  { j:18, pdc:97,  dej:61,  din:121, snack:124, theme:'🌿 Légèreté' },
  { j:19, pdc:98,  dej:70,  din:122, snack:125, theme:'🧠 Concentration' },
  { j:20, pdc:99,  dej:71,  din:123, snack:126, theme:'🥂 Brunch gourmand' },
  { j:21, pdc:100, dej:72,  din:134, snack:127, theme:'🌸 Bien-être total' },
  { j:22, pdc:101, dej:73,  din:135, snack:128, theme:'🩸 Fer héminique' },
  { j:23, pdc:102, dej:74,  din:155, snack:129, theme:'🦵 SJSR nuit calme' },
  { j:24, pdc:103, dej:154, din:75,  snack:130, theme:'🌿 Anti-inflam' },
  { j:25, pdc:131, dej:158, din:76,  snack:80,  theme:'⚡ Énergie durable' },
  { j:26, pdc:1,   dej:160, din:77,  snack:81,  theme:'🧠 TDAH focus' },
  { j:27, pdc:66,  dej:163, din:78,  snack:82,  theme:'🥂 Brunch estival' },
  { j:28, pdc:67,  dej:104, din:79,  snack:83,  theme:'🛌 Sommeil réparateur' },
  { j:29, pdc:68,  dej:105, din:112, snack:84,  theme:'🌸 Bilan semaine 4' },
  { j:30, pdc:69,  dej:106, din:113, snack:85,  theme:'💪 Récap mai' },
  { j:31, pdc:96,  dej:107, din:114, snack:161, theme:'🎉 Dernier jour mai' },
];

const JOURS_SEMAINE = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
const MOIS = ['jan','fév','mar','avr','mai','juin','juil','août','sep','oct','nov','déc'];

function renderPlanMensuel() {
  const now = new Date();
  const moisNum = now.getMonth(); // 3=avril, 4=mai
  renderPlanMoisSpec(moisNum === 3 ? 3 : 4);
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

function generateMenu() {
  const duree    = parseInt(document.getElementById('gen-duree').value);
  const priorite = document.getElementById('gen-priorite').value;

  if (!isPremium && duree > 3) {
    document.getElementById('generated-menu').classList.add('hidden');
    document.getElementById('gen-premium-wall').classList.remove('hidden');
    return;
  }

  document.getElementById('gen-premium-wall').classList.add('hidden');

  const petitsDej = RECETTES.filter(r => r.cat === 'petit-dejeuner' && (!r.premium || isPremium));
  const brunchs   = RECETTES.filter(r => r.cat === 'brunch'         && (!r.premium || isPremium));
  const dejeuners = RECETTES.filter(r => r.cat === 'dejeuner'       && (!r.premium || isPremium));
  const diners    = RECETTES.filter(r => r.cat === 'diner'           && (!r.premium || isPremium));
  const snacks    = RECETTES.filter(r => r.cat === 'snack'           && (!r.premium || isPremium));

  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  // Filtre par priorité
  const filterPriority = (arr) => {
    if (priorite === 'energie')   return arr.filter(r => r.calories > 300).length > 2 ? arr.filter(r => r.calories > 300) : arr;
    if (priorite === 'sommeil')   return arr.filter(r => r.benefices?.toLowerCase().includes('sommeil')) || arr;
    if (priorite === 'digestion') return arr.filter(r => r.tags?.includes('vg')) || arr;
    return arr; // anti-inflammatoire = tout
  };

  const today = new Date();
  let html = '';

  for (let i = 0; i < duree; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const label    = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    const jourSem  = d.getDay(); // 0=dim, 6=sam
    const isWeekend = jourSem === 0 || jourSem === 6;

    // Week-end : possibilité brunch à la place du petit-déj
    const pDejArr = isWeekend && brunchs.length ? brunchs : petitsDej;
    const pDej    = pick(filterPriority(pDejArr));
    const dej     = pick(filterPriority(dejeuners));
    const din     = pick(filterPriority(diners));
    const snack   = pick(snacks);

    const pDejLabel = isWeekend && pDejArr === brunchs ? '🥂 Brunch' : '🌅 Petit-déj';

    html += `
      <div class="gen-day-block" data-pdej="${pDej?.id}" data-dej="${dej?.id}" data-din="${din?.id}">
        <div class="gen-day-title">📅 ${label}${isWeekend ? ' 🌿' : ''}</div>
        <div class="gen-meal" onclick="openRecette(${pDej?.id})" style="cursor:pointer;">
          <div class="gen-meal-label">${pDejLabel}</div>
          <div class="gen-meal-name">${pDej?.emoji} ${pDej?.nom}</div>
        </div>
        <div class="gen-meal" onclick="openRecette(${dej?.id})" style="cursor:pointer;">
          <div class="gen-meal-label">☀️ Déjeuner</div>
          <div class="gen-meal-name">${dej?.emoji} ${dej?.nom}</div>
        </div>
        <div class="gen-meal" onclick="openRecette(${din?.id})" style="cursor:pointer;">
          <div class="gen-meal-label">🌙 Dîner</div>
          <div class="gen-meal-name">${din?.emoji} ${din?.nom}</div>
        </div>
        ${snack ? `
        <div class="gen-meal" onclick="openRecette(${snack.id})" style="cursor:pointer;opacity:0.8;">
          <div class="gen-meal-label">🍎 Snack</div>
          <div class="gen-meal-name">${snack.emoji} ${snack.nom}</div>
        </div>` : ''}
      </div>`;
  }

  const generated = document.getElementById('generated-menu');
  generated.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
      <div style="font-family:var(--font-display);color:var(--green-deep);font-size:1.1rem;">Menu généré ✨</div>
      <button class="btn-primary" onclick="generateMenu()" style="padding:8px 16px;font-size:0.82rem;">🔄 Régénérer</button>
    </div>
    ${html}
    <button class="btn-primary full-width" onclick="applyMenuToAgenda()">📅 Importer dans l'agenda</button>`;

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

    if (!agenda[dk]) agenda[dk] = {};
    if (pDejId) agenda[dk]['petitdej'] = pDejId;
    if (dejId)  agenda[dk]['dejeuner'] = dejId;
    if (dinId)  agenda[dk]['diner']    = dinId;
  });

  saveState();
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
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
