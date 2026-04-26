/**
 * FLŌRA — PATCH DE CORRECTIONS app.js
 * ====================================
 * Coller ce bloc AU DÉBUT de ton app.js existant,
 * juste après les déclarations de constantes.
 *
 * Corrections incluses :
 *   BUG 3  — clearPlacardFilter() propre (remplace window._placardFilter)
 *   BUG 5  — Plan mensuel dynamique (titre auto)
 *   BUG 6  — exportJournalPDF() avec fallback print
 *   BUG 7  — updateNextDayBtn() désactive → si on est aujourd'hui
 *   BUG 8  — initSleepCycles() synchronise cycles visuels avec durée calculée
 *   BUG 9  — tryLoginOnEnter() (Entrée pour valider login)
 *   BUG E  — safeGet() / safeSet() pour localStorage robuste
 */

// ─────────────────────────────────────────────────────────────────
// ✅ FIX BUG E — localStorage sécurisé (navigation privée / quota)
// ─────────────────────────────────────────────────────────────────
function safeGet(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.warn('[Flōra] localStorage.getItem() échoué pour', key, e);
    return fallback;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.warn('[Flōra] localStorage.setItem() échoué pour', key, e);
    return false;
  }
}

function safeRemove(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────
// ✅ FIX BUG 9 — tryLoginOnEnter (Entrée pour valider le login)
// ─────────────────────────────────────────────────────────────────
function tryLoginOnEnter(e) {
  if (e && e.key === 'Enter') {
    doLogin();
  }
}

// ─────────────────────────────────────────────────────────────────
// ✅ FIX BUG 3 — clearPlacardFilter() propre
// Remplace: onclick="window._placardFilter=null;renderRecettes();"
// ─────────────────────────────────────────────────────────────────
let _placardFilter = null; // variable module, pas window

function clearPlacardFilter() {
  _placardFilter = null;
  const badge = document.getElementById('placard-filter-badge');
  if (badge) badge.style.display = 'none';
  if (typeof renderRecettes === 'function') renderRecettes();
}

function filterRecettesByPlacard() {
  // Récupérer les ingrédients cochés dans le placard
  const checked = Array.from(document.querySelectorAll('#placard-categories input[type=checkbox]:checked'))
    .map(cb => cb.value || cb.closest('label')?.textContent?.trim() || '');

  if (checked.length === 0) {
    alert('Cochez d\'abord des ingrédients dans votre placard.');
    return;
  }

  _placardFilter = checked;

  const badge = document.getElementById('placard-filter-badge');
  if (badge) badge.style.display = 'block';

  showPage('recettes');

  if (typeof renderRecettes === 'function') renderRecettes();
}

// ─────────────────────────────────────────────────────────────────
// ✅ FIX BUG 5 — Titre plan mensuel dynamique
// Appeler renderPlanMensuelTitre() dans switchGenTab('mensuel')
// ─────────────────────────────────────────────────────────────────
function renderPlanMensuelTitre() {
  const now = new Date();
  const mois = now.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  const titre = document.getElementById('plan-mensuel-titre');
  if (titre) {
    titre.textContent = `📆 Plan mensuel — ${mois.charAt(0).toUpperCase() + mois.slice(1)}`;
  }
}

// ─────────────────────────────────────────────────────────────────
// ✅ FIX BUG 6 — exportJournalPDF() avec fallback
// ─────────────────────────────────────────────────────────────────
function exportJournalPDF() {
  const entries = safeGet('flora_journal', {});
  const keys = Object.keys(entries).sort().reverse();

  if (keys.length === 0) {
    alert('Aucune entrée de journal à exporter.');
    return;
  }

  // Construire une page HTML d'impression
  let html = `<!DOCTYPE html><html lang="fr"><head>
    <meta charset="UTF-8">
    <title>Journal Flōra</title>
    <style>
      body { font-family: Georgia, serif; padding: 24px; color: #2d2d2d; max-width: 700px; margin: 0 auto; }
      h1 { color: #2d4a3e; font-size: 1.6rem; margin-bottom: 4px; }
      .subtitle { color: #888; font-size: 0.85rem; margin-bottom: 24px; }
      .entry { border-bottom: 1px solid #e0e0e0; padding: 16px 0; }
      .entry-date { font-weight: bold; color: #2d4a3e; margin-bottom: 6px; }
      .entry-row { display: flex; gap: 16px; flex-wrap: wrap; font-size: 0.88rem; margin: 4px 0; }
      .label { color: #888; min-width: 80px; }
      .val { color: #2d2d2d; }
      .notes { margin-top: 8px; font-style: italic; color: #555; font-size: 0.85rem; }
      @media print { body { padding: 0; } }
    </style>
  </head><body>`;

  html += `<h1>🌿 Journal Flōra</h1>`;
  html += `<div class="subtitle">Exporté le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} · ${keys.length} entrée(s)</div>`;

  for (const dateKey of keys) {
    const e = entries[dateKey];
    if (!e) continue;

    const dateLabel = new Date(dateKey).toLocaleDateString('fr-FR', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    html += `<div class="entry">`;
    html += `<div class="entry-date">${dateLabel}</div>`;

    if (e.sleepDuration) html += `<div class="entry-row"><span class="label">🌙 Sommeil</span><span class="val">${e.sleepDuration}</span></div>`;
    if (e.cycles) html += `<div class="entry-row"><span class="label">🔄 Cycles</span><span class="val">${e.cycles} cycle(s)</span></div>`;
    if (e.sjsr !== undefined && e.sjsr !== null) html += `<div class="entry-row"><span class="label">🦵 SJSR</span><span class="val">${e.sjsr}/5</span></div>`;
    if (e.qualite) html += `<div class="entry-row"><span class="label">⭐ Qualité</span><span class="val">${e.qualite}/5</span></div>`;
    if (e.energie) html += `<div class="entry-row"><span class="label">💪 Énergie</span><span class="val">${e.energie}/10</span></div>`;
    if (e.douleur !== undefined) html += `<div class="entry-row"><span class="label">😣 Douleur</span><span class="val">${e.douleur}/10</span></div>`;
    if (e.symptomes && e.symptomes.length > 0) html += `<div class="entry-row"><span class="label">🌡️ Symptômes</span><span class="val">${e.symptomes.join(', ')}</span></div>`;
    if (e.notes) html += `<div class="notes">📝 ${e.notes}</div>`;

    html += `</div>`;
  }

  html += `</body></html>`;

  // Ouvrir dans une nouvelle fenêtre pour impression / "Enregistrer en PDF"
  const win = window.open('', '_blank', 'width=780,height=900');
  if (win) {
    win.document.write(html);
    win.document.close();
    setTimeout(() => win.print(), 400);
  } else {
    alert('Veuillez autoriser les popups pour exporter le PDF.');
  }
}

// ─────────────────────────────────────────────────────────────────
// ✅ FIX BUG 7 — Désactiver le bouton → quand on est aujourd'hui
// Appeler cette fonction dans changeJournalDay() et initJournal()
// ─────────────────────────────────────────────────────────────────
function updateNextDayBtn() {
  const btn = document.getElementById('journal-next-btn');
  if (!btn) return;

  // currentJournalDate doit être une variable définie dans app.js
  // Adapter le nom si différent
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const current = new Date(window.currentJournalDate || today);
  current.setHours(0, 0, 0, 0);

  const isToday = current.getTime() >= today.getTime();
  btn.disabled = isToday;
  btn.style.opacity = isToday ? '0.3' : '1';
  btn.style.cursor = isToday ? 'not-allowed' : 'pointer';
}

// ─────────────────────────────────────────────────────────────────
// ✅ FIX BUG 8 — Synchroniser cycles visuels avec durée au chargement
// Appeler initSleepCycles() dans DOMContentLoaded / initJournal()
// ─────────────────────────────────────────────────────────────────
function initSleepCycles() {
  // Calculer les cycles à partir des heures coucher/lever par défaut
  const coucher = document.getElementById('sl-coucher')?.value || '23:00';
  const lever = document.getElementById('sl-lever')?.value || '07:00';

  const [h1, m1] = coucher.split(':').map(Number);
  const [h2, m2] = lever.split(':').map(Number);

  let totalMin = (h2 * 60 + m2) - (h1 * 60 + m1);
  if (totalMin < 0) totalMin += 24 * 60; // passage minuit

  const cycles = Math.min(6, Math.max(1, Math.floor(totalMin / 90)));

  // Mettre à jour l'affichage des cycles
  if (typeof setCycles === 'function') {
    // Simuler le clic sur le bon bouton
    const btn = document.querySelector(`#sleep-cycles-btns .cycle-btn:nth-child(${cycles})`);
    if (btn) setCycles(cycles, btn);
  }
}

// ─────────────────────────────────────────────────────────────────
// ✅ PATCH DOMContentLoaded — hooker les corrections après le chargement
// ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Titre plan mensuel dynamique
  renderPlanMensuelTitre();

  // Synchroniser les cycles de sommeil avec les heures par défaut
  // (avec délai pour laisser app.js s'initialiser)
  setTimeout(() => {
    initSleepCycles();
    updateNextDayBtn();
  }, 200);
});

// ─────────────────────────────────────────────────────────────────
// ✅ PATCH switchGenTab — intercepter l'onglet mensuel pour le titre
// ─────────────────────────────────────────────────────────────────
// Si switchGenTab est déjà défini dans app.js, ajouter ceci dedans :
//
//   case 'mensuel':
//     renderPlanMensuelTitre();
//     break;
//
// OU wrapper la fonction existante :
const _originalSwitchGenTab = typeof switchGenTab === 'function' ? switchGenTab : null;
if (_originalSwitchGenTab) {
  window.switchGenTab = function(tab, el) {
    _originalSwitchGenTab(tab, el);
    if (tab === 'mensuel') renderPlanMensuelTitre();
  };
}
