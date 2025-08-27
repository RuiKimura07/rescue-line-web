# コードベース構造

## ルートディレクトリ
```
rescue-line-web/
├── .env.example              # 環境変数テンプレート
├── .eslintrc.json           # ESLint設定
├── .gitignore              # Git除外設定
├── .prettierrc             # Prettier設定
├── next.config.js          # Next.js設定
├── package.json            # 依存関係・スクリプト
├── playwright.config.ts    # E2Eテスト設定
├── postcss.config.js       # PostCSS設定
├── README.md               # プロジェクト説明
├── render.yaml             # Render.comデプロイ設定
├── tailwind.config.js      # Tailwind CSS設定
├── tsconfig.json           # TypeScript設定
└── vitest.config.ts        # ユニットテスト設定
```

## ソースディレクトリ（src/）
```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── auth/[...nextauth]/ # NextAuth.js
│   │   ├── checkout/      # Stripe Checkout
│   │   ├── portal/        # Stripe Customer Portal  
│   │   ├── stripe/webhook/ # Stripe Webhooks
│   │   └── subscription/  # サブスクリプション情報
│   ├── contact/           # お問い合わせページ
│   ├── legal/            # 法的ページ
│   │   ├── privacy/      # プライバシーポリシー
│   │   ├── terms/        # 利用規約
│   │   └── tokushoho/    # 特商法表記
│   ├── mypage/           # マイページ
│   ├── pricing/          # 料金ページ
│   ├── globals.css       # グローバルCSS
│   ├── layout.tsx        # ルートレイアウト
│   └── page.tsx          # トップページ
├── components/           # UIコンポーネント
│   ├── ui/              # shadcn/ui基本コンポーネント
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── AuthProvider.tsx  # 認証プロバイダー
│   ├── Footer.tsx        # フッターコンポーネント
│   ├── Header.tsx        # ヘッダーコンポーネント
│   ├── Logo.tsx          # ロゴコンポーネント
│   ├── MarkdownRenderer.tsx # Markdown表示
│   ├── PlanCard.tsx      # プランカードコンポーネント
│   └── RequireAuth.tsx   # 認証必須ラッパー
├── content/             # Markdownコンテンツ
│   ├── privacy.md       # プライバシーポリシー
│   ├── terms.md         # 利用規約
│   └── tokushoho.md     # 特商法表記
├── lib/                # ユーティリティ・設定
│   ├── auth.ts         # NextAuth設定
│   ├── db.ts           # Prismaクライアント
│   ├── pricing.ts      # 料金設定
│   ├── stripe.ts       # Stripe設定・操作
│   ├── utils.ts        # 共通ユーティリティ
│   └── webhook.ts      # Webhook処理
├── middleware.ts       # Next.js middleware（認証保護）
└── __tests__/         # テストファイル
    └── utils.test.ts  # ユーティリティテスト
```

## その他の重要ディレクトリ
```
prisma/
└── schema.prisma       # データベーススキーマ

public/
└── logo.svg           # ロゴファイル（差し替え可能）

tests/
└── homepage.spec.ts   # E2Eテスト
```