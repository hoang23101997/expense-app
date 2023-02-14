import React, { useState } from 'react'
import './addNewExpense.css';

function AddNewExpense() {
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");
  const [expenseItems, setExpenseItems] = useState ([
    {
      id: 1,
      title: "Some Books",
      year: "2022",
      month: "January",
      date: "16",
      amount: 50
    },
    {
      id: 2,
      title: "Electricity Bill",
      year: "2022",
      month: "October",
      date: "10",
      amount: 75
    }
  ]);
  const [addExpenseItems, setAddExpenseItems] = useState ([])
  
  let toogleclassNameCheck = show ? "active" : null;
  const onNameChange = (event) => {
    setName(event.target.value)
  }
  const onAmountChange = (event) => {
    setAmount(event.target.value)
  }
  const onDateChange = (event) => {
    setDate(event.target.value)
  }
  const addExpense = (event) => {
    console.log (name, amount, date)
  }
  return (
    <div className="container">
      <div direction="horizontal" gap="2" className="mb-4">
        <h1 className="title">My Expense App</h1>
      </div>
      <button
        className={`btn btn-success ${toogleclassNameCheck}`}
        onClick={() => setShow(!show)}
      >
        Add new expense
      </button>
      {show ? (
        <div className="input-form">
          <div className="mb-3">
            <label className="name">Name</label>
            <input
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter name here ..."
              onChange={onNameChange}
              value={name}
              
            ></input>
          </div>
          <div className="mb-3">
            <label className="name">Amount</label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter amount here ..."
              onChange={onAmountChange}
              value={amount}
              
            ></input>
          </div>
          <div className="mb-3">
            <label className="name">Date</label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={onDateChange}
              value={date}
              
            ></input>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              className="btn btn-success me-md-2"
              type="button"
              onClick={()=> addExpense()}
            >
              Add
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setShow(!show)}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
      <div className="list-container">
        {expenseItems &&
          expenseItems.map((item) => (
            <div key = {item.id}>
              <div className="expense-container">
                <div className="expense-date">
                  <div className="expense-date-month">{item.month}</div>
                  <div className="expense-date-year">{item.year}</div>
                  <div className="expense-date-day">{item.date}</div>
                </div>
                <div className="expense-title"> {item.title}</div>
                <div className="expense-amount">$ {item.amount}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AddNewExpense