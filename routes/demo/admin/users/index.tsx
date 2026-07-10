import { define } from "@/utils.ts";

const USERS = [
  { id: "1", name: "田中太郎", email: "tanaka@example.com", role: "管理者", status: "有効" },
  { id: "2", name: "鈴木花子", email: "suzuki@example.com", role: "編集者", status: "有効" },
  { id: "3", name: "佐藤次郎", email: "sato@example.com", role: "閲覧者", status: "無効" },
  { id: "4", name: "高橋美咲", email: "takahashi@example.com", role: "編集者", status: "有効" },
  { id: "5", name: "伊藤健一", email: "ito@example.com", role: "閲覧者", status: "有効" },
];

export default define.page(function UsersPage() {
  return (
    <div class="sc-admin-page sc-admin-page--wide">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">ユーザー一覧</h2>
          <p class="sc-admin-page__description">
            {USERS.length} 件のユーザーが登録されています
          </p>
        </div>
        <div class="sc-admin-page__actions">
          <button class="st-button st-button--filled">新規追加</button>
        </div>
      </div>

      <div class="sc-admin-page__body">
        <table
          style="width:100%;border-collapse:collapse;font-size:0.875rem;"
        >
          <thead>
            <tr
              style="border-bottom:2px solid var(--sc-sys-color-outline-variant,#cac4d0);"
            >
              <th style="text-align:left;padding:12px;font-weight:600;">名前</th>
              <th style="text-align:left;padding:12px;font-weight:600;">メールアドレス</th>
              <th style="text-align:left;padding:12px;font-weight:600;">ロール</th>
              <th style="text-align:left;padding:12px;font-weight:600;">ステータス</th>
              <th style="text-align:left;padding:12px;font-weight:600;">操作</th>
            </tr>
          </thead>
          <tbody>
            {USERS.map((user) => (
              <tr
                key={user.id}
                style="border-bottom:1px solid var(--sc-sys-color-outline-variant,#cac4d0);"
              >
                <td style="padding:12px;font-weight:500;">{user.name}</td>
                <td style="padding:12px;color:#49454f;">{user.email}</td>
                <td style="padding:12px;">
                  <span
                    style="display:inline-block;padding:2px 10px;border-radius:9999px;font-size:0.75rem;font-weight:500;background:var(--sc-sys-color-surface-variant,#e7e0ec);color:var(--sc-sys-color-on-surface-variant,#49454f);"
                  >
                    {user.role}
                  </span>
                </td>
                <td style="padding:12px;">
                  <span
                    style={`display:inline-block;padding:2px 10px;border-radius:9999px;font-size:0.75rem;font-weight:500;${user.status === "有効" ? "background:#d4edda;color:#155724;" : "background:#f8d7da;color:#721c24;"}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td style="padding:12px;">
                  <a
                    href={`/demo/admin/users/${user.id}`}
                    class="st-button st-button--text"
                    style="font-size:0.8125rem;"
                  >
                    編集
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
