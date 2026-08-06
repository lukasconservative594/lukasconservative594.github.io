# Personal academic website

A Jekyll site in the style of [mdcattaneo.github.io](https://mdcattaneo.github.io):
a dark sticky header with the site title on the left and two rows of navigation on
the right, a photo-and-affiliation sidebar next to the bio on the home page, plain
numbered lists for papers and courses, and a dark footer with the department address.

Built to deploy on GitHub Pages with no build step of your own.

## Start here — the five edits that matter

1. **`_config.yml`** — your name, the one-line site description, and the `author`
   block (role, department, institution, address, email). These feed the sidebar,
   the footer, and the page titles, so you only write them once.
2. **`index.html`** — the bio. Four paragraphs, each starting with `REPLACE`.
3. **`_data/navigation.yml`** — which pages appear in the nav, and the small row of
   off-site links above it (CV, Google Scholar, GitHub, email).
4. **`assets/images/headshot.svg`** — drop your photo in as
   `assets/images/headshot.jpg`, then change the `src` in `_includes/contact.html`
   from `headshot.svg` to `headshot.jpg`. Portrait crops around 4:5 look best.
5. **`cv/azzam-cv.pdf`** — add your CV under that exact name, or rename it and update
   the two places it is linked (`_data/navigation.yml` and `_includes/contact.html`).

Then work through `research.html`, `writing.html`, `teaching.html`, `talks.html`, and
`service.html`. Every entry in them is a dummy you can copy or delete.

## Publishing on GitHub Pages

In the repository, go to **Settings → Pages** and set the source to **Deploy from a
branch**, branch `main`, folder `/ (root)`. GitHub builds the Jekyll site for you.

The `url` and `baseurl` in `_config.yml` must match where the site lives:

| Repository name | `url` | `baseurl` |
| --- | --- | --- |
| `durovwannabe.github.io` | `https://durovwannabe.github.io` | `""` |
| anything else, e.g. `website-` | `https://durovwannabe.github.io` | `"/website-"` |

This repo is `website-`, so `baseurl` is set to `/website-`. If you later rename the
repo to `durovwannabe.github.io`, set `baseurl` back to `""`. Getting this wrong is the
usual reason a deployed site loads with no styling.

## Previewing locally

```sh
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>. If `baseurl` is set, the site is at
<http://localhost:4000/website-/>.

## How the pieces fit

```
_config.yml              site title, description, url/baseurl, author block
_data/navigation.yml     both navigation rows
_layouts/default.html    the shell every page renders into
_includes/
  head.html              meta tags, title, stylesheet, favicon
  header.html            site title + navigation (mobile menu is CSS-only)
  contact.html           sidebar: photo, affiliation, CV button, social icons
  footer.html            address block and institution line
assets/css/styles.css    the whole design; palette lives in `:root` at the top
assets/js/navigation.js  menu niceties only — the menu works without JS
index.html               home page (sidebar + bio)
research.html            papers, publications, theses, interests
writing.html             essays, reviews, notes
teaching.html            courses, workshops, materials
talks.html               talks by year
service.html             refereeing, editorial, memberships
papers/                  PDFs of your papers and slides
cv/                      your CV PDF
```

### Adding a page

Create `newpage.html` with front matter modelled on the others:

```yaml
---
title: New Page
body_class: "new-page"
permalink: /new-page/
---
```

Then add it to `main:` in `_data/navigation.yml`. Nothing else needs touching.

### Changing the colours

The palette is six variables at the top of `assets/css/styles.css`:

```css
--bar:         #121212;              /* header and footer */
--accent-deep: rgb(23, 42, 84);      /* links, CV button */
--accent-warm: rgb(201, 138, 42);    /* nav underline on the active page */
```

## Notes

- The mobile menu is a CSS checkbox toggle, so navigation works with JavaScript off.
- Pages carry a visually hidden `<h1>` for screen readers and search engines; only the
  home page shows one.
- `redirect_from` entries keep old URLs such as `/research.html` working if you have
  already shared them.
