import React from 'react'
import SideNav from 'react-simple-sidenav';
import SideNavItems from './SiteNavItems';


export const SideNavigation = (props) => {
  return (
    <div>
      <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
       background:'#242424',
       maxWidth:'220px'
      }}
      >
         {/* <div>Home</div>
         <div>News</div> */}
         <SideNavItems/>
      </SideNav>
    </div>
  )
}
export default SideNavigation;