import React from "react";
import PropTypes from "prop-types";

import {STAT_LIST} from "../../constants/common";
import StatItem from "../StatItem";
import {
  Wrapper
} from "./styles";

const initialSumValue = 0;

const StatList = ({
  stats
}) => (
  <Wrapper>
    {Object.keys(STAT_LIST).map(stat => (<StatItem key={STAT_LIST[stat].value} label={STAT_LIST[stat].label}
      value={stats.find(pS => pS.stat.name === STAT_LIST[stat].value).base_stat}/>))}
    <StatItem label={"Total"} value={stats.reduce((acum, stat) => (acum + stat.base_stat), initialSumValue)}/>
  </Wrapper>
);


StatList.defaultProps = {
  stats: [
    {base_stat: 0, stat: {name: "hp"}},
    {base_stat: 0, stat: {name: "attack"}},
    {base_stat: 0, stat: {name: "special-attack"}},
    {base_stat: 0, stat: {name: "defense"}},
    {base_stat: 0, stat: {name: "special-defense"}}
  ]
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    base_stat: PropTypes.number,
    stat: PropTypes.shape({
      name: PropTypes.string
    })
  }))
};

export default StatList;