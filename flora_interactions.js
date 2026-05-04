// ============================
// MEDICAMENTS UTILISATEUR — Catalogue des familles à risque
// ============================
// Identifiants utilisés dans le champ medicCritique des compléments

const MEDICAMENTS_FAMILLES = [
  {
    id: 'tramadol',
    label: 'Tramadol',
    nomsCommerciaux: 'Topalgic, Contramal, Zaldiar, Ixprim',
    description: 'Antalgique opioïde — souvent prescrit pour SJSR et douleurs chroniques'
  },
  {
    id: 'isrs',
    label: 'Antidépresseurs ISRS',
    nomsCommerciaux: 'Deroxat, Seroplex, Zoloft, Prozac, Cipralex, Cipramil',
    description: 'Inhibiteurs sélectifs de la recapture de la sérotonine'
  },
  {
    id: 'irsn',
    label: 'Antidépresseurs IRSN',
    nomsCommerciaux: 'Cymbalta, Effexor, Ixel',
    description: 'Inhibiteurs de la recapture sérotonine et noradrénaline'
  },
  {
    id: 'imao',
    label: 'Antidépresseurs IMAO',
    nomsCommerciaux: 'Marsilid, Moclamine',
    description: 'Inhibiteurs de la monoamine oxydase'
  },
  {
    id: 'fluvoxamine',
    label: 'Fluvoxamine (Floxyfral)',
    nomsCommerciaux: 'Floxyfral',
    description: 'Antidépresseur — interactions très spécifiques'
  },
  {
    id: 'dopa',
    label: 'Agonistes dopaminergiques',
    nomsCommerciaux: 'Sifrol (pramipexole), Requip (ropinirole), Neupro, Modopar, Sinemet',
    description: 'Traitement de référence du SJSR modéré à sévère'
  },
  {
    id: 'anticoag',
    label: 'Anticoagulants',
    nomsCommerciaux: 'Préviscan, Sintrom, Coumadine, Eliquis, Xarelto, Pradaxa, Lixiana',
    description: 'AVK ou anticoagulants oraux directs'
  },
  {
    id: 'antiag',
    label: 'Antiagrégants plaquettaires',
    nomsCommerciaux: 'Aspirine (Kardégic), Plavix, Clopidogrel, Brilique',
    description: 'Anti-formation de caillots'
  },
  {
    id: 'levothyrox',
    label: 'Hormones thyroïdiennes',
    nomsCommerciaux: 'Levothyrox, L-Thyroxine, Euthyrox, Cynomel',
    description: 'Substitution thyroïdienne'
  },
  {
    id: 'tetracyclines',
    label: 'Antibiotiques tétracyclines / quinolones',
    nomsCommerciaux: 'Doxycycline, Tolexine, Ciflox, Oflocet, Tavanic',
    description: 'Antibiotiques sensibles aux ions métalliques'
  },
  {
    id: 'ipp',
    label: 'Inhibiteurs de pompe à protons (IPP)',
    nomsCommerciaux: 'Inexium, Mopral, Eupantol, Lanzor, Pariet',
    description: 'Anti-acides gastriques au long cours'
  },
  {
    id: 'benzo',
    label: 'Benzodiazépines',
    nomsCommerciaux: 'Lexomil, Xanax, Lysanxia, Temesta, Valium, Stilnox, Imovane',
    description: 'Anxiolytiques et somnifères'
  },
  {
    id: 'antiepil',
    label: 'Antiépileptiques (incl. Lyrica)',
    nomsCommerciaux: 'Lyrica (prégabaline), Neurontin (gabapentine), Depakine, Tegretol, Keppra',
    description: 'Antiépileptiques aussi prescrits dans douleurs neuropathiques et SJSR'
  },
  {
    id: 'mtx',
    label: 'Méthotrexate',
    nomsCommerciaux: 'Novatrex, Imeth, Metoject',
    description: 'Immunosuppresseur (rhumato, derma)'
  },
  {
    id: 'immunosup',
    label: 'Autres immunosuppresseurs',
    nomsCommerciaux: 'Tacrolimus, Ciclosporine, Mycophénolate, Imurel',
    description: 'Greffes et maladies auto-immunes'
  },
  {
    id: 'contraceptifs',
    label: 'Contraceptifs oraux',
    nomsCommerciaux: 'Pilule combinée ou progestative',
    description: 'Œstroprogestatifs ou progestatifs seuls'
  },
  {
    id: 'stimulants',
    label: 'Stimulants TDAH',
    nomsCommerciaux: 'Ritaline, Concerta, Quasym, Medikinet',
    description: 'Méthylphénidate et dérivés'
  },
  {
    id: 'autre',
    label: 'Autre traitement en cours',
    nomsCommerciaux: '',
    description: 'À renseigner pour avis pharmacien'
  }
];

