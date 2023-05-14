import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transazione } from './Transazione'
import { LastTransazione } from './LastTransazione'




export const ListaTransazioni = ({isAggiungi, isRimuovi}) => {
    const {transazioni} = useContext(GlobalContext)
    const [deleteItems, setDeleteItems] = useState(false)
   
    return (
        <div className='container'>
            <div className='row my-5 h-75'>
                <button type="button" className="btn btn-primary card-pers" data-bs-toggle="modal" data-bs-target="#GFG">
                    Transazioni
                </button>
                <div className="card border border-0 border-bottom bg-transparent">
                    <div className="card-body d-flex justify-content-between align-items-start">
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
                                <button type="button" className="btn btn-sm text-white card-pers" onClick={() => setDeleteItems(false)} data-bs-dismiss="modal">Chiudi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
