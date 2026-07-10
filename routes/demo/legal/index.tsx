import { define } from "@/utils.ts";

const TERMS_MD = `
## 第1条（適用）

本規約は、本サービスの利用条件を定めるものです。ユーザーは、本規約に同意の上、本サービスをご利用ください。

## 第2条（利用登録）

1. 登録を希望する方は、当社の定める方法によって利用登録を申請してください。
2. 当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあります。
   - 虚偽の事項を届け出た場合
   - 本規約に違反したことがある者からの申請である場合

## 第3条（禁止事項）

ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。

- 法令または公序良俗に違反する行為
- 犯罪行為に関連する行為
- 本サービスの運営を妨害するおそれのある行為
- 他のユーザーに関する個人情報等を収集する行為

## 第4条（利用制限および登録抹消）

当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、投稿データを削除し、当該ユーザーに対して本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。

## 第5条（免責事項）

当社は、本サービスに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証しておりません。
`.trim();

export default define.page(function TermsDemo() {
  return (
    <div class="sc-legal-shell">
      <header class="sc-legal-header">
        <div class="sc-legal-header__inner">
          <span class="sc-legal-header__brand" style="font-weight:700;letter-spacing:-0.02em;">Demo SaaS</span>
          <nav class="sc-legal-header__nav">
            <a href="/demo/legal" class="sc-legal-header__link--active">利用規約</a>
            <a href="/demo/legal">プライバシーポリシー</a>
            <a href="/demo/legal">特定商取引法</a>
          </nav>
        </div>
      </header>

      <main class="sc-legal-content">
        <article class="sc-legal-article">
          <h1 class="sc-legal-article__title">利用規約</h1>
          <p class="sc-legal-article__date">最終更新日: 2026年7月10日</p>
          <div class="markdown-body" data-color-mode="light" dangerouslySetInnerHTML={{ __html: renderMd(TERMS_MD) }} />
        </article>
      </main>

      <footer class="sc-legal-footer">
        <div class="sc-legal-footer__inner">Demo SaaS Inc.</div>
      </footer>
    </div>
  );
});

function renderMd(md: string): string {
  // 簡易 Markdown → HTML（デモ用）
  return md
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^(\d+)\. (.+)$/gm, "<p>$1. $2</p>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hplu])/gm, "<p>")
    .replace(/<p><\/p>/g, "");
}
