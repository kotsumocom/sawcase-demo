import { define } from "@/utils.ts";

export default define.page(function SettingsPage() {
  return (
    <div class="sc-admin-page sc-admin-page--narrow">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">設定</h2>
          <p class="sc-admin-page__description">アプリケーション設定の管理</p>
        </div>
      </div>

      <div class="sc-admin-page__body">
        {/* タブ（静的版）*/}
        <div
          style="display:flex;gap:0;border-bottom:2px solid var(--st-sys-color-outline-variant,#cac4d0);margin-bottom:24px;"
        >
          <button
            style="padding:12px 24px;font-size:0.875rem;font-weight:600;border:none;background:none;cursor:pointer;border-bottom:2px solid var(--st-sys-color-primary,#6750a4);color:var(--st-sys-color-primary,#6750a4);margin-bottom:-2px;"
          >
            一般
          </button>
          <button
            style="padding:12px 24px;font-size:0.875rem;font-weight:500;border:none;background:none;cursor:pointer;color:#49454f;"
          >
            通知
          </button>
          <button
            style="padding:12px 24px;font-size:0.875rem;font-weight:500;border:none;background:none;cursor:pointer;color:#49454f;"
          >
            セキュリティ
          </button>
        </div>

        <form style="display:grid;gap:20px;max-width:480px;">
          <div>
            <label style="display:block;font-size:0.75rem;font-weight:600;color:#49454f;margin-bottom:4px;">
              サイト名
            </label>
            <input
              type="text"
              value="Sawcase Demo"
              style="width:100%;padding:12px;border:1px solid #cac4d0;border-radius:8px;font-size:0.875rem;"
            />
          </div>
          <div>
            <label style="display:block;font-size:0.75rem;font-weight:600;color:#49454f;margin-bottom:4px;">
              説明
            </label>
            <textarea
              style="width:100%;padding:12px;border:1px solid #cac4d0;border-radius:8px;font-size:0.875rem;min-height:80px;resize:vertical;"
            >
              Fresh + Zag.js + Sawcase のデモサイト
            </textarea>
          </div>
          <div>
            <label style="display:flex;align-items:center;gap:8px;font-size:0.875rem;cursor:pointer;">
              <input type="checkbox" checked style="width:18px;height:18px;" />
              メンテナンスモードを有効にする
            </label>
          </div>
          <div style="padding-top:8px;">
            <button class="st-button st-button--filled" type="submit">
              設定を保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});
