import React from "react";
import Sidebar from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders sidebar", () => {
  const sidebar = shallow(<Sidebar />);
  expect(sidebar).toMatchSnapshot();
});
