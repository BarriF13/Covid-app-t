import React, { Component } from 'react'
import Slick from 'react-slick';

const SliderTemplates =(props)=> {
  //  console.log(props);

  const settings ={
    dots:true,
    infinite: true,
    arrow:false,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1

  }
    return (
      <Slick {...settings}>
        <div>1</div>
        <div>2</div>
      </Slick>
    )
  }


export default SliderTemplates;
