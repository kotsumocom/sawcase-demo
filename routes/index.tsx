import { define } from "@/utils.ts";

export default define.page(function LandingPage() {
  return (
    <>
      {/* ヘッダー */}
      <header class="sc-lp-header">
        <div class="sc-lp-header__inner">
          <a href="/" class="sc-lp-header__brand">🪚 Sawcase</a>
          <nav class="sc-lp-header__nav">
            <a href="/docs">ドキュメント</a>
            <a href="/demo/admin">デモ</a>
            <a href="https://github.com/kotsumocom/sawcase" target="_blank" rel="noopener">GitHub</a>
          </nav>
        </div>
      </header>

      {/* ヒーロー */}
      <section class="sc-lp-hero">
        <div class="sc-lp-hero__inner">
          <h1 class="sc-lp-hero__headline">Sawcase</h1>
          <p class="sc-lp-hero__subhead">
            sawtooth-css の上に載るレイアウト CSS + 軽量 JS ライブラリ。<br />
            管理画面・ドキュメント・認証画面・LP の骨格をクラスベースで提供します。
          </p>
          <div class="sc-lp-hero__actions">
            <a href="/docs" class="st-button st-button--filled st-button--lg">
              ドキュメント →
            </a>
            <a href="/demo/admin" class="st-button st-button--outlined st-button--lg">
              デモを見る
            </a>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section class="sc-lp-features" id="features">
        <div class="sc-lp-features__grid">
          <div class="sc-lp-features__card">
            <div class="sc-lp-features__card-icon">📐</div>
            <h3 class="sc-lp-features__card-title">レイアウト専用</h3>
            <p class="sc-lp-features__card-description">
              コンポーネントは sawtooth-css に任せ、sawcase はページの「骨格」だけを担当。責務が明確。
            </p>
          </div>
          <div class="sc-lp-features__card">
            <div class="sc-lp-features__card-icon">🧩</div>
            <h3 class="sc-lp-features__card-title">クラスベース</h3>
            <p class="sc-lp-features__card-description">
              フレームワーク非依存。HTML にクラス名を付けるだけ。Fresh, Hono, 素の HTML で動作。
            </p>
          </div>
          <div class="sc-lp-features__card">
            <div class="sc-lp-features__card-icon">🤖</div>
            <h3 class="sc-lp-features__card-title">AI フレンドリー</h3>
            <p class="sc-lp-features__card-description">
              AGENT.md 付属。AI アシスタントがコピペ用テンプレートから即座にページを生成可能。
            </p>
          </div>
        </div>
      </section>

      {/* レイアウト一覧 */}
      <section class="sc-lp-section">
        <div class="sc-lp-section__inner" style="text-align:center;">
          <h2 class="sc-lp-section__title">提供レイアウト</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-top:24px;max-width:640px;margin-left:auto;margin-right:auto;">
            <a href="/demo/admin" style="text-decoration:none;color:inherit;padding:20px;border-radius:12px;background:var(--st-sys-color-surface-container-low,#f7f2fa);text-align:center;">
              <div style="font-size:1.5rem;margin-bottom:4px;">📊</div>
              <div style="font-weight:600;">管理画面</div>
              <div style="font-size:0.8125rem;color:#49454f;">sc-admin-*</div>
            </a>
            <a href="/demo/docs" style="text-decoration:none;color:inherit;padding:20px;border-radius:12px;background:var(--st-sys-color-surface-container-low,#f7f2fa);text-align:center;">
              <div style="font-size:1.5rem;margin-bottom:4px;">📖</div>
              <div style="font-weight:600;">ドキュメント</div>
              <div style="font-size:0.8125rem;color:#49454f;">sc-docs-*</div>
            </a>
            <a href="/demo/auth/login" style="text-decoration:none;color:inherit;padding:20px;border-radius:12px;background:var(--st-sys-color-surface-container-low,#f7f2fa);text-align:center;">
              <div style="font-size:1.5rem;margin-bottom:4px;">🔒</div>
              <div style="font-weight:600;">認証画面</div>
              <div style="font-size:0.8125rem;color:#49454f;">sc-auth</div>
            </a>
          </div>
        </div>
      </section>

      {/* インストール */}
      <section class="sc-lp-section">
        <div class="sc-lp-section__inner" style="text-align:center;">
          <h2 class="sc-lp-section__title">インストール</h2>
          <pre style="display:inline-block;text-align:left;background:#1e1e2e;color:#cdd6f4;padding:16px 24px;border-radius:12px;font-size:0.875rem;margin-top:16px;"><code>deno add @kotsumo/sawcase @kotsumo/sawtooth-css</code></pre>
        </div>
      </section>

      {/* フッター */}
      <footer class="sc-lp-footer">
        <div class="sc-lp-footer__inner">
          <div class="sc-lp-footer__copyright">
            © 2026 Kotsumo — <a href="https://github.com/kotsumocom/sawcase" class="sc-lp-footer__link">GitHub</a> · <a href="https://jsr.io/@kotsumo/sawcase" class="sc-lp-footer__link">JSR</a>
          </div>
        </div>
      </footer>
    </>
  );
});
