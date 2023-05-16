import { useEffect, useState } from "react";

import './App.css';
import Header from './components/Header/Header';
import Targets from './components/Targets/Targets';

import ThemeContext from "./contexts/ThemeContext";
import PublicTargets from "./contexts/PublicTargets"; 

const App = () => {
  // Definir estado inicial
  const [theme, setTheme] = useState({ darkmode: false, icon: 'dark_mode' });
  const [targets, setTargets, loadingTargets, errorTargets] = useFetch('https://jsonplaceholder.typicode.com/users');

  // Evitar bucle de recarga
  useEffect(() => {
    console.log('Inicializando...');
    }, [] // <-- [] Para ejecutar solo en 1er renderizado
  );  

  return (  
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet"></link>
      <ThemeContext.Provider value={ theme }>
        <Header subtitle={''} setTheme={setTheme} />
        <PublicTargets.Provider value={{ targets, setTargets, loadingTargets, errorTargets }}>
          <Targets />
        </PublicTargets.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;