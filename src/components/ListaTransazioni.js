import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transazione } from './Transazione'

export const ListaTransazioni = ({isAggiungi, isRimuovi}) => {
    const {transazioni} = useContext(GlobalContext)
    const [showAllList, setShowAllList] = useState(false)

    const handleClick = (show) => {
        showAllList === true ? setShowAllList(false) : setShowAllList(true)
    }

    
    return (
        <div className='container'>
            <div className='row my-5 h-75'>
                <ol onClick={() =>handleClick(!showAllList)} className="list-group list-group-numbered pe-0">
                {
                transazioni.length > 0 
                ?
                !showAllList 
                ?
                <Transazione key={transazioni[0].id} transazione={transazioni[0]} isAggiungi={isAggiungi} isRimuovi={isRimuovi} /> 
                :
                transazioni.map(transazione => (
                    <>
                    <Transazione key={transazione.id} transazione={transazione} isAggiungi={isAggiungi} isRimuovi={isRimuovi} />
                    <span className="my-1" />
                    </>
                )) 
                :
                null
                }
                </ol>
            </div>
        </div>
    )
}
