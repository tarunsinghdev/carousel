import React from 'react';
import Carousel from './components/Carousel/Carousel';

const App = () => {
  return (
    <div className="App">
      <a
        href="https://github.com/tarunsinghdev/carousel"
        target="_blank"
        rel="noreferrer"
        className="App__sourcecodebtn"
      >
        Source code
      </a>
      <Carousel />
    </div>
  );
};

export default App;
