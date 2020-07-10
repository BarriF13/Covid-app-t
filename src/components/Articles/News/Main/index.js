import React from 'react'
import NewsSlider from '../../../widgets/NewsSlider/Slider';
import NewsList from '../../../widgets/NewsList/NewsList';


const NewsMain = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        settings={{dots:false}}
        start={0}
        amount={3}
      />

      <NewsList
        type="cardMain"
        loadMore={true}
        start={3}
        amount={3}
      
      />
    </div>
  )
}

export default NewsMain;
