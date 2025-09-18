---
title: "56k Slides Demo"
theme: ../../theme
layout: cover
class: text-center
fonts:
  sans: Inter
  mono: Fira Code
transition: slide-left
mdc: true
---

# {{ $t('cover.title') }}
{{ $t('cover.subtitle') }}

---
layout: hero-56k
class: text-left
---

# {{ $t('why.title') }}
<ul>
  <li v-for="p in $tm('why.points')" :key="p">{{ p }}</li>
</ul>

---
layout: default
---

## {{ $t('heroSection.title') }}
{{ $t('heroSection.description') }}

---
layout: reference
---

## {{ $t('references.title') }}
<ul>
  <li v-for="item in $tm('references.items')" :key="item.label">
    <a :href="item.url" target="_blank" rel="noreferrer">{{ item.label }}</a>
  </li>
</ul>

---
layout: cover
class: text-center
---

# {{ $t('intro.title') }}
{{ $t('intro.subtitle') }}

---
layout: two-cols
---

# {{ $t('markdown.title') }}
<ul>
  <li v-for="p in $tm('markdown.points')" :key="p">{{ p }}</li>
</ul>

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

## {{ $t('layoutsSection.title') }}
<ul>
  <li v-for="p in $tm('layoutsSection.builtin')" :key="p">{{ p }}</li>
</ul>

```md
---
layout: two-cols
---

::left::
Contenu colonne gauche

::right::
Contenu colonne droite
```

---
layout: image
backgroundSize: contain
---

# {{ $t('imageSlide.title') }}
{{ $t('imageSlide.tip') }}

```md
---
layout: image
backgroundSize: contain
---
```

---
layout: default
---

## {{ $t('vueComponents.title') }}
{{ $t('vueComponents.description') }}

```vue
<Counter :start="5" />
```

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

## {{ $t('transitions.title') }}
```yaml
transition: slide-left
```

```md
---
transition: fade
---
Contenu du slide
```

---
layout: default
---

## {{ $t('notes.title') }}
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

---
layout: default
---

## {{ $t('autoAnimate.title') }}
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

{{ $t('autoAnimate.description') }}

---
layout: default
---

## {{ $t('themeEdit.title') }}
<ul>
  <li v-for="p in $tm('themeEdit.items')" :key="p">{{ p }}</li>
</ul>

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

## {{ $t('snippets.title') }}
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

```md
---
layout: reference
logo: /references/logo-56kcloud.svg
image: /references/iot.jpg
---
## Références
- Lien 1
```

---
layout: default
---

## {{ $t('export.title') }}
```bash
npm run build
# ./dist
```

```bash
npm run export
```

---
layout: default
---

## {{ $t('shortcuts.title') }}
<ul>
  <li v-for="p in $tm('shortcuts.items')" :key="p">{{ p }}</li>
</ul>
