import React, { useState } from 'react';
// import {withRouter} from 'react-router-dom';
// import {Switch, Route} from 'react-router'
import Emoji from './components/Emoji'
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='header'>Martian <Emoji symbol='👽' label='headphones'/> Pad</h1>
        </header>
      </div>
    );
  }
}


export default App;

// const useAudio = url => {
//   const [audio] = useState(new Audio('martianScanner.mp3'));
//   const [playing, setPlaying] = useState(false);
//
//   const toggle = () => setPlaying(!playing);
//
//   useEffect(() => {
//       playing ? audio.play() : audio.pause();
//     }
//   );
//
//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);
//
//   return [playing, toggle];
// };
//
//
// const Player = ({ url }) => {
//   const [playing, toggle] = useAudio(url);
//
//
//   return (
//     <div>
//       <Button onClick={toggle}>Martian Scanner</Button>
//     </div>
//   );
// };
//
// export default Player;
