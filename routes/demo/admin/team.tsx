import { define } from "@/utils.ts";
import {
  DataTable,
  StatusBadge,
  UserAvatar,
} from "@kotsumo/sawcase/components";
import type { DataTableColumn } from "@kotsumo/sawcase/components";

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
  active: boolean;
  joinedAt: string;
}

const MEMBERS: Member[] = [
  { id: "1", name: "田中 太郎", email: "tanaka@example.com", role: "オーナー", active: true, joinedAt: "2025-01-15" },
  { id: "2", name: "佐藤 花子", email: "sato@example.com", role: "管理者", active: true, joinedAt: "2025-03-20" },
  { id: "3", name: "鈴木 一郎", email: "suzuki@example.com", role: "開発者", active: true, joinedAt: "2025-06-01" },
  { id: "4", name: "高橋 美咲", email: "takahashi@example.com", role: "開発者", active: false, joinedAt: "2025-08-10" },
  { id: "5", name: "伊藤 健太", email: "ito@example.com", role: "閲覧者", active: true, joinedAt: "2026-01-05" },
  { id: "6", name: "渡辺 さくら", email: "watanabe@example.com", role: "開発者", active: true, joinedAt: "2026-04-12" },
];

const ROLE_VARIANT: Record<string, "error" | "info" | "success" | "neutral"> = {
  "オーナー": "error",
  "管理者": "info",
  "開発者": "success",
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
    render: (v) => <StatusBadge variant={ROLE_VARIANT[v as string]}>{v as string}</StatusBadge>,
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

export default define.page(function TeamPage() {
  return (
    <div class="sc-admin-page">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">チーム管理</h2>
          <p class="sc-admin-page__description">メンバーとロールの管理</p>
        </div>
        <button class="sc-ui-button sc-ui-button--filled">
          + メンバーを招待
        </button>
      </div>

      <div class="sc-admin-page__body">
        {/* 統計 */}
        <div class="sc-admin-stats">
          {[
            { label: "総メンバー", value: MEMBERS.length.toString() },
            { label: "アクティブ", value: MEMBERS.filter((m) => m.active).length.toString() },
            { label: "ロール数", value: new Set(MEMBERS.map((m) => m.role)).size.toString() },
            { label: "招待中", value: "2" },
          ].map((s) => (
            <div class="sc-admin-stats__card" key={s.label}>
              <div class="sc-admin-stats__label">{s.label}</div>
              <div class="sc-admin-stats__value">{s.value}</div>
            </div>
          ))}
        </div>

        {/* メンバーテーブル */}
        <div class="sc-ui-card sc-ui-card--outlined">
          <DataTable columns={columns} data={MEMBERS} rowKey={(row) => row.id} />
        </div>
      </div>
    </div>
  );
});
