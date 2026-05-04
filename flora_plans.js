// ============================
// FLŌRA — Plans mensuels
// PLAN_MENSUEL_AVRIL (30 jours) et PLAN_MENSUEL_MAI (31 jours)
// Chaque jour : { j: numéro, pdc: id_petit_dej, dej: id_dejeuner, din: id_diner, snack: id_snack, theme: '...' }
// ============================
// IMPORTANT : ce fichier doit être chargé AVANT app.js dans index.html
// (et après flora_recettes.js, dont il référence les IDs)

// Plan mensuel Avril 2026
const PLAN_MENSUEL_AVRIL = [
  // Semaine 1 — Focus Fer & SJSR
  { j:1,  pdc:1,  dej:51, din:75, snack:129, theme:'🩸 Boost Fer' },
  { j:2,  pdc:2,  dej:52, din:76, snack:80,  theme:'🌿 Anti-inflam' },
  { j:3,  pdc:3,  dej:53, din:77, snack:81,  theme:'🧠 Focus TDAH' },
  { j:4,  pdc:4,  dej:54, din:78, snack:82,  theme:'🦵 Jambes légères' },
  { j:5,  pdc:5,  dej:55, din:79, snack:83,  theme:'⚡ Énergie' },
  { j:6,  pdc:6,  dej:56, din:112,snack:84,  theme:'🥂 Week-end' },
  { j:7,  pdc:7,  dej:57, din:113,snack:85,  theme:'🛌 Sommeil' },
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

