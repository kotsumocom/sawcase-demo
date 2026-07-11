import { define } from "@/utils.ts";
import { CSS } from "@deno/gfm";
import { DocsSidebarGroup } from "@/components/DocsSidebarGroup.tsx";

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
  {
    group: "UIコンポーネント",
    items: [
      { href: "/docs/components/button", slug: "button", label: "Button" },
      { href: "/docs/components/card", slug: "card", label: "Card" },
      { href: "/docs/components/badge", slug: "badge", label: "Badge" },
      { href: "/docs/components/alert", slug: "alert", label: "Alert" },
      { href: "/docs/components/input", slug: "input", label: "Input / Textarea" },
      { href: "/docs/components/field", slug: "field", label: "Field" },
      { href: "/docs/components/layout", slug: "layout", label: "レイアウト" },
    ],
  },
];

export default define.page(function DocsLayout({ Component, url }) {
  const pathParts = url.pathname.split("/").filter(Boolean);
  // /docs → "overview", /docs/install → "install", /docs/components/button → "button"
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
              <DocsSidebarGroup label={group.group} key={group.group}>
                {group.items.map((item) => (
                  <a
                    href={item.href}
                    class={`sc-docs-sidebar__link${slug === item.slug ? " sc-docs-sidebar__link--active" : ""}`}
                    key={item.href}
                  >
                    {item.label}
                  </a>
                ))}
              </DocsSidebarGroup>
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
