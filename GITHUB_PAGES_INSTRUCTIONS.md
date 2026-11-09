# Publish the Delta Alpha Pi website

This package is configured for the GitHub repository `delta-alpha-pi-website` under the `dodgea-design` account.

Expected website address:

https://dodgea-design.github.io/delta-alpha-pi-website/

## Upload the files

Upload the contents of this unzipped folder to the root of the `delta-alpha-pi-website` repository. Replace files with the same names when GitHub asks. The hidden `.github` folder is required because it contains the publishing workflow. The `.openai` folder is intentionally not included.

## Turn on GitHub Pages

1. Open the repository on GitHub.
2. Select **Settings**.
3. Select **Pages** under **Code and automation**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Select the **Actions** tab.
6. Open **Deploy website to GitHub Pages** and wait for both the build and deploy jobs to show green check marks.
7. Return to **Settings > Pages** and select **Visit site**.

The website normally publishes within a few minutes. Future commits to the `main` branch will publish automatically.

## Important

The TypeScript files are the editable source. GitHub Actions converts them into the HTML, CSS, and JavaScript served by GitHub Pages. Do not manually convert or delete the TypeScript pages.
