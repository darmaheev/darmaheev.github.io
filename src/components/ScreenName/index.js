import React from "react";
import * as styles from "./styles";

const ScreenName = ({ children, ...restProps }) => (
  <styles.Name {...restProps}>
    <styles.Text>
      {children}
    </styles.Text>
  </styles.Name>
);

export default ScreenName;
