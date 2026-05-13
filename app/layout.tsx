import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Marcellus } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo"
});

export const metadata: Metadata = {
  title: 'Dra. Thaís Moreschi | Emagrecimento, Longevidade e Bem-Estar',
  description: 'Metodologia e protocolos personalizados e validados para te ajudar a alcançar seus objetivos. Emagrecimento com saúde metabólica, medicina personalizada.',
  keywords: ['emagrecimento', 'longevidade', 'bem-estar', 'medicina personalizada', 'Maringá', 'Dra Thaís Moreschi'],
  authors: [{ name: 'Dra. Thaís Moreschi' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-apple.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} ${marcellus.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
