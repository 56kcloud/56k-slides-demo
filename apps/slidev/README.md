# 56k Slides Demo

> **[Slidev](https://sli.dev)** presentation with custom **56k.cloud theme & layouts**  
> Automatically deployed to **AWS S3 + CloudFront** via **GitHub Actions**.

---

## 🚀 Goals

- Learn [Slidev](https://sli.dev)
- Understand the framework under the hood (**Vite + Vue 3 + Markdown**)
- Create a **custom layout** (`hero-56k`, `reference`)
- Create a **custom theme** based on 56k.cloud brand colors
- Deploy the presentation on **AWS (S3 + CloudFront)** using a **CI/CD GitHub Actions pipeline**

---

## 📂 Project Structure

```
56k-slides-demo/
├── slides.md                # Main presentation (Markdown)
├── theme/
│   ├── layouts/
│   │   ├── hero-56k.vue     # Custom Hero layout (header/footer + badge)
│   │   └── reference.vue    # Reference layout with logo + image
│   └── styles/
│       ├── layout.css       # Custom styles (colors, typography)
│       └── index.ts         # Theme style entry point
├── public/                  # Static assets (accessible via `/file.png`)
├── package.json
└── .github/workflows/
    └── deploy.yml           # CI/CD workflow (GitHub Actions)
```

---

## 🛠️ Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
# or
npx slidev --open
```

### 3. Build static site
```bash
npm run build
# output: ./dist
```

### 4. Export to PDF
```bash
npm run export
# output: ./dist/export.pdf
```

---

## 🎨 Theme & Layouts

### Theme variables (`theme/styles/layout.css`)
```css
:root {
  --slidev-theme-primary: #ffffff;
  --slidev-theme-background: #021824;
  --slidev-theme-background-via: #043353;
  --slidev-theme-background-lightened: #0c5780;
}
```

### `hero-56k` Layout
- Adds a **header** (56k.cloud badge + logo)
- Main content vertically centered
- **Footer** with Slidev / AWS references

### `reference` Layout
- Displays **logo + image**
- Centers text and reference details

---

## ☁️ AWS Deployment

Deployment is fully automated using **GitHub Actions** → S3 + CloudFront.

### 1. Infrastructure (setup once in AWS)
- **S3 bucket** (private): `56k-slides-demo-prod`
- **CloudFront distribution** with S3 origin (via **OAC**)
- **IAM Role for GitHub OIDC** with permissions:
  - `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket`
  - `cloudfront:CreateInvalidation`

### 2. GitHub Secrets (Settings → Secrets → Actions)
| Secret | Example |
|--------|---------|
| `AWS_REGION` | `eu-central-1` |
| `AWS_ROLE_TO_ASSUME` | `arn:aws:iam::<ACCOUNT_ID>:role/gh-oidc-deploy` |
| `S3_BUCKET` | `56k-slides-demo-prod` |
| `CF_DISTRIBUTION_ID` | `E123456ABCDEF` |

### 3. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
```yaml
name: Deploy Slidev to S3 + CloudFront

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  id-token: write
  contents: read

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Slidev
        run: npm run build

      - name: Configure AWS credentials (OIDC)
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-region: ${{ secrets.AWS_REGION }}
          role-to-assume: ${{ secrets.AWS_ROLE_TO_ASSUME }}
          role-session-name: slidev-deploy

      - name: Upload to S3
        run: aws s3 sync ./dist s3://${{ secrets.S3_BUCKET }}/ --delete

      - name: Invalidate CloudFront
        run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CF_DISTRIBUTION_ID }} --paths "/*"
```

---

## ✅ Deliverables

- **Public GitHub repo** `56k-slides-demo` containing:
  - A working Slidev demo (`slides.md`)
  - Custom theme (`theme/` with layouts + styles)
  - Functional GitHub Actions workflow (`deploy.yml`)
  - Clear `README.md` (this file)
- **Public CloudFront URL** of the deployed presentation
