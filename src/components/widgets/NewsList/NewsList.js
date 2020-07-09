import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios'

import {URL} from '../../../config';



export class NewsList extends Component {

  state ={
    items:[],
    start:this.props.start,
    end:this.props.start + this.props.amount,
    amount:this.props.amount
  }

  //check request

  componentWillMount(){
    //request
    axios.get(`${URL}/articles?_start=${this.state.start}&_end${this.state.end}`)
    //catching the promise
    .then(res => {
      this.setState({
       items:[...this.state.items, ...res.data]
      })
    })

  }
  render() {
    console.log(this.state.items);
    return (
      <div>
        hello news list
      </div>
    )
  }
}

export default NewsList
