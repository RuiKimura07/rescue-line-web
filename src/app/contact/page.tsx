import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, Clock, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'お問い合わせ | Gサポ',
  description: 'Gサポへのお問い合わせ',
}

export default function ContactPage() {
  const supportEmail = process.env.COMPANY_EMAIL || 'support@example.com'
  const supportPhone = process.env.COMPANY_PHONE || '03-xxxx-xxxx'

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">お問い合わせ</h1>
          <p className="text-xl text-muted-foreground">
            ご質問やサポートが必要でしたらお気軽にご連絡ください
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* メールサポート */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="w-6 h-6 mr-2 text-primary" />
                メールサポート
              </CardTitle>
              <CardDescription>
                一般的なお問い合わせはメールでご連絡ください
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">サポートメール</p>
                <p className="font-mono text-sm">{supportEmail}</p>
              </div>
              <Button asChild className="w-full">
                <a href={`mailto:${supportEmail}?subject=Gサポについてのお問い合わせ`}>
                  <Mail className="w-4 h-4 mr-2" />
                  メールを送信
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                通常24時間以内にご返信いたします
              </p>
            </CardContent>
          </Card>

          {/* 電話サポート */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="w-6 h-6 mr-2 text-primary" />
                電話サポート
              </CardTitle>
              <CardDescription>
                緊急時やお急ぎの場合はお電話ください
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">サポートダイヤル</p>
                <p className="font-mono text-lg font-semibold">{supportPhone}</p>
              </div>
              <Button asChild className="w-full" variant="outline">
                <a href={`tel:${supportPhone.replace(/-/g, '')}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  電話をかける
                </a>
              </Button>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="w-3 h-3 mr-1" />
                営業時間: 平日 9:00-18:00
              </div>
            </CardContent>
          </Card>
        </div>

        {/* よくある質問セクション */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">よくある質問</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">解約はいつでもできますか？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  はい、いつでも解約可能です。マイページの「請求管理ポータル」から簡単に手続きできます。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">サポート対応時間は？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  メールサポートは24時間受付、電話サポートは平日9:00-18:00です。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">料金はいくらですか？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  月額500円（税込）のシンプルなプランのみご用意しています。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">返金はありますか？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  返金ポリシーについては利用規約をご確認ください。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* チャットサポート案内 */}
        <div className="mt-16 text-center bg-primary/10 rounded-lg p-8">
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">チャットサポート</h3>
          <p className="text-muted-foreground mb-4">
            ご加入後は専用チャットサポートもご利用いただけます
          </p>
          <Button asChild>
            <a href="/pricing">プランを見る</a>
          </Button>
        </div>
      </div>
    </div>
  )
}