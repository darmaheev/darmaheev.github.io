import React from "react";
import Topbar from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders topbar", () => {
  const topbar = shallow(<Topbar />);
  expect(topbar).toMatchSnapshot();
});
