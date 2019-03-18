import React from "react";
import { MemoryRouter } from "react-router-dom";
import StatList from "./index";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders statList with default props", () => {
  const statList = shallow(
    <StatList/>
  );
  expect(statList).toMatchSnapshot();
});

it("renders statList with data", () => {
  const stats = [
    {base_stat: 10, stat:{name: "hp"}},
    {base_stat: 20, stat:{name: "attack"}},
    {base_stat: 30, stat:{name: "special-attack"}},
    {base_stat: 40, stat:{name: "defense"}},
    {base_stat: 50, stat:{name: "special-defense"}}
  ];

  const searchList = mount(
    <MemoryRouter>
      <StatList
        stats={stats}
      />
    </MemoryRouter>
  );
  expect(searchList.text()).toContain("10");
  expect(searchList.text()).toContain("20");
  expect(searchList.text()).toContain("30");
  expect(searchList.text()).toContain("40");
  expect(searchList.text()).toContain("50");
  expect(searchList.text()).toContain("150");
});
