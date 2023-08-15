import Image from 'next/image'
import logo from '../../../../public/thor-logo.svg'
import style from './NavTop.module.scss'
const NavTop = () => {
  return (<div className={style['nav-top']}>
    <div className={style.logo}>
      < Image src={logo} width={75} height={26} alt='logo' ></Image >
    </div>
  </div >)
}

export default NavTop