import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'شركة الهولدينغ - تجربة متكاملة للمنتجات',
  description: 'شركة هولدينغ متخصصة في تصميم تجربة المستخدم الشاملة للمنتجات المادية والرقمية - من الفكرة إلى السوق',
  keywords: 'تصميم المنتجات, تصميم التغليف, مواقع إلكترونية, تطبيقات, هوية بصرية, طباعة',
  authors: [{ name: 'شركة الهولدينغ' }]
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}