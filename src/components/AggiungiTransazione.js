import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AggiungiTransazione = ({isAggiungi, isRimuovi}) => {
    const date = new Date().toISOString().slice(0, 10)
    const dateOra = new Date().toISOString().slice(0, 16).replace('T', ' ')
    const {addTransazione} = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const [data, setData] = useState(dateOra)
    const [add, setAdd] = useState(true)
    const [error, setError] = useState('')
    
    const validaForm = ({messaggio}) => {
        setError(<div className="text-danger">{messaggio}</div>)
    }

    const toggle = (isClick) => {
        if(isClick == 'aggiungi'){
            isAggiungi(true)
            isRimuovi(false)
            setAdd(true)
        }else {
            isRimuovi(true)
            isAggiungi(false)
            setAdd(false)
        }
    }   

    const onSubmit = (e) => {

        e.preventDefault()

        validaForm('Inserisci causale')
        

        if(text != "" && amount != ""){
            const nuovaTransazione = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount:  !add ? -amount : +amount,
                data
            }
            addTransazione(nuovaTransazione)
            setText('')
            setAmount('')
        } else{
            return
        }
    }
    

    return (
        <>
        <div className='container pip'>
            <div className="row mb-2">
                <div className="col-2 px-0">
                    <button id="aggiungi" onClick={() => toggle('aggiungi')} type="button" className={`btn btn-sm btn-outline-${!add ? "secondary" : "dark"} btn-rounded `} data-mdb-ripple-color="dark">Entrata</button>

                </div>
                <div className="col-2 px-0">
                <button id="rimuovi" onClick={() => toggle('rimuovi')} type="button" className={`btn btn-sm btn-outline-${!add ? "danger" : "secondary"} btn-rounded ms-4`} data-mdb-ripple-color="dark">Spesa</button>
                </div>
            </div>
            <div className="row mt-3">
                <form onSubmit={onSubmit} className="px-0">
                    <div className="form-row">
                        <div className="col">
                            <input id="txtInput" type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="form-control" placeholder="Causale" />
                        </div>
                        <div className='error'>
                            {error}
                        </div>                     
                        <div className="col my-3">
                            <input id="txtCifra" type="text"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="form-control" placeholder="Importo" />
                        </div>
                        <div className="col my-3">
                            <input id="txtCifra" type="date"
                                defaultValue={date}
                                onChange={(e) => setData(e.target.value)}
                                className="form-control" placeholder="Data" />
                        </div>
                        <div className="d-grid gap-2">
                            <button id="salva" className="btn btn-outline-dark" type="submit">Aggiungi transazione</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
