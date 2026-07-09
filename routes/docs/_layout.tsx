import { define } from "@/utils.ts";
import { CSS, render } from "@deno/gfm";

const SLUG_MAP: Record<string, { file: string; label: string }> = {
  overview: { file: "overview.md", label: "概要" },
  install: { file: "install.md", label: "インストール" },
  reference: { file: "reference.md", label: "クラスリファレンス" },
};

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

async function loadMarkdown(slug: string): Promise<string> {
  const entry = SLUG_MAP[slug];
  if (!entry) return render("# 404\n\nページが見つかりませんでした。");
  const filePath = new URL(`../../docs/content/${entry.file}`, import.meta.url);
  const md = await Deno.readTextFile(filePath);
  return render(md);
}

export default define.page(function DocsLayout({ Component, url }) {
  const pathParts = url.pathname.split("/").filter(Boolean);
  const slug = pathParts.length > 1 ? pathParts[pathParts.length - 1] : "overview";

  return (
    <div class="sol-theme">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div class="sc-docs-shell">
        <header class="sc-docs-header">
          <div class="sc-docs-header__inner">
            <a href="/" class="sc-docs-header__brand" style="font-weight:700;letter-spacing:-0.02em;">Sawcase</a>
            <nav class="sc-docs-header__nav">
              <a href="/docs">ドキュメント</a>
              <a href="/demo/admin" target="_blank" rel="noopener">デモ</a>
              <a href="https://github.com/kotsumocom/sawcase" target="_blank" rel="noopener">GitHub</a>
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
