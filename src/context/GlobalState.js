import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//2. Initial State
const initialState = {
    // we only our transaction where we can do our calculations
    transactions: [
        /* Lastly, we can now delete our initial state
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 } */
    ]
}

//3. Create context
// export cos we r going to use this in other components
export const GlobalContext = createContext(initialState);

//4. Provider Component  //distructuring {  children } are the Components create in App.js
export const GlobalProvider = ({ children }) => {
        // usereducer to access state and dispatch, We will create a separare file Appreducer for this
        const [state, dispatch] = useReducer(AppReducer, initialState);

        // Actions
        // DELETE Transaction
        function deleteTransaction(id) { // the (id) to delete
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        }

        // ADD Transaction
        function addTransaction(transaction) { // the (id) to delete
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }

        return ( < GlobalContext.Provider value = {
                {
                    transactions: state.transactions,
                    deleteTransaction,
                    addTransaction
                }
            } > { children } < /GlobalContext.Provider>);

        }