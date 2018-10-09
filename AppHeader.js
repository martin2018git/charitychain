import React, { Component } from 'react';


class AppHeader extends Component {

  state = {
      title: "COLB - Charity Blockchain POC (version 0.1)",
  }


  render(){
    return(
        <div className='AppHeader'>
          {this.state.title}
        </div>
    )
  }


}

export default AppHeader;
