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
                {/* <ol onClick={() =>handleClick(!showAllList)} className="list-group list-group-numbered pe-0">
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
                </ol> */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#GFG">
                    Transazioni
                </button>
                <div class="card border border-0">
                    <div class="card-body d-flex justify-content-between align-items-start">
                    <span className="badge-f my-auto me-1">{transazioni[0].text}
                    <span id='amount' className={`ms-2 ${transazioni[0].amount < 0 ? 'text-danger' : 'text-success'}`}>{ `${transazioni[0].amount > 0 ? '+' : ''} ${transazioni[0].amount}`}</span>    
                    </span>
                    <span className="badge-f my-auto me-1">{transazioni[0].data}</span>
                    </div>
                </div>

                <div class="modal fade" id="GFG">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">
                                    Ultime transazioni
                                </h5>

                            </div>
                            <div class="modal-body">
                                <ul class="list-group list-group-flush">
                                {
                                transazioni.map(transazione => (
                                    <>
                                    <Transazione key={transazione.id} transazione={transazione} isAggiungi={isAggiungi} isRimuovi={isRimuovi} />
                                    </>
                                )) 
                                }
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
