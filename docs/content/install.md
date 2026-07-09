# インストール

## Deno プロジェクト

```bash
deno add @kotsumo/sawcase
```

以下の依存は自動でインストールされます：

- `@kotsumo/sawtooth-css` — デザイントークン + コンポーネント CSS
- `@deno/gfm` — Markdown レンダリング
- `@zag-js/*` — インタラクティブ UI
- `lucide-preact` — アイコン

## 基本的な使い方

### 管理画面

```tsx
import { AdminShell, AdminPage } from "@kotsumo/sawcase";
import { LayoutDashboard, Users } from "lucide-preact";

export default function Dashboard() {
  return (
    <AdminShell brand="My SaaS" nav={[
      { icon: LayoutDashboard, label: "ダッシュボード", href: "/admin" },
      { icon: Users, label: "ユーザー", href: "/admin/users" },
    ]}>
      <AdminPage title="ダッシュボード">
        <p>コンテンツ</p>
      </AdminPage>
    </AdminShell>
  );
}
```

### ドキュメント

```tsx
import { DocsLayout, Markdown } from "@kotsumo/sawcase";

export default async function DocsPage({ params }) {
  const md = await Deno.readTextFile(`docs/${params.slug}.md`);
  return (
    <DocsLayout brand="My SaaS" sidebar={sidebarItems}>
      <Markdown content={md} />
    </DocsLayout>
  );
}
```

### 認証

```tsx
import { AuthCard } from "@kotsumo/sawcase";

export default function LoginPage() {
  return (
    <AuthCard title="ログイン" subtitle="アカウントにログイン">
      <form method="post">
        <input type="email" name="email" placeholder="you@example.com" />
        <input type="password" name="password" placeholder="パスワード" />
        <button type="submit">ログイン</button>
      </form>
    </AuthCard>
  );
}
```
