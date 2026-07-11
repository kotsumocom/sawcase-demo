import { define } from "@/utils.ts";
import { render } from "@deno/gfm";
import inputMd from "../../../docs/content/components/input.md";

export default define.page(function DocsInput() {
  const html = render(inputMd);

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
