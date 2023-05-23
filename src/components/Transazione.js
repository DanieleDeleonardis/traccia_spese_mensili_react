import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {currencyFormatter} from '../hooks/currencyFormatter'

export const Transazione = ({transazioni, isAggiungi, isRimuovi, deleteItems}) => {
    const {eliminaTransazioni} = useContext(GlobalContext)
    // const formatter = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'EUR',
    //     maximumFractionDigits: 0
    //   });

    return (
        <ul className="list-group list-group-flush">
            {              
            transazioni.map(transazione => (
                <li key={transazione.id} className="list-group-item d-flex justify-content-between align-items-start ps-0">
                    <div className="container-fluid px-0">
                        <div className='row align-items-center'>
                            <div className='col-6'>
                                <div className="fw-bold text-dark badge-f">{transazione.text}</div>
                                <span id='amount' className={`fw-bold ${transazione.amount < 0 ? 'text-danger' : 'text-success'}`}>{currencyFormatter(transazione.amount)}</span>
                                
                            </div>
                            <div className={`col-${deleteItems ? '4' : '6'} d-flex align-items-end flex-column`}>
                            <span className="badge-f my-auto me-1">{transazione.data}</span>
                            </div>
                            {deleteItems ?
                                <div className={`col-2 d-flex align-items-end flex-column`}>
                                    <span onClick={() => eliminaTransazioni(transazione.id)} className="my-auto text-danger">-</span>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>
                </li>
            ))
            }
        </ul>
    )
}
