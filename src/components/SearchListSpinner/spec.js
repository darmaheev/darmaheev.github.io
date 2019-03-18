import React from "react";
import SearchListSpinner from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders searchListSpinner", () => {
  const searchListSpinner = shallow(<SearchListSpinner />);
  expect(searchListSpinner).toMatchSnapshot();
});