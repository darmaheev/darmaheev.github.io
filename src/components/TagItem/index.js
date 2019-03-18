import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  DeleteItem
} from "./styles";

const TagItem = ({
  children,
  handleDelete
}) => {
  return (
    <Wrapper>
      {children}
      {typeof handleDelete === "function" && <DeleteItem onClick={() => handleDelete(children)}/>}
    </Wrapper>
  );
};

TagItem.defaultProps = {
  children: "",
  handleDelete: undefined
};

TagItem.propTypes = {
  children: PropTypes.string,
  handleDelete: PropTypes.func
};

export default TagItem;