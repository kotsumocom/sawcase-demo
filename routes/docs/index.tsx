import { define } from "@/utils.ts";
import { render } from "@deno/gfm";

export default define.page(async function DocsOverview() {
  const filePath = new URL("../../docs/content/overview.md", import.meta.url);
  const md = await Deno.readTextFile(filePath);
  const html = render(md);

  return (
    <article class="sc-docs-article">
      <div
        class="markdown-body"
        data-color-mode="light"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
});