// ============================
// FONCTIONS — Stockage médicaments utilisateur
// ============================

function getUserMedications() {
  try {
    const saved = localStorage.getItem('flora_medications');
    return saved ? JSON.parse(saved) : null;
  } catch(e) {
    return null;
  }
}

function setUserMedications(medsArray) {
  try {
    localStorage.setItem('flora_medications', JSON.stringify({
      meds: medsArray,
      updatedAt: new Date().toISOString()
    }));
    return true;
  } catch(e) {
    console.error('Erreur sauvegarde médicaments :', e);
    return false;
  }
}

function hasUserBeenAskedAboutMeds() {
  return localStorage.getItem('flora_medications') !== null;
}

// ============================
// FONCTION — Calcul du risque d'interaction
// ============================

function calculateInteractionRisk(complement, userMeds) {
  if (!userMeds || !userMeds.meds || userMeds.meds.length === 0) {
    return { level: 'unknown', meds: [] };
  }
  
  const userMedIds = userMeds.meds;
  const interactingMeds = (complement.medicCritique || []).filter(
    medId => userMedIds.includes(medId)
  );
  
  if (interactingMeds.length === 0) {
    return { level: 'safe', meds: [] };
  }
  
  // Niveau "danger" pour interactions graves documentées
  const dangerCombos = [
    { comp: 'millepertuis', meds: ['tramadol', 'isrs', 'irsn', 'imao'] },
    { comp: '5-htp', meds: ['tramadol', 'isrs', 'irsn', 'imao'] },
    { comp: 'tyrosine', meds: ['imao'] }
  ];
  
  const isDanger = dangerCombos.some(combo => 
    combo.comp === complement.id && 
    combo.meds.some(m => userMedIds.includes(m))
  );
  
  return {
    level: isDanger ? 'danger' : 'caution',
    meds: interactingMeds.map(id => MEDICAMENTS_FAMILLES.find(f => f.id === id)).filter(Boolean)
  };
}

// ============================
// MODAL — Saisie des médicaments (premier clic sur fiche)
// ============================

