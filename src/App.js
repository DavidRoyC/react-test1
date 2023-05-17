// Importar librerias
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"

// Importar ganchos personalizados
import useFetch from "./hooks/useFetch";

// Importar contextos
import ThemeContext from "./contexts/ThemeContext";
import PublicTargets from "./contexts/PublicTargets"; 

// Importar estilo
import './App.css';

//Importar componentes
import Header from './components/Header/Header';
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Wellcome from "./components/Wellcome/Wellcome";
import Targets from './components/Targets/Targets';
import TargetDetail from "./components/TargetDetail/TargetDetail";
import NotFound from "./components/NotFound/NotFound";


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
        <TopNavbar />
        <Routes>
          <Route path="/" element={ <Wellcome /> }></Route>
          <Route path="targets" element={
            <PublicTargets.Provider value={{ targets, setTargets, loadingTargets, errorTargets }}>
            <Targets />
          </PublicTargets.Provider>
          }>
          </Route>
          <Route path="target/:id" element={
            <PublicTargets.Provider value={{ targets, setTargets, loadingTargets, errorTargets }}>
              <TargetDetail />
            </PublicTargets.Provider>
          }>
          </Route>
          <Route path="*" element={ <NotFound /> }></Route>
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;