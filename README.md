# 56k Slides Demo

🚀 **Monorepo with Turborepo + pnpm + Slidev**  
This project contains all Slidev presentations and their automated deployment pipeline.

---

## 📂 Structure

```
56k-slides-demo/
├── apps/
│   └── slidev/          # Slidev presentations
├── infrastructure/      # Infra code (Pulumi / scripts / Terraform)
├── package.json         # Monorepo root config
└── .github/workflows/   # CI/CD (GitHub Actions)
```

---

## 🛠️ Scripts

| Command                 | Description |
|-----------------------|-------------|
| `pnpm dev`           | Runs all apps in development mode using Turborepo |
| `pnpm build`         | Builds all apps (output in `apps/slidev/dist/`) |
| `pnpm lint`          | Lints the code using [Biome](https://biomejs.dev/) |
| `pnpm format`        | Formats the code using Biome |
| `pnpm check`         | Runs lint + format check |

---

## 🌍 Multi-language Presentations

Each presentation is located in `apps/slidev/presentations/<deck>/slides.md`.  
Translations are located in `apps/slidev/languages/<lang>/<deck>.json`.

Example to run a presentation in French:
```bash
pnpm dev presentations/introduction/slides.md --deck introduction --lang fr
```

---

## 🧪 CI / CD

Two GitHub Actions workflows are configured:

- **CI (`ci.yml`)**: runs build + lint + format check for every PR
- **Deploy (`deploy.yml`)**: builds and deploys to S3 + CloudFront on `main`

---

## 🔧 Deployment

Deployment runs automatically whenever a commit is pushed to `main`.  
It uploads the built files from `apps/slidev/dist/` to S3 and invalidates CloudFront cache.

Required GitHub Actions secrets (Settings → Secrets and variables → Actions):

- `AWS_ROLE_TO_ASSUME`
- `AWS_REGION`
- `S3_BUCKET`
- `CF_DISTRIBUTION_ID`

