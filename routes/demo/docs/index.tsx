import { define } from "@/utils.ts";

export default define.page(function DemoDocsPage() {
  return (
    <div class="sc-docs-shell">
      <header class="sc-docs-header">
        <div class="sc-docs-header__inner">
          <span class="sc-docs-header__brand" style="font-weight:700;letter-spacing:-0.02em;">Demo Docs</span>
          <nav class="sc-docs-header__nav">
            <a href="/demo/docs">ドキュメント</a>
            <a href="/demo/admin">管理画面デモ</a>
          </nav>
        </div>
      </header>

      <div class="sc-docs-body">
        <aside class="sc-docs-sidebar">
          <div class="sc-docs-sidebar__group">
            <div class="sc-docs-sidebar__group-label">ガイド</div>
            <a href="/demo/docs" class="sc-docs-sidebar__link sc-docs-sidebar__link--active">はじめに</a>
            <a href="/demo/docs" class="sc-docs-sidebar__link">チュートリアル</a>
          </div>
          <div class="sc-docs-sidebar__group">
            <div class="sc-docs-sidebar__group-label">API</div>
            <a href="/demo/docs" class="sc-docs-sidebar__link">設定</a>
            <a href="/demo/docs" class="sc-docs-sidebar__link">プラグイン</a>
          </div>
        </aside>

        <main class="sc-docs-content">
          <article class="sc-docs-article">
            <h1>ドキュメントレイアウトのデモ</h1>
            <p>
              これは <code>sc-docs-*</code> クラスを使ったドキュメントレイアウトのデモです。
              左にサイドバー、中央に記事本文が表示されます。
            </p>

            <h2 id="structure">レイアウト構造</h2>
            <p>ドキュメントレイアウトは以下のクラスで構成されます：</p>
            <ul>
              <li><code>sc-docs-shell</code> — 全体のコンテナ</li>
              <li><code>sc-docs-header</code> — トップヘッダー + ナビゲーション</li>
              <li><code>sc-docs-sidebar</code> — 左サイドバー（目次ナビ）</li>
              <li><code>sc-docs-article</code> — 記事本文（prose スタイル）</li>
              <li><code>sc-docs-toc</code> — 右 TOC（オプション）</li>
            </ul>

            <h2 id="code">コード例</h2>
            <pre><code>{`<div class="sc-docs-shell">
  <header class="sc-docs-header">...</header>
  <div class="sc-docs-body">
    <aside class="sc-docs-sidebar">...</aside>
    <main class="sc-docs-content">
      <article class="sc-docs-article">...</article>
    </main>
  </div>
</div>`}</code></pre>

            <h2 id="table">テーブル表示</h2>
            <table>
              <thead>
                <tr><th>クラス</th><th>説明</th></tr>
              </thead>
              <tbody>
                <tr><td><code>sc-docs-shell</code></td><td>全画面レイアウト</td></tr>
                <tr><td><code>sc-docs-header</code></td><td>ヘッダー + トップナビ</td></tr>
                <tr><td><code>sc-docs-sidebar</code></td><td>左サイドバー</td></tr>
                <tr><td><code>sc-docs-article</code></td><td>記事本文</td></tr>
              </tbody>
            </table>
          </article>
        </main>
      </div>
    </div>
  );
});
