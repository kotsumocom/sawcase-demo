# Input / Textarea

テキスト入力フィールドのコンポーネントです。単一行の `st-input` と複数行の `st-textarea` を提供します。

## Input の使い方

```html
<input class="st-input" type="text" placeholder="テキストを入力" />
```

## Textarea の使い方

```html
<textarea class="st-textarea" placeholder="長文テキストを入力" rows="4"></textarea>
```

## 状態

### エラー状態

`aria-invalid="true"` またはエラー用クラスを使用します。

```html
<!-- aria-invalid を使用（推奨） -->
<input class="st-input" type="email" aria-invalid="true" value="invalid-email" />

<!-- クラスを使用 -->
<input class="st-input st-input--error" type="email" />
```

### 無効状態

```html
<input class="st-input" type="text" disabled placeholder="無効なフィールド" />
<textarea class="st-textarea" disabled placeholder="無効なフィールド"></textarea>
```

## Field との組み合わせ

ラベルやヘルパーテキストを付ける場合は [Field](/docs/components/field) と組み合わせて使用します。

```html
<div class="st-field">
  <label class="st-field__label">メールアドレス</label>
  <input class="st-input" type="email" placeholder="you@example.com" />
  <span class="st-field__helper">会社のメールアドレスを入力してください</span>
</div>
```

## クラス一覧

### Input

| クラス | 説明 |
|--------|------|
| `st-input` | テキスト入力のベースクラス |
| `st-input--error` | エラー状態のスタイル |

### Textarea

| クラス | 説明 |
|--------|------|
| `st-textarea` | テキストエリアのベースクラス |
| `st-textarea--error` | エラー状態のスタイル |

### 対応する属性

| 属性 | 説明 |
|------|------|
| `aria-invalid="true"` | エラー状態を示す（`--error` クラスと同等） |
| `disabled` | 無効状態 |
| `placeholder` | プレースホルダーテキスト |
