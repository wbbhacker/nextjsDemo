import './globals.css';

import { Providers } from './providers';
import Nav from '@/app/(workspace)/_components/Nav';

export default function RootLayout(props) {
  const { children, auth } = props;
  console.log(props);
  return (
    <html lang="en">
      <body className="overflow-auto bg-background ">
        <Providers className="flex">
          <Nav />
          <div style={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
