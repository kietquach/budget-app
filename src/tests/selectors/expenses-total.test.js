import expenses from "../fixtures/expenses";
import getExpensesTotal from "../../selectors/expenses-total";

test("Should return total for 0 expenses", () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test("Should return total for 1 expense", () => {
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
});

test("Should return total for multiple expenses", () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(115195);
});