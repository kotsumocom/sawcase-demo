import { define } from "@/utils.ts";

const NOTIFICATIONS = [
  {
    group: "システム",
    items: [
      {
        id: "1",
        title: "サーバーメンテナンス完了",
        description: "定期メンテナンスが正常に完了しました。すべてのサービスが稼働中です。",
        time: "2 時間前",
        read: true,
        type: "info",
      },
      {
        id: "2",
        title: "SSL 証明書の更新",
        description: "api.example.com の SSL 証明書が 14 日後に期限切れになります。",
        time: "5 時間前",
        read: false,
        type: "warning",
      },
    ],
  },
  {
    group: "セキュリティ",
    items: [
      {
        id: "3",
        title: "不正アクセス検知",
        description:
          "IP 203.0.113.42 から短時間に 50 回以上のログイン試行を検知しました。自動ブロック済み。",
        time: "1 日前",
        read: false,
        type: "error",
      },
      {
        id: "4",
        title: "新しいデバイスからのログイン",
        description: "tanaka@example.com が新しいデバイス（macOS / Chrome）からログインしました。",
        time: "2 日前",
        read: true,
        type: "info",
      },
    ],
  },
  {
    group: "請求",
    items: [
      {
        id: "5",
        title: "支払い成功",
        description: "7 月分の請求 ¥245,000 の決済が完了しました。",
        time: "3 日前",
        read: true,
        type: "success",
      },
      {
        id: "6",
        title: "プランの上限に近づいています",
        description: "API コール数が月間上限の 90% に達しました。プランのアップグレードを検討してください。",
        time: "4 日前",
        read: false,
        type: "warning",
      },
    ],
  },
];

const NOTIFICATION_SETTINGS = [
  { label: "メール通知", description: "重要なアラートをメールで受信", enabled: true },
  { label: "プッシュ通知", description: "ブラウザのプッシュ通知を受信", enabled: true },
  { label: "Slack 連携", description: "#alerts チャンネルに通知を送信", enabled: false },
  { label: "週次レポート", description: "毎週月曜に利用状況レポートを送信", enabled: true },
  { label: "マーケティング", description: "製品アップデートやニュース", enabled: false },
];

const TYPE_STYLES: Record<string, { bg: string; dot: string }> = {
  info: {
    bg: "var(--sc-sys-color-surface-container)",
    dot: "var(--sc-sys-color-primary)",
  },
  warning: {
    bg: "color-mix(in srgb, var(--sc-sys-color-tertiary) 10%, transparent)",
    dot: "var(--sc-sys-color-tertiary)",
  },
  error: {
    bg: "color-mix(in srgb, var(--sc-sys-color-error) 10%, transparent)",
    dot: "var(--sc-sys-color-error)",
  },
  success: {
    bg: "color-mix(in srgb, var(--sc-sys-color-primary) 10%, transparent)",
    dot: "#16a34a",
  },
};

