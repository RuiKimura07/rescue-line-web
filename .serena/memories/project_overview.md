# Rescue Line Web - プロジェクト概要

## プロジェクト目的
「Gサポ | 困ったときの身近なレスキュー」は、LINEログイン認証とStripe決済を組み合わせたプロダクション対応のサブスクリプション型レスキューサービスWebアプリケーションです。

## 主要機能
- LINEログイン認証（NextAuth.js）
- 月額500円のサブスクリプションサービス（Stripe）
- ユーザーマイページでの契約状況管理
- Stripe Customer Portalでの請求管理
- 法的ページ（利用規約、プライバシーポリシー、特商法）
- レスポンシブUI対応

## 技術スタック
- **Frontend**: Next.js 14 (App Router) + TypeScript
- **認証**: NextAuth.js + LINE OAuth/OIDC
- **データベース**: Prisma + PostgreSQL
- **決済**: Stripe Subscriptions (Checkout + Portal + Webhooks)
- **スタイリング**: Tailwind CSS + shadcn/ui
- **テスト**: Vitest + Playwright
- **デプロイ**: Render.com対応

## アーキテクチャ特徴
- App Routerを使用したモダンなNext.js構成
- サーバーサイドでの認証処理（NextAuth.js）
- Webhookによるリアルタイムサブスクリプション状態同期
- TypeScriptによる型安全性
- Prismaによるデータベーススキーマ管理