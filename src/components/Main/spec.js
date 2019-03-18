import React from "react";
import Main from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders main", () => {
  const main = shallow(<Main />);
  expect(main).toMatchSnapshot();
});