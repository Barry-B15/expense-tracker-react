// a reducer is where we specify the application state changes in response to certain actions to our context

export default (state, action) => {
    switch (action.type) {

        case 'DELETE_TRANSACTION':
            return {
                // create a new state and send it down using the spread operator
                ...state, // send current state
                transactions: state.transactions.filter(
                        transaction => transaction.id !== action.payload // send all transactions that is not the one just deleted
                    ) // what we want to send
            }

        case 'ADD_TRANSACTION':
            return {
                ...state, // return all existing transactions
                transactions: [action.payload, ...state.transactions] // put the new transaction and all old transactions in an array
            }

        default:
            return state;
    }
}