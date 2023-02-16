import React, { useState } from "react";
import "./addNewExpense.css";
import Filter from "../filter/filter";
function AddNewExpense(prop) {
  const [show, setShow] = React.useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    amount: 0,
    date: "14 12 2022",
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValue)
    prop.onSubmitNew && prop.onSubmitNew(formValue)
  };
  const handleChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFormValue ({
      ...formValue,
      [fieldName]: value
    })
  };
  const expenseItemsData = [
    {
      id: 1,
      title: "Some Books",
      date: "14-12-2022",
      amount: 50,
    },
    {
      id: 2,
      title: "Electricity Bill",
      date: "10-12-2022",
      amount: 75,
    },
  ]
  const [expenseItems, setExpenseItems] = useState(expenseItemsData);

  const handleExpense = (item) => {
    setExpenseItems([item, ...expenseItems])
   
  }

  let toogleclassNameCheck = show ? "active" : null;

  return (
    <div className="container">
      <div direction="horizontal" gap="2" className="mb-4">
        <h1 className="title">My Expense App</h1>
      </div>
      <button
        className={`btn btn-success ${toogleclassNameCheck}`}
        onClick={() => setShow(true)}
      >
        Add new expense
      </button>
      {show ? (
        <form className="input-form" onSubmitNew ={handleExpense} >
          <div className="mb-3">
            <label className="name">Name</label>
            <input
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter name here ..."
              value={formValue.name}
              onChange ={handleChange}
              name ="name"
            ></input>
          </div>
          <div className="mb-3">
            <label className="name">Amount</label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter amount here ..."
              name = "amount"
              value={formValue.amount}
              onChange ={handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <label className="name">Date</label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              name = "date"
              value={formValue.date}
              onChange ={handleChange}
            ></input>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-success me-md-2" type="submit" onClick={handleSubmit} >
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
        </form>
      ) : null}

      <div className="list-container">
        <div className="filter-container">
          <Filter />
        </div>
        {expenseItems &&
          expenseItems.map((item) => (
            <div key={item.id}>
              <div className="expense-container">
                <div className="expense-date">{item.date}</div>
                <div className="expense-title"> {item.title}</div>
                <div className="expense-amount">$ {item.amount}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AddNewExpense;
