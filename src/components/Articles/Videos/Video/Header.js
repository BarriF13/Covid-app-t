import React from 'react';
import HospitalInfo from '../../Elements/hospitalInfo';

const Header = (props) => {

  const hospitalInfo = (hospital) => {
    return hospital ? (
      <HospitalInfo hospital={hospital} />
    ) : null;
  }
  return (
    <div>
      {hospitalInfo(props.hospitalData)}
    </div>
  )
}

export default Header
