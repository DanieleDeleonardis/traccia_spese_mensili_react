import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transazione } from './Transazione'
import { LastTransazione } from './LastTransazione'




export const ListaTransazioni = ({isAggiungi, isRimuovi}) => {
    const {transazioni} = useContext(GlobalContext)
    const [deleteItems, setDeleteItems] = useState(false)
   
    return (
        <div className='container'>
            <div className='row mb-4 h-75'>
                <div className="card border border-top-0 rounded-0 rounded-bottom mt-2 shadow-sm" data-bs-toggle="modal" data-bs-target="#GFG">
                    <div className="card-body d-flex justify-content-between align-items-start">
                    <span className="badge rounded-pill bg-warning text-dark">Last</span>
                        {
                        <LastTransazione transazioni={transazioni}></LastTransazione>
                        }
                    </div>
                </div>

                <div className="modal fade" id="GFG">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    Ultime transazioni
                                </h5>

                            </div>
                            <div className="modal-body">
                                
                                <Transazione transazioni={transazioni} isAggiungi={isAggiungi} isRimuovi={isRimuovi} deleteItems={deleteItems} />
                                    
                            </div>
                            <div className="modal-footer">
                                <a type="button" className="badge-f me-3 text-decoration-none text-danger" onClick={() => setDeleteItems(!deleteItems)}>Cancella transazioni</a>
                                <button type="button" className="btn btn-sm text-white card-pers btn-outline-dark" onClick={() => setDeleteItems(false)} data-bs-dismiss="modal">Chiudi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
