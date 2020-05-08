import React, { useState} from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';

function App(props) {
  const [isMenuOpen, setIsMenuOpen] = userState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          BEAT 🎧 MAKER
        </h1>
      </header>
    </div>



}

export default withRouter(App);


// return (
//   <div className="App">
//     <header className="App-header">
//       <h1>
//         BEAT 🎧 MAKER
//       </h1>
//     </header>
//   </div>
