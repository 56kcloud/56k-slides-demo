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
A Slidev demo with layout & custom theme

---
layout: hero-56k
class: text-left
---

# Why Slidev?
- Written in **Markdown**
- Engine **Vite + Vue 3**
- Extensible (layouts, components, themes)
- Export **static** 🔥

---
layout: default
---

## Custom Layout — `hero-56k`
Use the `hero-56k` layout for a "hero" slide with a header, footer, and logo badge.

---
layout: default
---

## References
- [Write a layout](https://sli.dev/guide/write-layout)
- [Create a theme](https://sli.dev/guide/write-theme)
- [Deploy AWS S3 + CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html)

---
layout: cover
class: text-center
---

# Understanding Slidev
Let's see the main features ✨

---
layout: default
---

# Writing in Markdown
Slidev is based on **Markdown**:
- Titles with `#`
- Lists with `-` or `*`
- Formatting **bold**, *italic*, `code`
- Code blocks with \`\`\`lang (ex: \`\`\`js)

::right::
```md
# A H1 title
## A H2 title

- A list item
- Another item

**Bold**, *italic*, `inline code`
```

```js
console.log("hello world")
```

---
layout: default
---

## Built-in & Custom Layouts
We can choose a layout **per slide** via the frontmatter.

- `cover` → intro page  
- `default` → classic text  
- `two-cols` → 2 columns with slots  
- `image` → full screen image  
- `reference` → your custom reference layout  
- **`hero-56k`** → example of custom layout  

```md
---
layout: default
---

::left::
Left column content

::right::
Right column content
```

---
layout: default
---

# Image Slide
Tip: use **absolute paths** `/...` (for example if located in `public/`).

```md
---
layout: image
image: /path/to/image.png
backgroundSize: contain
---
```

---
layout: default
---

## Vue Components (Vue 3 inside)
We can include **Vue components** directly in your slides.

Example usage:
```vue
<Counter :start="5" />
```

Component `components/Counter.vue`:
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

## Slide Transitions
**Global transition** (in the project's frontmatter):
```yaml
transition: slide-left
```

**Per slide transition**:
```md
---
transition: fade
---
Slide content
```

---
layout: default
---

## Speaker Notes & Presenter Mode
Add **notes** invisible to the audience:

```md
---
layout: default
---

# My slide
An important point

<!--
notes:
- Mention the live demo
- Max time: 2 min
-->
```

Launch **presenter mode** (👤 icon) → timer, next slides, notes visible.

---
layout: default
---

## Auto-animate (smooth transitions)
Slidev automatically animates the differences between 2 similar slides:

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

When going from the first slide to the second, Slidev will animate the value instead of reloading the entire slide.

---
layout: default
---

## Theme & Layout: where to edit?
- **Colors / global styles** → `theme/styles/layout.css`  
- **Theme CSS imports** → `theme/styles/index.ts`  
- **Custom layouts** → `theme/layouts/*.vue`  
- **Helpers** → `theme/layoutHelper.ts`  

Example variables for **56k.cloud** colors:
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

## Useful Snippets
Image + text with `two-cols`:
```md
---
layout: two-cols
---

::left::
<img src="/office-map.svg" style="max-width: 520px;" />

::right::
### Locations
- Sion
- Winterthur
```

Centered reference (layout `reference`):
```md
---
layout: reference
---
## References
- Link 1
```

---
layout: default
---

## Export / Build
- **Static HTML**:
```bash
npm run build
# output: ./dist
```

- **PDF**:
```bash
npm run export
```

---
layout: default
---

## Keyboard Shortcuts
- `←` / `→` → navigate  
- `f` → fullscreen  
- `o` → overview  
- `g` → go to  
