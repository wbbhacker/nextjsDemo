'use client'
import './globals.css'

import { Providers } from "./providers";
import Nav from '@/components/Nav'

export default function RootLayout(props) {
  // console.log(Object.keys(props))
  const { children, auth } = props
  return (
    <html lang="en">
      <body className='overflow-auto	'>
        <Providers className="flex">
          <Nav />
          <div style={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}>
            {children}
          </div>

          {/* {auth} */}
        </Providers>
      </body>

    </html>
  )
}
