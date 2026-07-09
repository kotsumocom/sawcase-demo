import { define } from "@/utils.ts";

const CLASSES = [
  { prefix: "sc-admin-shell", desc: "全画面レイアウト (100vh, flex column)" },
  { prefix: "sc-admin-header", desc: "固定ヘッダー (sticky, 48px)" },
  { prefix: "sc-admin-nav", desc: "サイドナビ (デスクトップ=常時表示, モバイル=ドロワー)" },
  { prefix: "sc-admin-page", desc: "ページ構造 (--narrow, --wide, --full)" },
  { prefix: "sc-admin-stats", desc: "Stats カードグリッド" },
  { prefix: "sc-admin-overlay", desc: "モバイルオーバーレイ" },
  { prefix: "sc-docs-shell", desc: "ドキュメント全画面レイアウト" },
  { prefix: "sc-docs-header", desc: "ドキュメントヘッダー + トップナビ" },
  { prefix: "sc-docs-sidebar", desc: "左サイドバー (目次ナビ)" },
  { prefix: "sc-docs-article", desc: "記事本文 (prose スタイル)" },
  { prefix: "sc-docs-toc", desc: "右サイドバー (sticky TOC)" },
  { prefix: "sc-auth", desc: "認証画面 (中央配置)" },
  { prefix: "sc-empty", desc: "空状態表示" },
  { prefix: "sc-loading", desc: "ローディングスピナー" },
  { prefix: "sc-lp-header", desc: "LP ヘッダー" },
  { prefix: "sc-lp-hero", desc: "ヒーローセクション" },
  { prefix: "sc-lp-section", desc: "汎用セクション" },
  { prefix: "sc-lp-features", desc: "フィーチャーグリッド" },
  { prefix: "sc-lp-footer", desc: "フッター" },
];

export default define.page(function ReferencePage() {
  return (
    <article class="sc-docs-article">
      <h1>クラスリファレンス</h1>
      <p>
        sawcase で提供される全クラスの一覧です。
        すべてのクラスは <code>sc-</code> プレフィックスで始まります。
      </p>

      <table>
        <thead>
          <tr>
            <th>クラス名</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody>
          {CLASSES.map((c) => (
            <tr key={c.prefix}>
              <td>
                <code>{c.prefix}</code>
              </td>
              <td>{c.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
});
