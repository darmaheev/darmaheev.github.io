import React from "react";
import SearchHeader from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders searchHeader", () => {
  const searchHeader = shallow(<SearchHeader />);
  expect(searchHeader).toMatchSnapshot();
});