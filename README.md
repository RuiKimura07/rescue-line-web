# Gサポ | 困ったときの身近なレスキュー

プロダクション対応のLINEログイン + Stripeサブスクリプション対応Next.js 14アプリケーション

## 🚀 技術スタック

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Authentication**: NextAuth.js + LINE OAuth/OIDC
- **Database**: Prisma + PostgreSQL
- **Payments**: Stripe Subscriptions (Checkout + Portal + Webhooks)
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Render.com

## 📋 機能

### ✅ 実装済み機能
- ✅ LINEログイン認証
- ✅ 月額500円サブスクリプション
- ✅ Stripe Checkout統合
- ✅ Stripe Customer Portal
- ✅ Webhook処理 (サブスクリプション状態同期)
- ✅ レスポンシブUI
- ✅ 法的ページ (利用規約、プライバシーポリシー、特商法)
- ✅ マイページ (契約状況管理)
- ✅ Render.com対応デプロイ設定

### 📁 ディレクトリ構成

```
/
├── README.md
├── .env.example
├── render.yaml                 # Render.comデプロイ設定
├── prisma/
│   └── schema.prisma          # データベーススキーマ
├── public/
│   └── logo.svg              # ロゴプレースホルダー
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── page.tsx          # トップページ
│   │   ├── pricing/page.tsx  # 料金ページ
│   │   ├── mypage/page.tsx   # マイページ
│   │   ├── contact/page.tsx  # お問い合わせ
│   │   ├── legal/            # 法的ページ
│   │   └── api/              # API routes
│   ├── components/           # UIコンポーネント
│   ├── lib/                  # ユーティリティ
│   └── content/              # Markdownコンテンツ
```

## 🛠️ セットアップ手順

### 1. リポジトリのクローンと依存関係のインストール

```bash
git clone <repository-url>
cd rescue-line-web
npm install
```

### 2. 環境変数の設定

`.env.example` を `.env.local` にコピーして設定:

```bash
cp .env.example .env.local
```

### 3. LINE Developers設定

