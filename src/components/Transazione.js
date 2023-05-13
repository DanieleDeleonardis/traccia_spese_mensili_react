import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transazione = ({transazione, isAggiungi, isRimuovi}) => {
    const {eliminaTransazioni} = useContext(GlobalContext)

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start ps-0">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{transazione.text}</div>
                <span id='amount' className={`fw-bold ${transazione.amount < 0 ? 'text-danger' : 'text-success'}`}>{ `${transazione.amount > 0 ? '+' : ''} ${transazione.amount}`}</span>
                <div className="badge-f my-auto me-1"><p>{transazione.data}</p></div>
            </div>
            <span onClick={() => eliminaTransazioni(transazione.id)} className="my-auto text-danger">-</span>

        </li>
    )
}
