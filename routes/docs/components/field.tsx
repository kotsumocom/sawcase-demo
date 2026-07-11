import { define } from "@/utils.ts";
import { render } from "@deno/gfm";
import fieldMd from "../../../docs/content/components/field.md";

export default define.page(function DocsField() {
  const html = render(fieldMd);

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
