import React from 'react'
import style from './header.module.css';
import { Link } from 'react-router-dom';
import SideNavigation from './SideNav/SideNav';

import FontAwesome from 'react-fontawesome';

export const Header = (props) => {

  const logo =()=>(
      <Link to="/" className={style.logo}>
        <img src="/img/logo.jpg"  alt="COVID Logo"/>
      </Link>
    )
    const navBars = () => (
      <div className={style.bars}>
                <FontAwesome name="bars"
                onClick={props.onOpenNav}
          style={{
            color:'#dfdfdf',
            padding: '10px',
            pointer:'curser'
          }}
        />
      </div>
    )

  return (
    <header className={style.header}>
      <SideNavigation {...props}/>
     <div className ={style.headerOpt}>
     {navBars()}
     {logo()}
     </div>
    </header>
  )
}
export default Header;
