import { define } from "@/utils.ts";

const USERS = [
  { id: "1", name: "田中 太郎", email: "tanaka@example.com", role: "オーナー", plan: "Enterprise", status: "有効", avatar: "🧑‍💻", lastLogin: "2 時間前", apiCalls: 12400 },
  { id: "2", name: "佐藤 花子", email: "sato@example.com", role: "管理者", plan: "Pro", status: "有効", avatar: "👩‍💼", lastLogin: "1 日前", apiCalls: 8200 },
  { id: "3", name: "鈴木 一郎", email: "suzuki@example.com", role: "開発者", plan: "Pro", status: "有効", avatar: "👨‍🔬", lastLogin: "3 時間前", apiCalls: 34500 },
  { id: "4", name: "高橋 美咲", email: "takahashi@example.com", role: "開発者", plan: "Starter", status: "無効", avatar: "👩‍🎨", lastLogin: "2 週間前", apiCalls: 1200 },
  { id: "5", name: "伊藤 健太", email: "ito@example.com", role: "閲覧者", plan: "Free", status: "有効", avatar: "🧑‍🎓", lastLogin: "5 分前", apiCalls: 350 },
  { id: "6", name: "渡辺 さくら", email: "watanabe@example.com", role: "開発者", plan: "Pro", status: "有効", avatar: "👩‍🚀", lastLogin: "30 分前", apiCalls: 22100 },
  { id: "7", name: "山本 大輔", email: "yamamoto@example.com", role: "閲覧者", plan: "Starter", status: "有効", avatar: "🧑‍🏫", lastLogin: "1 時間前", apiCalls: 870 },
  { id: "8", name: "中村 愛", email: "nakamura@example.com", role: "管理者", plan: "Pro", status: "招待中", avatar: "👩‍⚕️", lastLogin: "—", apiCalls: 0 },
];

const ROLE_BADGE: Record<string, string> = {
  "オーナー": "sc-ui-badge--error",
  "管理者": "sc-ui-badge--primary",
  "開発者": "sc-ui-badge--success",
  "閲覧者": "sc-ui-badge--secondary",
};

