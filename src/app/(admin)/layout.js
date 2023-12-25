'use client';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <span>{'admin loyout'}</span>
        {children}
      </body>
    </html>
  );
}
