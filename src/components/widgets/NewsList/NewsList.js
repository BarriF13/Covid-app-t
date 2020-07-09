import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios'

import { URL } from '../../../config';
import style from './newsList.module.css';
import Button from '../Buttons/Buttons';
import CardInfo from '../CardInfo/CardInfo';


export class NewsList extends Component {

  state = {
    hospitals:[],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  //check request

  componentWillMount() {
    this.request(this.state.start,this.state.end)
  }
  request = (start, end) => {
    //request hospital
    if(this.state.hospitals.length < 1){
        axios.get(`${URL}/hospitals`)
        .then(res =>{
          this.setState({
            hospitals:res.data
          })
        })
      }

    //request
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
      //catching the promise
      .then(res => {
        this.setState({
          items:[...this.state.items, ...res.data]
        })
      })
  }
  loadMore = ()=>{
      let end = this.state.end + this.state.amount;

    this.request(this.state.end, end)
  }

  renderNews = (type) => {
    let template = null;

    switch (type) {
      case ('card'):
        template = this.state.items.map((item, i) => (
          <CSSTransition
          classNames={{
              enter:style.newsList_wrapper,
              enterActive:style.newsList_wrapper_enter

          }}
          timeout= {500}
          key={i}
          >
          <div>
            <div className={style.newsList_item}>
              <Link to={`/articles/${item.id}`}>
               <CardInfo />
                <h2>{item.title}</h2>
              </Link>

            </div>
          </div>
          </CSSTransition>
        ))
        break;
      default:
        template = null;
    }
    return template;
  }

  render() {
    // console.log(this.state.items);
    // console.log(this.state.hospitals);
    return (
      <div>
        <TransitionGroup
        component="div"
        className="list"
        >
          {this.renderNews(this.props.type)}
        </TransitionGroup>

        <Button
          type="loadmore"
          loadMore = {()=> this.loadMore()}
          cta="Load More News"
        />
        
      </div>
    )
  }
}

export default NewsList
