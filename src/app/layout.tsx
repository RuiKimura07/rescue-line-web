import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gサポート - 月額500円で30分以内にかけつける緊急駆けつけサービス',
  description: '月額500円で30分以内にかけつける緊急駆けつけサービス「Gサポート」。もし間に合わなければ1000円お支払いします。何回でもご利用いただけます。',
  keywords: '緊急駆けつけ, サポートサービス, 月額500円, 30分以内, Gサポート',
  authors: [{ name: 'Gサポート' }],
  creator: 'Gサポート',
  publisher: 'Gサポート',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://g-support.example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Gサポート - 月額500円で30分以内にかけつける緊急駆けつけサービス',
    description: '月額500円で30分以内にかけつける緊急駆けつけサービス「Gサポート」。もし間に合わなければ1000円お支払いします。何回でもご利用いただけます。',
    url: 'https://g-support.example.com',
    siteName: 'Gサポート',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Gサポート - 緊急駆けつけサービス',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gサポート - 月額500円で30分以内にかけつける緊急駆けつけサービス',
    description: '月額500円で30分以内にかけつける緊急駆けつけサービス「Gサポート」。もし間に合わなければ1000円お支払いします。',
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Gサポート',
  description: '月額500円で30分以内にかけつける緊急駆けつけサービス',
  url: 'https://g-support.example.com',
  logo: 'https://g-support.example.com/logo.svg',
  image: 'https://g-support.example.com/og.jpg',
  telephone: '+81-XX-XXXX-XXXX',
  priceRange: '¥500/月',
  serviceType: '緊急駆けつけサービス',
  areaServed: {
    '@type': 'Country',
    name: 'Japan',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Gサポートサービス',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '緊急駆けつけサービス',
          description: '30分以内にかけつける緊急サポート',
        },
        price: '500',
        priceCurrency: 'JPY',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '500',
          priceCurrency: 'JPY',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitCode: 'MON',
          },
        },
      },
    ],
  },
  potentialAction: {
    '@type': 'ContactAction',
    name: 'お問い合わせ',
    target: 'https://g-support.example.com/contact',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="ja" 
      className={`${inter.variable} ${notoSansJP.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}