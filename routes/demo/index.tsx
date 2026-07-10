import { define } from "@/utils.ts";
import ThemeToggle from "@/islands/ThemeToggle.tsx";
import {
  LayoutDashboard,
  FileText,
  LogIn,
  Scale,
  AlertTriangle,
  CreditCard,
} from "lucide-preact";

const DEMOS = [
  {
    href: "/demo/admin",
    icon: LayoutDashboard,
    title: "管理画面",
    description: "サイドナビ + ヘッダー + ページ構造のダッシュボード",
    classes: "sc-admin-*",
  },
  {
    href: "/demo/docs",
    icon: FileText,
    title: "ドキュメント",
    description: "サイドバー + 記事本文の 3 カラムレイアウト",
    classes: "sc-docs-*",
  },
  {
    href: "/demo/auth/login",
    icon: LogIn,
    title: "認証画面",
    description: "ログイン / サインアップの中央配置カード",
    classes: "sc-auth-*",
  },
  {
    href: "/demo/legal",
    icon: Scale,
    title: "規約ページ",
    description: "利用規約・プライバシーポリシーのレイアウト",
    classes: "sc-legal-*",
  },
  {
    href: "/demo/error",
    icon: AlertTriangle,
    title: "エラーページ",
    description: "404 / 500 などのエラー表示",
    classes: "sc-error-*",
  },
  {
    href: "/demo/pricing",
    icon: CreditCard,
    title: "料金ページ",
    description: "プラン比較カードのグリッドレイアウト",
    classes: "sc-pricing-*",
  },
];

export default define.page(function DemoIndex() {
  return (
    <div style="min-height:100vh;background:var(--st-sys-color-surface);color:var(--st-sys-color-on-surface);">
      <header style="display:flex;align-items:center;justify-content:space-between;padding:16px 24px;border-bottom:1px solid var(--st-sys-color-outline-variant);">
        <div>
          <a
            href="/"
            style="font-size:1.25rem;font-weight:700;color:var(--st-sys-color-on-surface);text-decoration:none;letter-spacing:-0.02em;"
          >
            Sawcase
          </a>
          <span style="margin-left:12px;font-size:0.875rem;color:var(--st-sys-color-on-surface-variant);">
            デモ一覧
          </span>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <a
            href="/docs"
            style="font-size:0.875rem;color:var(--st-sys-color-primary);text-decoration:none;"
          >
            ドキュメント
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main style="max-width:960px;margin:0 auto;padding:48px 24px;">
        <h1 style="font-size:2rem;font-weight:700;margin:0 0 8px;">
          レイアウトデモ
        </h1>
        <p style="font-size:1rem;color:var(--st-sys-color-on-surface-variant);margin:0 0 40px;">
          Sawcase が提供するレイアウトコンポーネントを実際に確認できます。
        </p>

        <div
          style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px;"
        >
          {DEMOS.map((demo) => {
            const Icon = demo.icon;
            return (
              <a
                key={demo.href}
                href={demo.href}
                target="_blank"
                rel="noopener"
                class="demo-card"
              >
                <div class="demo-card__icon">
                  <Icon size={24} />
                </div>
                <h2 class="demo-card__title">{demo.title}</h2>
                <p class="demo-card__desc">{demo.description}</p>
                <code class="demo-card__classes">{demo.classes}</code>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
});
