# Button

Material Design 3 に準拠した汎用ボタンコンポーネントです。5つのスタイルバリアントと2つのサイズバリアントを提供します。

## 使い方

```html
<button class="st-button st-button--filled">保存</button>
```

## バリアント

### Filled（塗りつぶし）

最も目立つアクションに使用します。主要な操作（保存、送信など）に適しています。

```html
<button class="st-button st-button--filled">Filled Button</button>
```

### Outlined（枠線）

副次的なアクションに使用します。Filled ボタンの補助として配置することが多いです。

```html
<button class="st-button st-button--outlined">Outlined Button</button>
```

### Text（テキスト）

最も控えめなスタイルです。ダイアログのアクションやインラインのリンク的な操作に適しています。

```html
<button class="st-button st-button--text">Text Button</button>
```

### Elevated（浮き出し）

影（エレベーション）付きのボタンです。Filled が使えない背景色の上で目立たせたい場合に使います。

```html
<button class="st-button st-button--elevated">Elevated Button</button>
```

### Tonal（トーナル）

Filled と Outlined の中間的なスタイルです。Filled ほど強くなく、しかし背景との区別がつきやすいボタンです。

```html
<button class="st-button st-button--tonal">Tonal Button</button>
```

## サイズ

デフォルトサイズ（高さ 40px）の他に、小・大サイズを指定できます。

```html
<button class="st-button st-button--filled st-button--sm">Small</button>
<button class="st-button st-button--filled">Default</button>
<button class="st-button st-button--filled st-button--lg">Large</button>
```

## アイコンボタン

正方形のアイコンのみのボタンです。

```html
<button class="st-button st-button--filled st-button--icon">
  <svg>...</svg>
</button>
```

## 無効状態

`disabled` 属性または `aria-disabled="true"` で無効化できます。

```html
<button class="st-button st-button--filled" disabled>無効</button>
<button class="st-button st-button--filled" aria-disabled="true">無効</button>
```

## クラス一覧

| クラス | 説明 |
|--------|------|
| `st-button` | ベースクラス（必須） |
| `st-button--filled` | 塗りつぶしスタイル |
| `st-button--outlined` | 枠線スタイル |
| `st-button--text` | テキストのみスタイル |
| `st-button--elevated` | 影付きスタイル |
| `st-button--tonal` | トーナルスタイル |
| `st-button--sm` | 小サイズ（高さ 32px） |
| `st-button--lg` | 大サイズ（高さ 48px） |
| `st-button--icon` | アイコンボタン（正方形） |
