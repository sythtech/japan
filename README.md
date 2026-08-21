# japan-portfolio

A minimalist bio-link page, built with React + TypeScript + Vite.

## Local dev

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `japan-portfolio`) and push this project to it:

   ```bash
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/<your-username>/japan-portfolio.git
   git push -u origin main
   ```

2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

3. That's it — the included workflow (`.github/workflows/deploy.yml`) builds and
   deploys automatically on every push to `main`. Your site will be live at:

   ```
   https://<your-username>.github.io/japan-portfolio/
   ```

### If you rename the repo

Open `vite.config.ts` and update the `base` value to match your repo name
exactly (leading and trailing slashes matter):

```ts
base: "/your-repo-name/",
```

If your repo is named `<your-username>.github.io` (a user/org root site),
set `base: "/"` instead.
