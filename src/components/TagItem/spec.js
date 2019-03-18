import React from "react";
import TagItem from "./index";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders tagItem with default props", () => {
  const tagItem = shallow(<TagItem />);
  expect(tagItem).toMatchSnapshot();
});

it("renders tagItem with data", () => {
  const tagItem = shallow(<TagItem>Tag</TagItem>);
  expect(tagItem.text()).toContain("Tag");
});

it("check tagItem on click", () => {
  const handleDelete = jest.fn();

  const tagItem = mount(
    <MemoryRouter>
      <TagItem handleDelete={handleDelete}>Tag</TagItem>;
    </MemoryRouter>
  );
  const deleteControl = tagItem.find("button").at(0);
  deleteControl.simulate("click");
  expect(handleDelete).toHaveBeenCalledWith("Tag");
});
