import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Should setup default filter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("Should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test("Should set sortBy to date", () => {
    const currentState = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: "SORT_BY_DATE" };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe("date");
});

test("Should set text filter", () => {
    const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "rent" });
    expect(state.text).toBe("rent");
});

test("Should set start date filter", () => {
    const state = filtersReducer(undefined, { type: "SET_START_DATE", startDate: moment(0) });
    expect(state.startDate).toEqual(moment(0));
});

test("Should set end date filter", () => {
    const state = filtersReducer(undefined, { type: "SET_END_DATE", endDate: moment(0) });
    expect(state.endDate).toEqual(moment(0));
});