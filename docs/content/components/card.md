# Card

コンテンツをグループ化して表示するためのコンテナコンポーネントです。3つのスタイルバリアントと複数の構造パーツを提供します。

## 使い方

```html
<div class="st-card st-card--elevated">
  <div class="st-card__header">
    <h3 class="st-card__title">タイトル</h3>
    <p class="st-card__subtitle">サブタイトル</p>
  </div>
  <div class="st-card__content">
    <p>カードの本文コンテンツ</p>
  </div>
</div>
```

## バリアント

### Elevated（影付き）

影（エレベーション）で浮き上がって見えるカードです。最も一般的なスタイルです。

```html
<div class="st-card st-card--elevated">
  <div class="st-card__content">Elevated Card</div>
</div>
```

### Filled（塗りつぶし）

背景色で区別するカードです。影は使わず、コンテナ色で領域を示します。

```html
<div class="st-card st-card--filled">
  <div class="st-card__content">Filled Card</div>
</div>
```

### Outlined（枠線）

枠線で区切るカードです。フラットなデザインに適しています。

```html
<div class="st-card st-card--outlined">
  <div class="st-card__content">Outlined Card</div>
</div>
```

## 構造パーツ

カードは以下のパーツを組み合わせて構成します。すべてのパーツはオプションです。

```html
<div class="st-card st-card--outlined">
  <!-- メディア（画像・動画など） -->
  <div class="st-card__media">
    <img src="/image.jpg" alt="説明" />
  </div>

  <!-- ヘッダー（タイトル + サブタイトル） -->
  <div class="st-card__header">
    <h3 class="st-card__title">カードタイトル</h3>
    <p class="st-card__subtitle">補足テキスト</p>
  </div>

  <!-- 本文コンテンツ -->
  <div class="st-card__content">
    <p>自由なコンテンツを配置できます。</p>
  </div>

  <!-- アクション（ボタン等） -->
  <div class="st-card__actions">
    <button class="st-button st-button--text">キャンセル</button>
    <button class="st-button st-button--filled">確定</button>
  </div>
</div>
```

## クラス一覧

| クラス | 説明 |
|--------|------|
| `st-card` | ベースクラス（必須） |
| `st-card--elevated` | 影付きスタイル |
| `st-card--filled` | 塗りつぶしスタイル |
| `st-card--outlined` | 枠線スタイル |
| `st-card__header` | カードヘッダー |
| `st-card__title` | タイトル |
| `st-card__subtitle` | サブタイトル |
| `st-card__media` | メディアエリア |
| `st-card__content` | 本文エリア |
| `st-card__actions` | アクションエリア |
