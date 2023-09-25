import type { AstroIntegration } from "astro";

// https://github.com/withastro/astro/blob/main/packages/integrations/alpinejs/src/index.ts
export default function createPlugin(): AstroIntegration {
  return {
    name: "astronaut/meta",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        injectScript(
          "page",
          `
						if (import.meta.env.DEV) {
							console.log({
								BASE_URL: import.meta.env.BASE_URL,
								PROD: import.meta.env.PROD,
								DEV: import.meta.env.DEV,
							});
						}
					`,
        );
      },
    },
  };
}
