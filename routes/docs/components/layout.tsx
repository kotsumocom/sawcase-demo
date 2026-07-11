import { define } from "@/utils.ts";
import { render } from "@deno/gfm";
import layoutMd from "../../../docs/content/components/layout.md";

export default define.page(function DocsLayout() {
  const html = render(layoutMd);

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
