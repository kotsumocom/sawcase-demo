import { define } from "@/utils.ts";
import { render } from "@deno/gfm";
import installMd from "../../docs/content/install.md";

export default define.page(function DocsInstall() {
  const html = render(installMd);

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
