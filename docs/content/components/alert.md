# Alert

ユーザーへの通知やメッセージを表示するコンポーネントです。情報・成功・警告・エラーの4つのバリアントを提供します。

## 使い方

```html
<div class="st-alert st-alert--info">
  <div class="st-alert__icon">ℹ️</div>
  <div>
    <div class="st-alert__title">お知らせ</div>
    <div class="st-alert__content">システムメンテナンスは明日実施されます。</div>
  </div>
</div>
```

## バリアント

### Info（情報）

一般的な情報の通知に使用します。

```html
<div class="st-alert st-alert--info">
  <div class="st-alert__content">これは情報メッセージです。</div>
</div>
```

### Success（成功）

操作が成功したことを示します。

```html
<div class="st-alert st-alert--success">
  <div class="st-alert__content">保存が完了しました。</div>
</div>
```

### Warning（警告）

注意が必要な事項を示します。

```html
<div class="st-alert st-alert--warning">
  <div class="st-alert__content">この操作は取り消せません。</div>
</div>
```

### Error（エラー）

エラーや問題を示します。

```html
<div class="st-alert st-alert--error">
  <div class="st-alert__content">入力内容にエラーがあります。</div>
</div>
```

## 構造パーツ

```html
<div class="st-alert st-alert--warning">
  <!-- アイコン（オプション） -->
  <div class="st-alert__icon">
    <svg>...</svg>
  </div>

  <div>
    <!-- タイトル（オプション） -->
    <div class="st-alert__title">警告タイトル</div>

    <!-- 本文 -->
    <div class="st-alert__content">
      詳細な警告メッセージをここに記載します。
    </div>
  </div>

  <!-- 閉じるボタン（オプション） -->
  <button class="st-alert__close">&times;</button>
</div>
```

## クラス一覧

| クラス | 説明 |
|--------|------|
| `st-alert` | ベースクラス（必須） |
| `st-alert--info` | 情報スタイル |
| `st-alert--success` | 成功スタイル |
| `st-alert--warning` | 警告スタイル |
| `st-alert--error` | エラースタイル |
| `st-alert__icon` | アイコンエリア |
| `st-alert__title` | タイトル |
| `st-alert__content` | 本文コンテンツ |
| `st-alert__close` | 閉じるボタン |