export default define.page(function NotificationsPage() {
  return (
    <div class="sc-admin-page">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">通知</h2>
          <p class="sc-admin-page__description">
            通知履歴と通知設定の管理
          </p>
        </div>
        <button class="sc-ui-button sc-ui-button--outlined">
          すべて既読にする
        </button>
      </div>

      <div class="sc-admin-page__body">
        <div
          style="display:grid;grid-template-columns:1fr 360px;gap:24px;"
        >
          {/* 通知履歴 */}
          <div>
            {NOTIFICATIONS.map((group) => (
              <div key={group.group} style="margin-bottom:24px;">
                <h3
                  style="font-size:0.8125rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--sc-sys-color-on-surface-variant);margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid var(--sc-sys-color-outline-variant);"
                >
                  {group.group}
                </h3>
                <div style="display:flex;flex-direction:column;gap:8px;">
                  {group.items.map((n) => {
                    const style = TYPE_STYLES[n.type];
                    return (
                      <div
                        key={n.id}
                        class="sc-ui-card"
                        style={`padding:16px;border-left:3px solid ${style.dot};background:${n.read ? "transparent" : style.bg};border:1px solid var(--sc-sys-color-outline-variant);border-radius:8px;`}
                      >
                        <div
                          style="display:flex;justify-content:space-between;align-items:flex-start;"
                        >
                          <div style="flex:1;">
                            <div
                              style="display:flex;align-items:center;gap:8px;margin-bottom:4px;"
                            >
                              {!n.read && (
                                <span
                                  style={`width:8px;height:8px;border-radius:50%;background:${style.dot};flex-shrink:0;`}
                                />
                              )}
                              <span
                                style={`font-size:0.875rem;font-weight:${n.read ? "400" : "600"};color:var(--sc-sys-color-on-surface);`}
                              >
                                {n.title}
                              </span>
                            </div>
                            <p
                              style="margin:0;font-size:0.8125rem;color:var(--sc-sys-color-on-surface-variant);line-height:1.5;"
                            >
                              {n.description}
                            </p>
                          </div>
                          <span
                            style="font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);white-space:nowrap;margin-left:12px;"
                          >
                            {n.time}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* 通知設定 */}
          <div>
            <div class="sc-ui-card sc-ui-card--outlined">
              <div style="padding:20px;">
                <h3
                  style="margin:0 0 20px;font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);"
                >
                  通知設定
                </h3>
                <div style="display:flex;flex-direction:column;gap:16px;">
                  {NOTIFICATION_SETTINGS.map((s) => (
                    <div
                      key={s.label}
                      style="display:flex;justify-content:space-between;align-items:center;padding-bottom:16px;border-bottom:1px solid var(--sc-sys-color-outline-variant);"
                    >
                      <div>
                        <div
                          style="font-size:0.875rem;font-weight:500;color:var(--sc-sys-color-on-surface);margin-bottom:2px;"
                        >
                          {s.label}
                        </div>
                        <div
                          style="font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);"
                        >
                          {s.description}
                        </div>
                      </div>
                      {/* トグルスイッチ（静的） */}
                      <div
                        style={`width:44px;height:24px;border-radius:12px;background:${
                          s.enabled
                            ? "var(--sc-sys-color-primary)"
                            : "var(--sc-sys-color-outline)"
                        };position:relative;cursor:pointer;transition:background 0.2s;flex-shrink:0;`}
                      >
                        <div
                          style={`width:20px;height:20px;border-radius:50%;background:white;position:absolute;top:2px;${
                            s.enabled ? "right:2px;" : "left:2px;"
                          }transition:all 0.2s;box-shadow:0 1px 3px rgba(0,0,0,0.2);`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Webhook URL */}
                <div style="margin-top:20px;">
                  <h4
                    style="font-size:0.875rem;font-weight:600;color:var(--sc-sys-color-on-surface);margin:0 0 8px;"
                  >
                    Webhook URL
                  </h4>
                  <div style="display:flex;gap:8px;">
                    <input
                      class="sc-ui-input"
                      type="url"
                      placeholder="https://your-app.com/webhook"
                      value="https://api.example.com/webhooks/sawcase"
                      style="flex:1;"
                      readOnly
                    />
                    <button
                      class="sc-ui-button sc-ui-button--outlined"
                      style="padding:8px 16px;font-size:0.8125rem;"
                    >
                      コピー
                    </button>
                  </div>
                </div>

                {/* API キー */}
                <div style="margin-top:16px;">
                  <h4
                    style="font-size:0.875rem;font-weight:600;color:var(--sc-sys-color-on-surface);margin:0 0 8px;"
                  >
                    API キー
                  </h4>
                  <div style="display:flex;gap:8px;">
                    <input
                      class="sc-ui-input"
                      type="password"
                      value="sk_live_xxxxxxxxxxxxxxxxxxxx"
                      style="flex:1;font-family:monospace;"
                      readOnly
                    />
                    <button
                      class="sc-ui-button sc-ui-button--outlined"
                      style="padding:8px 16px;font-size:0.8125rem;"
                    >
                      表示
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
