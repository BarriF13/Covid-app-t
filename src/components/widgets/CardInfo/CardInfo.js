
import React from 'react';
import FontAwesome from 'react-fontawesome';
import style from './cardInfo.module.css';
import moment from 'moment'
const CardInfo = (props) => {

  const hospitalName = (hospitals, hospital) => {
    let data = hospitals.find((item)=> {
      return item.hospitalId === hospital
    });
    if(data){
      return data.name
    }
  }

  const formatDate =(date)=>{
    return moment(date).format(' DD-MM-YYYY');
  }
  return (
    <div className={style.cardInfo}>
      <span className={style.hospitalName}>
          {hospitalName(props.hospitals, props.hospital)}
      </span>
      <span className={style.date}>
        <FontAwesome name="clock-o"/>
        { formatDate(props.date)}
          {/* {props.date} */}
      </span>
    </div>
  )
}

export default CardInfo;
