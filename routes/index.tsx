import { define } from "@/utils.ts";
import CopyButton from "../islands/CopyButton.tsx";

// Lucide SVG icons (inline)
const IconRuler = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
    <path d="m14.5 12.5 2-2" /><path d="m11.5 9.5 2-2" /><path d="m8.5 6.5 2-2" /><path d="m17.5 15.5 2-2" />
  </svg>
);
const IconPuzzle = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.342.918-.288.47.074.802.483.968.925a2.501 2.501 0 1 0 3.214-3.214c-.443-.166-.852-.498-.925-.968a.979.979 0 0 1 .288-.918l1.526-1.526A2.402 2.402 0 0 1 11.924 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.968 1.02Z" />
  </svg>
);
const IconBot = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
  </svg>
);
const IconLayoutDashboard = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);
const IconFileText = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 13H8" /><path d="M16 17H8" /><path d="M16 13h-2" />
  </svg>
);
const IconLock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const IconScale = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
);
const IconAlertCircle = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" />
  </svg>
);
const IconCreditCard = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" />
  </svg>
);

export default define.page(function LandingPage() {
  return (
    <div class="sol-theme">
      {/* ヘッダー */}
      <header class="sc-lp-header">
        <div class="sc-lp-header__inner">
          <a href="/" class="sc-lp-header__brand" style="font-weight:700;letter-spacing:-0.02em;">Sawcase</a>
          <nav class="sc-lp-header__nav">
            <a href="/docs">ドキュメント</a>
            <a href="/demo/admin" target="_blank" rel="noopener">デモ</a>
            <a href="https://github.com/kotsumocom/sawcase" target="_blank" rel="noopener">GitHub</a>
          </nav>
        </div>
      </header>

      {/* ヒーロー */}
      <section class="sc-lp-hero">
        <div class="sc-lp-hero__inner">
          <h1 class="sc-lp-hero__headline">Sawcase</h1>
          <p class="sc-lp-hero__subhead">
            Deno Fresh 専用の SaaS スターターキット。<br />
            管理画面・ドキュメント・認証画面の骨格を Preact コンポーネントで提供します。
          </p>
          <div class="sc-lp-hero__actions">
            <a href="/docs" class="st-button st-button--filled st-button--lg">
              ドキュメント
            </a>
            <a href="/demo/admin" target="_blank" rel="noopener" class="st-button st-button--outlined st-button--lg">
              デモを見る
            </a>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section class="sc-lp-features" id="features">
        <div class="sc-lp-features__grid">
          <div class="sc-lp-features__card">
            <div class="sc-lp-features__card-icon" style="color:var(--sol-blue);"><IconRuler /></div>
            <h3 class="sc-lp-features__card-title">レイアウト専用</h3>
            <p class="sc-lp-features__card-description">
              コンポーネントは sawtooth-css に任せ、sawcase はページの「骨格」だけを担当。責務が明確。
            </p>
          </div>
          <div class="sc-lp-features__card">
            <div class="sc-lp-features__card-icon" style="color:var(--sol-cyan);"><IconPuzzle /></div>
            <h3 class="sc-lp-features__card-title">Fresh 専用</h3>
            <p class="sc-lp-features__card-description">
              Deno Fresh に最適化。Preact コンポーネントとして提供。deno add だけで即使える。
            </p>
          </div>
          <div class="sc-lp-features__card">
            <div class="sc-lp-features__card-icon" style="color:var(--sol-violet);"><IconBot /></div>
            <h3 class="sc-lp-features__card-title">AI フレンドリー</h3>
            <p class="sc-lp-features__card-description">
              AGENT.md 付属。AI アシスタントがテンプレートから即座にページを生成可能。
            </p>
          </div>
        </div>
      </section>

      {/* レイアウト一覧 */}
      <section class="sc-lp-section">
        <div class="sc-lp-section__inner" style="text-align:center;">
          <h2 class="sc-lp-section__title">提供レイアウト</h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px;margin-top:24px;max-width:900px;margin-left:auto;margin-right:auto;">
            <a href="/demo/admin" target="_blank" rel="noopener" class="layout-card">
              <div style="margin-bottom:6px;color:var(--sol-blue);"><IconLayoutDashboard /></div>
              <div class="layout-card__title">管理画面</div>
              <div class="layout-card__code">sc-admin-*</div>
            </a>
            <a href="/demo/docs" target="_blank" rel="noopener" class="layout-card">
              <div style="margin-bottom:6px;color:var(--sol-cyan);"><IconFileText /></div>
              <div class="layout-card__title">ドキュメント</div>
              <div class="layout-card__code">sc-docs-*</div>
            </a>
            <a href="/demo/auth/login" target="_blank" rel="noopener" class="layout-card">
              <div style="margin-bottom:6px;color:var(--sol-green);"><IconLock /></div>
              <div class="layout-card__title">認証画面</div>
              <div class="layout-card__code">sc-auth</div>
            </a>
            <a href="/demo/legal" target="_blank" rel="noopener" class="layout-card">
              <div style="margin-bottom:6px;color:var(--sol-violet);"><IconScale /></div>
              <div class="layout-card__title">規約ページ</div>
              <div class="layout-card__code">sc-legal-*</div>
            </a>
            <a href="/demo/error" target="_blank" rel="noopener" class="layout-card">
              <div style="margin-bottom:6px;color:var(--sol-orange);"><IconAlertCircle /></div>
              <div class="layout-card__title">エラー</div>
              <div class="layout-card__code">sc-error-*</div>
            </a>
            <a href="/demo/pricing" target="_blank" rel="noopener" class="layout-card">
              <div style="margin-bottom:6px;color:var(--sol-yellow);"><IconCreditCard /></div>
              <div class="layout-card__title">料金</div>
              <div class="layout-card__code">sc-pricing-*</div>
            </a>
          </div>
        </div>
      </section>

      {/* インストール */}
      <section class="sc-lp-section">
        <div class="sc-lp-section__inner" style="text-align:center;">
          <h2 class="sc-lp-section__title">インストール</h2>
          <div style="display:inline-flex;align-items:center;gap:12px;background:var(--sol-base02);padding:12px 20px;border-radius:8px;margin-top:16px;">
            <code style="color:var(--sol-base1);font-size:0.875rem;">deno add @kotsumo/sawcase</code>
            <CopyButton value="deno add @kotsumo/sawcase" />
          </div>
          <p style="font-size:0.8125rem;color:var(--sol-base00);margin-top:8px;">
            sawtooth-css, @deno/gfm, Zag.js, lucide-preact は依存として自動インストールされます
          </p>
        </div>
      </section>

      {/* フッター */}
      <footer class="sc-lp-footer">
        <div class="sc-lp-footer__inner">
          <div class="sc-lp-footer__copyright">
            Kotsumo —{" "}
            <a href="https://github.com/kotsumocom/sawcase" target="_blank" rel="noopener" class="sc-lp-footer__link">GitHub</a>
            {" · "}
            <a href="https://jsr.io/@kotsumo/sawcase" target="_blank" rel="noopener" class="sc-lp-footer__link">JSR</a>
          </div>
        </div>
      </footer>
    </div>
  );
});
