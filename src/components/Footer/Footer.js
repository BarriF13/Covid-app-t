import React from 'react'
import style from './footer.module.css';
import { Link } from 'react-router-dom';

import {CURRENT_YEAR} from '../../config'

export const Footer = () => 
   (
    <div className={style.footer}>
      <Link to="/" className={style.logo}>
      <img src="/img/logo.jpg"  alt="COVID Logo"/>

      </Link>
      <div className={style.right}>
   @Covid - 19 -- {CURRENT_YEAR} All rights reserved.
      </div>
    </div>
  )
export default Footer; 