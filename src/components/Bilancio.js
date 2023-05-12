import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Bilancio = () => {
  const {transazioni} = useContext(GlobalContext)
  const bilancio = transazioni.map(transazione => transazione.amount)
  const totale = bilancio.reduce((acc, item) => (acc + item), 0).toFixed(2)
  
  return (
    <div className="row m-auto rounded-4 card-pers shadow">
      <div className="col mt-5 mb-3 text-center">
        <p className='text mb-0 text-light'>Questo mese hai:</p>
        <span className='h1 text-light'>€</span>
        <span id="bilancio" className='ms-1 bilancio text-light'>{totale}</span>
      </div>
      <div className="col-12 text-center mb-2">
      <div className="card-footer bg-transparent text-light badge-f">Totale movimenti: {transazioni.length}</div>
      </div>
    </div>
  )
}
