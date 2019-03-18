import React from "react";
import { MemoryRouter } from "react-router-dom";
import SearchList from "./index";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders searchList with default props", () => {
  const pokemonList = [];
  const page = {};
  const changePage = jest.fn();

  const searchList = shallow(
    <SearchList
      pokemonList={pokemonList}
      page={page}
      changePage={changePage}
    />
  );
  expect(searchList).toMatchSnapshot();
});

it("renders searchList with data", () => {
  const pokemonList = [{ id: 1, name: "bulbasaur", sprites: {}}];
  const page = {
    start: 0,
    pageSize: 20,
    total: 1
  };
  const changePage = jest.fn();

  const searchList = mount(
    <MemoryRouter>
      <SearchList
        pokemonList={pokemonList}
        page={page}
        changePage={changePage}
      />
    </MemoryRouter>
  );
  expect(searchList.text()).toContain("bulbasaur");
});

it("without data", () => {
  const pokemonList = [];
  const page = {
    start: 0,
    pageSize: 20,
    total: 0
  };
  const changePage = jest.fn();

  const searchList = mount(
    <MemoryRouter>
      <SearchList
        pokemonList={pokemonList}
        page={page}
        changePage={changePage}
      />
    </MemoryRouter>
  );
  expect(searchList.text()).toContain("Pokemons not found");
});