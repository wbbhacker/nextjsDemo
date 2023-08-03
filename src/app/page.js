
import Image from 'next/image'
import Link from 'next/link'

const Home = function () {
  return (
    <div className="main">
      <div>
        <Link href={'ai-doc'}>ai-doc</Link>
      </div>
      <div>
        <Link href={'about'}>about</Link>
      </div>
      <div>
        <Link href={'blog'}>blog</Link>
      </div>
      <div>
        <Link href={'dashboard'}>dashboard</Link>
      </div>
      <div>
        <Link href={'/login'}>login</Link>
      </div>
    </div>
  )
}

const HomePage = () => {
  return <Home></Home>
}

export default HomePage