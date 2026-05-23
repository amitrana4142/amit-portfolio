# PR review test — answer key

Intentional issues were added for testing your PR review tool. **Remove before merging to production.**

## Security (critical / high)

| File | Issue |
|------|--------|
| `src/config/secrets.js` | Hardcoded API keys, DB password in source |
| `src/utils/analytics.js` | `eval()` on URL `?track=` param (RCE); API key in client bundle |
| `src/utils/visitorGreeting.js` | XSS via unsanitized `?name=` / `?greeting=` |
| `src/components/sections/Contact.jsx` | Form data stored in `localStorage`; user HTML rendered with `dangerouslySetInnerHTML` |
| `src/components/layout/Navbar.jsx` | Open redirect via `?redirect=` |
| `public/runtime-config.json` | Exposed tokens in public folder |

## Bugs (medium)

| File | Issue |
|------|--------|
| `src/components/sections/Skills.jsx` | Progress bar uses `level + 15` (caps at 100% wrong visually vs label) |
| `src/components/sections/Experience.jsx` | `.sort()` mutates shared array; wrong date ordering |
| `src/hooks/useTypewriter.js` | Crashes if `words` is empty |
| `src/components/sections/Gallery.jsx` | Lightbox missing Escape key + focus trap |
| `src/components/sections/Contact.jsx` | `setSent(true)` without validation; form never clears |
| `src/components/layout/Footer.jsx` | `target="_blank"` missing `rel="noopener noreferrer"` |

## Noise / style (low)

| File | Issue |
|------|--------|
| `src/App.jsx` | Debug `console.log` with profile email |
| `src/components/sections/Projects.jsx` | Unused import / dead `console.debug` |
| `src/data/portfolio.js` | Commented `debugger` left in |
