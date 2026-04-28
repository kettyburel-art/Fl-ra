// ============================
// DATA — Compléments alimentaires
// Niveau de preuve :
//   'A' = preuves cliniques solides (méta-analyses, recommandations)
//   'B' = preuves modérées (essais contrôlés, recommandations conditionnelles)
//   'C' = preuves préliminaires ou empiriques
// ============================

const COMPLEMENTS = [
  // ============= TIER A — PREUVES SOLIDES =============
  {
    id: 'fer',
    emoji: '🩸',
    couleur: '#c0614a',
    nom: 'Fer',
    benefice: 'Le déficit en fer (ferritine basse) est la cause secondaire la plus fréquente du SJSR.',
    preuve: 'A',
    posologie: '40 à 80 mg/j de fer élémentaire, à jeun, avec vitamine C. Durée 3 mois minimum.',
    science: 'Les guidelines internationales du SJSR (AASM 2024) recommandent une supplémentation si ferritine < 75 ng/mL ou saturation < 20%, pas seulement < 30 comme pour l\'anémie.',
    contreindications: [
      'Hémochromatose ou surcharge martiale',
      'Pathologie hépatique sévère',
      'Maladie inflammatoire intestinale en poussée',
      'Antécédent d\'ulcère digestif'
    ],
    interactions: [
      'Levothyrox : espacer de 4h minimum',
      'Antibiotiques tétracyclines/quinolones : espacer de 2-3h',
      'Inhibiteurs de pompe à protons (Inexium, Mopral) : absorption fortement réduite'
    ],
    medicCritique: ['levothyrox', 'tetracyclines', 'ipp'],
    avant: 'IMPÉRATIF : ne jamais débuter sans dosage préalable de la ferritine sérique et du coefficient de saturation de la transferrine. Le fer en excès est toxique pour le foie.',
    sources: 'AASM 2024 (Aurora et al.), recommandations EFNS, Allen et al. 2018'
  },
  
  {
    id: 'magnesium',
    emoji: '⚡',
    couleur: '#3d6b58',
    nom: 'Magnésium',
    benefice: 'Réduit les crampes nocturnes et favorise la détente musculaire. Effet sur le sommeil.',
    preuve: 'B',
    posologie: '200 à 400 mg/j de magnésium élémentaire (forme bisglycinate ou citrate, mieux tolérées). Le soir.',
    science: 'Études contrôlées : amélioration modérée du SJSR léger à modéré, surtout en cas de carence. Effet placebo non négligeable. Synergie avec vitamine B6.',
    contreindications: [
      'Insuffisance rénale (clairance < 30 mL/min) — risque d\'hypermagnésémie',
      'Bloc auriculo-ventriculaire',
      'Myasthénie'
    ],
    interactions: [
      'Antibiotiques tétracyclines et quinolones : espacer de 2h',
      'Bisphosphonates : espacer de 2h',
      'Diurétiques épargneurs de potassium : surveillance'
    ],
    medicCritique: ['tetracyclines'],
    avant: 'À doses élevées (>350 mg/j), peut provoquer diarrhées. Si insuffisance rénale ou doute sur fonction rénale, consulter un médecin.',
    sources: 'Hornyak et al., Sleep Medicine Reviews, méta-analyse 2022'
  },

  {
    id: 'vit-d',
    emoji: '☀️',
    couleur: '#d4a843',
    nom: 'Vitamine D3',
    benefice: 'Déficit fréquent en cas de douleur chronique. Rôle dans la régulation neuromusculaire et l\'inflammation.',
    preuve: 'B',
    posologie: '1 000 à 2 000 UI/j en entretien, 4 000 UI/j si carence avérée (sous contrôle). Avec un repas gras.',
    science: 'Plusieurs études associent SJSR et déficit en vitamine D. Supplémentation utile si 25(OH)D < 30 ng/mL.',
    contreindications: [
      'Hypercalcémie',
      'Hyperparathyroïdie primaire',
      'Sarcoïdose ou autres maladies granulomateuses',
      'Calculs rénaux récidivants (prudence)'
    ],
    interactions: [
      'Diurétiques thiazidiques : risque d\'hypercalcémie',
      'Digoxine : surveillance kaliémie/calcémie',
      'Corticoïdes au long cours : effet réduit'
    ],
    medicCritique: [],
    avant: 'Idéalement, doser 25(OH)D avant supplémentation. Doses > 4 000 UI/j en automédication prolongée déconseillées sans suivi médical.',
    sources: 'Wali et al. 2018, ANSES recommandations'
  },

  {
    id: 'omega3',
    emoji: '🐟',
    couleur: '#3d6b58',
    nom: 'Oméga-3 EPA/DHA',
    benefice: 'Action anti-inflammatoire systémique. Soutient la fonction nerveuse et l\'humeur.',
    preuve: 'A',
    posologie: '1 000 à 2 000 mg/j d\'EPA+DHA combinés. Durée minimale 8 semaines pour effet anti-inflammatoire.',
    science: 'Méta-analyses (Cochrane, AHA) : effet anti-inflammatoire bien documenté, bénéfices sur douleur chronique et symptômes dépressifs associés. Pas d\'étude SJSR spécifique mais synergie avec le terrain inflammatoire.',
    contreindications: [
      'Allergie aux poissons / crustacés (vérifier la source)',
      'Trouble de la coagulation',
      'Avant chirurgie : arrêter 7-10 jours avant'
    ],
    interactions: [
      'Anticoagulants (Préviscan, Sintrom, Eliquis, Xarelto) : risque hémorragique majoré',
      'Antiagrégants (aspirine à dose anti-agrégante, clopidogrel) : risque hémorragique',
      'Antihypertenseurs : effet additif possible (bénéfique mais à surveiller)'
    ],
    medicCritique: ['anticoag', 'antiag'],
    avant: 'Choisir une marque avec faible teneur en métaux lourds (label IFOS ou Friend of the Sea). Préférer triglycérides naturels aux esters éthyliques.',
    sources: 'AHA 2019, Cochrane Reviews 2020'
  },

  // ============= TIER B — PREUVES MODÉRÉES =============
  {
    id: 'b9',
    emoji: '🌿',
    couleur: '#6aaa8a',
    nom: 'Vitamine B9 (folates)',
    benefice: 'Carence fréquente chez les femmes en âge de procréer et liée au SJSR notamment pendant la grossesse.',
    preuve: 'B',
    posologie: '400 µg/j (entretien). 800 µg/j si grossesse ou désir de grossesse.',
    science: 'Le SJSR de la grossesse est associé aux carences en folates et en fer. La supplémentation est par ailleurs recommandée systématiquement avant et pendant la grossesse pour prévenir les anomalies de fermeture du tube neural.',
    contreindications: [
      'Cancer hormonodépendant non traité (prudence, à discuter avec oncologue)',
      'Anémie pernicieuse non diagnostiquée (peut masquer un déficit B12)'
    ],
    interactions: [
      'Méthotrexate : antagonisme (sauf prescription spécifique)',
      'Antiépileptiques (phénytoïne, carbamazépine) : effet réduit possible',
      'Sulfamides : effet réduit'
    ],
    medicCritique: ['mtx'],
    avant: 'Toujours associer avec B12 (sinon masque un déficit B12). Forme méthylfolate préférable à acide folique synthétique.',
    sources: 'Botez et al., HAS recommandations grossesse'
  },

  {
    id: 'b12',
    emoji: '🥚',
    couleur: '#c4a882',
    nom: 'Vitamine B12',
    benefice: 'Carence fréquente chez les végétariens, vegans et seniors. Lien avec syndromes neuropathiques et SJSR.',
    preuve: 'B',
    posologie: '500 à 1 000 µg/j (forme méthylcobalamine, mieux assimilable). Cure d\'attaque possible jusqu\'à 5 000 µg/j sous contrôle.',
    science: 'Le déficit en B12 peut mimer ou aggraver le SJSR via les paresthésies. Supplémentation indispensable en cas de régime végétarien strict.',
    contreindications: [
      'Maladie de Leber héréditaire (rare)',
      'Allergie à la cobalamine (rarissime)'
    ],
    interactions: [
      'Inhibiteurs de pompe à protons (Inexium, Mopral, Eupantol) : absorption diminuée à long terme',
      'Metformine : peut réduire l\'absorption',
      'Anti-H2 (Azantac) : absorption diminuée'
    ],
    medicCritique: ['ipp'],
    avant: 'Dosage sanguin (B12 sérique + holotranscobalamine si possible) avant supplémentation prolongée pour éviter de masquer une cause sous-jacente.',
    sources: 'Sechi et al., recommandations BSH'
  },

  // ============= TIER C — PREUVES PRÉLIMINAIRES =============
  {
    id: 'curcuma',
    emoji: '🌶️',
    couleur: '#d4a843',
    nom: 'Curcumine',
    benefice: 'Anti-inflammatoire naturel à action systémique. Soutien aux douleurs articulaires.',
    preuve: 'C',
    posologie: '500 à 1 500 mg/j de curcumine (extrait standardisé à 95%). Toujours associer pipérine ou liposome pour absorption.',
    science: 'Bonnes preuves sur arthrose et inflammation chronique. Pas d\'étude spécifique SJSR mais cohérent avec un terrain inflammatoire.',
    contreindications: [
      'Calculs biliaires ou obstruction des voies biliaires',
      'Avant chirurgie : arrêter 2 semaines avant',
      'Grossesse (à fortes doses)'
    ],
    interactions: [
      'Anticoagulants (Préviscan, Sintrom, Eliquis, Xarelto) : risque hémorragique',
      'Antiagrégants : risque hémorragique',
      'Antidiabétiques : potentialise effet hypoglycémiant',
      'Tacrolimus : concentrations sanguines augmentées'
    ],
    medicCritique: ['anticoag', 'antiag'],
    avant: 'Cas d\'hépatites auto-immunes liées à des compléments mal standardisés rapportés. Choisir un extrait certifié et arrêter en cas de jaunisse ou douleur abdominale.',
    sources: 'Méta-analyses arthrose, Hewlings & Kalman 2017'
  },

  {
    id: 'melatonine',
    emoji: '🌙',
    couleur: '#7a4e8a',
    nom: 'Mélatonine',
    benefice: 'Aide à l\'endormissement. Régule le rythme circadien.',
    preuve: 'B',
    posologie: '0,5 à 2 mg, 30 à 60 min avant le coucher. Plus n\'est pas mieux : commencer à 0,5 mg.',
    science: 'Bonne preuve sur insomnie d\'endormissement. Sur le SJSR, résultats contradictoires : peut paradoxalement aggraver les symptômes chez certaines personnes.',
    contreindications: [
      'Maladies auto-immunes (peut moduler le système immunitaire)',
      'Épilepsie (prudence)',
      'Grossesse et allaitement',
      'Enfants sans avis médical',
      'Conduite automobile dans les heures suivant la prise'
    ],
    interactions: [
      'Anticoagulants (Préviscan, Sintrom) : risque hémorragique modéré',
      'Antidiabétiques : peut perturber la glycémie',
      'Antihypertenseurs : effet additif',
      'Immunosuppresseurs : antagonisme',
      'Antiépileptiques : seuil épileptogène modifié',
      'Contraceptifs oraux : taux augmentés',
      'Fluvoxamine (antidépresseur) : taux augmentés (jusqu\'à x17)'
    ],
    medicCritique: ['anticoag', 'antiepil', 'immunosup', 'fluvoxamine'],
    avant: 'Si SJSR aggravé après prise (paradoxe documenté), arrêter. Privilégier hygiène du sommeil et lumière forte le matin avant supplémentation.',
    sources: 'Cochrane Reviews, Whittom et al. 2010'
  },

  {
    id: 'l-theanine',
    emoji: '🍵',
    couleur: '#6aaa8a',
    nom: 'L-théanine',
    benefice: 'Détente sans somnolence, soutien à la concentration (utile en TDAH). Améliore la qualité du sommeil.',
    preuve: 'C',
    posologie: '100 à 400 mg/j. Le matin pour la concentration ou le soir pour la détente.',
    science: 'Études chez des sujets stressés : amélioration modérée du sommeil, réduction de l\'anxiété. Pas d\'étude SJSR spécifique.',
    contreindications: [
      'Hypotension artérielle (effet additif)',
      'Grossesse (données insuffisantes)'
    ],
    interactions: [
      'Antihypertenseurs : effet additif possible',
      'Anxiolytiques : sédation potentialisée'
    ],
    medicCritique: [],
    avant: 'Bien tolérée à des doses raisonnables. Préférer extrait pur (Suntheanine®) aux poudres de thé vert (qui contiennent caféine).',
    sources: 'Williams et al. 2020'
  },

  {
    id: 'tyrosine',
    emoji: '🧠',
    couleur: '#a0735c',
    nom: 'L-tyrosine',
    benefice: 'Précurseur de la dopamine. Soutien possible au profil double SJSR + TDAH (les deux impliquent une signalisation dopaminergique).',
    preuve: 'C',
    posologie: '500 à 1 500 mg/j, le matin à jeun. Toujours commencer bas.',
    science: 'Étude pilote SJSR : résultats préliminaires intéressants. Études TDAH : effets variables. Logique biochimique cohérente.',
    contreindications: [
      'Hyperthyroïdie ou maladie de Graves (la tyrosine est précurseur des hormones thyroïdiennes)',
      'Phéochromocytome',
      'Mélanome (théorique, à discuter avec oncologue)',
      'Migraine sévère'
    ],
    interactions: [
      'Levothyrox : peut perturber le bilan thyroïdien',
      'IMAO (antidépresseurs) : risque de crise hypertensive — INTERACTION GRAVE',
      'L-DOPA / Sifrol / Requip : antagonisme possible',
      'Stimulants (Ritaline, Concerta) : effet additif'
    ],
    medicCritique: ['imao', 'levothyrox', 'dopa', 'stimulants'],
    avant: 'Si traitement SJSR par agonistes dopaminergiques (Sifrol, Requip), demander avis avant. Si IMAO, contre-indication absolue.',
    sources: 'Banderet & Lieberman 1989, études pilotes SJSR'
  },

  {
    id: 'glycine',
    emoji: '💤',
    couleur: '#7a4e8a',
    nom: 'Glycine',
    benefice: 'Acide aminé apaisant. Améliore la qualité du sommeil profond. Bien tolérée.',
    preuve: 'C',
    posologie: '3 g, 30 à 60 min avant le coucher.',
    science: 'Études japonaises : amélioration du sommeil subjectif et de la fatigue diurne. Mécanisme : action sur les récepteurs NMDA et baisse légère de la température corporelle.',
    contreindications: [
      'Allergie connue (très rare)',
      'Insuffisance hépatique sévère'
    ],
    interactions: [
      'Clozapine : niveaux plasmatiques modifiés',
      'Pas d\'autre interaction majeure connue'
    ],
    medicCritique: [],
    avant: 'L\'un des compléments les mieux tolérés pour le sommeil. Effet modéré mais cumulatif.',
    sources: 'Bannai & Kawai 2012, études Yajima'
  },

  // ============= COMPLÉMENTS À RISQUE — bandeau d'avertissement =============
  {
    id: 'millepertuis',
    emoji: '🌼',
    couleur: '#c0614a',
    nom: 'Millepertuis',
    benefice: 'Antidépresseur naturel léger. À distance — non recommandé avec un traitement SJSR classique.',
    preuve: 'A',
    posologie: '300 à 900 mg/j d\'extrait standardisé (hypericine ou hyperforine). Toujours sous avis médical.',
    science: 'Efficacité comparable aux ISRS pour dépression légère à modérée. Mais multiples interactions médicamenteuses majeures qui le rendent dangereux en automédication.',
    contreindications: [
      'Tout traitement antidépresseur (ISRS, IRSN, IMAO, tricycliques)',
      'Tramadol : risque de syndrome sérotoninergique GRAVE',
      'Lithium',
      'Photosensibilité, exposition solaire intense',
      'Grossesse, allaitement'
    ],
    interactions: [
      '⚠️ TRAMADOL : syndrome sérotoninergique potentiellement mortel — CONTRE-INDIQUÉ',
      '⚠️ Antidépresseurs ISRS/IRSN : syndrome sérotoninergique — CONTRE-INDIQUÉ',
      'Anticoagulants (Préviscan, Sintrom, AVK) : effet réduit, risque thrombotique',
      'Contraceptifs oraux : efficacité réduite — risque de grossesse',
      'Tacrolimus, ciclosporine : niveaux fortement réduits — risque de rejet',
      'Digoxine : niveaux réduits',
      'Statines : effet variable',
      'Triptans (anti-migraine) : syndrome sérotoninergique'
    ],
    medicCritique: ['tramadol', 'isrs', 'irsn', 'imao', 'anticoag', 'contraceptifs'],
    avant: '⚠️ COMPLÉMENT À RISQUE ÉLEVÉ D\'INTERACTION. Plus de 50 médicaments concernés. Contre-indiqué avec Tramadol (risque de syndrome sérotoninergique pouvant être grave). Ne JAMAIS prendre sans avis médical formel.',
    sources: 'ANSM alertes, Linde et al. Cochrane 2008'
  },

  {
    id: '5-htp',
    emoji: '🟣',
    couleur: '#c0614a',
    nom: '5-HTP',
    benefice: 'Précurseur de la sérotonine. Parfois utilisé pour l\'humeur ou le sommeil.',
    preuve: 'C',
    posologie: '50 à 300 mg/j en doses fractionnées. JAMAIS sans avis médical en cas de traitement.',
    science: 'Études limitées. Risque d\'interactions avec tout médicament sérotoninergique.',
    contreindications: [
      'Tout traitement antidépresseur',
      'Tramadol',
      'Triptans',
      'Maladie cardiovasculaire',
      'Sclérodermie',
      'Grossesse, allaitement'
    ],
    interactions: [
      '⚠️ TRAMADOL : syndrome sérotoninergique — CONTRE-INDIQUÉ',
      '⚠️ Antidépresseurs sérotoninergiques (ISRS, IRSN, IMAO) : CONTRE-INDIQUÉ',
      'L-DOPA / Sifrol / Requip : effets imprévisibles',
      'Triptans : syndrome sérotoninergique'
    ],
    medicCritique: ['tramadol', 'isrs', 'irsn', 'imao', 'dopa'],
    avant: '⚠️ Contre-indiqué avec tout médicament sérotoninergique. Risque de syndrome sérotoninergique grave. À ne pas prendre sans avis médical formel.',
    sources: 'Hinz et al. 2012, alertes pharmacovigilance'
  },

  // ============= INFOS GÉNÉRALES =============
  {
    id: 'valeriane',
    emoji: '🌾',
    couleur: '#6aaa8a',
    nom: 'Valériane',
    benefice: 'Plante traditionnelle pour faciliter l\'endormissement. Bénéfices modestes mais bien tolérée.',
    preuve: 'C',
    posologie: '300 à 600 mg d\'extrait sec, 30 à 60 min avant le coucher.',
    science: 'Méta-analyses mitigées. Effet modéré sur la qualité subjective du sommeil. Bien tolérée à court terme.',
    contreindications: [
      'Conduite automobile dans les 4-6h suivant la prise',
      'Insuffisance hépatique',
      'Grossesse, allaitement',
      'Enfants < 12 ans'
    ],
    interactions: [
      'Anxiolytiques (benzodiazépines) : sédation potentialisée',
      'Alcool : sédation potentialisée',
      'Antidépresseurs : effet additif possible',
      'Anesthésiques : arrêter 1 semaine avant chirurgie'
    ],
    medicCritique: ['benzo'],
    avant: 'Ne pas combiner avec autres sédatifs sans avis médical. Cas rares d\'hépatotoxicité rapportés à long terme.',
    sources: 'Cochrane 2010'
  },

  {
    id: 'zinc',
    emoji: '🦋',
    couleur: '#c4a882',
    nom: 'Zinc',
    benefice: 'Cofacteur de nombreuses enzymes. Soutient l\'immunité, la peau, la cicatrisation.',
    preuve: 'C',
    posologie: '10 à 25 mg/j (forme bisglycinate ou citrate). Au cours d\'un repas pour limiter les nausées.',
    science: 'Pas de preuve directe SJSR, mais carence fréquente et lien avec inflammation chronique. Synergie avec sélénium.',
    contreindications: [
      'Maladie de Wilson',
      'Anémie sidéroblastique'
    ],
    interactions: [
      'Antibiotiques tétracyclines, quinolones : espacer de 2h',
      'Fer : antagonisme à hautes doses',
      'Cuivre : antagonisme à long terme — supplémenter en cuivre si zinc > 50 mg/j prolongé',
      'Pénicillamine'
    ],
    medicCritique: ['tetracyclines'],
    avant: 'À fortes doses (>40 mg/j sur > 3 mois), peut induire un déficit en cuivre. Le sucer pour effet immunitaire (rhume) est différent de la prise quotidienne.',
    sources: 'EFSA, ANSES recommandations'
  },

  {
    id: 'safran',
    emoji: '🌸',
    couleur: '#d4a843',
    nom: 'Safran (Crocus sativus)',
    benefice: 'Modulateur naturel de l\'humeur. Études prometteuses sur dépression légère à modérée.',
    preuve: 'B',
    posologie: '15 à 30 mg/j d\'extrait standardisé.',
    science: 'Plusieurs études contrôlées montrent une efficacité comparable aux ISRS pour dépression légère à modérée. Moins d\'interactions que le millepertuis.',
    contreindications: [
      'Grossesse (à doses thérapeutiques)',
      'Trouble bipolaire (prudence)'
    ],
    interactions: [
      'Antidépresseurs : effet additif possible (moins risqué que millepertuis mais à surveiller)',
      'Anticoagulants : risque modéré'
    ],
    medicCritique: [],
    avant: 'Une des alternatives plus sûres que le millepertuis pour le terrain humeur. À tester sur 6-8 semaines minimum.',
    sources: 'Lopresti & Drummond 2014'
  },

  {
    id: 'ashwagandha',
    emoji: '🌿',
    couleur: '#8b6f5e',
    nom: 'Ashwagandha',
    benefice: 'Adaptogène. Soutien au stress chronique, à la fatigue et à la qualité du sommeil.',
    preuve: 'B',
    posologie: '300 à 600 mg/j d\'extrait standardisé (KSM-66 ou Sensoril). Le matin ou en deux prises.',
    science: 'Études cliniques : amélioration du stress perçu, du sommeil et de l\'énergie. Bonne tolérance.',
    contreindications: [
      'Maladies auto-immunes (peut stimuler le système immunitaire)',
      'Hyperthyroïdie',
      'Grossesse, allaitement',
      'Avant chirurgie : arrêter 2 semaines avant',
      'Allergie à la famille des Solanacées'
    ],
    interactions: [
      'Levothyrox : peut augmenter les hormones thyroïdiennes',
      'Sédatifs et benzodiazépines : sédation potentialisée',
      'Immunosuppresseurs : antagonisme'
    ],
    medicCritique: ['levothyrox', 'immunosup'],
    avant: 'Si Hashimoto ou hypothyroïdie traitée, surveiller le bilan thyroïdien.',
    sources: 'Salve et al. 2019, méta-analyses 2021'
  },

  {
    id: 'b6',
    emoji: '🌽',
    couleur: '#d4a843',
    nom: 'Vitamine B6',
    benefice: 'Cofacteur de la synthèse de dopamine et de sérotonine. Synergie avec magnésium.',
    preuve: 'C',
    posologie: '25 à 100 mg/j (forme P-5-P, pyridoxal phosphate, mieux assimilable). Avec un repas.',
    science: 'Pas d\'étude SJSR isolée. Souvent associée au magnésium pour effet sur SPM et nervosité.',
    contreindications: [
      'Aucune à dose physiologique',
      'Au-delà de 200 mg/j prolongés : risque de neuropathie sensitive'
    ],
    interactions: [
      'Levodopa (sans inhibiteur de décarboxylase) : effet réduit',
      'Antiépileptiques : peut diminuer leur efficacité à fortes doses',
      'Amiodarone : photosensibilité majorée'
    ],
    medicCritique: ['dopa'],
    avant: 'Ne pas dépasser 100 mg/j en automédication prolongée (risque neuropathique).',
    sources: 'EFSA, recommandations ANSES'
  }
];
