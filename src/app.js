import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleState from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.subscribe(() => {
    const state = store.getState()
    const visibleState = getVisibleState(state.expenses, state.filters);
    console.log(visibleState);
});

store.dispatch(addExpense({ description: "Water bill", amount: 10000, createdAt: 20000 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 5000, createdAt: 25000 }));
store.dispatch(setTextFilter("gas"));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
