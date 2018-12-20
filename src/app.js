import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component.
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component.
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense component.
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help page component.
    </div>
);

const NotFoundPage = () => (
    <div>
        404! <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Budget App</h1>
        <Link to="/">Dashboard</Link> 
        <Link to="/create">Create Expense</Link> 
        <Link to="/edit">Edit Expense</Link> 
        <Link to="/help">Help</Link>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
