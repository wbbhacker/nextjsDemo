import Image from 'next/image'
import copilot from '../../../../public/ai-doc/thor_copilot.svg'
import style from "./doc.module.scss";
import ClientCp from './clientCp'
import ServerCp from './serverCp'

import CustomSelect from './customSelect'
const Doc = () => {

  return (<div className={style.doc}>
    <div className={style.content}>
      {/* 标题 */}
      <div className={style.title}>
        <Image src={copilot} width={44} height={44} alt='copilot' />
        <span>Thor Copilit AI数据范围</span>
      </div>
      {/* 搜索 */}
      <div style={{ position: 'relative' }}>
        {/* <div className={style['input-placeholder']}>搜索数据</div> */}
        {/* <CustomSelect></CustomSelect> */}
        <ClientCp></ClientCp>
        <ServerCp></ServerCp>
      </div>
    </div>
  </div>)
}

export default Doc