import React from 'react';
import './App.css';
import ItemOne from './listitems/item-one/index';
import ItemTwo from './listitems/item-two/index';
import ItemThree from './listitems/item-three/index';

const bodyStyle = {
  backgroundColor: '#000000',
};


function App() {
  return (
    <div style={bodyStyle} className="App">
     
      <ItemOne />
      <ItemTwo />
      <ItemThree />

    </div>
  );
}

export default App;
