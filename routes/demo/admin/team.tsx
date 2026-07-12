import { define } from "@/utils.ts";
import {
  DataTable,
  StatusBadge,
  UserAvatar,
} from "@kotsumo/sawcase/components";
import type { DataTableColumn } from "@kotsumo/sawcase/components";
import { Users, Plus, MoreVertical } from "lucide-preact";

// --- データ定義 ---

interface Team {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  color: string;
}

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  active: boolean;
  joinedAt: string;
  teamId: string;
}

const TEAMS: Team[] = [
  { id: "eng", name: "Engineering", description: "プロダクト開発・インフラ", memberCount: 8, color: "#6750a4" },
  { id: "design", name: "Design", description: "UI/UX デザイン", memberCount: 3, color: "#0b57d0" },
  { id: "marketing", name: "Marketing", description: "マーケティング・広報", memberCount: 4, color: "#0d652d" },
  { id: "support", name: "Customer Support", description: "カスタマーサポート", memberCount: 5, color: "#b3261e" },
];

const MEMBERS: Member[] = [
  { id: "1", name: "田中 太郎", email: "tanaka@example.com", role: "リーダー", active: true, joinedAt: "2025-01-15", teamId: "eng" },
  { id: "2", name: "佐藤 花子", email: "sato@example.com", role: "シニア", active: true, joinedAt: "2025-03-20", teamId: "eng" },
  { id: "3", name: "鈴木 一郎", email: "suzuki@example.com", role: "メンバー", active: true, joinedAt: "2025-06-01", teamId: "eng" },
  { id: "4", name: "高橋 美咲", email: "takahashi@example.com", role: "メンバー", active: false, joinedAt: "2025-08-10", teamId: "eng" },
  { id: "5", name: "伊藤 健太", email: "ito@example.com", role: "メンバー", active: true, joinedAt: "2026-01-05", teamId: "eng" },
  { id: "6", name: "渡辺 さくら", email: "watanabe@example.com", role: "メンバー", active: true, joinedAt: "2026-04-12", teamId: "eng" },
  { id: "7", name: "山本 翔", email: "yamamoto@example.com", role: "リーダー", active: true, joinedAt: "2025-02-10", teamId: "design" },
  { id: "8", name: "中村 あい", email: "nakamura@example.com", role: "メンバー", active: true, joinedAt: "2025-07-01", teamId: "design" },
];

const ROLE_VARIANT: Record<string, "error" | "info" | "success" | "neutral"> = {
  "リーダー": "error",
  "シニア": "info",
  "メンバー": "success",
  "閲覧者": "neutral",
};

const columns: DataTableColumn<Member>[] = [
  {
    key: "name",
    label: "メンバー",
    render: (_v, row) => (
      <div class="sc-data-table__user">
        <UserAvatar name={row.name} size="sm" />
        <div>
          <div class="sc-data-table__user-name">{row.name}</div>
          <div class="sc-data-table__user-email">{row.email}</div>
        </div>
      </div>
    ),
  },
  {
    key: "role",
    label: "ロール",
    render: (v) => <StatusBadge variant={ROLE_VARIANT[v as string] ?? "neutral"}>{v as string}</StatusBadge>,
  },
  {
    key: "active",
    label: "ステータス",
    render: (v) => (
      <StatusBadge variant={(v as boolean) ? "success" : "neutral"}>
        {(v as boolean) ? "アクティブ" : "無効"}
      </StatusBadge>
    ),
  },
  { key: "joinedAt", label: "参加日" },
  {
    key: "id",
    label: "操作",
    align: "right",
    render: () => (
      <button class="sc-ui-button sc-ui-button--text sc-ui-button--sm">編集</button>
    ),
  },
];

// --- コンポーネント ---

/** チームカード */
function TeamCard({ team, selected }: { team: Team; selected?: boolean }) {
  return (
    <div class={`sc-team-card${selected ? " sc-team-card--selected" : ""}`}>
      <div class="sc-team-card__header">
        <div class="sc-team-card__avatar" style={{ background: team.color }}>
          <Users size={18} color="#fff" />
        </div>
        <div class="sc-team-card__info">
          <div class="sc-team-card__name">{team.name}</div>
          <div class="sc-team-card__desc">{team.description}</div>
        </div>
        <button class="sc-ui-button sc-ui-button--text sc-ui-button--sm sc-team-card__menu" type="button">
          <MoreVertical size={16} />
        </button>
      </div>
      <div class="sc-team-card__footer">
        <span class="sc-team-card__count">
          <Users size={14} />
          {team.memberCount} メンバー
        </span>
      </div>
    </div>
  );
}

export default define.page(function TeamPage() {
  // デモ: Engineering チームをデフォルト選択
  const selectedTeam = TEAMS[0];
  const teamMembers = MEMBERS.filter((m) => m.teamId === selectedTeam.id);

  return (
    <div class="sc-admin-page">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">チーム管理</h2>
          <p class="sc-admin-page__description">チームの作成・管理とメンバーの所属管理</p>
        </div>
        <button class="sc-ui-button sc-ui-button--filled">
          <Plus size={16} />
          チームを作成
        </button>
      </div>

      <div class="sc-admin-page__body">
        {/* 統計 */}
        <div class="sc-admin-stats">
          {[
            { label: "総チーム数", value: TEAMS.length.toString() },
            { label: "総メンバー", value: MEMBERS.length.toString() },
            { label: "アクティブ", value: MEMBERS.filter((m) => m.active).length.toString() },
            { label: "招待中", value: "3" },
          ].map((s) => (
            <div class="sc-admin-stats__card" key={s.label}>
              <div class="sc-admin-stats__label">{s.label}</div>
              <div class="sc-admin-stats__value">{s.value}</div>
            </div>
          ))}
        </div>

        {/* チーム一覧 */}
        <section>
          <h3 class="sc-settings-section__title">チーム</h3>
          <div class="sc-team-grid">
            {TEAMS.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                selected={team.id === selectedTeam.id}
              />
            ))}
          </div>
        </section>

        {/* 選択チームのメンバー */}
        <section>
          <div class="sc-team-members__header">
            <h3 class="sc-settings-section__title" style="margin-bottom: 0">
              {selectedTeam.name} のメンバー
            </h3>
            <button class="sc-ui-button sc-ui-button--outlined sc-ui-button--sm">
              <Plus size={14} />
              メンバーを追加
            </button>
          </div>
          <div class="sc-ui-card sc-ui-card--outlined">
            <DataTable columns={columns} data={teamMembers} rowKey={(row) => row.id} />
          </div>
        </section>
      </div>
    </div>
  );
});
