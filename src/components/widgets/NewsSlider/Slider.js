import React, { Component } from 'react';
// import axios from 'axios';
import SliderTemplates from './slider_templates';
// import {URL} from '../../../config';
import{firebaseArticles, firebaseLooper} from '../../../firebase'

export class Slider extends Component {
  state={
      news:[]

  }
  componentWillMount(){
    firebaseArticles.limitToFirst(3).once('value')
    .then((snapshot)=>{
      const news = firebaseLooper(snapshot)
      this.setState({
        news
      })
    })


    // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
    // .then(res =>{
    //   this.setState({
    //     news:res.data
    //   })
    // })
  }

  render() {
    
    return (
      <div>
        <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
      </div>
    )
  }
}

export default Slider;
