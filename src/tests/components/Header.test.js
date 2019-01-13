import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Header from "../../components/Header";

test("Should render Header correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find("h1").text()).toBe("Budget App");
    //expect(wrapper.find("h1").length).toBe(1);
    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header />);
    //expect(renderer.getRenderOutput()).toMatchSnapshot();
});
