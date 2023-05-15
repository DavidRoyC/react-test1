import { useEffect, useState } from "react";

import './App.css';
import Targets from './components/Targets/Targets';

const App = () => {
  // Definir estado inicial
  const [targets, setTargets] = useState([]);

  // Evitar bucle de recarga
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          let targets = users.map(user => {return {
            id: user.id,
            name: user.name,
            state: user.address.city.includes('a')?'alive':'downed',
            reward: `${parseInt(user.address.zipcode)}€`
          }})
          setTargets(targets)
        });  
    }, [] // <-- [] Para ejecutar solo en 1er renderizado
  );  

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