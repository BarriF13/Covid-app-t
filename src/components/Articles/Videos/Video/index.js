import React, { Component } from 'react'
// import axios from 'axios';
// import { URL } from '../../../../config';
import { firebaseLooper, firebaseHospitals, firebaseDB, firebaseVideos} from '../../../../firebase'
import style from '../../article.module.css';
import Header from './Header';
import VideosRelated from './VideosRelated/videosRelated'

class VideoArticle extends Component {

  state = {
    article: [],
    hospital: [],
    hospitals:[],
    related:[]
  }

  componentWillMount() {
    firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value')
    .then((snapshot)=>{
      let article = snapshot.val();

      firebaseHospitals.orderByChild('hospitalId').equalTo(article.hospital).once('value')
      .then((snapshot)=>{
        const hospital = firebaseLooper(snapshot)
        this.setState({
          article,
          hospital
        })
      })
    })
    // axios.get(`${URL}/videos/?id=${this.props.match.params.id}`)
    //   .then(res => {
    //     let article = res.data[0];
    //     axios.get(`${URL}/hospitals?id=${article.hospital}`)
    //       .then(res => {
    //         this.setState({
    //           article,
    //           hospital: res.data
    //         });
    //         this.getRelated();
    //       })
    //   })
  }

  getRelated = () => {
    firebaseHospitals.once('value')
    .then((snapshot)=>{
      const hospitals = firebaseLooper(snapshot);

      firebaseVideos.orderByChild('hospital').equalTo(this.state.article.hospital).limitToFirst(3).once('value').then((snapshot)=>{
        const related = firebaseLooper(snapshot);
        this.setState({
          hospitals,
           related
        })
      })
    })
    // // console.log(this.state);
    // axios.get(`${URL}/hospitals`)
    // .then(res => {
    //   let hospitals = res.data

    //   axios.get(`${URL}/videos?q=${this.state.hospital[0].city}&_limit=3`)
    //   .then(res=> {
    //     this.setState({
    //       hospitals,
    //       related:res.data
    //     })
    //   })

    // })
  }
  render() {
    // console.log(this.state.hospitals);
    const article = this.state.article;
    const hospital = this.state.hospital;
    return (
      <div>
        <Header hospitalData={hospital[0]} />
        <div className={style.videoWrapper}>
          <h1>{article.title}</h1>
          <iframe src={`https://www.youtube.com/embed/${article.url}`}
           frameborder="0"
            title="videoPlayer"
            width="100%"
            height="300px"></iframe>
        </div>

        <VideosRelated
        data={this.state.related}
        hospitals = {this.state.hospitals}
        />
      </div>
    )
  }
}

export default VideoArticle;
