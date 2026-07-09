# クラスリファレンス

## 管理画面 (sc-admin-*)

### レイアウト構造

```html
<div class="sc-admin-shell">
  <header class="sc-admin-header">
    <button class="sc-admin-header__menu-btn">...</button>
    <div class="sc-admin-header__brand">
      <span class="sc-admin-header__app-name">App Name</span>
    </div>
    <div class="sc-admin-header__breadcrumb">ページ名</div>
    <div class="sc-admin-header__actions">...</div>
  </header>

  <div class="sc-admin-body">
    <nav class="sc-admin-nav">
      <div class="sc-admin-nav__group">
        <div class="sc-admin-nav__group-label">セクション名</div>
        <a href="..." class="sc-admin-nav__link">リンク</a>
      </div>
    </nav>
    <main class="sc-admin-content">...</main>
  </div>
</div>
```

### クラス一覧

| クラス | 説明 |
|--------|------|
| `sc-admin-shell` | 全体コンテナ（100vh） |
| `sc-admin-header` | 固定ヘッダー |
| `sc-admin-header__menu-btn` | モバイルメニューボタン |
| `sc-admin-header__brand` | ブランドエリア |
| `sc-admin-header__app-name` | アプリ名 |
| `sc-admin-header__breadcrumb` | パンくず / ページ名 |
| `sc-admin-header__actions` | 右端のアクション |
| `sc-admin-body` | ヘッダー以下のフレックスコンテナ |
| `sc-admin-nav` | サイドナビゲーション |
| `sc-admin-nav__group` | ナビグループ |
| `sc-admin-nav__group-label` | グループラベル |
| `sc-admin-nav__link` | ナビリンク |
| `sc-admin-nav__icon` | リンク内のアイコン（24x24 SVG） |
| `sc-admin-content` | メインコンテンツエリア |
| `sc-admin-page__header` | ページヘッダー |
| `sc-admin-page__title` | ページタイトル |
| `sc-admin-page__description` | ページ説明 |

---

## ドキュメント (sc-docs-*)

### レイアウト構造

```html
<div class="sc-docs-shell">
  <header class="sc-docs-header">
    <div class="sc-docs-header__inner">
      <a class="sc-docs-header__brand">ブランド</a>
      <nav class="sc-docs-header__nav">...</nav>
    </div>
  </header>
  <div class="sc-docs-body">
    <aside class="sc-docs-sidebar">...</aside>
    <main class="sc-docs-content">
      <article class="sc-docs-article">...</article>
    </main>
  </div>
</div>
```

### クラス一覧

| クラス | 説明 |
|--------|------|
| `sc-docs-shell` | 全体コンテナ |
| `sc-docs-header` | 固定ヘッダー |
| `sc-docs-header__brand` | ブランド |
| `sc-docs-header__nav` | トップナビ |
| `sc-docs-body` | サイドバー + コンテンツのフレックス |
| `sc-docs-sidebar` | 左サイドバー |
| `sc-docs-sidebar__group` | サイドバーグループ |
| `sc-docs-sidebar__group-label` | グループラベル |
| `sc-docs-sidebar__link` | サイドバーリンク |
| `sc-docs-sidebar__link--active` | アクティブリンク |
| `sc-docs-content` | コンテンツエリア |
| `sc-docs-article` | 記事本文（prose スタイル） |

---

## 認証 (sc-auth)

### レイアウト構造

```html
<div class="sc-auth">
  <div class="sc-auth__card">
    <div class="sc-auth__header">
      <div class="sc-auth__logo">...</div>
      <h1 class="sc-auth__title">ログイン</h1>
      <p class="sc-auth__subtitle">サブタイトル</p>
    </div>
    <form class="sc-auth__form">...</form>
    <div class="sc-auth__footer">...</div>
  </div>
</div>
```

| クラス | 説明 |
|--------|------|
| `sc-auth` | 全画面中央配置コンテナ |
| `sc-auth__card` | 認証カード |
| `sc-auth__header` | カードヘッダー |
| `sc-auth__logo` | ロゴ |
| `sc-auth__title` | タイトル |
| `sc-auth__form` | フォーム |
| `sc-auth__footer` | フッター（リンク等） |
