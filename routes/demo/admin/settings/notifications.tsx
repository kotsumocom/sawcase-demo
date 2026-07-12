import { define } from "@/utils.ts";
import {
  ToggleSwitch,
} from "@kotsumo/sawcase/components";

export default define.page(function NotificationSettingsPage() {
  return (
    <div class="sc-admin-page sc-admin-page--narrow">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">通知設定</h2>
          <p class="sc-admin-page__description">通知チャンネルと受信設定の管理</p>
        </div>
      </div>

      <div class="sc-admin-page__body">
        <div class="sc-settings-form">
          {/* メール通知 */}
          <section>
            <h3 class="sc-settings-section__title">通知チャンネル</h3>
            <div class="sc-toggle-list">
              <ToggleSwitch label="メール通知" description="重要なアラートをメールで受信" checked={true} />
              <ToggleSwitch label="プッシュ通知" description="ブラウザのプッシュ通知を受信" checked={true} />
              <ToggleSwitch label="Slack 連携" description="#alerts チャンネルに通知を送信" />
            </div>
          </section>

          {/* レポート */}
          <section>
            <h3 class="sc-settings-section__title">レポート</h3>
            <div class="sc-toggle-list">
              <ToggleSwitch label="週次レポート" description="毎週月曜に利用状況レポートを送信" checked={true} />
              <ToggleSwitch label="月次サマリー" description="月初に前月のサマリーレポートを送信" checked={true} />
            </div>
          </section>

          {/* その他 */}
          <section>
            <h3 class="sc-settings-section__title">その他</h3>
            <div class="sc-toggle-list">
              <ToggleSwitch label="マーケティング" description="製品アップデートやニュース" />
              <ToggleSwitch label="セキュリティアラート" description="不正アクセスやログイン通知" checked={true} />
              <ToggleSwitch label="課金アラート" description="請求・支払いに関する通知" checked={true} />
            </div>
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
