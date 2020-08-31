import React from 'react';
import './App.css';

import TopBar from './components/TopBar.jsx'
import ControlBar from './components/ControlBar'

class App extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
    <div className = 'app'>
      <TopBar />
      <ControlBar />
    </div>
    )
  }
}

export default App;
