import { define } from "@/utils.ts";

const MEMBERS = [
  {
    id: "1",
    name: "田中 太郎",
    email: "tanaka@example.com",
    role: "オーナー",
    avatar: "🧑‍💻",
    active: true,
    joinedAt: "2025-01-15",
  },
  {
    id: "2",
    name: "佐藤 花子",
    email: "sato@example.com",
    role: "管理者",
    avatar: "👩‍💼",
    active: true,
    joinedAt: "2025-03-20",
  },
  {
    id: "3",
    name: "鈴木 一郎",
    email: "suzuki@example.com",
    role: "開発者",
    avatar: "👨‍🔬",
    active: true,
    joinedAt: "2025-06-01",
  },
  {
    id: "4",
    name: "高橋 美咲",
    email: "takahashi@example.com",
    role: "開発者",
    avatar: "👩‍🎨",
    active: false,
    joinedAt: "2025-08-10",
  },
  {
    id: "5",
    name: "伊藤 健太",
    email: "ito@example.com",
    role: "閲覧者",
    avatar: "🧑‍🎓",
    active: true,
    joinedAt: "2026-01-05",
  },
  {
    id: "6",
    name: "渡辺 さくら",
    email: "watanabe@example.com",
    role: "開発者",
    avatar: "👩‍🚀",
    active: true,
    joinedAt: "2026-04-12",
  },
];

const ROLE_COLORS: Record<string, string> = {
  "オーナー": "sc-ui-badge--error",
  "管理者": "sc-ui-badge--primary",
  "開発者": "sc-ui-badge--success",
  "閲覧者": "sc-ui-badge--secondary",
};

export default define.page(function TeamPage() {
  return (
    <div class="sc-admin-page">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">チーム</h2>
          <p class="sc-admin-page__description">
            メンバーとロールの管理
          </p>
        </div>
        <button class="sc-ui-button sc-ui-button--filled">
          + メンバーを招待
        </button>
      </div>

      <div class="sc-admin-page__body">
        {/* 統計 */}
        <div class="sc-admin-stats" style="margin-bottom:24px;">
          {[
            { label: "総メンバー", value: MEMBERS.length.toString() },
            {
              label: "アクティブ",
              value: MEMBERS.filter((m) => m.active).length.toString(),
            },
            {
              label: "ロール数",
              value: new Set(MEMBERS.map((m) => m.role)).size.toString(),
            },
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
          <div style="overflow-x:auto;">
            <table
              style="width:100%;border-collapse:collapse;font-size:0.875rem;"
            >
              <thead>
                <tr
                  style="border-bottom:2px solid var(--sc-sys-color-outline-variant);"
                >
                  <th
                    style="text-align:left;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);"
                  >
                    メンバー
                  </th>
                  <th
                    style="text-align:left;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);"
                  >
                    ロール
                  </th>
                  <th
                    style="text-align:left;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);"
                  >
                    ステータス
                  </th>
                  <th
                    style="text-align:left;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);"
                  >
                    参加日
                  </th>
                  <th
                    style="text-align:right;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);"
                  >
                    操作
                  </th>
                </tr>
              </thead>
              <tbody>
                {MEMBERS.map((m) => (
                  <tr
                    key={m.id}
                    style="border-bottom:1px solid var(--sc-sys-color-outline-variant);"
                  >
                    <td style="padding:12px 16px;">
                      <div style="display:flex;align-items:center;gap:12px;">
                        <span
                          style="font-size:1.5rem;width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:var(--sc-sys-color-surface-container);border-radius:50%;"
                        >
                          {m.avatar}
                        </span>
                        <div>
                          <div
                            style="font-weight:500;color:var(--sc-sys-color-on-surface);"
                          >
                            {m.name}
                          </div>
                          <div
                            style="font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);"
                          >
                            {m.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td style="padding:12px 16px;">
                      <span class={`sc-ui-badge ${ROLE_COLORS[m.role]}`}>
                        {m.role}
                      </span>
                    </td>
                    <td style="padding:12px 16px;">
                      <span
                        style={`display:inline-flex;align-items:center;gap:6px;font-size:0.8125rem;color:${
                          m.active
                            ? "var(--sc-sys-color-primary)"
                            : "var(--sc-sys-color-on-surface-variant)"
                        };`}
                      >
                        <span
                          style={`width:8px;height:8px;border-radius:50%;background:${
                            m.active
                              ? "var(--sc-sys-color-primary)"
                              : "var(--sc-sys-color-outline)"
                          };`}
                        />
                        {m.active ? "アクティブ" : "無効"}
                      </span>
                    </td>
                    <td
                      style="padding:12px 16px;color:var(--sc-sys-color-on-surface-variant);"
                    >
                      {m.joinedAt}
                    </td>
                    <td style="padding:12px 16px;text-align:right;">
                      <button
                        class="sc-ui-button sc-ui-button--text"
                        style="font-size:0.8125rem;padding:4px 12px;"
                      >
                        編集
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
});
