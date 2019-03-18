import React from "react";
import Pagination from "./index";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders pagination", () => {
  const onPageClickHandler = jest.fn();
  const pagination = shallow(<Pagination onPageClick={onPageClickHandler} />);
  expect(pagination).toMatchSnapshot();
});

it("renders pagination with correct props", () => {
  const onPageClickHandler = jest.fn();
  const pagination = shallow(
    <Pagination
      currentpage={2}
      total={100}
      pageSize={50}
      onPageClick={onPageClickHandler}
    />
  );
  expect(pagination).toMatchSnapshot();
});

it("should invoke onPageClick handler with correct start value", () => {
  const onPageClickHandler = jest.fn();
  const pagination = mount(
    <Pagination
      currentpage={2}
      total={100}
      pageSize={50}
      onPageClick={onPageClickHandler}
    />
  );
  const paginationControl = pagination.find("button").at(1);
  paginationControl.simulate("click");
  expect(onPageClickHandler).toHaveBeenCalledWith({start: 51, pageSize: 50, total: 100});
});
