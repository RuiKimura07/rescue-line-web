# 主要機能と連携サービス

## 認証システム（LINE Login）
- **実装場所**: `src/lib/auth.ts`
- **プロバイダー**: カスタムLINE OAuth/OIDC プロバイダー
- **NextAuth設定**: JWTセッション戦略
- **保護ページ**: middleware.tsで `/mypage` を保護
- **環境変数**:
  - `LINE_CLIENT_ID`
  - `LINE_CLIENT_SECRET` 
  - `LINE_REDIRECT_URI`

## Stripe決済連携
- **実装場所**: `src/lib/stripe.ts`
- **機能**:
  - Checkout Sessions（決済フロー）
  - Customer Portal（請求管理）
  - Webhooks（サブスクリプション同期）
- **プラン**: 月額500円の単一プラン
- **環境変数**:
  - `STRIPE_SECRET_KEY`
  - `STRIPE_PUBLISHABLE_KEY`
  - `STRIPE_PRICE_ID`
  - `STRIPE_WEBHOOK_SECRET`

## データベース（Prisma + PostgreSQL）
- **モデル**:
  - `User` - ユーザー情報（LINE ID含む）
  - `Account` - NextAuth.js連携
  - `Session` - セッション管理
  - `Subscription` - サブスクリプション状態
- **主要フィールド**:
  - `User.lineUserId` - LINE固有ID
  - `User.stripeCustomerId` - Stripe顧客ID
  - `Subscription.status` - 契約状態

## API エンドポイント
- `GET /api/subscription` - サブスクリプション情報取得
- `POST /api/checkout` - Stripe Checkout セッション作成
- `POST /api/portal` - Customer Portal セッション作成
- `POST /api/stripe/webhook` - Stripeウェブフック処理
- `[...nextauth]` - NextAuth.js認証エンドポイント

## ページ構成
### 公開ページ
- `/` - トップページ（サービス紹介）
- `/pricing` - 料金ページ
- `/contact` - お問い合わせ
- `/legal/*` - 法的ページ（利用規約等）

### 認証必須ページ  
- `/mypage` - マイページ（契約状況管理）

## 外部サービス連携
### LINE Developers
- OAuth/OIDC設定
- コールバックURL設定必須

### Stripe Dashboard
- Product/Price設定
- Webhook エンドポイント設定
- Customer Portal有効化

### Render.com
- PostgreSQL Managed Database
- 環境変数管理
- 自動デプロイ設定