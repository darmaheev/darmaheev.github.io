import React from "react";
import Content from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });


it("renders content", () => {
  const content = shallow(<Content>Content</Content>);
  expect(content).toMatchSnapshot();
});
