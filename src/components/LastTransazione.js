import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { currencyFormatter } from '../hooks/currencyFormatter'

export const LastTransazione = ({transazioni}) => {
    // const {transazioni} = useContext(GlobalContext)
    if(!transazioni[0]){
        return
    }

    return (
        <>
            <span className="badge-f my-auto me-1">{transazioni[0].text}
                <span id='amount' className={`ms-2 ${transazioni[0].amount < 0 ? 'text-danger' : 'text-success'}`}>{currencyFormatter(transazioni[0].amount)}</span>
            </span>
            <span className="badge-f my-auto me-1">{transazioni[0].data}</span>
        </>
    )
}