import React from 'react';
import {useSelector} from 'react-redux'
import './App.scss';

import Header from './components/Header'
import Board from './components/Board'

function App() {
  const {bg} = useSelector(state => state.theme)
  return (
    <div className="App" style={{background: bg}}>
      <Header />
      <Board />
    </div>
  );
}

export default App;
