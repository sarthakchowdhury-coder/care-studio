# CareStudio Cohort Assessment

Modular HTML/CSS/JS implementation of the CareStudio Cohort Assessment form.

## 📂 Project Structure

```
care-studio/
├── index.html              (Legacy single-file version)
├── app.html                (Modern modular version)
├── src/
│   ├── styles/
│   │   ├── variables.css   (CSS custom properties & theme)
│   │   └── main.css        (All component styles)
│   └── js/
│       ├── cohort.js       (Core logic & state management)
│       └── main.js         (Entry point & global bindings)
├── README.md               (This file)
└── package.json            (Optional: for npm/build tools)
```

## 🚀 Usage

### Option 1: Direct File Open
```bash
# Open in browser (no build required)
open app.html
# or
firefox app.html
```

### Option 2: Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000/app.html`

### Option 3: Deploy to GitHub Pages
- Push to repository
- Go to Settings → Pages
- Select `main` branch as source
- Access at: `https://sarthakchowdhury-coder.github.io/care-studio/app.html`

## 📝 Files

| File | Purpose |
|------|---------|
| **index.html** | Single-file version with all CSS/JS inline (legacy) |
| **app.html** | Modern entry point with separate imports |
| **src/styles/variables.css** | CSS custom properties (colors, themes) |
| **src/styles/main.css** | All UI component styles |
| **src/js/cohort.js** | Core business logic (state, scoring, cohort assignment) |
| **src/js/main.js** | Module imports & global function bindings |

## 🔗 Live Links

- **Modern Version**: `https://github.com/sarthakchowdhury-coder/care-studio/blob/main/app.html`
- **Legacy Version**: `https://github.com/sarthakchowdhury-coder/care-studio/blob/main/index.html`
- **Raw HTML (app.html)**: `https://raw.githubusercontent.com/sarthakchowdhury-coder/care-studio/main/app.html`
- **View in GitHub Codespaces**: Open in browser after cloning

## 🏥 Features

### Patient Assessment
- ✅ Age, Gender, Height, Weight (BMI auto-calc)
- ✅ Waist Circumference (gender-aware)
- ✅ Chronic Disease & Comorbidities
- ✅ Fasting Blood Sugar (FBS)
- ✅ Smoking, Alcohol, Sleep Duration
- ✅ Real-time Metabolic Risk Scoring

### Cohortization Engine
- ✅ Insulin Resistance & Glycaemic Status
- ✅ Dynamic conditional sections (Sections 3–5)
- ✅ Smart cohort assignment with override rules:
  - **Cohort 1**: Metabolic/Obesity (MOD)
  - **Cohort 2**: Prediabetes
  - **Cohort 3**: Dyslipidemia / T2D + Cholesterol
  - **Cohort 4**: Hypertension / Vascular

### UI/UX
- ✅ Multi-tab navigation
- ✅ Card-based layout
- ✅ Chip selection groups
- ✅ Real-time form validation
- ✅ Smooth animations
- ✅ Mobile-responsive design

## 🛠️ Development

### To modify styles:
Edit `src/styles/main.css` or `src/styles/variables.css`

### To add logic:
Export new functions from `src/js/cohort.js` and bind in `src/js/main.js`:
```javascript
export function newFeature() {
  // your code
}

// In main.js:
window.newFeature = newFeature;
```

### To add new form fields:
1. Add to state `S` object in `cohort.js`
2. Add HTML in `app.html`
3. Add event handlers or form logic

## 📦 Embedding

To embed in another project:

```html
<!-- Include styles -->
<link rel="stylesheet" href="path/to/care-studio/src/styles/variables.css">
<link rel="stylesheet" href="path/to/care-studio/src/styles/main.css">

<!-- Include your target div -->
<div id="care-studio-app"></div>

<!-- Load as iframe -->
<iframe src="path/to/care-studio/app.html" width="100%" height="100%"></iframe>

<!-- Or import JS module -->
<script type="module">
  import { assignCohort, S } from './src/js/cohort.js';
  // Use functions programmatically
</script>
```

## 🔐 Notes

- All data is stored in memory (JavaScript object `S`)
- No backend required; runs entirely in browser
- Optional: Connect to API for persistence
- HTTPS recommended for production deployment

## 📞 Support

For issues or feature requests, open an issue in the repository.

---

**Version**: 1.0.0  
**Last Updated**: 2026-05-21  
**Author**: Sarthak Chowdhury
