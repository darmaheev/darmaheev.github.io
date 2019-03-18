import React from "react";
import Spinner from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders spinner", () => {
  const spinner = shallow(<Spinner />);
  expect(spinner).toMatchSnapshot();
});
