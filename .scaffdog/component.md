---
name: "component"
root: "."
output: "."
ignore: []
questions:
  name: "component name"
  controller:
    confirm: "Do you need a controller?"
    initial: true
---

# Variables

- name: `{{ inputs.name | pascal }}`

# `./src/components/{{ name }}.astro`

```html
<div class="" {{ if inputs.controller }}x-data="{{ inputs.name | camel }}" {{ end }}></div>
```

# `{{ inputs.controller || "!" }}./src/controllers/{{ name }}.ts`

```ts
import type { AlpineComponent } from "alpinejs";

export default (): AlpineComponent<any> => {
  return {
    init() {
      console.log("init {{name}}");
    },
    destroy() {
      console.log("destroy {{name}}");
    },
  };
};
```
