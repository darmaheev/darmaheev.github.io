import React from "react";
import PropTypes from "prop-types";
import SearchItem from "../SearchItem";
import Pagination from "../Pagination";
import {
  Wrapper,
  List,
  NotFound,
} from "./styles";

const SearchList = ({
  pokemonList,
  page,
  changePage,
  ...restProps
}) => (
  <Wrapper>
    <List>
      {pokemonList && Array.isArray(pokemonList) && pokemonList.map(pokemon => (
        <SearchItem key={pokemon.id} {...restProps} pokemon={pokemon}/>))}

    </List>
    {pokemonList.length > 1 && (
      <Pagination
        total={page.total}
        pageSize={page.pageSize}
        start={page.start}
        onPageClick={changePage}
        withPages
        withPageSize
      />
    )}
    {pokemonList.length === 0 && (
      <NotFound>
        Pokemons not found
      </NotFound>
    )}
  </Wrapper>
);

SearchList.defaultProps = {
  pokemonList: [],
  page: {
    start: 0,
    pageSize: 0,
    total: 0
  }
};

SearchList.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number
  })),
  page: PropTypes.shape({
    start: PropTypes.number,
    pageSize: PropTypes.number,
    total: PropTypes.number
  })
};

export default SearchList;
