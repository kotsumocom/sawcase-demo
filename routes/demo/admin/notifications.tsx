import { define } from "@/utils.ts";
import {
  NotificationList,
} from "@kotsumo/sawcase/components";
import type { NotifGroup } from "@kotsumo/sawcase/components";

const NOTIFICATIONS: NotifGroup[] = [
  {
    group: "システム",
    items: [
      { id: "1", title: "サーバーメンテナンス完了", description: "定期メンテナンスが正常に完了しました。すべてのサービスが稼働中です。", time: "2 時間前", read: true, type: "info" },
      { id: "2", title: "SSL 証明書の更新", description: "api.example.com の SSL 証明書が 14 日後に期限切れになります。", time: "5 時間前", read: false, type: "warning" },
    ],
  },
  {
    group: "セキュリティ",
    items: [
      { id: "3", title: "不正アクセス検知", description: "IP 203.0.113.42 から短時間に 50 回以上のログイン試行を検知しました。自動ブロック済み。", time: "1 日前", read: false, type: "error" },
      { id: "4", title: "新しいデバイスからのログイン", description: "tanaka@example.com が新しいデバイス（macOS / Chrome）からログインしました。", time: "2 日前", read: true, type: "info" },
    ],
  },
  {
    group: "請求",
    items: [
      { id: "5", title: "支払い成功", description: "7 月分の請求 ¥245,000 の決済が完了しました。", time: "3 日前", read: true, type: "success" },
      { id: "6", title: "プランの上限に近づいています", description: "API コール数が月間上限の 90% に達しました。プランのアップグレードを検討してください。", time: "4 日前", read: false, type: "warning" },
    ],
  },
];

export default define.page(function NotificationsPage() {
  return (
    <div class="sc-admin-page sc-admin-page--narrow">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">通知</h2>
          <p class="sc-admin-page__description">システム通知とアラートの管理</p>
        </div>
      </div>

      <div class="sc-admin-page__body">
        <div class="sc-ui-card sc-ui-card--outlined">
          <NotificationList
            groups={NOTIFICATIONS}
            onMarkRead={(id) => console.log("Mark read:", id)}
            onMarkAllRead={() => console.log("Mark all read")}
          />
        </div>
      </div>
    </div>
  );
});
