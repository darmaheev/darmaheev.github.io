import React from "react";
import * as styles from "./styles";

const Content = ({ children, ...restProps }) => (
  <styles.Content {...restProps}>{children}</styles.Content>
);

export default Content;
