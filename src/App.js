import React from 'react';
import Product from './components/Product';
import Input from './components/input';
function App() {

  return (
    <div>
      <Input  />

      <Product name = "Apple" price = "1 $" description = "Fresh apple!" />
      {/* <Product name = "Banana" price = "2 $" description = "Fresh banana!" /> */}
        
    </div>
  );
}

export default App;
