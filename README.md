# Gサポート - Landing Page

月額500円で30分以内にかけつける緊急駆けつけサービス「Gサポート」の公式ランディングページです。

## 🚀 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Fonts**: Inter & Noto Sans JP

## 📱 機能

- **レスポンシブデザイン**: モバイルファーストで全デバイス対応
- **SEO最適化**: メタタグ、構造化データ、サイトマップ完備
- **アクセシビリティ**: WAI-ARIA準拠、高コントラスト対応
- **パフォーマンス**: Lighthouse 95+スコア目標
- **多言語**: 日本語完全対応

## 🎨 デザインシステム

- **カラーパレット**: 青系統（Primary: Blue 500）
- **フォント**: Inter（英数字）+ Noto Sans JP（日本語）
- **コンポーネント**: 再利用可能なUI部品
- **アニメーション**: スムーズなトランジション

## 📄 ページ構成

- `/` - メインランディングページ
- `/contact` - お問い合わせ
- `/legal/terms` - 利用規約（準備中）
- `/legal/privacy` - プライバシーポリシー（準備中）
- `/legal/tokushoho` - 特定商取引法表記（準備中）

## 🛠 セットアップ

### 前提条件

- Node.js 18.17以降
- npm, yarn, pnpm, またはbun

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd rescue-line-web

# 依存関係をインストール
npm install

# 開発サーバー起動
npm run dev
```

開発サーバーが起動したら [http://localhost:3000](http://localhost:3000) でアクセスできます。

### ビルド

```bash
# プロダクションビルド
npm run build

# ビルドをローカルで確認
npm run start

# 型チェック
npm run type-check

# Lint
npm run lint
```

## 📂 プロジェクト構造

```
src/
├── app/                    # App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # メインページ
│   ├── sitemap.ts         # サイトマップ
│   ├── robots.ts          # robots.txt
│   ├── contact/           # お問い合わせページ
│   └── legal/             # 法的ページ群
├── components/            # UIコンポーネント
│   ├── ui/               # shadcn/ui基本コンポーネント
│   ├── Logo.tsx          # ロゴコンポーネント
│   ├── CTAButtons.tsx    # CTAボタン
│   ├── Feature.tsx       # 機能紹介カード
│   ├── Steps.tsx         # ステップ表示
│   └── FAQ.tsx           # FAQ
└── lib/
    └── utils.ts          # ユーティリティ関数

public/
├── logo.svg              # ロゴファイル
├── og.jpg                # OGイメージ（要交換）
├── area-map.jpg          # エリアマップ（要交換）
└── favicon.ico           # ファビコン（要交換）
```

## 🎯 固定コピー要件

以下のテキストは**必須**で、変更してはいけません：

- **H1**: "Gサポート"
- **H2**: "月額500円 30分以内にかけつける。もし間に合わなければ1000円お支払いします。何回でも。"

## 📊 SEO設定

- メタタグ最適化済み
- 構造化データ（JSON-LD）実装
- OpenGraph + Twitter Cards対応
- サイトマップ + robots.txt
- 適切なalt属性とaria-label

## ♿ アクセシビリティ

- セマンティックHTML使用
- ARIA属性適切に設定
- キーボードナビゲーション対応
- 高コントラスト確保
- スクリーンリーダー対応

## 🚀 パフォーマンス最適化

- 画像最適化（WebP/AVIF対応）
- フォント最適化（display: swap）
- CLS（Cumulative Layout Shift）対策
- 適切なキャッシュヘッダー
- 圧縮有効化

## 🔧 カスタマイズ

### 色の変更

`tailwind.config.ts`で色設定を変更：

```typescript
colors: {
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  // ...
}
```

### 新しいコンポーネント追加

```bash
# shadcn/uiコンポーネント追加
npx shadcn-ui@latest add [component-name]
```

## 📱 必要な置き換え作業

プロダクション前に以下を実際のファイルに置き換えてください：

1. `public/og.jpg` - OGイメージ (1200x630px)
2. `public/area-map.jpg` - サービスエリアマップ
3. `public/favicon.ico` - ファビコン
4. プレースホルダーURLの更新：
   - LINE URL: `https://line.me/ti/p/placeholder`
   - 電話番号: `tel:+81-XX-XXXX-XXXX`
   - ドメイン: `https://g-support.example.com`

## 📋 チェックリスト

- [x] レスポンシブデザイン実装
- [x] SEO設定完了
- [x] アクセシビリティ対応
- [x] パフォーマンス最適化
- [x] 固定コピー要件対応
- [x] 10セクション構成
- [x] 法的ページ準備
- [ ] 実際の画像素材置き換え
- [ ] 本番URL設定
- [ ] 法的文書内容追加

## 🤝 開発フロー

1. `main`ブランチから新しいブランチを作成
2. 変更を加えてコミット
3. プルリクエストを作成
4. レビュー後、`main`にマージ

## 📞 お問い合わせ

技術的な質問や改善提案があればイシューを作成してください。

---

**Gサポート** - 月額500円で30分以内にかけつける緊急駆けつけサービス