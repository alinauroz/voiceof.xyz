import React from 'react';
import './App.css';

import TopBar from './components/TopBar.jsx'

class App extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
    <>
      <TopBar />
    </>
    )
  }
}

export default App;
