import React, { useState } from 'react'
import './App.css';
import { Bilancio } from './components/Bilancio';
import { MonitoraggioSpese } from './components/MonitoraggioSpese';
import { ListaTransazioni } from './components/ListaTransazioni';
import { AggiungiTransazione } from './components/AggiungiTransazione';
import { GlobalProvider } from './context/GlobalState'

function App() {
  const [isAggiungi, setIsAggiungi] = useState(true)
  const [isRimuovi, setIsRimuovi] = useState(false)
  
  return (
    <GlobalProvider>
      <div className="container pp my-3">
        <Bilancio/>
        <MonitoraggioSpese/>
        <ListaTransazioni isAggiungi={isAggiungi} isRimuovi={isRimuovi} />
        <AggiungiTransazione isAggiungi={setIsAggiungi} isRimuovi={setIsRimuovi}/>
      </div>
    </GlobalProvider>
  );
}

export default App;
