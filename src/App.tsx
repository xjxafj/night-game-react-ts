import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MouseTracker from './compoents/MouseTracker'
import LikeButton from './compoents/LikeButton'
import ImageLoader from  './compoents/ImageLoader'
import NightGame  from './compoents/NightGame'

import Game  from './compoents/NightGameDemo'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MouseTracker />
        <LikeButton /> */}
        <ImageLoader url='https://dog.ceo/api/breeds/image/random'/>
        <NightGame />
        <Game />
      </header>
    </div>
  );
}
export default App;
