import { define } from "@/utils.ts";
import { ProgressBar, StatusBadge } from "@kotsumo/sawcase/components";
import type { BadgeVariant } from "@kotsumo/sawcase/components";

const KPI_DATA = [
  { label: "MRR", value: "¥2,450,000", trend: "+18.3%", up: true },
  { label: "アクティブユーザー", value: "3,847", trend: "+12.1%", up: true },
  { label: "解約率", value: "2.1%", trend: "-0.5%", up: false },
  { label: "ARPU", value: "¥637", trend: "+3.2%", up: true },
];

const FEATURE_USAGE = [
  { name: "ダッシュボード", users: 3200, percentage: 83 },
  { name: "API 連携", users: 2100, percentage: 55 },
  { name: "レポート", users: 1800, percentage: 47 },
  { name: "チーム管理", users: 1500, percentage: 39 },
  { name: "Webhook", users: 890, percentage: 23 },
  { name: "カスタムドメイン", users: 450, percentage: 12 },
];

const PLAN_DISTRIBUTION = [
  { name: "Free", count: 2100, percentage: 55, variant: "neutral" as BadgeVariant },
  { name: "Starter", count: 1200, percentage: 31, variant: "info" as BadgeVariant },
  { name: "Pro", count: 420, percentage: 11, variant: "success" as BadgeVariant },
  { name: "Enterprise", count: 127, percentage: 3, variant: "warning" as BadgeVariant },
];

const EVENT_VARIANT: Record<string, BadgeVariant> = {
  success: "success",
  warning: "warning",
  error: "error",
  info: "info",
};

export default define.page(function AnalyticsPage() {
  return (
    <div class="sc-admin-page">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">統計サマリー</h2>
          <p class="sc-admin-page__description">サービス利用状況と成長指標</p>
        </div>
        <div class="sc-admin-period-selector">
          {["日", "週", "月", "年"].map((period, i) => (
            <button
              key={period}
              class={`sc-admin-period-selector__btn${i === 2 ? " sc-admin-period-selector__btn--active" : ""}`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div class="sc-admin-page__body">
        {/* KPI */}
        <div class="sc-admin-stats">
          {KPI_DATA.map((kpi) => (
            <div class="sc-admin-stats__card" key={kpi.label}>
              <div class="sc-admin-stats__label">{kpi.label}</div>
              <div class="sc-admin-stats__value">{kpi.value}</div>
              <div class={`sc-admin-stats__trend sc-admin-stats__trend--${kpi.up ? "up" : "down"}`}>
                {kpi.trend}
              </div>
            </div>
          ))}
        </div>

        <div class="sc-admin-analytics-grid">
          {/* 機能利用状況 */}
          <div class="sc-ui-card sc-ui-card--outlined">
            <div class="sc-admin-card-body">
              <h3 class="sc-settings-section__title">機能利用状況</h3>
              <div class="sc-admin-card-list">
                {FEATURE_USAGE.map((f) => (
                  <ProgressBar
                    key={f.name}
                    label={f.name}
                    value={f.percentage}
                    formatValue={() => `${f.users.toLocaleString()} ユーザー (${f.percentage}%)`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* プラン分布 */}
          <div class="sc-ui-card sc-ui-card--outlined">
            <div class="sc-admin-card-body">
              <h3 class="sc-settings-section__title">プラン分布</h3>
              <div class="sc-admin-plan-bar">
                {PLAN_DISTRIBUTION.map((plan) => (
                  <div
                    key={plan.name}
                    class={`sc-admin-plan-bar__segment sc-admin-plan-bar__segment--${plan.variant}`}
                    style={{ width: `${plan.percentage}%` }}
                    title={`${plan.name}: ${plan.percentage}%`}
                  />
                ))}
              </div>
              <div class="sc-admin-plan-legend">
                {PLAN_DISTRIBUTION.map((plan) => (
                  <div key={plan.name} class="sc-admin-plan-legend__item">
                    <div class="sc-admin-plan-legend__left">
                      <StatusBadge variant={plan.variant} small>{plan.name}</StatusBadge>
                    </div>
                    <div class="sc-admin-plan-legend__right">
                      <span class="sc-admin-plan-legend__count">{plan.count.toLocaleString()}</span>
                      <span class="sc-admin-plan-legend__pct">{plan.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 最近のイベント */}
        <div class="sc-ui-card sc-ui-card--outlined">
          <div class="sc-admin-card-body">
            <h3 class="sc-settings-section__title">最近のイベント</h3>
            <div class="sc-admin-event-list">
              {[
                { time: "14:32", event: "新規ユーザー登録", detail: "sato@example.com が Pro プランで登録", type: "success" },
                { time: "13:15", event: "API レート制限到達", detail: "org-a342 が 1,000 req/min を超過", type: "warning" },
                { time: "12:48", event: "プランアップグレード", detail: "watanabe@example.com が Starter → Pro", type: "info" },
                { time: "11:20", event: "Webhook 配信失敗", detail: "https://api.client.com/hook — 503 エラー", type: "error" },
                { time: "10:05", event: "新規ユーザー登録", detail: "yamada@example.com が Free プランで登録", type: "success" },
              ].map((e, i) => (
                <div key={i} class="sc-admin-event-list__item">
                  <span class="sc-admin-event-list__time">{e.time}</span>
                  <div>
                    <div class="sc-admin-event-list__header">
                      <span class="sc-admin-event-list__name">{e.event}</span>
                      <StatusBadge variant={EVENT_VARIANT[e.type]} small>{e.type}</StatusBadge>
                    </div>
                    <div class="sc-admin-event-list__detail">{e.detail}</div>
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
