import type { AlpineComponent } from "alpinejs";

export default (): AlpineComponent<any> => {
  return {
    init() {
      console.log("init card");
    },
  };
};
