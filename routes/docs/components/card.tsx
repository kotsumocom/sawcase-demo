import { define } from "@/utils.ts";
import { render } from "@deno/gfm";
import cardMd from "../../../docs/content/components/card.md";

export default define.page(function DocsCard() {
  const html = render(cardMd);

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
