---
name: "controller"
root: "."
output: "."
ignore: []
questions:
  name: "controller name"
---

# Variables

- name: `{{ inputs.name | pascal }}`

# `./src/controllers/{{ name }}.ts`

```tsx
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
