# 推奨コマンド一覧

## 開発コマンド
```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm run start

# 依存関係インストール
npm install
```

## データベース操作
```bash
# Prismaクライアント生成
npm run db:generate

# マイグレーション実行
npm run db:migrate

# データベーススキーマをDBにプッシュ
npm run db:push

# Prisma Studio起動
npm run db:studio
```

## コード品質・テスト
```bash
# ESLintチェック
npm run lint

# ユニットテスト実行
npm run test

# E2Eテスト実行  
npm run test:e2e
```

## Windows環境でのユーティリティコマンド
```bash
# ディレクトリ一覧
dir

# ファイル内容表示
type <filename>

# ディレクトリ移動
cd <path>

# ファイル検索
dir /s /b *<filename>*

# 文字列検索（PowerShell）
Select-String -Path "*.ts" -Pattern "searchterm"

# Gitコマンド
git status
git add .
git commit -m "message"
git push
```

## 環境設定
```bash
# 環境変数ファイル作成
copy .env.example .env.local

# Node.jsバージョン確認
node --version

# npmバージョン確認  
npm --version
```

## デプロイ関連
```bash
# Render.com用ビルドコマンド
npm ci && npx prisma generate && npm run build

# Render.com用スタートコマンド
npm run start
```