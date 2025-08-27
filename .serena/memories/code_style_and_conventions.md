# コードスタイルと規約

## ESLint設定
- **設定**: Next.jsの標準設定（`next/core-web-vitals`）を使用
- **ファイル**: `.eslintrc.json`

## Prettier設定
- **セミコロン**: なし (`"semi": false`)
- **クオート**: シングルクオート (`"singleQuote": true`)
- **末尾カンマ**: ES5形式 (`"trailingComma": "es5"`)
- **インデント**: スペース2文字 (`"tabWidth": 2`, `"useTabs": false`)

## TypeScript設定
- **Strict mode**: 有効
- **Target**: ES5
- **Module**: ESNext with bundler resolution
- **パスエイリアス**:
  - `@/*` → `./src/*`
  - `@/components/*` → `./src/components/*`
  - `@/lib/*` → `./src/lib/*`
  - `@/content/*` → `./src/content/*`

## 命名規約
- **ファイル名**: kebab-case（例: `user-profile.tsx`）
- **コンポーネント**: PascalCase（例: `UserProfile`）
- **関数・変数**: camelCase（例: `getUserData`）
- **定数**: UPPER_SNAKE_CASE（例: `API_BASE_URL`）

## ディレクトリ構造
```
src/
├── app/           # Next.js App Router pages
├── components/    # 再利用可能UIコンポーネント
├── lib/          # ユーティリティ・設定
├── content/      # Markdownコンテンツ
└── __tests__/    # テストファイル
```

## コンポーネント設計パターン
- **shadcn/ui**: UIプリミティブの基盤
- **クライアント指定**: `'use client'`を適切に使用
- **Props型定義**: interfaceで明示的に定義
- **エクスポート**: named exportを推奨

## インポート順序
1. React/Next.js関連
2. 外部ライブラリ
3. 内部コンポーネント
4. ユーティリティ・設定
5. 型定義