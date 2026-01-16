# Chris Hadad Author Website

Personal author website built with Hugo and hosted on GitHub Pages.

**Live site:** https://chrishadad.com
**Repo:** https://github.com/ThePhantomHourglass/thephantomhourglass.github.io

---

## Quick Reference

| Path | Purpose |
|------|---------|
| `content/_index.md` | Homepage |
| `content/about.md` | About page |
| `content/work/interval.md` | Interval novel page |
| `content/essays/_index.md` | Essays section (placeholder) |
| `content/contact.md` | Contact page |
| `themes/starlight/static/css/style.css` | All styling |
| `themes/starlight/static/js/main.js` | JavaScript (menu + easter egg) |
| `themes/starlight/layouts/` | HTML templates |

---

## Development

```bash
# Preview locally
cd ~/Projects/chrishadad-website
hugo server -D

# Build for production
hugo --gc --minify
```

Site auto-deploys via GitHub Actions when you push to main.

---

## Design

- **Theme:** Starlight (dark with amber/gold accents)
- **Fonts:** Playfair Display (headings), Source Sans 3 (body)
- **Easter egg:** Wandering star (John) — click to reveal message

---

## Deployment

Push to deploy:
```bash
git add . && git commit -m "Update" && git push
```

GitHub Actions builds and deploys automatically.

---

## Future Additions

- [x] Author photo on About page
- [x] Mailing list signup (Buttondown)
- [ ] Essays content
- [ ] "Represented by" status when applicable
