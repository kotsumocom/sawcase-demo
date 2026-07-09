import { define } from "@/utils.ts";

export default define.page(function DocsIndexPage() {
  return (
    <article class="sc-docs-article">
      <h1>Sawcase とは</h1>
      <p>
        <strong>Sawcase</strong>{" "}は{" "}
        <a href="https://github.com/kotsumocom/sawtooth-css">sawtooth-css</a>{" "}
        の上に載るレイアウト CSS + 軽量 JS ライブラリです。
      </p>
      <p>
        管理画面、ドキュメントサイト、認証画面、ランディングページなど、
        プロダクトに必要な「骨格」をクラスベースで提供します。
      </p>

      <h2 id="philosophy">設計思想</h2>
      <ul>
        <li><strong>CSS のみ</strong>: JavaScript を最小限に抑え、クラス名だけでレイアウトを実現</li>
        <li><strong>コンポジション</strong>: sawtooth-css のコンポーネントと自由に組み合わせ可能</li>
        <li><strong>レスポンシブ</strong>: モバイルファースト設計</li>
        <li><strong>AI フレンドリー</strong>: AGENT.md で AI アシスタントがテンプレートをコピペ可能</li>
      </ul>

      <h2 id="layouts">提供レイアウト</h2>
      <table>
        <thead>
          <tr>
            <th>プレフィックス</th>
            <th>カテゴリ</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>sc-admin-*</code></td>
            <td>管理画面</td>
            <td>ヘッダー + サイドナビ + ページ構造</td>
          </tr>
          <tr>
            <td><code>sc-docs-*</code></td>
            <td>ドキュメント</td>
            <td>3カラムレイアウト + TOC</td>
          </tr>
          <tr>
            <td><code>sc-auth</code></td>
            <td>認証</td>
            <td>中央配置カード</td>
          </tr>
          <tr>
            <td><code>sc-lp-*</code></td>
            <td>LP (β)</td>
            <td>ヒーロー + フィーチャー + フッター</td>
          </tr>
        </tbody>
      </table>

      <h2 id="quick-start">クイックスタート</h2>
      <pre><code>{`deno add @kotsumo/sawcase @kotsumo/sawtooth-css`}</code></pre>
      <p>
        詳しくは <a href="/docs/install">インストール手順</a> を参照してください。
      </p>
    </article>
  );
});
