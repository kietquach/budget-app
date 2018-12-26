import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses"

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            //call onSubmit in ExpenseForm to pass in data to AddExpensePage because we want ExpenseForm to be reusable
            props.dispatch(addExpense(expense));
            props.history.push("/");
        }}/>
    </div>
);

export default connect()(AddExpensePage);