import React from "react";
import ScreenName from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders screenName", () => {
  const screenName = shallow(<ScreenName>Screen</ScreenName>);
  expect(screenName).toMatchSnapshot();
});
