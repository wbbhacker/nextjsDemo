'use client'
import { Space, Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Image from 'next/image'
import copilot from '../../../../public/ai-doc/thor_copilot.svg'
import style from "./doc.module.scss";
import { useRef, useEffect } from 'react'
const Doc = () => {
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

  useEffect(() => {
    console.log('s')
  }, [])

  return (<div className={style.doc}>
    <div className={style.content}>
      {/* 标题 */}
      <div className={style.title}>
        <Image src={copilot} width={44} height={44} alt='copilot' />
        <span>Thor Copilit AI数据范围</span>
      </div>
      {/* 搜索 */}
      <div style={{ position: 'relative' }}>
        <div className={style['input-placeholder']}><SearchOutlined />搜索数据</div>
        <Space.Compact style={{ width: '100%', height: '40px' }}>
          <Select defaultValue="Zhejiang" options={options} style={{ width: '136px' }} size='large' />
          <Input defaultValue="Xihu District, Hangzhou" styles={{ width: '100%', 'background-color': 'transparent' }} />
        </Space.Compact>
      </div>
    </div>
  </div>)
}

export default Doc