import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: '特定商取引法に基づく表記 - Gサポート',
  description: 'Gサポートサービスの特定商取引法に基づく表記です。',
}

export default function TokushohoPage() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Logo />
        </div>
      </header>

      <main className="container py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                トップページに戻る
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">特定商取引法に基づく表記</h1>
          </div>

          <div className="text-center py-16">
            <p className="text-muted-foreground">
              特定商取引法に基づく表記の内容は準備中です。
            </p>
          </div>
        </div>
      </main>
    </>
  )
}