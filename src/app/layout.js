import './globals.css'

export const metadata = {
  title: 'nextDemo',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div>控制同级别路由以及子路由</div>
        {children}</body>
    </html>
  )
}
