import React from "react";
import Screen from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders screen", () => {
  const screen = shallow(<Screen />);
  expect(screen).toMatchSnapshot();
});
