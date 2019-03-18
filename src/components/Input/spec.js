import React from "react";
import Input from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders input", () => {
  const input = shallow(<Input />);
  expect(input).toMatchSnapshot();
});
