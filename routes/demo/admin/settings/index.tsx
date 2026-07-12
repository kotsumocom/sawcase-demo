import { define } from "@/utils.ts";
import {
  ToggleSwitch,
  InputGroup,
  DangerZone,
} from "@kotsumo/sawcase/components";

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
        <div class="sc-settings-form">
          {/* 基本情報 */}
          <section>
            <h3 class="sc-settings-section__title">基本情報</h3>
            <div class="sc-settings-form__fields">
              <div class="sc-ui-field">
                <label class="sc-ui-field__label">組織名</label>
                <input class="sc-ui-input" type="text" value="Kotsumo Inc." />
              </div>
              <div class="sc-ui-field">
                <label class="sc-ui-field__label">サブドメイン</label>
                <InputGroup suffix=".sawcase.app">
                  <input class="sc-ui-input" type="text" value="kotsumo" />
                </InputGroup>
              </div>
              <div class="sc-ui-field">
                <label class="sc-ui-field__label">説明</label>
                <textarea class="sc-ui-textarea" rows={3}>
                  Fresh + Zag.js + Sawcase のデモサイト
                </textarea>
              </div>
            </div>
          </section>

          {/* 地域・言語設定 */}
          <section>
            <h3 class="sc-settings-section__title">地域・言語</h3>
            <div class="sc-settings-form__row">
              <div class="sc-ui-field">
                <label class="sc-ui-field__label">言語</label>
                <select class="sc-ui-input sc-filter-bar__select">
                  <option selected>日本語</option>
                  <option>English</option>
                  <option>中文</option>
                  <option>한국어</option>
                </select>
              </div>
              <div class="sc-ui-field">
                <label class="sc-ui-field__label">タイムゾーン</label>
                <select class="sc-ui-input sc-filter-bar__select">
                  <option selected>Asia/Tokyo (UTC+9)</option>
                  <option>America/New_York</option>
                  <option>Europe/London</option>
                </select>
              </div>
            </div>
          </section>

          {/* 機能トグル */}
          <section>
            <h3 class="sc-settings-section__title">機能設定</h3>
            <div class="sc-toggle-list">
              <ToggleSwitch label="二要素認証" description="ログイン時に認証コードを要求" checked={true} />
              <ToggleSwitch label="IP アクセス制限" description="許可リストの IP のみアクセス可能" />
              <ToggleSwitch label="メンテナンスモード" description="管理者以外のアクセスを制限" />
              <ToggleSwitch label="監査ログ" description="すべての操作を記録・保存" checked={true} />
              <ToggleSwitch label="SSO (SAML 2.0)" description="外部 IdP でのシングルサインオン" />
              <ToggleSwitch label="自動バックアップ" description="毎日 AM 3:00 にデータをバックアップ" checked={true} />
            </div>
          </section>

          {/* データ保持 */}
          <section>
            <h3 class="sc-settings-section__title">データ保持ポリシー</h3>
            <div class="sc-radio-cards">
              {[
                { label: "30 日", desc: "無料プラン向け", selected: false },
                { label: "90 日", desc: "Starter プラン向け", selected: true },
                { label: "1 年", desc: "Pro プラン向け", selected: false },
                { label: "無期限", desc: "Enterprise プラン向け", selected: false },
              ].map((opt) => (
                <label
                  key={opt.label}
                  class={`sc-radio-card${opt.selected ? " sc-radio-card--selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="retention"
                    checked={opt.selected}
                    class="sc-radio-card__input"
                  />
                  <div>
                    <div class="sc-radio-card__label">{opt.label}</div>
                    <div class="sc-radio-card__desc">{opt.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* 危険ゾーン */}
          <section>
            <h3 class="sc-settings-section__title sc-settings-section__title--danger">
              危険ゾーン
            </h3>
            <DangerZone
              title="組織を削除"
              description="すべてのデータとメンバーが完全に削除されます。この操作は取り消せません。"
              buttonLabel="組織を削除"
              onAction={() => alert("削除確認ダイアログ")}
            />
          </section>

          {/* 保存ボタン */}
          <div class="sc-settings-actions">
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
