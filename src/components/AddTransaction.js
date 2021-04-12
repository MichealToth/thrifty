import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);

    e.preventDefault();
    console.log(text, amount);
      // clearing the values
      setText("");
      setAmount("");
    
    
  }



  

  return (
    <>
      <h3>Add a Transaction Below</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Income</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="e.g. Salary" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >€<br />
            </label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 2000" />
        </div>
        <button type="submit" onClick={onSubmit} className="btn">Add Income</button>
      </form>
    </>
  )
}

