import React, { Component } from 'react';
import style from './videosList.module.css';
import axios from 'axios';
import {URL} from '../../../config';
import Button from '../Buttons/Buttons';

export class VideosList extends Component {

  state = {
    hospitals: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  renderTitle = () => {
    return this.props.title ? 
    <h3><strong>COVID-19</strong> videos</h3>
    : null
  }
  loadMore =()=>{}

  renderButton =()=>{
    return this.props.loadmore ? 
    <Button
    type="loadmore"
    loadMore ={()=> this.loadMore()}
    cta="Load More Videos"
    />
    :
     <Button
      type="linkTo"
     cta="More videos"
     linkTo="/videos"/> ;

  }

  render() {
    return (
      <div className={style.videoList_wrapper}>
        {this.renderTitle()}
        {this.renderButton()}
      </div>
    )
  }
}

export default VideosList;
