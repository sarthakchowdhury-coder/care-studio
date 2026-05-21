// ── MODULE ENTRY POINT ──────────────────────────────────────────────────────
// Imports all exported functions and binds them to global scope for HTML event handlers

import {
  switchTab,
  selectChip,
  toggleComorb,
  clearComorb,
  updateWaist,
  toggleHba1c,
  calcBMI,
  calcScore,
  updateConditionalSections,
  assignCohort,
  resetCohort,
  S
} from './cohort.js';

// ── GLOBAL BINDINGS ─────────────────────────────────────────────────────────
// Make functions available to HTML onclick handlers
window.switchTab = switchTab;
window.selectChip = selectChip;
window.toggleComorb = toggleComorb;
window.clearComorb = clearComorb;
window.updateWaist = updateWaist;
window.toggleHba1c = toggleHba1c;
window.calcBMI = calcBMI;
window.calcScore = calcScore;
window.updateConditionalSections = updateConditionalSections;
window.assignCohort = assignCohort;
window.resetCohort = resetCohort;
window.S = S;

// ── INITIALIZATION ──────────────────────────────────────────────────────────
console.log('CareStudio Cohort Assessment loaded. State object:', S);
