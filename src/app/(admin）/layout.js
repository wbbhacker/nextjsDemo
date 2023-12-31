export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-auto bg-background">
        <div style={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
