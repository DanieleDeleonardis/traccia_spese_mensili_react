import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'


const getTransazioniStor = localStorage.getItem('itemsTrans')
if(!getTransazioniStor){
    localStorage.setItem('itemsTrans', null)
}

//stato iniziale
const statoIniziale = {
    transazioni:
        getTransazioniStor ? JSON.parse(getTransazioniStor) : []
        // {id: 1, text: 'Bonifico stipendio', amount: + 1400, data: new Date().toISOString().slice(0, 10)},
        // {id: 2, text: 'Fiori', amount: -20, data: new Date().toISOString().slice(0, 10)},
        // {id: 3, text: 'Sara', amount: +100},
        // {id: 4, text: 'Altro', amount: -20}
}

//creazione context
export const GlobalContext = createContext(statoIniziale)

//provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, statoIniziale)

    //azioni
    const eliminaTransazioni = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransazione(transazione){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transazione
        })
    }
    
    return (
    <GlobalContext.Provider 
    value={{ transazioni: state.transazioni, eliminaTransazioni, addTransazione}}>
        {children}
    </GlobalContext.Provider>
    )
}