1. [LINE Developers Console](https://developers.line.biz/) でチャネル作成
2. チャネル基本設定:
   - チャネルタイプ: LINEログイン
   - アプリタイプ: ウェブアプリ
3. LINEログイン設定:
   - コールバックURL: `http://localhost:3000/api/auth/callback/line`
   - スコープ: `profile` `openid`
4. 取得した情報を環境変数に設定:
   ```env
   LINE_CLIENT_ID=your-channel-id
   LINE_CLIENT_SECRET=your-channel-secret
   LINE_REDIRECT_URI=http://localhost:3000/api/auth/callback/line
   ```

### 4. Stripe設定

1. [Stripe Dashboard](https://dashboard.stripe.com/) でアカウント作成
2. テスト用APIキーを取得:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```
3. Productとして「Gサポ ベーシックプラン」を作成:
   - 名前: Gサポ ベーシックプラン
   - 料金: ¥500/月
   - 課金周期: 月次
4. Price IDを環境変数に設定:
   ```env
   STRIPE_PRICE_ID=price_...
   ```
5. Webhookエンドポイント設定:
   - URL: `https://yourdomain.com/api/stripe/webhook`
   - イベント選択:
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_succeeded`
     - `invoice.payment_failed`
   - Signing Secretを環境変数に設定:
     ```env
     STRIPE_WEBHOOK_SECRET=whsec_...
     ```
6. Customer Portal設定:
   - 設定 → Customer Portal
   - 基本設定を有効化
   - 利用可能な機能を設定 (サブスクリプションのキャンセル/再開等)

### 5. データベース設定

ローカル開発用PostgreSQL:

```bash
# Dockerを使用する場合
docker run --name postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=rescue_line_web -p 5432:5432 -d postgres:15

# DATABASE_URLを設定
DATABASE_URL="postgresql://postgres:password@localhost:5432/rescue_line_web"

# Prisma設定
npx prisma migrate dev
npx prisma generate
```

### 6. その他の環境変数

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret

# 会社情報（法的ページで使用）
COMPANY_NAME="あなたの会社名"
COMPANY_ADDRESS="あなたの住所"
COMPANY_REPRESENTATIVE="代表者名"
COMPANY_EMAIL="support@yourdomain.com"
COMPANY_PHONE="03-xxxx-xxxx"
REFUND_POLICY_NOTE="返金ポリシーの詳細"
```

## 🏃‍♂️ 開発サーバー起動

```bash
npm run dev
```

http://localhost:3000 でアクセス

## 🧪 テスト

```bash
# ユニットテスト
npm run test

# E2Eテスト
npm run test:e2e
```

## 🚀 Render.comデプロイ

### 1. Render.comアカウント作成

1. [Render.com](https://render.com) でアカウント作成
2. GitHubリポジトリと連携

### 2. デプロイ設定

1. New → Web Service
2. Connect Repository: このリポジトリを選択
3. 設定は `render.yaml` に記載済みのため自動設定
4. または手動設定の場合:
   - Build Command: `npm ci && npx prisma generate && npm run build`
   - Start Command: `npm run start`
   - Environment: Node

### 3. PostgreSQLデータベース作成

1. New → PostgreSQL
2. Database Name: `rescue-line-postgres`
3. Plan: Starter (開発用)

### 4. 環境変数設定

Render.comダッシュボードで以下を設定:

```
NEXTAUTH_URL=https://your-app-name.onrender.com
DATABASE_URL=[自動生成されたPostgreSQL接続文字列]
LINE_CLIENT_ID=your-line-client-id
LINE_CLIENT_SECRET=your-line-client-secret
LINE_REDIRECT_URI=https://your-app-name.onrender.com/api/auth/callback/line
STRIPE_SECRET_KEY=sk_live_... (本番用)
STRIPE_PUBLISHABLE_KEY=pk_live_... (本番用)
STRIPE_PRICE_ID=price_... (本番用Price ID)
STRIPE_WEBHOOK_SECRET=whsec_... (本番用Webhook Secret)
```

### 5. 本番用設定更新

**LINE Developers:**
- コールバックURL追加: `https://your-app-name.onrender.com/api/auth/callback/line`

**Stripe:**
- Webhook URL更新: `https://your-app-name.onrender.com/api/stripe/webhook`

## 🔄 動作確認チェックリスト

### ローカル環境での確認

- [ ] LINEログインができる
- [ ] 料金ページでStripe Checkoutが起動する
- [ ] 決済完了後にマイページに反映される
- [ ] マイページでPortalにアクセスできる
- [ ] Portalで解約→Webhookでマイページ更新
- [ ] 法的ページが表示される
- [ ] お問い合わせページが機能する

### 本番環境での確認

- [ ] 本番ドメインでLINEログインが動作
- [ ] 本番Stripe決済が正常動作
- [ ] Webhookが正しく処理される
- [ ] HTTPSでセキュアアクセス
- [ ] パフォーマンスが適切

## 📝 カスタマイズ

### ロゴ変更
`public/logo.svg` を差し替えるだけで全体に反映

### 会社情報変更
環境変数の `COMPANY_*` 項目を更新

### 法的ページ編集
`src/content/` 内のマークdownファイルを編集

### デザインカスタマイズ
- `src/app/globals.css`: カラーテーマ
- `tailwind.config.js`: Tailwind設定
- `src/components/`: 各コンポーネント

## 🛡️ セキュリティ考慮事項

- NextAuth.jsによるセキュアな認証
- Stripe Webhookの署名検証
- HTTPS強制 (本番環境)
- CORS設定
- 環境変数による機密情報管理

## 📞 サポート

技術的な質問やバグ報告は以下まで:
- Issues: GitHubリポジトリのIssuesページ
- Email: お問い合わせページから

## 📄 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で配布されています。

---

**Gサポ** - 困ったときの身近なレスキュー