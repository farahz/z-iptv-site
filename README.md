# Z-IPTV Player website

Public pages for the Z-IPTV Player TV app: a short landing page and the app's privacy policy, linked from the LG and Samsung app stores.

## Live site

https://farahz.github.io/z-iptv-site/ · privacy policy: https://farahz.github.io/z-iptv-site/privacy.html

## Features

- Landing page describing the app.
- Privacy policy (`privacy.html`), the same text the app shows in Settings → About.
- English, Hebrew and Arabic with right-to-left layout; light / dark / system theme; phone friendly.

## How it works

Static HTML and CSS with a small script (`site.js`) for language and theme; choices are kept in `localStorage`. The policy text comes from `privacy.js`, a copy of `js/privacy.js` from the app.

**This repository is generated.** The source lives in the private app repository (`site/` and `js/privacy.js`) and is published here by its `tools/publish_site.py`. Edit it there, not here.

## Setup

Nothing to set up.

## Deploy

Served by GitHub Pages from the `main` branch (repository root). Pushing to `main` updates the site.

## Run locally

```sh
python -m http.server 8000      # then open http://127.0.0.1:8000
```
