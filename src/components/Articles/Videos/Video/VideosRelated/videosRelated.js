import React from 'react'
import style from '../VideosRelated/videosRelated.module.css';
import VideosListTemplate from '../../../../widgets/VideosList/VideosListTemplate';

const videosRelated = (props) => {
  return (
    <div className ={style.relatedWrapper}>
      <VideosListTemplate
      data={props.data}
      hospitals={props.hospitals}
      />
    </div>
  )
}

export default videosRelated
