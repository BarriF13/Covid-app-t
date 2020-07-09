import React from 'react'
import { Link } from 'react-router-dom'
import style from './buttons.module.css';

 const Buttons = (props) => {
   let template=null;

   switch(props.type){
     case'loadmore':
      template = (
       <div className={style.blue_btn}
            onClick={props.loadMore}
       >
      {props.cta} 
       </div>
     );
      break;
      default:
        template =null;
   }
  return template;
}
export default Buttons;