import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { currencyFormatter } from '../hooks/currencyFormatter'

export const MonitoraggioSpese = () => {
  const {transazioni} = useContext(GlobalContext)
  const bilancio = transazioni.map(transazione => transazione.amount)
  const entrata = bilancio.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)
  const spesi = (bilancio.filter(item => item < 0).reduce((acc, item) => (acc += item),0) * -1)

    return (
        <>
        <div className="row mt-4">
            <div className="col">
                <div className="card rounded-3 shadow">
                    <div className="card-body text-center">
                        <p className="card-title">Entrate</p>
                        {/* <span className='text-success'>€</span> */}
                        <span className="card-text text-success">{currencyFormatter(entrata)}</span>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card rounded-3 shadow">
                    <div className="card-body text-center">
                        <p className="card-title">Spese</p>
                        {/* <span className='text-danger'>€</span> */}
                        <span className="card-text text-danger">{currencyFormatter(spesi)}</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
