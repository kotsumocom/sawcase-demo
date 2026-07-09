import { define } from "@/utils.ts";

export default define.page(function AdminLayout({ Component }) {
  return (
    <div class="sc-admin-shell">
      {/* ヘッダー */}
      <header class="sc-admin-header">
        <button class="sc-admin-header__menu-btn" aria-label="メニュー" id="admin-menu-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div class="sc-admin-header__brand">
          <span class="sc-admin-header__app-name">
            <a href="/" style="text-decoration:none;color:inherit;">Sawcase Demo</a>
          </span>
        </div>
        <div class="sc-admin-header__breadcrumb">管理画面</div>
        <div class="sc-admin-header__actions">
          <a href="/auth/login" style="background:none;border:none;cursor:pointer;padding:8px;text-decoration:none;">👤</a>
        </div>
      </header>

      {/* ボディ */}
      <div class="sc-admin-body">
        {/* サイドナビ */}
        <nav class="sc-admin-nav" id="admin-nav">
          <div class="sc-admin-nav__group">
            <div class="sc-admin-nav__group-label">メイン</div>
            <a href="/admin" class="sc-admin-nav__link">
              <svg class="sc-admin-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <span>ダッシュボード</span>
            </a>
            <a href="/admin/users" class="sc-admin-nav__link">
              <svg class="sc-admin-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
              <span>ユーザー</span>
            </a>
          </div>
          <div class="sc-admin-nav__group">
            <div class="sc-admin-nav__group-label">設定</div>
            <a href="/admin/settings" class="sc-admin-nav__link">
              <svg class="sc-admin-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span>設定</span>
            </a>
          </div>
          <div class="sc-admin-nav__footer">
            <a href="/" class="sc-admin-nav__link">← サイトに戻る</a>
          </div>
        </nav>

        {/* オーバーレイ */}
        <div class="sc-admin-overlay" id="admin-overlay"></div>

        {/* メインコンテンツ */}
        <main class="sc-admin-content">
          <Component />
        </main>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() {
              if (typeof sawcase !== "undefined") {
                sawcase.initAdminNav();
              }
            });
          `,
        }}
      />
    </div>
  );
});
