# Delta Alpha Pi International Honor Society

An accessible redesign of the Delta Alpha Pi International Honor Society website.

## Website

After GitHub Pages is enabled, the review website will be available at:

https://dodgea-design.github.io/delta-alpha-pi-website/

## Accessibility features

- Keyboard-accessible navigation and skip links
- Read-aloud controls using browser speech synthesis
- Adjustable text size up to 200%
- Standard, high-contrast, and dark display modes
- Responsive layouts and visible focus indicators
- Reduced-motion and forced-colors support

## Publishing

The website uses Next.js with a static export. GitHub Actions automatically builds and publishes the site whenever a change is committed to the `main` branch.

See [GITHUB_PAGES_INSTRUCTIONS.md](GITHUB_PAGES_INSTRUCTIONS.md) for the setup steps.

The TypeScript files in `app`, `components`, and related folders are the editable source. GitHub automatically converts them into the HTML, CSS, and JavaScript used by the published website.
