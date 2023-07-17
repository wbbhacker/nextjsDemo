'use client'
import Image from 'next/image'
import { Button, DatePicker } from 'antd';
import withTheme from '../theme'

const Home = function () {
  return (
    <div className="main">
      <DatePicker picker="week" />
    </div>
  )
}

const HomePage = () => {
  // return withTheme(<Home />);
  return <Home></Home>
}

export default HomePage