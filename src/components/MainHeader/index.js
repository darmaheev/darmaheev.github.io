import React from "react";
import * as styles from "./styles";

const MainHeader = ({ children, ...restProps }) => (
  <styles.Header {...restProps}>
    {children}
  </styles.Header>
);

export default MainHeader;
