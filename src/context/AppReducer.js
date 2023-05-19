export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            const deleteItem = state.transazioni.filter(transazioni => transazioni.id !== action.payload)
            localStorage.setItem("itemsTrans", JSON.stringify(deleteItem))
            return {
                ...state,
                transazioni: state.transazioni.filter(transazioni => transazioni.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            const tasks = [action.payload, ...state.transazioni]
            localStorage.setItem("itemsTrans", JSON.stringify(tasks))
            return {
                ...state,
                transazioni: [action.payload, ...state.transazioni]
            } 

        default:
            return state
    }
}