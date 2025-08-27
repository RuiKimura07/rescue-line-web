'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Logo } from './Logo'
import { User, LogOut } from 'lucide-react'

export function Header() {
  const { data: session, status } = useSession()

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            ホーム
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary">
            料金
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            お問い合わせ
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {status === 'loading' ? (
            <div className="w-20 h-10 animate-pulse bg-muted rounded"></div>
          ) : session ? (
            <div className="flex items-center space-x-2">
              <Link href="/mypage">
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  マイページ
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut()}
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button onClick={() => signIn('line')}>
              LINEでログイン
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}