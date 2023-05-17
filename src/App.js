import React, { useState } from 'react'
import './App.css';
import { Bilancio } from './components/Bilancio';
import { MonitoraggioSpese } from './components/MonitoraggioSpese';
import { ListaTransazioni } from './components/ListaTransazioni';
import { AggiungiTransazione } from './components/AggiungiTransazione';
import { GlobalProvider } from './context/GlobalState'
import { GraficoSpese } from './components/GraficoSpese';

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
      <div className="container pp my-3">
        <Bilancio/>
        <MonitoraggioSpese/>
        <div className='mt-4'>
          <span 
          onClick={() => setModulo('transazioni')} 
          className={`material-symbols-outlined ps-1 pe-0 ${modulo === 'transazioni' ? 'text-bg' : ''}`} 
          style={{ fontSize: '30px', width: 'max-content' }} >
            database
          </span>
          <span 
          onClick={() => setModulo('grafico')} 
          className={`material-symbols-outlined ms-3 ${modulo === 'grafico' ? 'text-bg' : ''}`} 
          style={{ fontSize: '30px', width: 'max-content' }}>
            monitoring
          </span>
        </div>
        {
        moduloVisibile()
        }
      </div>
    </GlobalProvider>
  );
}

export default App;
