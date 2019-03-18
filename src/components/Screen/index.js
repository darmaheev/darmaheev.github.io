import React from "react";
import Flash from "../Flash";
import * as styles from "./styles";

const Screen = ({ children, ...restProps }) => (
  <styles.Screen {...restProps}>
    <Flash />
    {children}
  </styles.Screen>
);

export default Screen;
