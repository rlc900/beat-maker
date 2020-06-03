import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router'
import Emoji from './components/Emoji'
import NavBar from './components/NavBar'
import Dubstep from './components/Dubstep'
import './App.css';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
          <NavBar/>
          <h1 className='header'>BEAT <Emoji symbol='🎧' label='headphones'/> MAKER</h1>
          <Switch>
            <Route path='/dubstep' component={Dubstep}/>
          </Switch>
      </div>
    );
  }
}


export default withRouter(App);
