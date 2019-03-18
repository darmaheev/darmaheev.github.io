import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";

const Button = ({ children, ...restProps }) => (
  <styles.Button {...restProps}>{children}</styles.Button>
);

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;
