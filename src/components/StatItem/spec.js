import React from "react";
import StatItem from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders with default props", () => {
  const statItem = shallow(<StatItem />);
  expect(statItem).toMatchSnapshot();
});

it("renders with data", () => {
  const label = "HP";
  const value = 100;

  const statItem = shallow(<StatItem label={label} value={value}/>);
  expect(statItem.text()).toContain("HP");
  expect(statItem.text()).toContain("100");
});
