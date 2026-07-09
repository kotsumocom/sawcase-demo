import { define } from "@/utils.ts";

const NAV_ITEMS = [
  {
    group: "はじめに",
    items: [
      { href: "/docs", label: "概要" },
      { href: "/docs/install", label: "インストール" },
    ],
  },
  {
    group: "リファレンス",
    items: [
      { href: "/docs/reference", label: "クラスリファレンス" },
    ],
  },
];

export default define.page(function DocsLayout({ Component, url }) {
  return (
    <div class="sc-docs-shell">
      {/* ヘッダー */}
      <header class="sc-docs-header">
        <div class="sc-docs-header__inner">
          <a href="/" class="sc-docs-header__brand">🪚 Sawcase</a>
          <nav class="sc-docs-header__nav">
            <a href="/docs" class={url.pathname === "/docs" ? "sc-docs-header__link--active" : ""}>
              ドキュメント
            </a>
            <a href="/demo/admin">デモ</a>
            <a
              href="https://github.com/kotsumocom/sawcase"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <div class="sc-docs-body">
        {/* サイドバー */}
        <aside class="sc-docs-sidebar">
          {NAV_ITEMS.map((group) => (
            <div class="sc-docs-sidebar__group" key={group.group}>
              <div class="sc-docs-sidebar__group-label">{group.group}</div>
              {group.items.map((item) => (
                <a
                  href={item.href}
                  class={`sc-docs-sidebar__link${url.pathname === item.href ? " sc-docs-sidebar__link--active" : ""}`}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </aside>

        {/* 記事本文 */}
        <main class="sc-docs-content">
          <Component />
        </main>
      </div>
    </div>
  );
});
