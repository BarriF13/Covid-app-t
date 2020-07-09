import React, { Component } from 'react';
import axios from 'axios';
import {URL} from '../../../../config'

import style from '../../article.module.css';
import Header from './Header';
import Body from './Body';
export class NewArticles extends Component {
  state={
    article:[],
    hospital:[]

  }
  componentWillMount(){
    axios.get(`${URL}/articles/?id=${this.props.match.params.id}`)
    .then(res =>{
      let article = res.data[0];
      axios.get(`${URL}/hospital?id=${article.hospital}`)
      .then(res => {
        this.setState({
          article,
          hospital: res.data        })
      })
    })
  }
  render() {
    const article = this.state.article;
    const hospital = this.state.team;
    // console.log(this.state);
    return (
      <div className={style.articleWrapper}>
        <Header
        hospitalData={hospital[0]}
        date={article.date}
        author={article.author}
        />
        <Body/>
        
      </div>
    )
  }
}

export default NewArticles;
