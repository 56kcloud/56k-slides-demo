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

## 🛠️ Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
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

## 🎨 Theme

### Theme variables (`theme/styles/layout.css`)
```css
:root {
  --slidev-theme-primary: #ffffff;
  --slidev-theme-background: #021824;
  --slidev-theme-background-via: #043353;
  --slidev-theme-background-lightened: #0c5780;
}
```

---
