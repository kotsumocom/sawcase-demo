import { define } from "@/utils.ts";
import { render } from "@deno/gfm";
import referenceMd from "../../docs/content/reference.md";

export default define.page(function DocsReference() {
  const html = render(referenceMd);

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
