import React, { useState } from 'react'
import './App.css';
import { Bilancio } from './components/Bilancio';
import { MonitoraggioSpese } from './components/MonitoraggioSpese';
import { ListaTransazioni } from './components/ListaTransazioni';
import { AggiungiTransazione } from './components/AggiungiTransazione';
import { GlobalProvider } from './context/GlobalState'
import { GraficoSpese } from './components/GraficoSpese';
import { SelezioneModuli } from './components/SelezioneModuli';

function App() {
  const [isAggiungi, setIsAggiungi] = useState(true)
  const [isRimuovi, setIsRimuovi] = useState(false)
  const [modulo, setModulo] = useState('transazioni')

  const moduloVisibile = () => {
    if(modulo === 'transazioni'){      
      return (
      <>
      <ListaTransazioni isAggiungi={isAggiungi} isRimuovi={isRimuovi} />
      <AggiungiTransazione isAggiungi={setIsAggiungi} isRimuovi={setIsRimuovi}/>
      </>     
      )
    } else {
      return <GraficoSpese></GraficoSpese>
    }
  }
  
  return (
    <GlobalProvider>
      <div className="container my-3">
        <Bilancio/>
        <MonitoraggioSpese/>
        <SelezioneModuli modulo={modulo} setModulo={setModulo} />
        {
        moduloVisibile()
        }
      </div>
    </GlobalProvider>
  );
}

export default App;
