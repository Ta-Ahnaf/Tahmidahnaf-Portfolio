# MD. Tahmid Ahnaf — Portfolio

A single-page portfolio: sketch identity + subtle 2.5D parallax, built with
plain HTML, CSS and vanilla JavaScript. No build step, no frameworks.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploy to Netlify

**Drag-and-drop (fastest):**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. Done — Netlify gives you a live URL.

**Or via Netlify CLI:**
```
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

No build command or publish-directory config is needed — this is the
publish directory itself (`index.html` at the root).

## Structure

```
index.html              — all sections (hero, about, skills, projects,
                           hobbies, achievements, writing, resume/contact)
assets/css/style.css    — all styling, design tokens, responsive rules
assets/js/main.js       — nav, scroll-reveal, parallax (vanilla JS)
assets/img/portrait.*   — transparent-background sketch portrait (png + webp)
assets/Tahmid_Ahnaf_Resume.pdf — downloadable résumé
```

## Notes

- Respects `prefers-reduced-motion` (disables parallax/animations).
- Fonts load from Google Fonts with system-font fallbacks, so the page still
  reads fine offline or if the font request is blocked.
- Update contact/social links directly in `index.html` (footer + hero CTA)
  if any of them change.

© 2026 MD. Tahmid Ahnaf. All Rights Reserved.
