import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'شركة سينيور باك - تجربة متكاملة للمنتجات',
  description: 'شركة سينيور باك متخصصة في تصميم تجربة المستخدم الشاملة للمنتجات المادية والرقمية - من الفكرة إلى السوق',
  keywords: 'تصميم المنتجات, تصميم التغليف, مواقع إلكترونية, تطبيقات, هوية بصرية, طباعة',
  authors: [{ name: 'شركة سينيور باك' }],
  icons: {
    icon: '/images/logo.png',
  },
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
      <body className={cairo.className}>{children}</body>
    </html>
  )
}