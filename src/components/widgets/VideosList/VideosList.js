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
  render() {
    return (
      <div>
        videos
      </div>
    )
  }
}

export default VideosList;
