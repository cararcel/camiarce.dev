# camiarce.dev

Personal portfolio built with Astro and React.

## Getting started

If you are setting up the project on a new computer:

1. Go to the GitHub repository.
2. Click **Code** and copy the SSH URL.
3. Open your terminal and clone the project:

```bash
git clone <your-repository-url>
```

4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

## Tech stack

This site uses Astro with React components.

- Astro keeps the site fast by rendering as much as possible on the server and sending lightweight HTML to the browser.
- React is used because it makes the project easier to organize into reusable components.

## Project structure

### `public/`

Static files such as:

- images
- favicons
- fonts in `public/assets/fonts`

### `src/`

Main source code for the site:

- `components/`
  Astro components, React components, and icons
- `i18n/`
  language utilities and translation setup
- `layouts/`
  shared page layout
- `pages/`
  route files for each page and language
- `styles/`
  global CSS
- `assets/`
  local images and translation JSON files

## Languages and translations

The site uses i18n to manage multiple languages.

- Translation files are in `src/assets/translation/`
- Language configuration is in `src/i18n/`
- Bigger page-specific text can be written directly inside the page files in `src/pages/`

That setup makes small UI text easy to translate with JSON files, while larger content stays easier to read and edit in the page itself.

## Changing fonts

1. Add the font file to `public/assets/fonts`
2. Update the font styles in `src/styles/global.css`
