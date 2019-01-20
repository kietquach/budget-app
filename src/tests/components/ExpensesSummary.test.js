import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("Should render ExpensesSummary correctly", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={115195}/>);
    expect(wrapper).toMatchSnapshot();
});

test("Should render ExpensesSummary with 1 expense corrextly", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={195}/>);
    expect(wrapper).toMatchSnapshot();
});