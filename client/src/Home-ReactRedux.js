import React, { Component } from 'react';
import store, { add_team } from './store/index';

class HomeReactRedux extends Component {
  constructor (){
    super()

    store.subscribe(() => {
      this.setState({
        team: store.getState().team
      })
    })
  }


  render () {
    return (
      <div>
      </div>
    )
  }

}


export default HomeReactRedux
