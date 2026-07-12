import { define } from "@/utils.ts";
import { StatusBadge, ProgressBar } from "@kotsumo/sawcase/components";
import type { BadgeVariant } from "@kotsumo/sawcase/components";

const PROJECTS = [
  { id: "1", name: "Sawcase", description: "Deno Fresh 専用 SaaS スターターキット", status: "active", progress: 78, tags: ["TypeScript", "Deno", "CSS"], members: 4, updatedAt: "2026-07-10" },
  { id: "2", name: "API Gateway", description: "マイクロサービス向け API ゲートウェイ", status: "active", progress: 45, tags: ["Go", "gRPC"], members: 3, updatedAt: "2026-07-09" },
  { id: "3", name: "Mobile App", description: "iOS / Android クロスプラットフォームアプリ", status: "paused", progress: 62, tags: ["Flutter", "Dart"], members: 5, updatedAt: "2026-07-05" },
  { id: "4", name: "Data Pipeline", description: "リアルタイムデータ処理パイプライン", status: "completed", progress: 100, tags: ["Python", "Kafka"], members: 2, updatedAt: "2026-06-28" },
  { id: "5", name: "Auth Service", description: "OAuth 2.0 / OIDC 認証マイクロサービス", status: "active", progress: 30, tags: ["Rust", "JWT"], members: 2, updatedAt: "2026-07-11" },
  { id: "6", name: "Monitoring Dashboard", description: "インフラ監視ダッシュボード", status: "archived", progress: 100, tags: ["React", "Grafana"], members: 1, updatedAt: "2026-05-15" },
];

const STATUS_LABELS: Record<string, { label: string; variant: BadgeVariant }> = {
  active: { label: "進行中", variant: "info" },
  paused: { label: "一時停止", variant: "warning" },
  completed: { label: "完了", variant: "success" },
  archived: { label: "アーカイブ", variant: "neutral" },
};

export default define.page(function ProjectsPage() {
  return (
    <div class="sc-admin-page">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">プロジェクト</h2>
          <p class="sc-admin-page__description">チームのプロジェクトを管理</p>
        </div>
        <button class="sc-ui-button sc-ui-button--filled">
          + 新規プロジェクト
        </button>
      </div>

      <div class="sc-admin-page__body">
        {/* フィルター */}
        <div class="sc-admin-page__actions sc-admin-page__filters">
          {["すべて", "進行中", "一時停止", "完了", "アーカイブ"].map((f, i) => (
            <button
              key={f}
              class={`sc-ui-button sc-ui-button--sm ${i === 0 ? "sc-ui-button--filled" : "sc-ui-button--outlined"}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* プロジェクトカードグリッド */}
        <div class="sc-admin-project-grid">
          {PROJECTS.map((p) => {
            const status = STATUS_LABELS[p.status];
            return (
              <div class="sc-ui-card sc-ui-card--outlined" key={p.id}>
                <div class="sc-admin-card-body">
                  <div class="sc-admin-project-card__header">
                    <h3 class="sc-admin-project-card__title">{p.name}</h3>
                    <StatusBadge variant={status.variant}>{status.label}</StatusBadge>
                  </div>
                  <p class="sc-admin-project-card__desc">{p.description}</p>

                  <ProgressBar
                    label="進捗"
                    value={p.progress}
                    unit="%"
                  />

                  <div class="sc-admin-project-card__tags">
                    {p.tags.map((tag) => (
                      <StatusBadge key={tag} variant="neutral" small>{tag}</StatusBadge>
                    ))}
                  </div>

                  <div class="sc-admin-project-card__footer">
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
