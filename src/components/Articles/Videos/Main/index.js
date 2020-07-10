import React from 'react'
import VideosList from '../../../widgets/VideosList/VideosList';



const VideosMain = () => {
  return (
    <div>
     <VideosList
      type="card"
      title={true}
      loadmore={true}
      start={0}
      amount={10}
      />
     
    </div>
  )
}

export default VideosMain;
