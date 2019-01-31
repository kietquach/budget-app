import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expensesCount === 1 ? "expense" : "expenses"} totalling <span>{numeral(expensesTotal / 100).format("$0,0.00")}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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