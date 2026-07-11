# レイアウト

## Sawcase レイアウトコンポーネント

ページ全体の構造には **Sawcase のレイアウトコンポーネント**（`sc-*` プレフィックス）の使用を推奨します。管理画面、ドキュメント、認証画面など、ページ種別ごとに最適化されたレイアウトが用意されています。

詳しくは [クラスリファレンス](/docs/reference) を参照してください。

| プレフィックス | 用途 | 主な構成要素 |
|-------------|------|------------|
| `sc-admin-*` | 管理画面 | ヘッダー + サイドナビ + コンテンツ |
| `sc-docs-*` | ドキュメント | ヘッダー + サイドバー + 記事本文 |
| `sc-auth` | 認証 | 中央配置カード |
| `sc-lp-*` | LP | ヒーロー + フィーチャー + フッター |

### 使用例

```html
<!-- 管理画面レイアウト -->
<div class="sc-admin-shell">
  <header class="sc-admin-header">...</header>
  <div class="sc-admin-body">
    <nav class="sc-admin-nav">...</nav>
    <main class="sc-admin-content">...</main>
  </div>
</div>
```

---

## レイアウトユーティリティ

Sawcase レイアウトの中で、コンテンツの配置やグルーピングに使えるユーティリティクラス（`st-*` プレフィックス）も提供しています。

### Container

コンテンツの最大幅を制限し、中央寄せするコンテナです。

```html
<div class="st-container">最大幅コンテンツ</div>
<div class="st-container st-container--sm">小さいコンテナ</div>
<div class="st-container st-container--lg">大きいコンテナ</div>
```

| クラス | 説明 |
|--------|------|
| `st-container` | ベースコンテナ |
| `st-container--sm` | 小幅コンテナ |
| `st-container--md` | 中幅コンテナ |
| `st-container--lg` | 大幅コンテナ |
| `st-container--xl` | 最大幅コンテナ |

### Flex

Flexbox を使ったレイアウトユーティリティです。

```html
<div class="st-flex st-flex--between st-flex--items-center">
  <span>左寄せ</span>
  <span>右寄せ</span>
</div>

<div class="st-flex st-flex--col st-gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

| クラス | 説明 |
|--------|------|
| `st-flex` | `display: flex` |
| `st-flex--inline` | `display: inline-flex` |
| `st-flex--col` | `flex-direction: column` |
| `st-flex--wrap` | `flex-wrap: wrap` |
| `st-flex--center` | `justify-content: center` |
| `st-flex--between` | `justify-content: space-between` |
| `st-flex--end` | `justify-content: flex-end` |
| `st-flex--items-center` | `align-items: center` |
| `st-flex--items-start` | `align-items: flex-start` |
| `st-flex--items-end` | `align-items: flex-end` |

### Grid

CSS Grid を使ったレイアウトユーティリティです。

```html
<div class="st-grid st-grid--cols-3 st-gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

| クラス | 説明 |
|--------|------|
| `st-grid` | `display: grid` |
| `st-grid--cols-2` | 2カラム |
| `st-grid--cols-3` | 3カラム |
| `st-grid--cols-4` | 4カラム |

### Stack

縦方向に要素を積み重ねるコンポーネントです。子要素間に均等な余白を追加します。

```html
<div class="st-stack st-stack--md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

| クラス | 説明 |
|--------|------|
| `st-stack` | ベースクラス |
| `st-stack--sm` | 小さい間隔 |
| `st-stack--md` | 中間隔 |
| `st-stack--lg` | 大きい間隔 |
| `st-stack--xl` | 最大間隔 |

### Gap

Flex / Grid と併用する間隔ユーティリティです。

```html
<div class="st-flex st-gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

| クラス | 対応する gap 値 |
|--------|---------------|
| `st-gap-0` | 0 |
| `st-gap-1` | spacing-1 |
| `st-gap-2` | spacing-2 |
| `st-gap-3` | spacing-3 |
| `st-gap-4` | spacing-4 |
| `st-gap-5` | spacing-5 |
| `st-gap-6` | spacing-6 |
| `st-gap-8` | spacing-8 |
| `st-gap-10` | spacing-10 |
| `st-gap-12` | spacing-12 |
