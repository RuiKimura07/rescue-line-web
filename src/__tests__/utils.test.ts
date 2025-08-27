import { describe, it, expect } from 'vitest'
import { formatPrice, getSubscriptionStatusText } from '@/lib/utils'

describe('Utils', () => {
  describe('formatPrice', () => {
    it('formats JPY price correctly', () => {
      expect(formatPrice(500, 'JPY')).toBe('¥500')
      expect(formatPrice(1000, 'JPY')).toBe('¥1,000')
    })
  })

  describe('getSubscriptionStatusText', () => {
    it('returns correct status for active subscription', () => {
      const result = getSubscriptionStatusText('active')
      expect(result.text).toBe('有効')
      expect(result.variant).toBe('default')
    })

    it('returns correct status for canceled subscription', () => {
      const result = getSubscriptionStatusText('canceled')
      expect(result.text).toBe('キャンセル済み')
      expect(result.variant).toBe('secondary')
    })
  })
})