import { define } from "@/utils.ts";

export default define.page(function LandingPage() {
  return (
    <>
      {/* ヘッダー */}
      <header class="sc-lp-header">
        <div class="sc-lp-header__inner">
          <a href="/" class="sc-lp-header__brand">🪚 Sawcase</a>
          <nav class="sc-lp-header__nav">
            <a href="#features">機能</a>
            <a href="/docs">ドキュメント</a>
            <a href="/admin">管理画面デモ</a>
          </nav>
          <div class="sc-lp-header__cta">
            <a href="/auth/login" class="st-button st-button--filled">ログイン</a>
          </div>
        </div>
      </header>

      {/* ヒーロー */}
      <section class="sc-lp-hero">
        <div class="sc-lp-hero__inner">
          <h1 class="sc-lp-hero__headline">
            美しい管理画面を<br />最速で構築する
          </h1>
          <p class="sc-lp-hero__subhead">
            Sawcase は sawtooth-css の上に載るレイアウト CSS + 軽量 JS
            ライブラリ。管理画面・ドキュメント・LP の骨格をクラスベースで提供します。
          </p>
          <div class="sc-lp-hero__actions">
            <a href="/admin" class="st-button st-button--filled st-button--lg">
              管理画面デモ →
            </a>
            <a href="/docs" class="st-button st-button--outlined st-button--lg">
              ドキュメント
            </a>
          </div>
        </div>
      </section>

      {/* フィーチャー */}
      <section class="sc-lp-features" id="features">
        <div style="text-align:center;margin-bottom:40px;">
          <h2 style="font-size:2rem;font-weight:700;margin:0 0 8px;">
            3つのレイアウト
          </h2>
          <p style="color:#49454f;max-width:36rem;margin:0 auto;">
            プロダクトに必要な画面をすべてカバー
          </p>
        </div>
        <div class="sc-lp-features__grid">
          <a href="/admin" class="sc-lp-features__card" style="text-decoration:none;color:inherit;">
            <div class="sc-lp-features__card-icon">📊</div>
            <h3 class="sc-lp-features__card-title">管理画面</h3>
            <p class="sc-lp-features__card-description">
              ヘッダー + サイドナビ + ページ構造。ダッシュボード、CRUD、設定画面に対応。レスポンシブ対応のドロワーナビ付き。
            </p>
          </a>
          <a href="/docs" class="sc-lp-features__card" style="text-decoration:none;color:inherit;">
            <div class="sc-lp-features__card-icon">📖</div>
            <h3 class="sc-lp-features__card-title">ドキュメント</h3>
            <p class="sc-lp-features__card-description">
              3カラムレイアウト。左サイドバー + 記事本文 + 右 TOC。スクロール追従、コードブロック、テーブルのスタイリング。
            </p>
          </a>
          <a href="/auth/login" class="sc-lp-features__card" style="text-decoration:none;color:inherit;">
            <div class="sc-lp-features__card-icon">🔒</div>
            <h3 class="sc-lp-features__card-title">認証画面</h3>
            <p class="sc-lp-features__card-description">
              中央配置の認証カード。ログイン、サインアップ、パスワードリセットに対応。
            </p>
          </a>
        </div>
      </section>

      {/* テクスタック */}
      <section class="sc-lp-section">
        <div class="sc-lp-section__inner" style="text-align:center;">
          <h2 class="sc-lp-section__title">技術スタック</h2>
          <p class="sc-lp-section__subtitle">
            Deno Fresh + Preact + Zag.js と完璧に統合
          </p>
          <div style="display:flex;justify-content:center;gap:32px;flex-wrap:wrap;margin-top:24px;">
            <div style="text-align:center;">
              <div style="font-size:2.5rem;margin-bottom:8px;">🦕</div>
              <div style="font-weight:600;">Deno Fresh</div>
              <div style="font-size:0.875rem;color:#49454f;">SSR + Islands</div>
            </div>
            <div style="text-align:center;">
              <div style="font-size:2.5rem;margin-bottom:8px;">⚛️</div>
              <div style="font-weight:600;">Preact</div>
              <div style="font-size:0.875rem;color:#49454f;">軽量 UI</div>
            </div>
            <div style="text-align:center;">
              <div style="font-size:2.5rem;margin-bottom:8px;">⚡</div>
              <div style="font-weight:600;">Zag.js</div>
              <div style="font-size:0.875rem;color:#49454f;">ヘッドレス UI</div>
            </div>
            <div style="text-align:center;">
              <div style="font-size:2.5rem;margin-bottom:8px;">🪚</div>
              <div style="font-weight:600;">Sawcase</div>
              <div style="font-size:0.875rem;color:#49454f;">レイアウト CSS</div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer class="sc-lp-footer">
        <div class="sc-lp-footer__inner">
          <div class="sc-lp-footer__group">
            <div class="sc-lp-footer__group-title">デモ</div>
            <a href="/admin" class="sc-lp-footer__link">管理画面</a>
            <a href="/docs" class="sc-lp-footer__link">ドキュメント</a>
            <a href="/auth/login" class="sc-lp-footer__link">認証画面</a>
          </div>
          <div class="sc-lp-footer__group">
            <div class="sc-lp-footer__group-title">リソース</div>
            <a
              href="https://github.com/kotsumocom/sawcase"
              class="sc-lp-footer__link"
            >
              GitHub
            </a>
            <a href="https://jsr.io/@kotsumo/sawcase" class="sc-lp-footer__link">
              JSR
            </a>
          </div>
          <div class="sc-lp-footer__copyright">
            © 2026 Kotsumo. Built with Deno Fresh + Sawcase.
          </div>
        </div>
      </footer>
    </>
  );
});
