import React from "react";
import Spinner from "react-spinkit";
import * as styles from "./styles";

export default (props) => (
  <styles.Spinner {...props}>
    <Spinner name="pulse" {...props} />
  </styles.Spinner>
);
