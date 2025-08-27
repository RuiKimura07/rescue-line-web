'use client'

import { PlanCard } from '@/components/PlanCard'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PRICING_CONFIG } from '@/lib/pricing'

export default function PricingPage() {
  const searchParams = useSearchParams()
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    if (searchParams.get('canceled')) {
      setMessage({ type: 'error', text: '決済がキャンセルされました。' })
    }
  }, [searchParams])

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">料金プラン</h1>
        <p className="text-xl text-muted-foreground">
          シンプルでわかりやすい料金体系
        </p>
      </div>

      {message && (
        <div className={`max-w-2xl mx-auto mb-8 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-center">
          <div className="max-w-md mx-auto">
            <PlanCard
              name={PRICING_CONFIG.plan.name}
              description={PRICING_CONFIG.plan.description}
              price={PRICING_CONFIG.plan.price}
              currency={PRICING_CONFIG.plan.currency}
              interval={PRICING_CONFIG.plan.interval}
              features={PRICING_CONFIG.features}
              priceId={PRICING_CONFIG.plan.priceId}
              popular={true}
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 space-y-8">
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">課金・解約について</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-2">課金周期</h4>
                <p className="text-muted-foreground">
                  {PRICING_CONFIG.billing.cycle}
                </p>
                <p className="text-muted-foreground mt-1">
                  {PRICING_CONFIG.billing.description}
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">解約条件</h4>
                <p className="text-muted-foreground">
                  {PRICING_CONFIG.billing.cancelPolicy}
                </p>
                <p className="text-muted-foreground mt-1">
                  マイページからいつでも解約手続きが可能です。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2 text-blue-900">
              返金ポリシー
            </h3>
            <p className="text-blue-800 text-sm">
              {PRICING_CONFIG.billing.refundPolicy}
            </p>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              ご質問やサポートが必要な場合は、
              <a href="/contact" className="text-primary hover:underline">
                こちら
              </a>
              からお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}