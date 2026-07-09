import { define } from "@/utils.ts";

export default define.page(function InstallPage() {
  return (
    <article class="sc-docs-article">
      <h1>インストール</h1>
      <p>sawcase は JSR から Deno プロジェクトに追加できます。</p>

      <h2 id="deno">Deno プロジェクト</h2>
      <pre><code>{`deno add @kotsumo/sawcase @kotsumo/sawtooth-css`}</code></pre>

      <h2 id="generate">CSS の生成</h2>
      <p>Fresh プロジェクトの <code>generate.ts</code> に以下を記述します：</p>
      <pre><code>{`import { generateSawcaseCSS } from "@kotsumo/sawcase/generate";

await generateSawcaseCSS({
  output: "./static/sawcase.css",
  jsOutput: "./static/sawcase.js",
  sawtooth: { output: "./static/sawtooth.css" },
});`}</code></pre>

      <h2 id="html">HTML への読み込み</h2>
      <p>Fresh の <code>routes/_app.tsx</code> で CSS と JS を読み込みます：</p>
      <pre><code>{`<head>
  <link rel="stylesheet" href="/sawtooth.css" />
  <link rel="stylesheet" href="/sawcase.css" />
</head>
<body>
  {/* ... */}
  <script src="/sawcase.js"></script>
</body>`}</code></pre>

      <h2 id="usage">基本的な使い方</h2>
      <p>クラス名をHTMLに付与するだけでレイアウトが完成します：</p>
      <pre><code>{`<div class="sc-admin-shell">
  <header class="sc-admin-header">...</header>
  <div class="sc-admin-body">
    <nav class="sc-admin-nav">...</nav>
    <main class="sc-admin-content">...</main>
  </div>
</div>`}</code></pre>
    </article>
  );
});
