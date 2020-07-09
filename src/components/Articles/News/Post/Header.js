import React from 'react'

const Header = (props) => {

  const hospitalInfo= (hospital)=>{

    return hospital ? (
      <TeamInfo hospital={hospital}/>
    ): null;
  }
  return (
    <div>
     {hospitalInfo(props.hospitalData)}
    </div>
  )
}

export default Header;
