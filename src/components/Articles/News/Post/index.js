import React, { Component } from 'react';
// import axios from 'axios';
// import { URL } from '../../../../config'
import { firebase, firebaseLooper, firebaseHospitals, firebaseDB } from '../../../../firebase'
import style from '../../article.module.css';
import Header from './Header';
export class NewArticles extends Component {
  state = {
    article: [],
    hospital: [],
    imageURL: ''

  }
  componentWillMount() {
    firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
      .then((snapshot) => {
        let article = snapshot.val();

        firebaseHospitals.orderByChild('hospitalId').equalTo(article.hospital).once('value')
          .then((snapshot) => {
            const hospital = firebaseLooper(snapshot)
            this.setState({
              article,
              hospital
            })
            this.getImageURL(article.image)
          })

      })





    // axios.get(`${URL}/articles/?id=${this.props.match.params.id}`)
    //   .then(res => {
    //     let article = res.data[0];
    //     axios.get(`${URL}/hospitals?id=${article.hospital}`)
    //       .then(res => {
    //         this.setState({
    //           article,
    //           hospital: res.data
    //         })
    //       })
    //   })
  }
  //function for catching a name of image
  getImageURL= (filename)=>{
    firebase.storage().ref('images')
    .child(filename).getDownloadURL()
    .then( url =>{
      this.setState({
        imageURL:url
      })
    })
  }

  render() {
    const article = this.state.article;
    const hospital = this.state.hospital;
    // console.log(this.state);
    return (
      <div className={style.articleWrapper}>
        <Header
          hospitalData={hospital[0]}
          date={article.date}
          author={article.author}
        />
        <div className={style.articleBody}>
          <h1>{article.title}</h1>
          <div className={style.articleImage}
            style={{
              // background: `url('/images/articles/${article.image}')`
              background: `url('${this.state.imageURL}')`
            }}
          ></div>
          <div className={style.articleText}
          dangerouslySetInnerHTML={{
            __html:article.body

          }}             
          >
            {/* {article.body} */}
          </div>
        </div>
      </div>
    )
  }
}

export default NewArticles;
