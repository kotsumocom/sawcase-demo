import { define } from "@/utils.ts";
import {
  ProgressBar,
  StatusBadge,
  UserAvatar,
} from "@kotsumo/sawcase/components";

const STATS = [
  { label: "MRR", value: "¥1,234,567", trend: "+12.5%", up: true, description: "月次経常収益（前月比）" },
  { label: "アクティブユーザー", value: "3,847", trend: "+5.2%", up: true, description: "過去 30 日間のアクティブユーザー" },
  { label: "解約率", value: "1.8%", trend: "-0.3%", up: false, description: "月次解約率（前月比改善）" },
  { label: "NPS スコア", value: "72", trend: "+4", up: true, description: "顧客推奨度（-100〜100）" },
];

const RECENT_SIGNUPS = [
  { name: "田中 太郎", email: "tanaka@example.com", plan: "Pro", time: "5 分前" },
  { name: "佐藤 花子", email: "sato@example.com", plan: "Starter", time: "23 分前" },
  { name: "鈴木 一郎", email: "suzuki@example.com", plan: "Free", time: "1 時間前" },
  { name: "高橋 美咲", email: "takahashi@example.com", plan: "Pro", time: "2 時間前" },
  { name: "伊藤 健太", email: "ito@example.com", plan: "Enterprise", time: "3 時間前" },
];

const PLAN_VARIANT: Record<string, "neutral" | "info" | "success" | "error"> = {
  Free: "neutral",
  Starter: "info",
  Pro: "success",
  Enterprise: "error",
};

const USAGE_METRICS = [
  { label: "API コール", current: 847000, limit: 1000000, unit: "回/月" },
  { label: "ストレージ", current: 34.2, limit: 50, unit: "GB" },
  { label: "チームメンバー", current: 18, limit: 25, unit: "人" },
  { label: "Webhook", current: 7, limit: 10, unit: "件" },
];

const QUICK_ACTIONS = [
  { icon: "👤", label: "ユーザー招待", href: "/demo/admin/team" },
  { icon: "📊", label: "レポート出力", href: "/demo/admin/analytics" },
  { icon: "🔔", label: "通知設定", href: "/demo/admin/notifications" },
  { icon: "⚙️", label: "システム設定", href: "/demo/admin/settings" },
];

export default define.page(function DashboardPage() {
  return (
    <div class="sc-admin-page">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">ダッシュボード</h2>
          <p class="sc-admin-page__description">サービスの概要と主要指標</p>
        </div>
        <div class="sc-admin-page__actions">
          <button class="sc-ui-button sc-ui-button--outlined sc-ui-button--sm">
            レポート出力
          </button>
          <button class="sc-ui-button sc-ui-button--filled sc-ui-button--sm">
            + 新規プロジェクト
          </button>
        </div>
      </div>

      {/* KPI カード */}
      <div class="sc-admin-stats">
        {STATS.map((s) => (
          <div class="sc-admin-stats__card" key={s.label} title={s.description}>
            <div class="sc-admin-stats__label">{s.label}</div>
            <div class="sc-admin-stats__value">{s.value}</div>
            <div class={`sc-admin-stats__trend sc-admin-stats__trend--${s.up ? "up" : "down"}`}>
              {s.trend}
            </div>
          </div>
        ))}
      </div>

      <div class="sc-admin-page__body">
        <div class="sc-admin-dashboard-grid">
          {/* リソース使用状況 */}
          <div class="sc-ui-card sc-ui-card--outlined sc-admin-dashboard-grid__main">
            <div class="sc-admin-card-body">
              <h3 class="sc-settings-section__title">リソース使用状況</h3>
              <div class="sc-admin-card-list">
                {USAGE_METRICS.map((m) => {
                  const fmtCurrent = m.current > 1000 ? `${(m.current / 1000).toFixed(0)}K` : m.current;
                  const fmtLimit = m.limit > 1000 ? `${(m.limit / 1000).toFixed(0)}K` : m.limit;
                  return (
                    <ProgressBar
                      key={m.label}
                      label={m.label}
                      value={m.current}
                      max={m.limit}
                      danger={m.limit * 0.8}
                      formatValue={() => `${fmtCurrent} / ${fmtLimit} ${m.unit}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* サイドバー */}
          <div class="sc-admin-dashboard-grid__side">
            {/* クイックアクション */}
            <div class="sc-ui-card sc-ui-card--outlined">
              <div class="sc-admin-card-body">
                <h3 class="sc-settings-section__title">クイックアクション</h3>
                <div class="sc-admin-quick-actions">
                  {QUICK_ACTIONS.map((a) => (
                    <a key={a.label} href={a.href} class="sc-admin-quick-action">
                      <span class="sc-admin-quick-action__icon">{a.icon}</span>
                      {a.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* システムステータス */}
            <div class="sc-ui-card sc-ui-card--outlined">
              <div class="sc-admin-card-body">
                <h3 class="sc-settings-section__title">システムステータス</h3>
                <div class="sc-admin-status-list">
                  {[
                    { name: "API サーバー", status: "稼働中", ok: true },
                    { name: "データベース", status: "稼働中", ok: true },
                    { name: "CDN", status: "稼働中", ok: true },
                    { name: "メールサービス", status: "遅延あり", ok: false },
                  ].map((s) => (
                    <div key={s.name} class="sc-admin-status-list__item">
                      <span>{s.name}</span>
                      <StatusBadge variant={s.ok ? "success" : "error"} small>
                        {s.status}
                      </StatusBadge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 最近のサインアップ */}
        <div class="sc-ui-card sc-ui-card--outlined">
          <div class="sc-admin-card-body">
            <div class="sc-admin-card-header">
              <h3 class="sc-settings-section__title">最近のサインアップ</h3>
              <a href="/demo/admin/users" class="sc-admin-card-header__link">
                すべて表示 →
              </a>
            </div>
            <div class="sc-admin-signup-list">
              {RECENT_SIGNUPS.map((u) => (
                <div key={u.email} class="sc-admin-signup-list__item">
                  <div class="sc-data-table__user">
                    <UserAvatar name={u.name} size="sm" />
                    <div>
                      <div class="sc-data-table__user-name">{u.name}</div>
                      <div class="sc-data-table__user-email">{u.email}</div>
                    </div>
                  </div>
                  <div class="sc-admin-signup-list__meta">
                    <StatusBadge variant={PLAN_VARIANT[u.plan]}>{u.plan}</StatusBadge>
                    <span class="sc-admin-signup-list__time">{u.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
