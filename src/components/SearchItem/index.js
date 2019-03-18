import React from "react";
import PropTypes from "prop-types";

import StatList from "../StatList";
import TagList from "../TagList";
import {
  Wrapper,
  Photo,
  Info,
  Title,
  Text
} from "./styles";

const SearchItem = ({
  pokemon
}) => {
  return (
    <Wrapper>
      <Photo src={pokemon.sprites.front_default}/>
      <Info>
        <Title>{pokemon.name}</Title>
        {pokemon.abilities && Array.isArray(pokemon.abilities) &&
        (<Text>{pokemon.abilities.map(item => item.ability.name).join(", ")}</Text>)}
        {pokemon.types && Array.isArray(pokemon.types) && (
          <TagList tags={pokemon.types.map(item => (item.type.name))}/>
        )}
        {pokemon.stats && Array.isArray(pokemon.stats) && (
          <StatList stats={pokemon.stats}/>
        )}
      </Info>
    </Wrapper>
  );
};

SearchItem.defaultProps = {
  pokemon: {
    sprites: {front_default: ""},
    name: "",
    abilities: [],
    types: [],
    stats: []
  }
};

SearchItem.propTypes = {
  pokemon: PropTypes.shape({
    sprites: PropTypes.shape({
      front_default: PropTypes.string
    }),
    name: PropTypes.string,
    abilities: PropTypes.arrayOf(
      PropTypes.shape({
        ability: PropTypes.shape({
          name: PropTypes.string
        })
      })
    ),
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string
        })
      })
    ),
    stats: PropTypes.arrayOf(PropTypes.shape())
  })
};

export default SearchItem;