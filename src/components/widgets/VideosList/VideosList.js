import React, { Component } from 'react';
import style from './videosList.module.css';
import axios from 'axios';
import { URL } from '../../../config';
import Button from '../Buttons/Buttons';
import VideosListTemplate from './VideosListTemplate';
export class VideosList extends Component {

  state = {
    hospitals: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }
  componentWillMount() {
    this.request(this.state.start, this.state.end)
  }
  //making request to get videos
  request = (start, end) => {
    if (this.state.hospitals.length < 1) {
      axios.get(`${URL}/hospitals`)
        .then(res => {
          this.setState({
            hospitals: res.data
          })
        })
    }
    axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
      //catching the promise
      .then(res => {
        this.setState({
          videos: [...this.state.videos, ...res.data]
        })
      })
  }

  renderTitle = () => {
    return this.props.title ?
      <h3><strong>COVID-19</strong> videos</h3>
      : null
  }

  renderVideos = () => {
    let template = null;

    switch (this.props.type) {
      case ('card'):
        template = <VideosListTemplate data={this.state.videos} hospitals={this.state.hospitals} />
        break;
      default:
        template = null
    }
    return template;
  }
  loadMore = () => { }

  renderButton = () => {
    return this.props.loadmore ?
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        cta="Load More Videos"
      />
      :
      <Button
        type="linkTo"
        cta="More videos"
        linkTo="/videos" />;

  }

  render() {
    // console.log(this.state.videos);
    return (
      <div className={style.videoList_wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    )
  }
}

export default VideosList;
