import { define } from "@/utils.ts";
import { render } from "@deno/gfm";
import badgeMd from "../../../docs/content/components/badge.md";

export default define.page(function DocsBadge() {
  const html = render(badgeMd);

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
