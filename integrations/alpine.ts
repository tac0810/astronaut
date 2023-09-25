import type { AstroIntegration } from "astro";

// https://github.com/withastro/astro/blob/main/packages/integrations/alpinejs/src/index.ts
export default function createPlugin(): AstroIntegration {
  return {
    name: "astronaut/alpinejs",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        injectScript(
          "page",
          `
					import Alpine from 'alpinejs';
					import controllers from '@controllers/index';
					
					Alpine.plugin(controllers); 
					
					window.Alpine = Alpine; 
					Alpine.start();
					`,
        );
      },
    },
  };
}
