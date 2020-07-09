import React from 'react';

import NewsSlider from '../widgets/NewsSlider/Slider';
import NewsList from '../widgets/NewsList/NewsList'
import VideosList from '../widgets/VideosList/VideosList';



export const Home = () => {
  return (
    <div>
     <NewsSlider
      type="featured"
      start={0}
      amount={3}
      settings={{
        dots: true
      }}
      />
  <NewsList
    type="card"
    loadMore={true}
    start={3}
    amount={3}
  
  />
  <VideosList
   type="card"
   title={true}
   loadmore={false}
   start={0}
   amount={3}
  />
    </div>
  )
}
export default Home;