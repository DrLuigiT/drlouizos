# Personal academic website — launch guide

A static site (plain HTML/CSS/JS — no build step, no database). Open `index.html` in a browser to view it locally.

## 1. Put the site online (free hosting)

Easiest path — **Cloudflare Pages** (free, fast, free SSL):

1. Create a free account at https://pages.cloudflare.com
2. Choose "Direct upload" and drag the whole `website` folder in (or connect a GitHub repo).
3. The site goes live instantly at `yourproject.pages.dev`.

Alternative: **GitHub Pages** (also free) — push this folder to a GitHub repo, then Settings → Pages → deploy from branch. Or **Netlify** drag-and-drop.

## 2. Connect your Namecheap domain

At your hosting provider, add your custom domain (e.g. `yourdomain.com`). It will tell you which DNS records to create. Then in Namecheap:

1. Dashboard → your domain → **Manage** → **Advanced DNS**.
2. Add the records the host gave you, typically:
   - `CNAME` record, host `www`, value `yourproject.pages.dev` (or the host's target)
   - For the bare domain (`yourdomain.com`): an `A`/`ALIAS`/`CNAME` record per the host's instructions.
3. Wait for DNS to propagate (minutes to a few hours). SSL (https) is issued automatically.

> If you use Cloudflare Pages, the cleanest option is to change the Namecheap **nameservers** to Cloudflare's (Cloudflare shows you the two names) — then Cloudflare manages all DNS.

## 3. Email on your own domain

Three options, cheapest first:

- **Free — Namecheap email forwarding**: Domain → Manage → "Redirect Email". Create `hello@yourdomain.com` → forwards to your Gmail. (Receive only; to *send* as that address, add it as a "Send mail as" alias in Gmail settings.)
- **Free tier — Zoho Mail**: real mailbox (send + receive) for 1 domain, free for up to 5 users. Add the MX/SPF/DKIM records Zoho gives you in Namecheap Advanced DNS.
- **Paid — Namecheap Private Email** (~$1–2/month) or **Google Workspace** (~$7/month): full professional mailbox, easiest setup since Namecheap integrates its own product directly.

⚠️ Note: MX records (email) and the website records live side by side in Advanced DNS — adding one does not break the other.

## 4. Make it yours

Search all files for `[Your Name]`, `yourdomain.com`, `REPLACE` and `To do:` and fill in real content:

- `index.html` — name, tagline, footer email/ResearchGate
- `pages/cv.html` — education, positions, awards
- `pages/publications.html` — one entry per paper, use DOI links
- `pages/thesis.html` — library repository link + abstract
- `pages/timeline.html` — your milestones, newest first
- …and the rest. Each page has a yellow "To do" box reminding you what to add — delete the box once done.

Replace the placeholder SVG plots in `index.html` with your real figures: export them as PNG/SVG into an `images/` folder and swap each `<svg>…</svg>` for `<img src="images/figure.png" alt="…">` inside the same `plot-card` figure.

## 5. Adding a new section later

1. Copy any page in `pages/` (e.g. `thoughts.html`), rename it, edit the title and content.
2. In `index.html`, replace one of the "Soon" cards with a real link:
   `<a class="smart-card reveal" href="pages/newpage.html">…</a>`
