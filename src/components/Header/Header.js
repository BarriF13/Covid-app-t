import React from 'react'
import style from './header.module.css';
import { Link } from 'react-router-dom';


export const Header = () => {

  const logo =()=>{
    return (
      <Link to="/" className={style.logo}>
        <img src="/img/logo.jpg"  alt="COVID Logo"/>
      </Link>
    )
  }
  return (
    <header className={style.header}>
     <div className ={style.headerOpt}></div>
     {logo()}
    </header>
  )
}
export default Header;
