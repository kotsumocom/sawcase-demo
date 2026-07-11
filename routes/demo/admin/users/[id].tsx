import { define } from "@/utils.ts";
import { page } from "fresh";

export const handler = define.handlers({
  GET(ctx) {
    const userId = ctx.params.id;
    return page({ userId });
  },
});

export default define.page<typeof handler>(function UserDetailPage({ data }) {
  return (
    <div class="sc-admin-page sc-admin-page--narrow">
      <div class="sc-admin-page__header">
        <div>
          <h2 class="sc-admin-page__title">ユーザー編集</h2>
          <p class="sc-admin-page__description">ID: {data.userId}</p>
        </div>
        <div class="sc-admin-page__actions">
          <a href="/demo/admin/users" class="sc-ui-button sc-ui-button--outlined">
            ← 一覧に戻る
          </a>
        </div>
      </div>

      <div class="sc-admin-page__body">
        <form style="display:grid;gap:20px;max-width:480px;">
          <div>
            <label style="display:block;font-size:0.75rem;font-weight:600;color:#49454f;margin-bottom:4px;">
              名前
            </label>
            <input
              type="text"
              value="田中太郎"
              class="st-text-field"
              style="width:100%;padding:12px;border:1px solid #cac4d0;border-radius:8px;font-size:0.875rem;"
            />
          </div>
          <div>
            <label style="display:block;font-size:0.75rem;font-weight:600;color:#49454f;margin-bottom:4px;">
              メールアドレス
            </label>
            <input
              type="email"
              value="tanaka@example.com"
              class="st-text-field"
              style="width:100%;padding:12px;border:1px solid #cac4d0;border-radius:8px;font-size:0.875rem;"
            />
          </div>
          <div>
            <label style="display:block;font-size:0.75rem;font-weight:600;color:#49454f;margin-bottom:4px;">
              ロール
            </label>
            <select
              class="st-text-field"
              style="width:100%;padding:12px;border:1px solid #cac4d0;border-radius:8px;font-size:0.875rem;"
            >
              <option>管理者</option>
              <option>編集者</option>
              <option>閲覧者</option>
            </select>
          </div>
          <div style="display:flex;gap:12px;padding-top:8px;">
            <button class="sc-ui-button sc-ui-button--filled" type="submit">
              保存
            </button>
            <button class="sc-ui-button sc-ui-button--outlined" type="button">
              削除
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});
