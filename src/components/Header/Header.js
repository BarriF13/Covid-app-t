import React from 'react'
import style from './header.module.css';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';

export const Header = () => {

  const logo =()=>(
      <Link to="/" className={style.logo}>
        <img src="/img/logo.jpg"  alt="COVID Logo"/>
      </Link>
    )
    const navBars = () => (
      <div className={style.bars}>
        <FontAwesome name="bars"
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
     <div className ={style.headerOpt}>
     {navBars()}
     {logo()}
     </div>
    </header>
  )
}
export default Header;