const PLAN_BADGE: Record<string, string> = {
  Free: "sc-ui-badge--secondary",
  Starter: "sc-ui-badge--primary",
  Pro: "sc-ui-badge--success",
  Enterprise: "sc-ui-badge--error",
};

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  "有効": { bg: "color-mix(in srgb, var(--sc-sys-color-primary) 12%, transparent)", color: "var(--sc-sys-color-primary)" },
  "無効": { bg: "color-mix(in srgb, var(--sc-sys-color-error) 12%, transparent)", color: "var(--sc-sys-color-error)" },
  "招待中": { bg: "color-mix(in srgb, var(--sc-sys-color-tertiary) 12%, transparent)", color: "var(--sc-sys-color-tertiary)" },
};

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
        <div style="display:flex;gap:8px;">
          <button class="sc-ui-button sc-ui-button--outlined" style="font-size:0.8125rem;">
            CSV エクスポート
          </button>
          <button class="sc-ui-button sc-ui-button--filled" style="font-size:0.8125rem;">
            + ユーザーを招待
          </button>
        </div>
      </div>

      <div class="sc-admin-page__body">
        {/* 検索・フィルター */}
        <div style="display:flex;gap:12px;margin-bottom:20px;flex-wrap:wrap;">
          <div style="flex:1;min-width:240px;">
            <input
              class="sc-ui-input"
              type="search"
              placeholder="🔍 名前・メールアドレスで検索..."
              style="width:100%;"
            />
          </div>
          <select class="sc-ui-input" style="appearance:auto;width:auto;min-width:140px;">
            <option>すべてのロール</option>
            <option>オーナー</option>
            <option>管理者</option>
            <option>開発者</option>
            <option>閲覧者</option>
          </select>
          <select class="sc-ui-input" style="appearance:auto;width:auto;min-width:140px;">
            <option>すべてのプラン</option>
            <option>Free</option>
            <option>Starter</option>
            <option>Pro</option>
            <option>Enterprise</option>
          </select>
          <select class="sc-ui-input" style="appearance:auto;width:auto;min-width:140px;">
            <option>すべてのステータス</option>
            <option>有効</option>
            <option>無効</option>
            <option>招待中</option>
          </select>
        </div>

        {/* テーブル */}
        <div class="sc-ui-card sc-ui-card--outlined">
          <div style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;font-size:0.875rem;">
              <thead>
                <tr style="border-bottom:2px solid var(--sc-sys-color-outline-variant);">
                  <th style="text-align:left;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);">
                    <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
                      <input type="checkbox" style="width:16px;height:16px;accent-color:var(--sc-sys-color-primary);" />
                      ユーザー
                    </label>
                  </th>
                  <th style="text-align:left;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);">ロール</th>
                  <th style="text-align:left;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);">プラン</th>
                  <th style="text-align:left;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);">ステータス</th>
                  <th style="text-align:left;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);">最終ログイン</th>
                  <th style="text-align:right;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);">API コール</th>
                  <th style="text-align:right;padding:12px 16px;font-weight:600;color:var(--sc-sys-color-on-surface-variant);">操作</th>
                </tr>
              </thead>
              <tbody>
                {USERS.map((u) => {
                  const ss = STATUS_STYLE[u.status];
                  return (
                    <tr key={u.id} style="border-bottom:1px solid var(--sc-sys-color-outline-variant);">
                      <td style="padding:12px 16px;">
                        <label style="display:flex;align-items:center;gap:12px;cursor:pointer;">
                          <input type="checkbox" style="width:16px;height:16px;accent-color:var(--sc-sys-color-primary);" />
                          <span style="font-size:1.5rem;width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:var(--sc-sys-color-surface-container);border-radius:50%;">
                            {u.avatar}
                          </span>
                          <div>
                            <div style="font-weight:500;color:var(--sc-sys-color-on-surface);">{u.name}</div>
                            <div style="font-size:0.75rem;color:var(--sc-sys-color-on-surface-variant);">{u.email}</div>
                          </div>
                        </label>
                      </td>
                      <td style="padding:12px 16px;">
                        <span class={`sc-ui-badge ${ROLE_BADGE[u.role]}`}>{u.role}</span>
                      </td>
                      <td style="padding:12px 16px;">
                        <span class={`sc-ui-badge ${PLAN_BADGE[u.plan]}`}>{u.plan}</span>
                      </td>
                      <td style="padding:12px 16px;">
                        <span style={`display:inline-block;padding:2px 10px;border-radius:9999px;font-size:0.75rem;font-weight:500;background:${ss.bg};color:${ss.color};`}>
                          {u.status}
                        </span>
                      </td>
                      <td style="padding:12px 16px;color:var(--sc-sys-color-on-surface-variant);">
                        {u.lastLogin}
                      </td>
                      <td style="padding:12px 16px;text-align:right;font-family:monospace;color:var(--sc-sys-color-on-surface-variant);">
                        {u.apiCalls.toLocaleString()}
                      </td>
                      <td style="padding:12px 16px;text-align:right;">
                        <div style="display:flex;gap:4px;justify-content:flex-end;">
                          <a
                            href={`/demo/admin/users/${u.id}`}
                            class="sc-ui-button sc-ui-button--text"
                            style="font-size:0.8125rem;padding:4px 8px;"
                          >
                            編集
                          </a>
                          <button
                            class="sc-ui-button sc-ui-button--text"
                            style="font-size:0.8125rem;padding:4px 8px;color:var(--sc-sys-color-error);"
                          >
                            削除
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ページネーション */}
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-top:1px solid var(--sc-sys-color-outline-variant);">
            <span style="font-size:0.8125rem;color:var(--sc-sys-color-on-surface-variant);">
              1〜8 件 / 全 8 件
            </span>
            <div style="display:flex;gap:4px;">
              <button class="sc-ui-button sc-ui-button--outlined" style="padding:6px 12px;font-size:0.8125rem;" disabled>
                ← 前へ
              </button>
              <button class="sc-ui-button sc-ui-button--filled" style="padding:6px 12px;font-size:0.8125rem;min-width:36px;">
                1
              </button>
              <button class="sc-ui-button sc-ui-button--outlined" style="padding:6px 12px;font-size:0.8125rem;" disabled>
                次へ →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
