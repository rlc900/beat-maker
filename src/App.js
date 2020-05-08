import React, { useState } from 'react';
import Emoji from './components/emoji'
import {withRouter} from 'react-router-dom';
import './App.css';

function App(props) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          BEAT <Emoji symbol='🎧' label='headphones'/> MAKER
        </h1>
      </header>
    </div>
  )
};

export default withRouter(App);
