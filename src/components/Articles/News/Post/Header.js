import React from 'react'
import HospitalInfo from '../../Elements/hospitalInfo';
import PostData from '../../Elements/postData';


const Header = (props) => {

  const hospitalInfo= (hospital)=>{

    return hospital ? (
      <HospitalInfo hospital={hospital}/>
    ): null;
  }

  const postData =(date, author)=>(
    <PostData data ={{date, author}}/>
  )

  
  return (
    <div>
     { hospitalInfo(props.hospitalData) }
     { postData(props.date, props.author) } 
   
    </div>
  )
  
}
export default Header;
