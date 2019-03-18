import React from "react";
import SearchHeaderFilterModal from "./index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders searchHeaderFilterModal", () => {
  const searchHeaderFilterModal = shallow(<SearchHeaderFilterModal />);
  expect(searchHeaderFilterModal).toMatchSnapshot();
});