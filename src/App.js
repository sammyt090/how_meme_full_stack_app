import React from 'react';
import './App.css';
import Header from './Components/Header'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {routes}
      </div>
    </div>
  );
}

export default App;
