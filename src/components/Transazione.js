import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transazione = ({transazioni, isAggiungi, isRimuovi, deleteItems}) => {
    const {eliminaTransazioni} = useContext(GlobalContext)

    return (
        <ul className="list-group list-group-flush">
            {              
            transazioni.map(transazione => (
                <li key={transazione.id} className="list-group-item d-flex justify-content-between align-items-start ps-0">
                    <div className="container-fluid px-0">
                        <div className='row align-items-center'>
                            <div className='col-6'>
                                <div className="fw-bold">{transazione.text}</div>
                                <div className="badge-f my-auto me-1"><p>{transazione.data}</p></div>
                            </div>
                            <div className={`col-${deleteItems ? '4' : '6'} d-flex align-items-end flex-column`}>
                                <span id='amount' className={`fw-bold ${transazione.amount < 0 ? 'text-danger' : 'text-success'}`}>{`${transazione.amount > 0 ? '+' : ''} ${transazione.amount}`}</span>
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
