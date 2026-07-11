import { define } from "@/utils.ts";
import { render } from "@deno/gfm";
import buttonMd from "../../../docs/content/components/button.md";

export default define.page(function DocsButton() {
  const html = render(buttonMd);

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
