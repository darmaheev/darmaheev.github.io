import React from "react";
import * as styles from "./styles";

const Main = ({ children, ...restProps }) => (
  <styles.Main {...restProps}>{children}</styles.Main>
);

export default Main;
