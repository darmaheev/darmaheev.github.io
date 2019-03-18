import React from "react";
import Footer from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders footer", () => {
  const footer = shallow(<Footer />);
  expect(footer).toMatchSnapshot();
});