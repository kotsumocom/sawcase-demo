import { define } from "@/utils.ts";

export default define.page(function SignupPage() {
  return (
    <div class="sc-auth">
      <div class="sc-auth__card">
        <div class="sc-auth__header">
          <div class="sc-auth__logo">🪚</div>
          <h1 class="sc-auth__title">サインアップ</h1>
          <p class="sc-auth__subtitle">新しいアカウントを作成する</p>
        </div>
        <div class="sc-auth__body">
          <form style="display:grid;gap:16px;">
            <div>
              <label style="display:block;font-size:0.75rem;font-weight:600;color:#49454f;margin-bottom:4px;">
                名前
              </label>
              <input
                type="text"
                placeholder="田中太郎"
                style="width:100%;padding:12px;border:1px solid #cac4d0;border-radius:8px;font-size:0.875rem;box-sizing:border-box;"
              />
            </div>
            <div>
              <label style="display:block;font-size:0.75rem;font-weight:600;color:#49454f;margin-bottom:4px;">
                メールアドレス
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                style="width:100%;padding:12px;border:1px solid #cac4d0;border-radius:8px;font-size:0.875rem;box-sizing:border-box;"
              />
            </div>
            <div>
              <label style="display:block;font-size:0.75rem;font-weight:600;color:#49454f;margin-bottom:4px;">
                パスワード
              </label>
              <input
                type="password"
                placeholder="8文字以上"
                style="width:100%;padding:12px;border:1px solid #cac4d0;border-radius:8px;font-size:0.875rem;box-sizing:border-box;"
              />
            </div>
            <button
              class="st-button st-button--filled"
              style="width:100%;justify-content:center;"
              type="submit"
            >
              アカウントを作成
            </button>
          </form>
        </div>
        <div class="sc-auth__footer">
          すでにアカウントをお持ちの方は{" "}
          <a href="/auth/login" style="color:var(--st-sys-color-primary,#6750a4);font-weight:500;">
            ログイン
          </a>
        </div>
      </div>
    </div>
  );
});
