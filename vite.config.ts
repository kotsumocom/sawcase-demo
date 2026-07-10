import { defineConfig, type Plugin } from "vite";
import { fresh } from "@fresh/plugin-vite";

/** .md ファイルを raw テキストとしてインポートするプラグイン */
function rawMarkdown(): Plugin {
  return {
    name: "raw-markdown",
    transform(code, id) {
      if (id.endsWith(".md")) {
        return {
          code: `export default ${JSON.stringify(code)};`,
          map: null,
        };
      }
    },
  };
}

export default defineConfig({
  plugins: [fresh(), rawMarkdown()],
});
