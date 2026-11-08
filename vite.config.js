import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const NOME_DO_REPO = "PFE-2026-2-Grupo-1-React";

function copiar404() {
  return {
    name: "copiar-index-para-404",
    closeBundle() {
      copyFileSync(resolve("dist/index.html"), resolve("dist/404.html"));
    },
  };
}

export default defineConfig({
  base: `/${NOME_DO_REPO}/`,
  plugins: [react(), copiar404()],
});
