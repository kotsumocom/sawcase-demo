import { define } from "@/utils.ts";

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
  { name: "Free", count: 2100, percentage: 55, color: "var(--sc-sys-color-outline)" },
  { name: "Starter", count: 1200, percentage: 31, color: "var(--sc-sys-color-tertiary)" },
  { name: "Pro", count: 420, percentage: 11, color: "var(--sc-sys-color-primary)" },
  { name: "Enterprise", count: 127, percentage: 3, color: "var(--sc-sys-color-secondary)" },
];

export default define.page(function AnalyticsPage() {
  return (
    <div class="sc-admin-page">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">分析</h2>
          <p class="sc-admin-page__description">
            サービス利用状況と成長指標
          </p>
        </div>
        {/* 期間セレクタ */}
        <div style="display:flex;gap:0;border:1px solid var(--sc-sys-color-outline-variant);border-radius:8px;overflow:hidden;">
          {["日", "週", "月", "年"].map((period, i) => (
            <button
              key={period}
              class={`sc-ui-button ${i === 2 ? "sc-ui-button--filled" : "sc-ui-button--text"}`}
              style="border-radius:0;padding:6px 16px;font-size:0.8125rem;border:none;"
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div class="sc-admin-page__body">
        {/* KPI カード */}
        <div class="sc-admin-stats" style="margin-bottom:32px;">
          {KPI_DATA.map((kpi) => (
            <div class="sc-admin-stats__card" key={kpi.label}>
              <div class="sc-admin-stats__label">{kpi.label}</div>
              <div class="sc-admin-stats__value">{kpi.value}</div>
              <div
                class={`sc-admin-stats__trend sc-admin-stats__trend--${kpi.up ? "up" : "down"}`}
              >
                {kpi.trend}
              </div>
            </div>
          ))}
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:32px;">
          {/* 機能利用状況 */}
          <div class="sc-ui-card sc-ui-card--outlined">
            <div style="padding:20px;">
              <h3
                style="margin:0 0 20px;font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);"
              >
                機能利用状況
              </h3>
              <div style="display:flex;flex-direction:column;gap:16px;">
                {FEATURE_USAGE.map((f) => (
                  <div key={f.name}>
                    <div
                      style="display:flex;justify-content:space-between;font-size:0.8125rem;margin-bottom:4px;"
                    >
                      <span style="color:var(--sc-sys-color-on-surface);">
                        {f.name}
                      </span>
                      <span style="color:var(--sc-sys-color-on-surface-variant);">
                        {f.users.toLocaleString()} ユーザー ({f.percentage}%)
                      </span>
                    </div>
                    <div
                      style="height:8px;background:var(--sc-sys-color-surface-container-highest);border-radius:4px;overflow:hidden;"
                    >
                      <div
                        style={`height:100%;width:${f.percentage}%;background:var(--sc-sys-color-primary);border-radius:4px;transition:width 0.5s;`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* プラン分布 */}
          <div class="sc-ui-card sc-ui-card--outlined">
            <div style="padding:20px;">
              <h3
                style="margin:0 0 20px;font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);"
              >
                プラン分布
              </h3>

              {/* 横バー */}
              <div
                style="display:flex;height:32px;border-radius:8px;overflow:hidden;margin-bottom:20px;"
              >
                {PLAN_DISTRIBUTION.map((plan) => (
                  <div
                    key={plan.name}
                    style={`width:${plan.percentage}%;background:${plan.color};transition:width 0.5s;`}
                    title={`${plan.name}: ${plan.percentage}%`}
                  />
                ))}
              </div>

              <div style="display:flex;flex-direction:column;gap:12px;">
                {PLAN_DISTRIBUTION.map((plan) => (
                  <div
                    key={plan.name}
                    style="display:flex;align-items:center;justify-content:space-between;"
                  >
                    <div style="display:flex;align-items:center;gap:8px;">
                      <span
                        style={`width:12px;height:12px;border-radius:3px;background:${plan.color};`}
                      />
                      <span
                        style="font-size:0.875rem;color:var(--sc-sys-color-on-surface);"
                      >
                        {plan.name}
                      </span>
                    </div>
                    <div style="text-align:right;">
                      <span
                        style="font-size:0.875rem;font-weight:600;color:var(--sc-sys-color-on-surface);"
                      >
                        {plan.count.toLocaleString()}
                      </span>
                      <span
                        style="font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);margin-left:8px;"
                      >
                        {plan.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 最近のイベント */}
        <div class="sc-ui-card sc-ui-card--outlined">
          <div style="padding:20px;">
            <h3
              style="margin:0 0 16px;font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);"
            >
              最近のイベント
            </h3>
            <div style="display:flex;flex-direction:column;gap:0;">
              {[
                { time: "14:32", event: "新規ユーザー登録", detail: "sato@example.com が Pro プランで登録", type: "success" },
                { time: "13:15", event: "API レート制限到達", detail: "org-a342 が 1,000 req/min を超過", type: "warning" },
                { time: "12:48", event: "プランアップグレード", detail: "watanabe@example.com が Starter → Pro", type: "info" },
                { time: "11:20", event: "Webhook 配信失敗", detail: "https://api.client.com/hook — 503 エラー", type: "error" },
                { time: "10:05", event: "新規ユーザー登録", detail: "yamada@example.com が Free プランで登録", type: "success" },
              ].map((e, i) => (
                <div
                  key={i}
                  style="display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-bottom:1px solid var(--sc-sys-color-outline-variant);"
                >
                  <span
                    style="font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);min-width:40px;padding-top:2px;"
                  >
                    {e.time}
                  </span>
                  <div>
                    <div style="display:flex;align-items:center;gap:8px;">
                      <span
                        style="font-size:0.875rem;font-weight:500;color:var(--sc-sys-color-on-surface);"
                      >
                        {e.event}
                      </span>
                      <span
                        class={`sc-ui-badge sc-ui-badge--${e.type === "success" ? "success" : e.type === "warning" ? "warning" : e.type === "error" ? "error" : "primary"}`}
                        style="font-size:0.625rem;"
                      >
                        {e.type}
                      </span>
                    </div>
                    <div
                      style="font-size:0.8125rem;color:var(--sc-sys-color-on-surface-variant);margin-top:2px;"
                    >
                      {e.detail}
                    </div>
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
