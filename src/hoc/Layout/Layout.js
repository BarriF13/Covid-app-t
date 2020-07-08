import React, { Component } from 'react'

export class Layout extends Component {
  state = {

  }

  render() {
    return (
      <div>
        header
        {this.props.children}
        footer
      </div>
    )
  }
}

export default Layout;
