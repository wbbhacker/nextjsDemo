'use client'
import { Button, DatePicker } from 'antd';
import NavTop from '@/components/NavTop';
import Doc from './components/doc'

const divStyle = {
  display: 'flex',
  'flex-direction': 'column',
  height: '100%'
}
const docStyle = {
  display: 'flex',
  flex: '1',
  'justify-content': 'center',
  'min-width': '1100px'
}
const AiDoc = () => {
  return (<div style={divStyle}>
    <NavTop />
    <div style={docStyle}>
      <Doc />
    </div>
  </div>)
}

export default AiDoc