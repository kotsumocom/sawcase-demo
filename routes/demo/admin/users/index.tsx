import { define } from "@/utils.ts";
import {
  DataTable,
  FilterBar,
  StatusBadge,
  UserAvatar,
} from "@kotsumo/sawcase/components";
import type { DataTableColumn } from "@kotsumo/sawcase/components";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  status: string;
  lastLogin: string;
  apiCalls: number;
}

const USERS: User[] = [
  { id: "1", name: "田中 太郎", email: "tanaka@example.com", role: "オーナー", plan: "Enterprise", status: "有効", lastLogin: "2 時間前", apiCalls: 12400 },
  { id: "2", name: "佐藤 花子", email: "sato@example.com", role: "管理者", plan: "Pro", status: "有効", lastLogin: "1 日前", apiCalls: 8200 },
  { id: "3", name: "鈴木 一郎", email: "suzuki@example.com", role: "開発者", plan: "Pro", status: "有効", lastLogin: "3 時間前", apiCalls: 34500 },
  { id: "4", name: "高橋 美咲", email: "takahashi@example.com", role: "開発者", plan: "Starter", status: "無効", lastLogin: "2 週間前", apiCalls: 1200 },
  { id: "5", name: "伊藤 健太", email: "ito@example.com", role: "閲覧者", plan: "Free", status: "有効", lastLogin: "5 分前", apiCalls: 350 },
  { id: "6", name: "渡辺 さくら", email: "watanabe@example.com", role: "開発者", plan: "Pro", status: "有効", lastLogin: "30 分前", apiCalls: 22100 },
  { id: "7", name: "山本 大輔", email: "yamamoto@example.com", role: "閲覧者", plan: "Starter", status: "有効", lastLogin: "1 時間前", apiCalls: 870 },
  { id: "8", name: "中村 愛", email: "nakamura@example.com", role: "管理者", plan: "Pro", status: "招待中", lastLogin: "—", apiCalls: 0 },
];

const ROLE_VARIANT: Record<string, "error" | "info" | "success" | "neutral"> = {
  "オーナー": "error",
  "管理者": "info",
  "開発者": "success",
  "閲覧者": "neutral",
};

const STATUS_VARIANT: Record<string, "success" | "error" | "warning"> = {
  "有効": "success",
  "無効": "error",
  "招待中": "warning",
};

const columns: DataTableColumn<User>[] = [
  {
    key: "name",
    label: "ユーザー",
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
    key: "plan",
    label: "プラン",
    render: (v) => <StatusBadge variant="neutral">{v as string}</StatusBadge>,
  },
  {
    key: "status",
    label: "ステータス",
    render: (v) => <StatusBadge variant={STATUS_VARIANT[v as string]}>{v as string}</StatusBadge>,
  },
  { key: "lastLogin", label: "最終ログイン" },
  {
    key: "apiCalls",
    label: "API コール",
    align: "right",
    render: (v) => (v as number).toLocaleString(),
  },
  {
    key: "id",
    label: "操作",
    align: "right",
    render: (_v, row) => (
      <div class="sc-admin-page__actions">
        <a href={`/demo/admin/users/${row.id}`} class="sc-ui-button sc-ui-button--text sc-ui-button--sm">
          編集
        </a>
        <button class="sc-ui-button sc-ui-button--text sc-ui-button--sm sc-danger-zone__btn">
          削除
        </button>
      </div>
    ),
  },
];

export default define.page(function UsersPage() {
  return (
    <div class="sc-admin-page sc-admin-page--wide">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">ユーザー管理</h2>
          <p class="sc-admin-page__description">
            {USERS.length} 件のユーザーが登録されています
          </p>
        </div>
        <div class="sc-admin-page__actions">
          <button class="sc-ui-button sc-ui-button--outlined sc-ui-button--sm">
            CSV エクスポート
          </button>
          <button class="sc-ui-button sc-ui-button--filled sc-ui-button--sm">
            + ユーザーを招待
          </button>
        </div>
      </div>

      <div class="sc-admin-page__body">
        <FilterBar
          searchPlaceholder="🔍 名前・メールアドレスで検索..."
          filters={[
            { key: "role", label: "すべてのロール", options: ["オーナー", "管理者", "開発者", "閲覧者"] },
            { key: "plan", label: "すべてのプラン", options: ["Free", "Starter", "Pro", "Enterprise"] },
            { key: "status", label: "すべてのステータス", options: ["有効", "無効", "招待中"] },
          ]}
        />

        <div class="sc-ui-card sc-ui-card--outlined">
          <DataTable
            columns={columns}
            data={USERS}
            selectable
            onRowClick={(row) => {
              globalThis.location.href = `/demo/admin/users/${row.id}`;
            }}
            rowKey={(row) => row.id}
          />
        </div>
      </div>
    </div>
  );
});
