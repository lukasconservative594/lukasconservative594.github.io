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
branch**, pick the branch, folder `/ (root)`. GitHub builds the Jekyll site for you.

### Getting the address you want

This config targets a **user site** at `https://abdullah-azzam.github.io`. GitHub only
serves a user site when the repository is named exactly `<username>.github.io`, so the
account name and the repository name have to agree. Two renames, not one:

1. **Account:** `DurovWannaBe` → `abdullah-azzam`
   (Settings → Account → Change username)
2. **Repository:** `Website-` → `abdullah-azzam.github.io`
   (Settings → General → Repository name)

Renaming only the repository gives you a *project* site instead, at
`https://durovwannabe.github.io/abdullah-azzam.github.io/`, and the empty `baseurl`
would serve it unstyled.

| What you end up with | `url` | `baseurl` |
| --- | --- | --- |
| Account and repo both renamed | `https://abdullah-azzam.github.io` | `""` |
| Repo `durovwannabe.github.io`, account unchanged | `https://durovwannabe.github.io` | `""` |
| Any other repo name, e.g. `Website-` | `https://durovwannabe.github.io` | `"/Website-"` |

Match capitalisation exactly — Pages paths are case-sensitive, and a mismatched
`baseurl` is the usual reason a deployed site loads with no styling.

### After renaming the account

- Update the GitHub links in `_data/navigation.yml` and `_includes/contact.html`.
  Old *profile* URLs are not redirected and will 404.
- Update your git remote:
  `git remote set-url origin https://github.com/abdullah-azzam/abdullah-azzam.github.io`
- The old username becomes claimable by someone else, so do not leave links pointing
  at it.

### Notes

- Pages on a **private** repository requires GitHub Pro, Team, or Enterprise. On the
  free plan the repository must be public.
- The first build takes a minute or two. Check progress under the repository's
  **Actions** tab.

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
