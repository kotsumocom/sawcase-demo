import { define } from "@/utils.ts";

export default define.page(function LoginPage() {
  return (
    <div class="sc-auth">
      <div class="sc-auth__card">
        <div class="sc-auth__header">
          <div class="sc-auth__logo">🪚</div>
          <h1 class="sc-auth__title">ログイン</h1>
          <p class="sc-auth__subtitle">Sawcase Demo にログインする</p>
        </div>
        <div class="sc-auth__body">
          <form style="display:grid;gap:16px;">
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
                placeholder="••••••••"
                style="width:100%;padding:12px;border:1px solid #cac4d0;border-radius:8px;font-size:0.875rem;box-sizing:border-box;"
              />
            </div>
            <button
              class="st-button st-button--filled"
              style="width:100%;justify-content:center;"
              type="submit"
            >
              ログイン
            </button>
          </form>
        </div>
        <div class="sc-auth__footer">
          アカウントをお持ちでない方は{" "}
          <a href="/auth/signup" style="color:var(--st-sys-color-primary,#6750a4);font-weight:500;">
            サインアップ
          </a>
        </div>
      </div>
    </div>
  );
});
