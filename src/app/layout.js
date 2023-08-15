'use client'
import './globals.css'
import Link from 'next/link'

import {Providers} from "./providers";

export default function RootLayout(props) {
  console.log(Object.keys(props))
  const { children, auth } = props
  return (
    <html lang="en">
      <body >
        <Providers>
          <div><Link href={'/'}>Go To Home</Link></div>
          {children}
          {auth}
        </Providers>
      </body>

    </html>
  )
}
