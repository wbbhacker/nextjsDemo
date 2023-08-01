import { Button, DatePicker } from 'antd';
import NavTop from '@/components/NavTop';
import Doc from './components/doc'

const divStyle = {
  display: 'flex',
  'flexDirection': 'column',
  height: '100%'
}
const docStyle = {
  display: 'flex',
  flex: '1',
  'justifyContent': 'center',
  'minWidth': '1100px'
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