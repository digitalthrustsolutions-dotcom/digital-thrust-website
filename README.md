# Digital Thrust Solutions — website

Static marketing site. No build step, no framework, no dependencies: Vercel serves the files as they are.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page |
| `styles.css` | All styling |
| `script.js` | Mobile menu, contact form, footer year |
| `assets/` | Logos and photographs |
| `favicon.svg` | Browser tab icon |
| `vercel.json` | Clean URLs, security headers, asset caching |
| `robots.txt` | Allows indexing, points to the sitemap |
| `sitemap.xml` | Single-page sitemap |

## Deploying to Vercel

### Option A — drag and drop (fastest, no account setup beyond signing in)

1. Put every file above in one folder on your computer, keeping `assets/` inside it.
2. Go to **vercel.com/new**, sign in, and choose **Deploy** → drag the folder onto the page.
3. Vercel gives you a live `*.vercel.app` URL in under a minute.

### Option B — GitHub (recommended: every future edit redeploys itself)

1. Create a repository, e.g. `digital-thrust-website`, and upload these files to it with GitHub Desktop.
2. In Vercel, **Add New → Project → Import** that repository.
3. Framework preset: **Other**. Build command: leave empty. Output directory: leave empty.
4. **Deploy**. Every push to the main branch republishes the site automatically.

## Connecting digitalthrustsolutions.com

1. Vercel → your project → **Settings → Domains → Add** → type `digitalthrustsolutions.com`.
2. Vercel shows the DNS records to create. At your domain registrar, add them:
   - `A` record on `@` → the IP Vercel shows
   - `CNAME` on `www` → the hostname Vercel shows
3. Wait for DNS to propagate — usually minutes, occasionally a few hours. Vercel issues the HTTPS certificate on its own.
4. Add `www.digitalthrustsolutions.com` too and set it to redirect to the apex domain.

## Before you go live

- **Contact form.** Submitting opens the visitor's email app with a pre-filled draft. It works, but a visitor without a configured mail app gets nothing. To receive submissions directly, create a free Formspree form and change the `<form>` tag in `index.html` to `action="https://formspree.io/f/YOUR_ID" method="POST"`, then delete the form block in `script.js`.
- **Social links** were removed; they pointed nowhere. Add them to the footer once the accounts exist.
- **Dashboard and chart figures** in the product section are labelled as illustrative. Replace them with real screenshots when you have them — that is the single biggest improvement available to this page.
- **Trade licence.** Once Digital Thrust Solutions is registered, add the licence number to the footer. UAE business buyers look for it.

## Editing later

Everything is plain HTML and CSS. Text lives in `index.html`; colours, spacing and fonts in `styles.css`. Change a file, push to GitHub (Option B), and the site updates itself.


Deployed from this repository to Vercel.
