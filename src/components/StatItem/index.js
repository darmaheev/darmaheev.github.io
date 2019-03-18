import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Label,
  Value
} from "./styles";

const StatItem = ({
  label,
  value
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Wrapper>
  );
};

StatItem.defaultProps = {
  label: "",
  value: 0,
};

StatItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};

export default StatItem;