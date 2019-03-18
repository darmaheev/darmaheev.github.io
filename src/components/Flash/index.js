import React from "react";
import * as styles from "./styles";

const Flash = ({ flash, actions }) => {
  if (!flash) return null;
  const {
    type,
    autoHide,
    isVisible,
    message
  } = flash;

  return (
    <styles.Flash
      type={type}
      autoHide={autoHide}
      isVisible={isVisible}>
      <styles.Message>{message}</styles.Message>

      <styles.Controls>
        {!autoHide && (
          <styles.Control small onClick={actions.hideFlash}>
            &times;
          </styles.Control>
        )}
      </styles.Controls>
    </styles.Flash>
  );
};

export default Flash;