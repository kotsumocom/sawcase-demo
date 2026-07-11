import { define } from "@/utils.ts";

const STATS = [
  { label: "MRR", value: "¥1,234,567", trend: "+12.5%", up: true, description: "月次経常収益（前月比）" },
  { label: "アクティブユーザー", value: "3,847", trend: "+5.2%", up: true, description: "過去 30 日間のアクティブユーザー" },
  { label: "解約率", value: "1.8%", trend: "-0.3%", up: false, description: "月次解約率（前月比改善）" },
  { label: "NPS スコア", value: "72", trend: "+4", up: true, description: "顧客推奨度（-100〜100）" },
];

const RECENT_SIGNUPS = [
  { name: "田中 太郎", email: "tanaka@example.com", plan: "Pro", time: "5 分前", avatar: "🧑‍💻" },
  { name: "佐藤 花子", email: "sato@example.com", plan: "Starter", time: "23 分前", avatar: "👩‍💼" },
  { name: "鈴木 一郎", email: "suzuki@example.com", plan: "Free", time: "1 時間前", avatar: "👨‍🔬" },
  { name: "高橋 美咲", email: "takahashi@example.com", plan: "Pro", time: "2 時間前", avatar: "👩‍🎨" },
  { name: "伊藤 健太", email: "ito@example.com", plan: "Enterprise", time: "3 時間前", avatar: "🧑‍🎓" },
];

const PLAN_BADGE: Record<string, string> = {
  Free: "sc-ui-badge--secondary",
  Starter: "sc-ui-badge--primary",
  Pro: "sc-ui-badge--success",
  Enterprise: "sc-ui-badge--error",
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
          <p class="sc-admin-page__description">
            サービスの概要と主要指標
          </p>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="sc-ui-button sc-ui-button--outlined" style="font-size:0.8125rem;">
            レポート出力
          </button>
          <button class="sc-ui-button sc-ui-button--filled" style="font-size:0.8125rem;">
            + 新規プロジェクト
          </button>
        </div>
      </div>

      {/* KPI カード */}
      <div class="sc-admin-stats">
        {STATS.map((s) => (
          <div class="sc-admin-stats__card" key={s.label} title={s.description}>
            <div class="sc-admin-stats__label">
              {s.label}
              <span style="display:inline-block;margin-left:4px;width:14px;height:14px;border-radius:50%;background:var(--sc-sys-color-surface-container-highest);text-align:center;line-height:14px;font-size:10px;color:var(--sc-sys-color-on-surface-variant);cursor:help;" title={s.description}>
                ?
              </span>
            </div>
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
        <div style="display:grid;grid-template-columns:1fr 360px;gap:20px;margin-bottom:24px;">
          {/* リソース使用状況 */}
          <div class="sc-ui-card sc-ui-card--outlined">
            <div style="padding:20px;">
              <h3 style="margin:0 0 20px;font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);">
                リソース使用状況
              </h3>
              <div style="display:flex;flex-direction:column;gap:20px;">
                {USAGE_METRICS.map((m) => {
                  const pct = Math.round((m.current / m.limit) * 100);
                  const isHigh = pct > 80;
                  return (
                    <div key={m.label}>
                      <div style="display:flex;justify-content:space-between;font-size:0.8125rem;margin-bottom:6px;">
                        <span style="color:var(--sc-sys-color-on-surface);font-weight:500;">
                          {m.label}
                        </span>
                        <span style="color:var(--sc-sys-color-on-surface-variant);">
                          {typeof m.current === "number" && m.current > 1000
                            ? `${(m.current / 1000).toFixed(0)}K`
                            : m.current} / {typeof m.limit === "number" && m.limit > 1000 ? `${(m.limit / 1000).toFixed(0)}K` : m.limit} {m.unit}
                        </span>
                      </div>
                      <div style="height:8px;background:var(--sc-sys-color-surface-container-highest);border-radius:4px;overflow:hidden;">
                        <div
                          style={`height:100%;width:${pct}%;background:${isHigh ? "var(--sc-sys-color-error)" : "var(--sc-sys-color-primary)"};border-radius:4px;transition:width 0.5s;`}
                        />
                      </div>
                      {isHigh && (
                        <div style="font-size:0.6875rem;color:var(--sc-sys-color-error);margin-top:4px;">
                          ⚠ 上限の {pct}% に達しています
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* クイックアクション */}
          <div>
            <div class="sc-ui-card sc-ui-card--outlined" style="margin-bottom:16px;">
              <div style="padding:20px;">
                <h3 style="margin:0 0 16px;font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);">
                  クイックアクション
                </h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                  {QUICK_ACTIONS.map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      style="display:flex;align-items:center;gap:8px;padding:12px;border-radius:8px;background:var(--sc-sys-color-surface-container);text-decoration:none;color:var(--sc-sys-color-on-surface);font-size:0.8125rem;transition:background 0.2s;"
                    >
                      <span style="font-size:1.25rem;">{a.icon}</span>
                      {a.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* システムステータス */}
            <div class="sc-ui-card sc-ui-card--outlined">
              <div style="padding:20px;">
                <h3 style="margin:0 0 12px;font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);">
                  システムステータス
                </h3>
                <div style="display:flex;flex-direction:column;gap:8px;">
                  {[
                    { name: "API サーバー", status: "稼働中", ok: true },
                    { name: "データベース", status: "稼働中", ok: true },
                    { name: "CDN", status: "稼働中", ok: true },
                    { name: "メールサービス", status: "遅延あり", ok: false },
                  ].map((s) => (
                    <div key={s.name} style="display:flex;justify-content:space-between;align-items:center;font-size:0.8125rem;">
                      <span style="color:var(--sc-sys-color-on-surface);">{s.name}</span>
                      <span style={`display:flex;align-items:center;gap:4px;color:${s.ok ? "var(--sc-sys-color-primary)" : "var(--sc-sys-color-error)"};`}>
                        <span style={`width:6px;height:6px;border-radius:50%;background:${s.ok ? "var(--sc-sys-color-primary)" : "var(--sc-sys-color-error)"};`} />
                        {s.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 最近のサインアップ */}
        <div class="sc-ui-card sc-ui-card--outlined">
          <div style="padding:20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <h3 style="margin:0;font-size:1rem;font-weight:600;color:var(--sc-sys-color-on-surface);">
                最近のサインアップ
              </h3>
              <a href="/demo/admin/users" style="font-size:0.8125rem;color:var(--sc-sys-color-primary);text-decoration:none;">
                すべて表示 →
              </a>
            </div>
            <div style="display:flex;flex-direction:column;gap:0;">
              {RECENT_SIGNUPS.map((u) => (
                <div key={u.email} style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--sc-sys-color-outline-variant);">
                  <div style="display:flex;align-items:center;gap:12px;">
                    <span style="font-size:1.5rem;width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:var(--sc-sys-color-surface-container);border-radius:50%;">
                      {u.avatar}
                    </span>
                    <div>
                      <div style="font-size:0.875rem;font-weight:500;color:var(--sc-sys-color-on-surface);">{u.name}</div>
                      <div style="font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);">{u.email}</div>
                    </div>
                  </div>
                  <div style="display:flex;align-items:center;gap:12px;">
                    <span class={`sc-ui-badge ${PLAN_BADGE[u.plan]}`}>{u.plan}</span>
                    <span style="font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);">{u.time}</span>
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
