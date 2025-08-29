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
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: '24時間365日対応',
      description: '深夜・早朝・休日問わず、困ったときはいつでもサポート',
      highlight: '年中無休'
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: '経験豊富な専門チーム',
      description: '5年以上の経験を持つプロフェッショナルが迅速に対応',
      highlight: '実績5000件+'
    },
    {
      icon: <Phone className="w-12 h-12 text-primary" />,
      title: '最短5分で駆けつけ',
      description: '緊急事態には専門スタッフが最短5分でサポート開始',
      highlight: '超高速対応'
    }
  ]

  const testimonials = [
    {
      name: '田中様（30代・会社員）',
      comment: '深夜のトラブルでしたが、すぐに対応していただけて本当に助かりました。',
      rating: 5
    },
    {
      name: '佐藤様（40代・主婦）',
      comment: 'LINEで簡単に相談できて、料金も明確で安心してお任せできました。',
      rating: 5
    },
    {
      name: '鈴木様（50代・自営業）',
      comment: '専門的なトラブルも的確にサポートしてくれて、とても信頼できます。',
      rating: 5
    }
  ]

  const faqs = [
    {
      q: '本当に24時間対応していますか？',
      a: 'はい。年中無休で24時間体制でサポートスタッフが待機しており、いつでもご相談いただけます。'
    },
    {
      q: '料金はいくらですか？',
      a: '月額500円（税込）のシンプルな料金設定です。追加料金や隠れた費用は一切ありません。'
    },
    {
      q: '解約はいつでもできますか？',
      a: 'はい。マイページからいつでも簡単に解約手続きが可能です。違約金等は一切かかりません。'
    },
    {
      q: 'どのような問題に対応していますか？',
      a: 'IT関連から生活のお困りごとまで、幅広い分野の専門スタッフが対応いたします。'
    }
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section - 強化版 */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-6">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
              🚨 24時間365日対応・月額500円
            </Badge>
            
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
              困ったときの
              <br />
              <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                身近なレスキュー
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              深夜のトラブル、急な困りごと、専門的な相談まで<br />
              <strong className="text-foreground">経験豊富な専門チームが最短5分で対応</strong>
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>実績5000件+</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>平均対応時間8分</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span>満足度99.2%</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {!session ? (
              <>
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-6 h-auto bg-primary hover:bg-primary/90 shadow-lg"
                  onClick={() => signIn('line')}
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  LINEで今すぐ相談を開始
                </Button>
                <p className="text-sm text-muted-foreground">
                  ※ LINEアカウントで簡単登録・相談は無料です
                </p>
              </>
            ) : (
              <div className="space-y-4">
                <Button size="lg" className="text-lg px-12 py-6 h-auto shadow-lg" asChild>
                  <Link href="/pricing">
                    月額500円で今すぐ開始
                  </Link>
                </Button>
                <Link href="/mypage">
                  <Button variant="outline" size="lg" className="px-8 py-3">
                    マイページ
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 緊急性・社会証明セクション */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5,000+</div>
              <div className="text-muted-foreground">解決実績</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99.2%</div>
              <div className="text-muted-foreground">お客様満足度</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">8分</div>
              <div className="text-muted-foreground">平均対応時間</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 強化版 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">なぜGサポが選ばれるのか</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              他社では真似できない、3つの理由
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors">
                <CardHeader className="pb-4">
                  <Badge variant="secondary" className="w-fit mx-auto mb-4">
                    {feature.highlight}
                  </Badge>
                  <div className="mx-auto mb-6 p-4 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">お客様の声</h2>
            <p className="text-xl text-muted-foreground">
              実際にご利用いただいたお客様から
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    「{testimonial.comment}」
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 料金セクション - LP強化版 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">シンプルで分かりやすい料金</h2>
            <p className="text-xl text-muted-foreground">
              追加料金なし・解約金なしの安心価格
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-primary shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                ⚡ 今なら初月無料キャンペーン中
              </div>
              <CardHeader className="text-center pt-12 pb-4">
                <CardTitle className="text-3xl mb-4">{PRICING_CONFIG.plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="text-6xl font-bold text-primary">
                    {formatPrice(PRICING_CONFIG.plan.price)}
                    <span className="text-2xl text-muted-foreground">/月</span>
                  </div>
                  <p className="text-muted-foreground">
                    ※初月無料・いつでも解約OK
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {PRICING_CONFIG.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Shield className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 pt-4 border-t">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/pricing">
                      今すぐ開始する（初月無料）
                    </Link>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    ※クレジットカード登録後、初月は無料でご利用いただけます
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">よくある質問</h2>
            <p className="text-xl text-muted-foreground">
              お客様からよく寄せられるご質問
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      Q
                    </span>
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      A
                    </span>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 最終CTA セクション */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              困ったときこそ、<br />Gサポにお任せください
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              今すぐ始めて、安心の毎日を手に入れましょう
            </p>
            
            <div className="space-y-4">
              {!session ? (
                <Button 
                  size="lg" 
                  className="text-lg px-12 py-6 h-auto bg-white text-primary hover:bg-gray-100 shadow-lg"
                  onClick={() => signIn('line')}
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  無料でLINE相談を開始
                </Button>
              ) : (
                <Button size="lg" className="text-lg px-12 py-6 h-auto bg-white text-primary hover:bg-gray-100 shadow-lg" asChild>
                  <Link href="/pricing">
                    月額500円で今すぐ開始
                  </Link>
                </Button>
              )}
              <p className="text-sm opacity-75">
                ※初月無料・30日間返金保証・いつでも解約OK
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
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