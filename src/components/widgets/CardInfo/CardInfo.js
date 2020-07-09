
import React from 'react';
import FontAwesome from 'react-fontawesome';
import style from './cardInfo.module.css';
const CardInfo = (props) => {

  const hospitalName = (hospitals, hospital) => {
    let data = hospitals.find((item)=> {
      return item.id === hospital
    });
    if(data){
      return data.name
    }
  }


  return (
    <div className={style.cardInfo}>
      <span className={style.hospitalName}>
          {hospitalName(props.hospitals, props.hospital)}
      </span>
      <span className={style.date}>
        <FontAwesome name="clock-o"/>
          {props.date}
      </span>
    </div>
  )
}

export default CardInfo;
