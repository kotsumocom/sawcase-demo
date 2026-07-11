import { define } from "@/utils.ts";

const PROJECTS = [
  {
    id: "1",
    name: "Sawcase",
    description: "Deno Fresh 専用 SaaS スターターキット",
    status: "active",
    progress: 78,
    tags: ["TypeScript", "Deno", "CSS"],
    members: 4,
    updatedAt: "2026-07-10",
  },
  {
    id: "2",
    name: "API Gateway",
    description: "マイクロサービス向け API ゲートウェイ",
    status: "active",
    progress: 45,
    tags: ["Go", "gRPC"],
    members: 3,
    updatedAt: "2026-07-09",
  },
  {
    id: "3",
    name: "Mobile App",
    description: "iOS / Android クロスプラットフォームアプリ",
    status: "paused",
    progress: 62,
    tags: ["Flutter", "Dart"],
    members: 5,
    updatedAt: "2026-07-05",
  },
  {
    id: "4",
    name: "Data Pipeline",
    description: "リアルタイムデータ処理パイプライン",
    status: "completed",
    progress: 100,
    tags: ["Python", "Kafka"],
    members: 2,
    updatedAt: "2026-06-28",
  },
  {
    id: "5",
    name: "Auth Service",
    description: "OAuth 2.0 / OIDC 認証マイクロサービス",
    status: "active",
    progress: 30,
    tags: ["Rust", "JWT"],
    members: 2,
    updatedAt: "2026-07-11",
  },
  {
    id: "6",
    name: "Monitoring Dashboard",
    description: "インフラ監視ダッシュボード",
    status: "archived",
    progress: 100,
    tags: ["React", "Grafana"],
    members: 1,
    updatedAt: "2026-05-15",
  },
];

const STATUS_LABELS: Record<string, { label: string; variant: string }> = {
  active: { label: "進行中", variant: "sc-ui-badge--primary" },
  paused: { label: "一時停止", variant: "sc-ui-badge--warning" },
  completed: { label: "完了", variant: "sc-ui-badge--success" },
  archived: { label: "アーカイブ", variant: "sc-ui-badge--secondary" },
};

export default define.page(function ProjectsPage() {
  return (
    <div class="sc-admin-page">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">プロジェクト</h2>
          <p class="sc-admin-page__description">
            チームのプロジェクトを管理
          </p>
        </div>
        <button class="sc-ui-button sc-ui-button--filled">
          + 新規プロジェクト
        </button>
      </div>

      <div class="sc-admin-page__body">
        {/* フィルター */}
        <div
          style="display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap;"
        >
          {["すべて", "進行中", "一時停止", "完了", "アーカイブ"].map(
            (f, i) => (
              <button
                key={f}
                class={`sc-ui-button ${
                  i === 0 ? "sc-ui-button--filled" : "sc-ui-button--outlined"
                }`}
                style="font-size:0.8125rem;padding:6px 16px;"
              >
                {f}
              </button>
            ),
          )}
        </div>

        {/* プロジェクトカードグリッド */}
        <div
          style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px;"
        >
          {PROJECTS.map((p) => {
            const status = STATUS_LABELS[p.status];
            return (
              <div class="sc-ui-card sc-ui-card--outlined" key={p.id}>
                <div style="padding:20px;">
                  <div
                    style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;"
                  >
                    <h3
                      style="margin:0;font-size:1.125rem;font-weight:600;color:var(--sc-sys-color-on-surface);"
                    >
                      {p.name}
                    </h3>
                    <span class={`sc-ui-badge ${status.variant}`}>
                      {status.label}
                    </span>
                  </div>
                  <p
                    style="margin:0 0 16px;font-size:0.875rem;color:var(--sc-sys-color-on-surface-variant);"
                  >
                    {p.description}
                  </p>

                  {/* 進捗バー */}
                  <div style="margin-bottom:12px;">
                    <div
                      style="display:flex;justify-content:space-between;font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);margin-bottom:4px;"
                    >
                      <span>進捗</span>
                      <span>{p.progress}%</span>
                    </div>
                    <div
                      style="height:6px;background:var(--sc-sys-color-surface-container-highest);border-radius:3px;overflow:hidden;"
                    >
                      <div
                        style={`height:100%;width:${p.progress}%;background:var(--sc-sys-color-primary);border-radius:3px;transition:width 0.3s;`}
                      />
                    </div>
                  </div>

                  {/* タグ */}
                  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        class="sc-ui-badge sc-ui-badge--secondary"
                        style="font-size:0.6875rem;"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* フッター */}
                  <div
                    style="display:flex;justify-content:space-between;align-items:center;font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);padding-top:12px;border-top:1px solid var(--sc-sys-color-outline-variant);"
                  >
                    <span>👥 {p.members} メンバー</span>
                    <span>更新: {p.updatedAt}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
