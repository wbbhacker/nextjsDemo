'use client'
import './globals.css'

import {Providers} from "./providers";
import Nav from '@/components/Nav'

export default function RootLayout(props) {
  // console.log(Object.keys(props))
  const { children, auth } = props
  return (
    <html lang="en">
      <body >
        <Providers>
          <Nav />
          {children}
          {/* {auth} */}
        </Providers>
      </body>

    </html>
  )
}
