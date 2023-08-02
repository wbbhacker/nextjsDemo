import { Suspense } from 'react'
import Loading from './loading';

export default function AiLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <Suspense fallback={<Loading></Loading>}>
        <div>layout</div>
        {children}
      </Suspense>
    </section>
  )
}