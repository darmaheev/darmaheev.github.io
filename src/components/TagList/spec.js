import React from "react";
import { MemoryRouter } from "react-router-dom";
import TagList from "./index";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders tagList with default props", () => {
  const tagList = shallow(
    <TagList/>
  );
  expect(tagList).toMatchSnapshot();
});

it("renders tagList with data", () => {
  const tags = ["tag1", "tag2"];

  const tagList = mount(
    <MemoryRouter>
      <TagList
        tags={tags}
      />
    </MemoryRouter>
  );
  expect(tagList.text()).toContain("tag1");
  expect(tagList.text()).toContain("tag2");
});

it("check tagList on click", () => {
  const tags = ["tag1", "tag2"];
  const handleDelete = jest.fn();

  const tagList = mount(
    <MemoryRouter>
      <TagList
        tags={tags}
        handleDelete={handleDelete}
      />
    </MemoryRouter>
  );
  const deleteControl = tagList.find("button").at(1);
  deleteControl.simulate("click");
  expect(handleDelete).toHaveBeenCalledWith("tag2");
});

