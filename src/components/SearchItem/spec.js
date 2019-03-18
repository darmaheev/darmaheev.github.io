import React from "react";
import { MemoryRouter } from "react-router-dom";
import SearchItem from "./index";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders searchItem with default props", () => {
  const searchItem = shallow(<SearchItem />);
  expect(searchItem).toMatchSnapshot();
});

it("renders searchItem with data", () => {
  const pokemon = { id: 1, name: "bulbasaur", sprites: {}};

  const searchItem = mount(
    <MemoryRouter>
      <SearchItem
        pokemon={pokemon}
      />
    </MemoryRouter>
  );
  expect(searchItem.text()).toContain("bulbasaur");
});