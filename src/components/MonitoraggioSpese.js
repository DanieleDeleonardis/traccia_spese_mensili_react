import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const MonitoraggioSpese = () => {
  const {transazioni} = useContext(GlobalContext)
  const bilancio = transazioni.map(transazione => transazione.amount)
  const entrata = bilancio.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
  const spesi = (bilancio.filter(item => item < 0).reduce((acc, item) => (acc += item),0) * -1).toFixed(2)

//   console.log("bilancio: " + bilancio)
//   console.log("entrata: " + entrata)
  console.log("spesi: " + spesi)

  const monitoraObj = {
    entrata: entrata,
    spesi: spesi
  }

  useEffect(() => {
    const getMonitoraStor = localStorage.getItem('monitoraEsiti')
    if(getMonitoraStor == null){
        localStorage.setItem('monitoraEsiti', []);            
    } else {       
        localStorage.setItem('monitoraEsiti', JSON.stringify(monitoraObj))
    }
  }, []);

  


    // const statoIniziale = {
    //     transazioni:
    //         getTransazioniStor ? JSON.parse(getTransazioniStor) : []
    //     // {id: 1, text: 'Bonifico stipendio', amount: + 1400, data: new Date().toISOString().slice(0, 10)},
    //     // {id: 2, text: 'Fiori', amount: -20, data: new Date().toISOString().slice(0, 10)},
    //     // {id: 3, text: 'Sara', amount: +100},
    //     // {id: 4, text: 'Altro', amount: -20}
    // }

    return (
        <>
        <div className="row mt-4">
            <div className="col">
                <div className="card rounded-3 shadow">
                    <div className="card-body text-center">
                        <p className="card-title">Entrate</p>
                        <span className='text-success'>€</span>
                        <span className="card-text ms-1 text-success">{entrata}</span>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card rounded-3 shadow">
                    <div className="card-body text-center">
                        <p className="card-title">Spese</p>
                        <span className='text-danger'>€</span>
                        <span className="card-text ms-1 text-danger">{spesi}</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
