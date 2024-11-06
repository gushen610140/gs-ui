import {defineConfig} from "vite";

export default defineConfig(() => {
  return {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@gs-ui/theme/index.scss"`
        }
      }
    }
  }
})
