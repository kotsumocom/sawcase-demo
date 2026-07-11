# Field

フォームフィールドのラッパーコンポーネントです。ラベル、入力要素、ヘルパーテキスト、エラーメッセージをまとめて構造化します。

## 使い方

```html
<div class="st-field">
  <label class="st-field__label">ユーザー名</label>
  <input class="st-input" type="text" placeholder="ユーザー名を入力" />
  <span class="st-field__helper">半角英数字で入力してください</span>
</div>
```

## エラー状態

ヘルパーテキストにエラー用クラスを追加し、入力要素には `aria-invalid` を指定します。

```html
<div class="st-field">
  <label class="st-field__label">メールアドレス</label>
  <input class="st-input" type="email" aria-invalid="true" value="invalid" />
  <span class="st-field__helper st-field__helper--error">
    有効なメールアドレスを入力してください
  </span>
</div>
```

## Textarea との組み合わせ

```html
<div class="st-field">
  <label class="st-field__label">備考</label>
  <textarea class="st-textarea" rows="4" placeholder="自由入力"></textarea>
  <span class="st-field__helper">任意入力（最大500文字）</span>
</div>
```

## フォーム例

複数の Field を組み合わせたフォーム構成の例です。

```html
<form>
  <div class="st-stack st-stack--md">
    <div class="st-field">
      <label class="st-field__label">名前</label>
      <input class="st-input" type="text" required />
    </div>

    <div class="st-field">
      <label class="st-field__label">メールアドレス</label>
      <input class="st-input" type="email" required />
      <span class="st-field__helper">確認メールを送信します</span>
    </div>

    <div class="st-field">
      <label class="st-field__label">メッセージ</label>
      <textarea class="st-textarea" rows="4"></textarea>
    </div>

    <button class="st-button st-button--filled" type="submit">送信</button>
  </div>
</form>
```

## クラス一覧

| クラス | 説明 |
|--------|------|
| `st-field` | フィールドラッパー |
| `st-field__label` | ラベル |
| `st-field__helper` | ヘルパーテキスト |
| `st-field__helper--error` | エラーメッセージ用ヘルパー |
