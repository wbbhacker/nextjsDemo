export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <span>{'markeying layout'}</span>
        {children}
      </body>
    </html>
  );
}