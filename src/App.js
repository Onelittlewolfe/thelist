import React from 'react';
import './App.css';
import ItemOne from './listitems/item-one/index';
import ItemTwo from './listitems/item-two/index';
import ItemThree from './listitems/item-three/index';
import ItemFour from './listitems/item-four/index';

const bodyStyle = {
  backgroundColor: '#000000',
};


function App() {
  return (
    <div style={bodyStyle} className="App">
     
      <ItemOne />
      <ItemTwo />
      <ItemThree />
      <ItemFour />

    </div>
  );
}

export default App;
