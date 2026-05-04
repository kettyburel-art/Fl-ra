// ============================
// FLŌRA — Base de données des recettes
// 175 recettes anti-inflammatoires SJSR/TDAH-friendly
// Réparties en : petit-déj, brunch, déjeuner, dîner, snack
// ============================
// IMPORTANT : ce fichier doit être chargé AVANT app.js dans index.html

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
    temps: '20 min', calories: 350, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'La cuisson en papillote courte préserve les oméga-3 (qui s\'oxydent au-delà de 15 min de cuisson). Les brocolis apportent la vitamine C qui améliore l\'absorption du fer.',
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
      'Fermez la papillote hermétiquement et enfournez 12 à 15 min (pas plus, pour préserver les oméga-3).'
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
    emoji: '🌰', nom: 'Biscuits SG noix-châtaigne purée d\'amande',
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
      '25g sucre de coco (ou sirop d\'érable)',
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
    emoji: '🥕', nom: 'Biscuits SG salés carotte-roquette-pois chiche',
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
    id: 33, cat: 'snack', premium: false,
    emoji: '🧁', nom: 'Muffins potimarron-chocolat-cannelle',
    temps: '35 min', calories: 290, diff: 'Facile',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Le potimarron est riche en bêta-carotène et en potassium. Le chocolat noir ajoute des flavonoïdes anti-inflammatoires. Un en-cas réconfortant et naturellement sucré.',
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
      'Combinez les deux préparations. Versez dans des moules à muffins huilés.',
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
      '1 c.à.c extrait de vanille (ou bouchon de rhum vanillé)',
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
      '100g tofu ferme (ou feta)',
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
    emoji: '🌰', nom: 'Pain SG paléo poudre d\'amande-graines de lin',
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
  ,{
    id: 164, cat: 'petit-dejeuner', premium: false,
    emoji: '🥞', nom: 'Crêpes à la farine de riz',
    temps: '40 min', calories: 220, diff: 'Facile',
    tags: ['sg', 'vg'],
    benefices: 'Crêpes 100% sans gluten, fines et légères. La farine de riz est neutre et digeste, parfaite pour un petit-déjeuner doux. Repos de 30 min essentiel pour la texture.',
    ingredients: [
      '250g farine de riz',
      '3 œufs',
      '500ml lait (ou lait végétal)',
      '1 pincée de sel'
    ],
    etapes: [
      'Mélangez la farine de riz avec le sel dans un saladier.',
      'Cassez les œufs au centre puis ajoutez le lait progressivement en fouettant.',
      'Laissez reposer la pâte 30 minutes à température ambiante.',
      'Faites cuire dans une poêle légèrement graissée comme des crêpes classiques (1-2 min par face).',
      'Servez avec fruits frais, miel ou chocolat fondu.'
    ]
  },
  {
    id: 165, cat: 'petit-dejeuner', premium: false,
    emoji: '🍌', nom: 'Crêpes banane & flocons d\'avoine SG',
    temps: '15 min', calories: 240, diff: 'Très facile',
    tags: ['sg', 'sl'],
    benefices: 'Petit-déjeuner healthy SJSR-friendly : la banane apporte du potassium et magnésium (anti-impatiences nocturnes). Les flocons d\'avoine certifiés sans gluten sont riches en fer et fibres solubles.',
    ingredients: [
      '2 bananes mûres',
      '2 œufs',
      '100g flocons d\'avoine certifiés sans gluten'
    ],
    etapes: [
      'Mixez tous les ingrédients ensemble jusqu\'à obtenir une pâte homogène.',
      'Faites cuire à la poêle comme des pancakes (2 min par face).',
      'Servez chaud, idéal en petit-déjeuner du matin.'
    ]
  },
  {
    id: 166, cat: 'petit-dejeuner', premium: false,
    emoji: '🥥', nom: 'Crêpes coco ultra gourmandes',
    temps: '20 min', calories: 280, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Texture moelleuse et goût exotique. Le lait de coco contient des acides gras à chaîne moyenne (énergie rapide), la farine de coco est riche en fibres et protéines.',
    ingredients: [
      '200ml lait de coco',
      '100g farine de coco',
      '3 œufs',
      '1 c.à.s de sucre'
    ],
    etapes: [
      'Mélangez tous les ingrédients dans un saladier.',
      'Laissez reposer 5 min (la farine de coco absorbe beaucoup).',
      'Faites cuire à la poêle, environ 2 min par face.',
      'Servez avec fruits frais ou copeaux de chocolat noir.'
    ]
  },
  {
    id: 167, cat: 'petit-dejeuner', premium: false,
    emoji: '🥞', nom: 'Pancakes farine de riz & amande',
    temps: '25 min', calories: 320, diff: 'Facile',
    tags: ['sg'],
    benefices: 'Pancakes moelleux pour 3 personnes. La poudre d\'amande apporte des protéines, du magnésium et de la vitamine E. Excellent pour démarrer la journée avec un index glycémique modéré.',
    ingredients: [
      '120g farine de riz',
      '40g poudre d\'amande',
      '2 œufs',
      '220ml boisson végétale (amande ou avoine SG)',
      '1 c.à.s de sucre',
      '1 c.à.c de levure sans gluten'
    ],
    etapes: [
      'Mélangez les ingrédients secs (farine, amande, sucre, levure).',
      'Ajoutez les œufs et la boisson végétale puis fouettez jusqu\'à pâte lisse.',
      'Laissez reposer 10 minutes.',
      'Cuisez 1 à 2 minutes par face dans une poêle chaude légèrement graissée.',
      'Servez avec sirop d\'érable, fruits rouges ou yaourt végétal.'
    ]
  },
  {
    id: 168, cat: 'brunch', premium: true,
    emoji: '🥖', nom: 'Cake poulet-estragon SG/SL (d\'après Sophie Dudemaine)',
    temps: '1h25 + repos 1 nuit', calories: 380, diff: 'Intermédiaire',
    tags: ['sg', 'sl'],
    benefices: 'Adaptation sans gluten et sans lactose d\'un classique des cakes salés. Riche en protéines (poulet), B12 (levure maltée). Estragon : digestif et antispasmodique. À préparer la veille pour développer les arômes. Variante originale Sophie Dudemaine : remplacer la crème de soja par crème fraîche 30%, et la levure maltée par 100g gruyère râpé.',
    ingredients: [
      '— GARNITURE —',
      '200g blanc de poulet sans peau',
      '1 échalote',
      '50g estragon frais (ou 3g lyophilisé)',
      '1 c.à.s huile de pépins de raisin',
      'Sel, poivre',
      '— APPAREIL À CAKE —',
      '3 œufs (env. 150g)',
      '95g huile de pépins de raisin',
      '120g crème de soja épaisse',
      '100g farine de maïs SG',
      '50g maïzena',
      '5g levure chimique',
      '50g levure maltée + 50g fromage végétal râpé (effet umami)'
    ],
    etapes: [
      'VEILLE — Graissez un moule à cake (20×8×8 cm) avec margarine végétale + farine, chemisez le fond de papier cuisson, mettez au frais.',
      'VEILLE — Garniture : émincez l\'échalote, faites-la revenir avec l\'huile. Ajoutez les dés de poulet (1,5 cm), faites rissoler 5 min. Ajoutez l\'estragon, poursuivez 5 min. Réservez avec le jus de cuisson, laissez refroidir.',
      'VEILLE — Appareil : préchauffez le four à 160°C. Au batteur, blanchissez les œufs puis versez l\'huile en filet. Ajoutez en alternance la moitié de la crème, la moitié du sec tamisé, le reste de crème, le reste de sec.',
      'VEILLE — Incorporez le mélange levure maltée + fromage végétal à la spatule, salez/poivrez. Ajoutez délicatement la garniture refroidie. Versez dans le moule.',
      'VEILLE — Cuisson 1h à 160°C. À mi-cuisson, entaillez le dessus sur 1 cm de profondeur (pour cuisson homogène). Refroidissez sans démouler, puis démoulez et filmez. Réfrigérez 1 nuit (48h c\'est encore mieux).',
      'JOUR J — Sortez le cake 20-30 min avant de servir pour qu\'il soit à température ambiante.'
    ]
  },
  {
    id: 169, cat: 'dejeuner', premium: false,
    emoji: '🍣', nom: 'Bowl saumon teriyaki, riz, avocat & edamame',
    temps: '20 min', calories: 360, diff: 'Facile',
    tags: ['sl'],
    benefices: 'Bowl complet riche en oméga-3 (saumon), bons gras (avocat), protéines végétales (edamame). Anti-inflammatoire puissant. Le riz japonais apporte des glucides lents pour stabiliser la glycémie.',
    ingredients: [
      '2 pavés de saumon coupés en cubes',
      '150g riz blanc cuit (japonais ou basmati)',
      '100g edamame (fèves de soja)',
      '½ avocat tranché',
      'Sauce teriyaki (ou sauce soja sucrée)',
      'Graines de sésame',
      '1 oignon vert ciselé (facultatif)'
    ],
    etapes: [
      'Saumon : saisissez les cubes dans une poêle avec un filet d\'huile.',
      'Quand presque cuits, ajoutez la sauce teriyaki pour bien les enrober.',
      'Edamame : cuisez quelques minutes dans l\'eau bouillante salée, égouttez.',
      'Montage : disposez le riz, l\'edamame, l\'avocat et le saumon dans un bol.',
      'Ajoutez un filet de sauce, parsemez de graines de sésame et d\'oignon vert.'
    ]
  },
  {
    id: 170, cat: 'dejeuner', premium: false,
    emoji: '🥬', nom: 'Chou-fleur à la sicilienne',
    temps: '1h', calories: 270, diff: 'Intermédiaire',
    tags: ['sg'],
    benefices: 'Plat méditerranéen anti-inflammatoire. Le chou-fleur est riche en sulforaphane (détoxifiant). Anchois : oméga-3 et calcium. Olives noires : vitamine E. La levure maltée apporte un goût umami et fromager, riche en B12. Le vin rouge en cuisson apporte des polyphénols (l\'alcool s\'évapore à la cuisson).',
    ingredients: [
      '750g chou-fleur',
      '1 oignon',
      '3 filets d\'anchois',
      '50g levure maltée (effet fromager umami)',
      '12 olives noires dénoyautées',
      '1 dl vin rouge (alcool évaporé à la cuisson)',
      '3 c.à.s huile d\'olive',
      'Sel'
    ],
    etapes: [
      'Divisez le chou-fleur en petits bouquets, blanchissez 30 sec, égouttez. Hachez les anchois et les olives en 4.',
      'Chauffez 2 c.à.s d\'huile dans une cocotte. Faites rissoler les oignons hachés, ajoutez la moitié des anchois, les 4 olives hachées et 1 c.à.s de levure maltée.',
      'Remuez 1 min, étalez dessus une couche de bouquets de chou-fleur, saupoudrez de levure maltée, parsemez avec les olives restantes.',
      'Salez, mouillez au vin rouge, ajoutez un filet d\'huile d\'olive, fermez la cocotte sur feu très doux 45 min (le vin ne doit pas bouillir, l\'alcool s\'évapore).',
      'Servez chaud avec du pain de campagne sans gluten.'
    ]
  },
  {
    id: 171, cat: 'dejeuner', premium: false,
    emoji: '🌶️', nom: 'Chouchouka de Blida',
    temps: '2h15 + repos 6h', calories: 165, diff: 'Patience',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Confit de poivrons et tomates algérien. Riche en lycopène (antioxydant majeur tomate cuite) et vitamine C. Très digeste, idéal pour ceux qui ont des intestins sensibles. Se conserve plusieurs jours.',
    ingredients: [
      '3 kg poivrons rouges',
      '1,5 kg tomates',
      '3-4 gousses d\'ail',
      '2 morceaux de sucre',
      'Sel',
      'Poivre ou piment de Cayenne',
      'Huile d\'olive'
    ],
    etapes: [
      'Préchauffez le four à 190°C. Faites griller les poivrons sur la grille, lèche-frite en dessous, environ 30 min jusqu\'à ce que la peau noircisse.',
      'Retirez les poivrons, enlevez la peau, la queue et les graines. Disposez les chairs sur une passoire, laissez égoutter une demi-journée minimum.',
      'Tomates : ébouillantez 30 sec, enlevez la peau. Coupez et enlevez les graines.',
      'Cuisson : dans une cocotte, faites revenir les ails 1-2 min dans l\'huile d\'olive (sans les brûler).',
      'Ajoutez les poivrons égouttés. Laissez mijoter 45 min à feu doux (attention ça crame). Ajoutez les tomates épépinées.',
      'Laissez cuire-mijoter encore 60 à 90 minutes.',
      'À mi-cuisson, ajoutez le sucre, sel et poivre.',
      'C\'est prêt quand ça commence à avoir une consistance confite. Laissez refroidir, disposez en petites coupelles.'
    ]
  },
  {
    id: 172, cat: 'dejeuner', premium: true,
    emoji: '🥪', nom: 'Croque-monsieur sans gluten & sans lactose',
    temps: '30 min', calories: 337, diff: 'Facile',
    tags: ['sg', 'sl'],
    benefices: 'Le classique adapté SG/SL. La levure maltée donne le goût fromager sans lactose. Le lait d\'avoine certifié SG dans la béchamel apporte des fibres bêta-glucane (cholestérol).',
    ingredients: [
      '— CROQUES —',
      '8 tranches pain de mie SG',
      '4 tranches jambon blanc SG',
      '4 tranches fromage végétal fondant (Violife) ou emmental affiné (pauvre lactose)',
      '1 c.à.s margarine végétale',
      '— BÉCHAMEL SL —',
      '20g margarine végétale',
      '20g fécule de maïs (Maïzena)',
      '200ml lait d\'avoine chaud certifié SG',
      '1 c.à.s levure maltée',
      'Sel, poivre blanc, noix de muscade râpée'
    ],
    etapes: [
      'Béchamel : faites fondre la margarine à feu moyen. Ajoutez la fécule d\'un coup et fouettez 1 min. Versez le lait d\'avoine chaud progressivement en fouettant sans cesse pour éviter les grumeaux. Laissez épaissir 3-4 min. Ajoutez levure maltée, sel, poivre, muscade. Réservez.',
      'Préchauffez le grill du four à 200°C. Faites légèrement toaster les tranches de pain dans un grille-pain ou à la poêle avec un peu de margarine.',
      'Étalez une couche de béchamel généreuse sur 4 tranches de pain. Déposez une tranche de jambon, puis une tranche de fromage.',
      'Refermez avec les 4 tranches restantes. Étalez une nouvelle couche de béchamel sur le dessus, déposez une tranche de fromage supplémentaire.',
      'Enfournez sous le grill à 10 cm de la résistance pour 5-7 min jusqu\'à fromage bien fondu et béchamel dorée.',
      'Servez immédiatement bien chaud avec une salade verte.',
      'ASTUCE : une béchamel bien épaisse + un fromage qui fond bien = la clé.'
    ]
  },
  {
    id: 173, cat: 'dejeuner', premium: true,
    emoji: '🥧', nom: 'Flamiche picarde aux poireaux SG/SL',
    temps: '1h45', calories: 543, diff: 'Intermédiaire',
    tags: ['sg', 'sl', 'vg'],
    benefices: 'Tarte salée du Nord, riche en prébiotiques (poireaux, échalotes, ail) qui nourrissent le microbiote. Le mélange farine de riz + pois chiche apporte des protéines végétales et un index glycémique bas.',
    ingredients: [
      '— PÂTE BRISÉE SG —',
      '150g farine de riz',
      '80g fécule de maïs (Maïzena)',
      '40g farine de pois chiche',
      '½ c.à.c sel',
      '100g margarine végétale froide en dés',
      '1 œuf',
      '2-3 c.à.s eau très froide',
      '1 c.à.c vinaigre de cidre',
      '— GARNITURE POIREAUX —',
      '1kg poireaux (blanc + vert tendre)',
      '2 échalotes émincées',
      '2 gousses d\'ail écrasées',
      '3 c.à.s margarine végétale',
      'Sel, poivre noir',
      '— APPAREIL SL —',
      '3 œufs',
      '250ml crème de soja (Bjorg ou Alpro)',
      '100ml lait d\'avoine certifié SG',
      '2 c.à.s levure maltée',
      'Sel, poivre blanc, muscade râpée'
    ],
    etapes: [
      'Pâte : mélangez les farines, fécule et sel. Sablez avec la margarine froide. Ajoutez l\'œuf battu, vinaigre et eau froide progressivement. Filmez et réfrigérez 1h.',
      'Poireaux : faites fondre la margarine, faites revenir échalotes et ail 3 min. Ajoutez les poireaux émincés, salez, couvrez. Étuvez 25-30 min en remuant. Retirez le couvercle, évaporez 5 min à feu vif. Poivrez. Refroidissez complètement.',
      'Préchauffez à 180°C. Étalez la pâte entre 2 feuilles de papier cuisson sur 3-4 mm. Foncez un moule de 26 cm. Piquez le fond. Lestez et cuisez à blanc 15 min puis 5 min sans billes. Tiédissez.',
      'Appareil : fouettez les œufs avec crème de soja, lait d\'avoine et levure maltée. Assaisonnez généreusement (sel, poivre blanc, muscade).',
      'Mélangez les poireaux avec l\'appareil à la crème. Versez dans le fond de tarte précuit en formant un dôme légèrement bombé.',
      'Enfournez 30-35 min jusqu\'à surface bien dorée. Reposez 10 min avant de servir tiède.',
      'ASTUCE : la flamiche picarde se distingue de la quiche par sa générosité — la garniture aux poireaux est mélangée à l\'appareil plutôt que simplement garnie dessous.'
    ]
  },
  {
    id: 174, cat: 'diner', premium: true,
    emoji: '🥘', nom: 'Hachis parmentier SG/SL',
    temps: '1h30', calories: 663, diff: 'Intermédiaire',
    tags: ['sg', 'sl'],
    benefices: 'Plat réconfortant complet. Le bœuf est riche en fer héminique (le mieux absorbé — top SJSR). La pomme de terre Bintje apporte du potassium. Levure maltée pour le goût fromager sans lactose.',
    ingredients: [
      '— VIANDE —',
      '800g bœuf haché',
      '2 oignons émincés',
      '3 gousses d\'ail écrasées',
      '2 carottes râpées',
      '2 c.à.s concentré de tomate',
      '150ml vin blanc sec (sans gluten)',
      '150ml bouillon de bœuf SG',
      '2 c.à.s huile d\'olive',
      '1 bouquet garni (thym, laurier)',
      'Sel et poivre noir',
      '— PURÉE SL —',
      '1,2 kg pommes de terre à chair farineuse (Bintje ou Monalisa)',
      '80g margarine végétale (St Hubert Bio)',
      '150ml lait d\'avoine chaud certifié SG',
      'Sel, poivre blanc, muscade râpée',
      '— FINITION —',
      '2 c.à.s levure maltée (goût fromager)',
      '1 c.à.s margarine végétale (pour dorer)'
    ],
    etapes: [
      'Faites chauffer l\'huile dans une grande poêle. Faites revenir oignons et ail 3-4 min. Ajoutez les carottes râpées, suez 2 min.',
      'Ajoutez le bœuf haché, faites revenir à feu vif en émiettant. Salez et poivrez.',
      'Incorporez le concentré de tomate, le vin blanc et le bouillon. Ajoutez le bouquet garni. Laissez mijoter 20-25 min jusqu\'à liquide presque entièrement absorbé. Retirez le bouquet.',
      'Pendant ce temps, cuisez les pommes de terre pelées et coupées dans une casserole d\'eau salée 20 min. Égouttez. Écrasez au presse-purée (pas au mixeur — la purée deviendrait collante). Incorporez la margarine puis le lait d\'avoine chaud progressivement. Assaisonnez (sel, poivre blanc, muscade).',
      'Préchauffez à 200°C. Étalez la viande dans un grand plat à gratin en couche régulière. Recouvrez de purée en lissant. Striez à la fourchette pour créer des reliefs. Parsemez de levure maltée. Disposez quelques noisettes de margarine sur le dessus.',
      'Enfournez 25-30 min jusqu\'à ce que le dessus soit bien doré et croustillant. Reposez 5 min avant de servir.',
      'ASTUCE : préparez la viande la veille — elle ne sera que plus goûteuse le lendemain.'
    ]
  },
  {
    id: 175, cat: 'snack', premium: false,
    emoji: '🍫', nom: 'Brownie tiramisu chocolat noir',
    temps: '22 min', calories: 340, diff: 'Très facile',
    tags: ['sg'],
    benefices: 'Le chocolat noir 70%+ est riche en magnésium (anti-impatiences SJSR), fer et flavonoïdes (anti-inflammatoires). Le beurre de coco apporte des bons gras saturés (énergie soutenue). Sucre de coco : indice glycémique bas. Brownie minute, peu d\'œufs et pas de farine.',
    ingredients: [
      '180g chocolat noir 70% minimum',
      '120g beurre de coco (ou purée d\'amande)',
      '3 œufs',
      '80g sucre de coco (ou sirop d\'érable)'
    ],
    etapes: [
      'Préchauffez le four à 200°C.',
      'Faites fondre chocolat et beurre de coco au bain-marie ou micro-ondes.',
      'Ajoutez les œufs un par un en mélangeant, puis le sucre.',
      'Versez dans un moule huilé tapissé de papier cuisson.',
      'Cuisez 10 à 12 minutes à 200°C — le centre doit rester légèrement coulant.',
      'Laissez refroidir avant de couper en parts.'
    ]
  }
];

