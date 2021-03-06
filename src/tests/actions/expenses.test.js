import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const uid = "testuid";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

//set up firebase data
beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expensesData[id] = { description, amount, note, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test("Should setup remove expense action object", () => {
    const action = removeExpense({id: "123abc"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("Should setup edit expense action object", () => {
    const action = editExpense("123abc", {note: "New note value"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {note: "New note value"}
    });
});

test("Should setup add expense action object with provided values", () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[0]
    });
});

test("Should add expense to database and store", (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: "Mouse",
        amount: 3000,
        note: "",
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test("Should add expense with defaults to database and store", (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test("Should setup set expense action object with data", () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    });
});

test("Should fetch the expenses from firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
        done();
    });
});

test("Should remove expense with given id", (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startRemoveExpense({ id: expenses[0].id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id: expenses[0].id
        });

        return database.ref(`users/${uid}expenses/${actions[0].id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(null);
        done();
    });
});

test("Should update expense with given id", (done) => {
    const store = createMockStore(defaultAuthState);

    const id = expenses[0].id;
    const updates = {
        description: "Updated description",
        note: "Updated notes"
    };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        });

        return database.ref(`users/${uid}/expenses/${id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            description: updates.description,
            note: updates.note,
            amount: expenses[0].amount,
            createdAt: expenses[0].createdAt
        });
        
        done()
    });
});