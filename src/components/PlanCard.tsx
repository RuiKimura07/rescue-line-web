'use client'

import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Check } from 'lucide-react'
import { formatPrice } from '@/lib/pricing'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

interface PlanCardProps {
  name: string
  description: string
  price: number
  currency?: string
  interval: string
  features: string[]
  priceId: string
  popular?: boolean
}

export function PlanCard({ 
  name, 
  description, 
  price, 
  currency = 'JPY',
  interval,
  features, 
  priceId,
  popular = false 
}: PlanCardProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()

  const handleSubscribe = async () => {
    if (!session) {
      router.push('/')
      return
    }

    setLoading(true)
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('チェックアウトURLの取得に失敗しました')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      alert('エラーが発生しました。もう一度お試しください。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className={`relative ${popular ? 'border-primary shadow-lg scale-105' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground">
            人気プラン
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{formatPrice(price, currency)}</span>
          <span className="text-muted-foreground">/{interval === 'month' ? '月' : '年'}</span>
        </div>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleSubscribe}
          disabled={loading}
          size="lg"
        >
          {loading ? '処理中...' : 'プランを開始'}
        </Button>
      </CardFooter>
    </Card>
  )
}