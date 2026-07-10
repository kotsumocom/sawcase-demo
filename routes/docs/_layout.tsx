import { define } from "@/utils.ts";
import { CSS } from "@deno/gfm";

const NAV_ITEMS = [
  {
    group: "はじめに",
    items: [
      { href: "/docs", slug: "overview", label: "概要" },
      { href: "/docs/install", slug: "install", label: "インストール" },
    ],
  },
  {
    group: "リファレンス",
    items: [
      { href: "/docs/reference", slug: "reference", label: "クラスリファレンス" },
    ],
  },
];

export default define.page(function DocsLayout({ Component, url }) {
  const pathParts = url.pathname.split("/").filter(Boolean);
  const slug = pathParts.length > 1 ? pathParts[pathParts.length - 1] : "overview";

  return (
    <div class="sol-theme">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div class="sc-docs-shell">
        <header class="sc-docs-header">
          <div class="sc-docs-header__inner">
            <a href="/" class="sc-docs-header__brand" style="font-weight:700;letter-spacing:-0.02em;text-decoration:none;">Sawcase</a>
            <nav class="sc-docs-header__nav">
              <a href="/docs" class="sc-docs-header__link">ドキュメント</a>
              <a href="/demo/admin" class="sc-docs-header__link" target="_blank" rel="noopener">デモ</a>
              <a href="https://github.com/kotsumocom/sawcase" class="sc-docs-header__link" target="_blank" rel="noopener">GitHub</a>
            </nav>
          </div>
        </header>

        <div class="sc-docs-body">
          <aside class="sc-docs-sidebar">
            {NAV_ITEMS.map((group) => (
              <div class="sc-docs-sidebar__group" key={group.group}>
                <div class="sc-docs-sidebar__group-label">{group.group}</div>
                {group.items.map((item) => (
                  <a
                    href={item.href}
                    class={`sc-docs-sidebar__link${slug === item.slug ? " sc-docs-sidebar__link--active" : ""}`}
                    key={item.href}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </aside>

          <main class="sc-docs-content">
            <Component />
          </main>
        </div>
      </div>
    </div>
  );
});
