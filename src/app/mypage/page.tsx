'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { RequireAuth } from '@/components/RequireAuth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatDate, getSubscriptionStatusText } from '@/lib/utils'
import { formatPrice } from '@/lib/pricing'
import { User, CreditCard, Calendar, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface Subscription {
  id: string
  status: string
  planId: string
  priceId: string
  currentPeriodStart: string
  currentPeriodEnd: string
  cancelAtPeriodEnd: boolean
  canceledAt?: string
}

export default function MyPage() {
  const { data: session } = useSession()
  const searchParams = useSearchParams()
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [loading, setLoading] = useState(true)
  const [portalLoading, setPortalLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    if (searchParams.get('success')) {
      setMessage({ type: 'success', text: '決済が完了しました！プランが有効になりました。' })
    }
  }, [searchParams])

  useEffect(() => {
    if (session) {
      fetchSubscription()
    }
  }, [session])

  const fetchSubscription = async () => {
    try {
      const response = await fetch('/api/subscription')
      if (response.ok) {
        const data = await response.json()
        setSubscription(data)
      }
    } catch (error) {
      console.error('Error fetching subscription:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePortal = async () => {
    setPortalLoading(true)
    try {
      const response = await fetch('/api/portal', {
        method: 'POST',
      })
      
      const data = await response.json()
      
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('ポータルURLの取得に失敗しました')
      }
    } catch (error) {
      console.error('Portal error:', error)
      alert('エラーが発生しました。もう一度お試しください。')
    } finally {
      setPortalLoading(false)
    }
  }

  return (
    <RequireAuth>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">マイページ</h1>
            <p className="text-muted-foreground">アカウント情報と契約状況</p>
          </div>

          {message && (
            <div className={`p-4 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message.text}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  会員情報
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  {session?.user?.image && (
                    <Image
                      src={session.user.image}
                      alt="Profile"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-medium">{session?.user?.name || 'ユーザー'}</p>
                    <p className="text-sm text-muted-foreground">
                      {session?.user?.email || 'メールアドレス未設定'}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">LINE ID</p>
                      <p className="font-mono text-xs">
                        {(session?.user as any)?.lineUserId || '未設定'}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">登録日</p>
                      <p>2024年1月</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subscription Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  契約状況
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {loading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                    <div className="h-10 bg-muted rounded"></div>
                  </div>
                ) : subscription ? (
                  <>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">プラン</span>
                        <Badge variant="default">Gサポ ベーシック</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">ステータス</span>
                        <Badge variant={getSubscriptionStatusText(subscription.status).variant}>
                          {getSubscriptionStatusText(subscription.status).text}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">料金</span>
                        <span className="font-medium">{formatPrice(500)}/月</span>
                      </div>

                      {subscription.status === 'active' && (
                        <>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">次回請求日</span>
                            <span className="font-medium">
                              {formatDate(subscription.currentPeriodEnd)}
                            </span>
                          </div>

                          {subscription.cancelAtPeriodEnd && (
                            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                              <p className="text-sm text-yellow-800">
                                プランは {formatDate(subscription.currentPeriodEnd)} に終了予定です
                              </p>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    <div className="pt-4 border-t">
                      <Button 
                        onClick={handlePortal}
                        disabled={portalLoading}
                        className="w-full"
                        variant="outline"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {portalLoading ? '開いています...' : '請求管理ポータル'}
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        支払い情報の更新や解約手続きができます
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      まだプランに加入していません
                    </p>
                    <Button asChild>
                      <a href="/pricing">プランを選択</a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                クイックアクション
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" asChild>
                  <a href="/pricing">プラン変更</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact">サポート</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/legal/terms">利用規約</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </RequireAuth>
  )
}