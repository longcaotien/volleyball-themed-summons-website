# Volleyball-themed summons website

## Publish to GitHub Pages

This project is configured for the repository `longcaotien/volleyball-themed-summons-website`.

Expected website URL:

https://longcaotien.github.io/volleyball-themed-summons-website/

### Local preview

Requirements: Node.js 22 and Git.

```powershell
npm ci
npm run dev
```

### Build locally

```powershell
npm run build
```

The build output is `dist/`. The GitHub Actions workflow builds and deploys this folder automatically.

### GitHub setup

1. Create a **public** repository named `volleyball-themed-summons-website` under `longcaotien`.
2. Leave the options to add a README, `.gitignore`, or license unchecked so the repository starts empty.
3. Push this project to the `main` branch.
4. In the repository, open **Settings → Pages** and select **GitHub Actions** under **Build and deployment → Source**.
5. Open **Actions** and wait for the deployment workflow to finish with a green check mark.

### First push (run in this project folder)

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/longcaotien/volleyball-themed-summons-website.git
git push -u origin main
```

Do not run `git remote add origin` again after it has already been set. If Git reports that the remote has commits not present locally, stop and synchronize the histories before pushing; do not use `git push --force`.
