import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')

  // ページタイトルをチェック
  await expect(page).toHaveTitle(/Gサポ/)

  // メインコンテンツの存在確認
  await expect(page.getByRole('heading', { name: 'Gサポ' })).toBeVisible()
  await expect(page.getByText('困ったときの身近なレスキュー')).toBeVisible()

  // ナビゲーションの確認
  await expect(page.getByText('料金')).toBeVisible()
  await expect(page.getByText('お問い合わせ')).toBeVisible()

  // サービス特徴セクションの確認
  await expect(page.getByText('サービスの特徴')).toBeVisible()
  await expect(page.getByText('24時間対応')).toBeVisible()
})

test('pricing page navigation works', async ({ page }) => {
  await page.goto('/')
  
  // 料金ページへのリンクをクリック
  await page.getByRole('link', { name: '料金' }).click()
  
  // 料金ページが表示されることを確認
  await expect(page).toHaveURL('/pricing')
  await expect(page.getByRole('heading', { name: '料金プラン' })).toBeVisible()
})