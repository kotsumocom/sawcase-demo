import { define } from "@/utils.ts";

export default define.page(function ErrorDemo() {
  return (
    <div class="sc-error-shell">
      <div class="sc-error-card">
        <div class="sc-error-card__icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </div>
        <div class="sc-error-card__code">404</div>
        <h1 class="sc-error-card__title">ページが見つかりません</h1>
        <p class="sc-error-card__message">
          お探しのページは存在しないか、移動した可能性があります。
          URL が正しいかご確認ください。
        </p>
        <div class="sc-error-card__actions">
          <a href="/" class="sc-ui-button sc-ui-button--filled">
            トップページに戻る
          </a>
        </div>
      </div>
    </div>
  );
});
