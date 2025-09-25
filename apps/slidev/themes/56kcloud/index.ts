import "./styles/index.ts";

import Cover from "./layouts/cover.vue";
import Hero56k from "./layouts/hero-56k.vue";
import Intro from "./layouts/intro.vue";
import Reference from "./layouts/reference.vue";

export const layouts = {
  cover: Cover,
  "hero-56k": Hero56k,
  intro: Intro,
  reference: Reference,
};

export default { layouts };
