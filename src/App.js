import { useState } from 'react';
import Show from './Show';
import Basic from './basic';
import Portfolio from './Portfolio/Portfolio';
import Nav from './Portfolio/Nav';

function App() {



  return (
    <div className="App">
      <Nav />
      <Portfolio />
    </div>
  );
}

export default App;