function openMedicationsModal(callbackOnSave) {
  // Ferme un modal existant s'il y en a un
  document.getElementById('flora-meds-modal')?.remove();
  
  const existingMeds = getUserMedications();
  const checkedIds = existingMeds ? existingMeds.meds : [];
  
  const modal = document.createElement('div');
  modal.id = 'flora-meds-modal';
  modal.className = 'flora-modal-overlay';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'meds-modal-title');
  
  const checkboxesHTML = MEDICAMENTS_FAMILLES.map(fam => `
    <label class="meds-checkbox-row" for="med-${fam.id}">
      <input type="checkbox" id="med-${fam.id}" value="${fam.id}" 
             ${checkedIds.includes(fam.id) ? 'checked' : ''}>
      <span class="meds-checkbox-content">
        <span class="meds-checkbox-label">${fam.label}</span>
        ${fam.nomsCommerciaux ? `<span class="meds-checkbox-sub">${fam.nomsCommerciaux}</span>` : ''}
      </span>
    </label>
  `).join('');
  
  modal.innerHTML = `
    <div class="flora-modal-content meds-modal">
      <div class="flora-modal-header">
        <div>
          <div class="flora-modal-overline">Avant d'afficher la fiche</div>
          <h2 id="meds-modal-title" class="flora-modal-title">Prenez-vous un médicament ?</h2>
        </div>
        <button class="flora-modal-close" aria-label="Fermer" onclick="closeMedicationsModal()">✕</button>
      </div>
      
      <div class="flora-modal-body">
        <p class="meds-intro">
          Pour vous afficher les éventuelles interactions, cochez les traitements que vous prenez actuellement. 
          <strong>Cette information reste sur votre appareil et n'est jamais transmise.</strong>
        </p>
        
        <div class="meds-list">
          <label class="meds-checkbox-row meds-checkbox-none" for="med-none">
            <input type="checkbox" id="med-none" value="none" 
                   ${checkedIds.includes('none') ? 'checked' : ''}>
            <span class="meds-checkbox-content">
              <span class="meds-checkbox-label">Aucun traitement actuellement</span>
              <span class="meds-checkbox-sub">Cochez si vous ne prenez aucun médicament régulier</span>
            </span>
          </label>
          
          <div class="meds-divider">— ou cochez ci-dessous —</div>
          
          ${checkboxesHTML}
        </div>
        
        <p class="meds-disclaimer">
          ⚠️ Cette fonction est une aide informationnelle. Elle <strong>ne remplace pas</strong> 
          l'avis de votre médecin ou pharmacien. En cas de doute, demandez conseil avant toute prise.
        </p>
      </div>
      
      <div class="flora-modal-footer">
        <button class="flora-btn-secondary" onclick="closeMedicationsModal()">Annuler</button>
        <button class="flora-btn-primary" onclick="saveMedicationsAndContinue()">Enregistrer</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  // Logique d'exclusion : "aucun" exclut tous les autres
  const noneCheckbox = document.getElementById('med-none');
  const otherCheckboxes = modal.querySelectorAll('input[type="checkbox"]:not(#med-none)');
  
  noneCheckbox.addEventListener('change', () => {
    if (noneCheckbox.checked) {
      otherCheckboxes.forEach(cb => cb.checked = false);
    }
  });
  
  otherCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) noneCheckbox.checked = false;
    });
  });
  
  // Stocke le callback pour reprise après save
  window._floraMedsSaveCallback = callbackOnSave;
}

function closeMedicationsModal() {
  const modal = document.getElementById('flora-meds-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
  window._floraMedsSaveCallback = null;
}

function saveMedicationsAndContinue() {
  const modal = document.getElementById('flora-meds-modal');
  if (!modal) return;
  
  const checked = Array.from(modal.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.value);
  
  // Si aucune case n'est cochée, demander confirmation
  if (checked.length === 0) {
    if (!confirm('Aucune réponse cochée. Voulez-vous continuer sans renseigner ?')) {
      return;
    }
  }
  
  setUserMedications(checked);
  
  const callback = window._floraMedsSaveCallback;
  closeMedicationsModal();
  
  if (typeof callback === 'function') {
    callback();
  }
}

// ============================
// MODAL — Avertissement avant ouverture fiche complément
// ============================

function openInteractionWarningModal(complement, risk, onProceed) {
  document.getElementById('flora-warning-modal')?.remove();
  
  const isDanger = risk.level === 'danger';
  const medsList = risk.meds.map(m => `<li><strong>${m.label}</strong> <span class="warn-meds-sub">(${m.nomsCommerciaux})</span></li>`).join('');
  
  const modal = document.createElement('div');
  modal.id = 'flora-warning-modal';
  modal.className = 'flora-modal-overlay';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  
  modal.innerHTML = `
    <div class="flora-modal-content warning-modal warning-${risk.level}">
      <div class="flora-modal-header warning-header">
        <div class="warning-icon-circle">${isDanger ? '⚠️' : '⚡'}</div>
        <div>
          <div class="flora-modal-overline ${isDanger ? 'overline-danger' : 'overline-caution'}">
            ${isDanger ? 'Interaction grave possible' : 'Vigilance recommandée'}
          </div>
          <h2 class="flora-modal-title">${complement.nom}</h2>
        </div>
      </div>
      
      <div class="flora-modal-body">
        <p class="warning-intro">
          ${isDanger 
            ? 'D\'après les médicaments que vous avez renseignés, ce complément présente un risque d\'interaction <strong>grave et documenté</strong>.' 
            : 'D\'après les médicaments que vous avez renseignés, ce complément peut interagir avec votre traitement.'}
        </p>
        
        <div class="warning-meds-block">
          <div class="warning-meds-label">Traitement(s) concerné(s) :</div>
          <ul class="warning-meds-list">${medsList}</ul>
        </div>
        
        ${isDanger ? `
          <div class="warning-danger-box">
            <div class="warning-danger-title">Risque principal</div>
            <p>Le ${complement.nom.toLowerCase()} associé à ${risk.meds.map(m=>m.label).join(', ')} 
               peut entraîner un <strong>syndrome sérotoninergique</strong>, une réaction grave 
               nécessitant une prise en charge urgente.</p>
            <p class="warning-strong">→ Demandez impérativement l'avis de votre médecin ou pharmacien avant toute prise.</p>
          </div>
        ` : `
          <div class="warning-caution-box">
            <p>${complement.avant}</p>
          </div>
        `}
        
        <p class="warning-disclaimer">
          Cette information est une aide. Seul un professionnel de santé peut évaluer votre cas.
        </p>
      </div>
      
      <div class="flora-modal-footer">
        <button class="flora-btn-secondary" onclick="closeInteractionWarning()">
          Retour
        </button>
        <button class="${isDanger ? 'flora-btn-danger' : 'flora-btn-primary'}" 
                onclick="proceedToComplement()">
          ${isDanger ? 'Voir la fiche (sous ma responsabilité)' : 'Voir la fiche'}
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  window._floraWarningCallback = onProceed;
}

