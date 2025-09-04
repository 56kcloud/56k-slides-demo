import './styles/index.css'

export const layouts = {
  default: () => import('./layouts/default.vue'),
  cover: () => import('./layouts/cover.vue'),
  reference: () => import('./layouts/reference.vue'),
  'hero-56k': () => import('./layouts/hero-56k.vue'),
}
export default { layouts }
