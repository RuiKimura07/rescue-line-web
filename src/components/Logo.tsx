import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`flex items-center space-x-2 ${className}`}
      aria-label="Gサポートのトップページに戻る"
    >
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Gサポートロゴ"
          width={40}
          height={40}
          className="w-10 h-10"
          priority
        />
        <span className="ml-2 text-xl font-bold text-primary">
          Gサポート
        </span>
      </div>
    </Link>
  )
}