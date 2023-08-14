import React, { useState } from 'react';
import './App.css';
import CreateAcc from './components/createacc';
import Login from './components/login';

function App() {
  const [logVisible, setLogVisible] = useState(true);

  const toggleLogVisible = () => {
    setLogVisible(!logVisible);
  };

  return (
    <div className="app">
      {logVisible ? (
        <CreateAcc logVisible={logVisible} setLogVisible={toggleLogVisible} />
      ) : (
        <Login logVisible={logVisible} setLogVisible={toggleLogVisible} />
      )}
    </div>
  );
}

export default App;
