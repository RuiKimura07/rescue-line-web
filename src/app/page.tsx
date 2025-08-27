'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'
import { Shield, Clock, Users, Phone, MessageCircle, Headphones } from 'lucide-react'
import { formatPrice } from '@/lib/pricing'
import { PRICING_CONFIG } from '@/lib/pricing'

export default function HomePage() {
  const { data: session } = useSession()

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: '24時間対応',
      description: '困ったときはいつでもサポートいたします'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: '専門スタッフ',
      description: '経験豊富な専門スタッフが対応'
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: '緊急対応',
      description: '緊急時も迅速にサポート'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: 'チャットサポート',
      description: 'オンラインでいつでも相談可能'
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: '安心保証',
      description: '安心してご利用いただけるサービス'
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: '専用ダイヤル',
      description: 'お客様専用のサポートダイヤル提供'
    },
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center space-y-8">
        <div className="space-y-4">
          <Badge variant="outline" className="text-primary">
            身近なレスキューサービス
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary">G</span>サポ
          </h1>
          <p className="text-xl text-muted-foreground">
            困ったときの身近なレスキュー
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            24時間サポートであなたの困りごとを解決します。専門スタッフによる迅速な対応で、
            安心してご利用いただけるレスキューサービスです。
          </p>
        </div>
        
        {!session ? (
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => signIn('line')}
            >
              LINEでログイン
            </Button>
            <p className="text-sm text-muted-foreground">
              LINEアカウントでかんたんログイン
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <Link href="/pricing">
              <Button size="lg" className="text-lg px-8 py-3">
                プランを選択
              </Button>
            </Link>
            <Link href="/mypage">
              <Button variant="outline" size="lg">
                マイページ
              </Button>
            </Link>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">サービスの特徴</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            あなたの困ったをすぐに解決。充実したサポート体制でお客様をバックアップします。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">シンプルな料金体系</h2>
          <p className="text-muted-foreground">
            明確でわかりやすい料金設定
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="border-primary shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{PRICING_CONFIG.plan.name}</CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">
                  {formatPrice(PRICING_CONFIG.plan.price)}
                  <span className="text-lg text-muted-foreground">/月</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {PRICING_CONFIG.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Shield className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="space-y-2 text-center">
                <Link href="/pricing">
                  <Button className="w-full" size="lg">
                    詳細を見る
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Billing Information */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">課金・解約について</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">課金周期</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {PRICING_CONFIG.billing.cycle}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {PRICING_CONFIG.billing.description}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">解約条件</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {PRICING_CONFIG.billing.cancelPolicy}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {PRICING_CONFIG.billing.refundPolicy}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                詳細な利用規約は
                <Link href="/legal/terms" className="text-primary hover:underline">
                  こちら
                </Link>
                をご確認ください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}