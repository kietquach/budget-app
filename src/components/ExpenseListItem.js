import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        {amount}, created at: {createdAt}
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);