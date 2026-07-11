import { define } from "@/utils.ts";
import { render } from "@deno/gfm";
import alertMd from "../../../docs/content/components/alert.md";

export default define.page(function DocsAlert() {
  const html = render(alertMd);

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
