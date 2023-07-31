'use client'
import { Space, Input, Select } from 'antd'
const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
    },
  ];
const CustomSelect = ()=>{
    return  <Space.Compact style={{ width: '100%', height: '40px' }}>
    <Select defaultValue="Zhejiang" options={options} style={{ width: '136px' }} size='large' />
    <Input defaultValue="Xihu District, Hangzhou" styles={{ width: '100%', 'background-color': 'transparent' }} />
  </Space.Compact>
}


export default CustomSelect