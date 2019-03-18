import React from "react";
import MainHeader from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders mainHeader", () => {
  const mainHeader = shallow(<MainHeader>MainHeader</MainHeader>);
  expect(mainHeader).toMatchSnapshot();
});
