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
        {/* タブ */}
        <div
          style="display:flex;gap:0;border-bottom:2px solid var(--sc-sys-color-outline-variant);margin-bottom:32px;"
        >
          {["一般", "外観", "セキュリティ", "API", "請求"].map((tab, i) => (
            <button
              key={tab}
              style={`padding:12px 24px;font-size:0.875rem;font-weight:${i === 0 ? "600" : "500"};border:none;background:none;cursor:pointer;${i === 0 ? "border-bottom:2px solid var(--sc-sys-color-primary);color:var(--sc-sys-color-primary);margin-bottom:-2px;" : "color:var(--sc-sys-color-on-surface-variant);"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style="display:grid;gap:32px;max-width:640px;">
          {/* 基本情報 */}
          <section>
            <h3 style="font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);margin:0 0 16px;">
              基本情報
            </h3>
            <div style="display:grid;gap:16px;">
              <div class="sc-ui-field">
                <label class="sc-ui-field__label">組織名</label>
                <input class="sc-ui-input" type="text" value="Kotsumo Inc." />
              </div>
              <div class="sc-ui-field">
                <label class="sc-ui-field__label">サブドメイン</label>
                <div style="display:flex;align-items:stretch;">
                  <input class="sc-ui-input" type="text" value="kotsumo" style="border-radius:8px 0 0 8px;border-right:none;flex:1;" />
                  <span style="display:flex;align-items:center;padding:0 16px;background:var(--sc-sys-color-surface-container);border:1px solid var(--sc-sys-color-outline);border-left:none;border-radius:0 8px 8px 0;font-size:0.875rem;color:var(--sc-sys-color-on-surface-variant);white-space:nowrap;">
                    .sawcase.app
                  </span>
                </div>
              </div>
              <div class="sc-ui-field">
                <label class="sc-ui-field__label">説明</label>
                <textarea class="sc-ui-textarea" rows={3}>Fresh + Zag.js + Sawcase のデモサイト</textarea>
              </div>
            </div>
          </section>

          {/* 地域・言語設定 */}
          <section>
            <h3 style="font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);margin:0 0 16px;">
              地域・言語
            </h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
              <div class="sc-ui-field">
                <label class="sc-ui-field__label">言語</label>
                <select class="sc-ui-input" style="appearance:auto;">
                  <option selected>日本語</option>
                  <option>English</option>
                  <option>中文</option>
                  <option>한국어</option>
                </select>
              </div>
              <div class="sc-ui-field">
                <label class="sc-ui-field__label">タイムゾーン</label>
                <select class="sc-ui-input" style="appearance:auto;">
                  <option selected>Asia/Tokyo (UTC+9)</option>
                  <option>America/New_York</option>
                  <option>Europe/London</option>
                </select>
              </div>
            </div>
          </section>

          {/* 機能トグル */}
          <section>
            <h3 style="font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);margin:0 0 16px;">
              機能設定
            </h3>
            <div style="display:flex;flex-direction:column;gap:0;">
              {[
                { label: "二要素認証", desc: "ログイン時に認証コードを要求", on: true },
                { label: "IP アクセス制限", desc: "許可リストの IP のみアクセス可能", on: false },
                { label: "メンテナンスモード", desc: "管理者以外のアクセスを制限", on: false },
                { label: "監査ログ", desc: "すべての操作を記録・保存", on: true },
                { label: "SSO (SAML 2.0)", desc: "外部 IdP でのシングルサインオン", on: false },
                { label: "自動バックアップ", desc: "毎日 AM 3:00 にデータをバックアップ", on: true },
              ].map((item) => (
                <div
                  key={item.label}
                  style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--sc-sys-color-outline-variant);"
                >
                  <div>
                    <div style="font-size:0.875rem;font-weight:500;color:var(--sc-sys-color-on-surface);">
                      {item.label}
                    </div>
                    <div style="font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);margin-top:2px;">
                      {item.desc}
                    </div>
                  </div>
                  <div
                    style={`width:44px;height:24px;border-radius:12px;background:${item.on ? "var(--sc-sys-color-primary)" : "var(--sc-sys-color-outline)"};position:relative;cursor:pointer;transition:background 0.2s;flex-shrink:0;`}
                  >
                    <div
                      style={`width:20px;height:20px;border-radius:50%;background:white;position:absolute;top:2px;${item.on ? "right:2px;" : "left:2px;"}transition:all 0.2s;box-shadow:0 1px 3px rgba(0,0,0,0.2);`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* データ保持 */}
          <section>
            <h3 style="font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);margin:0 0 16px;">
              データ保持ポリシー
            </h3>
            <div style="display:flex;flex-direction:column;gap:12px;">
              {[
                { label: "30 日", desc: "無料プラン向け", selected: false },
                { label: "90 日", desc: "Starter プラン向け", selected: true },
                { label: "1 年", desc: "Pro プラン向け", selected: false },
                { label: "無期限", desc: "Enterprise プラン向け", selected: false },
              ].map((opt) => (
                <label
                  key={opt.label}
                  style={`display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:8px;border:1px solid ${opt.selected ? "var(--sc-sys-color-primary)" : "var(--sc-sys-color-outline-variant)"};cursor:pointer;background:${opt.selected ? "color-mix(in srgb, var(--sc-sys-color-primary) 8%, transparent)" : "transparent"};`}
                >
                  <input
                    type="radio"
                    name="retention"
                    checked={opt.selected}
                    style="width:18px;height:18px;accent-color:var(--sc-sys-color-primary);"
                  />
                  <div>
                    <div style="font-size:0.875rem;font-weight:500;color:var(--sc-sys-color-on-surface);">
                      {opt.label}
                    </div>
                    <div style="font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);">
                      {opt.desc}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* 危険ゾーン */}
          <section>
            <h3 style="font-size:1rem;font-weight:600;color:var(--sc-sys-color-error);margin:0 0 16px;">
              危険ゾーン
            </h3>
            <div class="sc-ui-card" style="border:1px solid var(--sc-sys-color-error);border-radius:12px;padding:20px;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <div>
                  <div style="font-size:0.875rem;font-weight:500;color:var(--sc-sys-color-on-surface);">
                    組織を削除
                  </div>
                  <div style="font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);margin-top:2px;">
                    すべてのデータとメンバーが完全に削除されます。この操作は取り消せません。
                  </div>
                </div>
                <button
                  class="sc-ui-button sc-ui-button--outlined"
                  style="color:var(--sc-sys-color-error);border-color:var(--sc-sys-color-error);font-size:0.8125rem;flex-shrink:0;"
                >
                  組織を削除
                </button>
              </div>
            </div>
          </section>

          {/* 保存ボタン */}
          <div style="display:flex;gap:8px;padding-top:8px;">
            <button class="sc-ui-button sc-ui-button--filled" type="submit">
              設定を保存
            </button>
            <button class="sc-ui-button sc-ui-button--outlined">
              変更を取消
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
