import { PLANS } from './stripe'

export const PRICING_CONFIG = {
  plan: PLANS.basic,
  features: [
    '24時間サポート対応',
    '専門スタッフによる相談',
    '緊急時対応サービス',
    'オンライン相談チャット',
    '専用ダイヤル提供',
  ],
  billing: {
    cycle: '月額課金',
    description: '毎月自動更新されます',
    cancelPolicy: 'いつでもキャンセル可能',
    refundPolicy: process.env.REFUND_POLICY_NOTE || '返金について詳しくは利用規約をご確認ください',
  }
}

export function formatPrice(price: number, currency: string = 'JPY'): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(price)
}