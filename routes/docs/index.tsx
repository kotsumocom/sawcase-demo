import { define } from "@/utils.ts";
import { render } from "@deno/gfm";
import overviewMd from "../../docs/content/overview.md?raw";

export default define.page(function DocsOverview() {
  const html = render(overviewMd);

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
