import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddExpense = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addExpense } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newExpense = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: -amount
    }

    addExpense(newExpense);

    e.preventDefault();
    console.log(text, amount);
      // clearing the values
      setText("");
      setAmount("");
    

  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Expense</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="e.g. Groceries" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >€ <br />
            </label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 100" />
        </div>
        <button type="submit" onClick={onSubmit} className="btn-expense">Add Expense</button>
      </form>
    </>
  )
}
