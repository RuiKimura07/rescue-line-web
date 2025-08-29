import { Phone, MessageSquare, Clock, Shield, MapPin, Users, Star, CheckCircle } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { CTAButtons } from '@/components/CTAButtons'
import { Feature } from '@/components/Feature'
import { Steps } from '@/components/Steps'
import { FAQ } from '@/components/FAQ'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const steps = [
  {
    title: 'お申し込み',
    description: 'LINEまたは電話でお申し込みください',
    icon: MessageSquare,
  },
  {
    title: 'スタッフ派遣',
    description: '最寄りのスタッフが30分以内に出発',
    icon: MapPin,
  },
  {
    title: 'サポート完了',
    description: 'お困りごとを解決いたします',
    icon: CheckCircle,
  },
]

const faqs = [
  {
    question: '本当に30分以内に来てもらえますか？',
    answer: 'はい。30分以内にかけつけられなかった場合は、1000円をお支払いします。お客様の満足を第一に考えており、この保証により安心してご利用いただけます。',
  },
  {
    question: 'どのような地域でサービスを利用できますか？',
    answer: '主要都市部を中心にサービスを展開しております。詳細なサービス対応エリアについては、お申し込み時にお確認ください。エリア拡大も随時行っております。',
  },
  {
    question: '月額500円以外に追加料金はかかりますか？',
    answer: '基本的な駆けつけサービスは月額500円のみです。ただし、特別な工具や部品が必要な場合は、事前にご相談の上、別途費用をお見積りいたします。',
  },
  {
    question: '夜間や休日でも対応してもらえますか？',
    answer: '24時間365日対応しております。深夜や早朝、休日祝日も関係なく、お困りの時はいつでもお気軽にお声がけください。',
  },
  {
    question: '何回でも利用できるのは本当ですか？',
    answer: 'はい、月額500円で何回でもご利用いただけます。回数制限は一切ございません。お困りごとがございましたら、お気軽にお声がけください。',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Logo />
          <nav className="ml-auto flex items-center space-x-4 lg:space-x-6" role="navigation" aria-label="メインナビゲーション">
            <Link href="#service" className="text-sm font-medium transition-colors hover:text-primary">サービス</Link>
            <Link href="#flow" className="text-sm font-medium transition-colors hover:text-primary">利用の流れ</Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary">FAQ</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-gradient section-padding" id="hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 space-y-2">
                <Badge variant="success" className="mb-4">
                  30分以内保証
                </Badge>
                <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                  Gサポート
                </h1>
                <h2 className="mx-auto max-w-3xl text-xl text-muted-foreground sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed">
                  月額500円 30分以内にかけつける。もし間に合わなければ1000円お支払いします。何回でも。
                </h2>
              </div>
              <div className="mb-8 flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="text-base px-4 py-2">
                  <Clock className="mr-2 h-4 w-4" />
                  24時間対応
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-2">
                  <Shield className="mr-2 h-4 w-4" />
                  何回でも利用可能
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-2">
                  <Users className="mr-2 h-4 w-4" />
                  プロスタッフ
                </Badge>
              </div>
              <div className="mx-auto max-w-sm">
                <CTAButtons />
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="section-padding bg-muted/30" id="service" aria-labelledby="service-title">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 id="service-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                なぜGサポートが選ばれるのか
              </h2>
              <p className="text-muted-foreground text-lg">
                お客様のお困りごとを迅速かつ確実に解決する、信頼のサービスです
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Feature
                icon={Clock}
                title="30分以内保証"
                description="30分以内にかけつけられなかった場合は1000円をお支払いします"
                highlight="保証付き"
              />
              <Feature
                icon={Shield}
                title="月額500円のみ"
                description="追加料金なしで何回でもご利用いただけます"
                highlight="回数無制限"
              />
              <Feature
                icon={Users}
                title="プロスタッフ"
                description="経験豊富な専門スタッフが対応いたします"
              />
              <Feature
                icon={MapPin}
                title="対応エリア拡大中"
                description="主要都市部から順次エリアを拡大しています"
              />
              <Feature
                icon={Phone}
                title="24時間対応"
                description="深夜・早朝・休日祝日もお気軽にご連絡ください"
              />
              <Feature
                icon={Star}
                title="高い満足度"
                description="多くのお客様に信頼いただいているサービスです"
              />
            </div>
          </div>
        </section>

        {/* Usage Flow */}
        <section className="section-padding" id="flow" aria-labelledby="flow-title">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 id="flow-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                利用の流れ
              </h2>
              <p className="text-muted-foreground text-lg">
                簡単3ステップでサポートを受けることができます
              </p>
            </div>
            <Steps steps={steps} />
            <div className="mt-12 text-center">
              <CTAButtons />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-muted/30" id="pricing" aria-labelledby="pricing-title">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 id="pricing-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                料金プラン
              </h2>
              <p className="text-muted-foreground text-lg">
                シンプルでわかりやすい料金体系
              </p>
            </div>
            <div className="mx-auto max-w-lg">
              <Card className="border-2 border-primary">
                <CardHeader className="text-center">
                  <Badge variant="default" className="mx-auto mb-2 w-fit">
                    おすすめ
                  </Badge>
                  <CardTitle className="text-3xl">Gサポート</CardTitle>
                  <div className="text-4xl font-bold text-primary">
                    ¥500
                    <span className="text-base font-normal text-muted-foreground">/月</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      30分以内駆けつけ
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      回数無制限
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      24時間365日対応
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      遅延時1000円保証
                    </li>
                  </ul>
                  <CTAButtons />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="section-padding" id="area" aria-labelledby="area-title">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 id="area-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                サービス対応エリア
              </h2>
              <p className="text-muted-foreground text-lg">
                現在のサービス対応エリアと今後の拡大予定
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="aspect-video relative bg-muted rounded-lg overflow-hidden mb-8">
                <Image
                  src="/area-map.jpg"
                  alt="サービス対応エリアマップ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">現在対応エリア</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>東京都23区内</li>
                      <li>神奈川県横浜市・川崎市</li>
                      <li>大阪府大阪市内</li>
                      <li>愛知県名古屋市内</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">拡大予定エリア</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>埼玉県さいたま市</li>
                      <li>千葉県千葉市</li>
                      <li>京都府京都市</li>
                      <li>兵庫県神戸市</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30" id="faq" aria-labelledby="faq-title">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 id="faq-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                よくあるご質問
              </h2>
              <p className="text-muted-foreground text-lg">
                お客様からよくいただくご質問にお答えします
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <FAQ faqs={faqs} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding" id="cta" aria-labelledby="cta-title">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="cta-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                今すぐGサポートを始めませんか？
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                月額500円で安心をお届けします。30分以内保証付きで何回でもご利用いただけます。
              </p>
              <div className="mx-auto max-w-sm mb-6">
                <CTAButtons />
              </div>
              <p className="text-sm text-muted-foreground">
                ※初月無料キャンペーン実施中
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12" role="contentinfo">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Logo className="mb-4" />
              <p className="text-muted-foreground mb-4">
                月額500円で30分以内にかけつける緊急駆けつけサービス
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://line.me/ti/p/placeholder">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    LINE
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="tel:+81-XX-XXXX-XXXX">
                    <Phone className="h-4 w-4 mr-2" />
                    電話
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">サービス</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#service" className="hover:text-foreground transition-colors">サービス内容</Link></li>
                <li><Link href="#pricing" className="hover:text-foreground transition-colors">料金プラン</Link></li>
                <li><Link href="#area" className="hover:text-foreground transition-colors">対応エリア</Link></li>
                <li><Link href="#faq" className="hover:text-foreground transition-colors">よくある質問</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">サポート</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/contact" className="hover:text-foreground transition-colors">お問い合わせ</Link></li>
                <li><Link href="/legal/terms" className="hover:text-foreground transition-colors">利用規約</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-foreground transition-colors">プライバシーポリシー</Link></li>
                <li><Link href="/legal/tokushoho" className="hover:text-foreground transition-colors">特定商取引法表記</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Gサポート. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}