import { useState } from "react";

import './App.css';
import Targets from './components/Targets/Targets';
import AddTarget from './components/AddTarget/AddTarget';

const App = () => {
  // Definir estado
  const [targets, setTargets] = useState([
    {
      name: 'O-Ren Ishii',
      state: 'downed',
      bounty: 'Claimed'
    },{
      name: 'Vermita Green',
      state: 'alive',
      bounty: '2000$'
    },{
      name: 'Budd',
      state: 'alive',
      bounty: '3000$'
    },{
      name: 'Elle Driver',
      state: 'alive',
      bounty: '5000$'
    },{
      name: 'Bill',
      state: 'alive',
      bounty: '10000$'
    }
  ]);


  return (  
    <div className="App">
      <header className="App-header">
        <h1>Bride's target list</h1>
      </header>
      <Targets dataTargets={{targets, setTargets}} />
      
    </div>
  );
}

export default App;