function closeInteractionWarning() {
  const modal = document.getElementById('flora-warning-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
  window._floraWarningCallback = null;
}

function proceedToComplement() {
  const callback = window._floraWarningCallback;
  closeInteractionWarning();
  if (typeof callback === 'function') callback();
}

// ============================
// FONCTION D'ENTRÉE — Clic sur une fiche complément
// ============================
// REMPLACE ta fonction d'ouverture de fiche actuelle (probablement openCompFiche ou similaire)

function openComplementFiche(complementId) {
  const complement = COMPLEMENTS.find(c => c.id === complementId);
  if (!complement) {
    console.error('Complément introuvable :', complementId);
    return;
  }
  
  // Étape 1 : si on n'a jamais demandé les médicaments, on demande
  if (!hasUserBeenAskedAboutMeds()) {
    openMedicationsModal(() => openComplementFiche(complementId));
    return;
  }
  
  // Étape 2 : on calcule le risque
  const userMeds = getUserMedications();
  const risk = calculateInteractionRisk(complement, userMeds);
  
  // Étape 3 : si interaction, on affiche le modal d'avertissement
  if (risk.level === 'danger' || risk.level === 'caution') {
    openInteractionWarningModal(complement, risk, () => renderComplementFiche(complement));
    return;
  }
  
  // Étape 4 : sinon on ouvre directement la fiche
  renderComplementFiche(complement);
}

// ============================
// AFFICHAGE — Fiche détaillée complément
// ============================

function renderComplementFiche(c) {
  document.getElementById('flora-comp-fiche-modal')?.remove();
  
  const preuveLabel = { 'A': 'Preuves solides', 'B': 'Preuves modérées', 'C': 'Preuves préliminaires' };
  const preuveColor = { 'A': '#3d6b58', 'B': '#d4a843', 'C': '#a0735c' };
  
  const ciHTML = c.contreindications.map(ci => `<li>${ci}</li>`).join('');
  const interHTML = c.interactions.map(i => `<li>${i}</li>`).join('');
  
  const modal = document.createElement('div');
  modal.id = 'flora-comp-fiche-modal';
  modal.className = 'flora-modal-overlay';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  
  modal.innerHTML = `
    <div class="flora-modal-content comp-fiche-modal">
      <div class="flora-modal-header comp-fiche-header" style="background: linear-gradient(135deg, ${c.couleur}22, ${c.couleur}08);">
        <div class="comp-fiche-icon" style="background: ${c.couleur}33;">${c.emoji}</div>
        <div class="comp-fiche-titles">
          <h2 class="flora-modal-title">${c.nom}</h2>
          <div class="comp-fiche-preuve" style="color: ${preuveColor[c.preuve]};">
            <span class="comp-fiche-tier" style="background: ${preuveColor[c.preuve]}22; color: ${preuveColor[c.preuve]};">Niveau ${c.preuve}</span>
            ${preuveLabel[c.preuve]}
          </div>
        </div>
        <button class="flora-modal-close" aria-label="Fermer" onclick="closeComplementFiche()">✕</button>
      </div>
      
      <div class="flora-modal-body">
        <div class="comp-fiche-section">
          <div class="comp-fiche-label">Bénéfice principal</div>
          <p class="comp-fiche-text">${c.benefice}</p>
        </div>
        
        <div class="comp-fiche-section">
          <div class="comp-fiche-label">Posologie indicative</div>
          <p class="comp-fiche-text">${c.posologie}</p>
        </div>
        
        <div class="comp-fiche-section">
          <div class="comp-fiche-label">Données scientifiques</div>
          <p class="comp-fiche-text">${c.science}</p>
        </div>
        
        <div class="comp-fiche-section comp-fiche-warning-section">
          <div class="comp-fiche-label">⚠️ À savoir avant de prendre</div>
          <p class="comp-fiche-text">${c.avant}</p>
        </div>
        
        <div class="comp-fiche-section">
          <div class="comp-fiche-label">Contre-indications</div>
          <ul class="comp-fiche-list">${ciHTML}</ul>
        </div>
        
        <div class="comp-fiche-section">
          <div class="comp-fiche-label">Interactions médicamenteuses</div>
          <ul class="comp-fiche-list">${interHTML}</ul>
        </div>
        
        <div class="comp-fiche-section comp-fiche-sources">
          <div class="comp-fiche-label">Sources</div>
          <p class="comp-fiche-text comp-fiche-sources-text">${c.sources}</p>
        </div>
        
        <div class="comp-fiche-disclaimer">
          <strong>Avis médical indispensable.</strong> Flōra fournit des informations générales 
          à but éducatif. Toute supplémentation, surtout en cas de traitement en cours, 
          doit être validée par votre médecin ou pharmacien.
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function closeComplementFiche() {
  const modal = document.getElementById('flora-comp-fiche-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
}

// ============================
// AFFICHAGE — Liste des compléments dans la page
// ============================
// REMPLACE ta fonction de rendu actuelle de la liste compléments (probablement renderComp ou similaire)

function renderComplementsList(containerId = 'complements-list') {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const userMeds = getUserMedications();
  
  // Tri : preuves A d'abord, puis B, puis C, et compléments à risque en dernier
  const sorted = [...COMPLEMENTS].sort((a, b) => {
    const tierOrder = { 'A': 1, 'B': 2, 'C': 3 };
    return tierOrder[a.preuve] - tierOrder[b.preuve];
  });
  
  container.innerHTML = sorted.map(c => {
    const risk = calculateInteractionRisk(c, userMeds);
    let badge = '';
    
    if (risk.level === 'danger') {
      badge = '<span class="comp-risk-badge comp-risk-danger" title="Interaction grave possible">⚠️</span>';
    } else if (risk.level === 'caution') {
      badge = '<span class="comp-risk-badge comp-risk-caution" title="Vigilance recommandée">⚡</span>';
    }
    
    const preuveColor = { 'A': '#3d6b58', 'B': '#d4a843', 'C': '#a0735c' };
    
    return `
      <button class="comp-card" onclick="openComplementFiche('${c.id}')" 
              aria-label="Ouvrir la fiche ${c.nom}">
        <div class="comp-header">
          <div class="comp-icon-circle" style="background: ${c.couleur}22; color: ${c.couleur};">
            ${c.emoji}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div class="comp-name">
              ${c.nom}
              ${badge}
              <span class="comp-tier" style="background: ${preuveColor[c.preuve]}22; color: ${preuveColor[c.preuve]};">${c.preuve}</span>
            </div>
            <div class="comp-benefit">${c.benefice}</div>
          </div>
          <div class="comp-arrow">›</div>
        </div>
      </button>
    `;
  }).join('');
}

// ============================
// BOUTON — Modifier ses médicaments depuis le profil
// ============================
// À appeler depuis un bouton dans le profil

function openMedicationsEditFromProfile() {
  openMedicationsModal(() => {
    // Re-render la liste des compléments si on est dessus
    if (document.getElementById('complements-list')) {
      renderComplementsList('complements-list');
      if (typeof updateComplementsBanner === 'function') {
        updateComplementsBanner();
      }
    }
    // Petit feedback
    showFloraToast('Médicaments mis à jour');
  });
}

// Mini toast (à inclure si pas déjà présent)
function showFloraToast(message) {
  const existing = document.getElementById('flora-toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.id = 'flora-toast';
  toast.className = 'flora-toast';
  toast.textContent = message;
  toast.setAttribute('role', 'status');
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('flora-toast-visible'), 10);
  setTimeout(() => {
    toast.classList.remove('flora-toast-visible');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ============================
// Mise à jour du bandeau d'info sur la page Compléments
// ============================
function updateComplementsBanner() {
  const meds = getUserMedications();
  const label = document.getElementById('comp-meds-banner-label');
  const sub = document.getElementById('comp-meds-banner-sub');
  if (!label || !sub) return;
  
  if (!meds) {
    label.textContent = 'Personnalisez les alertes d\'interaction';
    sub.textContent = 'Indiquez vos médicaments pour voir les interactions possibles';
  } else if (meds.meds.length === 0 || meds.meds.includes('none')) {
    label.textContent = 'Aucun traitement renseigné';
    sub.textContent = 'Modifiable à tout moment depuis ce bouton';
  } else {
    const count = meds.meds.filter(m => m !== 'none').length;
    label.textContent = `${count} traitement${count > 1 ? 's' : ''} renseigné${count > 1 ? 's' : ''}`;
    sub.textContent = 'Les interactions sont signalées sur les fiches concernées';
  }
}
