import React from 'react'
import style from '../article.module.css';

//logo doesn't load on line 10 {props.hospital.logo}can't be pulled
const hospitalInfo = (props) =>   (

    <div className={style.articleHospitalHeader}>
       <div className={style.left}
            style={{
        background:`url('/images/hospitals/${props.hospital.logo}')`
     
        
      }}
    
    ></div>

    <div className={style.right}>
      <div>
        <span>
          {props.hospital.city} {props.hospital.name}
        </span>
      </div>
      <div>
        <strong>
          Infected: {props.hospital.stats[0].infected} - Death: {props.hospital.stats[0].death}
        </strong>
      </div>
    </div>
    </div>
  )


export default hospitalInfo;
 