import React, { Component } from 'react'
import './layout.css';

import moduleName, { Header } from '../../components/Header/Header';
export class Layout extends Component {
  state = {

  }

  render() {
    return (
      <div>
        
       <Header/>
        {this.props.children}
        footer
      </div>
    )
   
  }
}

export default Layout;
