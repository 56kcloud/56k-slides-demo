---
title: "56k Slides Demo"
layout: cover
class: text-center
fonts:
  sans: Inter
  mono: Fira Code
transition: slide-left
mdc: true
---

# 56k Slides Demo
A Slidev démo with layout & custom theme

---
layout: hero-56k
class: text-left
---

# Pourquoi Slidev ?
- Écrit en **Markdown**
- Moteur **Vite + Vue 3**
- Extensible (layouts, composants, thèmes)
- Export **static** 🔥

---
layout: default
---

## Layout custom — `hero-56k`
Utilise le layout `hero-56k` pour un slide "hero" avec un header, un footer et un badge logo.

---
layout: default
---

## Références
- [Écrire un layout](https://sli.dev/guide/write-layout)
- [Créer un thème](https://sli.dev/guide/write-theme)
- [Deploy AWS S3 + CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html)

---
layout: cover
class: text-center
---

# Comprendre Slidev
Voyons les principales fonctionnalités ✨

---
layout: default
---

# Écriture en Markdown
Slidev repose sur **Markdown** :
- Titres avec `#`
- Listes avec `-` ou `*`
- Mise en forme **gras**, *italique*, `code`
- Blocs de code avec \`\`\`lang (ex: \`\`\`js)

::right::
```md
# Un titre H1
## Un titre H2

- Un élément de liste
- Un autre élément

**Gras**, *italique*, `inline code`
```

```js
console.log("hello world")
```

---
layout: default
---

## Layouts intégrés & custom
Nous pouvons choisir un layout **par slide** via le frontmatter.

- `cover` → page d’intro  
- `default` → texte classique  
- `two-cols` → 2 colonnes avec slots  
- `image` → image plein écran  
- `reference` → ton layout custom de réf  
- **`hero-56k`** → exemple de layout custom  

```md
---
layout: default
---

::left::
Contenu colonne gauche

::right::
Contenu colonne droite
```

---
layout: default
---

# Slide d’image
Astuce : mettre des **chemins absolus** `/...` (exemple si on se situe dans public dans `public/`).

```md
---
layout: image
image: /path/vers/image.png
backgroundSize: contain
---
```

---
layout: default
---

## Composants Vue (Vue 3 inside)
Nous pouvons inclure des **composants Vue** directement dans tes slides.

Exemple d’utilisation :
```vue
<Counter :start="5" />
```

Composant `components/Counter.vue` :
```vue
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(5)
</script>

<template>
  <button @click="count++">
    Count: {{ count }}
  </button>
</template>

<style scoped>
button { padding: .5rem .75rem; border-radius: .5rem; }
</style>
```

---
layout: default
---

## Transitions de slides
Transition **globale** (dans le frontmatter du projet) :
```yaml
transition: slide-left
```

Transition **par slide** :
```md
---
transition: fade
---
Contenu du slide
```

---
layout: default
---

## Notes orateur & mode présentateur
Ajoute des **notes** invisibles pour le public :

```md
---
layout: default
---

# Ma slide
Un point important

<!--
notes:
- Mentionner la démo live
- Temps max: 2 min
-->
```

Lance le **mode présentateur** (icône 👤) → horloge, prochaines slides, notes visibles.

---
layout: default
---

## Auto-animate (transitions fluides)
Slidev anime automatiquement les différences entre 2 slides similaires :

```md
---
layout: default
---

# Stats
- Users: 100

---

---
layout: default
---

# Stats
- Users: 250
```

Quand nous passons de la première slide à la seconde, Slidev va animer la valeur au lieu de recharger la slide entière.

---
layout: default
---

## Thème & layout : où éditer ?
- **Couleurs / styles globaux** → `theme/styles/layout.css`  
- **Imports CSS thème** → `theme/styles/index.ts`  
- **Layouts custom** → `theme/layouts/*.vue`  
- **Helpers** → `theme/layoutHelper.ts`  

Exemple variables pour les couleurs **56k.cloud** :
```css
:root {
  --slidev-theme-primary: #fff;
  --slidev-theme-background: #021824;
  --slidev-theme-background-via: #043353;
  --slidev-theme-background-lightened: #0c5780;
}
```

---
layout: default
---

## Snippets utiles
Image + texte avec `two-cols` :
```md
---
layout: two-cols
---

::left::
<img src="/office-map.svg" style="max-width: 520px;" />

::right::
### Sites
- Sion
- Winterthur
```

Référence centrée (layout `reference`) :
```md
---
layout: reference
---
## Références
- Lien 1
```

---
layout: default
---

## Exporter / Builder
- **HTML statique** :  
```bash
npm run build
# sortie: ./dist
```

- **PDF** :  
```bash
npm run export
```

---
layout: default
---

## Raccourcis clavier
- `←` / `→` → naviguer  
- `f` → plein écran  
- `o` → overview  
- `g` → go to  
