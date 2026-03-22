# Portfolio / Art Direction Studio — GitHub Pages

A minimal, cinematic portfolio.

---

## Folder Structure

```
portfolio-site/
├── index.html        ← main page (all sections)
├── style.css         ← all styling / tokens
├── script.js         ← loading screen, cursor, scroll effects
├── images/           ← ★ DROP YOUR IMAGES HERE
│   ├── hero.jpg            full-screen hero (2560 × 1440 px recommended)
│   ├── project-01.jpg      large tile      (1600 × 1000 px)
│   ├── project-02.jpg      medium tile     (900 × 700 px)
│   ├── project-03.jpg      medium tile     (900 × 700 px)
│   ├── project-04.jpg      small tile      (700 × 700 px)
│   ├── project-05.jpg      small tile      (700 × 700 px)
│   ├── project-06.jpg      large wide tile (2400 × 900 px)
│   └── about.jpg           portrait/studio (800 × 1000 px)
└── files/            ← ★ DROP PDFs / DOWNLOADS HERE
    └── press-kit.pdf
```

---

## Quick Customisation Checklist

Open `index.html` and search for `★ CUSTOMISE` — every spot is marked.

| What                   | Where in index.html                       |
|------------------------|-------------------------------------------|
| Studio / your name     | `<title>`, `.wordmark`, footer, loader    |
| Tagline                | `.hero-tagline`                           |
| Project titles & tags  | `.project-title` / `.project-tags`        |
| About bio              | `.about-body` paragraphs                  |
| Services list          | `<ul class="services-list">`              |
| Contact email          | `<a href="mailto:…">` in #contact         |
| Social links           | `.contact-links` anchors                  |
| Press kit PDF          | `files/press-kit.pdf` path                |
| Brand accent colour    | `--accent` in `:root` inside `style.css`  |

---

## Adding / Removing Projects

1. Copy one `<article class="project">` block in `index.html`.
2. Add your image to `images/`.
3. Update `src`, title, and tags.
4. To change tile size use `data-size="large"`, `"medium"`, or `"small"`.

The grid auto-lays tiles across 12 columns:
- `large`  → 8 cols
- `medium` → 4 cols
- `small`  → 4 cols

---

## Using a Video as Hero

Replace the `<img>` inside `.hero-media` with:

```html
<video autoplay muted loop playsinline class="hero-img">
  <source src="images/hero.mp4" type="video/mp4" />
</video>
```

---

## Deploying to GitHub Pages

### Option A — from the GitHub website
1. Create a new repository (e.g. `my-portfolio`).
2. Upload all files (keep the folder structure).
3. Go to **Settings → Pages**.
4. Set Source → **Deploy from a branch** → `main` / `root`.
5. Your site is live at `https://your-username.github.io/my-portfolio/`.

### Option B — using Git in your terminal
```bash
git init
git add .
git commit -m "Initial deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
Then enable GitHub Pages in Settings as above.

### Custom Domain (optional)
1. Add a `CNAME` file containing your domain, e.g. `www.yourstudio.com`.
2. Point your domain's DNS to GitHub's servers (see GitHub's docs).

---

## Fonts

The site uses Google Fonts loaded from CDN — no install needed.
- **Cormorant Garamond** — display / headings (elegant serif)
- **Archivo** — body / labels (clean grotesque)

To change fonts, swap the `<link>` in `<head>` and update `--font-display` /
`--font-body` in `:root` inside `style.css`.

---

© Your Name. All Rights Reserved.
