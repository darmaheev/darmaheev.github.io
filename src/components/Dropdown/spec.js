import React from "react";
import Dropdown from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders dropdown", () => {
  const dropdown = shallow(<Dropdown />);
  expect(dropdown).toMatchSnapshot();
});