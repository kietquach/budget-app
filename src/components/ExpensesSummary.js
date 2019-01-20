import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {

    return (
        <div>
            <h1>Viewing {expensesCount} {expensesCount === 1 ? "expense" : "expenses"} totalling {numeral(expensesTotal / 100).format("$0,0.00")}</h1>
        </div>
    );
};

const mapStatetoProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount: expenses.length,
        expensesTotal: getExpensesTotal(expenses)
    };
};

export default connect(mapStatetoProps)(ExpensesSummary);