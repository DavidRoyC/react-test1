import { useEffect, useState } from "react";

import './App.css';
import Header from './components/Header/Header';
import Targets from './components/Targets/Targets';

import ThemeContext from "./contexts/ThemeContext";
import PublicTargets from "./contexts/PublicTargets"; 

const App = () => {
  // Definir estado inicial
  const [targets, setTargets] = useState([]);
  const [theme, setTheme] = useState({mode: 'light'});

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
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet"></link>
      <ThemeContext.Provider value={ theme }>
        <Header subtitle={''} setTheme={setTheme} />
        <PublicTargets.Provider value={{ targets, setTargets }}>
          <Targets />
        </PublicTargets.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;