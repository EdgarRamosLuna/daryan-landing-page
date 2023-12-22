import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daryan',
  description: 'Daryan Total Solutions un Quality es un sitio web diseñado para ofrecer soluciones integrales y servicios de calidad en diversas áreas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
