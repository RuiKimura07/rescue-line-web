import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <Image
        src="/logo.svg"
        alt="Gサポ ロゴ"
        width={40}
        height={40}
        className="w-10 h-10"
      />
      {showText && (
        <div className="flex flex-col">
          <span className="text-lg font-bold text-primary">Gサポ</span>
          <span className="text-xs text-muted-foreground">身近なレスキュー</span>
        </div>
      )}
    </Link>
  )
}