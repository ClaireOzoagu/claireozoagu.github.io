# Claire Ozoagu — Customer Success Portfolio

A one-page portfolio website with a full page for each case study, ready for GitHub Pages.

## Files

All files sit together in one folder (no subfolders), so you can upload them all at once.

- `index.html` — the main page: About, Proof, Case Studies, Videos, How I Work, Skills & Tools, Experience, Contact
- `bukkibooks.html` and `ijeoma-home-and-living.html` — the full case studies
- `config.js` — **the only file you need for videos and links**
- `style.css` — colours and layout (royal blue `#0000b0`, green `#00fc00`)

## Swap a video

Open `config.js` and paste the new Google Drive or YouTube link into `url`. Drive files must be shared as "Anyone with the link can view". Every page updates.

## Add your photo

Save a square headshot as `claire.jpg`. It appears in the hero and the contact section automatically. Until then, a "CO" placeholder shows.

## Add case study 03 or 04

1. In `index.html`, find the comment `Case Study 03: placeholder`.
2. Copy the whole `<article class="case">` block for BukkiBooks, paste it over the placeholder, and change the text, tools and link.
3. Copy `bukkibooks.html` to a new file (for example `my-new-case.html`) and replace the text.
4. To add a video, add a new entry in `config.js` (for example `mynewcase: { url: "...", start: 0 }`) and use `<div class="video" data-video="mynewcase"></div>`.

## Publish on GitHub Pages

1. Create a public repository named `<your-username>.github.io`.
2. Upload these files to the root of the repository.
3. Go to **Settings → Pages**, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. The site goes live at `https://<your-username>.github.io` within a few minutes.
