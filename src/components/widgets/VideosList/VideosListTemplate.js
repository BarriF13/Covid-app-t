import React from 'react';
import style from './videosList.module.css';

import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/CardInfo';


const VideosListTemplate = (props) => {
  console.log(props);
  return props.data.map((item, i) => (
     <Link to={`/videos/${item.id}`} key={i}>
      <div className={style.VideosListItem_wrapper}>
        <div className={style.left}
          style={{ background:`url(/images/videos/${item.image})` }}>
          <div></div>
        </div>

        <div className={style.right}>
          <CardInfo hospitals={props.hospitals}
           hospital={item.hospital}
           date={item.date}/>
          <h2>{item.title}</h2>
        </div>
      </div>
    </Link>
  ))
}

export default VideosListTemplate
