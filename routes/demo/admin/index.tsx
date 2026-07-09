import { define } from "@/utils.ts";

const STATS = [
  { label: "総収入", value: "¥1,234,567", trend: "+12.5%", up: true },
  { label: "ユーザー数", value: "1,234", trend: "+5.2%", up: true },
  { label: "注文数", value: "567", trend: "+8.1%", up: true },
  { label: "エラー率", value: "0.3%", trend: "-2.1%", up: false },
];

export default define.page(function DashboardPage() {
  return (
    <div class="sc-admin-page">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">ダッシュボード</h2>
          <p class="sc-admin-page__description">概要データの確認</p>
        </div>
      </div>

      {/* Stats カード */}
      <div class="sc-admin-stats">
        {STATS.map((s) => (
          <div class="sc-admin-stats__card" key={s.label}>
            <div class="sc-admin-stats__label">{s.label}</div>
            <div class="sc-admin-stats__value">{s.value}</div>
            <div
              class={`sc-admin-stats__trend sc-admin-stats__trend--${s.up ? "up" : "down"}`}
            >
              {s.trend}
            </div>
          </div>
        ))}
      </div>

      <div class="sc-admin-page__body">
        <div
          style="background:var(--st-sys-color-surface-container-low,#f7f2fa);border-radius:16px;padding:48px;text-align:center;color:#49454f;"
        >
          <p style="font-size:1.25rem;margin:0 0 8px;">📊</p>
          <p style="margin:0;">ここにグラフやチャートが入ります</p>
        </div>
      </div>
    </div>
  );
});
