import React, {useState, useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { AggiungiTransVoce } from './AggiungiTransVoce'
import { useSpeechRecognition } from '../hooks/useSpeechRecognition'

export const AggiungiTransazione = ({isAggiungi, isRimuovi}) => {
    const date = new Date().toISOString().slice(0, 10)
    const dateOra = new Date().toISOString().slice(0, 16).replace('T', ' ')
    const {addTransazione} = useContext(GlobalContext)
    const [formData, setFormData] = useState({
        id: '',
        text: '',
        amount: '',
        data: date
    })
    const [add, setAdd] = useState(true)
    const [error, setError] = useState('')
    const [spinnerLoading, setSpinnerLoading] = useState(false)
    const [speechText, setSpeechText] = useState('')
    const {
        textR,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport
    } = useSpeechRecognition()
    // const [textReg, setTextReg] = useState('')
    // const [amountReg, setAmountReg] = useState('')
    // const [isReg, setIsReg] = useState(false)
    
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


    const submitData = (e) => {
        e.preventDefault()
        validaForm('Inserisci causale')
        setSpinnerLoading(true);

        if(formData.text != "" && formData.amount != ""){
            setTimeout(() => {
                const nuovaTransazione = {
                    ...formData,
                    id: Math.floor(Math.random() * 100000000),
                    amount:  !add ? -formData.amount : +formData.amount
                }
                console.log(nuovaTransazione);
                addTransazione(nuovaTransazione)
                setSpinnerLoading(false);
                formData.text = ''
                formData.amount = ''
                formData.data = date
            }, 1000);           
        } else{
            return
        }
    }

    const spinning =  spinnerLoading ? <span className="spinner-border spinner-border-sm me-3" role="status" aria-hidden="true"></span> : null

    return (
        <>
        <div className='container pip'>
            <div className="row mb-2">
                <div className="col-2 px-0">
                    <button id="aggiungi" onClick={() => toggle('aggiungi')} type="button" className={`btn btn-sm btn-outline-${!add ? "secondary" : "dark"} btn-rounded `} data-mdb-ripple-color="dark">Entrata</button>

                </div>
                <div className="col-2 px-0">
                <button id="rimuovi" onClick={() => toggle('rimuovi')} type="button" className={`btn btn-sm btn-${!add ? "danger" : "outline-secondary"} btn-rounded ms-4`} data-mdb-ripple-color="dark">Spesa</button>
                </div>
            </div>
            <div className="row mt-3">
                <form className="px-0">
                    <div className="form-row">
                        <div className="col">
                            <input id="txtInput" type="text"
                                value={formData.text}
                                onChange={(e) => setFormData({...formData, text: e.target.value})}
                                className="form-control" placeholder={textR != '' ? textR.substring(0, textR.indexOf(' ')) : "Causale"} />
                        </div>
                        <div className='error'>
                            {error}
                        </div>                     
                        <div className="col my-3">
                            <input id="txtCifra" type="text"
                                value={formData.amount}
                                onChange={(e) => setFormData({...formData, amount: e.target.value})}
                                className="form-control" 
                                placeholder={textR != '' ? String(textR.match(/\d+/g)) : "Importo"} />
                        </div>
                        <div className="col my-3">
                            <input id="txtCifra" type="date"
                                value={formData.data}
                                onChange={(e) => setFormData({...formData, data: e.target.value})}
                                className="form-control" placeholder="Data" />
                        </div>
                        <div className='row'>
                        <div className='col-10 pe-0'>
                            <div className="d-grid gap-2">
                                <button id="salva" className="btn btn-outline-dark" type="submit" onClick={submitData}>
                                    {
                                        spinning
                                    }
                                    Aggiungi transazione
                                </button>
                            </div>
                        </div>
                        <div className='col-2'>
                            <AggiungiTransVoce></AggiungiTransVoce>
                        </div> 
                        </div>
                                             
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
