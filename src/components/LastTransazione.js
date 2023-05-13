import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const LastTransazione = ({transazioni}) => {
    // const {transazioni} = useContext(GlobalContext)
    if(!transazioni[0]){
        return
    }

    return (
        <>
            <span className="badge-f my-auto me-1">{transazioni[0].text}
                <span id='amount' className={`ms-2 ${transazioni[0].amount < 0 ? 'text-danger' : 'text-success'}`}>{`${transazioni[0].amount > 0 ? '+' : ''} ${transazioni[0].amount}`}</span>
            </span>
            <span className="badge-f my-auto me-1">{transazioni[0].data}</span>
        </>
    )
}