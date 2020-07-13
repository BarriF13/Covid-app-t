import React from 'react'
import style from '../article.module.css';
import moment from 'moment'

const formatDate = (date) =>{
 return  moment(date).format('DD-MM-YY');
}
const PostData = (props) => 
  (
    <div className={style.articlePostData}>
      <div>
        Date:
          <span>{formatDate(props.data.date)}</span>
      </div>

      <div>
        Author:
          <span>{props.data.author}</span>
      </div>
    </div>
  )


export default PostData;
