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

  render() {
    return (
      <div className={style.videoList_wrapper}>
        {this.renderTitle()}
      </div>
    )
  }
}

export default VideosList;
