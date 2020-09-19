import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";


export const AddTransaction = () => {
    // create the states
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    // take the add transaction action
    const { addTransaction } = useContext(GlobalContext);

    // create onSubmit func
    const onSubmit = e => {
        e.preventDefault(); // prevent the default action

        //build a new transaction obj
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000), // generate a random id, we can also use UUID to do this
            text, // will be whatever is in our form which we already def as text at const [text, setText] = useState('');// text: text
            amount: +amount // amount: amount (the + turns it into an integer)
        }

        // call transaction from our context passing in the new transaction
        addTransaction(newTransaction);
    }

    return ( < >

        <
        h3 > Add new transaction < /h3>  <
        form onSubmit = { onSubmit } >
        <
        div className = "form-control" >
        <
        label htmlFor = "text" > Text < /label>   <
        input type = "text"
        value = { text }
        onChange = {
            (e) => setText(e.target.value)
        }
        placeholder = "Enter text..." / >
        <
        /div>  <
        div className = "form-control" >
        <
        label htmlFor = "amount" > Amount < br / > (negative - expense, positive - income) < /label >   <
        input type = "number"
        value = { amount }
        onChange = {
            (e) => setAmount(e.target.value)
        }
        placeholder = "Enter amount..." / >
        <
        /div>

        <
        button className = "btn" > Add transaction < /button>  < /
        form >


        <
        />
    )
}